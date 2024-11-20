const layers = [
  {
    "id": "background",
    "type": "background",
    "paint": {
      "background-color": {
        "stops": [
          [
            6,
            "#006a66"
          ],
          [
            10,
            "#3c526c"
          ]
        ]
      }
    }
  },
  {
    "id": "earth",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "earth",
    "paint": {
      "fill-color": "#255c56",
      "fill-opacity": 0.8
    }
  },
  {
    "id": "landuse_park",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "national_park",
        "park",
        "cemetery",
        "protected_area",
        "nature_reserve",
        "forest",
        "golf_course"
      ]
    ],
    "paint": {
      "fill-color": "#3f775f",
      "fill-outline-color": "rgba(95, 208, 100, 0)",
      "fill-opacity": 0.9
    }
  },
  {
    "id": "landuse_hospital",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "hospital"
      ]
    ],
    "paint": {
      "fill-color": "#006a66"
    }
  },
  {
    "id": "landuse_industrial",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "industrial"
      ]
    ],
    "paint": {
      "fill-color": "#005c5a"
    }
  },
  {
    "id": "landuse_school",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "school",
        "university",
        "college"
      ]
    ],
    "paint": {
      "fill-color": "#3c526c"
    }
  },
  {
    "id": "landuse_beach",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "beach"
      ]
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
      "any",
      [
        "in",
        "pmap:kind",
        "zoo"
      ]
    ],
    "paint": {
      "fill-color": "#0c5b56"
    }
  },
  {
    "id": "landuse_military",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "military",
        "naval_base",
        "airfield"
      ]
    ],
    "paint": {
      "fill-color": "#2c466d"
    }
  },
  {
    "id": "natural_wood",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "wood",
        "nature_reserve",
        "forest"
      ]
    ],
    "paint": {
      "fill-antialias": false,
      "fill-color": "hsla(98, 61%, 72%, 0.7)",
      "fill-opacity": 0.4
    }
  },
  {
    "id": "natural_scrub",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "in",
      "pmap:kind",
      "scrub",
      "grassland",
      "grass"
    ],
    "paint": {
      "fill-antialias": false,
      "fill-color": "#255c56",
      "fill-opacity": 0.8
    }
  },
  {
    "id": "natural_glacier",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "==",
      "pmap:kind",
      "glacier"
    ],
    "paint": {
      "fill-antialias": false,
      "fill-color": "#658db1",
      "fill-opacity": 1
    }
  },
  {
    "id": "natural_sand",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "filter": [
      "==",
      "pmap:kind",
      "sand"
    ],
    "paint": {
      "fill-color": "#565543",
      "fill-opacity": 0.9
    }
  },
  {
    "id": "landuse_aerodrome",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "aerodrome"
      ]
    ],
    "paint": {
      "fill-color": "#314d75",
      "fill-opacity": 0.7
    }
  },
  {
    "id": "transit_runway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind_detail",
        "runway"
      ]
    ],
    "paint": {
      "line-color": "#2b456d",
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
    "id": "transit_taxiway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "minzoom": 13,
    "filter": [
      "any",
      [
        "in",
        "pmap:kind_detail",
        "taxiway"
      ]
    ],
    "paint": {
      "line-color": "#2d4971",
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
    "id": "water",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "water",
    "paint": {
      "fill-color": "#203881"
    }
  },
  {
    "id": "physical_line_stream",
    "type": "line",
    "source": "protomaps",
    "source-layer": "physical_line",
    "minzoom": 14,
    "filter": [
      "all",
      [
        "in",
        "pmap:kind",
        "stream"
      ]
    ],
    "paint": {
      "line-color": "#203881",
      "line-width": 0.5
    }
  },
  {
    "id": "physical_line_river",
    "type": "line",
    "source": "protomaps",
    "source-layer": "physical_line",
    "minzoom": 9,
    "filter": [
      "all",
      [
        "in",
        "pmap:kind",
        "river"
      ]
    ],
    "paint": {
      "line-color": "#203881",
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
      "any",
      [
        "==",
        "pmap:kind",
        "pedestrian"
      ]
    ],
    "paint": {
      "fill-color": "#255c56",
      "fill-opacity": 0.8
    }
  },
  {
    "id": "landuse_pier",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "pier"
      ]
    ],
    "paint": {
      "fill-color": "#3c526c"
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
        "<",
        "pmap:level",
        0
      ],
      [
        "in",
        "pmap:kind",
        "other",
        "path"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
    "id": "roads_tunnels_medium_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        10,
        0,
        10.5,
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "in",
        "pmap:kind",
        "other",
        "path"
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
    "id": "roads_tunnels_medium",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#5c6c81",
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
        12,
        1.2,
        15,
        3,
        18,
        13
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#354358",
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
        "<",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#6d7c97",
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
    "id": "transit_pier",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "pier"
      ]
    ],
    "paint": {
      "line-color": "#33445b",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ],
      [
        "==",
        "pmap:kind_detail",
        "service"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ],
      [
        "!=",
        "pmap:kind_detail",
        "service"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
      "all",
      [
        "==",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
    "id": "roads_medium_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        12,
        1.2,
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
        10,
        0,
        10.5,
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "in",
        "pmap:kind",
        "other",
        "path"
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
      "all",
      [
        "==",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ],
      [
        "==",
        "pmap:kind_detail",
        "service"
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ],
      [
        "!=",
        "pmap:kind_detail",
        "service"
      ]
    ],
    "paint": {
      "line-color": [
        "interpolate",
        [
          "exponential",
          1.6
        ],
        [
          "zoom"
        ],
        11,
        "#4f637d",
        16,
        "#516074"
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
    "id": "roads_medium",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      [
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#5c6c81",
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
        12,
        1.2,
        15,
        3,
        18,
        13
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#6d7c97",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        "==",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#6d7c97",
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
    "id": "transit_railway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "filter": [
      "all",
      [
        "==",
        "pmap:kind",
        "rail"
      ]
    ],
    "paint": {
      "line-dasharray": [
        0.3,
        0.75
      ],
      "line-opacity": 0.5,
      "line-color": "#1f252c",
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
        0.15,
        18,
        9
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
      "pmap:min_admin_level",
      2
    ],
    "paint": {
      "line-color": "#5c3963",
      "line-width": 1,
      "line-dasharray": [
        3,
        2
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
      "pmap:min_admin_level",
      2
    ],
    "paint": {
      "line-color": "#594265",
      "line-width": 0.5,
      "line-dasharray": [
        3,
        2
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
        ">",
        "pmap:level",
        0
      ],
      [
        "in",
        "pmap:kind",
        "other",
        "path"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
    "id": "roads_bridges_medium_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        12,
        1.2,
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
        10,
        0,
        10.5,
        1.5
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "in",
        "pmap:kind",
        "other",
        "path"
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "minor_road"
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#516074",
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
    "id": "roads_bridges_medium",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": [
      "all",
      [
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "medium_road"
      ]
    ],
    "paint": {
      "line-color": "#5c6c81",
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
        12,
        1.2,
        15,
        3,
        18,
        13
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "major_road"
      ]
    ],
    "paint": {
      "line-color": "#6d7c97",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#2c3d51",
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
        ">",
        "pmap:level",
        0
      ],
      [
        "==",
        "pmap:kind",
        "highway"
      ],
      [
        "!=",
        "pmap:link",
        1
      ]
    ],
    "paint": {
      "line-color": "#6d7c97",
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
    "id": "physical_line_waterway_label",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_line",
    "minzoom": 13,
    "filter": [
      "all",
      [
        "in",
        "pmap:kind",
        "river",
        "stream"
      ]
    ],
    "layout": {
      "text-field": [
        "get",
        "name"
      ],
      "text-font": [
        "Roboto Italic"
      ],
      "text-max-width": 5,
      "text-size": 12
    },
    "paint": {
      "text-color": "rgba(84, 127, 255, 1)",
      "text-halo-color": "rgba(50, 50, 50, 1)",
      "text-halo-width": 1
    }
  },
  {
    "id": "physical_point_peak",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_point",
    "filter": [
      "any",
      [
        "==",
        "pmap:kind",
        "peak"
      ]
    ],
    "layout": {
      "text-field": [
        "get",
        "name"
      ],
      "text-font": [
        "Roboto Condensed Italic"
      ],
      "text-letter-spacing": 0.1,
      "text-max-width": 9,
      "text-size": {
        "base": 1.2,
        "stops": [
          [
            12,
            10
          ],
          [
            15,
            14
          ]
        ]
      },
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#d9e3ed",
      "text-halo-color": "#364251",
      "text-halo-width": 1.2
    }
  },
  {
    "id": "roads_labels_minor",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 15,
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "minor_road",
        "other",
        "path"
      ]
    ],
    "layout": {
      "symbol-sort-key": [
        "get",
        "pmap:min_zoom"
      ],
      "symbol-placement": "line",
      "text-font": [
        "Roboto Regular"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 12
    },
    "paint": {
      "text-color": "#adbed8",
      "text-halo-blur": 0.5,
      "text-halo-width": 1
    }
  },
  {
    "id": "physical_point_ocean",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_point",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "sea",
        "ocean",
        "lake",
        "water",
        "bay",
        "strait",
        "fjord"
      ]
    ],
    "layout": {
      "text-font": [
        "Roboto Italic"
      ],
      "text-field": [
        "get",
        "name"
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
      "text-color": "rgba(84, 127, 255, 1)",
      "text-halo-color": "rgba(50, 50, 50, 1)",
      "text-halo-width": 1
    }
  },
  {
    "id": "physical_point_lakes",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "physical_point",
    "filter": [
      "any",
      [
        "in",
        "pmap:kind",
        "lake",
        "water"
      ]
    ],
    "layout": {
      "text-font": [
        "Roboto Italic"
      ],
      "text-field": [
        "get",
        "name"
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
        0,
        6,
        12,
        10,
        12
      ],
      "text-letter-spacing": 0.1,
      "text-max-width": 9
    },
    "paint": {
      "text-color": "rgba(84, 127, 255, 1)",
      "text-halo-color": "rgba(50, 50, 50, 1)",
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
      "any",
      [
        "in",
        "pmap:kind",
        "highway",
        "major_road",
        "medium_road"
      ]
    ],
    "layout": {
      "symbol-sort-key": [
        "get",
        "pmap:min_zoom"
      ],
      "symbol-placement": "line",
      "text-font": [
        "Roboto Regular"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 12
    },
    "paint": {
      "text-color": "#adbed8",
      "text-halo-blur": 0.5,
      "text-halo-width": 1
    }
  },
  {
    "id": "buildings",
    "type": "fill-extrusion",
    "source": "protomaps",
    "source-layer": "buildings",
    "paint": {
      "fill-extrusion-color": "#49607d",
      "fill-extrusion-height": [
        "to-number",
        [
          "get",
          "height"
        ]
      ],
      "fill-extrusion-opacity": 1
    }
  },
  {
    "id": "places_subplace",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "neighbourhood"
    ],
    "layout": {
      "symbol-sort-key": [
        "get",
        "pmap:min_zoom"
      ],
      "text-field": "{name}",
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
      "text-color": "#d9e3ed",
      "text-halo-color": "#364251",
      "text-halo-width": 1.2
    }
  },
  {
    "id": "pois_important",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "pois",
    "filter": [
      "any",
      [
        "<",
        [
          "get",
          "pmap:min_zoom"
        ],
        13
      ]
    ],
    "layout": {
      "symbol-sort-key": [
        "get",
        "pmap:min_zoom"
      ],
      "text-font": [
        "Roboto Condensed Italic"
      ],
      "text-field": [
        "get",
        "name"
      ],
      "text-size": 11,
      "text-max-width": 9,
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
      ]
    },
    "paint": {
      "text-color": "#d9e3ed",
      "text-halo-color": "#364251",
      "text-halo-width": 1.5
    }
  },
  {
    "id": "places_locality_circle",
    "type": "circle",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "locality"
    ],
    "paint": {
      "circle-radius": 2,
      "circle-stroke-width": 1.5,
      "circle-stroke-color": "#a3a3a3",
      "circle-color": "#ffffff",
      "circle-translate": [
        -6,
        0
      ]
    },
    "maxzoom": 8
  },
  {
    "id": "places_locality",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "locality"
    ],
    "layout": {
      "text-field": "{name}",
      "text-font": [
        "case",
        [
          "<=",
          [
            "get",
            "pmap:min_zoom"
          ],
          5
        ],
        [
          "literal",
          [
            "Roboto Condensed Italic"
          ]
        ],
        [
          "literal",
          [
            "Roboto Condensed Italic"
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
              "pmap:population_rank"
            ],
            13
          ],
          8,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            13
          ],
          10,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            12
          ],
          11,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            11
          ],
          11,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            9
          ],
          12,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            8
          ],
          12,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
        2,
        8,
        4,
        10,
        8,
        12,
        6,
        22,
        2
      ],
      "text-anchor": [
        "step",
        [
          "zoom"
        ],
        "left",
        8,
        "center"
      ],
      "text-radial-offset": 0.2
    },
    "paint": {
      "text-color": "#d9e3ed",
      "text-halo-color": "#364251",
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
      "pmap:kind",
      "region"
    ],
    "layout": {
      "symbol-sort-key": [
        "get",
        "pmap:min_zoom"
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
          "get",
          "name"
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
      "text-color": "#d9e3ed",
      "text-halo-color": "#364251",
      "text-halo-width": 2
    }
  },
  {
    "id": "places_country",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": [
      "==",
      "pmap:kind",
      "country"
    ],
    "layout": {
      "symbol-sort-key": [
        "get",
        "pmap:min_zoom"
      ],
      "text-field": "{name}",
      "text-font": [
        "Roboto Condensed Bold"
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
              "pmap:population_rank"
            ],
            10
          ],
          8,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            8
          ],
          10,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
              "pmap:population_rank"
            ],
            7
          ],
          11,
          [
            ">=",
            [
              "get",
              "pmap:population_rank"
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
      "text-color": "#bbbbbb",
      "text-halo-blur": 1,
      "text-halo-color": "#526361",
      "text-halo-width": 1
    }
  }
];

export default layers;