// AUTO-GENERATED COMPLETE KRAKOW BUILDINGS DATASET (496 BUILDINGS)
// Authentic Krakow Cadastral Map - Stare Miasto, Rynek, Wawel, Kleparz
// Exactly two colors, small address labels, 50% locked entrances, operable doors, and visible windows.

import { BuildingData } from '../types/game';

export const KRAKOW_BUILDINGS: BuildingData[] = [
  {
    "id": "sukiennice",
    "name": "Sukiennice (Kramy Sukiennicze)",
    "address": "Rynek Główny 1/3",
    "polygon": [
      {
        "x": 23620,
        "y": 22300
      },
      {
        "x": 24380,
        "y": 22300
      },
      {
        "x": 24380,
        "y": 25700
      },
      {
        "x": 23620,
        "y": 25700
      }
    ],
    "doors": [
      {
        "id": "suk_d_north",
        "x": 24000,
        "y": 22300,
        "width": 100,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      },
      {
        "id": "suk_d_south",
        "x": 24000,
        "y": 25700,
        "width": 100,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      },
      {
        "id": "suk_d_east",
        "x": 24380,
        "y": 24000,
        "width": 100,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      },
      {
        "id": "suk_d_west",
        "x": 23620,
        "y": 24000,
        "width": 100,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "suk_hala_n",
        "name": "Kramy Sukiennicze — Galeria Sztuki Polskiej XIX w.",
        "polygon": [
          {
            "x": 23660,
            "y": 22350
          },
          {
            "x": 24340,
            "y": 22350
          },
          {
            "x": 24340,
            "y": 23900
          },
          {
            "x": 23660,
            "y": 23900
          }
        ],
        "furniture": [
          {
            "type": "stall",
            "x": 23840,
            "y": 22900,
            "w": 85,
            "h": 180
          },
          {
            "type": "stall",
            "x": 24160,
            "y": 22900,
            "w": 85,
            "h": 180
          },
          {
            "type": "stall",
            "x": 23840,
            "y": 23500,
            "w": 85,
            "h": 180
          },
          {
            "type": "stall",
            "x": 24160,
            "y": 23500,
            "w": 85,
            "h": 180
          }
        ]
      },
      {
        "id": "suk_hala_s",
        "name": "Kramy Sukiennicze — Podziemia Rynku",
        "polygon": [
          {
            "x": 23660,
            "y": 24100
          },
          {
            "x": 24340,
            "y": 24100
          },
          {
            "x": 24340,
            "y": 25650
          },
          {
            "x": 23660,
            "y": 25650
          }
        ],
        "furniture": [
          {
            "type": "stall",
            "x": 23840,
            "y": 24500,
            "w": 85,
            "h": 180
          },
          {
            "type": "stall",
            "x": 24160,
            "y": 24500,
            "w": 85,
            "h": 180
          },
          {
            "type": "stall",
            "x": 23840,
            "y": 25100,
            "w": 85,
            "h": 180
          },
          {
            "type": "stall",
            "x": 24160,
            "y": 25100,
            "w": 85,
            "h": 180
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23630,
        "y": 23200
      },
      {
        "x": 23630,
        "y": 24800
      },
      {
        "x": 24370,
        "y": 23200
      },
      {
        "x": 24370,
        "y": 24800
      }
    ]
  },
  {
    "id": "bazylika_mariacka",
    "name": "Bazylika Mariacka (Kościół Wniebowzięcia NMP)",
    "address": "Plac Mariacki 5",
    "polygon": [
      {
        "x": 25650,
        "y": 21900
      },
      {
        "x": 26650,
        "y": 21900
      },
      {
        "x": 26650,
        "y": 23100
      },
      {
        "x": 25650,
        "y": 23100
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "mar_d1",
        "x": 25650,
        "y": 22500,
        "width": 90,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 25660,
        "y": 22200
      },
      {
        "x": 25660,
        "y": 22800
      },
      {
        "x": 26150,
        "y": 21910
      }
    ],
    "interiorRooms": [
      {
        "id": "mar_nawa",
        "name": "Gotycka Nawa Główna — Ołtarz Wita Stwosza",
        "polygon": [
          {
            "x": 25700,
            "y": 21950
          },
          {
            "x": 26600,
            "y": 21950
          },
          {
            "x": 26600,
            "y": 23050
          },
          {
            "x": 25700,
            "y": 23050
          }
        ],
        "furniture": [
          {
            "type": "altar",
            "x": 26450,
            "y": 22500,
            "w": 85,
            "h": 260
          },
          {
            "type": "pew",
            "x": 26050,
            "y": 22200,
            "w": 240,
            "h": 65
          },
          {
            "type": "pew",
            "x": 26050,
            "y": 22800,
            "w": 240,
            "h": 65
          }
        ]
      }
    ]
  },
  {
    "id": "wieza_ratuszowa",
    "name": "Wieża Ratuszowa (Gotyk XIV w.)",
    "address": "Rynek Główny 1",
    "polygon": [
      {
        "x": 22500,
        "y": 23600
      },
      {
        "x": 22980,
        "y": 23600
      },
      {
        "x": 22980,
        "y": 24080
      },
      {
        "x": 22500,
        "y": 24080
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": true,
    "doors": [
      {
        "id": "rat_d",
        "x": 22980,
        "y": 23840,
        "width": 70,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 22740,
        "y": 23610
      },
      {
        "x": 22510,
        "y": 23840
      }
    ],
    "interiorRooms": [
      {
        "id": "rat_hall",
        "name": "Gotycka Sala Rady Miasta i Skarbiec Ratuszowy",
        "polygon": [
          {
            "x": 22540,
            "y": 23640
          },
          {
            "x": 22940,
            "y": 23640
          },
          {
            "x": 22940,
            "y": 24040
          },
          {
            "x": 22540,
            "y": 24040
          }
        ]
      }
    ]
  },
  {
    "id": "odwach_ratuszowy",
    "name": "Dawny Odwach Garnizonu Miejskiego",
    "address": "Rynek Główny 1A",
    "polygon": [
      {
        "x": 22500,
        "y": 24180
      },
      {
        "x": 22980,
        "y": 24180
      },
      {
        "x": 22980,
        "y": 24480
      },
      {
        "x": 22500,
        "y": 24480
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": false,
    "doors": [],
    "windows": [],
    "interiorRooms": []
  },
  {
    "id": "kosciol_wojciecha",
    "name": "Kościół św. Wojciecha (X w. Romański)",
    "address": "Rynek Główny 2",
    "polygon": [
      {
        "x": 25300,
        "y": 25400
      },
      {
        "x": 25700,
        "y": 25400
      },
      {
        "x": 25700,
        "y": 25800
      },
      {
        "x": 25300,
        "y": 25800
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": true,
    "doors": [
      {
        "id": "woj_d",
        "x": 25300,
        "y": 25600,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 25500,
        "y": 25410
      },
      {
        "x": 25500,
        "y": 25790
      }
    ],
    "interiorRooms": [
      {
        "id": "woj_roma",
        "name": "Przedlokacyjna Świątynia Romańska św. Wojciecha",
        "polygon": [
          {
            "x": 25330,
            "y": 25430
          },
          {
            "x": 25670,
            "y": 25430
          },
          {
            "x": 25670,
            "y": 25770
          },
          {
            "x": 25330,
            "y": 25770
          }
        ]
      }
    ]
  },
  {
    "id": "kosciol_barbary",
    "name": "Kościół św. Barbary",
    "address": "Plac Mariacki 8",
    "polygon": [
      {
        "x": 26800,
        "y": 21900
      },
      {
        "x": 27380,
        "y": 21900
      },
      {
        "x": 27380,
        "y": 22600
      },
      {
        "x": 26800,
        "y": 22600
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": false,
    "doors": [],
    "windows": [],
    "interiorRooms": []
  },
  {
    "id": "kam_ryn_n1_38",
    "name": "Kamienica Rynek Główny 38",
    "address": "Rynek Główny 38",
    "polygon": [
      {
        "x": 21840,
        "y": 21200
      },
      {
        "x": 22220,
        "y": 21200
      },
      {
        "x": 22220,
        "y": 21740
      },
      {
        "x": 21840,
        "y": 21740
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_n1_38",
        "x": 22030,
        "y": 21740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_n1_38",
        "name": "Rynek Główny 38 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 21852,
            "y": 21212
          },
          {
            "x": 22208,
            "y": 21212
          },
          {
            "x": 22208,
            "y": 21728
          },
          {
            "x": 21852,
            "y": 21728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22030,
            "y": 21470,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21924,
        "y": 21732
      },
      {
        "x": 22136,
        "y": 21732
      },
      {
        "x": 22030,
        "y": 21732
      }
    ]
  },
  {
    "id": "kam_ryn_n1_39",
    "name": "Kamienica Rynek Główny 39",
    "address": "Rynek Główny 39",
    "polygon": [
      {
        "x": 22240,
        "y": 21200
      },
      {
        "x": 22620,
        "y": 21200
      },
      {
        "x": 22620,
        "y": 21740
      },
      {
        "x": 22240,
        "y": 21740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_n1_40",
    "name": "Kamienica Rynek Główny 40",
    "address": "Rynek Główny 40",
    "polygon": [
      {
        "x": 22640,
        "y": 21200
      },
      {
        "x": 23020,
        "y": 21200
      },
      {
        "x": 23020,
        "y": 21740
      },
      {
        "x": 22640,
        "y": 21740
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_n1_40",
        "x": 22830,
        "y": 21740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_n1_40",
        "name": "Rynek Główny 40 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22652,
            "y": 21212
          },
          {
            "x": 23008,
            "y": 21212
          },
          {
            "x": 23008,
            "y": 21728
          },
          {
            "x": 22652,
            "y": 21728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22830,
            "y": 21470,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22724,
        "y": 21732
      },
      {
        "x": 22936,
        "y": 21732
      },
      {
        "x": 22830,
        "y": 21732
      }
    ]
  },
  {
    "id": "kam_ryn_n2_41",
    "name": "Kamienica Rynek Główny 41",
    "address": "Rynek Główny 41",
    "polygon": [
      {
        "x": 23270,
        "y": 21200
      },
      {
        "x": 23570,
        "y": 21200
      },
      {
        "x": 23570,
        "y": 21740
      },
      {
        "x": 23270,
        "y": 21740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_n2_42",
    "name": "Kamienica Rynek Główny 42",
    "address": "Rynek Główny 42",
    "polygon": [
      {
        "x": 23580,
        "y": 21200
      },
      {
        "x": 23880,
        "y": 21200
      },
      {
        "x": 23880,
        "y": 21740
      },
      {
        "x": 23580,
        "y": 21740
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_n2_42",
        "x": 23730,
        "y": 21740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_n2_42",
        "name": "Rynek Główny 42 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23592,
            "y": 21212
          },
          {
            "x": 23868,
            "y": 21212
          },
          {
            "x": 23868,
            "y": 21728
          },
          {
            "x": 23592,
            "y": 21728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23730,
            "y": 21470,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23646,
        "y": 21732
      },
      {
        "x": 23814,
        "y": 21732
      },
      {
        "x": 23730,
        "y": 21732
      }
    ]
  },
  {
    "id": "kam_ryn_n3_43",
    "name": "Kamienica Rynek Główny 43",
    "address": "Rynek Główny 43",
    "polygon": [
      {
        "x": 24090,
        "y": 21200
      },
      {
        "x": 24390,
        "y": 21200
      },
      {
        "x": 24390,
        "y": 21740
      },
      {
        "x": 24090,
        "y": 21740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_n3_44",
    "name": "Kamienica Rynek Główny 44",
    "address": "Rynek Główny 44",
    "polygon": [
      {
        "x": 24400,
        "y": 21200
      },
      {
        "x": 24700,
        "y": 21200
      },
      {
        "x": 24700,
        "y": 21740
      },
      {
        "x": 24400,
        "y": 21740
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_n3_44",
        "x": 24550,
        "y": 21740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_n3_44",
        "name": "Rynek Główny 44 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24412,
            "y": 21212
          },
          {
            "x": 24688,
            "y": 21212
          },
          {
            "x": 24688,
            "y": 21728
          },
          {
            "x": 24412,
            "y": 21728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24550,
            "y": 21470,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24466,
        "y": 21732
      },
      {
        "x": 24634,
        "y": 21732
      },
      {
        "x": 24550,
        "y": 21732
      }
    ]
  },
  {
    "id": "kam_ryn_n4_45",
    "name": "Kamienica Rynek Główny 45",
    "address": "Rynek Główny 45",
    "polygon": [
      {
        "x": 24920,
        "y": 21200
      },
      {
        "x": 25230,
        "y": 21200
      },
      {
        "x": 25230,
        "y": 21740
      },
      {
        "x": 24920,
        "y": 21740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_n4_46",
    "name": "Kamienica Rynek Główny 46",
    "address": "Rynek Główny 46",
    "polygon": [
      {
        "x": 25240,
        "y": 21200
      },
      {
        "x": 25550,
        "y": 21200
      },
      {
        "x": 25550,
        "y": 21740
      },
      {
        "x": 25240,
        "y": 21740
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_n4_46",
        "x": 25395,
        "y": 21740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_n4_46",
        "name": "Rynek Główny 46 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 25252,
            "y": 21212
          },
          {
            "x": 25538,
            "y": 21212
          },
          {
            "x": 25538,
            "y": 21728
          },
          {
            "x": 25252,
            "y": 21728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25395,
            "y": 21470,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25308,
        "y": 21732
      },
      {
        "x": 25482,
        "y": 21732
      },
      {
        "x": 25395,
        "y": 21732
      }
    ]
  },
  {
    "id": "kam_ryn_w1_28",
    "name": "Kamienica Rynek Główny 28",
    "address": "Rynek Główny 28",
    "polygon": [
      {
        "x": 21200,
        "y": 21820
      },
      {
        "x": 21740,
        "y": 21820
      },
      {
        "x": 21740,
        "y": 22090
      },
      {
        "x": 21200,
        "y": 22090
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w1_28",
        "x": 21740,
        "y": 21955,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w1_28",
        "name": "Rynek Główny 28 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 21212,
            "y": 21832
          },
          {
            "x": 21728,
            "y": 21832
          },
          {
            "x": 21728,
            "y": 22078
          },
          {
            "x": 21212,
            "y": 22078
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 21955,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 21879
      },
      {
        "x": 21732,
        "y": 22031
      },
      {
        "x": 21732,
        "y": 21955
      }
    ]
  },
  {
    "id": "kam_ryn_w2_29",
    "name": "Kamienica Rynek Główny 29",
    "address": "Rynek Główny 29",
    "polygon": [
      {
        "x": 21200,
        "y": 22300
      },
      {
        "x": 21740,
        "y": 22300
      },
      {
        "x": 21740,
        "y": 22550
      },
      {
        "x": 21200,
        "y": 22550
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w2_29",
        "x": 21740,
        "y": 22425,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w2_29",
        "name": "Rynek Główny 29 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 21212,
            "y": 22312
          },
          {
            "x": 21728,
            "y": 22312
          },
          {
            "x": 21728,
            "y": 22538
          },
          {
            "x": 21212,
            "y": 22538
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 22425,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 22355
      },
      {
        "x": 21732,
        "y": 22495
      }
    ]
  },
  {
    "id": "kam_ryn_w2_30",
    "name": "Kamienica Rynek Główny 30",
    "address": "Rynek Główny 30",
    "polygon": [
      {
        "x": 21200,
        "y": 22560
      },
      {
        "x": 21740,
        "y": 22560
      },
      {
        "x": 21740,
        "y": 22810
      },
      {
        "x": 21200,
        "y": 22810
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_w2_31",
    "name": "Kamienica Rynek Główny 31",
    "address": "Rynek Główny 31",
    "polygon": [
      {
        "x": 21200,
        "y": 22820
      },
      {
        "x": 21740,
        "y": 22820
      },
      {
        "x": 21740,
        "y": 23070
      },
      {
        "x": 21200,
        "y": 23070
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w2_31",
        "x": 21740,
        "y": 22945,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w2_31",
        "name": "Rynek Główny 31 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 21212,
            "y": 22832
          },
          {
            "x": 21728,
            "y": 22832
          },
          {
            "x": 21728,
            "y": 23058
          },
          {
            "x": 21212,
            "y": 23058
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 22945,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 22875
      },
      {
        "x": 21732,
        "y": 23015
      }
    ]
  },
  {
    "id": "kam_ryn_w3_32",
    "name": "Kamienica Rynek Główny 32",
    "address": "Rynek Główny 32",
    "polygon": [
      {
        "x": 21200,
        "y": 23280
      },
      {
        "x": 21740,
        "y": 23280
      },
      {
        "x": 21740,
        "y": 23550
      },
      {
        "x": 21200,
        "y": 23550
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_w3_33",
    "name": "Kamienica Rynek Główny 33",
    "address": "Rynek Główny 33",
    "polygon": [
      {
        "x": 21200,
        "y": 23560
      },
      {
        "x": 21740,
        "y": 23560
      },
      {
        "x": 21740,
        "y": 23830
      },
      {
        "x": 21200,
        "y": 23830
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w3_33",
        "x": 21740,
        "y": 23695,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w3_33",
        "name": "Rynek Główny 33 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 21212,
            "y": 23572
          },
          {
            "x": 21728,
            "y": 23572
          },
          {
            "x": 21728,
            "y": 23818
          },
          {
            "x": 21212,
            "y": 23818
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 23695,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 23619
      },
      {
        "x": 21732,
        "y": 23771
      },
      {
        "x": 21732,
        "y": 23695
      }
    ]
  },
  {
    "id": "kam_ryn_w3_34",
    "name": "Kamienica Rynek Główny 34",
    "address": "Rynek Główny 34",
    "polygon": [
      {
        "x": 21200,
        "y": 23840
      },
      {
        "x": 21740,
        "y": 23840
      },
      {
        "x": 21740,
        "y": 24110
      },
      {
        "x": 21200,
        "y": 24110
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_w3_35",
    "name": "Kamienica Rynek Główny 35",
    "address": "Rynek Główny 35",
    "polygon": [
      {
        "x": 21200,
        "y": 24120
      },
      {
        "x": 21740,
        "y": 24120
      },
      {
        "x": 21740,
        "y": 24390
      },
      {
        "x": 21200,
        "y": 24390
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w3_35",
        "x": 21740,
        "y": 24255,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w3_35",
        "name": "Rynek Główny 35 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 21212,
            "y": 24132
          },
          {
            "x": 21728,
            "y": 24132
          },
          {
            "x": 21728,
            "y": 24378
          },
          {
            "x": 21212,
            "y": 24378
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 24255,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 24179
      },
      {
        "x": 21732,
        "y": 24331
      },
      {
        "x": 21732,
        "y": 24255
      }
    ]
  },
  {
    "id": "kam_ryn_w3_36",
    "name": "Kamienica Rynek Główny 36",
    "address": "Rynek Główny 36",
    "polygon": [
      {
        "x": 21200,
        "y": 24400
      },
      {
        "x": 21740,
        "y": 24400
      },
      {
        "x": 21740,
        "y": 24670
      },
      {
        "x": 21200,
        "y": 24670
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_w4_37",
    "name": "Kamienica Rynek Główny 37",
    "address": "Rynek Główny 37",
    "polygon": [
      {
        "x": 21200,
        "y": 24920
      },
      {
        "x": 21740,
        "y": 24920
      },
      {
        "x": 21740,
        "y": 25210
      },
      {
        "x": 21200,
        "y": 25210
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w4_37",
        "x": 21740,
        "y": 25065,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w4_37",
        "name": "Rynek Główny 37 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 21212,
            "y": 24932
          },
          {
            "x": 21728,
            "y": 24932
          },
          {
            "x": 21728,
            "y": 25198
          },
          {
            "x": 21212,
            "y": 25198
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 25065,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 24984
      },
      {
        "x": 21732,
        "y": 25146
      },
      {
        "x": 21732,
        "y": 25065
      }
    ]
  },
  {
    "id": "kam_ryn_w4_38",
    "name": "Kamienica Rynek Główny 38",
    "address": "Rynek Główny 38",
    "polygon": [
      {
        "x": 21200,
        "y": 25220
      },
      {
        "x": 21740,
        "y": 25220
      },
      {
        "x": 21740,
        "y": 25510
      },
      {
        "x": 21200,
        "y": 25510
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_w4_39",
    "name": "Kamienica Rynek Główny 39",
    "address": "Rynek Główny 39",
    "polygon": [
      {
        "x": 21200,
        "y": 25520
      },
      {
        "x": 21740,
        "y": 25520
      },
      {
        "x": 21740,
        "y": 25810
      },
      {
        "x": 21200,
        "y": 25810
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_w4_39",
        "x": 21740,
        "y": 25665,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_w4_39",
        "name": "Rynek Główny 39 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 21212,
            "y": 25532
          },
          {
            "x": 21728,
            "y": 25532
          },
          {
            "x": 21728,
            "y": 25798
          },
          {
            "x": 21212,
            "y": 25798
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21470,
            "y": 25665,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21732,
        "y": 25584
      },
      {
        "x": 21732,
        "y": 25746
      },
      {
        "x": 21732,
        "y": 25665
      }
    ]
  },
  {
    "id": "kam_ryn_w4_40",
    "name": "Kamienica Rynek Główny 40",
    "address": "Rynek Główny 40",
    "polygon": [
      {
        "x": 21200,
        "y": 25820
      },
      {
        "x": 21740,
        "y": 25820
      },
      {
        "x": 21740,
        "y": 26110
      },
      {
        "x": 21200,
        "y": 26110
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_s1_11",
    "name": "Kamienica Rynek Główny 11",
    "address": "Rynek Główny 11",
    "polygon": [
      {
        "x": 21840,
        "y": 26260
      },
      {
        "x": 22220,
        "y": 26260
      },
      {
        "x": 22220,
        "y": 26800
      },
      {
        "x": 21840,
        "y": 26800
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_s1_12",
    "name": "Kamienica Rynek Główny 12",
    "address": "Rynek Główny 12",
    "polygon": [
      {
        "x": 22240,
        "y": 26260
      },
      {
        "x": 22620,
        "y": 26260
      },
      {
        "x": 22620,
        "y": 26800
      },
      {
        "x": 22240,
        "y": 26800
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_s1_12",
        "x": 22430,
        "y": 26260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_s1_12",
        "name": "Rynek Główny 12 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22252,
            "y": 26272
          },
          {
            "x": 22608,
            "y": 26272
          },
          {
            "x": 22608,
            "y": 26788
          },
          {
            "x": 22252,
            "y": 26788
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22430,
            "y": 26530,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22324,
        "y": 26268
      },
      {
        "x": 22536,
        "y": 26268
      },
      {
        "x": 22430,
        "y": 26268
      }
    ]
  },
  {
    "id": "kam_ryn_s1_13",
    "name": "Kamienica Rynek Główny 13",
    "address": "Rynek Główny 13",
    "polygon": [
      {
        "x": 22640,
        "y": 26260
      },
      {
        "x": 23020,
        "y": 26260
      },
      {
        "x": 23020,
        "y": 26800
      },
      {
        "x": 22640,
        "y": 26800
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_s2_14",
    "name": "Kamienica Rynek Główny 14",
    "address": "Rynek Główny 14",
    "polygon": [
      {
        "x": 23270,
        "y": 26260
      },
      {
        "x": 23570,
        "y": 26260
      },
      {
        "x": 23570,
        "y": 26800
      },
      {
        "x": 23270,
        "y": 26800
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_s2_14",
        "x": 23420,
        "y": 26260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_s2_14",
        "name": "Rynek Główny 14 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23282,
            "y": 26272
          },
          {
            "x": 23558,
            "y": 26272
          },
          {
            "x": 23558,
            "y": 26788
          },
          {
            "x": 23282,
            "y": 26788
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23420,
            "y": 26530,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23336,
        "y": 26268
      },
      {
        "x": 23504,
        "y": 26268
      },
      {
        "x": 23420,
        "y": 26268
      }
    ]
  },
  {
    "id": "kam_ryn_s2_15",
    "name": "Kamienica Rynek Główny 15",
    "address": "Rynek Główny 15",
    "polygon": [
      {
        "x": 23580,
        "y": 26260
      },
      {
        "x": 23880,
        "y": 26260
      },
      {
        "x": 23880,
        "y": 26800
      },
      {
        "x": 23580,
        "y": 26800
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_s3_16",
    "name": "Kamienica Rynek Główny 16",
    "address": "Rynek Główny 16",
    "polygon": [
      {
        "x": 24090,
        "y": 26260
      },
      {
        "x": 24390,
        "y": 26260
      },
      {
        "x": 24390,
        "y": 26800
      },
      {
        "x": 24090,
        "y": 26800
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_s3_16",
        "x": 24240,
        "y": 26260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_s3_16",
        "name": "Rynek Główny 16 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24102,
            "y": 26272
          },
          {
            "x": 24378,
            "y": 26272
          },
          {
            "x": 24378,
            "y": 26788
          },
          {
            "x": 24102,
            "y": 26788
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24240,
            "y": 26530,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24156,
        "y": 26268
      },
      {
        "x": 24324,
        "y": 26268
      },
      {
        "x": 24240,
        "y": 26268
      }
    ]
  },
  {
    "id": "kam_ryn_s3_17",
    "name": "Kamienica Rynek Główny 17",
    "address": "Rynek Główny 17",
    "polygon": [
      {
        "x": 24400,
        "y": 26260
      },
      {
        "x": 24700,
        "y": 26260
      },
      {
        "x": 24700,
        "y": 26800
      },
      {
        "x": 24400,
        "y": 26800
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_s4_18",
    "name": "Kamienica Rynek Główny 18",
    "address": "Rynek Główny 18",
    "polygon": [
      {
        "x": 24920,
        "y": 26260
      },
      {
        "x": 25310,
        "y": 26260
      },
      {
        "x": 25310,
        "y": 26800
      },
      {
        "x": 24920,
        "y": 26800
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_s4_18",
        "x": 25115,
        "y": 26260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_s4_18",
        "name": "Rynek Główny 18 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24932,
            "y": 26272
          },
          {
            "x": 25298,
            "y": 26272
          },
          {
            "x": 25298,
            "y": 26788
          },
          {
            "x": 24932,
            "y": 26788
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25115,
            "y": 26530,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25006,
        "y": 26268
      },
      {
        "x": 25224,
        "y": 26268
      },
      {
        "x": 25115,
        "y": 26268
      }
    ]
  },
  {
    "id": "kam_ryn_s4_19",
    "name": "Kamienica Rynek Główny 19",
    "address": "Rynek Główny 19",
    "polygon": [
      {
        "x": 25330,
        "y": 26260
      },
      {
        "x": 25720,
        "y": 26260
      },
      {
        "x": 25720,
        "y": 26800
      },
      {
        "x": 25330,
        "y": 26800
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_s4_20",
    "name": "Kamienica Rynek Główny 20",
    "address": "Rynek Główny 20",
    "polygon": [
      {
        "x": 25740,
        "y": 26260
      },
      {
        "x": 26130,
        "y": 26260
      },
      {
        "x": 26130,
        "y": 26800
      },
      {
        "x": 25740,
        "y": 26800
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_s4_20",
        "x": 25935,
        "y": 26260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_s4_20",
        "name": "Rynek Główny 20 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 25752,
            "y": 26272
          },
          {
            "x": 26118,
            "y": 26272
          },
          {
            "x": 26118,
            "y": 26788
          },
          {
            "x": 25752,
            "y": 26788
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25935,
            "y": 26530,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25826,
        "y": 26268
      },
      {
        "x": 26044,
        "y": 26268
      },
      {
        "x": 25935,
        "y": 26268
      }
    ]
  },
  {
    "id": "kam_ryn_e1_1",
    "name": "Kamienica Rynek Główny 1",
    "address": "Rynek Główny 1",
    "polygon": [
      {
        "x": 26260,
        "y": 21950
      },
      {
        "x": 26800,
        "y": 21950
      },
      {
        "x": 26800,
        "y": 22220
      },
      {
        "x": 26260,
        "y": 22220
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_e1_2",
    "name": "Kamienica Rynek Główny 2",
    "address": "Rynek Główny 2",
    "polygon": [
      {
        "x": 26260,
        "y": 22230
      },
      {
        "x": 26800,
        "y": 22230
      },
      {
        "x": 26800,
        "y": 22500
      },
      {
        "x": 26260,
        "y": 22500
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e1_2",
        "x": 26260,
        "y": 22365,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e1_2",
        "name": "Rynek Główny 2 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 26272,
            "y": 22242
          },
          {
            "x": 26788,
            "y": 22242
          },
          {
            "x": 26788,
            "y": 22488
          },
          {
            "x": 26272,
            "y": 22488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 22365,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 22289
      },
      {
        "x": 26268,
        "y": 22441
      },
      {
        "x": 26268,
        "y": 22365
      }
    ]
  },
  {
    "id": "kam_ryn_e1_3",
    "name": "Kamienica Rynek Główny 3",
    "address": "Rynek Główny 3",
    "polygon": [
      {
        "x": 26260,
        "y": 22510
      },
      {
        "x": 26800,
        "y": 22510
      },
      {
        "x": 26800,
        "y": 22780
      },
      {
        "x": 26260,
        "y": 22780
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_e1_4",
    "name": "Kamienica Rynek Główny 4",
    "address": "Rynek Główny 4",
    "polygon": [
      {
        "x": 26260,
        "y": 22790
      },
      {
        "x": 26800,
        "y": 22790
      },
      {
        "x": 26800,
        "y": 23060
      },
      {
        "x": 26260,
        "y": 23060
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e1_4",
        "x": 26260,
        "y": 22925,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e1_4",
        "name": "Rynek Główny 4 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 26272,
            "y": 22802
          },
          {
            "x": 26788,
            "y": 22802
          },
          {
            "x": 26788,
            "y": 23048
          },
          {
            "x": 26272,
            "y": 23048
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 22925,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 22849
      },
      {
        "x": 26268,
        "y": 23001
      },
      {
        "x": 26268,
        "y": 22925
      }
    ]
  },
  {
    "id": "kam_ryn_e2_5",
    "name": "Kamienica Rynek Główny 5",
    "address": "Rynek Główny 5",
    "polygon": [
      {
        "x": 26260,
        "y": 23280
      },
      {
        "x": 26800,
        "y": 23280
      },
      {
        "x": 26800,
        "y": 23550
      },
      {
        "x": 26260,
        "y": 23550
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e2_5",
        "x": 26260,
        "y": 23415,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e2_5",
        "name": "Rynek Główny 5 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 26272,
            "y": 23292
          },
          {
            "x": 26788,
            "y": 23292
          },
          {
            "x": 26788,
            "y": 23538
          },
          {
            "x": 26272,
            "y": 23538
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 23415,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 23339
      },
      {
        "x": 26268,
        "y": 23491
      },
      {
        "x": 26268,
        "y": 23415
      }
    ]
  },
  {
    "id": "kam_ryn_e2_6",
    "name": "Kamienica Rynek Główny 6",
    "address": "Rynek Główny 6",
    "polygon": [
      {
        "x": 26260,
        "y": 23560
      },
      {
        "x": 26800,
        "y": 23560
      },
      {
        "x": 26800,
        "y": 23830
      },
      {
        "x": 26260,
        "y": 23830
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_e2_7",
    "name": "Kamienica Rynek Główny 7",
    "address": "Rynek Główny 7",
    "polygon": [
      {
        "x": 26260,
        "y": 23840
      },
      {
        "x": 26800,
        "y": 23840
      },
      {
        "x": 26800,
        "y": 24110
      },
      {
        "x": 26260,
        "y": 24110
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e2_7",
        "x": 26260,
        "y": 23975,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e2_7",
        "name": "Rynek Główny 7 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 26272,
            "y": 23852
          },
          {
            "x": 26788,
            "y": 23852
          },
          {
            "x": 26788,
            "y": 24098
          },
          {
            "x": 26272,
            "y": 24098
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 23975,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 23899
      },
      {
        "x": 26268,
        "y": 24051
      },
      {
        "x": 26268,
        "y": 23975
      }
    ]
  },
  {
    "id": "kam_ryn_e2_8",
    "name": "Kamienica Rynek Główny 8",
    "address": "Rynek Główny 8",
    "polygon": [
      {
        "x": 26260,
        "y": 24120
      },
      {
        "x": 26800,
        "y": 24120
      },
      {
        "x": 26800,
        "y": 24390
      },
      {
        "x": 26260,
        "y": 24390
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_e2_9",
    "name": "Kamienica Rynek Główny 9",
    "address": "Rynek Główny 9",
    "polygon": [
      {
        "x": 26260,
        "y": 24400
      },
      {
        "x": 26800,
        "y": 24400
      },
      {
        "x": 26800,
        "y": 24670
      },
      {
        "x": 26260,
        "y": 24670
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e2_9",
        "x": 26260,
        "y": 24535,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e2_9",
        "name": "Rynek Główny 9 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 26272,
            "y": 24412
          },
          {
            "x": 26788,
            "y": 24412
          },
          {
            "x": 26788,
            "y": 24658
          },
          {
            "x": 26272,
            "y": 24658
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 24535,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 24459
      },
      {
        "x": 26268,
        "y": 24611
      },
      {
        "x": 26268,
        "y": 24535
      }
    ]
  },
  {
    "id": "kam_ryn_e3_10",
    "name": "Kamienica Rynek Główny 10",
    "address": "Rynek Główny 10",
    "polygon": [
      {
        "x": 26260,
        "y": 24920
      },
      {
        "x": 26800,
        "y": 24920
      },
      {
        "x": 26800,
        "y": 25220
      },
      {
        "x": 26260,
        "y": 25220
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_e3_11",
    "name": "Kamienica Rynek Główny 11",
    "address": "Rynek Główny 11",
    "polygon": [
      {
        "x": 26260,
        "y": 25230
      },
      {
        "x": 26800,
        "y": 25230
      },
      {
        "x": 26800,
        "y": 25530
      },
      {
        "x": 26260,
        "y": 25530
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e3_11",
        "x": 26260,
        "y": 25380,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e3_11",
        "name": "Rynek Główny 11 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 26272,
            "y": 25242
          },
          {
            "x": 26788,
            "y": 25242
          },
          {
            "x": 26788,
            "y": 25518
          },
          {
            "x": 26272,
            "y": 25518
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 25380,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 25296
      },
      {
        "x": 26268,
        "y": 25464
      },
      {
        "x": 26268,
        "y": 25380
      }
    ]
  },
  {
    "id": "kam_ryn_e3_12",
    "name": "Kamienica Rynek Główny 12",
    "address": "Rynek Główny 12",
    "polygon": [
      {
        "x": 26260,
        "y": 25540
      },
      {
        "x": 26800,
        "y": 25540
      },
      {
        "x": 26800,
        "y": 25840
      },
      {
        "x": 26260,
        "y": 25840
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_ryn_e3_13",
    "name": "Kamienica Rynek Główny 13",
    "address": "Rynek Główny 13",
    "polygon": [
      {
        "x": 26260,
        "y": 25850
      },
      {
        "x": 26800,
        "y": 25850
      },
      {
        "x": 26800,
        "y": 26150
      },
      {
        "x": 26260,
        "y": 26150
      }
    ],
    "doors": [
      {
        "id": "d_kam_ryn_e3_13",
        "x": 26260,
        "y": 26000,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_ryn_e3_13",
        "name": "Rynek Główny 13 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 26272,
            "y": 25862
          },
          {
            "x": 26788,
            "y": 25862
          },
          {
            "x": 26788,
            "y": 26138
          },
          {
            "x": 26272,
            "y": 26138
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26530,
            "y": 26000,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26268,
        "y": 25916
      },
      {
        "x": 26268,
        "y": 26084
      },
      {
        "x": 26268,
        "y": 26000
      }
    ]
  },
  {
    "id": "kam_slaw_w1_1",
    "name": "Kamienica ul. Sławkowska 1",
    "address": "ul. Sławkowska 1",
    "polygon": [
      {
        "x": 22640,
        "y": 20480
      },
      {
        "x": 23080,
        "y": 20480
      },
      {
        "x": 23080,
        "y": 20675
      },
      {
        "x": 22640,
        "y": 20675
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_w1_1",
        "x": 23080,
        "y": 20578,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_w1_1",
        "name": "ul. Sławkowska 1 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22652,
            "y": 20492
          },
          {
            "x": 23068,
            "y": 20492
          },
          {
            "x": 23068,
            "y": 20663
          },
          {
            "x": 22652,
            "y": 20663
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 20578,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23072,
        "y": 20523
      },
      {
        "x": 23072,
        "y": 20632
      }
    ]
  },
  {
    "id": "kam_slaw_w1_3",
    "name": "Kamienica ul. Sławkowska 3",
    "address": "ul. Sławkowska 3",
    "polygon": [
      {
        "x": 22640,
        "y": 20690
      },
      {
        "x": 23080,
        "y": 20690
      },
      {
        "x": 23080,
        "y": 20885
      },
      {
        "x": 22640,
        "y": 20885
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_w1_5",
    "name": "Kamienica ul. Sławkowska 5",
    "address": "ul. Sławkowska 5",
    "polygon": [
      {
        "x": 22640,
        "y": 20900
      },
      {
        "x": 23080,
        "y": 20900
      },
      {
        "x": 23080,
        "y": 21095
      },
      {
        "x": 22640,
        "y": 21095
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_w1_5",
        "x": 23080,
        "y": 20998,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_w1_5",
        "name": "ul. Sławkowska 5 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 22652,
            "y": 20912
          },
          {
            "x": 23068,
            "y": 20912
          },
          {
            "x": 23068,
            "y": 21083
          },
          {
            "x": 22652,
            "y": 21083
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 20998,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23072,
        "y": 20943
      },
      {
        "x": 23072,
        "y": 21052
      }
    ]
  },
  {
    "id": "kam_slaw_e1_2",
    "name": "Kamienica ul. Sławkowska 2",
    "address": "ul. Sławkowska 2",
    "polygon": [
      {
        "x": 23270,
        "y": 20480
      },
      {
        "x": 23560,
        "y": 20480
      },
      {
        "x": 23560,
        "y": 20675
      },
      {
        "x": 23270,
        "y": 20675
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e1_4",
    "name": "Kamienica ul. Sławkowska 4",
    "address": "ul. Sławkowska 4",
    "polygon": [
      {
        "x": 23270,
        "y": 20690
      },
      {
        "x": 23560,
        "y": 20690
      },
      {
        "x": 23560,
        "y": 20885
      },
      {
        "x": 23270,
        "y": 20885
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_e1_4",
        "x": 23270,
        "y": 20788,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_e1_4",
        "name": "ul. Sławkowska 4 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23282,
            "y": 20702
          },
          {
            "x": 23548,
            "y": 20702
          },
          {
            "x": 23548,
            "y": 20873
          },
          {
            "x": 23282,
            "y": 20873
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23415,
            "y": 20788,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23278,
        "y": 20733
      },
      {
        "x": 23278,
        "y": 20842
      }
    ]
  },
  {
    "id": "kam_slaw_e1_6",
    "name": "Kamienica ul. Sławkowska 6",
    "address": "ul. Sławkowska 6",
    "polygon": [
      {
        "x": 23270,
        "y": 20900
      },
      {
        "x": 23560,
        "y": 20900
      },
      {
        "x": 23560,
        "y": 21095
      },
      {
        "x": 23270,
        "y": 21095
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_w1_1",
    "name": "Kamienica ul. św. Jana 1",
    "address": "ul. św. Jana 1",
    "polygon": [
      {
        "x": 23600,
        "y": 20480
      },
      {
        "x": 23910,
        "y": 20480
      },
      {
        "x": 23910,
        "y": 20675
      },
      {
        "x": 23600,
        "y": 20675
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_w1_1",
        "x": 23910,
        "y": 20578,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_w1_1",
        "name": "ul. św. Jana 1 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23612,
            "y": 20492
          },
          {
            "x": 23898,
            "y": 20492
          },
          {
            "x": 23898,
            "y": 20663
          },
          {
            "x": 23612,
            "y": 20663
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23755,
            "y": 20578,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23902,
        "y": 20523
      },
      {
        "x": 23902,
        "y": 20632
      }
    ]
  },
  {
    "id": "kam_jana_w1_3",
    "name": "Kamienica ul. św. Jana 3",
    "address": "ul. św. Jana 3",
    "polygon": [
      {
        "x": 23600,
        "y": 20690
      },
      {
        "x": 23910,
        "y": 20690
      },
      {
        "x": 23910,
        "y": 20885
      },
      {
        "x": 23600,
        "y": 20885
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_w1_5",
    "name": "Kamienica ul. św. Jana 5",
    "address": "ul. św. Jana 5",
    "polygon": [
      {
        "x": 23600,
        "y": 20900
      },
      {
        "x": 23910,
        "y": 20900
      },
      {
        "x": 23910,
        "y": 21095
      },
      {
        "x": 23600,
        "y": 21095
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_w1_5",
        "x": 23910,
        "y": 20998,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_w1_5",
        "name": "ul. św. Jana 5 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23612,
            "y": 20912
          },
          {
            "x": 23898,
            "y": 20912
          },
          {
            "x": 23898,
            "y": 21083
          },
          {
            "x": 23612,
            "y": 21083
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23755,
            "y": 20998,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23902,
        "y": 20943
      },
      {
        "x": 23902,
        "y": 21052
      }
    ]
  },
  {
    "id": "kam_jana_e1_2",
    "name": "Kamienica ul. św. Jana 2",
    "address": "ul. św. Jana 2",
    "polygon": [
      {
        "x": 24090,
        "y": 20480
      },
      {
        "x": 24400,
        "y": 20480
      },
      {
        "x": 24400,
        "y": 20675
      },
      {
        "x": 24090,
        "y": 20675
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e1_4",
    "name": "Kamienica ul. św. Jana 4",
    "address": "ul. św. Jana 4",
    "polygon": [
      {
        "x": 24090,
        "y": 20690
      },
      {
        "x": 24400,
        "y": 20690
      },
      {
        "x": 24400,
        "y": 20885
      },
      {
        "x": 24090,
        "y": 20885
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_e1_4",
        "x": 24090,
        "y": 20788,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_e1_4",
        "name": "ul. św. Jana 4 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24102,
            "y": 20702
          },
          {
            "x": 24388,
            "y": 20702
          },
          {
            "x": 24388,
            "y": 20873
          },
          {
            "x": 24102,
            "y": 20873
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24245,
            "y": 20788,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24098,
        "y": 20733
      },
      {
        "x": 24098,
        "y": 20842
      }
    ]
  },
  {
    "id": "kam_jana_e1_6",
    "name": "Kamienica ul. św. Jana 6",
    "address": "ul. św. Jana 6",
    "polygon": [
      {
        "x": 24090,
        "y": 20900
      },
      {
        "x": 24400,
        "y": 20900
      },
      {
        "x": 24400,
        "y": 21095
      },
      {
        "x": 24090,
        "y": 21095
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_w1_1",
    "name": "Kamienica ul. Floriańska 1",
    "address": "ul. Floriańska 1",
    "polygon": [
      {
        "x": 24430,
        "y": 20480
      },
      {
        "x": 24730,
        "y": 20480
      },
      {
        "x": 24730,
        "y": 20675
      },
      {
        "x": 24430,
        "y": 20675
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_w1_1",
        "x": 24730,
        "y": 20578,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_w1_1",
        "name": "ul. Floriańska 1 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24442,
            "y": 20492
          },
          {
            "x": 24718,
            "y": 20492
          },
          {
            "x": 24718,
            "y": 20663
          },
          {
            "x": 24442,
            "y": 20663
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24580,
            "y": 20578,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24722,
        "y": 20523
      },
      {
        "x": 24722,
        "y": 20632
      }
    ]
  },
  {
    "id": "kam_flor_w1_3",
    "name": "Kamienica ul. Floriańska 3",
    "address": "ul. Floriańska 3",
    "polygon": [
      {
        "x": 24430,
        "y": 20690
      },
      {
        "x": 24730,
        "y": 20690
      },
      {
        "x": 24730,
        "y": 20885
      },
      {
        "x": 24430,
        "y": 20885
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_w1_5",
    "name": "Kamienica ul. Floriańska 5",
    "address": "ul. Floriańska 5",
    "polygon": [
      {
        "x": 24430,
        "y": 20900
      },
      {
        "x": 24730,
        "y": 20900
      },
      {
        "x": 24730,
        "y": 21095
      },
      {
        "x": 24430,
        "y": 21095
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_w1_5",
        "x": 24730,
        "y": 20998,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_w1_5",
        "name": "ul. Floriańska 5 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24442,
            "y": 20912
          },
          {
            "x": 24718,
            "y": 20912
          },
          {
            "x": 24718,
            "y": 21083
          },
          {
            "x": 24442,
            "y": 21083
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24580,
            "y": 20998,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24722,
        "y": 20943
      },
      {
        "x": 24722,
        "y": 21052
      }
    ]
  },
  {
    "id": "kam_flor_e1_2",
    "name": "Kamienica ul. Floriańska 2",
    "address": "ul. Floriańska 2",
    "polygon": [
      {
        "x": 24910,
        "y": 20480
      },
      {
        "x": 25290,
        "y": 20480
      },
      {
        "x": 25290,
        "y": 20675
      },
      {
        "x": 24910,
        "y": 20675
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e1_4",
    "name": "Kamienica ul. Floriańska 4",
    "address": "ul. Floriańska 4",
    "polygon": [
      {
        "x": 24910,
        "y": 20690
      },
      {
        "x": 25290,
        "y": 20690
      },
      {
        "x": 25290,
        "y": 20885
      },
      {
        "x": 24910,
        "y": 20885
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_e1_4",
        "x": 24910,
        "y": 20788,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_e1_4",
        "name": "ul. Floriańska 4 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24922,
            "y": 20702
          },
          {
            "x": 25278,
            "y": 20702
          },
          {
            "x": 25278,
            "y": 20873
          },
          {
            "x": 24922,
            "y": 20873
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25100,
            "y": 20788,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24918,
        "y": 20733
      },
      {
        "x": 24918,
        "y": 20842
      }
    ]
  },
  {
    "id": "kam_flor_e1_6",
    "name": "Kamienica ul. Floriańska 6",
    "address": "ul. Floriańska 6",
    "polygon": [
      {
        "x": 24910,
        "y": 20900
      },
      {
        "x": 25290,
        "y": 20900
      },
      {
        "x": 25290,
        "y": 21095
      },
      {
        "x": 24910,
        "y": 21095
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_w1_1",
    "name": "Kamienica ul. Szpitalna 1",
    "address": "ul. Szpitalna 1",
    "polygon": [
      {
        "x": 25850,
        "y": 20480
      },
      {
        "x": 26310,
        "y": 20480
      },
      {
        "x": 26310,
        "y": 20675
      },
      {
        "x": 25850,
        "y": 20675
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_w1_1",
        "x": 26310,
        "y": 20578,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_w1_1",
        "name": "ul. Szpitalna 1 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 25862,
            "y": 20492
          },
          {
            "x": 26298,
            "y": 20492
          },
          {
            "x": 26298,
            "y": 20663
          },
          {
            "x": 25862,
            "y": 20663
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26080,
            "y": 20578,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26302,
        "y": 20523
      },
      {
        "x": 26302,
        "y": 20632
      }
    ]
  },
  {
    "id": "kam_szpit_w1_3",
    "name": "Kamienica ul. Szpitalna 3",
    "address": "ul. Szpitalna 3",
    "polygon": [
      {
        "x": 25850,
        "y": 20690
      },
      {
        "x": 26310,
        "y": 20690
      },
      {
        "x": 26310,
        "y": 20885
      },
      {
        "x": 25850,
        "y": 20885
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_w1_5",
    "name": "Kamienica ul. Szpitalna 5",
    "address": "ul. Szpitalna 5",
    "polygon": [
      {
        "x": 25850,
        "y": 20900
      },
      {
        "x": 26310,
        "y": 20900
      },
      {
        "x": 26310,
        "y": 21095
      },
      {
        "x": 25850,
        "y": 21095
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_w1_5",
        "x": 26310,
        "y": 20998,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_w1_5",
        "name": "ul. Szpitalna 5 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 25862,
            "y": 20912
          },
          {
            "x": 26298,
            "y": 20912
          },
          {
            "x": 26298,
            "y": 21083
          },
          {
            "x": 25862,
            "y": 21083
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26080,
            "y": 20998,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26302,
        "y": 20943
      },
      {
        "x": 26302,
        "y": 21052
      }
    ]
  },
  {
    "id": "kam_szpit_e1_2",
    "name": "Kamienica ul. Szpitalna 2",
    "address": "ul. Szpitalna 2",
    "polygon": [
      {
        "x": 26490,
        "y": 20480
      },
      {
        "x": 26970,
        "y": 20480
      },
      {
        "x": 26970,
        "y": 20675
      },
      {
        "x": 26490,
        "y": 20675
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e1_4",
    "name": "Kamienica ul. Szpitalna 4",
    "address": "ul. Szpitalna 4",
    "polygon": [
      {
        "x": 26490,
        "y": 20690
      },
      {
        "x": 26970,
        "y": 20690
      },
      {
        "x": 26970,
        "y": 20885
      },
      {
        "x": 26490,
        "y": 20885
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_e1_4",
        "x": 26490,
        "y": 20788,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_e1_4",
        "name": "ul. Szpitalna 4 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 26502,
            "y": 20702
          },
          {
            "x": 26958,
            "y": 20702
          },
          {
            "x": 26958,
            "y": 20873
          },
          {
            "x": 26502,
            "y": 20873
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26730,
            "y": 20788,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26498,
        "y": 20733
      },
      {
        "x": 26498,
        "y": 20842
      }
    ]
  },
  {
    "id": "kam_szpit_e1_6",
    "name": "Kamienica ul. Szpitalna 6",
    "address": "ul. Szpitalna 6",
    "polygon": [
      {
        "x": 26490,
        "y": 20900
      },
      {
        "x": 26970,
        "y": 20900
      },
      {
        "x": 26970,
        "y": 21095
      },
      {
        "x": 26490,
        "y": 21095
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_krzyz_w1_1",
    "name": "Kamienica ul. św. Krzyża 1",
    "address": "ul. św. Krzyża 1",
    "polygon": [
      {
        "x": 27020,
        "y": 20480
      },
      {
        "x": 27510,
        "y": 20480
      },
      {
        "x": 27510,
        "y": 20675
      },
      {
        "x": 27020,
        "y": 20675
      }
    ],
    "doors": [
      {
        "id": "d_kam_krzyz_w1_1",
        "x": 27510,
        "y": 20578,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_krzyz_w1_1",
        "name": "ul. św. Krzyża 1 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 27032,
            "y": 20492
          },
          {
            "x": 27498,
            "y": 20492
          },
          {
            "x": 27498,
            "y": 20663
          },
          {
            "x": 27032,
            "y": 20663
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27265,
            "y": 20578,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27502,
        "y": 20523
      },
      {
        "x": 27502,
        "y": 20632
      }
    ]
  },
  {
    "id": "kam_krzyz_w1_3",
    "name": "Kamienica ul. św. Krzyża 3",
    "address": "ul. św. Krzyża 3",
    "polygon": [
      {
        "x": 27020,
        "y": 20690
      },
      {
        "x": 27510,
        "y": 20690
      },
      {
        "x": 27510,
        "y": 20885
      },
      {
        "x": 27020,
        "y": 20885
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_krzyz_w1_5",
    "name": "Kamienica ul. św. Krzyża 5",
    "address": "ul. św. Krzyża 5",
    "polygon": [
      {
        "x": 27020,
        "y": 20900
      },
      {
        "x": 27510,
        "y": 20900
      },
      {
        "x": 27510,
        "y": 21095
      },
      {
        "x": 27020,
        "y": 21095
      }
    ],
    "doors": [
      {
        "id": "d_kam_krzyz_w1_5",
        "x": 27510,
        "y": 20998,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_krzyz_w1_5",
        "name": "ul. św. Krzyża 5 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 27032,
            "y": 20912
          },
          {
            "x": 27498,
            "y": 20912
          },
          {
            "x": 27498,
            "y": 21083
          },
          {
            "x": 27032,
            "y": 21083
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27265,
            "y": 20998,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27502,
        "y": 20943
      },
      {
        "x": 27502,
        "y": 21052
      }
    ]
  },
  {
    "id": "kam_slaw_w2_7",
    "name": "Kamienica ul. Sławkowska 7",
    "address": "ul. Sławkowska 7",
    "polygon": [
      {
        "x": 22640,
        "y": 19280
      },
      {
        "x": 23080,
        "y": 19280
      },
      {
        "x": 23080,
        "y": 19475
      },
      {
        "x": 22640,
        "y": 19475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_w2_9",
    "name": "Kamienica ul. Sławkowska 9",
    "address": "ul. Sławkowska 9",
    "polygon": [
      {
        "x": 22640,
        "y": 19490
      },
      {
        "x": 23080,
        "y": 19490
      },
      {
        "x": 23080,
        "y": 19685
      },
      {
        "x": 22640,
        "y": 19685
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_w2_9",
        "x": 23080,
        "y": 19588,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_w2_9",
        "name": "ul. Sławkowska 9 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 22652,
            "y": 19502
          },
          {
            "x": 23068,
            "y": 19502
          },
          {
            "x": 23068,
            "y": 19673
          },
          {
            "x": 22652,
            "y": 19673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 19588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23072,
        "y": 19533
      },
      {
        "x": 23072,
        "y": 19642
      }
    ]
  },
  {
    "id": "kam_slaw_w2_11",
    "name": "Kamienica ul. Sławkowska 11",
    "address": "ul. Sławkowska 11",
    "polygon": [
      {
        "x": 22640,
        "y": 19700
      },
      {
        "x": 23080,
        "y": 19700
      },
      {
        "x": 23080,
        "y": 19895
      },
      {
        "x": 22640,
        "y": 19895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_w2_13",
    "name": "Kamienica ul. Sławkowska 13",
    "address": "ul. Sławkowska 13",
    "polygon": [
      {
        "x": 22640,
        "y": 19910
      },
      {
        "x": 23080,
        "y": 19910
      },
      {
        "x": 23080,
        "y": 20105
      },
      {
        "x": 22640,
        "y": 20105
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_w2_13",
        "x": 23080,
        "y": 20008,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_w2_13",
        "name": "ul. Sławkowska 13 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22652,
            "y": 19922
          },
          {
            "x": 23068,
            "y": 19922
          },
          {
            "x": 23068,
            "y": 20093
          },
          {
            "x": 22652,
            "y": 20093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 20008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23072,
        "y": 19953
      },
      {
        "x": 23072,
        "y": 20062
      }
    ]
  },
  {
    "id": "kam_slaw_w2_15",
    "name": "Kamienica ul. Sławkowska 15",
    "address": "ul. Sławkowska 15",
    "polygon": [
      {
        "x": 22640,
        "y": 20120
      },
      {
        "x": 23080,
        "y": 20120
      },
      {
        "x": 23080,
        "y": 20315
      },
      {
        "x": 22640,
        "y": 20315
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e2_8",
    "name": "Kamienica ul. Sławkowska 8",
    "address": "ul. Sławkowska 8",
    "polygon": [
      {
        "x": 23270,
        "y": 19280
      },
      {
        "x": 23560,
        "y": 19280
      },
      {
        "x": 23560,
        "y": 19475
      },
      {
        "x": 23270,
        "y": 19475
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_e2_8",
        "x": 23270,
        "y": 19378,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_e2_8",
        "name": "ul. Sławkowska 8 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23282,
            "y": 19292
          },
          {
            "x": 23548,
            "y": 19292
          },
          {
            "x": 23548,
            "y": 19463
          },
          {
            "x": 23282,
            "y": 19463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23415,
            "y": 19378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23278,
        "y": 19323
      },
      {
        "x": 23278,
        "y": 19432
      }
    ]
  },
  {
    "id": "kam_slaw_e2_10",
    "name": "Kamienica ul. Sławkowska 10",
    "address": "ul. Sławkowska 10",
    "polygon": [
      {
        "x": 23270,
        "y": 19490
      },
      {
        "x": 23560,
        "y": 19490
      },
      {
        "x": 23560,
        "y": 19685
      },
      {
        "x": 23270,
        "y": 19685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e2_12",
    "name": "Kamienica ul. Sławkowska 12",
    "address": "ul. Sławkowska 12",
    "polygon": [
      {
        "x": 23270,
        "y": 19700
      },
      {
        "x": 23560,
        "y": 19700
      },
      {
        "x": 23560,
        "y": 19895
      },
      {
        "x": 23270,
        "y": 19895
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_e2_12",
        "x": 23270,
        "y": 19798,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_e2_12",
        "name": "ul. Sławkowska 12 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23282,
            "y": 19712
          },
          {
            "x": 23548,
            "y": 19712
          },
          {
            "x": 23548,
            "y": 19883
          },
          {
            "x": 23282,
            "y": 19883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23415,
            "y": 19798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23278,
        "y": 19743
      },
      {
        "x": 23278,
        "y": 19852
      }
    ]
  },
  {
    "id": "kam_slaw_e2_14",
    "name": "Kamienica ul. Sławkowska 14",
    "address": "ul. Sławkowska 14",
    "polygon": [
      {
        "x": 23270,
        "y": 19910
      },
      {
        "x": 23560,
        "y": 19910
      },
      {
        "x": 23560,
        "y": 20105
      },
      {
        "x": 23270,
        "y": 20105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e2_16",
    "name": "Kamienica ul. Sławkowska 16",
    "address": "ul. Sławkowska 16",
    "polygon": [
      {
        "x": 23270,
        "y": 20120
      },
      {
        "x": 23560,
        "y": 20120
      },
      {
        "x": 23560,
        "y": 20315
      },
      {
        "x": 23270,
        "y": 20315
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_e2_16",
        "x": 23270,
        "y": 20218,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_e2_16",
        "name": "ul. Sławkowska 16 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23282,
            "y": 20132
          },
          {
            "x": 23548,
            "y": 20132
          },
          {
            "x": 23548,
            "y": 20303
          },
          {
            "x": 23282,
            "y": 20303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23415,
            "y": 20218,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23278,
        "y": 20163
      },
      {
        "x": 23278,
        "y": 20272
      }
    ]
  },
  {
    "id": "kam_jana_w2_7",
    "name": "Kamienica ul. św. Jana 7",
    "address": "ul. św. Jana 7",
    "polygon": [
      {
        "x": 23600,
        "y": 19280
      },
      {
        "x": 23910,
        "y": 19280
      },
      {
        "x": 23910,
        "y": 19475
      },
      {
        "x": 23600,
        "y": 19475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_w2_9",
    "name": "Kamienica ul. św. Jana 9",
    "address": "ul. św. Jana 9",
    "polygon": [
      {
        "x": 23600,
        "y": 19490
      },
      {
        "x": 23910,
        "y": 19490
      },
      {
        "x": 23910,
        "y": 19685
      },
      {
        "x": 23600,
        "y": 19685
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_w2_9",
        "x": 23910,
        "y": 19588,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_w2_9",
        "name": "ul. św. Jana 9 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 23612,
            "y": 19502
          },
          {
            "x": 23898,
            "y": 19502
          },
          {
            "x": 23898,
            "y": 19673
          },
          {
            "x": 23612,
            "y": 19673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23755,
            "y": 19588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23902,
        "y": 19533
      },
      {
        "x": 23902,
        "y": 19642
      }
    ]
  },
  {
    "id": "kam_jana_w2_11",
    "name": "Kamienica ul. św. Jana 11",
    "address": "ul. św. Jana 11",
    "polygon": [
      {
        "x": 23600,
        "y": 19700
      },
      {
        "x": 23910,
        "y": 19700
      },
      {
        "x": 23910,
        "y": 19895
      },
      {
        "x": 23600,
        "y": 19895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_w2_13",
    "name": "Kamienica ul. św. Jana 13",
    "address": "ul. św. Jana 13",
    "polygon": [
      {
        "x": 23600,
        "y": 19910
      },
      {
        "x": 23910,
        "y": 19910
      },
      {
        "x": 23910,
        "y": 20105
      },
      {
        "x": 23600,
        "y": 20105
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_w2_13",
        "x": 23910,
        "y": 20008,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_w2_13",
        "name": "ul. św. Jana 13 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23612,
            "y": 19922
          },
          {
            "x": 23898,
            "y": 19922
          },
          {
            "x": 23898,
            "y": 20093
          },
          {
            "x": 23612,
            "y": 20093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23755,
            "y": 20008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23902,
        "y": 19953
      },
      {
        "x": 23902,
        "y": 20062
      }
    ]
  },
  {
    "id": "kam_jana_w2_15",
    "name": "Kamienica ul. św. Jana 15",
    "address": "ul. św. Jana 15",
    "polygon": [
      {
        "x": 23600,
        "y": 20120
      },
      {
        "x": 23910,
        "y": 20120
      },
      {
        "x": 23910,
        "y": 20315
      },
      {
        "x": 23600,
        "y": 20315
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e2_8",
    "name": "Kamienica ul. św. Jana 8",
    "address": "ul. św. Jana 8",
    "polygon": [
      {
        "x": 24090,
        "y": 19280
      },
      {
        "x": 24400,
        "y": 19280
      },
      {
        "x": 24400,
        "y": 19475
      },
      {
        "x": 24090,
        "y": 19475
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_e2_8",
        "x": 24090,
        "y": 19378,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_e2_8",
        "name": "ul. św. Jana 8 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24102,
            "y": 19292
          },
          {
            "x": 24388,
            "y": 19292
          },
          {
            "x": 24388,
            "y": 19463
          },
          {
            "x": 24102,
            "y": 19463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24245,
            "y": 19378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24098,
        "y": 19323
      },
      {
        "x": 24098,
        "y": 19432
      }
    ]
  },
  {
    "id": "kam_jana_e2_10",
    "name": "Kamienica ul. św. Jana 10",
    "address": "ul. św. Jana 10",
    "polygon": [
      {
        "x": 24090,
        "y": 19490
      },
      {
        "x": 24400,
        "y": 19490
      },
      {
        "x": 24400,
        "y": 19685
      },
      {
        "x": 24090,
        "y": 19685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e2_12",
    "name": "Kamienica ul. św. Jana 12",
    "address": "ul. św. Jana 12",
    "polygon": [
      {
        "x": 24090,
        "y": 19700
      },
      {
        "x": 24400,
        "y": 19700
      },
      {
        "x": 24400,
        "y": 19895
      },
      {
        "x": 24090,
        "y": 19895
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_e2_12",
        "x": 24090,
        "y": 19798,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_e2_12",
        "name": "ul. św. Jana 12 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24102,
            "y": 19712
          },
          {
            "x": 24388,
            "y": 19712
          },
          {
            "x": 24388,
            "y": 19883
          },
          {
            "x": 24102,
            "y": 19883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24245,
            "y": 19798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24098,
        "y": 19743
      },
      {
        "x": 24098,
        "y": 19852
      }
    ]
  },
  {
    "id": "kam_jana_e2_14",
    "name": "Kamienica ul. św. Jana 14",
    "address": "ul. św. Jana 14",
    "polygon": [
      {
        "x": 24090,
        "y": 19910
      },
      {
        "x": 24400,
        "y": 19910
      },
      {
        "x": 24400,
        "y": 20105
      },
      {
        "x": 24090,
        "y": 20105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e2_16",
    "name": "Kamienica ul. św. Jana 16",
    "address": "ul. św. Jana 16",
    "polygon": [
      {
        "x": 24090,
        "y": 20120
      },
      {
        "x": 24400,
        "y": 20120
      },
      {
        "x": 24400,
        "y": 20315
      },
      {
        "x": 24090,
        "y": 20315
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_e2_16",
        "x": 24090,
        "y": 20218,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_e2_16",
        "name": "ul. św. Jana 16 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24102,
            "y": 20132
          },
          {
            "x": 24388,
            "y": 20132
          },
          {
            "x": 24388,
            "y": 20303
          },
          {
            "x": 24102,
            "y": 20303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24245,
            "y": 20218,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24098,
        "y": 20163
      },
      {
        "x": 24098,
        "y": 20272
      }
    ]
  },
  {
    "id": "kam_flor_w2_7",
    "name": "Kamienica ul. Floriańska 7",
    "address": "ul. Floriańska 7",
    "polygon": [
      {
        "x": 24430,
        "y": 19280
      },
      {
        "x": 24730,
        "y": 19280
      },
      {
        "x": 24730,
        "y": 19475
      },
      {
        "x": 24430,
        "y": 19475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_w2_9",
    "name": "Kamienica ul. Floriańska 9",
    "address": "ul. Floriańska 9",
    "polygon": [
      {
        "x": 24430,
        "y": 19490
      },
      {
        "x": 24730,
        "y": 19490
      },
      {
        "x": 24730,
        "y": 19685
      },
      {
        "x": 24430,
        "y": 19685
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_w2_9",
        "x": 24730,
        "y": 19588,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_w2_9",
        "name": "ul. Floriańska 9 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24442,
            "y": 19502
          },
          {
            "x": 24718,
            "y": 19502
          },
          {
            "x": 24718,
            "y": 19673
          },
          {
            "x": 24442,
            "y": 19673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24580,
            "y": 19588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24722,
        "y": 19533
      },
      {
        "x": 24722,
        "y": 19642
      }
    ]
  },
  {
    "id": "kam_flor_w2_11",
    "name": "Kamienica ul. Floriańska 11",
    "address": "ul. Floriańska 11",
    "polygon": [
      {
        "x": 24430,
        "y": 19700
      },
      {
        "x": 24730,
        "y": 19700
      },
      {
        "x": 24730,
        "y": 19895
      },
      {
        "x": 24430,
        "y": 19895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_w2_13",
    "name": "Kamienica ul. Floriańska 13",
    "address": "ul. Floriańska 13",
    "polygon": [
      {
        "x": 24430,
        "y": 19910
      },
      {
        "x": 24730,
        "y": 19910
      },
      {
        "x": 24730,
        "y": 20105
      },
      {
        "x": 24430,
        "y": 20105
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_w2_13",
        "x": 24730,
        "y": 20008,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_w2_13",
        "name": "ul. Floriańska 13 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24442,
            "y": 19922
          },
          {
            "x": 24718,
            "y": 19922
          },
          {
            "x": 24718,
            "y": 20093
          },
          {
            "x": 24442,
            "y": 20093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24580,
            "y": 20008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24722,
        "y": 19953
      },
      {
        "x": 24722,
        "y": 20062
      }
    ]
  },
  {
    "id": "kam_flor_w2_15",
    "name": "Kamienica ul. Floriańska 15",
    "address": "ul. Floriańska 15",
    "polygon": [
      {
        "x": 24430,
        "y": 20120
      },
      {
        "x": 24730,
        "y": 20120
      },
      {
        "x": 24730,
        "y": 20315
      },
      {
        "x": 24430,
        "y": 20315
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e2_8",
    "name": "Kamienica ul. Floriańska 8",
    "address": "ul. Floriańska 8",
    "polygon": [
      {
        "x": 24910,
        "y": 19280
      },
      {
        "x": 25290,
        "y": 19280
      },
      {
        "x": 25290,
        "y": 19475
      },
      {
        "x": 24910,
        "y": 19475
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_e2_8",
        "x": 24910,
        "y": 19378,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_e2_8",
        "name": "ul. Floriańska 8 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24922,
            "y": 19292
          },
          {
            "x": 25278,
            "y": 19292
          },
          {
            "x": 25278,
            "y": 19463
          },
          {
            "x": 24922,
            "y": 19463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25100,
            "y": 19378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24918,
        "y": 19323
      },
      {
        "x": 24918,
        "y": 19432
      }
    ]
  },
  {
    "id": "kam_flor_e2_10",
    "name": "Kamienica ul. Floriańska 10",
    "address": "ul. Floriańska 10",
    "polygon": [
      {
        "x": 24910,
        "y": 19490
      },
      {
        "x": 25290,
        "y": 19490
      },
      {
        "x": 25290,
        "y": 19685
      },
      {
        "x": 24910,
        "y": 19685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e2_12",
    "name": "Kamienica ul. Floriańska 12",
    "address": "ul. Floriańska 12",
    "polygon": [
      {
        "x": 24910,
        "y": 19700
      },
      {
        "x": 25290,
        "y": 19700
      },
      {
        "x": 25290,
        "y": 19895
      },
      {
        "x": 24910,
        "y": 19895
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_e2_12",
        "x": 24910,
        "y": 19798,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_e2_12",
        "name": "ul. Floriańska 12 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24922,
            "y": 19712
          },
          {
            "x": 25278,
            "y": 19712
          },
          {
            "x": 25278,
            "y": 19883
          },
          {
            "x": 24922,
            "y": 19883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25100,
            "y": 19798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24918,
        "y": 19743
      },
      {
        "x": 24918,
        "y": 19852
      }
    ]
  },
  {
    "id": "kam_flor_e2_14",
    "name": "Kamienica ul. Floriańska 14",
    "address": "ul. Floriańska 14",
    "polygon": [
      {
        "x": 24910,
        "y": 19910
      },
      {
        "x": 25290,
        "y": 19910
      },
      {
        "x": 25290,
        "y": 20105
      },
      {
        "x": 24910,
        "y": 20105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e2_16",
    "name": "Kamienica ul. Floriańska 16",
    "address": "ul. Floriańska 16",
    "polygon": [
      {
        "x": 24910,
        "y": 20120
      },
      {
        "x": 25290,
        "y": 20120
      },
      {
        "x": 25290,
        "y": 20315
      },
      {
        "x": 24910,
        "y": 20315
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_e2_16",
        "x": 24910,
        "y": 20218,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_e2_16",
        "name": "ul. Floriańska 16 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24922,
            "y": 20132
          },
          {
            "x": 25278,
            "y": 20132
          },
          {
            "x": 25278,
            "y": 20303
          },
          {
            "x": 24922,
            "y": 20303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25100,
            "y": 20218,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24918,
        "y": 20163
      },
      {
        "x": 24918,
        "y": 20272
      }
    ]
  },
  {
    "id": "kam_szpit_w2_7",
    "name": "Kamienica ul. Szpitalna 7",
    "address": "ul. Szpitalna 7",
    "polygon": [
      {
        "x": 25850,
        "y": 19280
      },
      {
        "x": 26310,
        "y": 19280
      },
      {
        "x": 26310,
        "y": 19475
      },
      {
        "x": 25850,
        "y": 19475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_w2_9",
    "name": "Kamienica ul. Szpitalna 9",
    "address": "ul. Szpitalna 9",
    "polygon": [
      {
        "x": 25850,
        "y": 19490
      },
      {
        "x": 26310,
        "y": 19490
      },
      {
        "x": 26310,
        "y": 19685
      },
      {
        "x": 25850,
        "y": 19685
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_w2_9",
        "x": 26310,
        "y": 19588,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_w2_9",
        "name": "ul. Szpitalna 9 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 25862,
            "y": 19502
          },
          {
            "x": 26298,
            "y": 19502
          },
          {
            "x": 26298,
            "y": 19673
          },
          {
            "x": 25862,
            "y": 19673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26080,
            "y": 19588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26302,
        "y": 19533
      },
      {
        "x": 26302,
        "y": 19642
      }
    ]
  },
  {
    "id": "kam_szpit_w2_11",
    "name": "Kamienica ul. Szpitalna 11",
    "address": "ul. Szpitalna 11",
    "polygon": [
      {
        "x": 25850,
        "y": 19700
      },
      {
        "x": 26310,
        "y": 19700
      },
      {
        "x": 26310,
        "y": 19895
      },
      {
        "x": 25850,
        "y": 19895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_w2_13",
    "name": "Kamienica ul. Szpitalna 13",
    "address": "ul. Szpitalna 13",
    "polygon": [
      {
        "x": 25850,
        "y": 19910
      },
      {
        "x": 26310,
        "y": 19910
      },
      {
        "x": 26310,
        "y": 20105
      },
      {
        "x": 25850,
        "y": 20105
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_w2_13",
        "x": 26310,
        "y": 20008,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_w2_13",
        "name": "ul. Szpitalna 13 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 25862,
            "y": 19922
          },
          {
            "x": 26298,
            "y": 19922
          },
          {
            "x": 26298,
            "y": 20093
          },
          {
            "x": 25862,
            "y": 20093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26080,
            "y": 20008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26302,
        "y": 19953
      },
      {
        "x": 26302,
        "y": 20062
      }
    ]
  },
  {
    "id": "kam_szpit_w2_15",
    "name": "Kamienica ul. Szpitalna 15",
    "address": "ul. Szpitalna 15",
    "polygon": [
      {
        "x": 25850,
        "y": 20120
      },
      {
        "x": 26310,
        "y": 20120
      },
      {
        "x": 26310,
        "y": 20315
      },
      {
        "x": 25850,
        "y": 20315
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e2_8",
    "name": "Kamienica ul. Szpitalna 8",
    "address": "ul. Szpitalna 8",
    "polygon": [
      {
        "x": 26490,
        "y": 19280
      },
      {
        "x": 26970,
        "y": 19280
      },
      {
        "x": 26970,
        "y": 19475
      },
      {
        "x": 26490,
        "y": 19475
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_e2_8",
        "x": 26490,
        "y": 19378,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_e2_8",
        "name": "ul. Szpitalna 8 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 26502,
            "y": 19292
          },
          {
            "x": 26958,
            "y": 19292
          },
          {
            "x": 26958,
            "y": 19463
          },
          {
            "x": 26502,
            "y": 19463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26730,
            "y": 19378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26498,
        "y": 19323
      },
      {
        "x": 26498,
        "y": 19432
      }
    ]
  },
  {
    "id": "kam_szpit_e2_10",
    "name": "Kamienica ul. Szpitalna 10",
    "address": "ul. Szpitalna 10",
    "polygon": [
      {
        "x": 26490,
        "y": 19490
      },
      {
        "x": 26970,
        "y": 19490
      },
      {
        "x": 26970,
        "y": 19685
      },
      {
        "x": 26490,
        "y": 19685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e2_12",
    "name": "Kamienica ul. Szpitalna 12",
    "address": "ul. Szpitalna 12",
    "polygon": [
      {
        "x": 26490,
        "y": 19700
      },
      {
        "x": 26970,
        "y": 19700
      },
      {
        "x": 26970,
        "y": 19895
      },
      {
        "x": 26490,
        "y": 19895
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_e2_12",
        "x": 26490,
        "y": 19798,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_e2_12",
        "name": "ul. Szpitalna 12 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 26502,
            "y": 19712
          },
          {
            "x": 26958,
            "y": 19712
          },
          {
            "x": 26958,
            "y": 19883
          },
          {
            "x": 26502,
            "y": 19883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26730,
            "y": 19798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26498,
        "y": 19743
      },
      {
        "x": 26498,
        "y": 19852
      }
    ]
  },
  {
    "id": "kam_szpit_e2_14",
    "name": "Kamienica ul. Szpitalna 14",
    "address": "ul. Szpitalna 14",
    "polygon": [
      {
        "x": 26490,
        "y": 19910
      },
      {
        "x": 26970,
        "y": 19910
      },
      {
        "x": 26970,
        "y": 20105
      },
      {
        "x": 26490,
        "y": 20105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e2_16",
    "name": "Kamienica ul. Szpitalna 16",
    "address": "ul. Szpitalna 16",
    "polygon": [
      {
        "x": 26490,
        "y": 20120
      },
      {
        "x": 26970,
        "y": 20120
      },
      {
        "x": 26970,
        "y": 20315
      },
      {
        "x": 26490,
        "y": 20315
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_e2_16",
        "x": 26490,
        "y": 20218,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_e2_16",
        "name": "ul. Szpitalna 16 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 26502,
            "y": 20132
          },
          {
            "x": 26958,
            "y": 20132
          },
          {
            "x": 26958,
            "y": 20303
          },
          {
            "x": 26502,
            "y": 20303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26730,
            "y": 20218,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26498,
        "y": 20163
      },
      {
        "x": 26498,
        "y": 20272
      }
    ]
  },
  {
    "id": "kam_krzyz_w2_7",
    "name": "Kamienica ul. św. Krzyża 7",
    "address": "ul. św. Krzyża 7",
    "polygon": [
      {
        "x": 27020,
        "y": 19280
      },
      {
        "x": 27510,
        "y": 19280
      },
      {
        "x": 27510,
        "y": 19475
      },
      {
        "x": 27020,
        "y": 19475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_krzyz_w2_9",
    "name": "Kamienica ul. św. Krzyża 9",
    "address": "ul. św. Krzyża 9",
    "polygon": [
      {
        "x": 27020,
        "y": 19490
      },
      {
        "x": 27510,
        "y": 19490
      },
      {
        "x": 27510,
        "y": 19685
      },
      {
        "x": 27020,
        "y": 19685
      }
    ],
    "doors": [
      {
        "id": "d_kam_krzyz_w2_9",
        "x": 27510,
        "y": 19588,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_krzyz_w2_9",
        "name": "ul. św. Krzyża 9 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 27032,
            "y": 19502
          },
          {
            "x": 27498,
            "y": 19502
          },
          {
            "x": 27498,
            "y": 19673
          },
          {
            "x": 27032,
            "y": 19673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27265,
            "y": 19588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27502,
        "y": 19533
      },
      {
        "x": 27502,
        "y": 19642
      }
    ]
  },
  {
    "id": "kam_krzyz_w2_11",
    "name": "Kamienica ul. św. Krzyża 11",
    "address": "ul. św. Krzyża 11",
    "polygon": [
      {
        "x": 27020,
        "y": 19700
      },
      {
        "x": 27510,
        "y": 19700
      },
      {
        "x": 27510,
        "y": 19895
      },
      {
        "x": 27020,
        "y": 19895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_krzyz_w2_13",
    "name": "Kamienica ul. św. Krzyża 13",
    "address": "ul. św. Krzyża 13",
    "polygon": [
      {
        "x": 27020,
        "y": 19910
      },
      {
        "x": 27510,
        "y": 19910
      },
      {
        "x": 27510,
        "y": 20105
      },
      {
        "x": 27020,
        "y": 20105
      }
    ],
    "doors": [
      {
        "id": "d_kam_krzyz_w2_13",
        "x": 27510,
        "y": 20008,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_krzyz_w2_13",
        "name": "ul. św. Krzyża 13 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 27032,
            "y": 19922
          },
          {
            "x": 27498,
            "y": 19922
          },
          {
            "x": 27498,
            "y": 20093
          },
          {
            "x": 27032,
            "y": 20093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27265,
            "y": 20008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27502,
        "y": 19953
      },
      {
        "x": 27502,
        "y": 20062
      }
    ]
  },
  {
    "id": "kam_krzyz_w2_15",
    "name": "Kamienica ul. św. Krzyża 15",
    "address": "ul. św. Krzyża 15",
    "polygon": [
      {
        "x": 27020,
        "y": 20120
      },
      {
        "x": 27510,
        "y": 20120
      },
      {
        "x": 27510,
        "y": 20315
      },
      {
        "x": 27020,
        "y": 20315
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_w3_17",
    "name": "Kamienica ul. Sławkowska 17",
    "address": "ul. Sławkowska 17",
    "polygon": [
      {
        "x": 22640,
        "y": 18280
      },
      {
        "x": 23080,
        "y": 18280
      },
      {
        "x": 23080,
        "y": 18475
      },
      {
        "x": 22640,
        "y": 18475
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_w3_17",
        "x": 23080,
        "y": 18378,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_w3_17",
        "name": "ul. Sławkowska 17 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 22652,
            "y": 18292
          },
          {
            "x": 23068,
            "y": 18292
          },
          {
            "x": 23068,
            "y": 18463
          },
          {
            "x": 22652,
            "y": 18463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 18378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23072,
        "y": 18323
      },
      {
        "x": 23072,
        "y": 18432
      }
    ]
  },
  {
    "id": "kam_slaw_w3_19",
    "name": "Kamienica ul. Sławkowska 19",
    "address": "ul. Sławkowska 19",
    "polygon": [
      {
        "x": 22640,
        "y": 18490
      },
      {
        "x": 23080,
        "y": 18490
      },
      {
        "x": 23080,
        "y": 18685
      },
      {
        "x": 22640,
        "y": 18685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_w3_21",
    "name": "Kamienica ul. Sławkowska 21",
    "address": "ul. Sławkowska 21",
    "polygon": [
      {
        "x": 22640,
        "y": 18700
      },
      {
        "x": 23080,
        "y": 18700
      },
      {
        "x": 23080,
        "y": 18895
      },
      {
        "x": 22640,
        "y": 18895
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_w3_21",
        "x": 23080,
        "y": 18798,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_w3_21",
        "name": "ul. Sławkowska 21 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 22652,
            "y": 18712
          },
          {
            "x": 23068,
            "y": 18712
          },
          {
            "x": 23068,
            "y": 18883
          },
          {
            "x": 22652,
            "y": 18883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 18798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23072,
        "y": 18743
      },
      {
        "x": 23072,
        "y": 18852
      }
    ]
  },
  {
    "id": "kam_slaw_w3_23",
    "name": "Kamienica ul. Sławkowska 23",
    "address": "ul. Sławkowska 23",
    "polygon": [
      {
        "x": 22640,
        "y": 18910
      },
      {
        "x": 23080,
        "y": 18910
      },
      {
        "x": 23080,
        "y": 19105
      },
      {
        "x": 22640,
        "y": 19105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e3_18",
    "name": "Kamienica ul. Sławkowska 18",
    "address": "ul. Sławkowska 18",
    "polygon": [
      {
        "x": 23270,
        "y": 18280
      },
      {
        "x": 23560,
        "y": 18280
      },
      {
        "x": 23560,
        "y": 18475
      },
      {
        "x": 23270,
        "y": 18475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e3_20",
    "name": "Kamienica ul. Sławkowska 20",
    "address": "ul. Sławkowska 20",
    "polygon": [
      {
        "x": 23270,
        "y": 18490
      },
      {
        "x": 23560,
        "y": 18490
      },
      {
        "x": 23560,
        "y": 18685
      },
      {
        "x": 23270,
        "y": 18685
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_e3_20",
        "x": 23270,
        "y": 18588,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_e3_20",
        "name": "ul. Sławkowska 20 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 23282,
            "y": 18502
          },
          {
            "x": 23548,
            "y": 18502
          },
          {
            "x": 23548,
            "y": 18673
          },
          {
            "x": 23282,
            "y": 18673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23415,
            "y": 18588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23278,
        "y": 18533
      },
      {
        "x": 23278,
        "y": 18642
      }
    ]
  },
  {
    "id": "kam_slaw_e3_22",
    "name": "Kamienica ul. Sławkowska 22",
    "address": "ul. Sławkowska 22",
    "polygon": [
      {
        "x": 23270,
        "y": 18700
      },
      {
        "x": 23560,
        "y": 18700
      },
      {
        "x": 23560,
        "y": 18895
      },
      {
        "x": 23270,
        "y": 18895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_slaw_e3_24",
    "name": "Kamienica ul. Sławkowska 24",
    "address": "ul. Sławkowska 24",
    "polygon": [
      {
        "x": 23270,
        "y": 18910
      },
      {
        "x": 23560,
        "y": 18910
      },
      {
        "x": 23560,
        "y": 19105
      },
      {
        "x": 23270,
        "y": 19105
      }
    ],
    "doors": [
      {
        "id": "d_kam_slaw_e3_24",
        "x": 23270,
        "y": 19008,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_slaw_e3_24",
        "name": "ul. Sławkowska 24 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23282,
            "y": 18922
          },
          {
            "x": 23548,
            "y": 18922
          },
          {
            "x": 23548,
            "y": 19093
          },
          {
            "x": 23282,
            "y": 19093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23415,
            "y": 19008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23278,
        "y": 18953
      },
      {
        "x": 23278,
        "y": 19062
      }
    ]
  },
  {
    "id": "kam_jana_w3_17",
    "name": "Kamienica ul. św. Jana 17",
    "address": "ul. św. Jana 17",
    "polygon": [
      {
        "x": 23600,
        "y": 18280
      },
      {
        "x": 23910,
        "y": 18280
      },
      {
        "x": 23910,
        "y": 18475
      },
      {
        "x": 23600,
        "y": 18475
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_w3_17",
        "x": 23910,
        "y": 18378,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_w3_17",
        "name": "ul. św. Jana 17 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23612,
            "y": 18292
          },
          {
            "x": 23898,
            "y": 18292
          },
          {
            "x": 23898,
            "y": 18463
          },
          {
            "x": 23612,
            "y": 18463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23755,
            "y": 18378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23902,
        "y": 18323
      },
      {
        "x": 23902,
        "y": 18432
      }
    ]
  },
  {
    "id": "kam_jana_w3_19",
    "name": "Kamienica ul. św. Jana 19",
    "address": "ul. św. Jana 19",
    "polygon": [
      {
        "x": 23600,
        "y": 18490
      },
      {
        "x": 23910,
        "y": 18490
      },
      {
        "x": 23910,
        "y": 18685
      },
      {
        "x": 23600,
        "y": 18685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_w3_21",
    "name": "Kamienica ul. św. Jana 21",
    "address": "ul. św. Jana 21",
    "polygon": [
      {
        "x": 23600,
        "y": 18700
      },
      {
        "x": 23910,
        "y": 18700
      },
      {
        "x": 23910,
        "y": 18895
      },
      {
        "x": 23600,
        "y": 18895
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_w3_21",
        "x": 23910,
        "y": 18798,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_w3_21",
        "name": "ul. św. Jana 21 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23612,
            "y": 18712
          },
          {
            "x": 23898,
            "y": 18712
          },
          {
            "x": 23898,
            "y": 18883
          },
          {
            "x": 23612,
            "y": 18883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23755,
            "y": 18798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23902,
        "y": 18743
      },
      {
        "x": 23902,
        "y": 18852
      }
    ]
  },
  {
    "id": "kam_jana_w3_23",
    "name": "Kamienica ul. św. Jana 23",
    "address": "ul. św. Jana 23",
    "polygon": [
      {
        "x": 23600,
        "y": 18910
      },
      {
        "x": 23910,
        "y": 18910
      },
      {
        "x": 23910,
        "y": 19105
      },
      {
        "x": 23600,
        "y": 19105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e3_18",
    "name": "Kamienica ul. św. Jana 18",
    "address": "ul. św. Jana 18",
    "polygon": [
      {
        "x": 24090,
        "y": 18280
      },
      {
        "x": 24400,
        "y": 18280
      },
      {
        "x": 24400,
        "y": 18475
      },
      {
        "x": 24090,
        "y": 18475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e3_20",
    "name": "Kamienica ul. św. Jana 20",
    "address": "ul. św. Jana 20",
    "polygon": [
      {
        "x": 24090,
        "y": 18490
      },
      {
        "x": 24400,
        "y": 18490
      },
      {
        "x": 24400,
        "y": 18685
      },
      {
        "x": 24090,
        "y": 18685
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_e3_20",
        "x": 24090,
        "y": 18588,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_e3_20",
        "name": "ul. św. Jana 20 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24102,
            "y": 18502
          },
          {
            "x": 24388,
            "y": 18502
          },
          {
            "x": 24388,
            "y": 18673
          },
          {
            "x": 24102,
            "y": 18673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24245,
            "y": 18588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24098,
        "y": 18533
      },
      {
        "x": 24098,
        "y": 18642
      }
    ]
  },
  {
    "id": "kam_jana_e3_22",
    "name": "Kamienica ul. św. Jana 22",
    "address": "ul. św. Jana 22",
    "polygon": [
      {
        "x": 24090,
        "y": 18700
      },
      {
        "x": 24400,
        "y": 18700
      },
      {
        "x": 24400,
        "y": 18895
      },
      {
        "x": 24090,
        "y": 18895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_jana_e3_24",
    "name": "Kamienica ul. św. Jana 24",
    "address": "ul. św. Jana 24",
    "polygon": [
      {
        "x": 24090,
        "y": 18910
      },
      {
        "x": 24400,
        "y": 18910
      },
      {
        "x": 24400,
        "y": 19105
      },
      {
        "x": 24090,
        "y": 19105
      }
    ],
    "doors": [
      {
        "id": "d_kam_jana_e3_24",
        "x": 24090,
        "y": 19008,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_jana_e3_24",
        "name": "ul. św. Jana 24 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24102,
            "y": 18922
          },
          {
            "x": 24388,
            "y": 18922
          },
          {
            "x": 24388,
            "y": 19093
          },
          {
            "x": 24102,
            "y": 19093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24245,
            "y": 19008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24098,
        "y": 18953
      },
      {
        "x": 24098,
        "y": 19062
      }
    ]
  },
  {
    "id": "kam_flor_w3_17",
    "name": "Kamienica ul. Floriańska 17",
    "address": "ul. Floriańska 17",
    "polygon": [
      {
        "x": 24430,
        "y": 18280
      },
      {
        "x": 24730,
        "y": 18280
      },
      {
        "x": 24730,
        "y": 18475
      },
      {
        "x": 24430,
        "y": 18475
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_w3_17",
        "x": 24730,
        "y": 18378,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_w3_17",
        "name": "ul. Floriańska 17 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24442,
            "y": 18292
          },
          {
            "x": 24718,
            "y": 18292
          },
          {
            "x": 24718,
            "y": 18463
          },
          {
            "x": 24442,
            "y": 18463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24580,
            "y": 18378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24722,
        "y": 18323
      },
      {
        "x": 24722,
        "y": 18432
      }
    ]
  },
  {
    "id": "kam_flor_w3_19",
    "name": "Kamienica ul. Floriańska 19",
    "address": "ul. Floriańska 19",
    "polygon": [
      {
        "x": 24430,
        "y": 18490
      },
      {
        "x": 24730,
        "y": 18490
      },
      {
        "x": 24730,
        "y": 18685
      },
      {
        "x": 24430,
        "y": 18685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_w3_21",
    "name": "Kamienica ul. Floriańska 21",
    "address": "ul. Floriańska 21",
    "polygon": [
      {
        "x": 24430,
        "y": 18700
      },
      {
        "x": 24730,
        "y": 18700
      },
      {
        "x": 24730,
        "y": 18895
      },
      {
        "x": 24430,
        "y": 18895
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_w3_21",
        "x": 24730,
        "y": 18798,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_w3_21",
        "name": "ul. Floriańska 21 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24442,
            "y": 18712
          },
          {
            "x": 24718,
            "y": 18712
          },
          {
            "x": 24718,
            "y": 18883
          },
          {
            "x": 24442,
            "y": 18883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24580,
            "y": 18798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24722,
        "y": 18743
      },
      {
        "x": 24722,
        "y": 18852
      }
    ]
  },
  {
    "id": "kam_flor_w3_23",
    "name": "Kamienica ul. Floriańska 23",
    "address": "ul. Floriańska 23",
    "polygon": [
      {
        "x": 24430,
        "y": 18910
      },
      {
        "x": 24730,
        "y": 18910
      },
      {
        "x": 24730,
        "y": 19105
      },
      {
        "x": 24430,
        "y": 19105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e3_18",
    "name": "Kamienica ul. Floriańska 18",
    "address": "ul. Floriańska 18",
    "polygon": [
      {
        "x": 24910,
        "y": 18280
      },
      {
        "x": 25290,
        "y": 18280
      },
      {
        "x": 25290,
        "y": 18475
      },
      {
        "x": 24910,
        "y": 18475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e3_20",
    "name": "Kamienica ul. Floriańska 20",
    "address": "ul. Floriańska 20",
    "polygon": [
      {
        "x": 24910,
        "y": 18490
      },
      {
        "x": 25290,
        "y": 18490
      },
      {
        "x": 25290,
        "y": 18685
      },
      {
        "x": 24910,
        "y": 18685
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_e3_20",
        "x": 24910,
        "y": 18588,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_e3_20",
        "name": "ul. Floriańska 20 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24922,
            "y": 18502
          },
          {
            "x": 25278,
            "y": 18502
          },
          {
            "x": 25278,
            "y": 18673
          },
          {
            "x": 24922,
            "y": 18673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25100,
            "y": 18588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24918,
        "y": 18533
      },
      {
        "x": 24918,
        "y": 18642
      }
    ]
  },
  {
    "id": "kam_flor_e3_22",
    "name": "Kamienica ul. Floriańska 22",
    "address": "ul. Floriańska 22",
    "polygon": [
      {
        "x": 24910,
        "y": 18700
      },
      {
        "x": 25290,
        "y": 18700
      },
      {
        "x": 25290,
        "y": 18895
      },
      {
        "x": 24910,
        "y": 18895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_flor_e3_24",
    "name": "Kamienica ul. Floriańska 24",
    "address": "ul. Floriańska 24",
    "polygon": [
      {
        "x": 24910,
        "y": 18910
      },
      {
        "x": 25290,
        "y": 18910
      },
      {
        "x": 25290,
        "y": 19105
      },
      {
        "x": 24910,
        "y": 19105
      }
    ],
    "doors": [
      {
        "id": "d_kam_flor_e3_24",
        "x": 24910,
        "y": 19008,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_flor_e3_24",
        "name": "ul. Floriańska 24 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24922,
            "y": 18922
          },
          {
            "x": 25278,
            "y": 18922
          },
          {
            "x": 25278,
            "y": 19093
          },
          {
            "x": 24922,
            "y": 19093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25100,
            "y": 19008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24918,
        "y": 18953
      },
      {
        "x": 24918,
        "y": 19062
      }
    ]
  },
  {
    "id": "kam_szpit_w3_17",
    "name": "Kamienica ul. Szpitalna 17",
    "address": "ul. Szpitalna 17",
    "polygon": [
      {
        "x": 25850,
        "y": 18280
      },
      {
        "x": 26310,
        "y": 18280
      },
      {
        "x": 26310,
        "y": 18475
      },
      {
        "x": 25850,
        "y": 18475
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_w3_17",
        "x": 26310,
        "y": 18378,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_w3_17",
        "name": "ul. Szpitalna 17 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 25862,
            "y": 18292
          },
          {
            "x": 26298,
            "y": 18292
          },
          {
            "x": 26298,
            "y": 18463
          },
          {
            "x": 25862,
            "y": 18463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26080,
            "y": 18378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26302,
        "y": 18323
      },
      {
        "x": 26302,
        "y": 18432
      }
    ]
  },
  {
    "id": "kam_szpit_w3_19",
    "name": "Kamienica ul. Szpitalna 19",
    "address": "ul. Szpitalna 19",
    "polygon": [
      {
        "x": 25850,
        "y": 18490
      },
      {
        "x": 26310,
        "y": 18490
      },
      {
        "x": 26310,
        "y": 18685
      },
      {
        "x": 25850,
        "y": 18685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_w3_21",
    "name": "Kamienica ul. Szpitalna 21",
    "address": "ul. Szpitalna 21",
    "polygon": [
      {
        "x": 25850,
        "y": 18700
      },
      {
        "x": 26310,
        "y": 18700
      },
      {
        "x": 26310,
        "y": 18895
      },
      {
        "x": 25850,
        "y": 18895
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_w3_21",
        "x": 26310,
        "y": 18798,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_w3_21",
        "name": "ul. Szpitalna 21 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 25862,
            "y": 18712
          },
          {
            "x": 26298,
            "y": 18712
          },
          {
            "x": 26298,
            "y": 18883
          },
          {
            "x": 25862,
            "y": 18883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26080,
            "y": 18798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26302,
        "y": 18743
      },
      {
        "x": 26302,
        "y": 18852
      }
    ]
  },
  {
    "id": "kam_szpit_w3_23",
    "name": "Kamienica ul. Szpitalna 23",
    "address": "ul. Szpitalna 23",
    "polygon": [
      {
        "x": 25850,
        "y": 18910
      },
      {
        "x": 26310,
        "y": 18910
      },
      {
        "x": 26310,
        "y": 19105
      },
      {
        "x": 25850,
        "y": 19105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e3_18",
    "name": "Kamienica ul. Szpitalna 18",
    "address": "ul. Szpitalna 18",
    "polygon": [
      {
        "x": 26490,
        "y": 18280
      },
      {
        "x": 26970,
        "y": 18280
      },
      {
        "x": 26970,
        "y": 18475
      },
      {
        "x": 26490,
        "y": 18475
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e3_20",
    "name": "Kamienica ul. Szpitalna 20",
    "address": "ul. Szpitalna 20",
    "polygon": [
      {
        "x": 26490,
        "y": 18490
      },
      {
        "x": 26970,
        "y": 18490
      },
      {
        "x": 26970,
        "y": 18685
      },
      {
        "x": 26490,
        "y": 18685
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_e3_20",
        "x": 26490,
        "y": 18588,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_e3_20",
        "name": "ul. Szpitalna 20 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 26502,
            "y": 18502
          },
          {
            "x": 26958,
            "y": 18502
          },
          {
            "x": 26958,
            "y": 18673
          },
          {
            "x": 26502,
            "y": 18673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26730,
            "y": 18588,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26498,
        "y": 18533
      },
      {
        "x": 26498,
        "y": 18642
      }
    ]
  },
  {
    "id": "kam_szpit_e3_22",
    "name": "Kamienica ul. Szpitalna 22",
    "address": "ul. Szpitalna 22",
    "polygon": [
      {
        "x": 26490,
        "y": 18700
      },
      {
        "x": 26970,
        "y": 18700
      },
      {
        "x": 26970,
        "y": 18895
      },
      {
        "x": 26490,
        "y": 18895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szpit_e3_24",
    "name": "Kamienica ul. Szpitalna 24",
    "address": "ul. Szpitalna 24",
    "polygon": [
      {
        "x": 26490,
        "y": 18910
      },
      {
        "x": 26970,
        "y": 18910
      },
      {
        "x": 26970,
        "y": 19105
      },
      {
        "x": 26490,
        "y": 19105
      }
    ],
    "doors": [
      {
        "id": "d_kam_szpit_e3_24",
        "x": 26490,
        "y": 19008,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szpit_e3_24",
        "name": "ul. Szpitalna 24 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 26502,
            "y": 18922
          },
          {
            "x": 26958,
            "y": 18922
          },
          {
            "x": 26958,
            "y": 19093
          },
          {
            "x": 26502,
            "y": 19093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26730,
            "y": 19008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26498,
        "y": 18953
      },
      {
        "x": 26498,
        "y": 19062
      }
    ]
  },
  {
    "id": "kam_krzyz_w3_17",
    "name": "Kamienica ul. św. Krzyża 17",
    "address": "ul. św. Krzyża 17",
    "polygon": [
      {
        "x": 27020,
        "y": 18280
      },
      {
        "x": 27510,
        "y": 18280
      },
      {
        "x": 27510,
        "y": 18475
      },
      {
        "x": 27020,
        "y": 18475
      }
    ],
    "doors": [
      {
        "id": "d_kam_krzyz_w3_17",
        "x": 27510,
        "y": 18378,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_krzyz_w3_17",
        "name": "ul. św. Krzyża 17 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 27032,
            "y": 18292
          },
          {
            "x": 27498,
            "y": 18292
          },
          {
            "x": 27498,
            "y": 18463
          },
          {
            "x": 27032,
            "y": 18463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27265,
            "y": 18378,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27502,
        "y": 18323
      },
      {
        "x": 27502,
        "y": 18432
      }
    ]
  },
  {
    "id": "kam_krzyz_w3_19",
    "name": "Kamienica ul. św. Krzyża 19",
    "address": "ul. św. Krzyża 19",
    "polygon": [
      {
        "x": 27020,
        "y": 18490
      },
      {
        "x": 27510,
        "y": 18490
      },
      {
        "x": 27510,
        "y": 18685
      },
      {
        "x": 27020,
        "y": 18685
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_krzyz_w3_21",
    "name": "Kamienica ul. św. Krzyża 21",
    "address": "ul. św. Krzyża 21",
    "polygon": [
      {
        "x": 27020,
        "y": 18700
      },
      {
        "x": 27510,
        "y": 18700
      },
      {
        "x": 27510,
        "y": 18895
      },
      {
        "x": 27020,
        "y": 18895
      }
    ],
    "doors": [
      {
        "id": "d_kam_krzyz_w3_21",
        "x": 27510,
        "y": 18798,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_krzyz_w3_21",
        "name": "ul. św. Krzyża 21 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 27032,
            "y": 18712
          },
          {
            "x": 27498,
            "y": 18712
          },
          {
            "x": 27498,
            "y": 18883
          },
          {
            "x": 27032,
            "y": 18883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27265,
            "y": 18798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27502,
        "y": 18743
      },
      {
        "x": 27502,
        "y": 18852
      }
    ]
  },
  {
    "id": "kam_krzyz_w3_23",
    "name": "Kamienica ul. św. Krzyża 23",
    "address": "ul. św. Krzyża 23",
    "polygon": [
      {
        "x": 27020,
        "y": 18910
      },
      {
        "x": 27510,
        "y": 18910
      },
      {
        "x": 27510,
        "y": 19105
      },
      {
        "x": 27020,
        "y": 19105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_1",
    "name": "Kamienica ul. Pijarska 1",
    "address": "ul. Pijarska 1",
    "polygon": [
      {
        "x": 21800,
        "y": 17600
      },
      {
        "x": 22140,
        "y": 17600
      },
      {
        "x": 22140,
        "y": 18080
      },
      {
        "x": 21800,
        "y": 18080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_2",
    "name": "Kamienica ul. Pijarska 2",
    "address": "ul. Pijarska 2",
    "polygon": [
      {
        "x": 22160,
        "y": 17600
      },
      {
        "x": 22500,
        "y": 17600
      },
      {
        "x": 22500,
        "y": 18080
      },
      {
        "x": 22160,
        "y": 18080
      }
    ],
    "doors": [
      {
        "id": "d_kam_pijar_n_2",
        "x": 22330,
        "y": 18080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_pijar_n_2",
        "name": "ul. Pijarska 2 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22172,
            "y": 17612
          },
          {
            "x": 22488,
            "y": 17612
          },
          {
            "x": 22488,
            "y": 18068
          },
          {
            "x": 22172,
            "y": 18068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22330,
            "y": 17840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22235,
        "y": 18072
      },
      {
        "x": 22425,
        "y": 18072
      },
      {
        "x": 22330,
        "y": 18072
      }
    ]
  },
  {
    "id": "kam_pijar_n_3",
    "name": "Kamienica ul. Pijarska 3",
    "address": "ul. Pijarska 3",
    "polygon": [
      {
        "x": 22520,
        "y": 17600
      },
      {
        "x": 22860,
        "y": 17600
      },
      {
        "x": 22860,
        "y": 18080
      },
      {
        "x": 22520,
        "y": 18080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_4",
    "name": "Kamienica ul. Pijarska 4",
    "address": "ul. Pijarska 4",
    "polygon": [
      {
        "x": 22880,
        "y": 17600
      },
      {
        "x": 23220,
        "y": 17600
      },
      {
        "x": 23220,
        "y": 18080
      },
      {
        "x": 22880,
        "y": 18080
      }
    ],
    "doors": [
      {
        "id": "d_kam_pijar_n_4",
        "x": 23050,
        "y": 18080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_pijar_n_4",
        "name": "ul. Pijarska 4 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 22892,
            "y": 17612
          },
          {
            "x": 23208,
            "y": 17612
          },
          {
            "x": 23208,
            "y": 18068
          },
          {
            "x": 22892,
            "y": 18068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23050,
            "y": 17840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22955,
        "y": 18072
      },
      {
        "x": 23145,
        "y": 18072
      },
      {
        "x": 23050,
        "y": 18072
      }
    ]
  },
  {
    "id": "kam_pijar_n_5",
    "name": "Kamienica ul. Pijarska 5",
    "address": "ul. Pijarska 5",
    "polygon": [
      {
        "x": 23240,
        "y": 17600
      },
      {
        "x": 23580,
        "y": 17600
      },
      {
        "x": 23580,
        "y": 18080
      },
      {
        "x": 23240,
        "y": 18080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_6",
    "name": "Kamienica ul. Pijarska 6",
    "address": "ul. Pijarska 6",
    "polygon": [
      {
        "x": 23600,
        "y": 17600
      },
      {
        "x": 23940,
        "y": 17600
      },
      {
        "x": 23940,
        "y": 18080
      },
      {
        "x": 23600,
        "y": 18080
      }
    ],
    "doors": [
      {
        "id": "d_kam_pijar_n_6",
        "x": 23770,
        "y": 18080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_pijar_n_6",
        "name": "ul. Pijarska 6 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23612,
            "y": 17612
          },
          {
            "x": 23928,
            "y": 17612
          },
          {
            "x": 23928,
            "y": 18068
          },
          {
            "x": 23612,
            "y": 18068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23770,
            "y": 17840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23675,
        "y": 18072
      },
      {
        "x": 23865,
        "y": 18072
      },
      {
        "x": 23770,
        "y": 18072
      }
    ]
  },
  {
    "id": "kam_pijar_n_7",
    "name": "Kamienica ul. Pijarska 7",
    "address": "ul. Pijarska 7",
    "polygon": [
      {
        "x": 23960,
        "y": 17600
      },
      {
        "x": 24300,
        "y": 17600
      },
      {
        "x": 24300,
        "y": 18080
      },
      {
        "x": 23960,
        "y": 18080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_8",
    "name": "Kamienica ul. Pijarska 8",
    "address": "ul. Pijarska 8",
    "polygon": [
      {
        "x": 24320,
        "y": 17600
      },
      {
        "x": 24660,
        "y": 17600
      },
      {
        "x": 24660,
        "y": 18080
      },
      {
        "x": 24320,
        "y": 18080
      }
    ],
    "doors": [
      {
        "id": "d_kam_pijar_n_8",
        "x": 24490,
        "y": 18080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_pijar_n_8",
        "name": "ul. Pijarska 8 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24332,
            "y": 17612
          },
          {
            "x": 24648,
            "y": 17612
          },
          {
            "x": 24648,
            "y": 18068
          },
          {
            "x": 24332,
            "y": 18068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24490,
            "y": 17840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24395,
        "y": 18072
      },
      {
        "x": 24585,
        "y": 18072
      },
      {
        "x": 24490,
        "y": 18072
      }
    ]
  },
  {
    "id": "kam_pijar_n_9",
    "name": "Kamienica ul. Pijarska 9",
    "address": "ul. Pijarska 9",
    "polygon": [
      {
        "x": 24680,
        "y": 17600
      },
      {
        "x": 25020,
        "y": 17600
      },
      {
        "x": 25020,
        "y": 18080
      },
      {
        "x": 24680,
        "y": 18080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_10",
    "name": "Kamienica ul. Pijarska 10",
    "address": "ul. Pijarska 10",
    "polygon": [
      {
        "x": 25040,
        "y": 17600
      },
      {
        "x": 25380,
        "y": 17600
      },
      {
        "x": 25380,
        "y": 18080
      },
      {
        "x": 25040,
        "y": 18080
      }
    ],
    "doors": [
      {
        "id": "d_kam_pijar_n_10",
        "x": 25210,
        "y": 18080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_pijar_n_10",
        "name": "ul. Pijarska 10 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 25052,
            "y": 17612
          },
          {
            "x": 25368,
            "y": 17612
          },
          {
            "x": 25368,
            "y": 18068
          },
          {
            "x": 25052,
            "y": 18068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25210,
            "y": 17840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25115,
        "y": 18072
      },
      {
        "x": 25305,
        "y": 18072
      },
      {
        "x": 25210,
        "y": 18072
      }
    ]
  },
  {
    "id": "kam_pijar_n_11",
    "name": "Kamienica ul. Pijarska 11",
    "address": "ul. Pijarska 11",
    "polygon": [
      {
        "x": 25400,
        "y": 17600
      },
      {
        "x": 25740,
        "y": 17600
      },
      {
        "x": 25740,
        "y": 18080
      },
      {
        "x": 25400,
        "y": 18080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_pijar_n_12",
    "name": "Kamienica ul. Pijarska 12",
    "address": "ul. Pijarska 12",
    "polygon": [
      {
        "x": 25760,
        "y": 17600
      },
      {
        "x": 26100,
        "y": 17600
      },
      {
        "x": 26100,
        "y": 18080
      },
      {
        "x": 25760,
        "y": 18080
      }
    ],
    "doors": [
      {
        "id": "d_kam_pijar_n_12",
        "x": 25930,
        "y": 18080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_pijar_n_12",
        "name": "ul. Pijarska 12 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 25772,
            "y": 17612
          },
          {
            "x": 26088,
            "y": 17612
          },
          {
            "x": 26088,
            "y": 18068
          },
          {
            "x": 25772,
            "y": 18068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25930,
            "y": 17840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25835,
        "y": 18072
      },
      {
        "x": 26025,
        "y": 18072
      },
      {
        "x": 25930,
        "y": 18072
      }
    ]
  },
  {
    "id": "brama_flor_west_wing",
    "name": "Brama Floriańska (Baszta Zachodnia & Mury Obronne)",
    "address": "ul. Floriańska 45",
    "polygon": [
      {
        "x": 24480,
        "y": 17880
      },
      {
        "x": 24740,
        "y": 17880
      },
      {
        "x": 24740,
        "y": 18220
      },
      {
        "x": 24480,
        "y": 18220
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "bram_w_d",
        "x": 24740,
        "y": 18050,
        "width": 60,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 24610,
        "y": 17890
      }
    ],
    "interiorRooms": [
      {
        "id": "bram_r_w",
        "name": "Zabytkowa Izba Straży Bramy Floriańskiej",
        "polygon": [
          {
            "x": 24500,
            "y": 17900
          },
          {
            "x": 24720,
            "y": 17900
          },
          {
            "x": 24720,
            "y": 18200
          },
          {
            "x": 24500,
            "y": 18200
          }
        ]
      }
    ]
  },
  {
    "id": "brama_flor_east_wing",
    "name": "Brama Floriańska (Baszta Wschodnia)",
    "address": "ul. Floriańska 46",
    "polygon": [
      {
        "x": 24900,
        "y": 17880
      },
      {
        "x": 25160,
        "y": 17880
      },
      {
        "x": 25160,
        "y": 18220
      },
      {
        "x": 24900,
        "y": 18220
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": false,
    "doors": [],
    "windows": [],
    "interiorRooms": []
  },
  {
    "id": "barbakan_krakowski",
    "name": "Barbakan Krakowski (Rondel Gotycki)",
    "address": "Planty Krakowskie 1",
    "polygon": [
      {
        "x": 24520,
        "y": 16800
      },
      {
        "x": 25120,
        "y": 16800
      },
      {
        "x": 25120,
        "y": 17400
      },
      {
        "x": 24520,
        "y": 17400
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "barb_d_s",
        "x": 24820,
        "y": 17400,
        "width": 85,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      },
      {
        "id": "barb_d_n",
        "x": 24820,
        "y": 16800,
        "width": 85,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 24600,
        "y": 17100
      },
      {
        "x": 25040,
        "y": 17100
      }
    ],
    "interiorRooms": [
      {
        "id": "barb_room",
        "name": "Dziedziniec Strzelniczy Barbakanu",
        "polygon": [
          {
            "x": 24560,
            "y": 16850
          },
          {
            "x": 25080,
            "y": 16850
          },
          {
            "x": 25080,
            "y": 17350
          },
          {
            "x": 24560,
            "y": 17350
          }
        ]
      }
    ]
  },
  {
    "id": "teatr_slowackiego",
    "name": "Teatr im. Juliusza Słowackiego",
    "address": "Plac św. Ducha 1",
    "polygon": [
      {
        "x": 27800,
        "y": 18700
      },
      {
        "x": 28900,
        "y": 18700
      },
      {
        "x": 28900,
        "y": 19650
      },
      {
        "x": 27800,
        "y": 19650
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": true,
    "doors": [
      {
        "id": "slow_d",
        "x": 28350,
        "y": 19650,
        "width": 100,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 28000,
        "y": 19640
      },
      {
        "x": 28700,
        "y": 19640
      }
    ],
    "interiorRooms": [
      {
        "id": "slow_sala",
        "name": "Złocista Widownia i Kurtyna Siemiradzkiego",
        "polygon": [
          {
            "x": 27850,
            "y": 18750
          },
          {
            "x": 28850,
            "y": 18750
          },
          {
            "x": 28850,
            "y": 19600
          },
          {
            "x": 27850,
            "y": 19600
          }
        ]
      }
    ]
  },
  {
    "id": "kam_szczep_s_1",
    "name": "Kamienica ul. Szczepańska 1",
    "address": "ul. Szczepańska 1",
    "polygon": [
      {
        "x": 20500,
        "y": 21750
      },
      {
        "x": 20740,
        "y": 21750
      },
      {
        "x": 20740,
        "y": 22120
      },
      {
        "x": 20500,
        "y": 22120
      }
    ],
    "doors": [
      {
        "id": "d_kam_szczep_s_1",
        "x": 20620,
        "y": 22120,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szczep_s_1",
        "name": "ul. Szczepańska 1 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 20512,
            "y": 21762
          },
          {
            "x": 20728,
            "y": 21762
          },
          {
            "x": 20728,
            "y": 22108
          },
          {
            "x": 20512,
            "y": 22108
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20620,
            "y": 21935,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20553,
        "y": 22112
      },
      {
        "x": 20687,
        "y": 22112
      }
    ]
  },
  {
    "id": "kam_szczep_s_2",
    "name": "Kamienica ul. Szczepańska 2",
    "address": "ul. Szczepańska 2",
    "polygon": [
      {
        "x": 20760,
        "y": 21750
      },
      {
        "x": 21000,
        "y": 21750
      },
      {
        "x": 21000,
        "y": 22120
      },
      {
        "x": 20760,
        "y": 22120
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szczep_s_3",
    "name": "Kamienica ul. Szczepańska 3",
    "address": "ul. Szczepańska 3",
    "polygon": [
      {
        "x": 21020,
        "y": 21750
      },
      {
        "x": 21260,
        "y": 21750
      },
      {
        "x": 21260,
        "y": 22120
      },
      {
        "x": 21020,
        "y": 22120
      }
    ],
    "doors": [
      {
        "id": "d_kam_szczep_s_3",
        "x": 21140,
        "y": 22120,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szczep_s_3",
        "name": "ul. Szczepańska 3 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 21032,
            "y": 21762
          },
          {
            "x": 21248,
            "y": 21762
          },
          {
            "x": 21248,
            "y": 22108
          },
          {
            "x": 21032,
            "y": 22108
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21140,
            "y": 21935,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21073,
        "y": 22112
      },
      {
        "x": 21207,
        "y": 22112
      }
    ]
  },
  {
    "id": "kam_szczep_s_4",
    "name": "Kamienica ul. Szczepańska 4",
    "address": "ul. Szczepańska 4",
    "polygon": [
      {
        "x": 21280,
        "y": 21750
      },
      {
        "x": 21520,
        "y": 21750
      },
      {
        "x": 21520,
        "y": 22120
      },
      {
        "x": 21280,
        "y": 22120
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szczep_s_5",
    "name": "Kamienica ul. Szczepańska 5",
    "address": "ul. Szczepańska 5",
    "polygon": [
      {
        "x": 21540,
        "y": 21750
      },
      {
        "x": 21780,
        "y": 21750
      },
      {
        "x": 21780,
        "y": 22120
      },
      {
        "x": 21540,
        "y": 22120
      }
    ],
    "doors": [
      {
        "id": "d_kam_szczep_s_5",
        "x": 21660,
        "y": 22120,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szczep_s_5",
        "name": "ul. Szczepańska 5 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 21552,
            "y": 21762
          },
          {
            "x": 21768,
            "y": 21762
          },
          {
            "x": 21768,
            "y": 22108
          },
          {
            "x": 21552,
            "y": 22108
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21660,
            "y": 21935,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21593,
        "y": 22112
      },
      {
        "x": 21727,
        "y": 22112
      }
    ]
  },
  {
    "id": "kam_szew_n_1",
    "name": "Kamienica ul. Szewska 1",
    "address": "ul. Szewska 1",
    "polygon": [
      {
        "x": 18200,
        "y": 22500
      },
      {
        "x": 18395,
        "y": 22500
      },
      {
        "x": 18395,
        "y": 23100
      },
      {
        "x": 18200,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_1",
        "x": 18298,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_1",
        "name": "ul. Szewska 1 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 18212,
            "y": 22512
          },
          {
            "x": 18383,
            "y": 22512
          },
          {
            "x": 18383,
            "y": 23088
          },
          {
            "x": 18212,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18298,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18243,
        "y": 23092
      },
      {
        "x": 18352,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_3",
    "name": "Kamienica ul. Szewska 3",
    "address": "ul. Szewska 3",
    "polygon": [
      {
        "x": 18410,
        "y": 22500
      },
      {
        "x": 18605,
        "y": 22500
      },
      {
        "x": 18605,
        "y": 23100
      },
      {
        "x": 18410,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_5",
    "name": "Kamienica ul. Szewska 5",
    "address": "ul. Szewska 5",
    "polygon": [
      {
        "x": 18620,
        "y": 22500
      },
      {
        "x": 18815,
        "y": 22500
      },
      {
        "x": 18815,
        "y": 23100
      },
      {
        "x": 18620,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_5",
        "x": 18718,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_5",
        "name": "ul. Szewska 5 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 18632,
            "y": 22512
          },
          {
            "x": 18803,
            "y": 22512
          },
          {
            "x": 18803,
            "y": 23088
          },
          {
            "x": 18632,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18718,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18663,
        "y": 23092
      },
      {
        "x": 18772,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_7",
    "name": "Kamienica ul. Szewska 7",
    "address": "ul. Szewska 7",
    "polygon": [
      {
        "x": 18830,
        "y": 22500
      },
      {
        "x": 19025,
        "y": 22500
      },
      {
        "x": 19025,
        "y": 23100
      },
      {
        "x": 18830,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_9",
    "name": "Kamienica ul. Szewska 9",
    "address": "ul. Szewska 9",
    "polygon": [
      {
        "x": 19040,
        "y": 22500
      },
      {
        "x": 19235,
        "y": 22500
      },
      {
        "x": 19235,
        "y": 23100
      },
      {
        "x": 19040,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_9",
        "x": 19138,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_9",
        "name": "ul. Szewska 9 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 19052,
            "y": 22512
          },
          {
            "x": 19223,
            "y": 22512
          },
          {
            "x": 19223,
            "y": 23088
          },
          {
            "x": 19052,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19138,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19083,
        "y": 23092
      },
      {
        "x": 19192,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_11",
    "name": "Kamienica ul. Szewska 11",
    "address": "ul. Szewska 11",
    "polygon": [
      {
        "x": 19250,
        "y": 22500
      },
      {
        "x": 19445,
        "y": 22500
      },
      {
        "x": 19445,
        "y": 23100
      },
      {
        "x": 19250,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_13",
    "name": "Kamienica ul. Szewska 13",
    "address": "ul. Szewska 13",
    "polygon": [
      {
        "x": 19460,
        "y": 22500
      },
      {
        "x": 19655,
        "y": 22500
      },
      {
        "x": 19655,
        "y": 23100
      },
      {
        "x": 19460,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_13",
        "x": 19558,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_13",
        "name": "ul. Szewska 13 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 19472,
            "y": 22512
          },
          {
            "x": 19643,
            "y": 22512
          },
          {
            "x": 19643,
            "y": 23088
          },
          {
            "x": 19472,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19558,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19503,
        "y": 23092
      },
      {
        "x": 19612,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_15",
    "name": "Kamienica ul. Szewska 15",
    "address": "ul. Szewska 15",
    "polygon": [
      {
        "x": 19670,
        "y": 22500
      },
      {
        "x": 19865,
        "y": 22500
      },
      {
        "x": 19865,
        "y": 23100
      },
      {
        "x": 19670,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_17",
    "name": "Kamienica ul. Szewska 17",
    "address": "ul. Szewska 17",
    "polygon": [
      {
        "x": 19880,
        "y": 22500
      },
      {
        "x": 20075,
        "y": 22500
      },
      {
        "x": 20075,
        "y": 23100
      },
      {
        "x": 19880,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_17",
        "x": 19978,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_17",
        "name": "ul. Szewska 17 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 19892,
            "y": 22512
          },
          {
            "x": 20063,
            "y": 22512
          },
          {
            "x": 20063,
            "y": 23088
          },
          {
            "x": 19892,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19978,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19923,
        "y": 23092
      },
      {
        "x": 20032,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_19",
    "name": "Kamienica ul. Szewska 19",
    "address": "ul. Szewska 19",
    "polygon": [
      {
        "x": 20090,
        "y": 22500
      },
      {
        "x": 20285,
        "y": 22500
      },
      {
        "x": 20285,
        "y": 23100
      },
      {
        "x": 20090,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_21",
    "name": "Kamienica ul. Szewska 21",
    "address": "ul. Szewska 21",
    "polygon": [
      {
        "x": 20300,
        "y": 22500
      },
      {
        "x": 20495,
        "y": 22500
      },
      {
        "x": 20495,
        "y": 23100
      },
      {
        "x": 20300,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_21",
        "x": 20398,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_21",
        "name": "ul. Szewska 21 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 20312,
            "y": 22512
          },
          {
            "x": 20483,
            "y": 22512
          },
          {
            "x": 20483,
            "y": 23088
          },
          {
            "x": 20312,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20398,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20343,
        "y": 23092
      },
      {
        "x": 20452,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_23",
    "name": "Kamienica ul. Szewska 23",
    "address": "ul. Szewska 23",
    "polygon": [
      {
        "x": 20510,
        "y": 22500
      },
      {
        "x": 20705,
        "y": 22500
      },
      {
        "x": 20705,
        "y": 23100
      },
      {
        "x": 20510,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_25",
    "name": "Kamienica ul. Szewska 25",
    "address": "ul. Szewska 25",
    "polygon": [
      {
        "x": 20720,
        "y": 22500
      },
      {
        "x": 20915,
        "y": 22500
      },
      {
        "x": 20915,
        "y": 23100
      },
      {
        "x": 20720,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_25",
        "x": 20818,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_25",
        "name": "ul. Szewska 25 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 20732,
            "y": 22512
          },
          {
            "x": 20903,
            "y": 22512
          },
          {
            "x": 20903,
            "y": 23088
          },
          {
            "x": 20732,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20818,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20763,
        "y": 23092
      },
      {
        "x": 20872,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_n_27",
    "name": "Kamienica ul. Szewska 27",
    "address": "ul. Szewska 27",
    "polygon": [
      {
        "x": 20930,
        "y": 22500
      },
      {
        "x": 21125,
        "y": 22500
      },
      {
        "x": 21125,
        "y": 23100
      },
      {
        "x": 20930,
        "y": 23100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_n_29",
    "name": "Kamienica ul. Szewska 29",
    "address": "ul. Szewska 29",
    "polygon": [
      {
        "x": 21140,
        "y": 22500
      },
      {
        "x": 21335,
        "y": 22500
      },
      {
        "x": 21335,
        "y": 23100
      },
      {
        "x": 21140,
        "y": 23100
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_n_29",
        "x": 21238,
        "y": 23100,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_n_29",
        "name": "ul. Szewska 29 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 21152,
            "y": 22512
          },
          {
            "x": 21323,
            "y": 22512
          },
          {
            "x": 21323,
            "y": 23088
          },
          {
            "x": 21152,
            "y": 23088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21238,
            "y": 22800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21183,
        "y": 23092
      },
      {
        "x": 21292,
        "y": 23092
      }
    ]
  },
  {
    "id": "kam_szew_s_2",
    "name": "Kamienica ul. Szewska 2",
    "address": "ul. Szewska 2",
    "polygon": [
      {
        "x": 18200,
        "y": 23260
      },
      {
        "x": 18395,
        "y": 23260
      },
      {
        "x": 18395,
        "y": 23860
      },
      {
        "x": 18200,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_2",
        "x": 18298,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_2",
        "name": "ul. Szewska 2 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 18212,
            "y": 23272
          },
          {
            "x": 18383,
            "y": 23272
          },
          {
            "x": 18383,
            "y": 23848
          },
          {
            "x": 18212,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18298,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18243,
        "y": 23268
      },
      {
        "x": 18352,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_4",
    "name": "Kamienica ul. Szewska 4",
    "address": "ul. Szewska 4",
    "polygon": [
      {
        "x": 18410,
        "y": 23260
      },
      {
        "x": 18605,
        "y": 23260
      },
      {
        "x": 18605,
        "y": 23860
      },
      {
        "x": 18410,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_6",
    "name": "Kamienica ul. Szewska 6",
    "address": "ul. Szewska 6",
    "polygon": [
      {
        "x": 18620,
        "y": 23260
      },
      {
        "x": 18815,
        "y": 23260
      },
      {
        "x": 18815,
        "y": 23860
      },
      {
        "x": 18620,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_6",
        "x": 18718,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_6",
        "name": "ul. Szewska 6 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 18632,
            "y": 23272
          },
          {
            "x": 18803,
            "y": 23272
          },
          {
            "x": 18803,
            "y": 23848
          },
          {
            "x": 18632,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18718,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18663,
        "y": 23268
      },
      {
        "x": 18772,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_8",
    "name": "Kamienica ul. Szewska 8",
    "address": "ul. Szewska 8",
    "polygon": [
      {
        "x": 18830,
        "y": 23260
      },
      {
        "x": 19025,
        "y": 23260
      },
      {
        "x": 19025,
        "y": 23860
      },
      {
        "x": 18830,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_10",
    "name": "Kamienica ul. Szewska 10",
    "address": "ul. Szewska 10",
    "polygon": [
      {
        "x": 19040,
        "y": 23260
      },
      {
        "x": 19235,
        "y": 23260
      },
      {
        "x": 19235,
        "y": 23860
      },
      {
        "x": 19040,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_10",
        "x": 19138,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_10",
        "name": "ul. Szewska 10 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 19052,
            "y": 23272
          },
          {
            "x": 19223,
            "y": 23272
          },
          {
            "x": 19223,
            "y": 23848
          },
          {
            "x": 19052,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19138,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19083,
        "y": 23268
      },
      {
        "x": 19192,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_12",
    "name": "Kamienica ul. Szewska 12",
    "address": "ul. Szewska 12",
    "polygon": [
      {
        "x": 19250,
        "y": 23260
      },
      {
        "x": 19445,
        "y": 23260
      },
      {
        "x": 19445,
        "y": 23860
      },
      {
        "x": 19250,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_14",
    "name": "Kamienica ul. Szewska 14",
    "address": "ul. Szewska 14",
    "polygon": [
      {
        "x": 19460,
        "y": 23260
      },
      {
        "x": 19655,
        "y": 23260
      },
      {
        "x": 19655,
        "y": 23860
      },
      {
        "x": 19460,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_14",
        "x": 19558,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_14",
        "name": "ul. Szewska 14 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 19472,
            "y": 23272
          },
          {
            "x": 19643,
            "y": 23272
          },
          {
            "x": 19643,
            "y": 23848
          },
          {
            "x": 19472,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19558,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19503,
        "y": 23268
      },
      {
        "x": 19612,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_16",
    "name": "Kamienica ul. Szewska 16",
    "address": "ul. Szewska 16",
    "polygon": [
      {
        "x": 19670,
        "y": 23260
      },
      {
        "x": 19865,
        "y": 23260
      },
      {
        "x": 19865,
        "y": 23860
      },
      {
        "x": 19670,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_18",
    "name": "Kamienica ul. Szewska 18",
    "address": "ul. Szewska 18",
    "polygon": [
      {
        "x": 19880,
        "y": 23260
      },
      {
        "x": 20075,
        "y": 23260
      },
      {
        "x": 20075,
        "y": 23860
      },
      {
        "x": 19880,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_18",
        "x": 19978,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_18",
        "name": "ul. Szewska 18 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 19892,
            "y": 23272
          },
          {
            "x": 20063,
            "y": 23272
          },
          {
            "x": 20063,
            "y": 23848
          },
          {
            "x": 19892,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19978,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19923,
        "y": 23268
      },
      {
        "x": 20032,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_20",
    "name": "Kamienica ul. Szewska 20",
    "address": "ul. Szewska 20",
    "polygon": [
      {
        "x": 20090,
        "y": 23260
      },
      {
        "x": 20285,
        "y": 23260
      },
      {
        "x": 20285,
        "y": 23860
      },
      {
        "x": 20090,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_22",
    "name": "Kamienica ul. Szewska 22",
    "address": "ul. Szewska 22",
    "polygon": [
      {
        "x": 20300,
        "y": 23260
      },
      {
        "x": 20495,
        "y": 23260
      },
      {
        "x": 20495,
        "y": 23860
      },
      {
        "x": 20300,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_22",
        "x": 20398,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_22",
        "name": "ul. Szewska 22 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 20312,
            "y": 23272
          },
          {
            "x": 20483,
            "y": 23272
          },
          {
            "x": 20483,
            "y": 23848
          },
          {
            "x": 20312,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20398,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20343,
        "y": 23268
      },
      {
        "x": 20452,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_24",
    "name": "Kamienica ul. Szewska 24",
    "address": "ul. Szewska 24",
    "polygon": [
      {
        "x": 20510,
        "y": 23260
      },
      {
        "x": 20705,
        "y": 23260
      },
      {
        "x": 20705,
        "y": 23860
      },
      {
        "x": 20510,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_26",
    "name": "Kamienica ul. Szewska 26",
    "address": "ul. Szewska 26",
    "polygon": [
      {
        "x": 20720,
        "y": 23260
      },
      {
        "x": 20915,
        "y": 23260
      },
      {
        "x": 20915,
        "y": 23860
      },
      {
        "x": 20720,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_26",
        "x": 20818,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_26",
        "name": "ul. Szewska 26 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 20732,
            "y": 23272
          },
          {
            "x": 20903,
            "y": 23272
          },
          {
            "x": 20903,
            "y": 23848
          },
          {
            "x": 20732,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20818,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20763,
        "y": 23268
      },
      {
        "x": 20872,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_szew_s_28",
    "name": "Kamienica ul. Szewska 28",
    "address": "ul. Szewska 28",
    "polygon": [
      {
        "x": 20930,
        "y": 23260
      },
      {
        "x": 21125,
        "y": 23260
      },
      {
        "x": 21125,
        "y": 23860
      },
      {
        "x": 20930,
        "y": 23860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_szew_s_30",
    "name": "Kamienica ul. Szewska 30",
    "address": "ul. Szewska 30",
    "polygon": [
      {
        "x": 21140,
        "y": 23260
      },
      {
        "x": 21335,
        "y": 23260
      },
      {
        "x": 21335,
        "y": 23860
      },
      {
        "x": 21140,
        "y": 23860
      }
    ],
    "doors": [
      {
        "id": "d_kam_szew_s_30",
        "x": 21238,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_szew_s_30",
        "name": "ul. Szewska 30 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 21152,
            "y": 23272
          },
          {
            "x": 21323,
            "y": 23272
          },
          {
            "x": 21323,
            "y": 23848
          },
          {
            "x": 21152,
            "y": 23848
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21238,
            "y": 23560,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21183,
        "y": 23268
      },
      {
        "x": 21292,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_anna_n_1",
    "name": "Kamienica ul. św. Anny 1",
    "address": "ul. św. Anny 1",
    "polygon": [
      {
        "x": 18200,
        "y": 24140
      },
      {
        "x": 18395,
        "y": 24140
      },
      {
        "x": 18395,
        "y": 24740
      },
      {
        "x": 18200,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_1",
        "x": 18298,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_1",
        "name": "ul. św. Anny 1 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 18212,
            "y": 24152
          },
          {
            "x": 18383,
            "y": 24152
          },
          {
            "x": 18383,
            "y": 24728
          },
          {
            "x": 18212,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18298,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18243,
        "y": 24732
      },
      {
        "x": 18352,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_3",
    "name": "Kamienica ul. św. Anny 3",
    "address": "ul. św. Anny 3",
    "polygon": [
      {
        "x": 18410,
        "y": 24140
      },
      {
        "x": 18605,
        "y": 24140
      },
      {
        "x": 18605,
        "y": 24740
      },
      {
        "x": 18410,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_5",
    "name": "Kamienica ul. św. Anny 5",
    "address": "ul. św. Anny 5",
    "polygon": [
      {
        "x": 18620,
        "y": 24140
      },
      {
        "x": 18815,
        "y": 24140
      },
      {
        "x": 18815,
        "y": 24740
      },
      {
        "x": 18620,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_5",
        "x": 18718,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_5",
        "name": "ul. św. Anny 5 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 18632,
            "y": 24152
          },
          {
            "x": 18803,
            "y": 24152
          },
          {
            "x": 18803,
            "y": 24728
          },
          {
            "x": 18632,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18718,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18663,
        "y": 24732
      },
      {
        "x": 18772,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_7",
    "name": "Kamienica ul. św. Anny 7",
    "address": "ul. św. Anny 7",
    "polygon": [
      {
        "x": 18830,
        "y": 24140
      },
      {
        "x": 19025,
        "y": 24140
      },
      {
        "x": 19025,
        "y": 24740
      },
      {
        "x": 18830,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_9",
    "name": "Kamienica ul. św. Anny 9",
    "address": "ul. św. Anny 9",
    "polygon": [
      {
        "x": 19040,
        "y": 24140
      },
      {
        "x": 19235,
        "y": 24140
      },
      {
        "x": 19235,
        "y": 24740
      },
      {
        "x": 19040,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_9",
        "x": 19138,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_9",
        "name": "ul. św. Anny 9 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 19052,
            "y": 24152
          },
          {
            "x": 19223,
            "y": 24152
          },
          {
            "x": 19223,
            "y": 24728
          },
          {
            "x": 19052,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19138,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19083,
        "y": 24732
      },
      {
        "x": 19192,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_11",
    "name": "Kamienica ul. św. Anny 11",
    "address": "ul. św. Anny 11",
    "polygon": [
      {
        "x": 19250,
        "y": 24140
      },
      {
        "x": 19445,
        "y": 24140
      },
      {
        "x": 19445,
        "y": 24740
      },
      {
        "x": 19250,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_13",
    "name": "Kamienica ul. św. Anny 13",
    "address": "ul. św. Anny 13",
    "polygon": [
      {
        "x": 19460,
        "y": 24140
      },
      {
        "x": 19655,
        "y": 24140
      },
      {
        "x": 19655,
        "y": 24740
      },
      {
        "x": 19460,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_13",
        "x": 19558,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_13",
        "name": "ul. św. Anny 13 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 19472,
            "y": 24152
          },
          {
            "x": 19643,
            "y": 24152
          },
          {
            "x": 19643,
            "y": 24728
          },
          {
            "x": 19472,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19558,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19503,
        "y": 24732
      },
      {
        "x": 19612,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_15",
    "name": "Kamienica ul. św. Anny 15",
    "address": "ul. św. Anny 15",
    "polygon": [
      {
        "x": 19670,
        "y": 24140
      },
      {
        "x": 19865,
        "y": 24140
      },
      {
        "x": 19865,
        "y": 24740
      },
      {
        "x": 19670,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_17",
    "name": "Kamienica ul. św. Anny 17",
    "address": "ul. św. Anny 17",
    "polygon": [
      {
        "x": 19880,
        "y": 24140
      },
      {
        "x": 20075,
        "y": 24140
      },
      {
        "x": 20075,
        "y": 24740
      },
      {
        "x": 19880,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_17",
        "x": 19978,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_17",
        "name": "ul. św. Anny 17 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 19892,
            "y": 24152
          },
          {
            "x": 20063,
            "y": 24152
          },
          {
            "x": 20063,
            "y": 24728
          },
          {
            "x": 19892,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19978,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19923,
        "y": 24732
      },
      {
        "x": 20032,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_19",
    "name": "Kamienica ul. św. Anny 19",
    "address": "ul. św. Anny 19",
    "polygon": [
      {
        "x": 20090,
        "y": 24140
      },
      {
        "x": 20285,
        "y": 24140
      },
      {
        "x": 20285,
        "y": 24740
      },
      {
        "x": 20090,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_21",
    "name": "Kamienica ul. św. Anny 21",
    "address": "ul. św. Anny 21",
    "polygon": [
      {
        "x": 20300,
        "y": 24140
      },
      {
        "x": 20495,
        "y": 24140
      },
      {
        "x": 20495,
        "y": 24740
      },
      {
        "x": 20300,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_21",
        "x": 20398,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_21",
        "name": "ul. św. Anny 21 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 20312,
            "y": 24152
          },
          {
            "x": 20483,
            "y": 24152
          },
          {
            "x": 20483,
            "y": 24728
          },
          {
            "x": 20312,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20398,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20343,
        "y": 24732
      },
      {
        "x": 20452,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_23",
    "name": "Kamienica ul. św. Anny 23",
    "address": "ul. św. Anny 23",
    "polygon": [
      {
        "x": 20510,
        "y": 24140
      },
      {
        "x": 20705,
        "y": 24140
      },
      {
        "x": 20705,
        "y": 24740
      },
      {
        "x": 20510,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_25",
    "name": "Kamienica ul. św. Anny 25",
    "address": "ul. św. Anny 25",
    "polygon": [
      {
        "x": 20720,
        "y": 24140
      },
      {
        "x": 20915,
        "y": 24140
      },
      {
        "x": 20915,
        "y": 24740
      },
      {
        "x": 20720,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_25",
        "x": 20818,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_25",
        "name": "ul. św. Anny 25 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 20732,
            "y": 24152
          },
          {
            "x": 20903,
            "y": 24152
          },
          {
            "x": 20903,
            "y": 24728
          },
          {
            "x": 20732,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20818,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20763,
        "y": 24732
      },
      {
        "x": 20872,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_n_27",
    "name": "Kamienica ul. św. Anny 27",
    "address": "ul. św. Anny 27",
    "polygon": [
      {
        "x": 20930,
        "y": 24140
      },
      {
        "x": 21125,
        "y": 24140
      },
      {
        "x": 21125,
        "y": 24740
      },
      {
        "x": 20930,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_n_29",
    "name": "Kamienica ul. św. Anny 29",
    "address": "ul. św. Anny 29",
    "polygon": [
      {
        "x": 21140,
        "y": 24140
      },
      {
        "x": 21335,
        "y": 24140
      },
      {
        "x": 21335,
        "y": 24740
      },
      {
        "x": 21140,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_n_29",
        "x": 21238,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_n_29",
        "name": "ul. św. Anny 29 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 21152,
            "y": 24152
          },
          {
            "x": 21323,
            "y": 24152
          },
          {
            "x": 21323,
            "y": 24728
          },
          {
            "x": 21152,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21238,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21183,
        "y": 24732
      },
      {
        "x": 21292,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_anna_s_2",
    "name": "Kamienica ul. św. Anny 2",
    "address": "ul. św. Anny 2",
    "polygon": [
      {
        "x": 18200,
        "y": 24900
      },
      {
        "x": 18395,
        "y": 24900
      },
      {
        "x": 18395,
        "y": 25500
      },
      {
        "x": 18200,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_2",
        "x": 18298,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_2",
        "name": "ul. św. Anny 2 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 18212,
            "y": 24912
          },
          {
            "x": 18383,
            "y": 24912
          },
          {
            "x": 18383,
            "y": 25488
          },
          {
            "x": 18212,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18298,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18243,
        "y": 24908
      },
      {
        "x": 18352,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_4",
    "name": "Kamienica ul. św. Anny 4",
    "address": "ul. św. Anny 4",
    "polygon": [
      {
        "x": 18410,
        "y": 24900
      },
      {
        "x": 18605,
        "y": 24900
      },
      {
        "x": 18605,
        "y": 25500
      },
      {
        "x": 18410,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_6",
    "name": "Kamienica ul. św. Anny 6",
    "address": "ul. św. Anny 6",
    "polygon": [
      {
        "x": 18620,
        "y": 24900
      },
      {
        "x": 18815,
        "y": 24900
      },
      {
        "x": 18815,
        "y": 25500
      },
      {
        "x": 18620,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_6",
        "x": 18718,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_6",
        "name": "ul. św. Anny 6 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 18632,
            "y": 24912
          },
          {
            "x": 18803,
            "y": 24912
          },
          {
            "x": 18803,
            "y": 25488
          },
          {
            "x": 18632,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18718,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18663,
        "y": 24908
      },
      {
        "x": 18772,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_8",
    "name": "Kamienica ul. św. Anny 8",
    "address": "ul. św. Anny 8",
    "polygon": [
      {
        "x": 18830,
        "y": 24900
      },
      {
        "x": 19025,
        "y": 24900
      },
      {
        "x": 19025,
        "y": 25500
      },
      {
        "x": 18830,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_10",
    "name": "Kamienica ul. św. Anny 10",
    "address": "ul. św. Anny 10",
    "polygon": [
      {
        "x": 19040,
        "y": 24900
      },
      {
        "x": 19235,
        "y": 24900
      },
      {
        "x": 19235,
        "y": 25500
      },
      {
        "x": 19040,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_10",
        "x": 19138,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_10",
        "name": "ul. św. Anny 10 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 19052,
            "y": 24912
          },
          {
            "x": 19223,
            "y": 24912
          },
          {
            "x": 19223,
            "y": 25488
          },
          {
            "x": 19052,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19138,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19083,
        "y": 24908
      },
      {
        "x": 19192,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_12",
    "name": "Kamienica ul. św. Anny 12",
    "address": "ul. św. Anny 12",
    "polygon": [
      {
        "x": 19250,
        "y": 24900
      },
      {
        "x": 19445,
        "y": 24900
      },
      {
        "x": 19445,
        "y": 25500
      },
      {
        "x": 19250,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_14",
    "name": "Kamienica ul. św. Anny 14",
    "address": "ul. św. Anny 14",
    "polygon": [
      {
        "x": 19460,
        "y": 24900
      },
      {
        "x": 19655,
        "y": 24900
      },
      {
        "x": 19655,
        "y": 25500
      },
      {
        "x": 19460,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_14",
        "x": 19558,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_14",
        "name": "ul. św. Anny 14 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 19472,
            "y": 24912
          },
          {
            "x": 19643,
            "y": 24912
          },
          {
            "x": 19643,
            "y": 25488
          },
          {
            "x": 19472,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19558,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19503,
        "y": 24908
      },
      {
        "x": 19612,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_16",
    "name": "Kamienica ul. św. Anny 16",
    "address": "ul. św. Anny 16",
    "polygon": [
      {
        "x": 19670,
        "y": 24900
      },
      {
        "x": 19865,
        "y": 24900
      },
      {
        "x": 19865,
        "y": 25500
      },
      {
        "x": 19670,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_18",
    "name": "Kamienica ul. św. Anny 18",
    "address": "ul. św. Anny 18",
    "polygon": [
      {
        "x": 19880,
        "y": 24900
      },
      {
        "x": 20075,
        "y": 24900
      },
      {
        "x": 20075,
        "y": 25500
      },
      {
        "x": 19880,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_18",
        "x": 19978,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_18",
        "name": "ul. św. Anny 18 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 19892,
            "y": 24912
          },
          {
            "x": 20063,
            "y": 24912
          },
          {
            "x": 20063,
            "y": 25488
          },
          {
            "x": 19892,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19978,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19923,
        "y": 24908
      },
      {
        "x": 20032,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_20",
    "name": "Kamienica ul. św. Anny 20",
    "address": "ul. św. Anny 20",
    "polygon": [
      {
        "x": 20090,
        "y": 24900
      },
      {
        "x": 20285,
        "y": 24900
      },
      {
        "x": 20285,
        "y": 25500
      },
      {
        "x": 20090,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_22",
    "name": "Kamienica ul. św. Anny 22",
    "address": "ul. św. Anny 22",
    "polygon": [
      {
        "x": 20300,
        "y": 24900
      },
      {
        "x": 20495,
        "y": 24900
      },
      {
        "x": 20495,
        "y": 25500
      },
      {
        "x": 20300,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_22",
        "x": 20398,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_22",
        "name": "ul. św. Anny 22 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 20312,
            "y": 24912
          },
          {
            "x": 20483,
            "y": 24912
          },
          {
            "x": 20483,
            "y": 25488
          },
          {
            "x": 20312,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20398,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20343,
        "y": 24908
      },
      {
        "x": 20452,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_24",
    "name": "Kamienica ul. św. Anny 24",
    "address": "ul. św. Anny 24",
    "polygon": [
      {
        "x": 20510,
        "y": 24900
      },
      {
        "x": 20705,
        "y": 24900
      },
      {
        "x": 20705,
        "y": 25500
      },
      {
        "x": 20510,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_26",
    "name": "Kamienica ul. św. Anny 26",
    "address": "ul. św. Anny 26",
    "polygon": [
      {
        "x": 20720,
        "y": 24900
      },
      {
        "x": 20915,
        "y": 24900
      },
      {
        "x": 20915,
        "y": 25500
      },
      {
        "x": 20720,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_26",
        "x": 20818,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_26",
        "name": "ul. św. Anny 26 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 20732,
            "y": 24912
          },
          {
            "x": 20903,
            "y": 24912
          },
          {
            "x": 20903,
            "y": 25488
          },
          {
            "x": 20732,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20818,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20763,
        "y": 24908
      },
      {
        "x": 20872,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_anna_s_28",
    "name": "Kamienica ul. św. Anny 28",
    "address": "ul. św. Anny 28",
    "polygon": [
      {
        "x": 20930,
        "y": 24900
      },
      {
        "x": 21125,
        "y": 24900
      },
      {
        "x": 21125,
        "y": 25500
      },
      {
        "x": 20930,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_anna_s_30",
    "name": "Kamienica ul. św. Anny 30",
    "address": "ul. św. Anny 30",
    "polygon": [
      {
        "x": 21140,
        "y": 24900
      },
      {
        "x": 21335,
        "y": 24900
      },
      {
        "x": 21335,
        "y": 25500
      },
      {
        "x": 21140,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_anna_s_30",
        "x": 21238,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_anna_s_30",
        "name": "ul. św. Anny 30 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 21152,
            "y": 24912
          },
          {
            "x": 21323,
            "y": 24912
          },
          {
            "x": 21323,
            "y": 25488
          },
          {
            "x": 21152,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21238,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21183,
        "y": 24908
      },
      {
        "x": 21292,
        "y": 24908
      }
    ]
  },
  {
    "id": "collegium_maius",
    "name": "Collegium Maius UJ (Najstarszy Budynek Uniwersytetu)",
    "address": "ul. Jagiellońska 15",
    "polygon": [
      {
        "x": 19400,
        "y": 24200
      },
      {
        "x": 20250,
        "y": 24200
      },
      {
        "x": 20250,
        "y": 24750
      },
      {
        "x": 19400,
        "y": 24750
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "maius_d",
        "x": 20250,
        "y": 24475,
        "width": 85,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 19800,
        "y": 24210
      },
      {
        "x": 19800,
        "y": 24740
      }
    ],
    "interiorRooms": [
      {
        "id": "maius_aula",
        "name": "Libraria i Aula Jagiellońska",
        "polygon": [
          {
            "x": 19450,
            "y": 24250
          },
          {
            "x": 20200,
            "y": 24250
          },
          {
            "x": 20200,
            "y": 24700
          },
          {
            "x": 19450,
            "y": 24700
          }
        ]
      }
    ]
  },
  {
    "id": "kam_goleb_n_1",
    "name": "Kamienica ul. Gołębia 1",
    "address": "ul. Gołębia 1",
    "polygon": [
      {
        "x": 18400,
        "y": 25250
      },
      {
        "x": 18605,
        "y": 25250
      },
      {
        "x": 18605,
        "y": 25720
      },
      {
        "x": 18400,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_1",
        "x": 18503,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_1",
        "name": "ul. Gołębia 1 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 18412,
            "y": 25262
          },
          {
            "x": 18593,
            "y": 25262
          },
          {
            "x": 18593,
            "y": 25708
          },
          {
            "x": 18412,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18503,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18445,
        "y": 25712
      },
      {
        "x": 18560,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_n_3",
    "name": "Kamienica ul. Gołębia 3",
    "address": "ul. Gołębia 3",
    "polygon": [
      {
        "x": 18620,
        "y": 25250
      },
      {
        "x": 18825,
        "y": 25250
      },
      {
        "x": 18825,
        "y": 25720
      },
      {
        "x": 18620,
        "y": 25720
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_n_5",
    "name": "Kamienica ul. Gołębia 5",
    "address": "ul. Gołębia 5",
    "polygon": [
      {
        "x": 18840,
        "y": 25250
      },
      {
        "x": 19045,
        "y": 25250
      },
      {
        "x": 19045,
        "y": 25720
      },
      {
        "x": 18840,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_5",
        "x": 18943,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_5",
        "name": "ul. Gołębia 5 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 18852,
            "y": 25262
          },
          {
            "x": 19033,
            "y": 25262
          },
          {
            "x": 19033,
            "y": 25708
          },
          {
            "x": 18852,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18943,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18885,
        "y": 25712
      },
      {
        "x": 19000,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_n_7",
    "name": "Kamienica ul. Gołębia 7",
    "address": "ul. Gołębia 7",
    "polygon": [
      {
        "x": 19060,
        "y": 25250
      },
      {
        "x": 19265,
        "y": 25250
      },
      {
        "x": 19265,
        "y": 25720
      },
      {
        "x": 19060,
        "y": 25720
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_n_9",
    "name": "Kamienica ul. Gołębia 9",
    "address": "ul. Gołębia 9",
    "polygon": [
      {
        "x": 19280,
        "y": 25250
      },
      {
        "x": 19485,
        "y": 25250
      },
      {
        "x": 19485,
        "y": 25720
      },
      {
        "x": 19280,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_9",
        "x": 19383,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_9",
        "name": "ul. Gołębia 9 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 19292,
            "y": 25262
          },
          {
            "x": 19473,
            "y": 25262
          },
          {
            "x": 19473,
            "y": 25708
          },
          {
            "x": 19292,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19383,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19325,
        "y": 25712
      },
      {
        "x": 19440,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_n_11",
    "name": "Kamienica ul. Gołębia 11",
    "address": "ul. Gołębia 11",
    "polygon": [
      {
        "x": 19500,
        "y": 25250
      },
      {
        "x": 19705,
        "y": 25250
      },
      {
        "x": 19705,
        "y": 25720
      },
      {
        "x": 19500,
        "y": 25720
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_n_13",
    "name": "Kamienica ul. Gołębia 13",
    "address": "ul. Gołębia 13",
    "polygon": [
      {
        "x": 19720,
        "y": 25250
      },
      {
        "x": 19925,
        "y": 25250
      },
      {
        "x": 19925,
        "y": 25720
      },
      {
        "x": 19720,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_13",
        "x": 19823,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_13",
        "name": "ul. Gołębia 13 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 19732,
            "y": 25262
          },
          {
            "x": 19913,
            "y": 25262
          },
          {
            "x": 19913,
            "y": 25708
          },
          {
            "x": 19732,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19823,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19765,
        "y": 25712
      },
      {
        "x": 19880,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_n_15",
    "name": "Kamienica ul. Gołębia 15",
    "address": "ul. Gołębia 15",
    "polygon": [
      {
        "x": 19940,
        "y": 25250
      },
      {
        "x": 20145,
        "y": 25250
      },
      {
        "x": 20145,
        "y": 25720
      },
      {
        "x": 19940,
        "y": 25720
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_n_17",
    "name": "Kamienica ul. Gołębia 17",
    "address": "ul. Gołębia 17",
    "polygon": [
      {
        "x": 20160,
        "y": 25250
      },
      {
        "x": 20365,
        "y": 25250
      },
      {
        "x": 20365,
        "y": 25720
      },
      {
        "x": 20160,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_17",
        "x": 20263,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_17",
        "name": "ul. Gołębia 17 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 20172,
            "y": 25262
          },
          {
            "x": 20353,
            "y": 25262
          },
          {
            "x": 20353,
            "y": 25708
          },
          {
            "x": 20172,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20263,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20205,
        "y": 25712
      },
      {
        "x": 20320,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_n_19",
    "name": "Kamienica ul. Gołębia 19",
    "address": "ul. Gołębia 19",
    "polygon": [
      {
        "x": 20380,
        "y": 25250
      },
      {
        "x": 20585,
        "y": 25250
      },
      {
        "x": 20585,
        "y": 25720
      },
      {
        "x": 20380,
        "y": 25720
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_n_21",
    "name": "Kamienica ul. Gołębia 21",
    "address": "ul. Gołębia 21",
    "polygon": [
      {
        "x": 20600,
        "y": 25250
      },
      {
        "x": 20805,
        "y": 25250
      },
      {
        "x": 20805,
        "y": 25720
      },
      {
        "x": 20600,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_21",
        "x": 20703,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_21",
        "name": "ul. Gołębia 21 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 20612,
            "y": 25262
          },
          {
            "x": 20793,
            "y": 25262
          },
          {
            "x": 20793,
            "y": 25708
          },
          {
            "x": 20612,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20703,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20645,
        "y": 25712
      },
      {
        "x": 20760,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_n_23",
    "name": "Kamienica ul. Gołębia 23",
    "address": "ul. Gołębia 23",
    "polygon": [
      {
        "x": 20820,
        "y": 25250
      },
      {
        "x": 21025,
        "y": 25250
      },
      {
        "x": 21025,
        "y": 25720
      },
      {
        "x": 20820,
        "y": 25720
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_n_25",
    "name": "Kamienica ul. Gołębia 25",
    "address": "ul. Gołębia 25",
    "polygon": [
      {
        "x": 21040,
        "y": 25250
      },
      {
        "x": 21245,
        "y": 25250
      },
      {
        "x": 21245,
        "y": 25720
      },
      {
        "x": 21040,
        "y": 25720
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_n_25",
        "x": 21143,
        "y": 25720,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_n_25",
        "name": "ul. Gołębia 25 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 21052,
            "y": 25262
          },
          {
            "x": 21233,
            "y": 25262
          },
          {
            "x": 21233,
            "y": 25708
          },
          {
            "x": 21052,
            "y": 25708
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21143,
            "y": 25485,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21085,
        "y": 25712
      },
      {
        "x": 21200,
        "y": 25712
      }
    ]
  },
  {
    "id": "kam_goleb_s_2",
    "name": "Kamienica ul. Gołębia 2",
    "address": "ul. Gołębia 2",
    "polygon": [
      {
        "x": 18400,
        "y": 25880
      },
      {
        "x": 18605,
        "y": 25880
      },
      {
        "x": 18605,
        "y": 26350
      },
      {
        "x": 18400,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_2",
        "x": 18503,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_2",
        "name": "ul. Gołębia 2 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 18412,
            "y": 25892
          },
          {
            "x": 18593,
            "y": 25892
          },
          {
            "x": 18593,
            "y": 26338
          },
          {
            "x": 18412,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18503,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18445,
        "y": 25888
      },
      {
        "x": 18560,
        "y": 25888
      }
    ]
  },
  {
    "id": "kam_goleb_s_4",
    "name": "Kamienica ul. Gołębia 4",
    "address": "ul. Gołębia 4",
    "polygon": [
      {
        "x": 18620,
        "y": 25880
      },
      {
        "x": 18825,
        "y": 25880
      },
      {
        "x": 18825,
        "y": 26350
      },
      {
        "x": 18620,
        "y": 26350
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_s_6",
    "name": "Kamienica ul. Gołębia 6",
    "address": "ul. Gołębia 6",
    "polygon": [
      {
        "x": 18840,
        "y": 25880
      },
      {
        "x": 19045,
        "y": 25880
      },
      {
        "x": 19045,
        "y": 26350
      },
      {
        "x": 18840,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_6",
        "x": 18943,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_6",
        "name": "ul. Gołębia 6 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 18852,
            "y": 25892
          },
          {
            "x": 19033,
            "y": 25892
          },
          {
            "x": 19033,
            "y": 26338
          },
          {
            "x": 18852,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 18943,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 18885,
        "y": 25888
      },
      {
        "x": 19000,
        "y": 25888
      }
    ]
  },
  {
    "id": "kam_goleb_s_8",
    "name": "Kamienica ul. Gołębia 8",
    "address": "ul. Gołębia 8",
    "polygon": [
      {
        "x": 19060,
        "y": 25880
      },
      {
        "x": 19265,
        "y": 25880
      },
      {
        "x": 19265,
        "y": 26350
      },
      {
        "x": 19060,
        "y": 26350
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_s_10",
    "name": "Kamienica ul. Gołębia 10",
    "address": "ul. Gołębia 10",
    "polygon": [
      {
        "x": 19280,
        "y": 25880
      },
      {
        "x": 19485,
        "y": 25880
      },
      {
        "x": 19485,
        "y": 26350
      },
      {
        "x": 19280,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_10",
        "x": 19383,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_10",
        "name": "ul. Gołębia 10 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 19292,
            "y": 25892
          },
          {
            "x": 19473,
            "y": 25892
          },
          {
            "x": 19473,
            "y": 26338
          },
          {
            "x": 19292,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19383,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19325,
        "y": 25888
      },
      {
        "x": 19440,
        "y": 25888
      }
    ]
  },
  {
    "id": "kam_goleb_s_12",
    "name": "Kamienica ul. Gołębia 12",
    "address": "ul. Gołębia 12",
    "polygon": [
      {
        "x": 19500,
        "y": 25880
      },
      {
        "x": 19705,
        "y": 25880
      },
      {
        "x": 19705,
        "y": 26350
      },
      {
        "x": 19500,
        "y": 26350
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_s_14",
    "name": "Kamienica ul. Gołębia 14",
    "address": "ul. Gołębia 14",
    "polygon": [
      {
        "x": 19720,
        "y": 25880
      },
      {
        "x": 19925,
        "y": 25880
      },
      {
        "x": 19925,
        "y": 26350
      },
      {
        "x": 19720,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_14",
        "x": 19823,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_14",
        "name": "ul. Gołębia 14 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 19732,
            "y": 25892
          },
          {
            "x": 19913,
            "y": 25892
          },
          {
            "x": 19913,
            "y": 26338
          },
          {
            "x": 19732,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 19823,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 19765,
        "y": 25888
      },
      {
        "x": 19880,
        "y": 25888
      }
    ]
  },
  {
    "id": "kam_goleb_s_16",
    "name": "Kamienica ul. Gołębia 16",
    "address": "ul. Gołębia 16",
    "polygon": [
      {
        "x": 19940,
        "y": 25880
      },
      {
        "x": 20145,
        "y": 25880
      },
      {
        "x": 20145,
        "y": 26350
      },
      {
        "x": 19940,
        "y": 26350
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_s_18",
    "name": "Kamienica ul. Gołębia 18",
    "address": "ul. Gołębia 18",
    "polygon": [
      {
        "x": 20160,
        "y": 25880
      },
      {
        "x": 20365,
        "y": 25880
      },
      {
        "x": 20365,
        "y": 26350
      },
      {
        "x": 20160,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_18",
        "x": 20263,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_18",
        "name": "ul. Gołębia 18 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 20172,
            "y": 25892
          },
          {
            "x": 20353,
            "y": 25892
          },
          {
            "x": 20353,
            "y": 26338
          },
          {
            "x": 20172,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20263,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20205,
        "y": 25888
      },
      {
        "x": 20320,
        "y": 25888
      }
    ]
  },
  {
    "id": "kam_goleb_s_20",
    "name": "Kamienica ul. Gołębia 20",
    "address": "ul. Gołębia 20",
    "polygon": [
      {
        "x": 20380,
        "y": 25880
      },
      {
        "x": 20585,
        "y": 25880
      },
      {
        "x": 20585,
        "y": 26350
      },
      {
        "x": 20380,
        "y": 26350
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_s_22",
    "name": "Kamienica ul. Gołębia 22",
    "address": "ul. Gołębia 22",
    "polygon": [
      {
        "x": 20600,
        "y": 25880
      },
      {
        "x": 20805,
        "y": 25880
      },
      {
        "x": 20805,
        "y": 26350
      },
      {
        "x": 20600,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_22",
        "x": 20703,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_22",
        "name": "ul. Gołębia 22 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 20612,
            "y": 25892
          },
          {
            "x": 20793,
            "y": 25892
          },
          {
            "x": 20793,
            "y": 26338
          },
          {
            "x": 20612,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20703,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20645,
        "y": 25888
      },
      {
        "x": 20760,
        "y": 25888
      }
    ]
  },
  {
    "id": "kam_goleb_s_24",
    "name": "Kamienica ul. Gołębia 24",
    "address": "ul. Gołębia 24",
    "polygon": [
      {
        "x": 20820,
        "y": 25880
      },
      {
        "x": 21025,
        "y": 25880
      },
      {
        "x": 21025,
        "y": 26350
      },
      {
        "x": 20820,
        "y": 26350
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_goleb_s_26",
    "name": "Kamienica ul. Gołębia 26",
    "address": "ul. Gołębia 26",
    "polygon": [
      {
        "x": 21040,
        "y": 25880
      },
      {
        "x": 21245,
        "y": 25880
      },
      {
        "x": 21245,
        "y": 26350
      },
      {
        "x": 21040,
        "y": 26350
      }
    ],
    "doors": [
      {
        "id": "d_kam_goleb_s_26",
        "x": 21143,
        "y": 25880,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_goleb_s_26",
        "name": "ul. Gołębia 26 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 21052,
            "y": 25892
          },
          {
            "x": 21233,
            "y": 25892
          },
          {
            "x": 21233,
            "y": 26338
          },
          {
            "x": 21052,
            "y": 26338
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21143,
            "y": 26115,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21085,
        "y": 25888
      },
      {
        "x": 21200,
        "y": 25888
      }
    ]
  },
  {
    "id": "collegium_novum",
    "name": "Collegium Novum UJ (Rektorat)",
    "address": "ul. Gołębia 24",
    "polygon": [
      {
        "x": 18200,
        "y": 26450
      },
      {
        "x": 19150,
        "y": 26450
      },
      {
        "x": 19150,
        "y": 27100
      },
      {
        "x": 18200,
        "y": 27100
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": true,
    "doors": [
      {
        "id": "novum_d",
        "x": 19150,
        "y": 26775,
        "width": 90,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 18700,
        "y": 26460
      },
      {
        "x": 18700,
        "y": 27090
      }
    ],
    "interiorRooms": [
      {
        "id": "novum_aula",
        "name": "Aula Główna Collegium Novum",
        "polygon": [
          {
            "x": 18250,
            "y": 26500
          },
          {
            "x": 19100,
            "y": 26500
          },
          {
            "x": 19100,
            "y": 27050
          },
          {
            "x": 18250,
            "y": 27050
          }
        ]
      }
    ]
  },
  {
    "id": "kam_miko_n_1",
    "name": "Kamienica ul. Mikołajska 1",
    "address": "ul. Mikołajska 1",
    "polygon": [
      {
        "x": 26850,
        "y": 22450
      },
      {
        "x": 27055,
        "y": 22450
      },
      {
        "x": 27055,
        "y": 23080
      },
      {
        "x": 26850,
        "y": 23080
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_n_1",
        "x": 26953,
        "y": 23080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_n_1",
        "name": "ul. Mikołajska 1 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 26862,
            "y": 22462
          },
          {
            "x": 27043,
            "y": 22462
          },
          {
            "x": 27043,
            "y": 23068
          },
          {
            "x": 26862,
            "y": 23068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26953,
            "y": 22765,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26895,
        "y": 23072
      },
      {
        "x": 27010,
        "y": 23072
      }
    ]
  },
  {
    "id": "kam_miko_n_3",
    "name": "Kamienica ul. Mikołajska 3",
    "address": "ul. Mikołajska 3",
    "polygon": [
      {
        "x": 27070,
        "y": 22450
      },
      {
        "x": 27275,
        "y": 22450
      },
      {
        "x": 27275,
        "y": 23080
      },
      {
        "x": 27070,
        "y": 23080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_n_5",
    "name": "Kamienica ul. Mikołajska 5",
    "address": "ul. Mikołajska 5",
    "polygon": [
      {
        "x": 27290,
        "y": 22450
      },
      {
        "x": 27495,
        "y": 22450
      },
      {
        "x": 27495,
        "y": 23080
      },
      {
        "x": 27290,
        "y": 23080
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_n_5",
        "x": 27393,
        "y": 23080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_n_5",
        "name": "ul. Mikołajska 5 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 27302,
            "y": 22462
          },
          {
            "x": 27483,
            "y": 22462
          },
          {
            "x": 27483,
            "y": 23068
          },
          {
            "x": 27302,
            "y": 23068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27393,
            "y": 22765,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27335,
        "y": 23072
      },
      {
        "x": 27450,
        "y": 23072
      }
    ]
  },
  {
    "id": "kam_miko_n_7",
    "name": "Kamienica ul. Mikołajska 7",
    "address": "ul. Mikołajska 7",
    "polygon": [
      {
        "x": 27510,
        "y": 22450
      },
      {
        "x": 27715,
        "y": 22450
      },
      {
        "x": 27715,
        "y": 23080
      },
      {
        "x": 27510,
        "y": 23080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_n_9",
    "name": "Kamienica ul. Mikołajska 9",
    "address": "ul. Mikołajska 9",
    "polygon": [
      {
        "x": 27730,
        "y": 22450
      },
      {
        "x": 27935,
        "y": 22450
      },
      {
        "x": 27935,
        "y": 23080
      },
      {
        "x": 27730,
        "y": 23080
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_n_9",
        "x": 27833,
        "y": 23080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_n_9",
        "name": "ul. Mikołajska 9 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 27742,
            "y": 22462
          },
          {
            "x": 27923,
            "y": 22462
          },
          {
            "x": 27923,
            "y": 23068
          },
          {
            "x": 27742,
            "y": 23068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27833,
            "y": 22765,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27775,
        "y": 23072
      },
      {
        "x": 27890,
        "y": 23072
      }
    ]
  },
  {
    "id": "kam_miko_n_11",
    "name": "Kamienica ul. Mikołajska 11",
    "address": "ul. Mikołajska 11",
    "polygon": [
      {
        "x": 27950,
        "y": 22450
      },
      {
        "x": 28155,
        "y": 22450
      },
      {
        "x": 28155,
        "y": 23080
      },
      {
        "x": 27950,
        "y": 23080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_n_13",
    "name": "Kamienica ul. Mikołajska 13",
    "address": "ul. Mikołajska 13",
    "polygon": [
      {
        "x": 28170,
        "y": 22450
      },
      {
        "x": 28375,
        "y": 22450
      },
      {
        "x": 28375,
        "y": 23080
      },
      {
        "x": 28170,
        "y": 23080
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_n_13",
        "x": 28273,
        "y": 23080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_n_13",
        "name": "ul. Mikołajska 13 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 28182,
            "y": 22462
          },
          {
            "x": 28363,
            "y": 22462
          },
          {
            "x": 28363,
            "y": 23068
          },
          {
            "x": 28182,
            "y": 23068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28273,
            "y": 22765,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28215,
        "y": 23072
      },
      {
        "x": 28330,
        "y": 23072
      }
    ]
  },
  {
    "id": "kam_miko_n_15",
    "name": "Kamienica ul. Mikołajska 15",
    "address": "ul. Mikołajska 15",
    "polygon": [
      {
        "x": 28390,
        "y": 22450
      },
      {
        "x": 28595,
        "y": 22450
      },
      {
        "x": 28595,
        "y": 23080
      },
      {
        "x": 28390,
        "y": 23080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_n_17",
    "name": "Kamienica ul. Mikołajska 17",
    "address": "ul. Mikołajska 17",
    "polygon": [
      {
        "x": 28610,
        "y": 22450
      },
      {
        "x": 28815,
        "y": 22450
      },
      {
        "x": 28815,
        "y": 23080
      },
      {
        "x": 28610,
        "y": 23080
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_n_17",
        "x": 28713,
        "y": 23080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_n_17",
        "name": "ul. Mikołajska 17 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 28622,
            "y": 22462
          },
          {
            "x": 28803,
            "y": 22462
          },
          {
            "x": 28803,
            "y": 23068
          },
          {
            "x": 28622,
            "y": 23068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28713,
            "y": 22765,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28655,
        "y": 23072
      },
      {
        "x": 28770,
        "y": 23072
      }
    ]
  },
  {
    "id": "kam_miko_n_19",
    "name": "Kamienica ul. Mikołajska 19",
    "address": "ul. Mikołajska 19",
    "polygon": [
      {
        "x": 28830,
        "y": 22450
      },
      {
        "x": 29035,
        "y": 22450
      },
      {
        "x": 29035,
        "y": 23080
      },
      {
        "x": 28830,
        "y": 23080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_n_21",
    "name": "Kamienica ul. Mikołajska 21",
    "address": "ul. Mikołajska 21",
    "polygon": [
      {
        "x": 29050,
        "y": 22450
      },
      {
        "x": 29255,
        "y": 22450
      },
      {
        "x": 29255,
        "y": 23080
      },
      {
        "x": 29050,
        "y": 23080
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_n_21",
        "x": 29153,
        "y": 23080,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_n_21",
        "name": "ul. Mikołajska 21 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 29062,
            "y": 22462
          },
          {
            "x": 29243,
            "y": 22462
          },
          {
            "x": 29243,
            "y": 23068
          },
          {
            "x": 29062,
            "y": 23068
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 29153,
            "y": 22765,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 29095,
        "y": 23072
      },
      {
        "x": 29210,
        "y": 23072
      }
    ]
  },
  {
    "id": "kam_miko_n_23",
    "name": "Kamienica ul. Mikołajska 23",
    "address": "ul. Mikołajska 23",
    "polygon": [
      {
        "x": 29270,
        "y": 22450
      },
      {
        "x": 29475,
        "y": 22450
      },
      {
        "x": 29475,
        "y": 23080
      },
      {
        "x": 29270,
        "y": 23080
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_s_2",
    "name": "Kamienica ul. Mikołajska 2",
    "address": "ul. Mikołajska 2",
    "polygon": [
      {
        "x": 26850,
        "y": 23260
      },
      {
        "x": 27055,
        "y": 23260
      },
      {
        "x": 27055,
        "y": 23890
      },
      {
        "x": 26850,
        "y": 23890
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_s_2",
        "x": 26953,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_s_2",
        "name": "ul. Mikołajska 2 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 26862,
            "y": 23272
          },
          {
            "x": 27043,
            "y": 23272
          },
          {
            "x": 27043,
            "y": 23878
          },
          {
            "x": 26862,
            "y": 23878
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26953,
            "y": 23575,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26895,
        "y": 23268
      },
      {
        "x": 27010,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_miko_s_4",
    "name": "Kamienica ul. Mikołajska 4",
    "address": "ul. Mikołajska 4",
    "polygon": [
      {
        "x": 27070,
        "y": 23260
      },
      {
        "x": 27275,
        "y": 23260
      },
      {
        "x": 27275,
        "y": 23890
      },
      {
        "x": 27070,
        "y": 23890
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_s_6",
    "name": "Kamienica ul. Mikołajska 6",
    "address": "ul. Mikołajska 6",
    "polygon": [
      {
        "x": 27290,
        "y": 23260
      },
      {
        "x": 27495,
        "y": 23260
      },
      {
        "x": 27495,
        "y": 23890
      },
      {
        "x": 27290,
        "y": 23890
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_s_6",
        "x": 27393,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_s_6",
        "name": "ul. Mikołajska 6 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 27302,
            "y": 23272
          },
          {
            "x": 27483,
            "y": 23272
          },
          {
            "x": 27483,
            "y": 23878
          },
          {
            "x": 27302,
            "y": 23878
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27393,
            "y": 23575,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27335,
        "y": 23268
      },
      {
        "x": 27450,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_miko_s_8",
    "name": "Kamienica ul. Mikołajska 8",
    "address": "ul. Mikołajska 8",
    "polygon": [
      {
        "x": 27510,
        "y": 23260
      },
      {
        "x": 27715,
        "y": 23260
      },
      {
        "x": 27715,
        "y": 23890
      },
      {
        "x": 27510,
        "y": 23890
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_s_10",
    "name": "Kamienica ul. Mikołajska 10",
    "address": "ul. Mikołajska 10",
    "polygon": [
      {
        "x": 27730,
        "y": 23260
      },
      {
        "x": 27935,
        "y": 23260
      },
      {
        "x": 27935,
        "y": 23890
      },
      {
        "x": 27730,
        "y": 23890
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_s_10",
        "x": 27833,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_s_10",
        "name": "ul. Mikołajska 10 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 27742,
            "y": 23272
          },
          {
            "x": 27923,
            "y": 23272
          },
          {
            "x": 27923,
            "y": 23878
          },
          {
            "x": 27742,
            "y": 23878
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27833,
            "y": 23575,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27775,
        "y": 23268
      },
      {
        "x": 27890,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_miko_s_12",
    "name": "Kamienica ul. Mikołajska 12",
    "address": "ul. Mikołajska 12",
    "polygon": [
      {
        "x": 27950,
        "y": 23260
      },
      {
        "x": 28155,
        "y": 23260
      },
      {
        "x": 28155,
        "y": 23890
      },
      {
        "x": 27950,
        "y": 23890
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_s_14",
    "name": "Kamienica ul. Mikołajska 14",
    "address": "ul. Mikołajska 14",
    "polygon": [
      {
        "x": 28170,
        "y": 23260
      },
      {
        "x": 28375,
        "y": 23260
      },
      {
        "x": 28375,
        "y": 23890
      },
      {
        "x": 28170,
        "y": 23890
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_s_14",
        "x": 28273,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_s_14",
        "name": "ul. Mikołajska 14 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 28182,
            "y": 23272
          },
          {
            "x": 28363,
            "y": 23272
          },
          {
            "x": 28363,
            "y": 23878
          },
          {
            "x": 28182,
            "y": 23878
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28273,
            "y": 23575,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28215,
        "y": 23268
      },
      {
        "x": 28330,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_miko_s_16",
    "name": "Kamienica ul. Mikołajska 16",
    "address": "ul. Mikołajska 16",
    "polygon": [
      {
        "x": 28390,
        "y": 23260
      },
      {
        "x": 28595,
        "y": 23260
      },
      {
        "x": 28595,
        "y": 23890
      },
      {
        "x": 28390,
        "y": 23890
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_s_18",
    "name": "Kamienica ul. Mikołajska 18",
    "address": "ul. Mikołajska 18",
    "polygon": [
      {
        "x": 28610,
        "y": 23260
      },
      {
        "x": 28815,
        "y": 23260
      },
      {
        "x": 28815,
        "y": 23890
      },
      {
        "x": 28610,
        "y": 23890
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_s_18",
        "x": 28713,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_s_18",
        "name": "ul. Mikołajska 18 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 28622,
            "y": 23272
          },
          {
            "x": 28803,
            "y": 23272
          },
          {
            "x": 28803,
            "y": 23878
          },
          {
            "x": 28622,
            "y": 23878
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28713,
            "y": 23575,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28655,
        "y": 23268
      },
      {
        "x": 28770,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_miko_s_20",
    "name": "Kamienica ul. Mikołajska 20",
    "address": "ul. Mikołajska 20",
    "polygon": [
      {
        "x": 28830,
        "y": 23260
      },
      {
        "x": 29035,
        "y": 23260
      },
      {
        "x": 29035,
        "y": 23890
      },
      {
        "x": 28830,
        "y": 23890
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_miko_s_22",
    "name": "Kamienica ul. Mikołajska 22",
    "address": "ul. Mikołajska 22",
    "polygon": [
      {
        "x": 29050,
        "y": 23260
      },
      {
        "x": 29255,
        "y": 23260
      },
      {
        "x": 29255,
        "y": 23890
      },
      {
        "x": 29050,
        "y": 23890
      }
    ],
    "doors": [
      {
        "id": "d_kam_miko_s_22",
        "x": 29153,
        "y": 23260,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_miko_s_22",
        "name": "ul. Mikołajska 22 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 29062,
            "y": 23272
          },
          {
            "x": 29243,
            "y": 23272
          },
          {
            "x": 29243,
            "y": 23878
          },
          {
            "x": 29062,
            "y": 23878
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 29153,
            "y": 23575,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 29095,
        "y": 23268
      },
      {
        "x": 29210,
        "y": 23268
      }
    ]
  },
  {
    "id": "kam_miko_s_24",
    "name": "Kamienica ul. Mikołajska 24",
    "address": "ul. Mikołajska 24",
    "polygon": [
      {
        "x": 29270,
        "y": 23260
      },
      {
        "x": 29475,
        "y": 23260
      },
      {
        "x": 29475,
        "y": 23890
      },
      {
        "x": 29270,
        "y": 23890
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_maly_ryn_1",
    "name": "Kamienica Mały Rynek 1",
    "address": "Mały Rynek 1",
    "polygon": [
      {
        "x": 27820,
        "y": 23280
      },
      {
        "x": 28360,
        "y": 23280
      },
      {
        "x": 28360,
        "y": 23540
      },
      {
        "x": 27820,
        "y": 23540
      }
    ],
    "doors": [
      {
        "id": "d_kam_maly_ryn_1",
        "x": 27820,
        "y": 23410,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_maly_ryn_1",
        "name": "Mały Rynek 1 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 27832,
            "y": 23292
          },
          {
            "x": 28348,
            "y": 23292
          },
          {
            "x": 28348,
            "y": 23528
          },
          {
            "x": 27832,
            "y": 23528
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28090,
            "y": 23410,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27828,
        "y": 23337
      },
      {
        "x": 27828,
        "y": 23483
      }
    ]
  },
  {
    "id": "kam_maly_ryn_2",
    "name": "Kamienica Mały Rynek 2",
    "address": "Mały Rynek 2",
    "polygon": [
      {
        "x": 27820,
        "y": 23560
      },
      {
        "x": 28360,
        "y": 23560
      },
      {
        "x": 28360,
        "y": 23820
      },
      {
        "x": 27820,
        "y": 23820
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_maly_ryn_3",
    "name": "Kamienica Mały Rynek 3",
    "address": "Mały Rynek 3",
    "polygon": [
      {
        "x": 27820,
        "y": 23840
      },
      {
        "x": 28360,
        "y": 23840
      },
      {
        "x": 28360,
        "y": 24100
      },
      {
        "x": 27820,
        "y": 24100
      }
    ],
    "doors": [
      {
        "id": "d_kam_maly_ryn_3",
        "x": 27820,
        "y": 23970,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_maly_ryn_3",
        "name": "Mały Rynek 3 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 27832,
            "y": 23852
          },
          {
            "x": 28348,
            "y": 23852
          },
          {
            "x": 28348,
            "y": 24088
          },
          {
            "x": 27832,
            "y": 24088
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28090,
            "y": 23970,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27828,
        "y": 23897
      },
      {
        "x": 27828,
        "y": 24043
      }
    ]
  },
  {
    "id": "kam_maly_ryn_4",
    "name": "Kamienica Mały Rynek 4",
    "address": "Mały Rynek 4",
    "polygon": [
      {
        "x": 27820,
        "y": 24120
      },
      {
        "x": 28360,
        "y": 24120
      },
      {
        "x": 28360,
        "y": 24380
      },
      {
        "x": 27820,
        "y": 24380
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_maly_ryn_5",
    "name": "Kamienica Mały Rynek 5",
    "address": "Mały Rynek 5",
    "polygon": [
      {
        "x": 27820,
        "y": 24400
      },
      {
        "x": 28360,
        "y": 24400
      },
      {
        "x": 28360,
        "y": 24660
      },
      {
        "x": 27820,
        "y": 24660
      }
    ],
    "doors": [
      {
        "id": "d_kam_maly_ryn_5",
        "x": 27820,
        "y": 24530,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_maly_ryn_5",
        "name": "Mały Rynek 5 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 27832,
            "y": 24412
          },
          {
            "x": 28348,
            "y": 24412
          },
          {
            "x": 28348,
            "y": 24648
          },
          {
            "x": 27832,
            "y": 24648
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28090,
            "y": 24530,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27828,
        "y": 24457
      },
      {
        "x": 27828,
        "y": 24603
      }
    ]
  },
  {
    "id": "kam_sien_n_1",
    "name": "Kamienica ul. Sienna 1",
    "address": "ul. Sienna 1",
    "polygon": [
      {
        "x": 26850,
        "y": 24140
      },
      {
        "x": 27055,
        "y": 24140
      },
      {
        "x": 27055,
        "y": 24740
      },
      {
        "x": 26850,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_n_1",
        "x": 26953,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_n_1",
        "name": "ul. Sienna 1 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 26862,
            "y": 24152
          },
          {
            "x": 27043,
            "y": 24152
          },
          {
            "x": 27043,
            "y": 24728
          },
          {
            "x": 26862,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26953,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26895,
        "y": 24732
      },
      {
        "x": 27010,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_sien_n_3",
    "name": "Kamienica ul. Sienna 3",
    "address": "ul. Sienna 3",
    "polygon": [
      {
        "x": 27070,
        "y": 24140
      },
      {
        "x": 27275,
        "y": 24140
      },
      {
        "x": 27275,
        "y": 24740
      },
      {
        "x": 27070,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_n_5",
    "name": "Kamienica ul. Sienna 5",
    "address": "ul. Sienna 5",
    "polygon": [
      {
        "x": 27290,
        "y": 24140
      },
      {
        "x": 27495,
        "y": 24140
      },
      {
        "x": 27495,
        "y": 24740
      },
      {
        "x": 27290,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_n_5",
        "x": 27393,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_n_5",
        "name": "ul. Sienna 5 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 27302,
            "y": 24152
          },
          {
            "x": 27483,
            "y": 24152
          },
          {
            "x": 27483,
            "y": 24728
          },
          {
            "x": 27302,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27393,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27335,
        "y": 24732
      },
      {
        "x": 27450,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_sien_n_7",
    "name": "Kamienica ul. Sienna 7",
    "address": "ul. Sienna 7",
    "polygon": [
      {
        "x": 27510,
        "y": 24140
      },
      {
        "x": 27715,
        "y": 24140
      },
      {
        "x": 27715,
        "y": 24740
      },
      {
        "x": 27510,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_n_9",
    "name": "Kamienica ul. Sienna 9",
    "address": "ul. Sienna 9",
    "polygon": [
      {
        "x": 27730,
        "y": 24140
      },
      {
        "x": 27935,
        "y": 24140
      },
      {
        "x": 27935,
        "y": 24740
      },
      {
        "x": 27730,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_n_9",
        "x": 27833,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_n_9",
        "name": "ul. Sienna 9 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 27742,
            "y": 24152
          },
          {
            "x": 27923,
            "y": 24152
          },
          {
            "x": 27923,
            "y": 24728
          },
          {
            "x": 27742,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27833,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27775,
        "y": 24732
      },
      {
        "x": 27890,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_sien_n_11",
    "name": "Kamienica ul. Sienna 11",
    "address": "ul. Sienna 11",
    "polygon": [
      {
        "x": 27950,
        "y": 24140
      },
      {
        "x": 28155,
        "y": 24140
      },
      {
        "x": 28155,
        "y": 24740
      },
      {
        "x": 27950,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_n_13",
    "name": "Kamienica ul. Sienna 13",
    "address": "ul. Sienna 13",
    "polygon": [
      {
        "x": 28170,
        "y": 24140
      },
      {
        "x": 28375,
        "y": 24140
      },
      {
        "x": 28375,
        "y": 24740
      },
      {
        "x": 28170,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_n_13",
        "x": 28273,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_n_13",
        "name": "ul. Sienna 13 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 28182,
            "y": 24152
          },
          {
            "x": 28363,
            "y": 24152
          },
          {
            "x": 28363,
            "y": 24728
          },
          {
            "x": 28182,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28273,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28215,
        "y": 24732
      },
      {
        "x": 28330,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_sien_n_15",
    "name": "Kamienica ul. Sienna 15",
    "address": "ul. Sienna 15",
    "polygon": [
      {
        "x": 28390,
        "y": 24140
      },
      {
        "x": 28595,
        "y": 24140
      },
      {
        "x": 28595,
        "y": 24740
      },
      {
        "x": 28390,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_n_17",
    "name": "Kamienica ul. Sienna 17",
    "address": "ul. Sienna 17",
    "polygon": [
      {
        "x": 28610,
        "y": 24140
      },
      {
        "x": 28815,
        "y": 24140
      },
      {
        "x": 28815,
        "y": 24740
      },
      {
        "x": 28610,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_n_17",
        "x": 28713,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_n_17",
        "name": "ul. Sienna 17 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 28622,
            "y": 24152
          },
          {
            "x": 28803,
            "y": 24152
          },
          {
            "x": 28803,
            "y": 24728
          },
          {
            "x": 28622,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28713,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28655,
        "y": 24732
      },
      {
        "x": 28770,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_sien_n_19",
    "name": "Kamienica ul. Sienna 19",
    "address": "ul. Sienna 19",
    "polygon": [
      {
        "x": 28830,
        "y": 24140
      },
      {
        "x": 29035,
        "y": 24140
      },
      {
        "x": 29035,
        "y": 24740
      },
      {
        "x": 28830,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_n_21",
    "name": "Kamienica ul. Sienna 21",
    "address": "ul. Sienna 21",
    "polygon": [
      {
        "x": 29050,
        "y": 24140
      },
      {
        "x": 29255,
        "y": 24140
      },
      {
        "x": 29255,
        "y": 24740
      },
      {
        "x": 29050,
        "y": 24740
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_n_21",
        "x": 29153,
        "y": 24740,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_n_21",
        "name": "ul. Sienna 21 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 29062,
            "y": 24152
          },
          {
            "x": 29243,
            "y": 24152
          },
          {
            "x": 29243,
            "y": 24728
          },
          {
            "x": 29062,
            "y": 24728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 29153,
            "y": 24440,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 29095,
        "y": 24732
      },
      {
        "x": 29210,
        "y": 24732
      }
    ]
  },
  {
    "id": "kam_sien_n_23",
    "name": "Kamienica ul. Sienna 23",
    "address": "ul. Sienna 23",
    "polygon": [
      {
        "x": 29270,
        "y": 24140
      },
      {
        "x": 29475,
        "y": 24140
      },
      {
        "x": 29475,
        "y": 24740
      },
      {
        "x": 29270,
        "y": 24740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_s_2",
    "name": "Kamienica ul. Sienna 2",
    "address": "ul. Sienna 2",
    "polygon": [
      {
        "x": 26850,
        "y": 24900
      },
      {
        "x": 27055,
        "y": 24900
      },
      {
        "x": 27055,
        "y": 25500
      },
      {
        "x": 26850,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_s_2",
        "x": 26953,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_s_2",
        "name": "ul. Sienna 2 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 26862,
            "y": 24912
          },
          {
            "x": 27043,
            "y": 24912
          },
          {
            "x": 27043,
            "y": 25488
          },
          {
            "x": 26862,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26953,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 26895,
        "y": 24908
      },
      {
        "x": 27010,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_sien_s_4",
    "name": "Kamienica ul. Sienna 4",
    "address": "ul. Sienna 4",
    "polygon": [
      {
        "x": 27070,
        "y": 24900
      },
      {
        "x": 27275,
        "y": 24900
      },
      {
        "x": 27275,
        "y": 25500
      },
      {
        "x": 27070,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_s_6",
    "name": "Kamienica ul. Sienna 6",
    "address": "ul. Sienna 6",
    "polygon": [
      {
        "x": 27290,
        "y": 24900
      },
      {
        "x": 27495,
        "y": 24900
      },
      {
        "x": 27495,
        "y": 25500
      },
      {
        "x": 27290,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_s_6",
        "x": 27393,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_s_6",
        "name": "ul. Sienna 6 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 27302,
            "y": 24912
          },
          {
            "x": 27483,
            "y": 24912
          },
          {
            "x": 27483,
            "y": 25488
          },
          {
            "x": 27302,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27393,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27335,
        "y": 24908
      },
      {
        "x": 27450,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_sien_s_8",
    "name": "Kamienica ul. Sienna 8",
    "address": "ul. Sienna 8",
    "polygon": [
      {
        "x": 27510,
        "y": 24900
      },
      {
        "x": 27715,
        "y": 24900
      },
      {
        "x": 27715,
        "y": 25500
      },
      {
        "x": 27510,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_s_10",
    "name": "Kamienica ul. Sienna 10",
    "address": "ul. Sienna 10",
    "polygon": [
      {
        "x": 27730,
        "y": 24900
      },
      {
        "x": 27935,
        "y": 24900
      },
      {
        "x": 27935,
        "y": 25500
      },
      {
        "x": 27730,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_s_10",
        "x": 27833,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_s_10",
        "name": "ul. Sienna 10 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 27742,
            "y": 24912
          },
          {
            "x": 27923,
            "y": 24912
          },
          {
            "x": 27923,
            "y": 25488
          },
          {
            "x": 27742,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 27833,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 27775,
        "y": 24908
      },
      {
        "x": 27890,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_sien_s_12",
    "name": "Kamienica ul. Sienna 12",
    "address": "ul. Sienna 12",
    "polygon": [
      {
        "x": 27950,
        "y": 24900
      },
      {
        "x": 28155,
        "y": 24900
      },
      {
        "x": 28155,
        "y": 25500
      },
      {
        "x": 27950,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_s_14",
    "name": "Kamienica ul. Sienna 14",
    "address": "ul. Sienna 14",
    "polygon": [
      {
        "x": 28170,
        "y": 24900
      },
      {
        "x": 28375,
        "y": 24900
      },
      {
        "x": 28375,
        "y": 25500
      },
      {
        "x": 28170,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_s_14",
        "x": 28273,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_s_14",
        "name": "ul. Sienna 14 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 28182,
            "y": 24912
          },
          {
            "x": 28363,
            "y": 24912
          },
          {
            "x": 28363,
            "y": 25488
          },
          {
            "x": 28182,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28273,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28215,
        "y": 24908
      },
      {
        "x": 28330,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_sien_s_16",
    "name": "Kamienica ul. Sienna 16",
    "address": "ul. Sienna 16",
    "polygon": [
      {
        "x": 28390,
        "y": 24900
      },
      {
        "x": 28595,
        "y": 24900
      },
      {
        "x": 28595,
        "y": 25500
      },
      {
        "x": 28390,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_s_18",
    "name": "Kamienica ul. Sienna 18",
    "address": "ul. Sienna 18",
    "polygon": [
      {
        "x": 28610,
        "y": 24900
      },
      {
        "x": 28815,
        "y": 24900
      },
      {
        "x": 28815,
        "y": 25500
      },
      {
        "x": 28610,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_s_18",
        "x": 28713,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_s_18",
        "name": "ul. Sienna 18 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 28622,
            "y": 24912
          },
          {
            "x": 28803,
            "y": 24912
          },
          {
            "x": 28803,
            "y": 25488
          },
          {
            "x": 28622,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 28713,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 28655,
        "y": 24908
      },
      {
        "x": 28770,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_sien_s_20",
    "name": "Kamienica ul. Sienna 20",
    "address": "ul. Sienna 20",
    "polygon": [
      {
        "x": 28830,
        "y": 24900
      },
      {
        "x": 29035,
        "y": 24900
      },
      {
        "x": 29035,
        "y": 25500
      },
      {
        "x": 28830,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_sien_s_22",
    "name": "Kamienica ul. Sienna 22",
    "address": "ul. Sienna 22",
    "polygon": [
      {
        "x": 29050,
        "y": 24900
      },
      {
        "x": 29255,
        "y": 24900
      },
      {
        "x": 29255,
        "y": 25500
      },
      {
        "x": 29050,
        "y": 25500
      }
    ],
    "doors": [
      {
        "id": "d_kam_sien_s_22",
        "x": 29153,
        "y": 24900,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_sien_s_22",
        "name": "ul. Sienna 22 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 29062,
            "y": 24912
          },
          {
            "x": 29243,
            "y": 24912
          },
          {
            "x": 29243,
            "y": 25488
          },
          {
            "x": 29062,
            "y": 25488
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 29153,
            "y": 25200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 29095,
        "y": 24908
      },
      {
        "x": 29210,
        "y": 24908
      }
    ]
  },
  {
    "id": "kam_sien_s_24",
    "name": "Kamienica ul. Sienna 24",
    "address": "ul. Sienna 24",
    "polygon": [
      {
        "x": 29270,
        "y": 24900
      },
      {
        "x": 29475,
        "y": 24900
      },
      {
        "x": 29475,
        "y": 25500
      },
      {
        "x": 29270,
        "y": 25500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_w_1",
    "name": "Kamienica ul. Stolarska 1",
    "address": "ul. Stolarska 1",
    "polygon": [
      {
        "x": 25250,
        "y": 24950
      },
      {
        "x": 25730,
        "y": 24950
      },
      {
        "x": 25730,
        "y": 25200
      },
      {
        "x": 25250,
        "y": 25200
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_w_1",
        "x": 25730,
        "y": 25075,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_w_1",
        "name": "ul. Stolarska 1 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 25262,
            "y": 24962
          },
          {
            "x": 25718,
            "y": 24962
          },
          {
            "x": 25718,
            "y": 25188
          },
          {
            "x": 25262,
            "y": 25188
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25490,
            "y": 25075,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25722,
        "y": 25005
      },
      {
        "x": 25722,
        "y": 25145
      }
    ]
  },
  {
    "id": "kam_stol_w_3",
    "name": "Kamienica ul. Stolarska 3",
    "address": "ul. Stolarska 3",
    "polygon": [
      {
        "x": 25250,
        "y": 25220
      },
      {
        "x": 25730,
        "y": 25220
      },
      {
        "x": 25730,
        "y": 25470
      },
      {
        "x": 25250,
        "y": 25470
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_w_5",
    "name": "Kamienica ul. Stolarska 5",
    "address": "ul. Stolarska 5",
    "polygon": [
      {
        "x": 25250,
        "y": 25490
      },
      {
        "x": 25730,
        "y": 25490
      },
      {
        "x": 25730,
        "y": 25740
      },
      {
        "x": 25250,
        "y": 25740
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_w_5",
        "x": 25730,
        "y": 25615,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_w_5",
        "name": "ul. Stolarska 5 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 25262,
            "y": 25502
          },
          {
            "x": 25718,
            "y": 25502
          },
          {
            "x": 25718,
            "y": 25728
          },
          {
            "x": 25262,
            "y": 25728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25490,
            "y": 25615,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25722,
        "y": 25545
      },
      {
        "x": 25722,
        "y": 25685
      }
    ]
  },
  {
    "id": "kam_stol_w_7",
    "name": "Kamienica ul. Stolarska 7",
    "address": "ul. Stolarska 7",
    "polygon": [
      {
        "x": 25250,
        "y": 25760
      },
      {
        "x": 25730,
        "y": 25760
      },
      {
        "x": 25730,
        "y": 26010
      },
      {
        "x": 25250,
        "y": 26010
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_w_9",
    "name": "Kamienica ul. Stolarska 9",
    "address": "ul. Stolarska 9",
    "polygon": [
      {
        "x": 25250,
        "y": 26030
      },
      {
        "x": 25730,
        "y": 26030
      },
      {
        "x": 25730,
        "y": 26280
      },
      {
        "x": 25250,
        "y": 26280
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_w_9",
        "x": 25730,
        "y": 26155,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_w_9",
        "name": "ul. Stolarska 9 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 25262,
            "y": 26042
          },
          {
            "x": 25718,
            "y": 26042
          },
          {
            "x": 25718,
            "y": 26268
          },
          {
            "x": 25262,
            "y": 26268
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25490,
            "y": 26155,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25722,
        "y": 26085
      },
      {
        "x": 25722,
        "y": 26225
      }
    ]
  },
  {
    "id": "kam_stol_w_11",
    "name": "Kamienica ul. Stolarska 11",
    "address": "ul. Stolarska 11",
    "polygon": [
      {
        "x": 25250,
        "y": 26300
      },
      {
        "x": 25730,
        "y": 26300
      },
      {
        "x": 25730,
        "y": 26550
      },
      {
        "x": 25250,
        "y": 26550
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_w_13",
    "name": "Kamienica ul. Stolarska 13",
    "address": "ul. Stolarska 13",
    "polygon": [
      {
        "x": 25250,
        "y": 26570
      },
      {
        "x": 25730,
        "y": 26570
      },
      {
        "x": 25730,
        "y": 26820
      },
      {
        "x": 25250,
        "y": 26820
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_w_13",
        "x": 25730,
        "y": 26695,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_w_13",
        "name": "ul. Stolarska 13 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 25262,
            "y": 26582
          },
          {
            "x": 25718,
            "y": 26582
          },
          {
            "x": 25718,
            "y": 26808
          },
          {
            "x": 25262,
            "y": 26808
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25490,
            "y": 26695,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25722,
        "y": 26625
      },
      {
        "x": 25722,
        "y": 26765
      }
    ]
  },
  {
    "id": "kam_stol_w_15",
    "name": "Kamienica ul. Stolarska 15",
    "address": "ul. Stolarska 15",
    "polygon": [
      {
        "x": 25250,
        "y": 26840
      },
      {
        "x": 25730,
        "y": 26840
      },
      {
        "x": 25730,
        "y": 27090
      },
      {
        "x": 25250,
        "y": 27090
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_w_17",
    "name": "Kamienica ul. Stolarska 17",
    "address": "ul. Stolarska 17",
    "polygon": [
      {
        "x": 25250,
        "y": 27110
      },
      {
        "x": 25730,
        "y": 27110
      },
      {
        "x": 25730,
        "y": 27360
      },
      {
        "x": 25250,
        "y": 27360
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_w_17",
        "x": 25730,
        "y": 27235,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_w_17",
        "name": "ul. Stolarska 17 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 25262,
            "y": 27122
          },
          {
            "x": 25718,
            "y": 27122
          },
          {
            "x": 25718,
            "y": 27348
          },
          {
            "x": 25262,
            "y": 27348
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25490,
            "y": 27235,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25722,
        "y": 27165
      },
      {
        "x": 25722,
        "y": 27305
      }
    ]
  },
  {
    "id": "kam_stol_e_2",
    "name": "Kamienica ul. Stolarska 2",
    "address": "ul. Stolarska 2",
    "polygon": [
      {
        "x": 25880,
        "y": 24950
      },
      {
        "x": 26360,
        "y": 24950
      },
      {
        "x": 26360,
        "y": 25200
      },
      {
        "x": 25880,
        "y": 25200
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_e_2",
        "x": 25880,
        "y": 25075,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_e_2",
        "name": "ul. Stolarska 2 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 25892,
            "y": 24962
          },
          {
            "x": 26348,
            "y": 24962
          },
          {
            "x": 26348,
            "y": 25188
          },
          {
            "x": 25892,
            "y": 25188
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26120,
            "y": 25075,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25888,
        "y": 25005
      },
      {
        "x": 25888,
        "y": 25145
      }
    ]
  },
  {
    "id": "kam_stol_e_4",
    "name": "Kamienica ul. Stolarska 4",
    "address": "ul. Stolarska 4",
    "polygon": [
      {
        "x": 25880,
        "y": 25220
      },
      {
        "x": 26360,
        "y": 25220
      },
      {
        "x": 26360,
        "y": 25470
      },
      {
        "x": 25880,
        "y": 25470
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_e_6",
    "name": "Kamienica ul. Stolarska 6",
    "address": "ul. Stolarska 6",
    "polygon": [
      {
        "x": 25880,
        "y": 25490
      },
      {
        "x": 26360,
        "y": 25490
      },
      {
        "x": 26360,
        "y": 25740
      },
      {
        "x": 25880,
        "y": 25740
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_e_6",
        "x": 25880,
        "y": 25615,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_e_6",
        "name": "ul. Stolarska 6 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 25892,
            "y": 25502
          },
          {
            "x": 26348,
            "y": 25502
          },
          {
            "x": 26348,
            "y": 25728
          },
          {
            "x": 25892,
            "y": 25728
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26120,
            "y": 25615,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25888,
        "y": 25545
      },
      {
        "x": 25888,
        "y": 25685
      }
    ]
  },
  {
    "id": "kam_stol_e_8",
    "name": "Kamienica ul. Stolarska 8",
    "address": "ul. Stolarska 8",
    "polygon": [
      {
        "x": 25880,
        "y": 25760
      },
      {
        "x": 26360,
        "y": 25760
      },
      {
        "x": 26360,
        "y": 26010
      },
      {
        "x": 25880,
        "y": 26010
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_e_10",
    "name": "Kamienica ul. Stolarska 10",
    "address": "ul. Stolarska 10",
    "polygon": [
      {
        "x": 25880,
        "y": 26030
      },
      {
        "x": 26360,
        "y": 26030
      },
      {
        "x": 26360,
        "y": 26280
      },
      {
        "x": 25880,
        "y": 26280
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_e_10",
        "x": 25880,
        "y": 26155,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_e_10",
        "name": "ul. Stolarska 10 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 25892,
            "y": 26042
          },
          {
            "x": 26348,
            "y": 26042
          },
          {
            "x": 26348,
            "y": 26268
          },
          {
            "x": 25892,
            "y": 26268
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26120,
            "y": 26155,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25888,
        "y": 26085
      },
      {
        "x": 25888,
        "y": 26225
      }
    ]
  },
  {
    "id": "kam_stol_e_12",
    "name": "Kamienica ul. Stolarska 12",
    "address": "ul. Stolarska 12",
    "polygon": [
      {
        "x": 25880,
        "y": 26300
      },
      {
        "x": 26360,
        "y": 26300
      },
      {
        "x": 26360,
        "y": 26550
      },
      {
        "x": 25880,
        "y": 26550
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_e_14",
    "name": "Kamienica ul. Stolarska 14",
    "address": "ul. Stolarska 14",
    "polygon": [
      {
        "x": 25880,
        "y": 26570
      },
      {
        "x": 26360,
        "y": 26570
      },
      {
        "x": 26360,
        "y": 26820
      },
      {
        "x": 25880,
        "y": 26820
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_e_14",
        "x": 25880,
        "y": 26695,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_e_14",
        "name": "ul. Stolarska 14 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 25892,
            "y": 26582
          },
          {
            "x": 26348,
            "y": 26582
          },
          {
            "x": 26348,
            "y": 26808
          },
          {
            "x": 25892,
            "y": 26808
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26120,
            "y": 26695,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25888,
        "y": 26625
      },
      {
        "x": 25888,
        "y": 26765
      }
    ]
  },
  {
    "id": "kam_stol_e_16",
    "name": "Kamienica ul. Stolarska 16",
    "address": "ul. Stolarska 16",
    "polygon": [
      {
        "x": 25880,
        "y": 26840
      },
      {
        "x": 26360,
        "y": 26840
      },
      {
        "x": 26360,
        "y": 27090
      },
      {
        "x": 25880,
        "y": 27090
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_stol_e_18",
    "name": "Kamienica ul. Stolarska 18",
    "address": "ul. Stolarska 18",
    "polygon": [
      {
        "x": 25880,
        "y": 27110
      },
      {
        "x": 26360,
        "y": 27110
      },
      {
        "x": 26360,
        "y": 27360
      },
      {
        "x": 25880,
        "y": 27360
      }
    ],
    "doors": [
      {
        "id": "d_kam_stol_e_18",
        "x": 25880,
        "y": 27235,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_stol_e_18",
        "name": "ul. Stolarska 18 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 25892,
            "y": 27122
          },
          {
            "x": 26348,
            "y": 27122
          },
          {
            "x": 26348,
            "y": 27348
          },
          {
            "x": 25892,
            "y": 27348
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 26120,
            "y": 27235,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 25888,
        "y": 27165
      },
      {
        "x": 25888,
        "y": 27305
      }
    ]
  },
  {
    "id": "kam_wisl_w_1",
    "name": "Kamienica ul. Wiślna 1",
    "address": "ul. Wiślna 1",
    "polygon": [
      {
        "x": 22620,
        "y": 26320
      },
      {
        "x": 23100,
        "y": 26320
      },
      {
        "x": 23100,
        "y": 26580
      },
      {
        "x": 22620,
        "y": 26580
      }
    ],
    "doors": [
      {
        "id": "d_kam_wisl_w_1",
        "x": 23100,
        "y": 26450,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_wisl_w_1",
        "name": "ul. Wiślna 1 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22632,
            "y": 26332
          },
          {
            "x": 23088,
            "y": 26332
          },
          {
            "x": 23088,
            "y": 26568
          },
          {
            "x": 22632,
            "y": 26568
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 26450,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23092,
        "y": 26377
      },
      {
        "x": 23092,
        "y": 26523
      }
    ]
  },
  {
    "id": "kam_wisl_w_3",
    "name": "Kamienica ul. Wiślna 3",
    "address": "ul. Wiślna 3",
    "polygon": [
      {
        "x": 22620,
        "y": 26600
      },
      {
        "x": 23100,
        "y": 26600
      },
      {
        "x": 23100,
        "y": 26860
      },
      {
        "x": 22620,
        "y": 26860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_wisl_w_5",
    "name": "Kamienica ul. Wiślna 5",
    "address": "ul. Wiślna 5",
    "polygon": [
      {
        "x": 22620,
        "y": 26880
      },
      {
        "x": 23100,
        "y": 26880
      },
      {
        "x": 23100,
        "y": 27140
      },
      {
        "x": 22620,
        "y": 27140
      }
    ],
    "doors": [
      {
        "id": "d_kam_wisl_w_5",
        "x": 23100,
        "y": 27010,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_wisl_w_5",
        "name": "ul. Wiślna 5 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 22632,
            "y": 26892
          },
          {
            "x": 23088,
            "y": 26892
          },
          {
            "x": 23088,
            "y": 27128
          },
          {
            "x": 22632,
            "y": 27128
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22860,
            "y": 27010,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23092,
        "y": 26937
      },
      {
        "x": 23092,
        "y": 27083
      }
    ]
  },
  {
    "id": "kam_wisl_w_7",
    "name": "Kamienica ul. Wiślna 7",
    "address": "ul. Wiślna 7",
    "polygon": [
      {
        "x": 22620,
        "y": 27160
      },
      {
        "x": 23100,
        "y": 27160
      },
      {
        "x": 23100,
        "y": 27420
      },
      {
        "x": 22620,
        "y": 27420
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_wisl_e_2",
    "name": "Kamienica ul. Wiślna 2",
    "address": "ul. Wiślna 2",
    "polygon": [
      {
        "x": 23260,
        "y": 26320
      },
      {
        "x": 23760,
        "y": 26320
      },
      {
        "x": 23760,
        "y": 26580
      },
      {
        "x": 23260,
        "y": 26580
      }
    ],
    "doors": [
      {
        "id": "d_kam_wisl_e_2",
        "x": 23260,
        "y": 26450,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_wisl_e_2",
        "name": "ul. Wiślna 2 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23272,
            "y": 26332
          },
          {
            "x": 23748,
            "y": 26332
          },
          {
            "x": 23748,
            "y": 26568
          },
          {
            "x": 23272,
            "y": 26568
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23510,
            "y": 26450,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23268,
        "y": 26377
      },
      {
        "x": 23268,
        "y": 26523
      }
    ]
  },
  {
    "id": "kam_wisl_e_4",
    "name": "Kamienica ul. Wiślna 4",
    "address": "ul. Wiślna 4",
    "polygon": [
      {
        "x": 23260,
        "y": 26600
      },
      {
        "x": 23760,
        "y": 26600
      },
      {
        "x": 23760,
        "y": 26860
      },
      {
        "x": 23260,
        "y": 26860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_wisl_e_6",
    "name": "Kamienica ul. Wiślna 6",
    "address": "ul. Wiślna 6",
    "polygon": [
      {
        "x": 23260,
        "y": 26880
      },
      {
        "x": 23760,
        "y": 26880
      },
      {
        "x": 23760,
        "y": 27140
      },
      {
        "x": 23260,
        "y": 27140
      }
    ],
    "doors": [
      {
        "id": "d_kam_wisl_e_6",
        "x": 23260,
        "y": 27010,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_wisl_e_6",
        "name": "ul. Wiślna 6 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23272,
            "y": 26892
          },
          {
            "x": 23748,
            "y": 26892
          },
          {
            "x": 23748,
            "y": 27128
          },
          {
            "x": 23272,
            "y": 27128
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23510,
            "y": 27010,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23268,
        "y": 26937
      },
      {
        "x": 23268,
        "y": 27083
      }
    ]
  },
  {
    "id": "kam_wisl_e_8",
    "name": "Kamienica ul. Wiślna 8",
    "address": "ul. Wiślna 8",
    "polygon": [
      {
        "x": 23260,
        "y": 27160
      },
      {
        "x": 23760,
        "y": 27160
      },
      {
        "x": 23760,
        "y": 27420
      },
      {
        "x": 23260,
        "y": 27420
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_brac_w_1",
    "name": "Kamienica ul. Bracka 1",
    "address": "ul. Bracka 1",
    "polygon": [
      {
        "x": 23350,
        "y": 26320
      },
      {
        "x": 23850,
        "y": 26320
      },
      {
        "x": 23850,
        "y": 26580
      },
      {
        "x": 23350,
        "y": 26580
      }
    ],
    "doors": [
      {
        "id": "d_kam_brac_w_1",
        "x": 23850,
        "y": 26450,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_brac_w_1",
        "name": "ul. Bracka 1 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23362,
            "y": 26332
          },
          {
            "x": 23838,
            "y": 26332
          },
          {
            "x": 23838,
            "y": 26568
          },
          {
            "x": 23362,
            "y": 26568
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23600,
            "y": 26450,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23842,
        "y": 26377
      },
      {
        "x": 23842,
        "y": 26523
      }
    ]
  },
  {
    "id": "kam_brac_w_3",
    "name": "Kamienica ul. Bracka 3",
    "address": "ul. Bracka 3",
    "polygon": [
      {
        "x": 23350,
        "y": 26600
      },
      {
        "x": 23850,
        "y": 26600
      },
      {
        "x": 23850,
        "y": 26860
      },
      {
        "x": 23350,
        "y": 26860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_brac_w_5",
    "name": "Kamienica ul. Bracka 5",
    "address": "ul. Bracka 5",
    "polygon": [
      {
        "x": 23350,
        "y": 26880
      },
      {
        "x": 23850,
        "y": 26880
      },
      {
        "x": 23850,
        "y": 27140
      },
      {
        "x": 23350,
        "y": 27140
      }
    ],
    "doors": [
      {
        "id": "d_kam_brac_w_5",
        "x": 23850,
        "y": 27010,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_brac_w_5",
        "name": "ul. Bracka 5 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23362,
            "y": 26892
          },
          {
            "x": 23838,
            "y": 26892
          },
          {
            "x": 23838,
            "y": 27128
          },
          {
            "x": 23362,
            "y": 27128
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23600,
            "y": 27010,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23842,
        "y": 26937
      },
      {
        "x": 23842,
        "y": 27083
      }
    ]
  },
  {
    "id": "kam_brac_w_7",
    "name": "Kamienica ul. Bracka 7",
    "address": "ul. Bracka 7",
    "polygon": [
      {
        "x": 23350,
        "y": 27160
      },
      {
        "x": 23850,
        "y": 27160
      },
      {
        "x": 23850,
        "y": 27420
      },
      {
        "x": 23350,
        "y": 27420
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_brac_e_2",
    "name": "Kamienica ul. Bracka 2",
    "address": "ul. Bracka 2",
    "polygon": [
      {
        "x": 24080,
        "y": 26320
      },
      {
        "x": 24580,
        "y": 26320
      },
      {
        "x": 24580,
        "y": 26580
      },
      {
        "x": 24080,
        "y": 26580
      }
    ],
    "doors": [
      {
        "id": "d_kam_brac_e_2",
        "x": 24080,
        "y": 26450,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_brac_e_2",
        "name": "ul. Bracka 2 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24092,
            "y": 26332
          },
          {
            "x": 24568,
            "y": 26332
          },
          {
            "x": 24568,
            "y": 26568
          },
          {
            "x": 24092,
            "y": 26568
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24330,
            "y": 26450,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24088,
        "y": 26377
      },
      {
        "x": 24088,
        "y": 26523
      }
    ]
  },
  {
    "id": "kam_brac_e_4",
    "name": "Kamienica ul. Bracka 4",
    "address": "ul. Bracka 4",
    "polygon": [
      {
        "x": 24080,
        "y": 26600
      },
      {
        "x": 24580,
        "y": 26600
      },
      {
        "x": 24580,
        "y": 26860
      },
      {
        "x": 24080,
        "y": 26860
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_brac_e_6",
    "name": "Kamienica ul. Bracka 6",
    "address": "ul. Bracka 6",
    "polygon": [
      {
        "x": 24080,
        "y": 26880
      },
      {
        "x": 24580,
        "y": 26880
      },
      {
        "x": 24580,
        "y": 27140
      },
      {
        "x": 24080,
        "y": 27140
      }
    ],
    "doors": [
      {
        "id": "d_kam_brac_e_6",
        "x": 24080,
        "y": 27010,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_brac_e_6",
        "name": "ul. Bracka 6 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24092,
            "y": 26892
          },
          {
            "x": 24568,
            "y": 26892
          },
          {
            "x": 24568,
            "y": 27128
          },
          {
            "x": 24092,
            "y": 27128
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24330,
            "y": 27010,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24088,
        "y": 26937
      },
      {
        "x": 24088,
        "y": 27083
      }
    ]
  },
  {
    "id": "kam_brac_e_8",
    "name": "Kamienica ul. Bracka 8",
    "address": "ul. Bracka 8",
    "polygon": [
      {
        "x": 24080,
        "y": 27160
      },
      {
        "x": 24580,
        "y": 27160
      },
      {
        "x": 24580,
        "y": 27420
      },
      {
        "x": 24080,
        "y": 27420
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "palac_biskupi",
    "name": "Pałac Biskupi i Kuria Metropolitalna",
    "address": "ul. Franciszkańska 3",
    "polygon": [
      {
        "x": 22500,
        "y": 26750
      },
      {
        "x": 23200,
        "y": 26750
      },
      {
        "x": 23200,
        "y": 27500
      },
      {
        "x": 22500,
        "y": 27500
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "bisk_d",
        "x": 22850,
        "y": 27500,
        "width": 85,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 22700,
        "y": 27490
      }
    ],
    "interiorRooms": [
      {
        "id": "bisk_dziedz",
        "name": "Dziedziniec Kurii i Słynne Okno Papieskie",
        "polygon": [
          {
            "x": 22550,
            "y": 26800
          },
          {
            "x": 23150,
            "y": 26800
          },
          {
            "x": 23150,
            "y": 27450
          },
          {
            "x": 22550,
            "y": 27450
          }
        ]
      }
    ]
  },
  {
    "id": "bazylika_franciszkanow",
    "name": "Bazylika św. Franciszka z Asyżu",
    "address": "Plac Wszystkich Świętych 5",
    "polygon": [
      {
        "x": 23250,
        "y": 26750
      },
      {
        "x": 23930,
        "y": 26750
      },
      {
        "x": 23930,
        "y": 27500
      },
      {
        "x": 23250,
        "y": 27500
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "doors": [],
    "windows": [],
    "interiorRooms": []
  },
  {
    "id": "bazylika_dominikanow",
    "name": "Bazylika Świętej Trójcy i Klasztor Dominikanów",
    "address": "ul. Stolarska 12",
    "polygon": [
      {
        "x": 25950,
        "y": 26750
      },
      {
        "x": 26900,
        "y": 26750
      },
      {
        "x": 26900,
        "y": 27500
      },
      {
        "x": 25950,
        "y": 27500
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "dom_d",
        "x": 25950,
        "y": 27125,
        "width": 85,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 26400,
        "y": 26760
      }
    ],
    "interiorRooms": [
      {
        "id": "dom_nawa",
        "name": "Gotycka Bazylika Dominikanów i Krużganki",
        "polygon": [
          {
            "x": 26000,
            "y": 26800
          },
          {
            "x": 26850,
            "y": 26800
          },
          {
            "x": 26850,
            "y": 27450
          },
          {
            "x": 26000,
            "y": 27450
          }
        ]
      }
    ]
  },
  {
    "id": "palac_wielopolskich",
    "name": "Pałac Wielopolskich (Magistrat)",
    "address": "Plac Wszystkich Świętych 3/4",
    "polygon": [
      {
        "x": 24100,
        "y": 27750
      },
      {
        "x": 24720,
        "y": 27750
      },
      {
        "x": 24720,
        "y": 28450
      },
      {
        "x": 24100,
        "y": 28450
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": true,
    "doors": [
      {
        "id": "mag_d",
        "x": 24410,
        "y": 27750,
        "width": 85,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 24250,
        "y": 27760
      },
      {
        "x": 24570,
        "y": 27760
      }
    ],
    "interiorRooms": [
      {
        "id": "mag_sala",
        "name": "Sala Obrad Rady Miasta Krakowa",
        "polygon": [
          {
            "x": 24150,
            "y": 27800
          },
          {
            "x": 24670,
            "y": 27800
          },
          {
            "x": 24670,
            "y": 28400
          },
          {
            "x": 24150,
            "y": 28400
          }
        ]
      }
    ]
  },
  {
    "id": "kam_grodz_w1_2",
    "name": "Kamienica ul. Grodzka 2",
    "address": "ul. Grodzka 2",
    "polygon": [
      {
        "x": 24100,
        "y": 27750
      },
      {
        "x": 24720,
        "y": 27750
      },
      {
        "x": 24720,
        "y": 27930
      },
      {
        "x": 24100,
        "y": 27930
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w1_2",
        "x": 24720,
        "y": 27840,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w1_2",
        "name": "ul. Grodzka 2 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24112,
            "y": 27762
          },
          {
            "x": 24708,
            "y": 27762
          },
          {
            "x": 24708,
            "y": 27918
          },
          {
            "x": 24112,
            "y": 27918
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 27840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 27790
      },
      {
        "x": 24712,
        "y": 27890
      }
    ]
  },
  {
    "id": "kam_grodz_w1_4",
    "name": "Kamienica ul. Grodzka 4",
    "address": "ul. Grodzka 4",
    "polygon": [
      {
        "x": 24100,
        "y": 27945
      },
      {
        "x": 24720,
        "y": 27945
      },
      {
        "x": 24720,
        "y": 28125
      },
      {
        "x": 24100,
        "y": 28125
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_w1_6",
    "name": "Kamienica ul. Grodzka 6",
    "address": "ul. Grodzka 6",
    "polygon": [
      {
        "x": 24100,
        "y": 28140
      },
      {
        "x": 24720,
        "y": 28140
      },
      {
        "x": 24720,
        "y": 28320
      },
      {
        "x": 24100,
        "y": 28320
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w1_6",
        "x": 24720,
        "y": 28230,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w1_6",
        "name": "ul. Grodzka 6 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24112,
            "y": 28152
          },
          {
            "x": 24708,
            "y": 28152
          },
          {
            "x": 24708,
            "y": 28308
          },
          {
            "x": 24112,
            "y": 28308
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 28230,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 28180
      },
      {
        "x": 24712,
        "y": 28280
      }
    ]
  },
  {
    "id": "kam_grodz_w1_8",
    "name": "Kamienica ul. Grodzka 8",
    "address": "ul. Grodzka 8",
    "polygon": [
      {
        "x": 24100,
        "y": 28335
      },
      {
        "x": 24720,
        "y": 28335
      },
      {
        "x": 24720,
        "y": 28515
      },
      {
        "x": 24100,
        "y": 28515
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_e1_1",
    "name": "Kamienica ul. Grodzka 1",
    "address": "ul. Grodzka 1",
    "polygon": [
      {
        "x": 24900,
        "y": 27750
      },
      {
        "x": 25520,
        "y": 27750
      },
      {
        "x": 25520,
        "y": 27930
      },
      {
        "x": 24900,
        "y": 27930
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_e1_3",
    "name": "Kamienica ul. Grodzka 3",
    "address": "ul. Grodzka 3",
    "polygon": [
      {
        "x": 24900,
        "y": 27945
      },
      {
        "x": 25520,
        "y": 27945
      },
      {
        "x": 25520,
        "y": 28125
      },
      {
        "x": 24900,
        "y": 28125
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_e1_3",
        "x": 24900,
        "y": 28035,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_e1_3",
        "name": "ul. Grodzka 3 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24912,
            "y": 27957
          },
          {
            "x": 25508,
            "y": 27957
          },
          {
            "x": 25508,
            "y": 28113
          },
          {
            "x": 24912,
            "y": 28113
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25210,
            "y": 28035,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24908,
        "y": 27985
      },
      {
        "x": 24908,
        "y": 28085
      }
    ]
  },
  {
    "id": "kam_grodz_e1_5",
    "name": "Kamienica ul. Grodzka 5",
    "address": "ul. Grodzka 5",
    "polygon": [
      {
        "x": 24900,
        "y": 28140
      },
      {
        "x": 25520,
        "y": 28140
      },
      {
        "x": 25520,
        "y": 28320
      },
      {
        "x": 24900,
        "y": 28320
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_e1_7",
    "name": "Kamienica ul. Grodzka 7",
    "address": "ul. Grodzka 7",
    "polygon": [
      {
        "x": 24900,
        "y": 28335
      },
      {
        "x": 25520,
        "y": 28335
      },
      {
        "x": 25520,
        "y": 28515
      },
      {
        "x": 24900,
        "y": 28515
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_e1_7",
        "x": 24900,
        "y": 28425,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_e1_7",
        "name": "ul. Grodzka 7 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24912,
            "y": 28347
          },
          {
            "x": 25508,
            "y": 28347
          },
          {
            "x": 25508,
            "y": 28503
          },
          {
            "x": 24912,
            "y": 28503
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25210,
            "y": 28425,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24908,
        "y": 28375
      },
      {
        "x": 24908,
        "y": 28475
      }
    ]
  },
  {
    "id": "kam_grodz_w2_10",
    "name": "Kamienica ul. Grodzka 10",
    "address": "ul. Grodzka 10",
    "polygon": [
      {
        "x": 24100,
        "y": 28700
      },
      {
        "x": 24720,
        "y": 28700
      },
      {
        "x": 24720,
        "y": 28895
      },
      {
        "x": 24100,
        "y": 28895
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w2_10",
        "x": 24720,
        "y": 28798,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w2_10",
        "name": "ul. Grodzka 10 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24112,
            "y": 28712
          },
          {
            "x": 24708,
            "y": 28712
          },
          {
            "x": 24708,
            "y": 28883
          },
          {
            "x": 24112,
            "y": 28883
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 28798,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 28743
      },
      {
        "x": 24712,
        "y": 28852
      }
    ]
  },
  {
    "id": "kam_grodz_w2_12",
    "name": "Kamienica ul. Grodzka 12",
    "address": "ul. Grodzka 12",
    "polygon": [
      {
        "x": 24100,
        "y": 28910
      },
      {
        "x": 24720,
        "y": 28910
      },
      {
        "x": 24720,
        "y": 29105
      },
      {
        "x": 24100,
        "y": 29105
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_w2_14",
    "name": "Kamienica ul. Grodzka 14",
    "address": "ul. Grodzka 14",
    "polygon": [
      {
        "x": 24100,
        "y": 29120
      },
      {
        "x": 24720,
        "y": 29120
      },
      {
        "x": 24720,
        "y": 29315
      },
      {
        "x": 24100,
        "y": 29315
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w2_14",
        "x": 24720,
        "y": 29218,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w2_14",
        "name": "ul. Grodzka 14 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24112,
            "y": 29132
          },
          {
            "x": 24708,
            "y": 29132
          },
          {
            "x": 24708,
            "y": 29303
          },
          {
            "x": 24112,
            "y": 29303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 29218,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 29163
      },
      {
        "x": 24712,
        "y": 29272
      }
    ]
  },
  {
    "id": "kam_grodz_e2_9",
    "name": "Kamienica ul. Grodzka 9",
    "address": "ul. Grodzka 9",
    "polygon": [
      {
        "x": 24900,
        "y": 28700
      },
      {
        "x": 25520,
        "y": 28700
      },
      {
        "x": 25520,
        "y": 28895
      },
      {
        "x": 24900,
        "y": 28895
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_e2_11",
    "name": "Kamienica ul. Grodzka 11",
    "address": "ul. Grodzka 11",
    "polygon": [
      {
        "x": 24900,
        "y": 28910
      },
      {
        "x": 25520,
        "y": 28910
      },
      {
        "x": 25520,
        "y": 29105
      },
      {
        "x": 24900,
        "y": 29105
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_e2_11",
        "x": 24900,
        "y": 29008,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_e2_11",
        "name": "ul. Grodzka 11 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24912,
            "y": 28922
          },
          {
            "x": 25508,
            "y": 28922
          },
          {
            "x": 25508,
            "y": 29093
          },
          {
            "x": 24912,
            "y": 29093
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25210,
            "y": 29008,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24908,
        "y": 28953
      },
      {
        "x": 24908,
        "y": 29062
      }
    ]
  },
  {
    "id": "kam_grodz_e2_13",
    "name": "Kamienica ul. Grodzka 13",
    "address": "ul. Grodzka 13",
    "polygon": [
      {
        "x": 24900,
        "y": 29120
      },
      {
        "x": 25520,
        "y": 29120
      },
      {
        "x": 25520,
        "y": 29315
      },
      {
        "x": 24900,
        "y": 29315
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kosciol_piotra_pawla",
    "name": "Kościół św. Piotra i Pawła",
    "address": "ul. Grodzka 52A",
    "polygon": [
      {
        "x": 25000,
        "y": 29400
      },
      {
        "x": 25750,
        "y": 29400
      },
      {
        "x": 25750,
        "y": 30250
      },
      {
        "x": 25000,
        "y": 30250
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "pp_d",
        "x": 25000,
        "y": 29825,
        "width": 85,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 25375,
        "y": 29410
      }
    ],
    "interiorRooms": [
      {
        "id": "pp_nawa",
        "name": "Barokowa Nawa i Krypta ks. Piotra Skargi",
        "polygon": [
          {
            "x": 25050,
            "y": 29450
          },
          {
            "x": 25700,
            "y": 29450
          },
          {
            "x": 25700,
            "y": 30200
          },
          {
            "x": 25050,
            "y": 30200
          }
        ]
      }
    ]
  },
  {
    "id": "kosciol_andrzeja",
    "name": "Kościół św. Andrzeja (Romański XI w.)",
    "address": "ul. Grodzka 54",
    "polygon": [
      {
        "x": 25000,
        "y": 30300
      },
      {
        "x": 25700,
        "y": 30300
      },
      {
        "x": 25700,
        "y": 31000
      },
      {
        "x": 25000,
        "y": 31000
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "doors": [],
    "windows": [],
    "interiorRooms": []
  },
  {
    "id": "kam_grodz_w3_16",
    "name": "Kamienica ul. Grodzka 16",
    "address": "ul. Grodzka 16",
    "polygon": [
      {
        "x": 24100,
        "y": 29600
      },
      {
        "x": 24720,
        "y": 29600
      },
      {
        "x": 24720,
        "y": 29805
      },
      {
        "x": 24100,
        "y": 29805
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w3_16",
        "x": 24720,
        "y": 29703,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w3_16",
        "name": "ul. Grodzka 16 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24112,
            "y": 29612
          },
          {
            "x": 24708,
            "y": 29612
          },
          {
            "x": 24708,
            "y": 29793
          },
          {
            "x": 24112,
            "y": 29793
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 29703,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 29645
      },
      {
        "x": 24712,
        "y": 29760
      }
    ]
  },
  {
    "id": "kam_grodz_w3_18",
    "name": "Kamienica ul. Grodzka 18",
    "address": "ul. Grodzka 18",
    "polygon": [
      {
        "x": 24100,
        "y": 29820
      },
      {
        "x": 24720,
        "y": 29820
      },
      {
        "x": 24720,
        "y": 30025
      },
      {
        "x": 24100,
        "y": 30025
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_w3_20",
    "name": "Kamienica ul. Grodzka 20",
    "address": "ul. Grodzka 20",
    "polygon": [
      {
        "x": 24100,
        "y": 30040
      },
      {
        "x": 24720,
        "y": 30040
      },
      {
        "x": 24720,
        "y": 30245
      },
      {
        "x": 24100,
        "y": 30245
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w3_20",
        "x": 24720,
        "y": 30143,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w3_20",
        "name": "ul. Grodzka 20 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24112,
            "y": 30052
          },
          {
            "x": 24708,
            "y": 30052
          },
          {
            "x": 24708,
            "y": 30233
          },
          {
            "x": 24112,
            "y": 30233
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 30143,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 30085
      },
      {
        "x": 24712,
        "y": 30200
      }
    ]
  },
  {
    "id": "kam_grodz_w3_22",
    "name": "Kamienica ul. Grodzka 22",
    "address": "ul. Grodzka 22",
    "polygon": [
      {
        "x": 24100,
        "y": 30260
      },
      {
        "x": 24720,
        "y": 30260
      },
      {
        "x": 24720,
        "y": 30465
      },
      {
        "x": 24100,
        "y": 30465
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_w3_24",
    "name": "Kamienica ul. Grodzka 24",
    "address": "ul. Grodzka 24",
    "polygon": [
      {
        "x": 24100,
        "y": 30480
      },
      {
        "x": 24720,
        "y": 30480
      },
      {
        "x": 24720,
        "y": 30685
      },
      {
        "x": 24100,
        "y": 30685
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w3_24",
        "x": 24720,
        "y": 30583,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w3_24",
        "name": "ul. Grodzka 24 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24112,
            "y": 30492
          },
          {
            "x": 24708,
            "y": 30492
          },
          {
            "x": 24708,
            "y": 30673
          },
          {
            "x": 24112,
            "y": 30673
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 30583,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 30525
      },
      {
        "x": 24712,
        "y": 30640
      }
    ]
  },
  {
    "id": "kam_grodz_w3_26",
    "name": "Kamienica ul. Grodzka 26",
    "address": "ul. Grodzka 26",
    "polygon": [
      {
        "x": 24100,
        "y": 30700
      },
      {
        "x": 24720,
        "y": 30700
      },
      {
        "x": 24720,
        "y": 30905
      },
      {
        "x": 24100,
        "y": 30905
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_w3_28",
    "name": "Kamienica ul. Grodzka 28",
    "address": "ul. Grodzka 28",
    "polygon": [
      {
        "x": 24100,
        "y": 30920
      },
      {
        "x": 24720,
        "y": 30920
      },
      {
        "x": 24720,
        "y": 31125
      },
      {
        "x": 24100,
        "y": 31125
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w3_28",
        "x": 24720,
        "y": 31023,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w3_28",
        "name": "ul. Grodzka 28 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24112,
            "y": 30932
          },
          {
            "x": 24708,
            "y": 30932
          },
          {
            "x": 24708,
            "y": 31113
          },
          {
            "x": 24112,
            "y": 31113
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 31023,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 30965
      },
      {
        "x": 24712,
        "y": 31080
      }
    ]
  },
  {
    "id": "kam_grodz_w3_30",
    "name": "Kamienica ul. Grodzka 30",
    "address": "ul. Grodzka 30",
    "polygon": [
      {
        "x": 24100,
        "y": 31140
      },
      {
        "x": 24720,
        "y": 31140
      },
      {
        "x": 24720,
        "y": 31345
      },
      {
        "x": 24100,
        "y": 31345
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_w3_32",
    "name": "Kamienica ul. Grodzka 32",
    "address": "ul. Grodzka 32",
    "polygon": [
      {
        "x": 24100,
        "y": 31360
      },
      {
        "x": 24720,
        "y": 31360
      },
      {
        "x": 24720,
        "y": 31565
      },
      {
        "x": 24100,
        "y": 31565
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_w3_32",
        "x": 24720,
        "y": 31463,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_w3_32",
        "name": "ul. Grodzka 32 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24112,
            "y": 31372
          },
          {
            "x": 24708,
            "y": 31372
          },
          {
            "x": 24708,
            "y": 31553
          },
          {
            "x": 24112,
            "y": 31553
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24410,
            "y": 31463,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24712,
        "y": 31405
      },
      {
        "x": 24712,
        "y": 31520
      }
    ]
  },
  {
    "id": "kam_grodz_e3_17",
    "name": "Kamienica ul. Grodzka 17",
    "address": "ul. Grodzka 17",
    "polygon": [
      {
        "x": 24900,
        "y": 31050
      },
      {
        "x": 25520,
        "y": 31050
      },
      {
        "x": 25520,
        "y": 31255
      },
      {
        "x": 24900,
        "y": 31255
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_grodz_e3_19",
    "name": "Kamienica ul. Grodzka 19",
    "address": "ul. Grodzka 19",
    "polygon": [
      {
        "x": 24900,
        "y": 31270
      },
      {
        "x": 25520,
        "y": 31270
      },
      {
        "x": 25520,
        "y": 31475
      },
      {
        "x": 24900,
        "y": 31475
      }
    ],
    "doors": [
      {
        "id": "d_kam_grodz_e3_19",
        "x": 24900,
        "y": 31373,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_grodz_e3_19",
        "name": "ul. Grodzka 19 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24912,
            "y": 31282
          },
          {
            "x": 25508,
            "y": 31282
          },
          {
            "x": 25508,
            "y": 31463
          },
          {
            "x": 24912,
            "y": 31463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25210,
            "y": 31373,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24908,
        "y": 31315
      },
      {
        "x": 24908,
        "y": 31430
      }
    ]
  },
  {
    "id": "kam_grodz_e3_21",
    "name": "Kamienica ul. Grodzka 21",
    "address": "ul. Grodzka 21",
    "polygon": [
      {
        "x": 24900,
        "y": 31490
      },
      {
        "x": 25520,
        "y": 31490
      },
      {
        "x": 25520,
        "y": 31695
      },
      {
        "x": 24900,
        "y": 31695
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_w_2",
    "name": "Kamienica ul. Kanonicza 2",
    "address": "ul. Kanonicza 2",
    "polygon": [
      {
        "x": 23620,
        "y": 28800
      },
      {
        "x": 24140,
        "y": 28800
      },
      {
        "x": 24140,
        "y": 29015
      },
      {
        "x": 23620,
        "y": 29015
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_w_2",
        "x": 24140,
        "y": 28908,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_w_2",
        "name": "ul. Kanonicza 2 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23632,
            "y": 28812
          },
          {
            "x": 24128,
            "y": 28812
          },
          {
            "x": 24128,
            "y": 29003
          },
          {
            "x": 23632,
            "y": 29003
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23880,
            "y": 28908,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24132,
        "y": 28847
      },
      {
        "x": 24132,
        "y": 28968
      }
    ]
  },
  {
    "id": "kam_kanon_w_4",
    "name": "Kamienica ul. Kanonicza 4",
    "address": "ul. Kanonicza 4",
    "polygon": [
      {
        "x": 23620,
        "y": 29030
      },
      {
        "x": 24140,
        "y": 29030
      },
      {
        "x": 24140,
        "y": 29245
      },
      {
        "x": 23620,
        "y": 29245
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_w_6",
    "name": "Kamienica ul. Kanonicza 6",
    "address": "ul. Kanonicza 6",
    "polygon": [
      {
        "x": 23620,
        "y": 29260
      },
      {
        "x": 24140,
        "y": 29260
      },
      {
        "x": 24140,
        "y": 29475
      },
      {
        "x": 23620,
        "y": 29475
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_w_6",
        "x": 24140,
        "y": 29368,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_w_6",
        "name": "ul. Kanonicza 6 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 23632,
            "y": 29272
          },
          {
            "x": 24128,
            "y": 29272
          },
          {
            "x": 24128,
            "y": 29463
          },
          {
            "x": 23632,
            "y": 29463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23880,
            "y": 29368,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24132,
        "y": 29307
      },
      {
        "x": 24132,
        "y": 29428
      }
    ]
  },
  {
    "id": "kam_kanon_w_8",
    "name": "Kamienica ul. Kanonicza 8",
    "address": "ul. Kanonicza 8",
    "polygon": [
      {
        "x": 23620,
        "y": 29490
      },
      {
        "x": 24140,
        "y": 29490
      },
      {
        "x": 24140,
        "y": 29705
      },
      {
        "x": 23620,
        "y": 29705
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_w_10",
    "name": "Kamienica ul. Kanonicza 10",
    "address": "ul. Kanonicza 10",
    "polygon": [
      {
        "x": 23620,
        "y": 29720
      },
      {
        "x": 24140,
        "y": 29720
      },
      {
        "x": 24140,
        "y": 29935
      },
      {
        "x": 23620,
        "y": 29935
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_w_10",
        "x": 24140,
        "y": 29828,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_w_10",
        "name": "ul. Kanonicza 10 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23632,
            "y": 29732
          },
          {
            "x": 24128,
            "y": 29732
          },
          {
            "x": 24128,
            "y": 29923
          },
          {
            "x": 23632,
            "y": 29923
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23880,
            "y": 29828,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24132,
        "y": 29767
      },
      {
        "x": 24132,
        "y": 29888
      }
    ]
  },
  {
    "id": "kam_kanon_w_12",
    "name": "Kamienica ul. Kanonicza 12",
    "address": "ul. Kanonicza 12",
    "polygon": [
      {
        "x": 23620,
        "y": 29950
      },
      {
        "x": 24140,
        "y": 29950
      },
      {
        "x": 24140,
        "y": 30165
      },
      {
        "x": 23620,
        "y": 30165
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_w_14",
    "name": "Kamienica ul. Kanonicza 14",
    "address": "ul. Kanonicza 14",
    "polygon": [
      {
        "x": 23620,
        "y": 30180
      },
      {
        "x": 24140,
        "y": 30180
      },
      {
        "x": 24140,
        "y": 30395
      },
      {
        "x": 23620,
        "y": 30395
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_w_14",
        "x": 24140,
        "y": 30288,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_w_14",
        "name": "ul. Kanonicza 14 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23632,
            "y": 30192
          },
          {
            "x": 24128,
            "y": 30192
          },
          {
            "x": 24128,
            "y": 30383
          },
          {
            "x": 23632,
            "y": 30383
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23880,
            "y": 30288,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24132,
        "y": 30227
      },
      {
        "x": 24132,
        "y": 30348
      }
    ]
  },
  {
    "id": "kam_kanon_w_16",
    "name": "Kamienica ul. Kanonicza 16",
    "address": "ul. Kanonicza 16",
    "polygon": [
      {
        "x": 23620,
        "y": 30410
      },
      {
        "x": 24140,
        "y": 30410
      },
      {
        "x": 24140,
        "y": 30625
      },
      {
        "x": 23620,
        "y": 30625
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_w_18",
    "name": "Kamienica ul. Kanonicza 18",
    "address": "ul. Kanonicza 18",
    "polygon": [
      {
        "x": 23620,
        "y": 30640
      },
      {
        "x": 24140,
        "y": 30640
      },
      {
        "x": 24140,
        "y": 30855
      },
      {
        "x": 23620,
        "y": 30855
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_w_18",
        "x": 24140,
        "y": 30748,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_w_18",
        "name": "ul. Kanonicza 18 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23632,
            "y": 30652
          },
          {
            "x": 24128,
            "y": 30652
          },
          {
            "x": 24128,
            "y": 30843
          },
          {
            "x": 23632,
            "y": 30843
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23880,
            "y": 30748,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24132,
        "y": 30687
      },
      {
        "x": 24132,
        "y": 30808
      }
    ]
  },
  {
    "id": "kam_kanon_w_20",
    "name": "Kamienica ul. Kanonicza 20",
    "address": "ul. Kanonicza 20",
    "polygon": [
      {
        "x": 23620,
        "y": 30870
      },
      {
        "x": 24140,
        "y": 30870
      },
      {
        "x": 24140,
        "y": 31085
      },
      {
        "x": 23620,
        "y": 31085
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_w_22",
    "name": "Kamienica ul. Kanonicza 22",
    "address": "ul. Kanonicza 22",
    "polygon": [
      {
        "x": 23620,
        "y": 31100
      },
      {
        "x": 24140,
        "y": 31100
      },
      {
        "x": 24140,
        "y": 31315
      },
      {
        "x": 23620,
        "y": 31315
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_w_22",
        "x": 24140,
        "y": 31208,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_w_22",
        "name": "ul. Kanonicza 22 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 23632,
            "y": 31112
          },
          {
            "x": 24128,
            "y": 31112
          },
          {
            "x": 24128,
            "y": 31303
          },
          {
            "x": 23632,
            "y": 31303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23880,
            "y": 31208,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24132,
        "y": 31147
      },
      {
        "x": 24132,
        "y": 31268
      }
    ]
  },
  {
    "id": "kam_kanon_w_24",
    "name": "Kamienica ul. Kanonicza 24",
    "address": "ul. Kanonicza 24",
    "polygon": [
      {
        "x": 23620,
        "y": 31330
      },
      {
        "x": 24140,
        "y": 31330
      },
      {
        "x": 24140,
        "y": 31545
      },
      {
        "x": 23620,
        "y": 31545
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_e_1",
    "name": "Kamienica ul. Kanonicza 1",
    "address": "ul. Kanonicza 1",
    "polygon": [
      {
        "x": 24320,
        "y": 28800
      },
      {
        "x": 24800,
        "y": 28800
      },
      {
        "x": 24800,
        "y": 29015
      },
      {
        "x": 24320,
        "y": 29015
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_e_1",
        "x": 24320,
        "y": 28908,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_e_1",
        "name": "ul. Kanonicza 1 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24332,
            "y": 28812
          },
          {
            "x": 24788,
            "y": 28812
          },
          {
            "x": 24788,
            "y": 29003
          },
          {
            "x": 24332,
            "y": 29003
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 28908,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24328,
        "y": 28847
      },
      {
        "x": 24328,
        "y": 28968
      }
    ]
  },
  {
    "id": "kam_kanon_e_3",
    "name": "Kamienica ul. Kanonicza 3",
    "address": "ul. Kanonicza 3",
    "polygon": [
      {
        "x": 24320,
        "y": 29030
      },
      {
        "x": 24800,
        "y": 29030
      },
      {
        "x": 24800,
        "y": 29245
      },
      {
        "x": 24320,
        "y": 29245
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_e_5",
    "name": "Kamienica ul. Kanonicza 5",
    "address": "ul. Kanonicza 5",
    "polygon": [
      {
        "x": 24320,
        "y": 29260
      },
      {
        "x": 24800,
        "y": 29260
      },
      {
        "x": 24800,
        "y": 29475
      },
      {
        "x": 24320,
        "y": 29475
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_e_5",
        "x": 24320,
        "y": 29368,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_e_5",
        "name": "ul. Kanonicza 5 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24332,
            "y": 29272
          },
          {
            "x": 24788,
            "y": 29272
          },
          {
            "x": 24788,
            "y": 29463
          },
          {
            "x": 24332,
            "y": 29463
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 29368,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24328,
        "y": 29307
      },
      {
        "x": 24328,
        "y": 29428
      }
    ]
  },
  {
    "id": "kam_kanon_e_7",
    "name": "Kamienica ul. Kanonicza 7",
    "address": "ul. Kanonicza 7",
    "polygon": [
      {
        "x": 24320,
        "y": 29490
      },
      {
        "x": 24800,
        "y": 29490
      },
      {
        "x": 24800,
        "y": 29705
      },
      {
        "x": 24320,
        "y": 29705
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_e_9",
    "name": "Kamienica ul. Kanonicza 9",
    "address": "ul. Kanonicza 9",
    "polygon": [
      {
        "x": 24320,
        "y": 29720
      },
      {
        "x": 24800,
        "y": 29720
      },
      {
        "x": 24800,
        "y": 29935
      },
      {
        "x": 24320,
        "y": 29935
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_e_9",
        "x": 24320,
        "y": 29828,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_e_9",
        "name": "ul. Kanonicza 9 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 24332,
            "y": 29732
          },
          {
            "x": 24788,
            "y": 29732
          },
          {
            "x": 24788,
            "y": 29923
          },
          {
            "x": 24332,
            "y": 29923
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 29828,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24328,
        "y": 29767
      },
      {
        "x": 24328,
        "y": 29888
      }
    ]
  },
  {
    "id": "kam_kanon_e_11",
    "name": "Kamienica ul. Kanonicza 11",
    "address": "ul. Kanonicza 11",
    "polygon": [
      {
        "x": 24320,
        "y": 29950
      },
      {
        "x": 24800,
        "y": 29950
      },
      {
        "x": 24800,
        "y": 30165
      },
      {
        "x": 24320,
        "y": 30165
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_e_13",
    "name": "Kamienica ul. Kanonicza 13",
    "address": "ul. Kanonicza 13",
    "polygon": [
      {
        "x": 24320,
        "y": 30180
      },
      {
        "x": 24800,
        "y": 30180
      },
      {
        "x": 24800,
        "y": 30395
      },
      {
        "x": 24320,
        "y": 30395
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_e_13",
        "x": 24320,
        "y": 30288,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_e_13",
        "name": "ul. Kanonicza 13 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 24332,
            "y": 30192
          },
          {
            "x": 24788,
            "y": 30192
          },
          {
            "x": 24788,
            "y": 30383
          },
          {
            "x": 24332,
            "y": 30383
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 30288,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24328,
        "y": 30227
      },
      {
        "x": 24328,
        "y": 30348
      }
    ]
  },
  {
    "id": "kam_kanon_e_15",
    "name": "Kamienica ul. Kanonicza 15",
    "address": "ul. Kanonicza 15",
    "polygon": [
      {
        "x": 24320,
        "y": 30410
      },
      {
        "x": 24800,
        "y": 30410
      },
      {
        "x": 24800,
        "y": 30625
      },
      {
        "x": 24320,
        "y": 30625
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_e_17",
    "name": "Kamienica ul. Kanonicza 17",
    "address": "ul. Kanonicza 17",
    "polygon": [
      {
        "x": 24320,
        "y": 30640
      },
      {
        "x": 24800,
        "y": 30640
      },
      {
        "x": 24800,
        "y": 30855
      },
      {
        "x": 24320,
        "y": 30855
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_e_17",
        "x": 24320,
        "y": 30748,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_e_17",
        "name": "ul. Kanonicza 17 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24332,
            "y": 30652
          },
          {
            "x": 24788,
            "y": 30652
          },
          {
            "x": 24788,
            "y": 30843
          },
          {
            "x": 24332,
            "y": 30843
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 30748,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24328,
        "y": 30687
      },
      {
        "x": 24328,
        "y": 30808
      }
    ]
  },
  {
    "id": "kam_kanon_e_19",
    "name": "Kamienica ul. Kanonicza 19",
    "address": "ul. Kanonicza 19",
    "polygon": [
      {
        "x": 24320,
        "y": 30870
      },
      {
        "x": 24800,
        "y": 30870
      },
      {
        "x": 24800,
        "y": 31085
      },
      {
        "x": 24320,
        "y": 31085
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_kanon_e_21",
    "name": "Kamienica ul. Kanonicza 21",
    "address": "ul. Kanonicza 21",
    "polygon": [
      {
        "x": 24320,
        "y": 31100
      },
      {
        "x": 24800,
        "y": 31100
      },
      {
        "x": 24800,
        "y": 31315
      },
      {
        "x": 24320,
        "y": 31315
      }
    ],
    "doors": [
      {
        "id": "d_kam_kanon_e_21",
        "x": 24320,
        "y": 31208,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_kanon_e_21",
        "name": "ul. Kanonicza 21 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24332,
            "y": 31112
          },
          {
            "x": 24788,
            "y": 31112
          },
          {
            "x": 24788,
            "y": 31303
          },
          {
            "x": 24332,
            "y": 31303
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 31208,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24328,
        "y": 31147
      },
      {
        "x": 24328,
        "y": 31268
      }
    ]
  },
  {
    "id": "kam_kanon_e_23",
    "name": "Kamienica ul. Kanonicza 23",
    "address": "ul. Kanonicza 23",
    "polygon": [
      {
        "x": 24320,
        "y": 31330
      },
      {
        "x": 24800,
        "y": 31330
      },
      {
        "x": 24800,
        "y": 31545
      },
      {
        "x": 24320,
        "y": 31545
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_posel_n_1",
    "name": "Kamienica ul. Poselska 1",
    "address": "ul. Poselska 1",
    "polygon": [
      {
        "x": 21800,
        "y": 28150
      },
      {
        "x": 22060,
        "y": 28150
      },
      {
        "x": 22060,
        "y": 28530
      },
      {
        "x": 21800,
        "y": 28530
      }
    ],
    "doors": [
      {
        "id": "d_kam_posel_n_1",
        "x": 21930,
        "y": 28530,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_posel_n_1",
        "name": "ul. Poselska 1 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 21812,
            "y": 28162
          },
          {
            "x": 22048,
            "y": 28162
          },
          {
            "x": 22048,
            "y": 28518
          },
          {
            "x": 21812,
            "y": 28518
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21930,
            "y": 28340,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21857,
        "y": 28522
      },
      {
        "x": 22003,
        "y": 28522
      }
    ]
  },
  {
    "id": "kam_posel_n_3",
    "name": "Kamienica ul. Poselska 3",
    "address": "ul. Poselska 3",
    "polygon": [
      {
        "x": 22080,
        "y": 28150
      },
      {
        "x": 22340,
        "y": 28150
      },
      {
        "x": 22340,
        "y": 28530
      },
      {
        "x": 22080,
        "y": 28530
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_posel_n_5",
    "name": "Kamienica ul. Poselska 5",
    "address": "ul. Poselska 5",
    "polygon": [
      {
        "x": 22360,
        "y": 28150
      },
      {
        "x": 22620,
        "y": 28150
      },
      {
        "x": 22620,
        "y": 28530
      },
      {
        "x": 22360,
        "y": 28530
      }
    ],
    "doors": [
      {
        "id": "d_kam_posel_n_5",
        "x": 22490,
        "y": 28530,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_posel_n_5",
        "name": "ul. Poselska 5 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 22372,
            "y": 28162
          },
          {
            "x": 22608,
            "y": 28162
          },
          {
            "x": 22608,
            "y": 28518
          },
          {
            "x": 22372,
            "y": 28518
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22490,
            "y": 28340,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22417,
        "y": 28522
      },
      {
        "x": 22563,
        "y": 28522
      }
    ]
  },
  {
    "id": "kam_posel_n_7",
    "name": "Kamienica ul. Poselska 7",
    "address": "ul. Poselska 7",
    "polygon": [
      {
        "x": 22640,
        "y": 28150
      },
      {
        "x": 22900,
        "y": 28150
      },
      {
        "x": 22900,
        "y": 28530
      },
      {
        "x": 22640,
        "y": 28530
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_posel_n_9",
    "name": "Kamienica ul. Poselska 9",
    "address": "ul. Poselska 9",
    "polygon": [
      {
        "x": 22920,
        "y": 28150
      },
      {
        "x": 23180,
        "y": 28150
      },
      {
        "x": 23180,
        "y": 28530
      },
      {
        "x": 22920,
        "y": 28530
      }
    ],
    "doors": [
      {
        "id": "d_kam_posel_n_9",
        "x": 23050,
        "y": 28530,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_posel_n_9",
        "name": "ul. Poselska 9 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 22932,
            "y": 28162
          },
          {
            "x": 23168,
            "y": 28162
          },
          {
            "x": 23168,
            "y": 28518
          },
          {
            "x": 22932,
            "y": 28518
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23050,
            "y": 28340,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22977,
        "y": 28522
      },
      {
        "x": 23123,
        "y": 28522
      }
    ]
  },
  {
    "id": "kam_posel_n_11",
    "name": "Kamienica ul. Poselska 11",
    "address": "ul. Poselska 11",
    "polygon": [
      {
        "x": 23200,
        "y": 28150
      },
      {
        "x": 23460,
        "y": 28150
      },
      {
        "x": 23460,
        "y": 28530
      },
      {
        "x": 23200,
        "y": 28530
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_posel_s_2",
    "name": "Kamienica ul. Poselska 2",
    "address": "ul. Poselska 2",
    "polygon": [
      {
        "x": 21800,
        "y": 28680
      },
      {
        "x": 22060,
        "y": 28680
      },
      {
        "x": 22060,
        "y": 29060
      },
      {
        "x": 21800,
        "y": 29060
      }
    ],
    "doors": [
      {
        "id": "d_kam_posel_s_2",
        "x": 21930,
        "y": 28680,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_posel_s_2",
        "name": "ul. Poselska 2 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 21812,
            "y": 28692
          },
          {
            "x": 22048,
            "y": 28692
          },
          {
            "x": 22048,
            "y": 29048
          },
          {
            "x": 21812,
            "y": 29048
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21930,
            "y": 28870,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21857,
        "y": 28688
      },
      {
        "x": 22003,
        "y": 28688
      }
    ]
  },
  {
    "id": "kam_posel_s_4",
    "name": "Kamienica ul. Poselska 4",
    "address": "ul. Poselska 4",
    "polygon": [
      {
        "x": 22080,
        "y": 28680
      },
      {
        "x": 22340,
        "y": 28680
      },
      {
        "x": 22340,
        "y": 29060
      },
      {
        "x": 22080,
        "y": 29060
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_posel_s_6",
    "name": "Kamienica ul. Poselska 6",
    "address": "ul. Poselska 6",
    "polygon": [
      {
        "x": 22360,
        "y": 28680
      },
      {
        "x": 22620,
        "y": 28680
      },
      {
        "x": 22620,
        "y": 29060
      },
      {
        "x": 22360,
        "y": 29060
      }
    ],
    "doors": [
      {
        "id": "d_kam_posel_s_6",
        "x": 22490,
        "y": 28680,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_posel_s_6",
        "name": "ul. Poselska 6 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 22372,
            "y": 28692
          },
          {
            "x": 22608,
            "y": 28692
          },
          {
            "x": 22608,
            "y": 29048
          },
          {
            "x": 22372,
            "y": 29048
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22490,
            "y": 28870,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22417,
        "y": 28688
      },
      {
        "x": 22563,
        "y": 28688
      }
    ]
  },
  {
    "id": "kam_posel_s_8",
    "name": "Kamienica ul. Poselska 8",
    "address": "ul. Poselska 8",
    "polygon": [
      {
        "x": 22640,
        "y": 28680
      },
      {
        "x": 22900,
        "y": 28680
      },
      {
        "x": 22900,
        "y": 29060
      },
      {
        "x": 22640,
        "y": 29060
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_posel_s_10",
    "name": "Kamienica ul. Poselska 10",
    "address": "ul. Poselska 10",
    "polygon": [
      {
        "x": 22920,
        "y": 28680
      },
      {
        "x": 23180,
        "y": 28680
      },
      {
        "x": 23180,
        "y": 29060
      },
      {
        "x": 22920,
        "y": 29060
      }
    ],
    "doors": [
      {
        "id": "d_kam_posel_s_10",
        "x": 23050,
        "y": 28680,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_posel_s_10",
        "name": "ul. Poselska 10 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 22932,
            "y": 28692
          },
          {
            "x": 23168,
            "y": 28692
          },
          {
            "x": 23168,
            "y": 29048
          },
          {
            "x": 22932,
            "y": 29048
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23050,
            "y": 28870,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22977,
        "y": 28688
      },
      {
        "x": 23123,
        "y": 28688
      }
    ]
  },
  {
    "id": "kam_posel_s_12",
    "name": "Kamienica ul. Poselska 12",
    "address": "ul. Poselska 12",
    "polygon": [
      {
        "x": 23200,
        "y": 28680
      },
      {
        "x": 23460,
        "y": 28680
      },
      {
        "x": 23460,
        "y": 29060
      },
      {
        "x": 23200,
        "y": 29060
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_senac_s_2",
    "name": "Kamienica ul. Senacka 2",
    "address": "ul. Senacka 2",
    "polygon": [
      {
        "x": 23000,
        "y": 29550
      },
      {
        "x": 23240,
        "y": 29550
      },
      {
        "x": 23240,
        "y": 29910
      },
      {
        "x": 23000,
        "y": 29910
      }
    ],
    "doors": [
      {
        "id": "d_kam_senac_s_2",
        "x": 23120,
        "y": 29550,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_senac_s_2",
        "name": "ul. Senacka 2 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23012,
            "y": 29562
          },
          {
            "x": 23228,
            "y": 29562
          },
          {
            "x": 23228,
            "y": 29898
          },
          {
            "x": 23012,
            "y": 29898
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23120,
            "y": 29730,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23053,
        "y": 29558
      },
      {
        "x": 23187,
        "y": 29558
      }
    ]
  },
  {
    "id": "kam_senac_s_4",
    "name": "Kamienica ul. Senacka 4",
    "address": "ul. Senacka 4",
    "polygon": [
      {
        "x": 23260,
        "y": 29550
      },
      {
        "x": 23500,
        "y": 29550
      },
      {
        "x": 23500,
        "y": 29910
      },
      {
        "x": 23260,
        "y": 29910
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_senac_s_6",
    "name": "Kamienica ul. Senacka 6",
    "address": "ul. Senacka 6",
    "polygon": [
      {
        "x": 23520,
        "y": 29550
      },
      {
        "x": 23760,
        "y": 29550
      },
      {
        "x": 23760,
        "y": 29910
      },
      {
        "x": 23520,
        "y": 29910
      }
    ],
    "doors": [
      {
        "id": "d_kam_senac_s_6",
        "x": 23640,
        "y": 29550,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_senac_s_6",
        "name": "ul. Senacka 6 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 23532,
            "y": 29562
          },
          {
            "x": 23748,
            "y": 29562
          },
          {
            "x": 23748,
            "y": 29898
          },
          {
            "x": 23532,
            "y": 29898
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23640,
            "y": 29730,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23573,
        "y": 29558
      },
      {
        "x": 23707,
        "y": 29558
      }
    ]
  },
  {
    "id": "kam_senac_s_8",
    "name": "Kamienica ul. Senacka 8",
    "address": "ul. Senacka 8",
    "polygon": [
      {
        "x": 23780,
        "y": 29550
      },
      {
        "x": 24020,
        "y": 29550
      },
      {
        "x": 24020,
        "y": 29910
      },
      {
        "x": 23780,
        "y": 29910
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_senac_s_10",
    "name": "Kamienica ul. Senacka 10",
    "address": "ul. Senacka 10",
    "polygon": [
      {
        "x": 24040,
        "y": 29550
      },
      {
        "x": 24280,
        "y": 29550
      },
      {
        "x": 24280,
        "y": 29910
      },
      {
        "x": 24040,
        "y": 29910
      }
    ],
    "doors": [
      {
        "id": "d_kam_senac_s_10",
        "x": 24160,
        "y": 29550,
        "width": 65,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_senac_s_10",
        "name": "ul. Senacka 10 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24052,
            "y": 29562
          },
          {
            "x": 24268,
            "y": 29562
          },
          {
            "x": 24268,
            "y": 29898
          },
          {
            "x": 24052,
            "y": 29898
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24160,
            "y": 29730,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24093,
        "y": 29558
      },
      {
        "x": 24227,
        "y": 29558
      }
    ]
  },
  {
    "id": "kam_podzam_n_1",
    "name": "Kamienica ul. Podzamcze 1",
    "address": "ul. Podzamcze 1",
    "polygon": [
      {
        "x": 21200,
        "y": 31250
      },
      {
        "x": 21500,
        "y": 31250
      },
      {
        "x": 21500,
        "y": 31730
      },
      {
        "x": 21200,
        "y": 31730
      }
    ],
    "doors": [
      {
        "id": "d_kam_podzam_n_1",
        "x": 21350,
        "y": 31730,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_podzam_n_1",
        "name": "ul. Podzamcze 1 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 21212,
            "y": 31262
          },
          {
            "x": 21488,
            "y": 31262
          },
          {
            "x": 21488,
            "y": 31718
          },
          {
            "x": 21212,
            "y": 31718
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21350,
            "y": 31490,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21266,
        "y": 31722
      },
      {
        "x": 21434,
        "y": 31722
      },
      {
        "x": 21350,
        "y": 31722
      }
    ]
  },
  {
    "id": "kam_podzam_n_2",
    "name": "Kamienica ul. Podzamcze 2",
    "address": "ul. Podzamcze 2",
    "polygon": [
      {
        "x": 21520,
        "y": 31250
      },
      {
        "x": 21820,
        "y": 31250
      },
      {
        "x": 21820,
        "y": 31730
      },
      {
        "x": 21520,
        "y": 31730
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_podzam_n_3",
    "name": "Kamienica ul. Podzamcze 3",
    "address": "ul. Podzamcze 3",
    "polygon": [
      {
        "x": 21840,
        "y": 31250
      },
      {
        "x": 22140,
        "y": 31250
      },
      {
        "x": 22140,
        "y": 31730
      },
      {
        "x": 21840,
        "y": 31730
      }
    ],
    "doors": [
      {
        "id": "d_kam_podzam_n_3",
        "x": 21990,
        "y": 31730,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_podzam_n_3",
        "name": "ul. Podzamcze 3 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 21852,
            "y": 31262
          },
          {
            "x": 22128,
            "y": 31262
          },
          {
            "x": 22128,
            "y": 31718
          },
          {
            "x": 21852,
            "y": 31718
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21990,
            "y": 31490,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21906,
        "y": 31722
      },
      {
        "x": 22074,
        "y": 31722
      },
      {
        "x": 21990,
        "y": 31722
      }
    ]
  },
  {
    "id": "kam_podzam_n_4",
    "name": "Kamienica ul. Podzamcze 4",
    "address": "ul. Podzamcze 4",
    "polygon": [
      {
        "x": 22160,
        "y": 31250
      },
      {
        "x": 22460,
        "y": 31250
      },
      {
        "x": 22460,
        "y": 31730
      },
      {
        "x": 22160,
        "y": 31730
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_podzam_n_5",
    "name": "Kamienica ul. Podzamcze 5",
    "address": "ul. Podzamcze 5",
    "polygon": [
      {
        "x": 22480,
        "y": 31250
      },
      {
        "x": 22780,
        "y": 31250
      },
      {
        "x": 22780,
        "y": 31730
      },
      {
        "x": 22480,
        "y": 31730
      }
    ],
    "doors": [
      {
        "id": "d_kam_podzam_n_5",
        "x": 22630,
        "y": 31730,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_podzam_n_5",
        "name": "ul. Podzamcze 5 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 22492,
            "y": 31262
          },
          {
            "x": 22768,
            "y": 31262
          },
          {
            "x": 22768,
            "y": 31718
          },
          {
            "x": 22492,
            "y": 31718
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22630,
            "y": 31490,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22546,
        "y": 31722
      },
      {
        "x": 22714,
        "y": 31722
      },
      {
        "x": 22630,
        "y": 31722
      }
    ]
  },
  {
    "id": "kam_podzam_n_6",
    "name": "Kamienica ul. Podzamcze 6",
    "address": "ul. Podzamcze 6",
    "polygon": [
      {
        "x": 22800,
        "y": 31250
      },
      {
        "x": 23100,
        "y": 31250
      },
      {
        "x": 23100,
        "y": 31730
      },
      {
        "x": 22800,
        "y": 31730
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_podzam_n_7",
    "name": "Kamienica ul. Podzamcze 7",
    "address": "ul. Podzamcze 7",
    "polygon": [
      {
        "x": 23120,
        "y": 31250
      },
      {
        "x": 23420,
        "y": 31250
      },
      {
        "x": 23420,
        "y": 31730
      },
      {
        "x": 23120,
        "y": 31730
      }
    ],
    "doors": [
      {
        "id": "d_kam_podzam_n_7",
        "x": 23270,
        "y": 31730,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_podzam_n_7",
        "name": "ul. Podzamcze 7 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23132,
            "y": 31262
          },
          {
            "x": 23408,
            "y": 31262
          },
          {
            "x": 23408,
            "y": 31718
          },
          {
            "x": 23132,
            "y": 31718
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23270,
            "y": 31490,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23186,
        "y": 31722
      },
      {
        "x": 23354,
        "y": 31722
      },
      {
        "x": 23270,
        "y": 31722
      }
    ]
  },
  {
    "id": "kam_podzam_n_8",
    "name": "Kamienica ul. Podzamcze 8",
    "address": "ul. Podzamcze 8",
    "polygon": [
      {
        "x": 23440,
        "y": 31250
      },
      {
        "x": 23740,
        "y": 31250
      },
      {
        "x": 23740,
        "y": 31730
      },
      {
        "x": 23440,
        "y": 31730
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "zamek_wawelski",
    "name": "Zamek Królewski na Wawelu",
    "address": "Wawel 5",
    "polygon": [
      {
        "x": 22800,
        "y": 32400
      },
      {
        "x": 25200,
        "y": 32400
      },
      {
        "x": 25200,
        "y": 34200
      },
      {
        "x": 22800,
        "y": 34200
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "doors": [
      {
        "id": "waw_d_gate",
        "x": 24000,
        "y": 32400,
        "width": 120,
        "angle": 0,
        "isOpen": false,
        "isLocked": false
      },
      {
        "id": "waw_d_arc",
        "x": 24000,
        "y": 34200,
        "width": 120,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 23400,
        "y": 32410
      },
      {
        "x": 24600,
        "y": 32410
      },
      {
        "x": 23400,
        "y": 34190
      },
      {
        "x": 24600,
        "y": 34190
      }
    ],
    "interiorRooms": [
      {
        "id": "waw_dziedz",
        "name": "Renesansowy Dziedziniec Arkadowy i Sale Królewskie",
        "polygon": [
          {
            "x": 22900,
            "y": 32500
          },
          {
            "x": 25100,
            "y": 32500
          },
          {
            "x": 25100,
            "y": 34100
          },
          {
            "x": 22900,
            "y": 34100
          }
        ],
        "furniture": [
          {
            "type": "throne",
            "x": 24000,
            "y": 33300,
            "w": 90,
            "h": 90
          },
          {
            "type": "desk",
            "x": 23600,
            "y": 33100,
            "w": 120,
            "h": 70
          },
          {
            "type": "desk",
            "x": 24400,
            "y": 33100,
            "w": 120,
            "h": 70
          }
        ]
      }
    ]
  },
  {
    "id": "katedra_wawelska",
    "name": "Katedra Wawelska św. Stanisława i Wacława",
    "address": "Wawel 3",
    "polygon": [
      {
        "x": 21800,
        "y": 32400
      },
      {
        "x": 22700,
        "y": 32400
      },
      {
        "x": 22700,
        "y": 33500
      },
      {
        "x": 21800,
        "y": 33500
      }
    ],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": true,
    "doors": [
      {
        "id": "kat_d",
        "x": 22700,
        "y": 32950,
        "width": 85,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "windows": [
      {
        "x": 22250,
        "y": 32410
      },
      {
        "x": 22250,
        "y": 33490
      }
    ],
    "interiorRooms": [
      {
        "id": "kat_nawa",
        "name": "Nawa Główna Katedry — Konfesja św. Stanisława",
        "polygon": [
          {
            "x": 21850,
            "y": 32450
          },
          {
            "x": 22650,
            "y": 32450
          },
          {
            "x": 22650,
            "y": 33450
          },
          {
            "x": 21850,
            "y": 33450
          }
        ]
      }
    ]
  },
  {
    "id": "kam_mat_w_2",
    "name": "Kamienica Plac Matejki 2",
    "address": "Plac Matejki 2",
    "polygon": [
      {
        "x": 23600,
        "y": 16250
      },
      {
        "x": 23960,
        "y": 16250
      },
      {
        "x": 23960,
        "y": 16435
      },
      {
        "x": 23600,
        "y": 16435
      }
    ],
    "doors": [
      {
        "id": "d_kam_mat_w_2",
        "x": 23960,
        "y": 16343,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_mat_w_2",
        "name": "Plac Matejki 2 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 23612,
            "y": 16262
          },
          {
            "x": 23948,
            "y": 16262
          },
          {
            "x": 23948,
            "y": 16423
          },
          {
            "x": 23612,
            "y": 16423
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23780,
            "y": 16343,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23952,
        "y": 16291
      },
      {
        "x": 23952,
        "y": 16394
      }
    ]
  },
  {
    "id": "kam_mat_w_4",
    "name": "Kamienica Plac Matejki 4",
    "address": "Plac Matejki 4",
    "polygon": [
      {
        "x": 23600,
        "y": 16450
      },
      {
        "x": 23960,
        "y": 16450
      },
      {
        "x": 23960,
        "y": 16635
      },
      {
        "x": 23600,
        "y": 16635
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_mat_w_6",
    "name": "Kamienica Plac Matejki 6",
    "address": "Plac Matejki 6",
    "polygon": [
      {
        "x": 23600,
        "y": 16650
      },
      {
        "x": 23960,
        "y": 16650
      },
      {
        "x": 23960,
        "y": 16835
      },
      {
        "x": 23600,
        "y": 16835
      }
    ],
    "doors": [
      {
        "id": "d_kam_mat_w_6",
        "x": 23960,
        "y": 16743,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_mat_w_6",
        "name": "Plac Matejki 6 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 23612,
            "y": 16662
          },
          {
            "x": 23948,
            "y": 16662
          },
          {
            "x": 23948,
            "y": 16823
          },
          {
            "x": 23612,
            "y": 16823
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23780,
            "y": 16743,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23952,
        "y": 16691
      },
      {
        "x": 23952,
        "y": 16794
      }
    ]
  },
  {
    "id": "kam_mat_w_8",
    "name": "Kamienica Plac Matejki 8",
    "address": "Plac Matejki 8",
    "polygon": [
      {
        "x": 23600,
        "y": 16850
      },
      {
        "x": 23960,
        "y": 16850
      },
      {
        "x": 23960,
        "y": 17035
      },
      {
        "x": 23600,
        "y": 17035
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_mat_e_1",
    "name": "Kamienica Plac Matejki 1",
    "address": "Plac Matejki 1",
    "polygon": [
      {
        "x": 24820,
        "y": 16250
      },
      {
        "x": 25180,
        "y": 16250
      },
      {
        "x": 25180,
        "y": 16435
      },
      {
        "x": 24820,
        "y": 16435
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_mat_e_3",
    "name": "Kamienica Plac Matejki 3",
    "address": "Plac Matejki 3",
    "polygon": [
      {
        "x": 24820,
        "y": 16450
      },
      {
        "x": 25180,
        "y": 16450
      },
      {
        "x": 25180,
        "y": 16635
      },
      {
        "x": 24820,
        "y": 16635
      }
    ],
    "doors": [
      {
        "id": "d_kam_mat_e_3",
        "x": 24820,
        "y": 16543,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_mat_e_3",
        "name": "Plac Matejki 3 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 24832,
            "y": 16462
          },
          {
            "x": 25168,
            "y": 16462
          },
          {
            "x": 25168,
            "y": 16623
          },
          {
            "x": 24832,
            "y": 16623
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25000,
            "y": 16543,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24828,
        "y": 16491
      },
      {
        "x": 24828,
        "y": 16594
      }
    ]
  },
  {
    "id": "kam_mat_e_5",
    "name": "Kamienica Plac Matejki 5",
    "address": "Plac Matejki 5",
    "polygon": [
      {
        "x": 24820,
        "y": 16650
      },
      {
        "x": 25180,
        "y": 16650
      },
      {
        "x": 25180,
        "y": 16835
      },
      {
        "x": 24820,
        "y": 16835
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_mat_e_7",
    "name": "Kamienica Plac Matejki 7",
    "address": "Plac Matejki 7",
    "polygon": [
      {
        "x": 24820,
        "y": 16850
      },
      {
        "x": 25180,
        "y": 16850
      },
      {
        "x": 25180,
        "y": 17035
      },
      {
        "x": 24820,
        "y": 17035
      }
    ],
    "doors": [
      {
        "id": "d_kam_mat_e_7",
        "x": 24820,
        "y": 16943,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_mat_e_7",
        "name": "Plac Matejki 7 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24832,
            "y": 16862
          },
          {
            "x": 25168,
            "y": 16862
          },
          {
            "x": 25168,
            "y": 17023
          },
          {
            "x": 24832,
            "y": 17023
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 25000,
            "y": 16943,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24828,
        "y": 16891
      },
      {
        "x": 24828,
        "y": 16994
      }
    ]
  },
  {
    "id": "kam_baszt_n_1",
    "name": "Kamienica ul. Basztowa 1",
    "address": "ul. Basztowa 1",
    "polygon": [
      {
        "x": 20800,
        "y": 16550
      },
      {
        "x": 21040,
        "y": 16550
      },
      {
        "x": 21040,
        "y": 17050
      },
      {
        "x": 20800,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_1",
        "x": 20920,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_1",
        "name": "ul. Basztowa 1 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 20812,
            "y": 16562
          },
          {
            "x": 21028,
            "y": 16562
          },
          {
            "x": 21028,
            "y": 17038
          },
          {
            "x": 20812,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 20920,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 20853,
        "y": 17042
      },
      {
        "x": 20987,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_2",
    "name": "Kamienica ul. Basztowa 2",
    "address": "ul. Basztowa 2",
    "polygon": [
      {
        "x": 21060,
        "y": 16550
      },
      {
        "x": 21300,
        "y": 16550
      },
      {
        "x": 21300,
        "y": 17050
      },
      {
        "x": 21060,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_3",
    "name": "Kamienica ul. Basztowa 3",
    "address": "ul. Basztowa 3",
    "polygon": [
      {
        "x": 21320,
        "y": 16550
      },
      {
        "x": 21560,
        "y": 16550
      },
      {
        "x": 21560,
        "y": 17050
      },
      {
        "x": 21320,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_3",
        "x": 21440,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_3",
        "name": "ul. Basztowa 3 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 21332,
            "y": 16562
          },
          {
            "x": 21548,
            "y": 16562
          },
          {
            "x": 21548,
            "y": 17038
          },
          {
            "x": 21332,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21440,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21373,
        "y": 17042
      },
      {
        "x": 21507,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_4",
    "name": "Kamienica ul. Basztowa 4",
    "address": "ul. Basztowa 4",
    "polygon": [
      {
        "x": 21580,
        "y": 16550
      },
      {
        "x": 21820,
        "y": 16550
      },
      {
        "x": 21820,
        "y": 17050
      },
      {
        "x": 21580,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_5",
    "name": "Kamienica ul. Basztowa 5",
    "address": "ul. Basztowa 5",
    "polygon": [
      {
        "x": 21840,
        "y": 16550
      },
      {
        "x": 22080,
        "y": 16550
      },
      {
        "x": 22080,
        "y": 17050
      },
      {
        "x": 21840,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_5",
        "x": 21960,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_5",
        "name": "ul. Basztowa 5 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 21852,
            "y": 16562
          },
          {
            "x": 22068,
            "y": 16562
          },
          {
            "x": 22068,
            "y": 17038
          },
          {
            "x": 21852,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 21960,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 21893,
        "y": 17042
      },
      {
        "x": 22027,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_6",
    "name": "Kamienica ul. Basztowa 6",
    "address": "ul. Basztowa 6",
    "polygon": [
      {
        "x": 22100,
        "y": 16550
      },
      {
        "x": 22340,
        "y": 16550
      },
      {
        "x": 22340,
        "y": 17050
      },
      {
        "x": 22100,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_7",
    "name": "Kamienica ul. Basztowa 7",
    "address": "ul. Basztowa 7",
    "polygon": [
      {
        "x": 22360,
        "y": 16550
      },
      {
        "x": 22600,
        "y": 16550
      },
      {
        "x": 22600,
        "y": 17050
      },
      {
        "x": 22360,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_7",
        "x": 22480,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_7",
        "name": "ul. Basztowa 7 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 22372,
            "y": 16562
          },
          {
            "x": 22588,
            "y": 16562
          },
          {
            "x": 22588,
            "y": 17038
          },
          {
            "x": 22372,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 22480,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22413,
        "y": 17042
      },
      {
        "x": 22547,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_8",
    "name": "Kamienica ul. Basztowa 8",
    "address": "ul. Basztowa 8",
    "polygon": [
      {
        "x": 22620,
        "y": 16550
      },
      {
        "x": 22860,
        "y": 16550
      },
      {
        "x": 22860,
        "y": 17050
      },
      {
        "x": 22620,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_9",
    "name": "Kamienica ul. Basztowa 9",
    "address": "ul. Basztowa 9",
    "polygon": [
      {
        "x": 22880,
        "y": 16550
      },
      {
        "x": 23120,
        "y": 16550
      },
      {
        "x": 23120,
        "y": 17050
      },
      {
        "x": 22880,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_9",
        "x": 23000,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_9",
        "name": "ul. Basztowa 9 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 22892,
            "y": 16562
          },
          {
            "x": 23108,
            "y": 16562
          },
          {
            "x": 23108,
            "y": 17038
          },
          {
            "x": 22892,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23000,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 22933,
        "y": 17042
      },
      {
        "x": 23067,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_10",
    "name": "Kamienica ul. Basztowa 10",
    "address": "ul. Basztowa 10",
    "polygon": [
      {
        "x": 23140,
        "y": 16550
      },
      {
        "x": 23380,
        "y": 16550
      },
      {
        "x": 23380,
        "y": 17050
      },
      {
        "x": 23140,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_11",
    "name": "Kamienica ul. Basztowa 11",
    "address": "ul. Basztowa 11",
    "polygon": [
      {
        "x": 23400,
        "y": 16550
      },
      {
        "x": 23640,
        "y": 16550
      },
      {
        "x": 23640,
        "y": 17050
      },
      {
        "x": 23400,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_11",
        "x": 23520,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_11",
        "name": "ul. Basztowa 11 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 23412,
            "y": 16562
          },
          {
            "x": 23628,
            "y": 16562
          },
          {
            "x": 23628,
            "y": 17038
          },
          {
            "x": 23412,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 23520,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23453,
        "y": 17042
      },
      {
        "x": 23587,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_12",
    "name": "Kamienica ul. Basztowa 12",
    "address": "ul. Basztowa 12",
    "polygon": [
      {
        "x": 23660,
        "y": 16550
      },
      {
        "x": 23900,
        "y": 16550
      },
      {
        "x": 23900,
        "y": 17050
      },
      {
        "x": 23660,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_13",
    "name": "Kamienica ul. Basztowa 13",
    "address": "ul. Basztowa 13",
    "polygon": [
      {
        "x": 23920,
        "y": 16550
      },
      {
        "x": 24160,
        "y": 16550
      },
      {
        "x": 24160,
        "y": 17050
      },
      {
        "x": 23920,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_13",
        "x": 24040,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_13",
        "name": "ul. Basztowa 13 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 23932,
            "y": 16562
          },
          {
            "x": 24148,
            "y": 16562
          },
          {
            "x": 24148,
            "y": 17038
          },
          {
            "x": 23932,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24040,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 23973,
        "y": 17042
      },
      {
        "x": 24107,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_14",
    "name": "Kamienica ul. Basztowa 14",
    "address": "ul. Basztowa 14",
    "polygon": [
      {
        "x": 24180,
        "y": 16550
      },
      {
        "x": 24420,
        "y": 16550
      },
      {
        "x": 24420,
        "y": 17050
      },
      {
        "x": 24180,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_baszt_n_15",
    "name": "Kamienica ul. Basztowa 15",
    "address": "ul. Basztowa 15",
    "polygon": [
      {
        "x": 24440,
        "y": 16550
      },
      {
        "x": 24680,
        "y": 16550
      },
      {
        "x": 24680,
        "y": 17050
      },
      {
        "x": 24440,
        "y": 17050
      }
    ],
    "doors": [
      {
        "id": "d_kam_baszt_n_15",
        "x": 24560,
        "y": 17050,
        "width": 65,
        "angle": 3.141592653589793,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_baszt_n_15",
        "name": "ul. Basztowa 15 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 24452,
            "y": 16562
          },
          {
            "x": 24668,
            "y": 16562
          },
          {
            "x": 24668,
            "y": 17038
          },
          {
            "x": 24452,
            "y": 17038
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 24560,
            "y": 16800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 24493,
        "y": 17042
      },
      {
        "x": 24627,
        "y": 17042
      }
    ]
  },
  {
    "id": "kam_baszt_n_16",
    "name": "Kamienica ul. Basztowa 16",
    "address": "ul. Basztowa 16",
    "polygon": [
      {
        "x": 24700,
        "y": 16550
      },
      {
        "x": 24940,
        "y": 16550
      },
      {
        "x": 24940,
        "y": 17050
      },
      {
        "x": 24700,
        "y": 17050
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_1",
    "name": "Kamienica ul. Straszewskiego 1",
    "address": "ul. Straszewskiego 1",
    "polygon": [
      {
        "x": 17300,
        "y": 21600
      },
      {
        "x": 17840,
        "y": 21600
      },
      {
        "x": 17840,
        "y": 21840
      },
      {
        "x": 17300,
        "y": 21840
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_1",
        "x": 17840,
        "y": 21720,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_1",
        "name": "ul. Straszewskiego 1 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 17312,
            "y": 21612
          },
          {
            "x": 17828,
            "y": 21612
          },
          {
            "x": 17828,
            "y": 21828
          },
          {
            "x": 17312,
            "y": 21828
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 21720,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 21653
      },
      {
        "x": 17832,
        "y": 21787
      }
    ]
  },
  {
    "id": "kam_strasz_w_3",
    "name": "Kamienica ul. Straszewskiego 3",
    "address": "ul. Straszewskiego 3",
    "polygon": [
      {
        "x": 17300,
        "y": 21860
      },
      {
        "x": 17840,
        "y": 21860
      },
      {
        "x": 17840,
        "y": 22100
      },
      {
        "x": 17300,
        "y": 22100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_5",
    "name": "Kamienica ul. Straszewskiego 5",
    "address": "ul. Straszewskiego 5",
    "polygon": [
      {
        "x": 17300,
        "y": 22120
      },
      {
        "x": 17840,
        "y": 22120
      },
      {
        "x": 17840,
        "y": 22360
      },
      {
        "x": 17300,
        "y": 22360
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_5",
        "x": 17840,
        "y": 22240,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_5",
        "name": "ul. Straszewskiego 5 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 17312,
            "y": 22132
          },
          {
            "x": 17828,
            "y": 22132
          },
          {
            "x": 17828,
            "y": 22348
          },
          {
            "x": 17312,
            "y": 22348
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 22240,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 22173
      },
      {
        "x": 17832,
        "y": 22307
      }
    ]
  },
  {
    "id": "kam_strasz_w_7",
    "name": "Kamienica ul. Straszewskiego 7",
    "address": "ul. Straszewskiego 7",
    "polygon": [
      {
        "x": 17300,
        "y": 22380
      },
      {
        "x": 17840,
        "y": 22380
      },
      {
        "x": 17840,
        "y": 22620
      },
      {
        "x": 17300,
        "y": 22620
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_9",
    "name": "Kamienica ul. Straszewskiego 9",
    "address": "ul. Straszewskiego 9",
    "polygon": [
      {
        "x": 17300,
        "y": 22640
      },
      {
        "x": 17840,
        "y": 22640
      },
      {
        "x": 17840,
        "y": 22880
      },
      {
        "x": 17300,
        "y": 22880
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_9",
        "x": 17840,
        "y": 22760,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_9",
        "name": "ul. Straszewskiego 9 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 17312,
            "y": 22652
          },
          {
            "x": 17828,
            "y": 22652
          },
          {
            "x": 17828,
            "y": 22868
          },
          {
            "x": 17312,
            "y": 22868
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 22760,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 22693
      },
      {
        "x": 17832,
        "y": 22827
      }
    ]
  },
  {
    "id": "kam_strasz_w_11",
    "name": "Kamienica ul. Straszewskiego 11",
    "address": "ul. Straszewskiego 11",
    "polygon": [
      {
        "x": 17300,
        "y": 22900
      },
      {
        "x": 17840,
        "y": 22900
      },
      {
        "x": 17840,
        "y": 23140
      },
      {
        "x": 17300,
        "y": 23140
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_13",
    "name": "Kamienica ul. Straszewskiego 13",
    "address": "ul. Straszewskiego 13",
    "polygon": [
      {
        "x": 17300,
        "y": 23160
      },
      {
        "x": 17840,
        "y": 23160
      },
      {
        "x": 17840,
        "y": 23400
      },
      {
        "x": 17300,
        "y": 23400
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_13",
        "x": 17840,
        "y": 23280,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_13",
        "name": "ul. Straszewskiego 13 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 17312,
            "y": 23172
          },
          {
            "x": 17828,
            "y": 23172
          },
          {
            "x": 17828,
            "y": 23388
          },
          {
            "x": 17312,
            "y": 23388
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 23280,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 23213
      },
      {
        "x": 17832,
        "y": 23347
      }
    ]
  },
  {
    "id": "kam_strasz_w_15",
    "name": "Kamienica ul. Straszewskiego 15",
    "address": "ul. Straszewskiego 15",
    "polygon": [
      {
        "x": 17300,
        "y": 23420
      },
      {
        "x": 17840,
        "y": 23420
      },
      {
        "x": 17840,
        "y": 23660
      },
      {
        "x": 17300,
        "y": 23660
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_17",
    "name": "Kamienica ul. Straszewskiego 17",
    "address": "ul. Straszewskiego 17",
    "polygon": [
      {
        "x": 17300,
        "y": 23680
      },
      {
        "x": 17840,
        "y": 23680
      },
      {
        "x": 17840,
        "y": 23920
      },
      {
        "x": 17300,
        "y": 23920
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_17",
        "x": 17840,
        "y": 23800,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_17",
        "name": "ul. Straszewskiego 17 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 17312,
            "y": 23692
          },
          {
            "x": 17828,
            "y": 23692
          },
          {
            "x": 17828,
            "y": 23908
          },
          {
            "x": 17312,
            "y": 23908
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 23800,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 23733
      },
      {
        "x": 17832,
        "y": 23867
      }
    ]
  },
  {
    "id": "kam_strasz_w_19",
    "name": "Kamienica ul. Straszewskiego 19",
    "address": "ul. Straszewskiego 19",
    "polygon": [
      {
        "x": 17300,
        "y": 23940
      },
      {
        "x": 17840,
        "y": 23940
      },
      {
        "x": 17840,
        "y": 24180
      },
      {
        "x": 17300,
        "y": 24180
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_21",
    "name": "Kamienica ul. Straszewskiego 21",
    "address": "ul. Straszewskiego 21",
    "polygon": [
      {
        "x": 17300,
        "y": 24200
      },
      {
        "x": 17840,
        "y": 24200
      },
      {
        "x": 17840,
        "y": 24440
      },
      {
        "x": 17300,
        "y": 24440
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_21",
        "x": 17840,
        "y": 24320,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_21",
        "name": "ul. Straszewskiego 21 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 17312,
            "y": 24212
          },
          {
            "x": 17828,
            "y": 24212
          },
          {
            "x": 17828,
            "y": 24428
          },
          {
            "x": 17312,
            "y": 24428
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 24320,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 24253
      },
      {
        "x": 17832,
        "y": 24387
      }
    ]
  },
  {
    "id": "kam_strasz_w_23",
    "name": "Kamienica ul. Straszewskiego 23",
    "address": "ul. Straszewskiego 23",
    "polygon": [
      {
        "x": 17300,
        "y": 24460
      },
      {
        "x": 17840,
        "y": 24460
      },
      {
        "x": 17840,
        "y": 24700
      },
      {
        "x": 17300,
        "y": 24700
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_25",
    "name": "Kamienica ul. Straszewskiego 25",
    "address": "ul. Straszewskiego 25",
    "polygon": [
      {
        "x": 17300,
        "y": 24720
      },
      {
        "x": 17840,
        "y": 24720
      },
      {
        "x": 17840,
        "y": 24960
      },
      {
        "x": 17300,
        "y": 24960
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_25",
        "x": 17840,
        "y": 24840,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_25",
        "name": "ul. Straszewskiego 25 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 17312,
            "y": 24732
          },
          {
            "x": 17828,
            "y": 24732
          },
          {
            "x": 17828,
            "y": 24948
          },
          {
            "x": 17312,
            "y": 24948
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 24840,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 24773
      },
      {
        "x": 17832,
        "y": 24907
      }
    ]
  },
  {
    "id": "kam_strasz_w_27",
    "name": "Kamienica ul. Straszewskiego 27",
    "address": "ul. Straszewskiego 27",
    "polygon": [
      {
        "x": 17300,
        "y": 24980
      },
      {
        "x": 17840,
        "y": 24980
      },
      {
        "x": 17840,
        "y": 25220
      },
      {
        "x": 17300,
        "y": 25220
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_29",
    "name": "Kamienica ul. Straszewskiego 29",
    "address": "ul. Straszewskiego 29",
    "polygon": [
      {
        "x": 17300,
        "y": 25240
      },
      {
        "x": 17840,
        "y": 25240
      },
      {
        "x": 17840,
        "y": 25480
      },
      {
        "x": 17300,
        "y": 25480
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_29",
        "x": 17840,
        "y": 25360,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_29",
        "name": "ul. Straszewskiego 29 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 17312,
            "y": 25252
          },
          {
            "x": 17828,
            "y": 25252
          },
          {
            "x": 17828,
            "y": 25468
          },
          {
            "x": 17312,
            "y": 25468
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 25360,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 25293
      },
      {
        "x": 17832,
        "y": 25427
      }
    ]
  },
  {
    "id": "kam_strasz_w_31",
    "name": "Kamienica ul. Straszewskiego 31",
    "address": "ul. Straszewskiego 31",
    "polygon": [
      {
        "x": 17300,
        "y": 25500
      },
      {
        "x": 17840,
        "y": 25500
      },
      {
        "x": 17840,
        "y": 25740
      },
      {
        "x": 17300,
        "y": 25740
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_strasz_w_33",
    "name": "Kamienica ul. Straszewskiego 33",
    "address": "ul. Straszewskiego 33",
    "polygon": [
      {
        "x": 17300,
        "y": 25760
      },
      {
        "x": 17840,
        "y": 25760
      },
      {
        "x": 17840,
        "y": 26000
      },
      {
        "x": 17300,
        "y": 26000
      }
    ],
    "doors": [
      {
        "id": "d_kam_strasz_w_33",
        "x": 17840,
        "y": 25880,
        "width": 65,
        "angle": 1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_strasz_w_33",
        "name": "ul. Straszewskiego 33 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 17312,
            "y": 25772
          },
          {
            "x": 17828,
            "y": 25772
          },
          {
            "x": 17828,
            "y": 25988
          },
          {
            "x": 17312,
            "y": 25988
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 17570,
            "y": 25880,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 17832,
        "y": 25813
      },
      {
        "x": 17832,
        "y": 25947
      }
    ]
  },
  {
    "id": "kam_strasz_w_35",
    "name": "Kamienica ul. Straszewskiego 35",
    "address": "ul. Straszewskiego 35",
    "polygon": [
      {
        "x": 17300,
        "y": 26020
      },
      {
        "x": 17840,
        "y": 26020
      },
      {
        "x": 17840,
        "y": 26260
      },
      {
        "x": 17300,
        "y": 26260
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_2",
    "name": "Kamienica ul. Westerplatte 2",
    "address": "ul. Westerplatte 2",
    "polygon": [
      {
        "x": 30650,
        "y": 21000
      },
      {
        "x": 31190,
        "y": 21000
      },
      {
        "x": 31190,
        "y": 21240
      },
      {
        "x": 30650,
        "y": 21240
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_2",
        "x": 30650,
        "y": 21120,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_2",
        "name": "ul. Westerplatte 2 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 30662,
            "y": 21012
          },
          {
            "x": 31178,
            "y": 21012
          },
          {
            "x": 31178,
            "y": 21228
          },
          {
            "x": 30662,
            "y": 21228
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 21120,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 21053
      },
      {
        "x": 30658,
        "y": 21187
      }
    ]
  },
  {
    "id": "kam_west_e_4",
    "name": "Kamienica ul. Westerplatte 4",
    "address": "ul. Westerplatte 4",
    "polygon": [
      {
        "x": 30650,
        "y": 21260
      },
      {
        "x": 31190,
        "y": 21260
      },
      {
        "x": 31190,
        "y": 21500
      },
      {
        "x": 30650,
        "y": 21500
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_6",
    "name": "Kamienica ul. Westerplatte 6",
    "address": "ul. Westerplatte 6",
    "polygon": [
      {
        "x": 30650,
        "y": 21520
      },
      {
        "x": 31190,
        "y": 21520
      },
      {
        "x": 31190,
        "y": 21760
      },
      {
        "x": 30650,
        "y": 21760
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_6",
        "x": 30650,
        "y": 21640,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_6",
        "name": "ul. Westerplatte 6 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 30662,
            "y": 21532
          },
          {
            "x": 31178,
            "y": 21532
          },
          {
            "x": 31178,
            "y": 21748
          },
          {
            "x": 30662,
            "y": 21748
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 21640,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 21573
      },
      {
        "x": 30658,
        "y": 21707
      }
    ]
  },
  {
    "id": "kam_west_e_8",
    "name": "Kamienica ul. Westerplatte 8",
    "address": "ul. Westerplatte 8",
    "polygon": [
      {
        "x": 30650,
        "y": 21780
      },
      {
        "x": 31190,
        "y": 21780
      },
      {
        "x": 31190,
        "y": 22020
      },
      {
        "x": 30650,
        "y": 22020
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_10",
    "name": "Kamienica ul. Westerplatte 10",
    "address": "ul. Westerplatte 10",
    "polygon": [
      {
        "x": 30650,
        "y": 22040
      },
      {
        "x": 31190,
        "y": 22040
      },
      {
        "x": 31190,
        "y": 22280
      },
      {
        "x": 30650,
        "y": 22280
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_10",
        "x": 30650,
        "y": 22160,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_10",
        "name": "ul. Westerplatte 10 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 30662,
            "y": 22052
          },
          {
            "x": 31178,
            "y": 22052
          },
          {
            "x": 31178,
            "y": 22268
          },
          {
            "x": 30662,
            "y": 22268
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 22160,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 22093
      },
      {
        "x": 30658,
        "y": 22227
      }
    ]
  },
  {
    "id": "kam_west_e_12",
    "name": "Kamienica ul. Westerplatte 12",
    "address": "ul. Westerplatte 12",
    "polygon": [
      {
        "x": 30650,
        "y": 22300
      },
      {
        "x": 31190,
        "y": 22300
      },
      {
        "x": 31190,
        "y": 22540
      },
      {
        "x": 30650,
        "y": 22540
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_14",
    "name": "Kamienica ul. Westerplatte 14",
    "address": "ul. Westerplatte 14",
    "polygon": [
      {
        "x": 30650,
        "y": 22560
      },
      {
        "x": 31190,
        "y": 22560
      },
      {
        "x": 31190,
        "y": 22800
      },
      {
        "x": 30650,
        "y": 22800
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_14",
        "x": 30650,
        "y": 22680,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_14",
        "name": "ul. Westerplatte 14 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 30662,
            "y": 22572
          },
          {
            "x": 31178,
            "y": 22572
          },
          {
            "x": 31178,
            "y": 22788
          },
          {
            "x": 30662,
            "y": 22788
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 22680,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 22613
      },
      {
        "x": 30658,
        "y": 22747
      }
    ]
  },
  {
    "id": "kam_west_e_16",
    "name": "Kamienica ul. Westerplatte 16",
    "address": "ul. Westerplatte 16",
    "polygon": [
      {
        "x": 30650,
        "y": 22820
      },
      {
        "x": 31190,
        "y": 22820
      },
      {
        "x": 31190,
        "y": 23060
      },
      {
        "x": 30650,
        "y": 23060
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_18",
    "name": "Kamienica ul. Westerplatte 18",
    "address": "ul. Westerplatte 18",
    "polygon": [
      {
        "x": 30650,
        "y": 23080
      },
      {
        "x": 31190,
        "y": 23080
      },
      {
        "x": 31190,
        "y": 23320
      },
      {
        "x": 30650,
        "y": 23320
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_18",
        "x": 30650,
        "y": 23200,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_18",
        "name": "ul. Westerplatte 18 — Kawiarnia Literacka i Salonik",
        "polygon": [
          {
            "x": 30662,
            "y": 23092
          },
          {
            "x": 31178,
            "y": 23092
          },
          {
            "x": 31178,
            "y": 23308
          },
          {
            "x": 30662,
            "y": 23308
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 23200,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 23133
      },
      {
        "x": 30658,
        "y": 23267
      }
    ]
  },
  {
    "id": "kam_west_e_20",
    "name": "Kamienica ul. Westerplatte 20",
    "address": "ul. Westerplatte 20",
    "polygon": [
      {
        "x": 30650,
        "y": 23340
      },
      {
        "x": 31190,
        "y": 23340
      },
      {
        "x": 31190,
        "y": 23580
      },
      {
        "x": 30650,
        "y": 23580
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_22",
    "name": "Kamienica ul. Westerplatte 22",
    "address": "ul. Westerplatte 22",
    "polygon": [
      {
        "x": 30650,
        "y": 23600
      },
      {
        "x": 31190,
        "y": 23600
      },
      {
        "x": 31190,
        "y": 23840
      },
      {
        "x": 30650,
        "y": 23840
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_22",
        "x": 30650,
        "y": 23720,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_22",
        "name": "ul. Westerplatte 22 — Piwnica Win Małopolskich",
        "polygon": [
          {
            "x": 30662,
            "y": 23612
          },
          {
            "x": 31178,
            "y": 23612
          },
          {
            "x": 31178,
            "y": 23828
          },
          {
            "x": 30662,
            "y": 23828
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 23720,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 23653
      },
      {
        "x": 30658,
        "y": 23787
      }
    ]
  },
  {
    "id": "kam_west_e_24",
    "name": "Kamienica ul. Westerplatte 24",
    "address": "ul. Westerplatte 24",
    "polygon": [
      {
        "x": 30650,
        "y": 23860
      },
      {
        "x": 31190,
        "y": 23860
      },
      {
        "x": 31190,
        "y": 24100
      },
      {
        "x": 30650,
        "y": 24100
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_26",
    "name": "Kamienica ul. Westerplatte 26",
    "address": "ul. Westerplatte 26",
    "polygon": [
      {
        "x": 30650,
        "y": 24120
      },
      {
        "x": 31190,
        "y": 24120
      },
      {
        "x": 31190,
        "y": 24360
      },
      {
        "x": 30650,
        "y": 24360
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_26",
        "x": 30650,
        "y": 24240,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_26",
        "name": "ul. Westerplatte 26 — Sień Kupiecka i Sklepienie Gotyckie",
        "polygon": [
          {
            "x": 30662,
            "y": 24132
          },
          {
            "x": 31178,
            "y": 24132
          },
          {
            "x": 31178,
            "y": 24348
          },
          {
            "x": 30662,
            "y": 24348
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 24240,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 24173
      },
      {
        "x": 30658,
        "y": 24307
      }
    ]
  },
  {
    "id": "kam_west_e_28",
    "name": "Kamienica ul. Westerplatte 28",
    "address": "ul. Westerplatte 28",
    "polygon": [
      {
        "x": 30650,
        "y": 24380
      },
      {
        "x": 31190,
        "y": 24380
      },
      {
        "x": 31190,
        "y": 24620
      },
      {
        "x": 30650,
        "y": 24620
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  },
  {
    "id": "kam_west_e_30",
    "name": "Kamienica ul. Westerplatte 30",
    "address": "ul. Westerplatte 30",
    "polygon": [
      {
        "x": 30650,
        "y": 24640
      },
      {
        "x": 31190,
        "y": 24640
      },
      {
        "x": 31190,
        "y": 24880
      },
      {
        "x": 30650,
        "y": 24880
      }
    ],
    "doors": [
      {
        "id": "d_kam_west_e_30",
        "x": 30650,
        "y": 24760,
        "width": 65,
        "angle": -1.5707963267948966,
        "isOpen": false,
        "isLocked": false
      }
    ],
    "interiorRooms": [
      {
        "id": "r_kam_west_e_30",
        "name": "ul. Westerplatte 30 — Zabytkowa Apteka i Zielarnia",
        "polygon": [
          {
            "x": 30662,
            "y": 24652
          },
          {
            "x": 31178,
            "y": 24652
          },
          {
            "x": 31178,
            "y": 24868
          },
          {
            "x": 30662,
            "y": 24868
          }
        ],
        "furniture": [
          {
            "type": "table",
            "x": 30920,
            "y": 24760,
            "w": 48,
            "h": 48
          }
        ]
      }
    ],
    "roofColor": "#9e3b2b",
    "wallColor": "#7a2d1f",
    "canEnter": true,
    "windows": [
      {
        "x": 30658,
        "y": 24693
      },
      {
        "x": 30658,
        "y": 24827
      }
    ]
  },
  {
    "id": "kam_west_e_32",
    "name": "Kamienica ul. Westerplatte 32",
    "address": "ul. Westerplatte 32",
    "polygon": [
      {
        "x": 30650,
        "y": 24900
      },
      {
        "x": 31190,
        "y": 24900
      },
      {
        "x": 31190,
        "y": 25140
      },
      {
        "x": 30650,
        "y": 25140
      }
    ],
    "doors": [],
    "interiorRooms": [],
    "roofColor": "#d8a359",
    "wallColor": "#ad7a35",
    "canEnter": false,
    "windows": []
  }
];
