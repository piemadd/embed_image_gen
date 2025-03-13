import fs from 'node:fs';
import Fastify from 'fastify'
import { transitstatus_agencies } from './feeds.js';
import mbgl from '@maplibre/maplibre-gl-native';
import sharp from 'sharp';
import mapsStyle from './mapStyle.js';

//setting up server
const fastify = Fastify({
  logger: false
});

let downloadedShapes = {};

const renderImage = (map, width, height, zoom, lon, lat, bearing, pitch) => {
  return new Promise((resolve, reject) => {
    map.render({
      zoom: parseFloat(zoom ?? 0),
      width: Math.min(parseInt(width && width > 0 ? width : 512), 8192),
      height: Math.min(parseInt(height && height > 0 ? height : 512), 8192),
      center: [parseFloat(lon ?? 0), parseFloat(lat ?? 0)],
      bearing: parseFloat(bearing ?? 0),
      pitch: parseFloat(pitch ?? 0),
    }, function (err, buffer) {
      if (err) reject(err);

      const imagePNG = sharp(buffer, {
        raw: {
          width: Math.min(parseInt(width && width > 0 ? width : 512), 8192),
          height: Math.min(parseInt(height && height > 0 ? height : 512), 8192),
          channels: 4
        }
      }).png().toBuffer();

      resolve(imagePNG);
    });
  });
};

let templates = {};
const templatesToImport = fs.readdirSync('./svg_templates');
templatesToImport.forEach((templateName) => {
  const templateID = templateName.split('.')[0];
  const data = fs.readFileSync(`./svg_templates/${templateName}`, { encoding: 'utf8' });

  templates[templateID] = data;
});

const addIcon = async (fill, border, arrow = true) => {
  if (map.hasImage(`${fill}_${border}`)) return; //already exists

  const iconSVG = templates[arrow ? 'arrow' : 'circle'].replaceAll("FILL", `#${fill}`).replaceAll("BORDERS", `#${border}`);
  const iconBuffer = Buffer.from(iconSVG, 'utf8');

  const iconPNG = await sharp(iconBuffer)
    .resize(120, 120)
    .png()
    .toBuffer();

  map.addImage(`${fill}_${border}`, `data:image/png;base64,${iconPNG.toString('base64')}`);
};

//adding the geojson lines
const addLines = async (map, feed, lineID = null) => {
  if (!downloadedShapes[feed]) { // we need to load everything 

    const mapShapesData = await Promise.all(transitstatus_agencies[feed].mapShapes.map(url => fetch(url).then(res => res.json())));
    downloadedShapes[feed] = mapShapesData.flatMap((featureCollection) => featureCollection.features);
  };

  map.addSource(`${feed}_shapes`, {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: downloadedShapes[feed].filter((feature) => {
        if (feed.dontFilterMapLines || !lineID) return true;
        if (feature.properties.routeID === lineID) return true;
        if (feature.properties.routeLongName === lineID) return true;
        return false;
      })
    },
  });

  map.addLayer({
    id: `${feed}-shapes-under`,
    type: "line",
    source: `${feed}_shapes`,
    layout: {
      "line-join": "round",
      "line-cap": "round",
      "line-round-limit": 0.1,
    },
    paint: {
      "line-color": "#222222",
      "line-opacity": 1,
      "line-width": 4,
    },
  });

  map.addLayer({
    id: `${feed}-shapes`,
    type: "line",
    source: `${feed}_shapes`,
    layout: {
      "line-join": "round",
      "line-cap": "round",
      "line-round-limit": 0.1,
    },
    paint: {
      "line-color": ["get", "routeColor"],
      "line-opacity": 1,
      "line-width": 2,
    },
  });
};

fastify.get('/', (async (req, reply) => {
  reply.send(':3')
}));

fastify.get('/images', (async (req, reply) => {
  //setting up map
  const map = new mbgl.Map();
  map.load({
    zoom: 0,
    pitch: 0,
    center: [41.884579601743276, -87.6279871036212],
    glyphs: mapsStyle.glyphs,
    sprite: mapsStyle.sprite,
    layers: mapsStyle.layers,
    bearing: 0,
    sources: {
      protomaps: {
        type: "vector",
        tiles: [
          "https://v4mapa.amtraker.com/20250127/{z}/{x}/{y}.mvt",
          "https://v4mapb.amtraker.com/20250127/{z}/{x}/{y}.mvt",
          "https://v4mapc.amtraker.com/20250127/{z}/{x}/{y}.mvt",
          "https://v4mapd.amtraker.com/20250127/{z}/{x}/{y}.mvt",
        ],
        maxzoom: 15,
        attribution:
          "Map Data &copy; OpenStreetMap Contributors | &copy; Transitstatus | &copy; Protomaps",
      },
    },
    version: 8,
    metadata: {},
  });

  if (req.query.service == 'transitstatus') {
    const feed = req.query.agency ? transitstatus_agencies[req.query.agency] : null;

    if (!feed) {
      reply.status(418);
      reply.send('Invalid \'agency\' provided.');
      return;
    }

    let icons = [];
    let stations = [];

    let finalSVG = templates['transitstatus'];

    await addLines(map, req.query.agency);

    const transitstatusImage = await renderImage(
      map, // map object
      780, // width
      630, // height
      feed.mapDefault[2], // zoom
      feed.mapDefault[1], // lon
      feed.mapDefault[0], // lat
      0, //bearing
      0, //pitch
    );

    //adding map image
    finalSVG = finalSVG.replace(
      'IMAGE_GEN_REPLACE_map_image',
      `data:image/png;base64,${transitstatusImage.toString('base64')}`
    );
    finalSVG = finalSVG.replace('IMAGE_GEN_REPLACE_train_title', req.query.runNumber ?? 'Trip Not Found :c');
    finalSVG = finalSVG.replace('IMAGE_GEN_REPLACE_train_text_color', '#000000');
    finalSVG = finalSVG.replace('IMAGE_GEN_REPLACE_train_color', '#FE8D81');

    const svgImage = await sharp(Buffer.from(finalSVG))
      .png()
      .toBuffer();

    //removing layers
    map.removeLayer(`${feed}-shapes-under`);
    map.removeLayer(`${feed}-shapes`);
    map.removeLayer(`${feed}-icons`);
    map.removeLayer(`${feed}-stations`);

    //setting headers and returning image
    reply.header('Content-Type', 'image/png');
    reply.header('Pragma', 'public');
    reply.header('Cache-Control', 'max-age=86400');
    reply.send(svgImage);
    return;

  }

  if (req.query.service == 'amtraker') {
    const markerType = req.query.type;
    const markerID = req.query.code;

    if (!markerType || !markerID) {
      reply.status(418);
      reply.send('Missig \'type\' and/or \'code\'.');
      return;
    }

    let finalSVG = templates['amtraker'];

    map.addSource('transit_lines', {
      type: 'vector',
      tiles: [
        "https://v4mapa.amtraker.com/amtraker/{z}/{x}/{y}.mvt",
        "https://v4mapb.amtraker.com/amtraker/{z}/{x}/{y}.mvt",
        "https://v4mapc.amtraker.com/amtraker/{z}/{x}/{y}.mvt",
        "https://v4mapd.amtraker.com/amtraker/{z}/{x}/{y}.mvt"
      ],
      maxzoom: 12,
    });

    let mapLat = 0;
    let mapLon = 0;
    let mapZoom = 0;
    let itemData = {};

    if (markerType == 'station') {
      const stationRes = await fetch(`https://api.amtraker.com/v3/stations/${markerID}`);
      const stationData = await stationRes.json();

      if (Array.isArray(stationData) && stationData.length == 0) {
        reply.status(418);
        reply.send('Invalid station \'code\' provided.');
        return;
      }

      mapLat = stationData[markerID].lat;
      mapLon = stationData[markerID].lon;
      mapZoom = 12;
    }

    if (markerType == 'train') {
      const trainRes = await fetch(`https://api.amtraker.com/v3/trains/${markerID}`);
      const trainData = await trainRes.json();

      const trainNum = markerID.split('-')[0];

      if (Array.isArray(trainData) && trainData.length == 0) {
        reply.status(418);
        reply.send('Invalid train \'code\' provided.');
        return;
      }

      const actualTrainData = trainData[trainNum].find((train) => {
        if (train.trainNum == markerID) return true; // if we haven't specified a certain id, tho we probably will
        if (train.trainID == markerID) return true;
        return false;
      });

      if (!actualTrainData) {
        reply.status(418);
        reply.send('No such train is tracking or there was an error fetching the train data.');
        return;
      }

      itemData = actualTrainData;

      mapLat = actualTrainData.lat;
      mapLon = actualTrainData.lon;
      mapZoom = 6;
    }

    const transitstatusImage = await renderImage(
      map, // map object
      1200, // width
      630, // height
      mapZoom, // zoom
      mapLon, // lon
      mapLat, // lat
      0, //bearing
      0, //pitch
    );

    let iconSVG = '';

    if (markerType == 'station') {
      iconSVG = `<circle cx="600" cy="315" r="8" stroke="black" stroke-width="2" fill="white" />
    <text id="station_code" fill="white" xml:space="preserve"
      style="white-space: pre"
      font-family="monospace" font-size="36" font-weight="bold" dominant-baseline="middle"
      text-anchor="middle"
      letter-spacing="0em" x="600" y="360">${markerID}</text>
    <text id="station_code_outline" fill="white" xml:space="preserve"
      style="white-space: pre;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;"
      font-family="monospace" font-size="36" font-weight="bold" dominant-baseline="middle"
      text-anchor="middle"
      letter-spacing="0em" x="600" y="360">${markerID}</text>`
    }

    if (markerType == 'train') {
      const calculatedWidth =
        72 + // first letter length + parenthesis (24px per character)
        itemData.trainNumRaw.toString().length * 36 + // train number length
        itemData.trainID.split('-')[1].length * 24 + // train date length (second part of id),
        40 // extra padding

      iconSVG = `
        <g transform="scale(0.25) translate(${(680 - (calculatedWidth / 2)) * 4},${(315 - 12) * 4})">
          <rect
            x='0'
            y='0'
            width='${calculatedWidth}'
            height='96'
            rx='16'
            fill='black'
          />
          <rect
            x='8'
            y='8'
            width='${calculatedWidth - 16}'
            height='80'
            rx='10'
            fill='${itemData.iconColor}'
          />
          <text x="${calculatedWidth / 2}" y="68" fill="white" xml:space="preserve" style="white-space: pre" font-family="monospace" font-size="60" letter-spacing="0em" text-anchor="middle"><tspan font-size="40">${itemData.providerShort.substring(0, 1)}</tspan>${itemData.trainNumRaw}<tspan font-size="40">(${itemData.trainID.split('-')[1]})</tspan></text>
          </g>`
    }

    //adding map image
    finalSVG = finalSVG.replace(
      'IMAGE_GEN_REPLACE_map_image',
      `data:image/png;base64,${transitstatusImage.toString('base64')}`
    );
    finalSVG = finalSVG.replaceAll('IMAGE_GEN_REPLACE_icon', iconSVG);

    const svgImage = await sharp(Buffer.from(finalSVG))
      .png()
      .toBuffer();

    //setting headers and returning image
    reply.header('Content-Type', 'image/png');
    reply.header('Pragma', 'public');
    reply.header('Cache-Control', 'max-age=86400');
    reply.send(svgImage);
    return;

  }

  if (req.query.service == 'arbitrary') {
    const arbitraryImage = await renderImage(
      map,
      req.query.width,
      req.query.height,
      req.query.zoom,
      req.query.lon,
      req.query.lat,
      req.query.bearing,
      req.query.pitch,
    );

    //setting headers and returning image
    reply.header('Content-Type', 'image/png');
    reply.header('Pragma', 'public');
    reply.header('Cache-Control', 'max-age=86400');
    reply.send(arbitraryImage);
    return;
  }
  reply.status(418);
  reply.send('Invalid \'service\' provided.');
  return;
}));

// Run the server!
fastify.listen({ port: process.env.PORT ?? 3000, host: process.env.hostname ?? '0.0.0.0' }, function (err, address) {
  if (err) {
    throw err;
    process.exit(1)
  }
  // Server is now listening on ${address}
});