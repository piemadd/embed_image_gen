import fs from 'node:fs';

import Fastify from 'fastify'
import { transitstatus_agencies } from './feeds.js';

import {
  getRenderedFromCoordsBuffer
} from 'chiitiler';

import sharp from 'sharp';
import layers from './mapStyle.js';

const fullMapStyle = {
  zoom: 0,
  pitch: 0,
  center: [41.884579601743276, -87.6279871036212],
  glyphs:
    "https://fonts.transitstat.us/_output/{fontstack}/{range}.pbf",
  sprite: "https://osml.transitstat.us/sprites/osm-liberty",
  layers: layers,
  bearing: 0,
  sources: {
    protomaps: {
      type: "vector",
      tiles: [
        "https://tilea.transitstat.us/tiles/{z}/{x}/{y}.mvt",
        "https://tileb.transitstat.us/tiles/{z}/{x}/{y}.mvt",
        "https://tilec.transitstat.us/tiles/{z}/{x}/{y}.mvt",
        "https://tiled.transitstat.us/tiles/{z}/{x}/{y}.mvt",
      ],
      maxzoom: 15,
      attribution:
        "Map Data &copy; OpenStreetMap Contributors | &copy; Transitstatus | &copy; Protomaps",
    },
  },
  version: 8,
  metadata: {},
};

//setting up server
const fastify = Fastify({
  logger: false
});

let templates = {};
const templatesToImport = fs.readdirSync('./svg_templates');
templatesToImport.forEach((templateName) => {
  const templateID = templateName.split('.')[0];
  const data = fs.readFileSync(`./svg_templates/${templateName}`, { encoding: 'utf8' });

  templates[templateID] = data;
})

fastify.get('/', (async (req, reply) => {
  reply.send(':3')
}));

fastify.get('/images', (async (req, reply) => {
  switch (req.query.service) {
    case 'transitstatus':
      const finalSVG = templates['transitstatus'];

      break;
    case 'arbitrary':
      const image = await getRenderedFromCoordsBuffer({
        stylejson: fullMapStyle,
        center: [parseFloat(req.query.lon ?? 0), parseFloat(req.query.lat ?? 0)],
        zoom: parseFloat(req.query.zoom ?? 0),
        width: Math.min(parseInt(req.query.width && req.query.width > 0 ? req.query.width : 512), 8192),
        height: Math.min(parseInt(req.query.height && req.query.height > 0 ? req.query.height : 512), 8192),
        //cache: s3Cache,
        ext: req.query.format ?? 'png',
        quality: req.query.quality ?? 80,
      });

      //setting headers
      reply.header('Content-Type', 'image/png');
      reply.header('Pragma', 'public');
      reply.header('Cache-Control', 'max-age=86400');
      reply.send(image);

      break;
    default:
      reply.status(418);
      reply.send('Invalid \'service\' provided.');
  }

  reply.send('Hello world!')
}));

// Run the server!
fastify.listen({ port: process.env.PORT ?? 3000, host: process.env.hostname ?? '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})