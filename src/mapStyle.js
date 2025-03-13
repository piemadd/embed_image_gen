const mapsStyle = {
  "version": 8,
  "metadata": {
    "maputnik:renderer": "mlgljs"
  },
  "sources": {
    "protomaps": {
      "type": "vector",
      "url": "https://v4map.amtraker.com/20250127.json"
    }
  },
  "sprite": "https://basemaps-assets.amtraker.com/sprites/v4/dark",
  "glyphs": "https://basemaps-assets.amtraker.com/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "rgba(41, 50, 68, 1)"
      }
    },
    {
      "id": "earth",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "earth",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "paint": {
        "fill-color": "rgba(53, 128, 86, 1)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landcover",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landcover",
      "paint": {
        "fill-color": "rgba(50, 123, 83, 1)",
        "fill-opacity": 1
      }
    },
    {
      "id": "landcover_park",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landcover",
      "filter": [
        "in",
        "kind",
        "national_park",
        "park",
        "cemetery",
        "protected_area",
        "nature_reserve",
        "forest",
        "golf_course",
        "wood",
        "nature_reserve",
        "forest",
        "scrub",
        "grassland",
        "grass",
        "military",
        "naval_base",
        "airfield",
        "farmland",
        "grassland",
        "scrub"
      ],
      "paint": {
        "fill-color": "rgba(57, 136, 84, 1)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_park",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "in",
        "kind",
        "national_park",
        "park",
        "cemetery",
        "protected_area",
        "nature_reserve",
        "forest",
        "golf_course",
        "wood",
        "nature_reserve",
        "forest",
        "scrub",
        "grassland",
        "grass",
        "military",
        "naval_base",
        "airfield",
        "farmland",
        "grassland",
        "scrub"
      ],
      "paint": {
        "fill-color": "rgba(53, 144, 83, 1)",
        "fill-opacity": 0.9
      }
    },
    {
      "id": "landuse_urban_green",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "in",
        "kind",
        "allotments",
        "village_green",
        "playground"
      ],
      "paint": {
        "fill-color": "#9cd3b4",
        "fill-opacity": 0.7
      }
    },
    {
      "id": "landuse_hospital",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "kind",
        "hospital"
      ],
      "paint": {
        "fill-color": "#006a66",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_industrial",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "kind",
        "industrial"
      ],
      "paint": {
        "fill-color": "#005c5a",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_school",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "in",
        "kind",
        "school",
        "university",
        "college"
      ],
      "paint": {
        "fill-color": "#3c526c",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_beach",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "in",
        "kind",
        "beach"
      ],
      "paint": {
        "fill-color": "#565543",
        "fill-opacity": 0.9
      }
    },
    {
      "id": "landuse_zoo",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "in",
        "kind",
        "zoo"
      ],
      "paint": {
        "fill-color": "#0c5b56",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_aerodrome",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "in",
        "kind",
        "aerodrome"
      ],
      "paint": {
        "fill-color": "rgba(66, 66, 66, 1)"
      }
    },
    {
      "id": "roads_runway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "==",
        "kind_detail",
        "runway"
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          10,
          0,
          12,
          4,
          18,
          30
        ]
      }
    },
    {
      "id": "roads_taxiway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": [
        "==",
        "kind_detail",
        "taxiway"
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          15,
          6
        ]
      }
    },
    {
      "id": "landuse_runway",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "in",
          "kind",
          "runway",
          "taxiway"
        ]
      ],
      "paint": {
        "fill-color": "#e9e9ed"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "water",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "paint": {
        "fill-color": "rgba(32, 61, 105, 1)"
      }
    },
    {
      "id": "water_stream",
      "type": "line",
      "source": "protomaps",
      "source-layer": "water",
      "minzoom": 14,
      "filter": [
        "in",
        "kind",
        "stream"
      ],
      "paint": {
        "line-color": "rgba(32, 61, 105, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "water_river",
      "type": "line",
      "source": "protomaps",
      "source-layer": "water",
      "minzoom": 9,
      "filter": [
        "in",
        "kind",
        "river"
      ],
      "paint": {
        "line-color": "rgba(32, 61, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1,
          18,
          12
        ]
      }
    },
    {
      "id": "landuse_pedestrian",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "kind",
        "pedestrian"
      ],
      "paint": {
        "fill-color": "rgba(53, 128, 86, 1)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_pier",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "kind",
        "pier"
      ],
      "paint": {
        "fill-color": "rgba(53, 128, 86, 1)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "roads_tunnels_other_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "in",
          "kind",
          "other",
          "path"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          20,
          7
        ]
      }
    },
    {
      "id": "roads_tunnels_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          11,
          0,
          12.5,
          0.5,
          15,
          2,
          18,
          11
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          18,
          11
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_major_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          18,
          13
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_highway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "!has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-dasharray": [
          6,
          0.5
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          15
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1,
          20,
          15
        ]
      }
    },
    {
      "id": "roads_tunnels_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "in",
          "kind",
          "other",
          "path"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-dasharray": [
          4.5,
          0.5
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          20,
          7
        ]
      }
    },
    {
      "id": "roads_tunnels_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          11,
          0,
          12.5,
          0.5,
          15,
          2,
          18,
          11
        ]
      }
    },
    {
      "id": "roads_tunnels_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          18,
          11
        ]
      }
    },
    {
      "id": "roads_tunnels_major",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          6,
          0,
          12,
          1.6,
          15,
          3,
          18,
          13
        ]
      }
    },
    {
      "id": "roads_tunnels_highway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_tunnel"
        ],
        [
          "==",
          [
            "get",
            "kind"
          ],
          "highway"
        ],
        [
          "!",
          [
            "has",
            "is_link"
          ]
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          6,
          1.1,
          12,
          1.6,
          15,
          5,
          18,
          15
        ]
      }
    },
    {
      "id": "buildings",
      "type": "fill-extrusion",
      "source": "protomaps",
      "source-layer": "buildings",
      "paint": {
        "fill-extrusion-color": "rgba(37, 28, 25, 1)",
        "fill-extrusion-height": [
          "to-number",
          [
            "get",
            "height"
          ]
        ],
        "fill-extrusion-base": [
          "to-number",
          [
            "get",
            "min_height"
          ]
        ],
        "fill-extrusion-opacity": 0.8
      }
    },
    {
      "id": "roads_pier",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "==",
        "kind_detail",
        "pier"
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          16
        ]
      }
    },
    {
      "id": "roads_minor_service_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "==",
          "kind_detail",
          "service"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          18,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          0.8
        ]
      }
    },
    {
      "id": "roads_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "!=",
          "kind_detail",
          "service"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          11,
          0,
          12.5,
          0.5,
          15,
          2,
          18,
          11
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ]
      }
    },
    {
      "id": "roads_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": [
        "has",
        "is_link"
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          18,
          11
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1.5
        ]
      }
    },
    {
      "id": "roads_major_casing_late",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          6,
          0,
          12,
          1.6,
          15,
          3,
          18,
          13
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1
        ]
      }
    },
    {
      "id": "roads_highway_casing_late",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "!has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          15
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1,
          20,
          15
        ]
      }
    },
    {
      "id": "roads_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "in",
          "kind",
          "other",
          "path"
        ],
        [
          "!=",
          "kind_detail",
          "pier"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-dasharray": [
          3,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          20,
          7
        ]
      }
    },
    {
      "id": "roads_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "has",
        "is_link"
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          18,
          11
        ]
      }
    },
    {
      "id": "roads_minor_service",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "==",
          "kind_detail",
          "service"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          18,
          8
        ]
      }
    },
    {
      "id": "roads_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "!=",
          "kind_detail",
          "service"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          11,
          0,
          12.5,
          0.5,
          15,
          2,
          18,
          11
        ]
      }
    },
    {
      "id": "roads_major_casing_early",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "maxzoom": 12,
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          18,
          13
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1
        ]
      }
    },
    {
      "id": "roads_major",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          6,
          0,
          12,
          1.6,
          15,
          3,
          18,
          13
        ]
      }
    },
    {
      "id": "roads_highway_casing_early",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "maxzoom": 12,
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "!has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          15
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1
        ]
      }
    },
    {
      "id": "roads_highway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!has",
          "is_tunnel"
        ],
        [
          "!has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "!has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          6,
          1.1,
          12,
          1.6,
          15,
          5,
          18,
          15
        ]
      }
    },
    {
      "id": "roads_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "==",
        "kind",
        "rail"
      ],
      "paint": {
        "line-opacity": 1,
        "line-color": "rgba(68, 68, 68, 1)",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0.15,
          6,
          0.15,
          18,
          5
        ]
      }
    },
    {
      "id": "boundaries_country",
      "type": "line",
      "source": "protomaps",
      "source-layer": "boundaries",
      "filter": [
        "<=",
        "kind_detail",
        2
      ],
      "paint": {
        "line-color": "#adadad",
        "line-width": 0.7,
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              2
            ]
          ],
          4,
          [
            "literal",
            [
              2,
              1
            ]
          ]
        ]
      }
    },
    {
      "id": "boundaries",
      "type": "line",
      "source": "protomaps",
      "source-layer": "boundaries",
      "filter": [
        ">",
        "kind_detail",
        2
      ],
      "paint": {
        "line-color": "#adadad",
        "line-width": 0.4,
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              2
            ]
          ],
          4,
          [
            "literal",
            [
              2,
              1
            ]
          ]
        ]
      }
    },
    {
      "id": "roads_bridges_other_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "in",
          "kind",
          "other",
          "path"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          20,
          7
        ]
      }
    },
    {
      "id": "roads_bridges_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          18,
          11
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1.5
        ]
      }
    },
    {
      "id": "roads_bridges_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          11,
          0,
          12.5,
          0.5,
          15,
          2,
          18,
          11
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          0.8
        ]
      }
    },
    {
      "id": "roads_bridges_major_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          18,
          10
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1.5
        ]
      }
    },
    {
      "id": "roads_bridges_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "in",
          "kind",
          "other",
          "path"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-dasharray": [
          2,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          20,
          7
        ]
      }
    },
    {
      "id": "roads_bridges_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          11,
          0,
          12.5,
          0.5,
          15,
          2,
          18,
          11
        ]
      }
    },
    {
      "id": "roads_bridges_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          13,
          0,
          13.5,
          1,
          18,
          11
        ]
      }
    },
    {
      "id": "roads_bridges_major",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          6,
          0,
          12,
          1.6,
          15,
          3,
          18,
          13
        ]
      }
    },
    {
      "id": "roads_bridges_highway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "!has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#5A5A5A",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          15
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1,
          20,
          15
        ]
      }
    },
    {
      "id": "roads_bridges_highway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "has",
          "is_bridge"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "!has",
          "is_link"
        ]
      ],
      "paint": {
        "line-color": "#4D4D4D",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          6,
          1.1,
          12,
          1.6,
          15,
          5,
          18,
          15
        ]
      }
    },
    {
      "id": "transit_lines_under",
      "type": "line",
      "source": "transit_lines",
      "source-layer": "zcta",
      "filter": [
        "any",
        [
          "==",
          "provider",
          "amtrak"
        ],
        [
          "==",
          "provider",
          "via_rail"
        ],
        [
          "==",
          "provider",
          "brightline"
        ]
      ],
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#222222",
        "line-opacity": 1,
        "line-width": 6
      }
    },
    {
      "id": "transit_lines",
      "type": "line",
      "source": "transit_lines",
      "source-layer": "zcta",
      "filter": [
        "any",
        [
          "==",
          "provider",
          "amtrak"
        ],
        [
          "==",
          "provider",
          "via_rail"
        ],
        [
          "==",
          "provider",
          "brightline"
        ]
      ],
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": [
          "get",
          "routeColor"
        ],
        "line-opacity": 1,
        "line-width": 2
      }
    },
    {
      "id": "water_waterway_label",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "water",
      "minzoom": 13,
      "filter": [
        "in",
        "kind",
        "river",
        "stream"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-size": 12,
        "text-letter-spacing": 0.2
      },
      "paint": {
        "text-color": "rgba(185, 185, 255, 1)",
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "roads_labels_minor",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 15,
      "filter": [
        "in",
        "kind",
        "minor_road",
        "other",
        "path"
      ],
      "layout": {
        "symbol-sort-key": [
          "get",
          "min_zoom"
        ],
        "symbol-placement": "line",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "water_label_ocean",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "water",
      "filter": [
        "in",
        "kind",
        "sea",
        "ocean",
        "bay",
        "strait",
        "fjord"
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          3,
          10,
          10,
          12
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(204, 216, 247, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(0, 56, 56, 1)"
      }
    },
    {
      "id": "water_label_lakes",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "water",
      "filter": [
        "in",
        "kind",
        "lake",
        "water"
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          3,
          10,
          6,
          12,
          10,
          12
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 9
      },
      "paint": {
        "text-color": "rgba(204, 216, 247, 1)",
        "text-halo-color": "rgba(0, 56, 56, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "roads_labels_major",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "roads",
      "minzoom": 11,
      "filter": [
        "in",
        "kind",
        "highway",
        "major_road"
      ],
      "layout": {
        "symbol-sort-key": [
          "get",
          "min_zoom"
        ],
        "symbol-placement": "line",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "places_subplace",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "kind",
        "neighbourhood"
      ],
      "layout": {
        "symbol-sort-key": [
          "get",
          "min_zoom"
        ],
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 7,
        "text-letter-spacing": 0.1,
        "text-padding": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          2,
          8,
          4,
          12,
          18,
          15,
          20
        ],
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          11,
          8,
          14,
          14,
          18,
          24
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(49, 49, 49, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "places_locality",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "kind",
        "locality"
      ],
      "layout": {
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "townspot",
          8,
          ""
        ],
        "icon-size": 0.7,
        "text-field": [
          "case",
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "has",
              "script"
            ],
            [
              "case",
              [
                "any",
                [
                  "is-supported-script",
                  [
                    "get",
                    "name"
                  ]
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "name:en"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "case",
                  [
                    "all",
                    [
                      "!",
                      [
                        "has",
                        "name:en"
                      ]
                    ],
                    [
                      "has",
                      "name:en"
                    ],
                    [
                      "!",
                      [
                        "has",
                        "script"
                      ]
                    ]
                  ],
                  "",
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "get",
                "name:en"
              ]
            ],
            [
              "format",
              [
                "coalesce",
                [
                  "get",
                  "name:en"
                ],
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {}
            ]
          ],
          [
            "all",
            [
              "any",
              [
                "has",
                "name"
              ],
              [
                "has",
                "pgf:name"
              ]
            ],
            [
              "any",
              [
                "has",
                "name2"
              ],
              [
                "has",
                "pgf:name2"
              ]
            ],
            [
              "!",
              [
                "any",
                [
                  "has",
                  "name3"
                ],
                [
                  "has",
                  "pgf:name3"
                ]
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "has",
                "script2"
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ],
          [
            "case",
            [
              "all",
              [
                "has",
                "script"
              ],
              [
                "has",
                "script2"
              ],
              [
                "has",
                "script3"
              ]
            ],
            [
              "format",
              [
                "get",
                "name:en"
              ],
              {},
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name"
                ],
                [
                  "get",
                  "name"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name2"
                ],
                [
                  "get",
                  "name2"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script2"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              },
              "\n",
              {},
              [
                "coalesce",
                [
                  "get",
                  "pgf:name3"
                ],
                [
                  "get",
                  "name3"
                ]
              ],
              {
                "text-font": [
                  "case",
                  [
                    "==",
                    [
                      "get",
                      "script3"
                    ],
                    "Devanagari"
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ],
                  [
                    "literal",
                    [
                      "Noto Sans Regular"
                    ]
                  ]
                ]
              }
            ],
            [
              "case",
              [
                "!",
                [
                  "has",
                  "script"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "!",
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        ],
        "text-font": [
          "case",
          [
            "<=",
            [
              "get",
              "min_zoom"
            ],
            5
          ],
          [
            "literal",
            [
              "Noto Sans Medium"
            ]
          ],
          [
            "literal",
            [
              "Noto Sans Regular"
            ]
          ]
        ],
        "text-padding": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          3,
          8,
          7,
          12,
          11
        ],
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          2,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              13
            ],
            8,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              13
            ],
            13,
            0
          ],
          4,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              13
            ],
            10,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              13
            ],
            15,
            0
          ],
          6,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              12
            ],
            11,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              12
            ],
            17,
            0
          ],
          8,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              11
            ],
            11,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              11
            ],
            18,
            0
          ],
          10,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              9
            ],
            12,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              9
            ],
            20,
            0
          ],
          15,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              8
            ],
            12,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              8
            ],
            22,
            0
          ]
        ],
        "icon-padding": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          0,
          0,
          8,
          4,
          10,
          8,
          12,
          6,
          22,
          2
        ],
        "text-justify": "auto",
        "text-anchor": [
          "step",
          [
            "zoom"
          ],
          "left",
          8,
          "center"
        ],
        "text-radial-offset": 0.4
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(49, 49, 49, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "places_region",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "kind",
        "region"
      ],
      "layout": {
        "symbol-sort-key": [
          "get",
          "min_zoom"
        ],
        "text-field": [
          "step",
          [
            "zoom"
          ],
          [
            "get",
            "name:short"
          ],
          6,
          [
            "case",
            [
              "all",
              [
                "any",
                [
                  "has",
                  "name"
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "!",
                [
                  "any",
                  [
                    "has",
                    "name2"
                  ],
                  [
                    "has",
                    "pgf:name2"
                  ]
                ]
              ],
              [
                "!",
                [
                  "any",
                  [
                    "has",
                    "name3"
                  ],
                  [
                    "has",
                    "pgf:name3"
                  ]
                ]
              ]
            ],
            [
              "case",
              [
                "has",
                "script"
              ],
              [
                "case",
                [
                  "any",
                  [
                    "is-supported-script",
                    [
                      "get",
                      "name"
                    ]
                  ],
                  [
                    "has",
                    "pgf:name"
                  ]
                ],
                [
                  "format",
                  [
                    "coalesce",
                    [
                      "get",
                      "name:en"
                    ],
                    [
                      "get",
                      "name:en"
                    ]
                  ],
                  {},
                  "\n",
                  {},
                  [
                    "case",
                    [
                      "all",
                      [
                        "!",
                        [
                          "has",
                          "name:en"
                        ]
                      ],
                      [
                        "has",
                        "name:en"
                      ],
                      [
                        "!",
                        [
                          "has",
                          "script"
                        ]
                      ]
                    ],
                    "",
                    [
                      "coalesce",
                      [
                        "get",
                        "pgf:name"
                      ],
                      [
                        "get",
                        "name"
                      ]
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  }
                ],
                [
                  "get",
                  "name:en"
                ]
              ],
              [
                "format",
                [
                  "coalesce",
                  [
                    "get",
                    "name:en"
                  ],
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {}
              ]
            ],
            [
              "all",
              [
                "any",
                [
                  "has",
                  "name"
                ],
                [
                  "has",
                  "pgf:name"
                ]
              ],
              [
                "any",
                [
                  "has",
                  "name2"
                ],
                [
                  "has",
                  "pgf:name2"
                ]
              ],
              [
                "!",
                [
                  "any",
                  [
                    "has",
                    "name3"
                  ],
                  [
                    "has",
                    "pgf:name3"
                  ]
                ]
              ]
            ],
            [
              "case",
              [
                "all",
                [
                  "has",
                  "script"
                ],
                [
                  "has",
                  "script2"
                ]
              ],
              [
                "format",
                [
                  "get",
                  "name:en"
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "case",
                [
                  "has",
                  "script2"
                ],
                [
                  "format",
                  [
                    "coalesce",
                    [
                      "get",
                      "name:en"
                    ],
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ],
                  {},
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name2"
                    ],
                    [
                      "get",
                      "name2"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script2"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  }
                ],
                [
                  "format",
                  [
                    "coalesce",
                    [
                      "get",
                      "name:en"
                    ],
                    [
                      "get",
                      "pgf:name2"
                    ],
                    [
                      "get",
                      "name2"
                    ]
                  ],
                  {},
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  }
                ]
              ]
            ],
            [
              "case",
              [
                "all",
                [
                  "has",
                  "script"
                ],
                [
                  "has",
                  "script2"
                ],
                [
                  "has",
                  "script3"
                ]
              ],
              [
                "format",
                [
                  "get",
                  "name:en"
                ],
                {},
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name"
                  ],
                  [
                    "get",
                    "name"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name2"
                  ],
                  [
                    "get",
                    "name2"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script2"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                },
                "\n",
                {},
                [
                  "coalesce",
                  [
                    "get",
                    "pgf:name3"
                  ],
                  [
                    "get",
                    "name3"
                  ]
                ],
                {
                  "text-font": [
                    "case",
                    [
                      "==",
                      [
                        "get",
                        "script3"
                      ],
                      "Devanagari"
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ],
                    [
                      "literal",
                      [
                        "Noto Sans Regular"
                      ]
                    ]
                  ]
                }
              ],
              [
                "case",
                [
                  "!",
                  [
                    "has",
                    "script"
                  ]
                ],
                [
                  "format",
                  [
                    "coalesce",
                    [
                      "get",
                      "name:en"
                    ],
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ],
                  {},
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name2"
                    ],
                    [
                      "get",
                      "name2"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script2"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  },
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name3"
                    ],
                    [
                      "get",
                      "name3"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script3"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  }
                ],
                [
                  "!",
                  [
                    "has",
                    "script2"
                  ]
                ],
                [
                  "format",
                  [
                    "coalesce",
                    [
                      "get",
                      "name:en"
                    ],
                    [
                      "get",
                      "pgf:name2"
                    ],
                    [
                      "get",
                      "name2"
                    ]
                  ],
                  {},
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  },
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name3"
                    ],
                    [
                      "get",
                      "name3"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script3"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  }
                ],
                [
                  "format",
                  [
                    "coalesce",
                    [
                      "get",
                      "name:en"
                    ],
                    [
                      "get",
                      "pgf:name3"
                    ],
                    [
                      "get",
                      "name3"
                    ]
                  ],
                  {},
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name"
                    ],
                    [
                      "get",
                      "name"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  },
                  "\n",
                  {},
                  [
                    "coalesce",
                    [
                      "get",
                      "pgf:name2"
                    ],
                    [
                      "get",
                      "name2"
                    ]
                  ],
                  {
                    "text-font": [
                      "case",
                      [
                        "==",
                        [
                          "get",
                          "script2"
                        ],
                        "Devanagari"
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ],
                      [
                        "literal",
                        [
                          "Noto Sans Regular"
                        ]
                      ]
                    ]
                  }
                ]
              ]
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          3,
          11,
          7,
          16
        ],
        "text-radial-offset": 0.2,
        "text-anchor": "center",
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(49, 49, 49, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "places_country",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "kind",
        "country"
      ],
      "layout": {
        "symbol-sort-key": [
          "get",
          "min_zoom"
        ],
        "text-field": [
          "format",
          [
            "coalesce",
            [
              "get",
              "name:en"
            ],
            [
              "get",
              "name:en"
            ]
          ],
          {}
        ],
        "text-font": [
          "Noto Sans Medium"
        ],
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          2,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              10
            ],
            8,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              10
            ],
            12,
            0
          ],
          6,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              8
            ],
            10,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              8
            ],
            18,
            0
          ],
          8,
          [
            "case",
            [
              "<",
              [
                "get",
                "population_rank"
              ],
              7
            ],
            11,
            [
              ">=",
              [
                "get",
                "population_rank"
              ],
              7
            ],
            20,
            0
          ]
        ],
        "icon-padding": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          0,
          2,
          14,
          2,
          16,
          20,
          17,
          2,
          22,
          2
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(49, 49, 49, 1)",
        "text-halo-width": 1
      }
    }
  ],
  "id": "qqllgxi"
};

export default mapsStyle;