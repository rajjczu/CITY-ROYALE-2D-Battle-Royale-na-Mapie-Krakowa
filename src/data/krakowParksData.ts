import { ParkData } from '../types/game';

/**
 * KOMPLETNA BAZA PARKÓW I ZIELEŃCÓW KRAKOWA
 * Obejmuje 301 obszarów parkowych z załączonej bazy kartograficznej z ogrodzeniami i wejściami bramnymi.
 */
export const KRAKOW_PARKS: ParkData[] = [
  {
    "id": "blonia_krakowskie",
    "name": "B\u0142onia Krakowskie (Wielkie \u0141\u0105ki Miejskie \u2014 48 ha)",
    "polygon": [
      {
        "x": 500,
        "y": 15000
      },
      {
        "x": 4800,
        "y": 15000
      },
      {
        "x": 4800,
        "y": 23500
      },
      {
        "x": 500,
        "y": 23500
      }
    ],
    "gates": [
      {
        "id": "blonia_gate_n",
        "x": 2650,
        "y": 15000,
        "width": 160,
        "side": "top"
      },
      {
        "id": "blonia_gate_s",
        "x": 2650,
        "y": 23500,
        "width": 160,
        "side": "bottom"
      },
      {
        "id": "blonia_gate_e",
        "x": 4800,
        "y": 19250,
        "width": 160,
        "side": "right"
      }
    ]
  },
  {
    "id": "ogrod_botaniczny_uj",
    "name": "Ogr\u00f3d Botaniczny Uniwersytetu Jagiello\u0144skiego (Zabytkowe Arboreta)",
    "polygon": [
      {
        "x": 30500,
        "y": 15200
      },
      {
        "x": 35200,
        "y": 15200
      },
      {
        "x": 35200,
        "y": 19500
      },
      {
        "x": 30500,
        "y": 19500
      }
    ],
    "gates": [
      {
        "id": "botaniczny_gate_w",
        "x": 30500,
        "y": 17350,
        "width": 120,
        "side": "left"
      },
      {
        "id": "botaniczny_gate_s",
        "x": 32850,
        "y": 19500,
        "width": 120,
        "side": "bottom"
      }
    ]
  },
  {
    "id": "wzgorze_wawelskie_ogrody",
    "name": "Wzg\u00f3rze Wawelskie \u2014 Ogrody Kr\u00f3lewskie i Zbocza Zamkowe",
    "polygon": [
      {
        "x": 14800,
        "y": 25800
      },
      {
        "x": 20800,
        "y": 25800
      },
      {
        "x": 20800,
        "y": 29500
      },
      {
        "x": 14800,
        "y": 29500
      }
    ],
    "gates": [
      {
        "id": "wawel_ogrody_gate_n",
        "x": 17800,
        "y": 25800,
        "width": 140,
        "side": "top"
      },
      {
        "id": "wawel_ogrody_gate_s",
        "x": 17800,
        "y": 29500,
        "width": 140,
        "side": "bottom"
      },
      {
        "id": "wawel_ogrody_gate_w",
        "x": 14800,
        "y": 27650,
        "width": 120,
        "side": "left"
      },
      {
        "id": "wawel_ogrody_gate_e",
        "x": 20800,
        "y": 27650,
        "width": 120,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p1",
    "name": "Park / Skwer P1 (Stary Kleparz)",
    "polygon": [
      {
        "x": 4972,
        "y": 8122
      },
      {
        "x": 5647,
        "y": 8122
      },
      {
        "x": 5647,
        "y": 8820
      },
      {
        "x": 4972,
        "y": 8820
      }
    ],
    "gates": [
      {
        "id": "p1_g_n",
        "x": 5310,
        "y": 8122,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p1_g_s",
        "x": 5310,
        "y": 8820,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p1_g_w",
        "x": 4972,
        "y": 8471,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p1_g_e",
        "x": 5647,
        "y": 8471,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p2",
    "name": "Park / Skwer P2 (Stary Kleparz)",
    "polygon": [
      {
        "x": 5242,
        "y": 7515
      },
      {
        "x": 6074,
        "y": 7515
      },
      {
        "x": 6074,
        "y": 8033
      },
      {
        "x": 5242,
        "y": 8033
      }
    ],
    "gates": [
      {
        "id": "p2_g_n",
        "x": 5658,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p2_g_s",
        "x": 5658,
        "y": 8033,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p2_g_w",
        "x": 5242,
        "y": 7774,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p2_g_e",
        "x": 6074,
        "y": 7774,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p3",
    "name": "Park / Skwer P3 (Stary Kleparz)",
    "polygon": [
      {
        "x": 5670,
        "y": 7762
      },
      {
        "x": 6188,
        "y": 7762
      },
      {
        "x": 6188,
        "y": 8257
      },
      {
        "x": 5670,
        "y": 8257
      }
    ],
    "gates": [
      {
        "id": "p3_g_n",
        "x": 5929,
        "y": 7762,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p3_g_s",
        "x": 5929,
        "y": 8257,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p3_g_w",
        "x": 5670,
        "y": 8010,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p3_g_e",
        "x": 6188,
        "y": 8010,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p4",
    "name": "Park / Skwer P4 (Stary Kleparz)",
    "polygon": [
      {
        "x": 8528,
        "y": 8258
      },
      {
        "x": 10733,
        "y": 8258
      },
      {
        "x": 10733,
        "y": 8933
      },
      {
        "x": 8528,
        "y": 8933
      }
    ],
    "gates": [
      {
        "id": "p4_g_n",
        "x": 9630,
        "y": 8258,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p4_g_s",
        "x": 9630,
        "y": 8933,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p4_g_w",
        "x": 8528,
        "y": 8596,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p4_g_e",
        "x": 10733,
        "y": 8596,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p5",
    "name": "Park / Skwer P5 (Stary Kleparz)",
    "polygon": [
      {
        "x": 9225,
        "y": 7515
      },
      {
        "x": 9675,
        "y": 7515
      },
      {
        "x": 9675,
        "y": 7695
      },
      {
        "x": 9225,
        "y": 7695
      }
    ],
    "gates": [
      {
        "id": "p5_g_n",
        "x": 9450,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p5_g_s",
        "x": 9450,
        "y": 7695,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p5_g_w",
        "x": 9225,
        "y": 7605,
        "width": 81,
        "side": "left"
      },
      {
        "id": "p5_g_e",
        "x": 9675,
        "y": 7605,
        "width": 81,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p6",
    "name": "Park / Skwer P6 (Stary Kleparz)",
    "polygon": [
      {
        "x": 12870,
        "y": 8122
      },
      {
        "x": 13230,
        "y": 8122
      },
      {
        "x": 13230,
        "y": 9022
      },
      {
        "x": 12870,
        "y": 9022
      }
    ],
    "gates": [
      {
        "id": "p6_g_n",
        "x": 13050,
        "y": 8122,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p6_g_s",
        "x": 13050,
        "y": 9022,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p6_g_w",
        "x": 12870,
        "y": 8572,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p6_g_e",
        "x": 13230,
        "y": 8572,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p7",
    "name": "Park / Skwer P7 (Stary Kleparz)",
    "polygon": [
      {
        "x": 13208,
        "y": 8258
      },
      {
        "x": 16426,
        "y": 8258
      },
      {
        "x": 16426,
        "y": 12263
      },
      {
        "x": 13208,
        "y": 12263
      }
    ],
    "gates": [
      {
        "id": "p7_g_n",
        "x": 14817,
        "y": 8258,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p7_g_s",
        "x": 14817,
        "y": 12263,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p7_g_w",
        "x": 13208,
        "y": 10260,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p7_g_e",
        "x": 16426,
        "y": 10260,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p8",
    "name": "Park / Skwer P8 (Stary Kleparz)",
    "polygon": [
      {
        "x": 13882,
        "y": 8370
      },
      {
        "x": 14422,
        "y": 8370
      },
      {
        "x": 14422,
        "y": 9000
      },
      {
        "x": 13882,
        "y": 9000
      }
    ],
    "gates": [
      {
        "id": "p8_g_n",
        "x": 14152,
        "y": 8370,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p8_g_s",
        "x": 14152,
        "y": 9000,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p8_g_w",
        "x": 13882,
        "y": 8685,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p8_g_e",
        "x": 14422,
        "y": 8685,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p9",
    "name": "Park / Skwer P9 (Stary Kleparz)",
    "polygon": [
      {
        "x": 14062,
        "y": 7672
      },
      {
        "x": 14737,
        "y": 7672
      },
      {
        "x": 14737,
        "y": 8144
      },
      {
        "x": 14062,
        "y": 8144
      }
    ],
    "gates": [
      {
        "id": "p9_g_n",
        "x": 14400,
        "y": 7672,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p9_g_s",
        "x": 14400,
        "y": 8144,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p9_g_w",
        "x": 14062,
        "y": 7908,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p9_g_e",
        "x": 14737,
        "y": 7908,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p10",
    "name": "Park / Skwer P10 (Stary Kleparz)",
    "polygon": [
      {
        "x": 15998,
        "y": 7852
      },
      {
        "x": 19373,
        "y": 7852
      },
      {
        "x": 19373,
        "y": 10327
      },
      {
        "x": 15998,
        "y": 10327
      }
    ],
    "gates": [
      {
        "id": "p10_g_n",
        "x": 17686,
        "y": 7852,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p10_g_s",
        "x": 17686,
        "y": 10327,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p10_g_w",
        "x": 15998,
        "y": 9090,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p10_g_e",
        "x": 19373,
        "y": 9090,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p11",
    "name": "Park / Skwer P11 (Stary Kleparz)",
    "polygon": [
      {
        "x": 16920,
        "y": 7515
      },
      {
        "x": 17572,
        "y": 7515
      },
      {
        "x": 17572,
        "y": 7763
      },
      {
        "x": 16920,
        "y": 7763
      }
    ],
    "gates": [
      {
        "id": "p11_g_n",
        "x": 17246,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p11_g_s",
        "x": 17246,
        "y": 7763,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p11_g_w",
        "x": 16920,
        "y": 7639,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p11_g_e",
        "x": 17572,
        "y": 7639,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p12",
    "name": "Park / Skwer P12 (Stary Kleparz)",
    "polygon": [
      {
        "x": 19170,
        "y": 7830
      },
      {
        "x": 20340,
        "y": 7830
      },
      {
        "x": 20340,
        "y": 9900
      },
      {
        "x": 19170,
        "y": 9900
      }
    ],
    "gates": [
      {
        "id": "p12_g_n",
        "x": 19755,
        "y": 7830,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p12_g_s",
        "x": 19755,
        "y": 9900,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p12_g_w",
        "x": 19170,
        "y": 8865,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p12_g_e",
        "x": 20340,
        "y": 8865,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p13",
    "name": "Park / Skwer P13 (Stary Kleparz)",
    "polygon": [
      {
        "x": 19800,
        "y": 8235
      },
      {
        "x": 22478,
        "y": 8235
      },
      {
        "x": 22478,
        "y": 10823
      },
      {
        "x": 19800,
        "y": 10823
      }
    ],
    "gates": [
      {
        "id": "p13_g_n",
        "x": 21139,
        "y": 8235,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p13_g_s",
        "x": 21139,
        "y": 10823,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p13_g_w",
        "x": 19800,
        "y": 9529,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p13_g_e",
        "x": 22478,
        "y": 9529,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p14",
    "name": "Park / Skwer P14 (Stary Kleparz)",
    "polygon": [
      {
        "x": 23468,
        "y": 8055
      },
      {
        "x": 23828,
        "y": 8055
      },
      {
        "x": 23828,
        "y": 8460
      },
      {
        "x": 23468,
        "y": 8460
      }
    ],
    "gates": [
      {
        "id": "p14_g_n",
        "x": 23648,
        "y": 8055,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p14_g_s",
        "x": 23648,
        "y": 8460,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p14_g_w",
        "x": 23468,
        "y": 8258,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p14_g_e",
        "x": 23828,
        "y": 8258,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p15",
    "name": "Park / Skwer P15 (Stary Kleparz)",
    "polygon": [
      {
        "x": 23738,
        "y": 7515
      },
      {
        "x": 25358,
        "y": 7515
      },
      {
        "x": 25358,
        "y": 8415
      },
      {
        "x": 23738,
        "y": 8415
      }
    ],
    "gates": [
      {
        "id": "p15_g_n",
        "x": 24548,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p15_g_s",
        "x": 24548,
        "y": 8415,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p15_g_w",
        "x": 23738,
        "y": 7965,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p15_g_e",
        "x": 25358,
        "y": 7965,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p16",
    "name": "Park / Skwer P16 (Stary Kleparz)",
    "polygon": [
      {
        "x": 24795,
        "y": 7515
      },
      {
        "x": 25650,
        "y": 7515
      },
      {
        "x": 25650,
        "y": 7875
      },
      {
        "x": 24795,
        "y": 7875
      }
    ],
    "gates": [
      {
        "id": "p16_g_n",
        "x": 25222,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p16_g_s",
        "x": 25222,
        "y": 7875,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p16_g_w",
        "x": 24795,
        "y": 7695,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p16_g_e",
        "x": 25650,
        "y": 7695,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p17",
    "name": "Park / Skwer P17 (Stary Kleparz)",
    "polygon": [
      {
        "x": 26325,
        "y": 7515
      },
      {
        "x": 27000,
        "y": 7515
      },
      {
        "x": 27000,
        "y": 8707
      },
      {
        "x": 26325,
        "y": 8707
      }
    ],
    "gates": [
      {
        "id": "p17_g_n",
        "x": 26662,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p17_g_s",
        "x": 26662,
        "y": 8707,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p17_g_w",
        "x": 26325,
        "y": 8111,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p17_g_e",
        "x": 27000,
        "y": 8111,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p18",
    "name": "Park / Skwer P18 (Stary Kleparz)",
    "polygon": [
      {
        "x": 26955,
        "y": 7515
      },
      {
        "x": 27293,
        "y": 7515
      },
      {
        "x": 27293,
        "y": 8685
      },
      {
        "x": 26955,
        "y": 8685
      }
    ],
    "gates": [
      {
        "id": "p18_g_n",
        "x": 27124,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p18_g_s",
        "x": 27124,
        "y": 8685,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p18_g_w",
        "x": 26955,
        "y": 8100,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p18_g_e",
        "x": 27293,
        "y": 8100,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p19",
    "name": "Park / Skwer P19 (Stary Kleparz)",
    "polygon": [
      {
        "x": 27292,
        "y": 7740
      },
      {
        "x": 27584,
        "y": 7740
      },
      {
        "x": 27584,
        "y": 8235
      },
      {
        "x": 27292,
        "y": 8235
      }
    ],
    "gates": [
      {
        "id": "p19_g_n",
        "x": 27438,
        "y": 7740,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p19_g_s",
        "x": 27438,
        "y": 8235,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p19_g_w",
        "x": 27292,
        "y": 7988,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p19_g_e",
        "x": 27584,
        "y": 7988,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p20",
    "name": "Park / Skwer P20 (Stary Kleparz)",
    "polygon": [
      {
        "x": 28148,
        "y": 7515
      },
      {
        "x": 29183,
        "y": 7515
      },
      {
        "x": 29183,
        "y": 8055
      },
      {
        "x": 28148,
        "y": 8055
      }
    ],
    "gates": [
      {
        "id": "p20_g_n",
        "x": 28666,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p20_g_s",
        "x": 28666,
        "y": 8055,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p20_g_w",
        "x": 28148,
        "y": 7785,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p20_g_e",
        "x": 29183,
        "y": 7785,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p21",
    "name": "Park / Skwer P21 (Stary Kleparz)",
    "polygon": [
      {
        "x": 31612,
        "y": 7515
      },
      {
        "x": 32332,
        "y": 7515
      },
      {
        "x": 32332,
        "y": 7717
      },
      {
        "x": 31612,
        "y": 7717
      }
    ],
    "gates": [
      {
        "id": "p21_g_n",
        "x": 31972,
        "y": 7515,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p21_g_s",
        "x": 31972,
        "y": 7717,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p21_g_w",
        "x": 31612,
        "y": 7616,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p21_g_e",
        "x": 32332,
        "y": 7616,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p22",
    "name": "Park / Skwer P22 (Stary Kleparz)",
    "polygon": [
      {
        "x": 32130,
        "y": 8122
      },
      {
        "x": 32445,
        "y": 8122
      },
      {
        "x": 32445,
        "y": 8640
      },
      {
        "x": 32130,
        "y": 8640
      }
    ],
    "gates": [
      {
        "id": "p22_g_n",
        "x": 32288,
        "y": 8122,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p22_g_s",
        "x": 32288,
        "y": 8640,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p22_g_w",
        "x": 32130,
        "y": 8381,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p22_g_e",
        "x": 32445,
        "y": 8381,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p23",
    "name": "Park / Skwer P23 (Stary Kleparz)",
    "polygon": [
      {
        "x": 4680,
        "y": 8482
      },
      {
        "x": 4995,
        "y": 8482
      },
      {
        "x": 4995,
        "y": 8752
      },
      {
        "x": 4680,
        "y": 8752
      }
    ],
    "gates": [
      {
        "id": "p23_g_n",
        "x": 4838,
        "y": 8482,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p23_g_s",
        "x": 4838,
        "y": 8752,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p23_g_w",
        "x": 4680,
        "y": 8617,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p23_g_e",
        "x": 4995,
        "y": 8617,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p24",
    "name": "Park / Skwer P24 (Stary Kleparz)",
    "polygon": [
      {
        "x": 5872,
        "y": 8775
      },
      {
        "x": 6412,
        "y": 8775
      },
      {
        "x": 6412,
        "y": 9023
      },
      {
        "x": 5872,
        "y": 9023
      }
    ],
    "gates": [
      {
        "id": "p24_g_n",
        "x": 6142,
        "y": 8775,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p24_g_s",
        "x": 6142,
        "y": 9023,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p24_g_w",
        "x": 5872,
        "y": 8899,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p24_g_e",
        "x": 6412,
        "y": 8899,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p25",
    "name": "Park / Skwer P25 (Stary Kleparz)",
    "polygon": [
      {
        "x": 7425,
        "y": 9248
      },
      {
        "x": 8167,
        "y": 9248
      },
      {
        "x": 8167,
        "y": 9766
      },
      {
        "x": 7425,
        "y": 9766
      }
    ],
    "gates": [
      {
        "id": "p25_g_n",
        "x": 7796,
        "y": 9248,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p25_g_s",
        "x": 7796,
        "y": 9766,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p25_g_w",
        "x": 7425,
        "y": 9507,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p25_g_e",
        "x": 8167,
        "y": 9507,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p26",
    "name": "Park / Skwer P26 (Stary Kleparz)",
    "polygon": [
      {
        "x": 22478,
        "y": 9225
      },
      {
        "x": 22703,
        "y": 9225
      },
      {
        "x": 22703,
        "y": 10215
      },
      {
        "x": 22478,
        "y": 10215
      }
    ],
    "gates": [
      {
        "id": "p26_g_n",
        "x": 22590,
        "y": 9225,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p26_g_s",
        "x": 22590,
        "y": 10215,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p26_g_w",
        "x": 22478,
        "y": 9720,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p26_g_e",
        "x": 22703,
        "y": 9720,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p27",
    "name": "Park / Skwer P27 (Stary Kleparz)",
    "polygon": [
      {
        "x": 23175,
        "y": 8595
      },
      {
        "x": 23445,
        "y": 8595
      },
      {
        "x": 23445,
        "y": 9090
      },
      {
        "x": 23175,
        "y": 9090
      }
    ],
    "gates": [
      {
        "id": "p27_g_n",
        "x": 23310,
        "y": 8595,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p27_g_s",
        "x": 23310,
        "y": 9090,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p27_g_w",
        "x": 23175,
        "y": 8842,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p27_g_e",
        "x": 23445,
        "y": 8842,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p28",
    "name": "Park / Skwer P28 (Stary Kleparz)",
    "polygon": [
      {
        "x": 25988,
        "y": 8662
      },
      {
        "x": 26550,
        "y": 8662
      },
      {
        "x": 26550,
        "y": 9314
      },
      {
        "x": 25988,
        "y": 9314
      }
    ],
    "gates": [
      {
        "id": "p28_g_n",
        "x": 26269,
        "y": 8662,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p28_g_s",
        "x": 26269,
        "y": 9314,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p28_g_w",
        "x": 25988,
        "y": 8988,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p28_g_e",
        "x": 26550,
        "y": 8988,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p29",
    "name": "Park / Skwer P29 (Stary Kleparz)",
    "polygon": [
      {
        "x": 31995,
        "y": 8685
      },
      {
        "x": 32265,
        "y": 8685
      },
      {
        "x": 32265,
        "y": 9427
      },
      {
        "x": 31995,
        "y": 9427
      }
    ],
    "gates": [
      {
        "id": "p29_g_n",
        "x": 32130,
        "y": 8685,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p29_g_s",
        "x": 32130,
        "y": 9427,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p29_g_w",
        "x": 31995,
        "y": 9056,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p29_g_e",
        "x": 32265,
        "y": 9056,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p30",
    "name": "Park / Skwer P30 (Stary Kleparz)",
    "polygon": [
      {
        "x": 4905,
        "y": 9472
      },
      {
        "x": 5400,
        "y": 9472
      },
      {
        "x": 5400,
        "y": 9674
      },
      {
        "x": 4905,
        "y": 9674
      }
    ],
    "gates": [
      {
        "id": "p30_g_n",
        "x": 5152,
        "y": 9472,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p30_g_s",
        "x": 5152,
        "y": 9674,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p30_g_w",
        "x": 4905,
        "y": 9573,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p30_g_e",
        "x": 5400,
        "y": 9573,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p31",
    "name": "Park / Skwer P31 (Stary Kleparz)",
    "polygon": [
      {
        "x": 5805,
        "y": 9472
      },
      {
        "x": 6233,
        "y": 9472
      },
      {
        "x": 6233,
        "y": 9674
      },
      {
        "x": 5805,
        "y": 9674
      }
    ],
    "gates": [
      {
        "id": "p31_g_n",
        "x": 6019,
        "y": 9472,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p31_g_s",
        "x": 6019,
        "y": 9674,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p31_g_w",
        "x": 5805,
        "y": 9573,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p31_g_e",
        "x": 6233,
        "y": 9573,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p32",
    "name": "Park / Skwer P32 (Stary Kleparz)",
    "polygon": [
      {
        "x": 6322,
        "y": 9450
      },
      {
        "x": 7110,
        "y": 9450
      },
      {
        "x": 7110,
        "y": 10058
      },
      {
        "x": 6322,
        "y": 10058
      }
    ],
    "gates": [
      {
        "id": "p32_g_n",
        "x": 6716,
        "y": 9450,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p32_g_s",
        "x": 6716,
        "y": 10058,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p32_g_w",
        "x": 6322,
        "y": 9754,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p32_g_e",
        "x": 7110,
        "y": 9754,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p33",
    "name": "Park / Skwer P33 (Stary Kleparz)",
    "polygon": [
      {
        "x": 7785,
        "y": 9878
      },
      {
        "x": 8325,
        "y": 9878
      },
      {
        "x": 8325,
        "y": 10170
      },
      {
        "x": 7785,
        "y": 10170
      }
    ],
    "gates": [
      {
        "id": "p33_g_n",
        "x": 8055,
        "y": 9878,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p33_g_s",
        "x": 8055,
        "y": 10170,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p33_g_w",
        "x": 7785,
        "y": 10024,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p33_g_e",
        "x": 8325,
        "y": 10024,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p34",
    "name": "Park / Skwer P34 (Stary Kleparz)",
    "polygon": [
      {
        "x": 11745,
        "y": 10058
      },
      {
        "x": 12780,
        "y": 10058
      },
      {
        "x": 12780,
        "y": 10913
      },
      {
        "x": 11745,
        "y": 10913
      }
    ],
    "gates": [
      {
        "id": "p34_g_n",
        "x": 12262,
        "y": 10058,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p34_g_s",
        "x": 12262,
        "y": 10913,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p34_g_w",
        "x": 11745,
        "y": 10486,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p34_g_e",
        "x": 12780,
        "y": 10486,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p35",
    "name": "Park / Skwer P35 (Stary Kleparz)",
    "polygon": [
      {
        "x": 13815,
        "y": 9765
      },
      {
        "x": 14445,
        "y": 9765
      },
      {
        "x": 14445,
        "y": 10575
      },
      {
        "x": 13815,
        "y": 10575
      }
    ],
    "gates": [
      {
        "id": "p35_g_n",
        "x": 14130,
        "y": 9765,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p35_g_s",
        "x": 14130,
        "y": 10575,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p35_g_w",
        "x": 13815,
        "y": 10170,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p35_g_e",
        "x": 14445,
        "y": 10170,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p36",
    "name": "Park / Skwer P36 (Stary Kleparz)",
    "polygon": [
      {
        "x": 22702,
        "y": 9900
      },
      {
        "x": 25042,
        "y": 9900
      },
      {
        "x": 25042,
        "y": 11790
      },
      {
        "x": 22702,
        "y": 11790
      }
    ],
    "gates": [
      {
        "id": "p36_g_n",
        "x": 23872,
        "y": 9900,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p36_g_s",
        "x": 23872,
        "y": 11790,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p36_g_w",
        "x": 22702,
        "y": 10845,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p36_g_e",
        "x": 25042,
        "y": 10845,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p37",
    "name": "Park / Skwer P37 (Stary Kleparz)",
    "polygon": [
      {
        "x": 22860,
        "y": 9450
      },
      {
        "x": 23512,
        "y": 9450
      },
      {
        "x": 23512,
        "y": 10372
      },
      {
        "x": 22860,
        "y": 10372
      }
    ],
    "gates": [
      {
        "id": "p37_g_n",
        "x": 23186,
        "y": 9450,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p37_g_s",
        "x": 23186,
        "y": 10372,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p37_g_w",
        "x": 22860,
        "y": 9911,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p37_g_e",
        "x": 23512,
        "y": 9911,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p38",
    "name": "Park / Skwer P38 (Stary Kleparz)",
    "polygon": [
      {
        "x": 26550,
        "y": 10125
      },
      {
        "x": 27180,
        "y": 10125
      },
      {
        "x": 27180,
        "y": 10687
      },
      {
        "x": 26550,
        "y": 10687
      }
    ],
    "gates": [
      {
        "id": "p38_g_n",
        "x": 26865,
        "y": 10125,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p38_g_s",
        "x": 26865,
        "y": 10687,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p38_g_w",
        "x": 26550,
        "y": 10406,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p38_g_e",
        "x": 27180,
        "y": 10406,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p39",
    "name": "Park / Skwer P39 (Stary Kleparz)",
    "polygon": [
      {
        "x": 27202,
        "y": 9472
      },
      {
        "x": 27404,
        "y": 9472
      },
      {
        "x": 27404,
        "y": 9787
      },
      {
        "x": 27202,
        "y": 9787
      }
    ],
    "gates": [
      {
        "id": "p39_g_n",
        "x": 27303,
        "y": 9472,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p39_g_s",
        "x": 27303,
        "y": 9787,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p39_g_w",
        "x": 27202,
        "y": 9630,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p39_g_e",
        "x": 27404,
        "y": 9630,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p40",
    "name": "Park / Skwer P40 (Stary Kleparz)",
    "polygon": [
      {
        "x": 29408,
        "y": 9450
      },
      {
        "x": 29746,
        "y": 9450
      },
      {
        "x": 29746,
        "y": 9990
      },
      {
        "x": 29408,
        "y": 9990
      }
    ],
    "gates": [
      {
        "id": "p40_g_n",
        "x": 29577,
        "y": 9450,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p40_g_s",
        "x": 29577,
        "y": 9990,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p40_g_w",
        "x": 29408,
        "y": 9720,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p40_g_e",
        "x": 29746,
        "y": 9720,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p41",
    "name": "Park / Skwer P41 (Stary Kleparz)",
    "polygon": [
      {
        "x": 29790,
        "y": 9855
      },
      {
        "x": 31185,
        "y": 9855
      },
      {
        "x": 31185,
        "y": 10755
      },
      {
        "x": 29790,
        "y": 10755
      }
    ],
    "gates": [
      {
        "id": "p41_g_n",
        "x": 30488,
        "y": 9855,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p41_g_s",
        "x": 30488,
        "y": 10755,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p41_g_w",
        "x": 29790,
        "y": 10305,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p41_g_e",
        "x": 31185,
        "y": 10305,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p42",
    "name": "Park / Skwer P42 (Stary Kleparz)",
    "polygon": [
      {
        "x": 31050,
        "y": 9585
      },
      {
        "x": 31275,
        "y": 9585
      },
      {
        "x": 31275,
        "y": 10013
      },
      {
        "x": 31050,
        "y": 10013
      }
    ],
    "gates": [
      {
        "id": "p42_g_n",
        "x": 31162,
        "y": 9585,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p42_g_s",
        "x": 31162,
        "y": 10013,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p42_g_w",
        "x": 31050,
        "y": 9799,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p42_g_e",
        "x": 31275,
        "y": 9799,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p43",
    "name": "Park / Skwer P43 (Stary Kleparz)",
    "polygon": [
      {
        "x": 4950,
        "y": 10598
      },
      {
        "x": 5670,
        "y": 10598
      },
      {
        "x": 5670,
        "y": 10846
      },
      {
        "x": 4950,
        "y": 10846
      }
    ],
    "gates": [
      {
        "id": "p43_g_n",
        "x": 5310,
        "y": 10598,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p43_g_s",
        "x": 5310,
        "y": 10846,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p43_g_w",
        "x": 4950,
        "y": 10722,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p43_g_e",
        "x": 5670,
        "y": 10722,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p44",
    "name": "Park / Skwer P44 (Stary Kleparz)",
    "polygon": [
      {
        "x": 18090,
        "y": 10755
      },
      {
        "x": 18630,
        "y": 10755
      },
      {
        "x": 18630,
        "y": 11047
      },
      {
        "x": 18090,
        "y": 11047
      }
    ],
    "gates": [
      {
        "id": "p44_g_n",
        "x": 18360,
        "y": 10755,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p44_g_s",
        "x": 18360,
        "y": 11047,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p44_g_w",
        "x": 18090,
        "y": 10901,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p44_g_e",
        "x": 18630,
        "y": 10901,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p45",
    "name": "Park / Skwer P45 (Stary Kleparz)",
    "polygon": [
      {
        "x": 24795,
        "y": 10688
      },
      {
        "x": 26033,
        "y": 10688
      },
      {
        "x": 26033,
        "y": 11656
      },
      {
        "x": 24795,
        "y": 11656
      }
    ],
    "gates": [
      {
        "id": "p45_g_n",
        "x": 25414,
        "y": 10688,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p45_g_s",
        "x": 25414,
        "y": 11656,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p45_g_w",
        "x": 24795,
        "y": 11172,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p45_g_e",
        "x": 26033,
        "y": 11172,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p46",
    "name": "Park / Skwer P46 (Stary Kleparz)",
    "polygon": [
      {
        "x": 29272,
        "y": 10688
      },
      {
        "x": 29542,
        "y": 10688
      },
      {
        "x": 29542,
        "y": 11003
      },
      {
        "x": 29272,
        "y": 11003
      }
    ],
    "gates": [
      {
        "id": "p46_g_n",
        "x": 29407,
        "y": 10688,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p46_g_s",
        "x": 29407,
        "y": 11003,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p46_g_w",
        "x": 29272,
        "y": 10846,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p46_g_e",
        "x": 29542,
        "y": 10846,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p47",
    "name": "Park / Skwer P47 (Stary Kleparz)",
    "polygon": [
      {
        "x": 29340,
        "y": 10238
      },
      {
        "x": 29610,
        "y": 10238
      },
      {
        "x": 29610,
        "y": 10598
      },
      {
        "x": 29340,
        "y": 10598
      }
    ],
    "gates": [
      {
        "id": "p47_g_n",
        "x": 29475,
        "y": 10238,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p47_g_s",
        "x": 29475,
        "y": 10598,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p47_g_w",
        "x": 29340,
        "y": 10418,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p47_g_e",
        "x": 29610,
        "y": 10418,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p48",
    "name": "Park / Skwer P48 (Stary Kleparz)",
    "polygon": [
      {
        "x": 6840,
        "y": 11902
      },
      {
        "x": 7245,
        "y": 11902
      },
      {
        "x": 7245,
        "y": 12104
      },
      {
        "x": 6840,
        "y": 12104
      }
    ],
    "gates": [
      {
        "id": "p48_g_n",
        "x": 7042,
        "y": 11902,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p48_g_s",
        "x": 7042,
        "y": 12104,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p48_g_w",
        "x": 6840,
        "y": 12003,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p48_g_e",
        "x": 7245,
        "y": 12003,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p49",
    "name": "Park / Skwer P49 (Stary Kleparz)",
    "polygon": [
      {
        "x": 11002,
        "y": 11340
      },
      {
        "x": 11452,
        "y": 11340
      },
      {
        "x": 11452,
        "y": 11700
      },
      {
        "x": 11002,
        "y": 11700
      }
    ],
    "gates": [
      {
        "id": "p49_g_n",
        "x": 11227,
        "y": 11340,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p49_g_s",
        "x": 11227,
        "y": 11700,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p49_g_w",
        "x": 11002,
        "y": 11520,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p49_g_e",
        "x": 11452,
        "y": 11520,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p50",
    "name": "Park / Skwer P50 (Stary Kleparz)",
    "polygon": [
      {
        "x": 12622,
        "y": 11925
      },
      {
        "x": 13927,
        "y": 11925
      },
      {
        "x": 13927,
        "y": 12960
      },
      {
        "x": 12622,
        "y": 12960
      }
    ],
    "gates": [
      {
        "id": "p50_g_n",
        "x": 13274,
        "y": 11925,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p50_g_s",
        "x": 13274,
        "y": 12960,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p50_g_w",
        "x": 12622,
        "y": 12442,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p50_g_e",
        "x": 13927,
        "y": 12442,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p51",
    "name": "Park / Skwer P51 (Stary Kleparz)",
    "polygon": [
      {
        "x": 16830,
        "y": 11272
      },
      {
        "x": 17392,
        "y": 11272
      },
      {
        "x": 17392,
        "y": 11722
      },
      {
        "x": 16830,
        "y": 11722
      }
    ],
    "gates": [
      {
        "id": "p51_g_n",
        "x": 17111,
        "y": 11272,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p51_g_s",
        "x": 17111,
        "y": 11722,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p51_g_w",
        "x": 16830,
        "y": 11497,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p51_g_e",
        "x": 17392,
        "y": 11497,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p52",
    "name": "Park / Skwer P52 (Stary Kleparz)",
    "polygon": [
      {
        "x": 24368,
        "y": 11452
      },
      {
        "x": 26460,
        "y": 11452
      },
      {
        "x": 26460,
        "y": 13432
      },
      {
        "x": 24368,
        "y": 13432
      }
    ],
    "gates": [
      {
        "id": "p52_g_n",
        "x": 25414,
        "y": 11452,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p52_g_s",
        "x": 25414,
        "y": 13432,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p52_g_w",
        "x": 24368,
        "y": 12442,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p52_g_e",
        "x": 26460,
        "y": 12442,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p53",
    "name": "Park / Skwer P53 (Stary Kleparz)",
    "polygon": [
      {
        "x": 26078,
        "y": 11182
      },
      {
        "x": 27676,
        "y": 11182
      },
      {
        "x": 27676,
        "y": 12374
      },
      {
        "x": 26078,
        "y": 12374
      }
    ],
    "gates": [
      {
        "id": "p53_g_n",
        "x": 26877,
        "y": 11182,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p53_g_s",
        "x": 26877,
        "y": 12374,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p53_g_w",
        "x": 26078,
        "y": 11778,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p53_g_e",
        "x": 27676,
        "y": 11778,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p54",
    "name": "Park / Skwer P54 (Stary Kleparz)",
    "polygon": [
      {
        "x": 29115,
        "y": 11520
      },
      {
        "x": 29475,
        "y": 11520
      },
      {
        "x": 29475,
        "y": 11902
      },
      {
        "x": 29115,
        "y": 11902
      }
    ],
    "gates": [
      {
        "id": "p54_g_n",
        "x": 29295,
        "y": 11520,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p54_g_s",
        "x": 29295,
        "y": 11902,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p54_g_w",
        "x": 29115,
        "y": 11711,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p54_g_e",
        "x": 29475,
        "y": 11711,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p55",
    "name": "Park / Skwer P55 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5108,
        "y": 12352
      },
      {
        "x": 5288,
        "y": 12352
      },
      {
        "x": 5288,
        "y": 13297
      },
      {
        "x": 5108,
        "y": 13297
      }
    ],
    "gates": [
      {
        "id": "p55_g_n",
        "x": 5198,
        "y": 12352,
        "width": 81,
        "side": "top"
      },
      {
        "id": "p55_g_s",
        "x": 5198,
        "y": 13297,
        "width": 81,
        "side": "bottom"
      },
      {
        "id": "p55_g_w",
        "x": 5108,
        "y": 12824,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p55_g_e",
        "x": 5288,
        "y": 12824,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p56",
    "name": "Park / Skwer P56 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5310,
        "y": 12848
      },
      {
        "x": 5918,
        "y": 12848
      },
      {
        "x": 5918,
        "y": 13298
      },
      {
        "x": 5310,
        "y": 13298
      }
    ],
    "gates": [
      {
        "id": "p56_g_n",
        "x": 5614,
        "y": 12848,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p56_g_s",
        "x": 5614,
        "y": 13298,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p56_g_w",
        "x": 5310,
        "y": 13073,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p56_g_e",
        "x": 5918,
        "y": 13073,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p57",
    "name": "Park / Skwer P57 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6278,
        "y": 12488
      },
      {
        "x": 6660,
        "y": 12488
      },
      {
        "x": 6660,
        "y": 12826
      },
      {
        "x": 6278,
        "y": 12826
      }
    ],
    "gates": [
      {
        "id": "p57_g_n",
        "x": 6469,
        "y": 12488,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p57_g_s",
        "x": 6469,
        "y": 12826,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p57_g_w",
        "x": 6278,
        "y": 12657,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p57_g_e",
        "x": 6660,
        "y": 12657,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p58",
    "name": "Park / Skwer P58 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 12060,
        "y": 12555
      },
      {
        "x": 13365,
        "y": 12555
      },
      {
        "x": 13365,
        "y": 14107
      },
      {
        "x": 12060,
        "y": 14107
      }
    ],
    "gates": [
      {
        "id": "p58_g_n",
        "x": 12712,
        "y": 12555,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p58_g_s",
        "x": 12712,
        "y": 14107,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p58_g_w",
        "x": 12060,
        "y": 13331,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p58_g_e",
        "x": 13365,
        "y": 13331,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p59",
    "name": "Park / Skwer P59 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 17348,
        "y": 12465
      },
      {
        "x": 17708,
        "y": 12465
      },
      {
        "x": 17708,
        "y": 12915
      },
      {
        "x": 17348,
        "y": 12915
      }
    ],
    "gates": [
      {
        "id": "p59_g_n",
        "x": 17528,
        "y": 12465,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p59_g_s",
        "x": 17528,
        "y": 12915,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p59_g_w",
        "x": 17348,
        "y": 12690,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p59_g_e",
        "x": 17708,
        "y": 12690,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p60",
    "name": "Park / Skwer P60 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 17978,
        "y": 12578
      },
      {
        "x": 18450,
        "y": 12578
      },
      {
        "x": 18450,
        "y": 13410
      },
      {
        "x": 17978,
        "y": 13410
      }
    ],
    "gates": [
      {
        "id": "p60_g_n",
        "x": 18214,
        "y": 12578,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p60_g_s",
        "x": 18214,
        "y": 13410,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p60_g_w",
        "x": 17978,
        "y": 12994,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p60_g_e",
        "x": 18450,
        "y": 12994,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p61",
    "name": "Park / Skwer P61 (Stary Kleparz)",
    "polygon": [
      {
        "x": 20880,
        "y": 12150
      },
      {
        "x": 21195,
        "y": 12150
      },
      {
        "x": 21195,
        "y": 12578
      },
      {
        "x": 20880,
        "y": 12578
      }
    ],
    "gates": [
      {
        "id": "p61_g_n",
        "x": 21038,
        "y": 12150,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p61_g_s",
        "x": 21038,
        "y": 12578,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p61_g_w",
        "x": 20880,
        "y": 12364,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p61_g_e",
        "x": 21195,
        "y": 12364,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p62",
    "name": "Park / Skwer P62 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 22455,
        "y": 12308
      },
      {
        "x": 22837,
        "y": 12308
      },
      {
        "x": 22837,
        "y": 12758
      },
      {
        "x": 22455,
        "y": 12758
      }
    ],
    "gates": [
      {
        "id": "p62_g_n",
        "x": 22646,
        "y": 12308,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p62_g_s",
        "x": 22646,
        "y": 12758,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p62_g_w",
        "x": 22455,
        "y": 12533,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p62_g_e",
        "x": 22837,
        "y": 12533,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p63",
    "name": "Park / Skwer P63 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 23872,
        "y": 12645
      },
      {
        "x": 24457,
        "y": 12645
      },
      {
        "x": 24457,
        "y": 13770
      },
      {
        "x": 23872,
        "y": 13770
      }
    ],
    "gates": [
      {
        "id": "p63_g_n",
        "x": 24164,
        "y": 12645,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p63_g_s",
        "x": 24164,
        "y": 13770,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p63_g_w",
        "x": 23872,
        "y": 13208,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p63_g_e",
        "x": 24457,
        "y": 13208,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p64",
    "name": "Park / Skwer P64 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26235,
        "y": 12802
      },
      {
        "x": 27090,
        "y": 12802
      },
      {
        "x": 27090,
        "y": 13792
      },
      {
        "x": 26235,
        "y": 13792
      }
    ],
    "gates": [
      {
        "id": "p64_g_n",
        "x": 26662,
        "y": 12802,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p64_g_s",
        "x": 26662,
        "y": 13792,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p64_g_w",
        "x": 26235,
        "y": 13297,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p64_g_e",
        "x": 27090,
        "y": 13297,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p65",
    "name": "Park / Skwer P65 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26460,
        "y": 12218
      },
      {
        "x": 28598,
        "y": 12218
      },
      {
        "x": 28598,
        "y": 19238
      },
      {
        "x": 26460,
        "y": 19238
      }
    ],
    "gates": [
      {
        "id": "p65_g_n",
        "x": 27529,
        "y": 12218,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p65_g_s",
        "x": 27529,
        "y": 19238,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p65_g_w",
        "x": 26460,
        "y": 15728,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p65_g_e",
        "x": 28598,
        "y": 15728,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p66",
    "name": "Park / Skwer P66 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 28170,
        "y": 12870
      },
      {
        "x": 28440,
        "y": 12870
      },
      {
        "x": 28440,
        "y": 13950
      },
      {
        "x": 28170,
        "y": 13950
      }
    ],
    "gates": [
      {
        "id": "p66_g_n",
        "x": 28305,
        "y": 12870,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p66_g_s",
        "x": 28305,
        "y": 13950,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p66_g_w",
        "x": 28170,
        "y": 13410,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p66_g_e",
        "x": 28440,
        "y": 13410,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p67",
    "name": "Park / Skwer P67 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 29385,
        "y": 12892
      },
      {
        "x": 29745,
        "y": 12892
      },
      {
        "x": 29745,
        "y": 13184
      },
      {
        "x": 29385,
        "y": 13184
      }
    ],
    "gates": [
      {
        "id": "p67_g_n",
        "x": 29565,
        "y": 12892,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p67_g_s",
        "x": 29565,
        "y": 13184,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p67_g_w",
        "x": 29385,
        "y": 13038,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p67_g_e",
        "x": 29745,
        "y": 13038,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p68",
    "name": "Park / Skwer P68 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5085,
        "y": 13388
      },
      {
        "x": 7155,
        "y": 13388
      },
      {
        "x": 7155,
        "y": 13613
      },
      {
        "x": 5085,
        "y": 13613
      }
    ],
    "gates": [
      {
        "id": "p68_g_n",
        "x": 6120,
        "y": 13388,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p68_g_s",
        "x": 6120,
        "y": 13613,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p68_g_w",
        "x": 5085,
        "y": 13500,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p68_g_e",
        "x": 7155,
        "y": 13500,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p69",
    "name": "Park / Skwer P69 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5198,
        "y": 13748
      },
      {
        "x": 5896,
        "y": 13748
      },
      {
        "x": 5896,
        "y": 14468
      },
      {
        "x": 5198,
        "y": 14468
      }
    ],
    "gates": [
      {
        "id": "p69_g_n",
        "x": 5547,
        "y": 13748,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p69_g_s",
        "x": 5547,
        "y": 14468,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p69_g_w",
        "x": 5198,
        "y": 14108,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p69_g_e",
        "x": 5896,
        "y": 14108,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p70",
    "name": "Park / Skwer P70 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6705,
        "y": 13702
      },
      {
        "x": 6863,
        "y": 13702
      },
      {
        "x": 6863,
        "y": 14602
      },
      {
        "x": 6705,
        "y": 14602
      }
    ],
    "gates": [
      {
        "id": "p70_g_n",
        "x": 6784,
        "y": 13702,
        "width": 71,
        "side": "top"
      },
      {
        "id": "p70_g_s",
        "x": 6784,
        "y": 14602,
        "width": 71,
        "side": "bottom"
      },
      {
        "id": "p70_g_w",
        "x": 6705,
        "y": 14152,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p70_g_e",
        "x": 6863,
        "y": 14152,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p71",
    "name": "Park / Skwer P71 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6930,
        "y": 13702
      },
      {
        "x": 7582,
        "y": 13702
      },
      {
        "x": 7582,
        "y": 14602
      },
      {
        "x": 6930,
        "y": 14602
      }
    ],
    "gates": [
      {
        "id": "p71_g_n",
        "x": 7256,
        "y": 13702,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p71_g_s",
        "x": 7256,
        "y": 14602,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p71_g_w",
        "x": 6930,
        "y": 14152,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p71_g_e",
        "x": 7582,
        "y": 14152,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p72",
    "name": "Park / Skwer P72 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 9158,
        "y": 13455
      },
      {
        "x": 10823,
        "y": 13455
      },
      {
        "x": 10823,
        "y": 13613
      },
      {
        "x": 9158,
        "y": 13613
      }
    ],
    "gates": [
      {
        "id": "p72_g_n",
        "x": 9990,
        "y": 13455,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p72_g_s",
        "x": 9990,
        "y": 13613,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p72_g_w",
        "x": 9158,
        "y": 13534,
        "width": 71,
        "side": "left"
      },
      {
        "id": "p72_g_e",
        "x": 10823,
        "y": 13534,
        "width": 71,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p73",
    "name": "Park / Skwer P73 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 15592,
        "y": 13072
      },
      {
        "x": 16087,
        "y": 13072
      },
      {
        "x": 16087,
        "y": 14107
      },
      {
        "x": 15592,
        "y": 14107
      }
    ],
    "gates": [
      {
        "id": "p73_g_n",
        "x": 15840,
        "y": 13072,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p73_g_s",
        "x": 15840,
        "y": 14107,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p73_g_w",
        "x": 15592,
        "y": 13590,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p73_g_e",
        "x": 16087,
        "y": 13590,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p74",
    "name": "Park / Skwer P74 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24772,
        "y": 13568
      },
      {
        "x": 25694,
        "y": 13568
      },
      {
        "x": 25694,
        "y": 14490
      },
      {
        "x": 24772,
        "y": 14490
      }
    ],
    "gates": [
      {
        "id": "p74_g_n",
        "x": 25233,
        "y": 13568,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p74_g_s",
        "x": 25233,
        "y": 14490,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p74_g_w",
        "x": 24772,
        "y": 14029,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p74_g_e",
        "x": 25694,
        "y": 14029,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p75",
    "name": "Park / Skwer P75 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 30825,
        "y": 13725
      },
      {
        "x": 31365,
        "y": 13725
      },
      {
        "x": 31365,
        "y": 13973
      },
      {
        "x": 30825,
        "y": 13973
      }
    ],
    "gates": [
      {
        "id": "p75_g_n",
        "x": 31095,
        "y": 13725,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p75_g_s",
        "x": 31095,
        "y": 13973,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p75_g_w",
        "x": 30825,
        "y": 13849,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p75_g_e",
        "x": 31365,
        "y": 13849,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p76",
    "name": "Park / Skwer P76 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 31905,
        "y": 13185
      },
      {
        "x": 32423,
        "y": 13185
      },
      {
        "x": 32423,
        "y": 13883
      },
      {
        "x": 31905,
        "y": 13883
      }
    ],
    "gates": [
      {
        "id": "p76_g_n",
        "x": 32164,
        "y": 13185,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p76_g_s",
        "x": 32164,
        "y": 13883,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p76_g_w",
        "x": 31905,
        "y": 13534,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p76_g_e",
        "x": 32423,
        "y": 13534,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p77",
    "name": "Park / Skwer P77 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 10755,
        "y": 13995
      },
      {
        "x": 12397,
        "y": 13995
      },
      {
        "x": 12397,
        "y": 16087
      },
      {
        "x": 10755,
        "y": 16087
      }
    ],
    "gates": [
      {
        "id": "p77_g_n",
        "x": 11576,
        "y": 13995,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p77_g_s",
        "x": 11576,
        "y": 16087,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p77_g_w",
        "x": 10755,
        "y": 15041,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p77_g_e",
        "x": 12397,
        "y": 15041,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p78",
    "name": "Park / Skwer P78 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 25672,
        "y": 14310
      },
      {
        "x": 26347,
        "y": 14310
      },
      {
        "x": 26347,
        "y": 14850
      },
      {
        "x": 25672,
        "y": 14850
      }
    ],
    "gates": [
      {
        "id": "p78_g_n",
        "x": 26010,
        "y": 14310,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p78_g_s",
        "x": 26010,
        "y": 14850,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p78_g_w",
        "x": 25672,
        "y": 14580,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p78_g_e",
        "x": 26347,
        "y": 14580,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p79",
    "name": "Park / Skwer P79 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26032,
        "y": 14108
      },
      {
        "x": 27382,
        "y": 14108
      },
      {
        "x": 27382,
        "y": 16200
      },
      {
        "x": 26032,
        "y": 16200
      }
    ],
    "gates": [
      {
        "id": "p79_g_n",
        "x": 26707,
        "y": 14108,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p79_g_s",
        "x": 26707,
        "y": 16200,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p79_g_w",
        "x": 26032,
        "y": 15154,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p79_g_e",
        "x": 27382,
        "y": 15154,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p80",
    "name": "Park / Skwer P80 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 4590,
        "y": 14872
      },
      {
        "x": 4928,
        "y": 14872
      },
      {
        "x": 4928,
        "y": 15187
      },
      {
        "x": 4590,
        "y": 15187
      }
    ],
    "gates": [
      {
        "id": "p80_g_n",
        "x": 4759,
        "y": 14872,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p80_g_s",
        "x": 4759,
        "y": 15187,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p80_g_w",
        "x": 4590,
        "y": 15030,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p80_g_e",
        "x": 4928,
        "y": 15030,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p81",
    "name": "Park / Skwer P81 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5198,
        "y": 15458
      },
      {
        "x": 5648,
        "y": 15458
      },
      {
        "x": 5648,
        "y": 15706
      },
      {
        "x": 5198,
        "y": 15706
      }
    ],
    "gates": [
      {
        "id": "p81_g_n",
        "x": 5423,
        "y": 15458,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p81_g_s",
        "x": 5423,
        "y": 15706,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p81_g_w",
        "x": 5198,
        "y": 15582,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p81_g_e",
        "x": 5648,
        "y": 15582,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p82",
    "name": "Park / Skwer P82 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6165,
        "y": 15255
      },
      {
        "x": 6593,
        "y": 15255
      },
      {
        "x": 6593,
        "y": 15997
      },
      {
        "x": 6165,
        "y": 15997
      }
    ],
    "gates": [
      {
        "id": "p82_g_n",
        "x": 6379,
        "y": 15255,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p82_g_s",
        "x": 6379,
        "y": 15997,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p82_g_w",
        "x": 6165,
        "y": 15626,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p82_g_e",
        "x": 6593,
        "y": 15626,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p83",
    "name": "Park / Skwer P83 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6458,
        "y": 15165
      },
      {
        "x": 6908,
        "y": 15165
      },
      {
        "x": 6908,
        "y": 15615
      },
      {
        "x": 6458,
        "y": 15615
      }
    ],
    "gates": [
      {
        "id": "p83_g_n",
        "x": 6683,
        "y": 15165,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p83_g_s",
        "x": 6683,
        "y": 15615,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p83_g_w",
        "x": 6458,
        "y": 15390,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p83_g_e",
        "x": 6908,
        "y": 15390,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p84",
    "name": "Park / Skwer P84 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7988,
        "y": 15052
      },
      {
        "x": 8506,
        "y": 15052
      },
      {
        "x": 8506,
        "y": 15412
      },
      {
        "x": 7988,
        "y": 15412
      }
    ],
    "gates": [
      {
        "id": "p84_g_n",
        "x": 8247,
        "y": 15052,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p84_g_s",
        "x": 8247,
        "y": 15412,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p84_g_w",
        "x": 7988,
        "y": 15232,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p84_g_e",
        "x": 8506,
        "y": 15232,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p85",
    "name": "Park / Skwer P85 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24660,
        "y": 15030
      },
      {
        "x": 25132,
        "y": 15030
      },
      {
        "x": 25132,
        "y": 15480
      },
      {
        "x": 24660,
        "y": 15480
      }
    ],
    "gates": [
      {
        "id": "p85_g_n",
        "x": 24896,
        "y": 15030,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p85_g_s",
        "x": 24896,
        "y": 15480,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p85_g_w",
        "x": 24660,
        "y": 15255,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p85_g_e",
        "x": 25132,
        "y": 15255,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p86",
    "name": "Park / Skwer P86 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26708,
        "y": 14828
      },
      {
        "x": 27496,
        "y": 14828
      },
      {
        "x": 27496,
        "y": 16538
      },
      {
        "x": 26708,
        "y": 16538
      }
    ],
    "gates": [
      {
        "id": "p86_g_n",
        "x": 27102,
        "y": 14828,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p86_g_s",
        "x": 27102,
        "y": 16538,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p86_g_w",
        "x": 26708,
        "y": 15683,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p86_g_e",
        "x": 27496,
        "y": 15683,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p87",
    "name": "Park / Skwer P87 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 28238,
        "y": 14918
      },
      {
        "x": 28553,
        "y": 14918
      },
      {
        "x": 28553,
        "y": 15346
      },
      {
        "x": 28238,
        "y": 15346
      }
    ],
    "gates": [
      {
        "id": "p87_g_n",
        "x": 28396,
        "y": 14918,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p87_g_s",
        "x": 28396,
        "y": 15346,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p87_g_w",
        "x": 28238,
        "y": 15132,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p87_g_e",
        "x": 28553,
        "y": 15132,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p88",
    "name": "Park / Skwer P88 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 10282,
        "y": 15772
      },
      {
        "x": 11722,
        "y": 15772
      },
      {
        "x": 11722,
        "y": 17054
      },
      {
        "x": 10282,
        "y": 17054
      }
    ],
    "gates": [
      {
        "id": "p88_g_n",
        "x": 11002,
        "y": 15772,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p88_g_s",
        "x": 11002,
        "y": 17054,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p88_g_w",
        "x": 10282,
        "y": 16413,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p88_g_e",
        "x": 11722,
        "y": 16413,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p89",
    "name": "Park / Skwer P89 (Stare Miasto \u2014 Rynek G\u0142\u00f3wny)",
    "polygon": [
      {
        "x": 17482,
        "y": 15750
      },
      {
        "x": 17887,
        "y": 15750
      },
      {
        "x": 17887,
        "y": 16222
      },
      {
        "x": 17482,
        "y": 16222
      }
    ],
    "gates": [
      {
        "id": "p89_g_n",
        "x": 17684,
        "y": 15750,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p89_g_s",
        "x": 17684,
        "y": 16222,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p89_g_w",
        "x": 17482,
        "y": 15986,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p89_g_e",
        "x": 17887,
        "y": 15986,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p90",
    "name": "Park / Skwer P90 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6008,
        "y": 16695
      },
      {
        "x": 7696,
        "y": 16695
      },
      {
        "x": 7696,
        "y": 18607
      },
      {
        "x": 6008,
        "y": 18607
      }
    ],
    "gates": [
      {
        "id": "p90_g_n",
        "x": 6852,
        "y": 16695,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p90_g_s",
        "x": 6852,
        "y": 18607,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p90_g_w",
        "x": 6008,
        "y": 17651,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p90_g_e",
        "x": 7696,
        "y": 17651,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p91",
    "name": "Park / Skwer P91 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7718,
        "y": 17235
      },
      {
        "x": 8056,
        "y": 17235
      },
      {
        "x": 8056,
        "y": 18517
      },
      {
        "x": 7718,
        "y": 18517
      }
    ],
    "gates": [
      {
        "id": "p91_g_n",
        "x": 7887,
        "y": 17235,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p91_g_s",
        "x": 7887,
        "y": 18517,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p91_g_w",
        "x": 7718,
        "y": 17876,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p91_g_e",
        "x": 8056,
        "y": 17876,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p92",
    "name": "Park / Skwer P92 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 10260,
        "y": 17010
      },
      {
        "x": 12442,
        "y": 17010
      },
      {
        "x": 12442,
        "y": 18990
      },
      {
        "x": 10260,
        "y": 18990
      }
    ],
    "gates": [
      {
        "id": "p92_g_n",
        "x": 11351,
        "y": 17010,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p92_g_s",
        "x": 11351,
        "y": 18990,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p92_g_w",
        "x": 10260,
        "y": 18000,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p92_g_e",
        "x": 12442,
        "y": 18000,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p93",
    "name": "Park / Skwer P93 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24930,
        "y": 16718
      },
      {
        "x": 25290,
        "y": 16718
      },
      {
        "x": 25290,
        "y": 17100
      },
      {
        "x": 24930,
        "y": 17100
      }
    ],
    "gates": [
      {
        "id": "p93_g_n",
        "x": 25110,
        "y": 16718,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p93_g_s",
        "x": 25110,
        "y": 17100,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p93_g_w",
        "x": 24930,
        "y": 16909,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p93_g_e",
        "x": 25290,
        "y": 16909,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p94",
    "name": "Park / Skwer P94 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26370,
        "y": 17302
      },
      {
        "x": 26752,
        "y": 17302
      },
      {
        "x": 26752,
        "y": 17707
      },
      {
        "x": 26370,
        "y": 17707
      }
    ],
    "gates": [
      {
        "id": "p94_g_n",
        "x": 26561,
        "y": 17302,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p94_g_s",
        "x": 26561,
        "y": 17707,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p94_g_w",
        "x": 26370,
        "y": 17504,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p94_g_e",
        "x": 26752,
        "y": 17504,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p95",
    "name": "Park / Skwer P95 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 32580,
        "y": 16920
      },
      {
        "x": 32805,
        "y": 16920
      },
      {
        "x": 32805,
        "y": 17258
      },
      {
        "x": 32580,
        "y": 17258
      }
    ],
    "gates": [
      {
        "id": "p95_g_n",
        "x": 32692,
        "y": 16920,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p95_g_s",
        "x": 32692,
        "y": 17258,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p95_g_w",
        "x": 32580,
        "y": 17089,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p95_g_e",
        "x": 32805,
        "y": 17089,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p96",
    "name": "Park / Skwer P96 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 11318,
        "y": 18225
      },
      {
        "x": 11746,
        "y": 18225
      },
      {
        "x": 11746,
        "y": 18697
      },
      {
        "x": 11318,
        "y": 18697
      }
    ],
    "gates": [
      {
        "id": "p96_g_n",
        "x": 11532,
        "y": 18225,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p96_g_s",
        "x": 11532,
        "y": 18697,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p96_g_w",
        "x": 11318,
        "y": 18461,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p96_g_e",
        "x": 11746,
        "y": 18461,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p97",
    "name": "Park / Skwer P97 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 13275,
        "y": 18225
      },
      {
        "x": 13860,
        "y": 18225
      },
      {
        "x": 13860,
        "y": 19103
      },
      {
        "x": 13275,
        "y": 19103
      }
    ],
    "gates": [
      {
        "id": "p97_g_n",
        "x": 13568,
        "y": 18225,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p97_g_s",
        "x": 13568,
        "y": 19103,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p97_g_w",
        "x": 13275,
        "y": 18664,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p97_g_e",
        "x": 13860,
        "y": 18664,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p98",
    "name": "Park / Skwer P98 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 28958,
        "y": 17528
      },
      {
        "x": 31658,
        "y": 17528
      },
      {
        "x": 31658,
        "y": 19710
      },
      {
        "x": 28958,
        "y": 19710
      }
    ],
    "gates": [
      {
        "id": "p98_g_n",
        "x": 30308,
        "y": 17528,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p98_g_s",
        "x": 30308,
        "y": 19710,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p98_g_w",
        "x": 28958,
        "y": 18619,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p98_g_e",
        "x": 31658,
        "y": 18619,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p99",
    "name": "Park / Skwer P99 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 4680,
        "y": 19148
      },
      {
        "x": 5085,
        "y": 19148
      },
      {
        "x": 5085,
        "y": 20160
      },
      {
        "x": 4680,
        "y": 20160
      }
    ],
    "gates": [
      {
        "id": "p99_g_n",
        "x": 4882,
        "y": 19148,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p99_g_s",
        "x": 4882,
        "y": 20160,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p99_g_w",
        "x": 4680,
        "y": 19654,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p99_g_e",
        "x": 5085,
        "y": 19654,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p100",
    "name": "Park / Skwer P100 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5828,
        "y": 19192
      },
      {
        "x": 6166,
        "y": 19192
      },
      {
        "x": 6166,
        "y": 19484
      },
      {
        "x": 5828,
        "y": 19484
      }
    ],
    "gates": [
      {
        "id": "p100_g_n",
        "x": 5997,
        "y": 19192,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p100_g_s",
        "x": 5997,
        "y": 19484,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p100_g_w",
        "x": 5828,
        "y": 19338,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p100_g_e",
        "x": 6166,
        "y": 19338,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p101",
    "name": "Park / Skwer P101 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7762,
        "y": 18788
      },
      {
        "x": 8190,
        "y": 18788
      },
      {
        "x": 8190,
        "y": 20206
      },
      {
        "x": 7762,
        "y": 20206
      }
    ],
    "gates": [
      {
        "id": "p101_g_n",
        "x": 7976,
        "y": 18788,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p101_g_s",
        "x": 7976,
        "y": 20206,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p101_g_w",
        "x": 7762,
        "y": 19497,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p101_g_e",
        "x": 8190,
        "y": 19497,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p102",
    "name": "Park / Skwer P102 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 8752,
        "y": 19058
      },
      {
        "x": 9134,
        "y": 19058
      },
      {
        "x": 9134,
        "y": 19350
      },
      {
        "x": 8752,
        "y": 19350
      }
    ],
    "gates": [
      {
        "id": "p102_g_n",
        "x": 8943,
        "y": 19058,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p102_g_s",
        "x": 8943,
        "y": 19350,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p102_g_w",
        "x": 8752,
        "y": 19204,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p102_g_e",
        "x": 9134,
        "y": 19204,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p103",
    "name": "Park / Skwer P103 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 10732,
        "y": 19102
      },
      {
        "x": 11002,
        "y": 19102
      },
      {
        "x": 11002,
        "y": 19642
      },
      {
        "x": 10732,
        "y": 19642
      }
    ],
    "gates": [
      {
        "id": "p103_g_n",
        "x": 10867,
        "y": 19102,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p103_g_s",
        "x": 10867,
        "y": 19642,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p103_g_w",
        "x": 10732,
        "y": 19372,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p103_g_e",
        "x": 11002,
        "y": 19372,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p104",
    "name": "Park / Skwer P104 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 11048,
        "y": 18608
      },
      {
        "x": 11453,
        "y": 18608
      },
      {
        "x": 11453,
        "y": 19080
      },
      {
        "x": 11048,
        "y": 19080
      }
    ],
    "gates": [
      {
        "id": "p104_g_n",
        "x": 11250,
        "y": 18608,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p104_g_s",
        "x": 11250,
        "y": 19080,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p104_g_w",
        "x": 11048,
        "y": 18844,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p104_g_e",
        "x": 11453,
        "y": 18844,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p105",
    "name": "Park / Skwer P105 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 25110,
        "y": 18968
      },
      {
        "x": 25740,
        "y": 18968
      },
      {
        "x": 25740,
        "y": 19396
      },
      {
        "x": 25110,
        "y": 19396
      }
    ],
    "gates": [
      {
        "id": "p105_g_n",
        "x": 25425,
        "y": 18968,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p105_g_s",
        "x": 25425,
        "y": 19396,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p105_g_w",
        "x": 25110,
        "y": 19182,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p105_g_e",
        "x": 25740,
        "y": 19182,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p106",
    "name": "Park / Skwer P106 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6368,
        "y": 19238
      },
      {
        "x": 6863,
        "y": 19238
      },
      {
        "x": 6863,
        "y": 19958
      },
      {
        "x": 6368,
        "y": 19958
      }
    ],
    "gates": [
      {
        "id": "p106_g_n",
        "x": 6616,
        "y": 19238,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p106_g_s",
        "x": 6616,
        "y": 19958,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p106_g_w",
        "x": 6368,
        "y": 19598,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p106_g_e",
        "x": 6863,
        "y": 19598,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p107",
    "name": "Park / Skwer P107 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 9540,
        "y": 19215
      },
      {
        "x": 9878,
        "y": 19215
      },
      {
        "x": 9878,
        "y": 19507
      },
      {
        "x": 9540,
        "y": 19507
      }
    ],
    "gates": [
      {
        "id": "p107_g_n",
        "x": 9709,
        "y": 19215,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p107_g_s",
        "x": 9709,
        "y": 19507,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p107_g_w",
        "x": 9540,
        "y": 19361,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p107_g_e",
        "x": 9878,
        "y": 19361,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p108",
    "name": "Park / Skwer P108 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 11002,
        "y": 19530
      },
      {
        "x": 11812,
        "y": 19530
      },
      {
        "x": 11812,
        "y": 21015
      },
      {
        "x": 11002,
        "y": 21015
      }
    ],
    "gates": [
      {
        "id": "p108_g_n",
        "x": 11407,
        "y": 19530,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p108_g_s",
        "x": 11407,
        "y": 21015,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p108_g_w",
        "x": 11002,
        "y": 20272,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p108_g_e",
        "x": 11812,
        "y": 20272,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p109",
    "name": "Park / Skwer P109 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 11408,
        "y": 19980
      },
      {
        "x": 13298,
        "y": 19980
      },
      {
        "x": 13298,
        "y": 21420
      },
      {
        "x": 11408,
        "y": 21420
      }
    ],
    "gates": [
      {
        "id": "p109_g_n",
        "x": 12353,
        "y": 19980,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p109_g_s",
        "x": 12353,
        "y": 21420,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p109_g_w",
        "x": 11408,
        "y": 20700,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p109_g_e",
        "x": 13298,
        "y": 20700,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p110",
    "name": "Park / Skwer P110 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 23310,
        "y": 19688
      },
      {
        "x": 23602,
        "y": 19688
      },
      {
        "x": 23602,
        "y": 20026
      },
      {
        "x": 23310,
        "y": 20026
      }
    ],
    "gates": [
      {
        "id": "p110_g_n",
        "x": 23456,
        "y": 19688,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p110_g_s",
        "x": 23456,
        "y": 20026,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p110_g_w",
        "x": 23310,
        "y": 19857,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p110_g_e",
        "x": 23602,
        "y": 19857,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p111",
    "name": "Park / Skwer P111 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 23445,
        "y": 19328
      },
      {
        "x": 27067,
        "y": 19328
      },
      {
        "x": 27067,
        "y": 22636
      },
      {
        "x": 23445,
        "y": 22636
      }
    ],
    "gates": [
      {
        "id": "p111_g_n",
        "x": 25256,
        "y": 19328,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p111_g_s",
        "x": 25256,
        "y": 22636,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p111_g_w",
        "x": 23445,
        "y": 20982,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p111_g_e",
        "x": 27067,
        "y": 20982,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p112",
    "name": "Park / Skwer P112 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 23670,
        "y": 19215
      },
      {
        "x": 24098,
        "y": 19215
      },
      {
        "x": 24098,
        "y": 19507
      },
      {
        "x": 23670,
        "y": 19507
      }
    ],
    "gates": [
      {
        "id": "p112_g_n",
        "x": 23884,
        "y": 19215,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p112_g_s",
        "x": 23884,
        "y": 19507,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p112_g_w",
        "x": 23670,
        "y": 19361,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p112_g_e",
        "x": 24098,
        "y": 19361,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p113",
    "name": "Park / Skwer P113 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24188,
        "y": 19282
      },
      {
        "x": 24526,
        "y": 19282
      },
      {
        "x": 24526,
        "y": 19664
      },
      {
        "x": 24188,
        "y": 19664
      }
    ],
    "gates": [
      {
        "id": "p113_g_n",
        "x": 24357,
        "y": 19282,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p113_g_s",
        "x": 24357,
        "y": 19664,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p113_g_w",
        "x": 24188,
        "y": 19473,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p113_g_e",
        "x": 24526,
        "y": 19473,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p114",
    "name": "Park / Skwer P114 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 27788,
        "y": 19755
      },
      {
        "x": 28170,
        "y": 19755
      },
      {
        "x": 28170,
        "y": 20205
      },
      {
        "x": 27788,
        "y": 20205
      }
    ],
    "gates": [
      {
        "id": "p114_g_n",
        "x": 27979,
        "y": 19755,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p114_g_s",
        "x": 27979,
        "y": 20205,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p114_g_w",
        "x": 27788,
        "y": 19980,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p114_g_e",
        "x": 28170,
        "y": 19980,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p115",
    "name": "Park / Skwer P115 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 29272,
        "y": 19890
      },
      {
        "x": 29857,
        "y": 19890
      },
      {
        "x": 29857,
        "y": 20655
      },
      {
        "x": 29272,
        "y": 20655
      }
    ],
    "gates": [
      {
        "id": "p115_g_n",
        "x": 29564,
        "y": 19890,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p115_g_s",
        "x": 29564,
        "y": 20655,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p115_g_w",
        "x": 29272,
        "y": 20272,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p115_g_e",
        "x": 29857,
        "y": 20272,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p116",
    "name": "Park / Skwer P116 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 29902,
        "y": 20070
      },
      {
        "x": 30194,
        "y": 20070
      },
      {
        "x": 30194,
        "y": 20632
      },
      {
        "x": 29902,
        "y": 20632
      }
    ],
    "gates": [
      {
        "id": "p116_g_n",
        "x": 30048,
        "y": 20070,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p116_g_s",
        "x": 30048,
        "y": 20632,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p116_g_w",
        "x": 29902,
        "y": 20351,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p116_g_e",
        "x": 30194,
        "y": 20351,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p117",
    "name": "Park / Skwer P117 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 30825,
        "y": 19328
      },
      {
        "x": 31117,
        "y": 19328
      },
      {
        "x": 31117,
        "y": 19688
      },
      {
        "x": 30825,
        "y": 19688
      }
    ],
    "gates": [
      {
        "id": "p117_g_n",
        "x": 30971,
        "y": 19328,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p117_g_s",
        "x": 30971,
        "y": 19688,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p117_g_w",
        "x": 30825,
        "y": 19508,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p117_g_e",
        "x": 31117,
        "y": 19508,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p118",
    "name": "Park / Skwer P118 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 31162,
        "y": 19282
      },
      {
        "x": 31454,
        "y": 19282
      },
      {
        "x": 31454,
        "y": 19687
      },
      {
        "x": 31162,
        "y": 19687
      }
    ],
    "gates": [
      {
        "id": "p118_g_n",
        "x": 31308,
        "y": 19282,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p118_g_s",
        "x": 31308,
        "y": 19687,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p118_g_w",
        "x": 31162,
        "y": 19484,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p118_g_e",
        "x": 31454,
        "y": 19484,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p119",
    "name": "Park / Skwer P119 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 31478,
        "y": 19890
      },
      {
        "x": 32400,
        "y": 19890
      },
      {
        "x": 32400,
        "y": 20182
      },
      {
        "x": 31478,
        "y": 20182
      }
    ],
    "gates": [
      {
        "id": "p119_g_n",
        "x": 31939,
        "y": 19890,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p119_g_s",
        "x": 31939,
        "y": 20182,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p119_g_w",
        "x": 31478,
        "y": 20036,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p119_g_e",
        "x": 32400,
        "y": 20036,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p120",
    "name": "Park / Skwer P120 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 8888,
        "y": 20565
      },
      {
        "x": 9248,
        "y": 20565
      },
      {
        "x": 9248,
        "y": 21173
      },
      {
        "x": 8888,
        "y": 21173
      }
    ],
    "gates": [
      {
        "id": "p120_g_n",
        "x": 9068,
        "y": 20565,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p120_g_s",
        "x": 9068,
        "y": 21173,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p120_g_w",
        "x": 8888,
        "y": 20869,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p120_g_e",
        "x": 9248,
        "y": 20869,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p121",
    "name": "Park / Skwer P121 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 21240,
        "y": 20902
      },
      {
        "x": 23962,
        "y": 20902
      },
      {
        "x": 23962,
        "y": 23332
      },
      {
        "x": 21240,
        "y": 23332
      }
    ],
    "gates": [
      {
        "id": "p121_g_n",
        "x": 22601,
        "y": 20902,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p121_g_s",
        "x": 22601,
        "y": 23332,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p121_g_w",
        "x": 21240,
        "y": 22117,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p121_g_e",
        "x": 23962,
        "y": 22117,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p122",
    "name": "Park / Skwer P122 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 23422,
        "y": 20542
      },
      {
        "x": 23940,
        "y": 20542
      },
      {
        "x": 23940,
        "y": 20767
      },
      {
        "x": 23422,
        "y": 20767
      }
    ],
    "gates": [
      {
        "id": "p122_g_n",
        "x": 23681,
        "y": 20542,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p122_g_s",
        "x": 23681,
        "y": 20767,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p122_g_w",
        "x": 23422,
        "y": 20654,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p122_g_e",
        "x": 23940,
        "y": 20654,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p123",
    "name": "Park / Skwer P123 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24008,
        "y": 20205
      },
      {
        "x": 24660,
        "y": 20205
      },
      {
        "x": 24660,
        "y": 20723
      },
      {
        "x": 24008,
        "y": 20723
      }
    ],
    "gates": [
      {
        "id": "p123_g_n",
        "x": 24334,
        "y": 20205,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p123_g_s",
        "x": 24334,
        "y": 20723,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p123_g_w",
        "x": 24008,
        "y": 20464,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p123_g_e",
        "x": 24660,
        "y": 20464,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p124",
    "name": "Park / Skwer P124 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24795,
        "y": 20115
      },
      {
        "x": 25177,
        "y": 20115
      },
      {
        "x": 25177,
        "y": 20453
      },
      {
        "x": 24795,
        "y": 20453
      }
    ],
    "gates": [
      {
        "id": "p124_g_n",
        "x": 24986,
        "y": 20115,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p124_g_s",
        "x": 24986,
        "y": 20453,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p124_g_w",
        "x": 24795,
        "y": 20284,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p124_g_e",
        "x": 25177,
        "y": 20284,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p125",
    "name": "Park / Skwer P125 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 25830,
        "y": 20902
      },
      {
        "x": 26348,
        "y": 20902
      },
      {
        "x": 26348,
        "y": 21420
      },
      {
        "x": 25830,
        "y": 21420
      }
    ],
    "gates": [
      {
        "id": "p125_g_n",
        "x": 26089,
        "y": 20902,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p125_g_s",
        "x": 26089,
        "y": 21420,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p125_g_w",
        "x": 25830,
        "y": 21161,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p125_g_e",
        "x": 26348,
        "y": 21161,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p126",
    "name": "Park / Skwer P126 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26348,
        "y": 20408
      },
      {
        "x": 26820,
        "y": 20408
      },
      {
        "x": 26820,
        "y": 20880
      },
      {
        "x": 26348,
        "y": 20880
      }
    ],
    "gates": [
      {
        "id": "p126_g_n",
        "x": 26584,
        "y": 20408,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p126_g_s",
        "x": 26584,
        "y": 20880,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p126_g_w",
        "x": 26348,
        "y": 20644,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p126_g_e",
        "x": 26820,
        "y": 20644,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p127",
    "name": "Park / Skwer P127 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 31568,
        "y": 20655
      },
      {
        "x": 32040,
        "y": 20655
      },
      {
        "x": 32040,
        "y": 21105
      },
      {
        "x": 31568,
        "y": 21105
      }
    ],
    "gates": [
      {
        "id": "p127_g_n",
        "x": 31804,
        "y": 20655,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p127_g_s",
        "x": 31804,
        "y": 21105,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p127_g_w",
        "x": 31568,
        "y": 20880,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p127_g_e",
        "x": 32040,
        "y": 20880,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p128",
    "name": "Park / Skwer P128 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5468,
        "y": 21442
      },
      {
        "x": 6120,
        "y": 21442
      },
      {
        "x": 6120,
        "y": 22567
      },
      {
        "x": 5468,
        "y": 22567
      }
    ],
    "gates": [
      {
        "id": "p128_g_n",
        "x": 5794,
        "y": 21442,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p128_g_s",
        "x": 5794,
        "y": 22567,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p128_g_w",
        "x": 5468,
        "y": 22004,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p128_g_e",
        "x": 6120,
        "y": 22004,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p129",
    "name": "Park / Skwer P129 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 5670,
        "y": 21128
      },
      {
        "x": 6638,
        "y": 21128
      },
      {
        "x": 6638,
        "y": 22500
      },
      {
        "x": 5670,
        "y": 22500
      }
    ],
    "gates": [
      {
        "id": "p129_g_n",
        "x": 6154,
        "y": 21128,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p129_g_s",
        "x": 6154,
        "y": 22500,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p129_g_w",
        "x": 5670,
        "y": 21814,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p129_g_e",
        "x": 6638,
        "y": 21814,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p130",
    "name": "Park / Skwer P130 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7042,
        "y": 21038
      },
      {
        "x": 8774,
        "y": 21038
      },
      {
        "x": 8774,
        "y": 22186
      },
      {
        "x": 7042,
        "y": 22186
      }
    ],
    "gates": [
      {
        "id": "p130_g_n",
        "x": 7908,
        "y": 21038,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p130_g_s",
        "x": 7908,
        "y": 22186,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p130_g_w",
        "x": 7042,
        "y": 21612,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p130_g_e",
        "x": 8774,
        "y": 21612,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p131",
    "name": "Park / Skwer P131 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7290,
        "y": 21015
      },
      {
        "x": 7582,
        "y": 21015
      },
      {
        "x": 7582,
        "y": 21420
      },
      {
        "x": 7290,
        "y": 21420
      }
    ],
    "gates": [
      {
        "id": "p131_g_n",
        "x": 7436,
        "y": 21015,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p131_g_s",
        "x": 7436,
        "y": 21420,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p131_g_w",
        "x": 7290,
        "y": 21218,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p131_g_e",
        "x": 7582,
        "y": 21218,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p132",
    "name": "Park / Skwer P132 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 11385,
        "y": 21240
      },
      {
        "x": 12983,
        "y": 21240
      },
      {
        "x": 12983,
        "y": 23220
      },
      {
        "x": 11385,
        "y": 23220
      }
    ],
    "gates": [
      {
        "id": "p132_g_n",
        "x": 12184,
        "y": 21240,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p132_g_s",
        "x": 12184,
        "y": 23220,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p132_g_w",
        "x": 11385,
        "y": 22230,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p132_g_e",
        "x": 12983,
        "y": 22230,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p133",
    "name": "Park / Skwer P133 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 12172,
        "y": 21105
      },
      {
        "x": 13702,
        "y": 21105
      },
      {
        "x": 13702,
        "y": 23265
      },
      {
        "x": 12172,
        "y": 23265
      }
    ],
    "gates": [
      {
        "id": "p133_g_n",
        "x": 12937,
        "y": 21105,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p133_g_s",
        "x": 12937,
        "y": 23265,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p133_g_w",
        "x": 12172,
        "y": 22185,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p133_g_e",
        "x": 13702,
        "y": 22185,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p134",
    "name": "Park / Skwer P134 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 14220,
        "y": 21532
      },
      {
        "x": 14760,
        "y": 21532
      },
      {
        "x": 14760,
        "y": 21914
      },
      {
        "x": 14220,
        "y": 21914
      }
    ],
    "gates": [
      {
        "id": "p134_g_n",
        "x": 14490,
        "y": 21532,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p134_g_s",
        "x": 14490,
        "y": 21914,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p134_g_w",
        "x": 14220,
        "y": 21723,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p134_g_e",
        "x": 14760,
        "y": 21723,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p135",
    "name": "Park / Skwer P135 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 20790,
        "y": 21825
      },
      {
        "x": 21330,
        "y": 21825
      },
      {
        "x": 21330,
        "y": 22387
      },
      {
        "x": 20790,
        "y": 22387
      }
    ],
    "gates": [
      {
        "id": "p135_g_n",
        "x": 21060,
        "y": 21825,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p135_g_s",
        "x": 21060,
        "y": 22387,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p135_g_w",
        "x": 20790,
        "y": 22106,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p135_g_e",
        "x": 21330,
        "y": 22106,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p136",
    "name": "Park / Skwer P136 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24525,
        "y": 21442
      },
      {
        "x": 25807,
        "y": 21442
      },
      {
        "x": 25807,
        "y": 22814
      },
      {
        "x": 24525,
        "y": 22814
      }
    ],
    "gates": [
      {
        "id": "p136_g_n",
        "x": 25166,
        "y": 21442,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p136_g_s",
        "x": 25166,
        "y": 22814,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p136_g_w",
        "x": 24525,
        "y": 22128,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p136_g_e",
        "x": 25807,
        "y": 22128,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p137",
    "name": "Park / Skwer P137 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26145,
        "y": 21172
      },
      {
        "x": 26617,
        "y": 21172
      },
      {
        "x": 26617,
        "y": 21734
      },
      {
        "x": 26145,
        "y": 21734
      }
    ],
    "gates": [
      {
        "id": "p137_g_n",
        "x": 26381,
        "y": 21172,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p137_g_s",
        "x": 26381,
        "y": 21734,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p137_g_w",
        "x": 26145,
        "y": 21453,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p137_g_e",
        "x": 26617,
        "y": 21453,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p138",
    "name": "Park / Skwer P138 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 28552,
        "y": 21262
      },
      {
        "x": 29160,
        "y": 21262
      },
      {
        "x": 29160,
        "y": 22274
      },
      {
        "x": 28552,
        "y": 22274
      }
    ],
    "gates": [
      {
        "id": "p138_g_n",
        "x": 28856,
        "y": 21262,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p138_g_s",
        "x": 28856,
        "y": 22274,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p138_g_w",
        "x": 28552,
        "y": 21768,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p138_g_e",
        "x": 29160,
        "y": 21768,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p139",
    "name": "Park / Skwer P139 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 29610,
        "y": 21780
      },
      {
        "x": 30128,
        "y": 21780
      },
      {
        "x": 30128,
        "y": 22208
      },
      {
        "x": 29610,
        "y": 22208
      }
    ],
    "gates": [
      {
        "id": "p139_g_n",
        "x": 29869,
        "y": 21780,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p139_g_s",
        "x": 29869,
        "y": 22208,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p139_g_w",
        "x": 29610,
        "y": 21994,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p139_g_e",
        "x": 30128,
        "y": 21994,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p140",
    "name": "Park / Skwer P140 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 31342,
        "y": 21645
      },
      {
        "x": 32422,
        "y": 21645
      },
      {
        "x": 32422,
        "y": 21847
      },
      {
        "x": 31342,
        "y": 21847
      }
    ],
    "gates": [
      {
        "id": "p140_g_n",
        "x": 31882,
        "y": 21645,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p140_g_s",
        "x": 31882,
        "y": 21847,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p140_g_w",
        "x": 31342,
        "y": 21746,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p140_g_e",
        "x": 32422,
        "y": 21746,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p141",
    "name": "Park / Skwer P141 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6098,
        "y": 22635
      },
      {
        "x": 6548,
        "y": 22635
      },
      {
        "x": 6548,
        "y": 23490
      },
      {
        "x": 6098,
        "y": 23490
      }
    ],
    "gates": [
      {
        "id": "p141_g_n",
        "x": 6323,
        "y": 22635,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p141_g_s",
        "x": 6323,
        "y": 23490,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p141_g_w",
        "x": 6098,
        "y": 23062,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p141_g_e",
        "x": 6548,
        "y": 23062,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p142",
    "name": "Park / Skwer P142 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7402,
        "y": 22208
      },
      {
        "x": 7762,
        "y": 22208
      },
      {
        "x": 7762,
        "y": 22500
      },
      {
        "x": 7402,
        "y": 22500
      }
    ],
    "gates": [
      {
        "id": "p142_g_n",
        "x": 7582,
        "y": 22208,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p142_g_s",
        "x": 7582,
        "y": 22500,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p142_g_w",
        "x": 7402,
        "y": 22354,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p142_g_e",
        "x": 7762,
        "y": 22354,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p143",
    "name": "Park / Skwer P143 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 12195,
        "y": 22612
      },
      {
        "x": 15683,
        "y": 22612
      },
      {
        "x": 15683,
        "y": 25447
      },
      {
        "x": 12195,
        "y": 25447
      }
    ],
    "gates": [
      {
        "id": "p143_g_n",
        "x": 13939,
        "y": 22612,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p143_g_s",
        "x": 13939,
        "y": 25447,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p143_g_w",
        "x": 12195,
        "y": 24030,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p143_g_e",
        "x": 15683,
        "y": 24030,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p144",
    "name": "Park / Skwer P144 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 13748,
        "y": 22500
      },
      {
        "x": 14626,
        "y": 22500
      },
      {
        "x": 14626,
        "y": 22815
      },
      {
        "x": 13748,
        "y": 22815
      }
    ],
    "gates": [
      {
        "id": "p144_g_n",
        "x": 14187,
        "y": 22500,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p144_g_s",
        "x": 14187,
        "y": 22815,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p144_g_w",
        "x": 13748,
        "y": 22658,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p144_g_e",
        "x": 14626,
        "y": 22658,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p145",
    "name": "Park / Skwer P145 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 14738,
        "y": 22320
      },
      {
        "x": 15638,
        "y": 22320
      },
      {
        "x": 15638,
        "y": 22568
      },
      {
        "x": 14738,
        "y": 22568
      }
    ],
    "gates": [
      {
        "id": "p145_g_n",
        "x": 15188,
        "y": 22320,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p145_g_s",
        "x": 15188,
        "y": 22568,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p145_g_w",
        "x": 14738,
        "y": 22444,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p145_g_e",
        "x": 15638,
        "y": 22444,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p146",
    "name": "Park / Skwer P146 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 20295,
        "y": 22522
      },
      {
        "x": 21240,
        "y": 22522
      },
      {
        "x": 21240,
        "y": 23040
      },
      {
        "x": 20295,
        "y": 23040
      }
    ],
    "gates": [
      {
        "id": "p146_g_n",
        "x": 20768,
        "y": 22522,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p146_g_s",
        "x": 20768,
        "y": 23040,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p146_g_w",
        "x": 20295,
        "y": 22781,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p146_g_e",
        "x": 21240,
        "y": 22781,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p147",
    "name": "Park / Skwer P147 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 27202,
        "y": 22320
      },
      {
        "x": 28980,
        "y": 22320
      },
      {
        "x": 28980,
        "y": 23242
      },
      {
        "x": 27202,
        "y": 23242
      }
    ],
    "gates": [
      {
        "id": "p147_g_n",
        "x": 28091,
        "y": 22320,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p147_g_s",
        "x": 28091,
        "y": 23242,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p147_g_w",
        "x": 27202,
        "y": 22781,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p147_g_e",
        "x": 28980,
        "y": 22781,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p148",
    "name": "Park / Skwer P148 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 4725,
        "y": 23288
      },
      {
        "x": 5243,
        "y": 23288
      },
      {
        "x": 5243,
        "y": 23918
      },
      {
        "x": 4725,
        "y": 23918
      }
    ],
    "gates": [
      {
        "id": "p148_g_n",
        "x": 4984,
        "y": 23288,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p148_g_s",
        "x": 4984,
        "y": 23918,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p148_g_w",
        "x": 4725,
        "y": 23603,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p148_g_e",
        "x": 5243,
        "y": 23603,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p149",
    "name": "Park / Skwer P149 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 8348,
        "y": 23670
      },
      {
        "x": 8776,
        "y": 23670
      },
      {
        "x": 8776,
        "y": 24030
      },
      {
        "x": 8348,
        "y": 24030
      }
    ],
    "gates": [
      {
        "id": "p149_g_n",
        "x": 8562,
        "y": 23670,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p149_g_s",
        "x": 8562,
        "y": 24030,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p149_g_w",
        "x": 8348,
        "y": 23850,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p149_g_e",
        "x": 8776,
        "y": 23850,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p150",
    "name": "Park / Skwer P150 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 9540,
        "y": 23378
      },
      {
        "x": 9968,
        "y": 23378
      },
      {
        "x": 9968,
        "y": 23850
      },
      {
        "x": 9540,
        "y": 23850
      }
    ],
    "gates": [
      {
        "id": "p150_g_n",
        "x": 9754,
        "y": 23378,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p150_g_s",
        "x": 9754,
        "y": 23850,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p150_g_w",
        "x": 9540,
        "y": 23614,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p150_g_e",
        "x": 9968,
        "y": 23614,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p151",
    "name": "Park / Skwer P151 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 10192,
        "y": 23445
      },
      {
        "x": 10530,
        "y": 23445
      },
      {
        "x": 10530,
        "y": 23805
      },
      {
        "x": 10192,
        "y": 23805
      }
    ],
    "gates": [
      {
        "id": "p151_g_n",
        "x": 10361,
        "y": 23445,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p151_g_s",
        "x": 10361,
        "y": 23805,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p151_g_w",
        "x": 10192,
        "y": 23625,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p151_g_e",
        "x": 10530,
        "y": 23625,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p152",
    "name": "Park / Skwer P152 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 15458,
        "y": 23220
      },
      {
        "x": 16043,
        "y": 23220
      },
      {
        "x": 16043,
        "y": 23692
      },
      {
        "x": 15458,
        "y": 23692
      }
    ],
    "gates": [
      {
        "id": "p152_g_n",
        "x": 15750,
        "y": 23220,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p152_g_s",
        "x": 15750,
        "y": 23692,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p152_g_w",
        "x": 15458,
        "y": 23456,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p152_g_e",
        "x": 16043,
        "y": 23456,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p153",
    "name": "Park / Skwer P153 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 17528,
        "y": 23198
      },
      {
        "x": 18113,
        "y": 23198
      },
      {
        "x": 18113,
        "y": 23580
      },
      {
        "x": 17528,
        "y": 23580
      }
    ],
    "gates": [
      {
        "id": "p153_g_n",
        "x": 17820,
        "y": 23198,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p153_g_s",
        "x": 17820,
        "y": 23580,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p153_g_w",
        "x": 17528,
        "y": 23389,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p153_g_e",
        "x": 18113,
        "y": 23389,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p154",
    "name": "Park / Skwer P154 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 18878,
        "y": 23648
      },
      {
        "x": 19260,
        "y": 23648
      },
      {
        "x": 19260,
        "y": 24008
      },
      {
        "x": 18878,
        "y": 24008
      }
    ],
    "gates": [
      {
        "id": "p154_g_n",
        "x": 19069,
        "y": 23648,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p154_g_s",
        "x": 19069,
        "y": 24008,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p154_g_w",
        "x": 18878,
        "y": 23828,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p154_g_e",
        "x": 19260,
        "y": 23828,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p155",
    "name": "Park / Skwer P155 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 20115,
        "y": 23580
      },
      {
        "x": 22635,
        "y": 23580
      },
      {
        "x": 22635,
        "y": 29835
      },
      {
        "x": 20115,
        "y": 29835
      }
    ],
    "gates": [
      {
        "id": "p155_g_n",
        "x": 21375,
        "y": 23580,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p155_g_s",
        "x": 21375,
        "y": 29835,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p155_g_w",
        "x": 20115,
        "y": 26708,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p155_g_e",
        "x": 22635,
        "y": 26708,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p156",
    "name": "Park / Skwer P156 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 20790,
        "y": 23512
      },
      {
        "x": 21150,
        "y": 23512
      },
      {
        "x": 21150,
        "y": 23872
      },
      {
        "x": 20790,
        "y": 23872
      }
    ],
    "gates": [
      {
        "id": "p156_g_n",
        "x": 20970,
        "y": 23512,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p156_g_s",
        "x": 20970,
        "y": 23872,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p156_g_w",
        "x": 20790,
        "y": 23692,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p156_g_e",
        "x": 21150,
        "y": 23692,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p157",
    "name": "Park / Skwer P157 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 21398,
        "y": 23378
      },
      {
        "x": 22230,
        "y": 23378
      },
      {
        "x": 22230,
        "y": 23558
      },
      {
        "x": 21398,
        "y": 23558
      }
    ],
    "gates": [
      {
        "id": "p157_g_n",
        "x": 21814,
        "y": 23378,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p157_g_s",
        "x": 21814,
        "y": 23558,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p157_g_w",
        "x": 21398,
        "y": 23468,
        "width": 81,
        "side": "left"
      },
      {
        "id": "p157_g_e",
        "x": 22230,
        "y": 23468,
        "width": 81,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p158",
    "name": "Park / Skwer P158 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 22748,
        "y": 23490
      },
      {
        "x": 23536,
        "y": 23490
      },
      {
        "x": 23536,
        "y": 23918
      },
      {
        "x": 22748,
        "y": 23918
      }
    ],
    "gates": [
      {
        "id": "p158_g_n",
        "x": 23142,
        "y": 23490,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p158_g_s",
        "x": 23142,
        "y": 23918,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p158_g_w",
        "x": 22748,
        "y": 23704,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p158_g_e",
        "x": 23536,
        "y": 23704,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p159",
    "name": "Park / Skwer P159 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 24952,
        "y": 23355
      },
      {
        "x": 25334,
        "y": 23355
      },
      {
        "x": 25334,
        "y": 23805
      },
      {
        "x": 24952,
        "y": 23805
      }
    ],
    "gates": [
      {
        "id": "p159_g_n",
        "x": 25143,
        "y": 23355,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p159_g_s",
        "x": 25143,
        "y": 23805,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p159_g_w",
        "x": 24952,
        "y": 23580,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p159_g_e",
        "x": 25334,
        "y": 23580,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p160",
    "name": "Park / Skwer P160 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 28868,
        "y": 23130
      },
      {
        "x": 29206,
        "y": 23130
      },
      {
        "x": 29206,
        "y": 23512
      },
      {
        "x": 28868,
        "y": 23512
      }
    ],
    "gates": [
      {
        "id": "p160_g_n",
        "x": 29037,
        "y": 23130,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p160_g_s",
        "x": 29037,
        "y": 23512,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p160_g_w",
        "x": 28868,
        "y": 23321,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p160_g_e",
        "x": 29206,
        "y": 23321,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p161",
    "name": "Park / Skwer P161 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6502,
        "y": 23760
      },
      {
        "x": 6750,
        "y": 23760
      },
      {
        "x": 6750,
        "y": 24255
      },
      {
        "x": 6502,
        "y": 24255
      }
    ],
    "gates": [
      {
        "id": "p161_g_n",
        "x": 6626,
        "y": 23760,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p161_g_s",
        "x": 6626,
        "y": 24255,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p161_g_w",
        "x": 6502,
        "y": 24008,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p161_g_e",
        "x": 6750,
        "y": 24008,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p162",
    "name": "Park / Skwer P162 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 6615,
        "y": 24322
      },
      {
        "x": 7020,
        "y": 24322
      },
      {
        "x": 7020,
        "y": 25650
      },
      {
        "x": 6615,
        "y": 25650
      }
    ],
    "gates": [
      {
        "id": "p162_g_n",
        "x": 6818,
        "y": 24322,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p162_g_s",
        "x": 6818,
        "y": 25650,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p162_g_w",
        "x": 6615,
        "y": 24986,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p162_g_e",
        "x": 7020,
        "y": 24986,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p163",
    "name": "Park / Skwer P163 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 7200,
        "y": 24435
      },
      {
        "x": 7560,
        "y": 24435
      },
      {
        "x": 7560,
        "y": 25493
      },
      {
        "x": 7200,
        "y": 25493
      }
    ],
    "gates": [
      {
        "id": "p163_g_n",
        "x": 7380,
        "y": 24435,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p163_g_s",
        "x": 7380,
        "y": 25493,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p163_g_w",
        "x": 7200,
        "y": 24964,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p163_g_e",
        "x": 7560,
        "y": 24964,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p164",
    "name": "Park / Skwer P164 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 15705,
        "y": 24098
      },
      {
        "x": 16133,
        "y": 24098
      },
      {
        "x": 16133,
        "y": 24728
      },
      {
        "x": 15705,
        "y": 24728
      }
    ],
    "gates": [
      {
        "id": "p164_g_n",
        "x": 15919,
        "y": 24098,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p164_g_s",
        "x": 15919,
        "y": 24728,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p164_g_w",
        "x": 15705,
        "y": 24413,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p164_g_e",
        "x": 16133,
        "y": 24413,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p165",
    "name": "Park / Skwer P165 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 16808,
        "y": 23828
      },
      {
        "x": 17146,
        "y": 23828
      },
      {
        "x": 17146,
        "y": 24458
      },
      {
        "x": 16808,
        "y": 24458
      }
    ],
    "gates": [
      {
        "id": "p165_g_n",
        "x": 16977,
        "y": 23828,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p165_g_s",
        "x": 16977,
        "y": 24458,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p165_g_w",
        "x": 16808,
        "y": 24143,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p165_g_e",
        "x": 17146,
        "y": 24143,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p166",
    "name": "Park / Skwer P166 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 19845,
        "y": 24255
      },
      {
        "x": 21060,
        "y": 24255
      },
      {
        "x": 21060,
        "y": 26393
      },
      {
        "x": 19845,
        "y": 26393
      }
    ],
    "gates": [
      {
        "id": "p166_g_n",
        "x": 20452,
        "y": 24255,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p166_g_s",
        "x": 20452,
        "y": 26393,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p166_g_w",
        "x": 19845,
        "y": 25324,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p166_g_e",
        "x": 21060,
        "y": 25324,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p167",
    "name": "Park / Skwer P167 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 22275,
        "y": 23828
      },
      {
        "x": 23197,
        "y": 23828
      },
      {
        "x": 23197,
        "y": 25200
      },
      {
        "x": 22275,
        "y": 25200
      }
    ],
    "gates": [
      {
        "id": "p167_g_n",
        "x": 22736,
        "y": 23828,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p167_g_s",
        "x": 22736,
        "y": 25200,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p167_g_w",
        "x": 22275,
        "y": 24514,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p167_g_e",
        "x": 23197,
        "y": 24514,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p168",
    "name": "Park / Skwer P168 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26708,
        "y": 23738
      },
      {
        "x": 27226,
        "y": 23738
      },
      {
        "x": 27226,
        "y": 24233
      },
      {
        "x": 26708,
        "y": 24233
      }
    ],
    "gates": [
      {
        "id": "p168_g_n",
        "x": 26967,
        "y": 23738,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p168_g_s",
        "x": 26967,
        "y": 24233,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p168_g_w",
        "x": 26708,
        "y": 23986,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p168_g_e",
        "x": 27226,
        "y": 23986,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p169",
    "name": "Park / Skwer P169 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 29182,
        "y": 23828
      },
      {
        "x": 29564,
        "y": 23828
      },
      {
        "x": 29564,
        "y": 24143
      },
      {
        "x": 29182,
        "y": 24143
      }
    ],
    "gates": [
      {
        "id": "p169_g_n",
        "x": 29373,
        "y": 23828,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p169_g_s",
        "x": 29373,
        "y": 24143,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p169_g_w",
        "x": 29182,
        "y": 23986,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p169_g_e",
        "x": 29564,
        "y": 23986,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p170",
    "name": "Park / Skwer P170 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 31478,
        "y": 24142
      },
      {
        "x": 31973,
        "y": 24142
      },
      {
        "x": 31973,
        "y": 24434
      },
      {
        "x": 31478,
        "y": 24434
      }
    ],
    "gates": [
      {
        "id": "p170_g_n",
        "x": 31726,
        "y": 24142,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p170_g_s",
        "x": 31726,
        "y": 24434,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p170_g_w",
        "x": 31478,
        "y": 24288,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p170_g_e",
        "x": 31973,
        "y": 24288,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p171",
    "name": "Park / Skwer P171 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 32625,
        "y": 23738
      },
      {
        "x": 32805,
        "y": 23738
      },
      {
        "x": 32805,
        "y": 24570
      },
      {
        "x": 32625,
        "y": 24570
      }
    ],
    "gates": [
      {
        "id": "p171_g_n",
        "x": 32715,
        "y": 23738,
        "width": 81,
        "side": "top"
      },
      {
        "id": "p171_g_s",
        "x": 32715,
        "y": 24570,
        "width": 81,
        "side": "bottom"
      },
      {
        "id": "p171_g_w",
        "x": 32625,
        "y": 24154,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p171_g_e",
        "x": 32805,
        "y": 24154,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p172",
    "name": "Park / Skwer P172 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 8640,
        "y": 25358
      },
      {
        "x": 9472,
        "y": 25358
      },
      {
        "x": 9472,
        "y": 26010
      },
      {
        "x": 8640,
        "y": 26010
      }
    ],
    "gates": [
      {
        "id": "p172_g_n",
        "x": 9056,
        "y": 25358,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p172_g_s",
        "x": 9056,
        "y": 26010,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p172_g_w",
        "x": 8640,
        "y": 25684,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p172_g_e",
        "x": 9472,
        "y": 25684,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p173",
    "name": "Park / Skwer P173 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 9472,
        "y": 24660
      },
      {
        "x": 10507,
        "y": 24660
      },
      {
        "x": 10507,
        "y": 25335
      },
      {
        "x": 9472,
        "y": 25335
      }
    ],
    "gates": [
      {
        "id": "p173_g_n",
        "x": 9990,
        "y": 24660,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p173_g_s",
        "x": 9990,
        "y": 25335,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p173_g_w",
        "x": 9472,
        "y": 24998,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p173_g_e",
        "x": 10507,
        "y": 24998,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p174",
    "name": "Park / Skwer P174 (Piasek / Nowy \u015awiat)",
    "polygon": [
      {
        "x": 12668,
        "y": 25200
      },
      {
        "x": 13208,
        "y": 25200
      },
      {
        "x": 13208,
        "y": 25605
      },
      {
        "x": 12668,
        "y": 25605
      }
    ],
    "gates": [
      {
        "id": "p174_g_n",
        "x": 12938,
        "y": 25200,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p174_g_s",
        "x": 12938,
        "y": 25605,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p174_g_w",
        "x": 12668,
        "y": 25402,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p174_g_e",
        "x": 13208,
        "y": 25402,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p175",
    "name": "Park / Skwer P175 (Stare Miasto \u2014 Planty)",
    "polygon": [
      {
        "x": 13748,
        "y": 25088
      },
      {
        "x": 14333,
        "y": 25088
      },
      {
        "x": 14333,
        "y": 25470
      },
      {
        "x": 13748,
        "y": 25470
      }
    ],
    "gates": [
      {
        "id": "p175_g_n",
        "x": 14040,
        "y": 25088,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p175_g_s",
        "x": 14040,
        "y": 25470,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p175_g_w",
        "x": 13748,
        "y": 25279,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p175_g_e",
        "x": 14333,
        "y": 25279,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p176",
    "name": "Park / Skwer P176 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 25920,
        "y": 24660
      },
      {
        "x": 26325,
        "y": 24660
      },
      {
        "x": 26325,
        "y": 25132
      },
      {
        "x": 25920,
        "y": 25132
      }
    ],
    "gates": [
      {
        "id": "p176_g_n",
        "x": 26122,
        "y": 24660,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p176_g_s",
        "x": 26122,
        "y": 25132,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p176_g_w",
        "x": 25920,
        "y": 24896,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p176_g_e",
        "x": 26325,
        "y": 24896,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p177",
    "name": "Park / Skwer P177 (Weso\u0142a / Grzeg\u00f3rzki)",
    "polygon": [
      {
        "x": 26482,
        "y": 24952
      },
      {
        "x": 27090,
        "y": 24952
      },
      {
        "x": 27090,
        "y": 25492
      },
      {
        "x": 26482,
        "y": 25492
      }
    ],
    "gates": [
      {
        "id": "p177_g_n",
        "x": 26786,
        "y": 24952,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p177_g_s",
        "x": 26786,
        "y": 25492,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p177_g_w",
        "x": 26482,
        "y": 25222,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p177_g_e",
        "x": 27090,
        "y": 25222,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p178",
    "name": "Park / Skwer P178 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 29722,
        "y": 25425
      },
      {
        "x": 31724,
        "y": 25425
      },
      {
        "x": 31724,
        "y": 28575
      },
      {
        "x": 29722,
        "y": 28575
      }
    ],
    "gates": [
      {
        "id": "p178_g_n",
        "x": 30723,
        "y": 25425,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p178_g_s",
        "x": 30723,
        "y": 28575,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p178_g_w",
        "x": 29722,
        "y": 27000,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p178_g_e",
        "x": 31724,
        "y": 27000,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p179",
    "name": "Park / Skwer P179 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30622,
        "y": 25402
      },
      {
        "x": 31387,
        "y": 25402
      },
      {
        "x": 31387,
        "y": 26414
      },
      {
        "x": 30622,
        "y": 26414
      }
    ],
    "gates": [
      {
        "id": "p179_g_n",
        "x": 31004,
        "y": 25402,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p179_g_s",
        "x": 31004,
        "y": 26414,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p179_g_w",
        "x": 30622,
        "y": 25908,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p179_g_e",
        "x": 31387,
        "y": 25908,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p180",
    "name": "Park / Skwer P180 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 6818,
        "y": 25875
      },
      {
        "x": 7156,
        "y": 25875
      },
      {
        "x": 7156,
        "y": 26910
      },
      {
        "x": 6818,
        "y": 26910
      }
    ],
    "gates": [
      {
        "id": "p180_g_n",
        "x": 6987,
        "y": 25875,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p180_g_s",
        "x": 6987,
        "y": 26910,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p180_g_w",
        "x": 6818,
        "y": 26392,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p180_g_e",
        "x": 7156,
        "y": 26392,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p181",
    "name": "Park / Skwer P181 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 10102,
        "y": 25808
      },
      {
        "x": 10957,
        "y": 25808
      },
      {
        "x": 10957,
        "y": 26528
      },
      {
        "x": 10102,
        "y": 26528
      }
    ],
    "gates": [
      {
        "id": "p181_g_n",
        "x": 10530,
        "y": 25808,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p181_g_s",
        "x": 10530,
        "y": 26528,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p181_g_w",
        "x": 10102,
        "y": 26168,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p181_g_e",
        "x": 10957,
        "y": 26168,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p182",
    "name": "Park / Skwer P182 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 11498,
        "y": 25808
      },
      {
        "x": 11970,
        "y": 25808
      },
      {
        "x": 11970,
        "y": 26100
      },
      {
        "x": 11498,
        "y": 26100
      }
    ],
    "gates": [
      {
        "id": "p182_g_n",
        "x": 11734,
        "y": 25808,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p182_g_s",
        "x": 11734,
        "y": 26100,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p182_g_w",
        "x": 11498,
        "y": 25954,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p182_g_e",
        "x": 11970,
        "y": 25954,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p183",
    "name": "Park / Skwer P183 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 12802,
        "y": 25672
      },
      {
        "x": 15570,
        "y": 25672
      },
      {
        "x": 15570,
        "y": 30172
      },
      {
        "x": 12802,
        "y": 30172
      }
    ],
    "gates": [
      {
        "id": "p183_g_n",
        "x": 14186,
        "y": 25672,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p183_g_s",
        "x": 14186,
        "y": 30172,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p183_g_w",
        "x": 12802,
        "y": 27922,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p183_g_e",
        "x": 15570,
        "y": 27922,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p184",
    "name": "Park / Skwer P184 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 13950,
        "y": 25628
      },
      {
        "x": 15952,
        "y": 25628
      },
      {
        "x": 15952,
        "y": 28238
      },
      {
        "x": 13950,
        "y": 28238
      }
    ],
    "gates": [
      {
        "id": "p184_g_n",
        "x": 14951,
        "y": 25628,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p184_g_s",
        "x": 14951,
        "y": 28238,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p184_g_w",
        "x": 13950,
        "y": 26933,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p184_g_e",
        "x": 15952,
        "y": 26933,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p185",
    "name": "Park / Skwer P185 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19732,
        "y": 26078
      },
      {
        "x": 20227,
        "y": 26078
      },
      {
        "x": 20227,
        "y": 26843
      },
      {
        "x": 19732,
        "y": 26843
      }
    ],
    "gates": [
      {
        "id": "p185_g_n",
        "x": 19980,
        "y": 26078,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p185_g_s",
        "x": 19980,
        "y": 26843,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p185_g_w",
        "x": 19732,
        "y": 26460,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p185_g_e",
        "x": 20227,
        "y": 26460,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p186",
    "name": "Park / Skwer P186 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 23332,
        "y": 25605
      },
      {
        "x": 24007,
        "y": 25605
      },
      {
        "x": 24007,
        "y": 25987
      },
      {
        "x": 23332,
        "y": 25987
      }
    ],
    "gates": [
      {
        "id": "p186_g_n",
        "x": 23670,
        "y": 25605,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p186_g_s",
        "x": 23670,
        "y": 25987,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p186_g_w",
        "x": 23332,
        "y": 25796,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p186_g_e",
        "x": 24007,
        "y": 25796,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p187",
    "name": "Park / Skwer P187 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 23715,
        "y": 25538
      },
      {
        "x": 25177,
        "y": 25538
      },
      {
        "x": 25177,
        "y": 27450
      },
      {
        "x": 23715,
        "y": 27450
      }
    ],
    "gates": [
      {
        "id": "p187_g_n",
        "x": 24446,
        "y": 25538,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p187_g_s",
        "x": 24446,
        "y": 27450,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p187_g_w",
        "x": 23715,
        "y": 26494,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p187_g_e",
        "x": 25177,
        "y": 26494,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p188",
    "name": "Park / Skwer P188 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 25290,
        "y": 25785
      },
      {
        "x": 25740,
        "y": 25785
      },
      {
        "x": 25740,
        "y": 26213
      },
      {
        "x": 25290,
        "y": 26213
      }
    ],
    "gates": [
      {
        "id": "p188_g_n",
        "x": 25515,
        "y": 25785,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p188_g_s",
        "x": 25515,
        "y": 26213,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p188_g_w",
        "x": 25290,
        "y": 25999,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p188_g_e",
        "x": 25740,
        "y": 25999,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p189",
    "name": "Park / Skwer P189 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4590,
        "y": 26820
      },
      {
        "x": 4972,
        "y": 26820
      },
      {
        "x": 4972,
        "y": 27630
      },
      {
        "x": 4590,
        "y": 27630
      }
    ],
    "gates": [
      {
        "id": "p189_g_n",
        "x": 4781,
        "y": 26820,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p189_g_s",
        "x": 4781,
        "y": 27630,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p189_g_w",
        "x": 4590,
        "y": 27225,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p189_g_e",
        "x": 4972,
        "y": 27225,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p190",
    "name": "Park / Skwer P190 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 6795,
        "y": 27292
      },
      {
        "x": 7087,
        "y": 27292
      },
      {
        "x": 7087,
        "y": 27674
      },
      {
        "x": 6795,
        "y": 27674
      }
    ],
    "gates": [
      {
        "id": "p190_g_n",
        "x": 6941,
        "y": 27292,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p190_g_s",
        "x": 6941,
        "y": 27674,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p190_g_w",
        "x": 6795,
        "y": 27483,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p190_g_e",
        "x": 7087,
        "y": 27483,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p191",
    "name": "Park / Skwer P191 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 8212,
        "y": 26550
      },
      {
        "x": 9134,
        "y": 26550
      },
      {
        "x": 9134,
        "y": 27922
      },
      {
        "x": 8212,
        "y": 27922
      }
    ],
    "gates": [
      {
        "id": "p191_g_n",
        "x": 8673,
        "y": 26550,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p191_g_s",
        "x": 8673,
        "y": 27922,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p191_g_w",
        "x": 8212,
        "y": 27236,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p191_g_e",
        "x": 9134,
        "y": 27236,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p192",
    "name": "Park / Skwer P192 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 16020,
        "y": 26752
      },
      {
        "x": 16650,
        "y": 26752
      },
      {
        "x": 16650,
        "y": 27584
      },
      {
        "x": 16020,
        "y": 27584
      }
    ],
    "gates": [
      {
        "id": "p192_g_n",
        "x": 16335,
        "y": 26752,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p192_g_s",
        "x": 16335,
        "y": 27584,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p192_g_w",
        "x": 16020,
        "y": 27168,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p192_g_e",
        "x": 16650,
        "y": 27168,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p193",
    "name": "Park / Skwer P193 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 18698,
        "y": 26482
      },
      {
        "x": 19778,
        "y": 26482
      },
      {
        "x": 19778,
        "y": 27044
      },
      {
        "x": 18698,
        "y": 27044
      }
    ],
    "gates": [
      {
        "id": "p193_g_n",
        "x": 19238,
        "y": 26482,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p193_g_s",
        "x": 19238,
        "y": 27044,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p193_g_w",
        "x": 18698,
        "y": 26763,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p193_g_e",
        "x": 19778,
        "y": 26763,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p194",
    "name": "Park / Skwer P194 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 20362,
        "y": 26955
      },
      {
        "x": 20700,
        "y": 26955
      },
      {
        "x": 20700,
        "y": 27900
      },
      {
        "x": 20362,
        "y": 27900
      }
    ],
    "gates": [
      {
        "id": "p194_g_n",
        "x": 20531,
        "y": 26955,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p194_g_s",
        "x": 20531,
        "y": 27900,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p194_g_w",
        "x": 20362,
        "y": 27428,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p194_g_e",
        "x": 20700,
        "y": 27428,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p195",
    "name": "Park / Skwer P195 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 21240,
        "y": 26572
      },
      {
        "x": 22005,
        "y": 26572
      },
      {
        "x": 22005,
        "y": 28214
      },
      {
        "x": 21240,
        "y": 28214
      }
    ],
    "gates": [
      {
        "id": "p195_g_n",
        "x": 21622,
        "y": 26572,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p195_g_s",
        "x": 21622,
        "y": 28214,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p195_g_w",
        "x": 21240,
        "y": 27393,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p195_g_e",
        "x": 22005,
        "y": 27393,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p196",
    "name": "Park / Skwer P196 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 26010,
        "y": 26865
      },
      {
        "x": 26482,
        "y": 26865
      },
      {
        "x": 26482,
        "y": 27337
      },
      {
        "x": 26010,
        "y": 27337
      }
    ],
    "gates": [
      {
        "id": "p196_g_n",
        "x": 26246,
        "y": 26865,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p196_g_s",
        "x": 26246,
        "y": 27337,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p196_g_w",
        "x": 26010,
        "y": 27101,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p196_g_e",
        "x": 26482,
        "y": 27101,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p197",
    "name": "Park / Skwer P197 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 29610,
        "y": 26775
      },
      {
        "x": 30060,
        "y": 26775
      },
      {
        "x": 30060,
        "y": 27630
      },
      {
        "x": 29610,
        "y": 27630
      }
    ],
    "gates": [
      {
        "id": "p197_g_n",
        "x": 29835,
        "y": 26775,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p197_g_s",
        "x": 29835,
        "y": 27630,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p197_g_w",
        "x": 29610,
        "y": 27202,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p197_g_e",
        "x": 30060,
        "y": 27202,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p198",
    "name": "Park / Skwer P198 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30442,
        "y": 26415
      },
      {
        "x": 30757,
        "y": 26415
      },
      {
        "x": 30757,
        "y": 26775
      },
      {
        "x": 30442,
        "y": 26775
      }
    ],
    "gates": [
      {
        "id": "p198_g_n",
        "x": 30600,
        "y": 26415,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p198_g_s",
        "x": 30600,
        "y": 26775,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p198_g_w",
        "x": 30442,
        "y": 26595,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p198_g_e",
        "x": 30757,
        "y": 26595,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p199",
    "name": "Park / Skwer P199 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31365,
        "y": 27000
      },
      {
        "x": 31635,
        "y": 27000
      },
      {
        "x": 31635,
        "y": 27450
      },
      {
        "x": 31365,
        "y": 27450
      }
    ],
    "gates": [
      {
        "id": "p199_g_n",
        "x": 31500,
        "y": 27000,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p199_g_s",
        "x": 31500,
        "y": 27450,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p199_g_w",
        "x": 31365,
        "y": 27225,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p199_g_e",
        "x": 31635,
        "y": 27225,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p200",
    "name": "Park / Skwer P200 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31838,
        "y": 27292
      },
      {
        "x": 32176,
        "y": 27292
      },
      {
        "x": 32176,
        "y": 27540
      },
      {
        "x": 31838,
        "y": 27540
      }
    ],
    "gates": [
      {
        "id": "p200_g_n",
        "x": 32007,
        "y": 27292,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p200_g_s",
        "x": 32007,
        "y": 27540,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p200_g_w",
        "x": 31838,
        "y": 27416,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p200_g_e",
        "x": 32176,
        "y": 27416,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p201",
    "name": "Park / Skwer P201 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 32040,
        "y": 26820
      },
      {
        "x": 32558,
        "y": 26820
      },
      {
        "x": 32558,
        "y": 27180
      },
      {
        "x": 32040,
        "y": 27180
      }
    ],
    "gates": [
      {
        "id": "p201_g_n",
        "x": 32299,
        "y": 26820,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p201_g_s",
        "x": 32299,
        "y": 27180,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p201_g_w",
        "x": 32040,
        "y": 27000,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p201_g_e",
        "x": 32558,
        "y": 27000,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p202",
    "name": "Park / Skwer P202 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 32175,
        "y": 27090
      },
      {
        "x": 32805,
        "y": 27090
      },
      {
        "x": 32805,
        "y": 27832
      },
      {
        "x": 32175,
        "y": 27832
      }
    ],
    "gates": [
      {
        "id": "p202_g_n",
        "x": 32490,
        "y": 27090,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p202_g_s",
        "x": 32490,
        "y": 27832,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p202_g_w",
        "x": 32175,
        "y": 27461,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p202_g_e",
        "x": 32805,
        "y": 27461,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p203",
    "name": "Park / Skwer P203 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4590,
        "y": 27315
      },
      {
        "x": 6142,
        "y": 27315
      },
      {
        "x": 6142,
        "y": 29003
      },
      {
        "x": 4590,
        "y": 29003
      }
    ],
    "gates": [
      {
        "id": "p203_g_n",
        "x": 5366,
        "y": 27315,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p203_g_s",
        "x": 5366,
        "y": 29003,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p203_g_w",
        "x": 4590,
        "y": 28159,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p203_g_e",
        "x": 6142,
        "y": 28159,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p204",
    "name": "Park / Skwer P204 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 7628,
        "y": 27630
      },
      {
        "x": 8146,
        "y": 27630
      },
      {
        "x": 8146,
        "y": 28215
      },
      {
        "x": 7628,
        "y": 28215
      }
    ],
    "gates": [
      {
        "id": "p204_g_n",
        "x": 7887,
        "y": 27630,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p204_g_s",
        "x": 7887,
        "y": 28215,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p204_g_w",
        "x": 7628,
        "y": 27922,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p204_g_e",
        "x": 8146,
        "y": 27922,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p205",
    "name": "Park / Skwer P205 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 15480,
        "y": 27968
      },
      {
        "x": 17010,
        "y": 27968
      },
      {
        "x": 17010,
        "y": 28846
      },
      {
        "x": 15480,
        "y": 28846
      }
    ],
    "gates": [
      {
        "id": "p205_g_n",
        "x": 16245,
        "y": 27968,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p205_g_s",
        "x": 16245,
        "y": 28846,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p205_g_w",
        "x": 15480,
        "y": 28407,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p205_g_e",
        "x": 17010,
        "y": 28407,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p206",
    "name": "Park / Skwer P206 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19125,
        "y": 28148
      },
      {
        "x": 19687,
        "y": 28148
      },
      {
        "x": 19687,
        "y": 29070
      },
      {
        "x": 19125,
        "y": 29070
      }
    ],
    "gates": [
      {
        "id": "p206_g_n",
        "x": 19406,
        "y": 28148,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p206_g_s",
        "x": 19406,
        "y": 29070,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p206_g_w",
        "x": 19125,
        "y": 28609,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p206_g_e",
        "x": 19687,
        "y": 28609,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p207",
    "name": "Park / Skwer P207 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 22882,
        "y": 27788
      },
      {
        "x": 23130,
        "y": 27788
      },
      {
        "x": 23130,
        "y": 28148
      },
      {
        "x": 22882,
        "y": 28148
      }
    ],
    "gates": [
      {
        "id": "p207_g_n",
        "x": 23006,
        "y": 27788,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p207_g_s",
        "x": 23006,
        "y": 28148,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p207_g_w",
        "x": 22882,
        "y": 27968,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p207_g_e",
        "x": 23130,
        "y": 27968,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p208",
    "name": "Park / Skwer P208 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30915,
        "y": 27472
      },
      {
        "x": 31523,
        "y": 27472
      },
      {
        "x": 31523,
        "y": 28822
      },
      {
        "x": 30915,
        "y": 28822
      }
    ],
    "gates": [
      {
        "id": "p208_g_n",
        "x": 31219,
        "y": 27472,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p208_g_s",
        "x": 31219,
        "y": 28822,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p208_g_w",
        "x": 30915,
        "y": 28147,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p208_g_e",
        "x": 31523,
        "y": 28147,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p209",
    "name": "Park / Skwer P209 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4860,
        "y": 28598
      },
      {
        "x": 5782,
        "y": 28598
      },
      {
        "x": 5782,
        "y": 29296
      },
      {
        "x": 4860,
        "y": 29296
      }
    ],
    "gates": [
      {
        "id": "p209_g_n",
        "x": 5321,
        "y": 28598,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p209_g_s",
        "x": 5321,
        "y": 29296,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p209_g_w",
        "x": 4860,
        "y": 28947,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p209_g_e",
        "x": 5782,
        "y": 28947,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p210",
    "name": "Park / Skwer P210 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4950,
        "y": 28912
      },
      {
        "x": 7718,
        "y": 28912
      },
      {
        "x": 7718,
        "y": 30510
      },
      {
        "x": 4950,
        "y": 30510
      }
    ],
    "gates": [
      {
        "id": "p210_g_n",
        "x": 6334,
        "y": 28912,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p210_g_s",
        "x": 6334,
        "y": 30510,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p210_g_w",
        "x": 4950,
        "y": 29711,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p210_g_e",
        "x": 7718,
        "y": 29711,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p211",
    "name": "Park / Skwer P211 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 6885,
        "y": 28935
      },
      {
        "x": 7470,
        "y": 28935
      },
      {
        "x": 7470,
        "y": 29295
      },
      {
        "x": 6885,
        "y": 29295
      }
    ],
    "gates": [
      {
        "id": "p211_g_n",
        "x": 7178,
        "y": 28935,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p211_g_s",
        "x": 7178,
        "y": 29295,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p211_g_w",
        "x": 6885,
        "y": 29115,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p211_g_e",
        "x": 7470,
        "y": 29115,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p212",
    "name": "Park / Skwer P212 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 8100,
        "y": 28642
      },
      {
        "x": 8662,
        "y": 28642
      },
      {
        "x": 8662,
        "y": 29520
      },
      {
        "x": 8100,
        "y": 29520
      }
    ],
    "gates": [
      {
        "id": "p212_g_n",
        "x": 8381,
        "y": 28642,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p212_g_s",
        "x": 8381,
        "y": 29520,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p212_g_w",
        "x": 8100,
        "y": 29081,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p212_g_e",
        "x": 8662,
        "y": 29081,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p213",
    "name": "Park / Skwer P213 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 8662,
        "y": 28688
      },
      {
        "x": 9540,
        "y": 28688
      },
      {
        "x": 9540,
        "y": 29723
      },
      {
        "x": 8662,
        "y": 29723
      }
    ],
    "gates": [
      {
        "id": "p213_g_n",
        "x": 9101,
        "y": 28688,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p213_g_s",
        "x": 9101,
        "y": 29723,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p213_g_w",
        "x": 8662,
        "y": 29206,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p213_g_e",
        "x": 9540,
        "y": 29206,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p214",
    "name": "Park / Skwer P214 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 9945,
        "y": 28215
      },
      {
        "x": 11970,
        "y": 28215
      },
      {
        "x": 11970,
        "y": 30533
      },
      {
        "x": 9945,
        "y": 30533
      }
    ],
    "gates": [
      {
        "id": "p214_g_n",
        "x": 10958,
        "y": 28215,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p214_g_s",
        "x": 10958,
        "y": 30533,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p214_g_w",
        "x": 9945,
        "y": 29374,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p214_g_e",
        "x": 11970,
        "y": 29374,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p215",
    "name": "Park / Skwer P215 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 18720,
        "y": 28935
      },
      {
        "x": 18832,
        "y": 28935
      },
      {
        "x": 18832,
        "y": 30870
      },
      {
        "x": 18720,
        "y": 30870
      }
    ],
    "gates": [
      {
        "id": "p215_g_n",
        "x": 18776,
        "y": 28935,
        "width": 50,
        "side": "top"
      },
      {
        "id": "p215_g_s",
        "x": 18776,
        "y": 30870,
        "width": 50,
        "side": "bottom"
      },
      {
        "id": "p215_g_w",
        "x": 18720,
        "y": 29902,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p215_g_e",
        "x": 18832,
        "y": 29902,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p216",
    "name": "Park / Skwer P216 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 20610,
        "y": 28215
      },
      {
        "x": 21578,
        "y": 28215
      },
      {
        "x": 21578,
        "y": 30083
      },
      {
        "x": 20610,
        "y": 30083
      }
    ],
    "gates": [
      {
        "id": "p216_g_n",
        "x": 21094,
        "y": 28215,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p216_g_s",
        "x": 21094,
        "y": 30083,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p216_g_w",
        "x": 20610,
        "y": 29149,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p216_g_e",
        "x": 21578,
        "y": 29149,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p217",
    "name": "Park / Skwer P217 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 29362,
        "y": 28642
      },
      {
        "x": 29902,
        "y": 28642
      },
      {
        "x": 29902,
        "y": 29204
      },
      {
        "x": 29362,
        "y": 29204
      }
    ],
    "gates": [
      {
        "id": "p217_g_n",
        "x": 29632,
        "y": 28642,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p217_g_s",
        "x": 29632,
        "y": 29204,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p217_g_w",
        "x": 29362,
        "y": 28923,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p217_g_e",
        "x": 29902,
        "y": 28923,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p218",
    "name": "Park / Skwer P218 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31388,
        "y": 28868
      },
      {
        "x": 31636,
        "y": 28868
      },
      {
        "x": 31636,
        "y": 29273
      },
      {
        "x": 31388,
        "y": 29273
      }
    ],
    "gates": [
      {
        "id": "p218_g_n",
        "x": 31512,
        "y": 28868,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p218_g_s",
        "x": 31512,
        "y": 29273,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p218_g_w",
        "x": 31388,
        "y": 29070,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p218_g_e",
        "x": 31636,
        "y": 29070,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p219",
    "name": "Park / Skwer P219 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31680,
        "y": 28755
      },
      {
        "x": 32108,
        "y": 28755
      },
      {
        "x": 32108,
        "y": 29205
      },
      {
        "x": 31680,
        "y": 29205
      }
    ],
    "gates": [
      {
        "id": "p219_g_n",
        "x": 31894,
        "y": 28755,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p219_g_s",
        "x": 31894,
        "y": 29205,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p219_g_w",
        "x": 31680,
        "y": 28980,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p219_g_e",
        "x": 32108,
        "y": 28980,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p220",
    "name": "Park / Skwer P220 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 32198,
        "y": 28215
      },
      {
        "x": 32468,
        "y": 28215
      },
      {
        "x": 32468,
        "y": 28597
      },
      {
        "x": 32198,
        "y": 28597
      }
    ],
    "gates": [
      {
        "id": "p220_g_n",
        "x": 32333,
        "y": 28215,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p220_g_s",
        "x": 32333,
        "y": 28597,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p220_g_w",
        "x": 32198,
        "y": 28406,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p220_g_e",
        "x": 32468,
        "y": 28406,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p221",
    "name": "Park / Skwer P221 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 32422,
        "y": 28215
      },
      {
        "x": 32804,
        "y": 28215
      },
      {
        "x": 32804,
        "y": 28507
      },
      {
        "x": 32422,
        "y": 28507
      }
    ],
    "gates": [
      {
        "id": "p221_g_n",
        "x": 32613,
        "y": 28215,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p221_g_s",
        "x": 32613,
        "y": 28507,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p221_g_w",
        "x": 32422,
        "y": 28361,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p221_g_e",
        "x": 32804,
        "y": 28361,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p222",
    "name": "Park / Skwer P222 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 7920,
        "y": 29678
      },
      {
        "x": 8550,
        "y": 29678
      },
      {
        "x": 8550,
        "y": 30128
      },
      {
        "x": 7920,
        "y": 30128
      }
    ],
    "gates": [
      {
        "id": "p222_g_n",
        "x": 8235,
        "y": 29678,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p222_g_s",
        "x": 8235,
        "y": 30128,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p222_g_w",
        "x": 7920,
        "y": 29903,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p222_g_e",
        "x": 8550,
        "y": 29903,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p223",
    "name": "Park / Skwer P223 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 8572,
        "y": 29992
      },
      {
        "x": 9022,
        "y": 29992
      },
      {
        "x": 9022,
        "y": 30240
      },
      {
        "x": 8572,
        "y": 30240
      }
    ],
    "gates": [
      {
        "id": "p223_g_n",
        "x": 8797,
        "y": 29992,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p223_g_s",
        "x": 8797,
        "y": 30240,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p223_g_w",
        "x": 8572,
        "y": 30116,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p223_g_e",
        "x": 9022,
        "y": 30116,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p224",
    "name": "Park / Skwer P224 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19395,
        "y": 29745
      },
      {
        "x": 20475,
        "y": 29745
      },
      {
        "x": 20475,
        "y": 32040
      },
      {
        "x": 19395,
        "y": 32040
      }
    ],
    "gates": [
      {
        "id": "p224_g_n",
        "x": 19935,
        "y": 29745,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p224_g_s",
        "x": 19935,
        "y": 32040,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p224_g_w",
        "x": 19395,
        "y": 30892,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p224_g_e",
        "x": 20475,
        "y": 30892,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p225",
    "name": "Park / Skwer P225 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 20430,
        "y": 29992
      },
      {
        "x": 21105,
        "y": 29992
      },
      {
        "x": 21105,
        "y": 30487
      },
      {
        "x": 20430,
        "y": 30487
      }
    ],
    "gates": [
      {
        "id": "p225_g_n",
        "x": 20768,
        "y": 29992,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p225_g_s",
        "x": 20768,
        "y": 30487,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p225_g_w",
        "x": 20430,
        "y": 30240,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p225_g_e",
        "x": 21105,
        "y": 30240,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p226",
    "name": "Park / Skwer P226 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 21375,
        "y": 29362
      },
      {
        "x": 21713,
        "y": 29362
      },
      {
        "x": 21713,
        "y": 30577
      },
      {
        "x": 21375,
        "y": 30577
      }
    ],
    "gates": [
      {
        "id": "p226_g_n",
        "x": 21544,
        "y": 29362,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p226_g_s",
        "x": 21544,
        "y": 30577,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p226_g_w",
        "x": 21375,
        "y": 29970,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p226_g_e",
        "x": 21713,
        "y": 29970,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p227",
    "name": "Park / Skwer P227 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 25852,
        "y": 29880
      },
      {
        "x": 29227,
        "y": 29880
      },
      {
        "x": 29227,
        "y": 35730
      },
      {
        "x": 25852,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p227_g_n",
        "x": 27540,
        "y": 29880,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p227_g_s",
        "x": 27540,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p227_g_w",
        "x": 25852,
        "y": 32805,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p227_g_e",
        "x": 29227,
        "y": 32805,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p228",
    "name": "Park / Skwer P228 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 26212,
        "y": 29182
      },
      {
        "x": 26594,
        "y": 29182
      },
      {
        "x": 26594,
        "y": 29677
      },
      {
        "x": 26212,
        "y": 29677
      }
    ],
    "gates": [
      {
        "id": "p228_g_n",
        "x": 26403,
        "y": 29182,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p228_g_s",
        "x": 26403,
        "y": 29677,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p228_g_w",
        "x": 26212,
        "y": 29430,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p228_g_e",
        "x": 26594,
        "y": 29430,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p229",
    "name": "Park / Skwer P229 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 27945,
        "y": 29790
      },
      {
        "x": 28395,
        "y": 29790
      },
      {
        "x": 28395,
        "y": 30532
      },
      {
        "x": 27945,
        "y": 30532
      }
    ],
    "gates": [
      {
        "id": "p229_g_n",
        "x": 28170,
        "y": 29790,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p229_g_s",
        "x": 28170,
        "y": 30532,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p229_g_w",
        "x": 27945,
        "y": 30161,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p229_g_e",
        "x": 28395,
        "y": 30161,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p230",
    "name": "Park / Skwer P230 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30105,
        "y": 29340
      },
      {
        "x": 30713,
        "y": 29340
      },
      {
        "x": 30713,
        "y": 30285
      },
      {
        "x": 30105,
        "y": 30285
      }
    ],
    "gates": [
      {
        "id": "p230_g_n",
        "x": 30409,
        "y": 29340,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p230_g_s",
        "x": 30409,
        "y": 30285,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p230_g_w",
        "x": 30105,
        "y": 29812,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p230_g_e",
        "x": 30713,
        "y": 29812,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p231",
    "name": "Park / Skwer P231 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30938,
        "y": 29632
      },
      {
        "x": 31276,
        "y": 29632
      },
      {
        "x": 31276,
        "y": 30082
      },
      {
        "x": 30938,
        "y": 30082
      }
    ],
    "gates": [
      {
        "id": "p231_g_n",
        "x": 31107,
        "y": 29632,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p231_g_s",
        "x": 31107,
        "y": 30082,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p231_g_w",
        "x": 30938,
        "y": 29857,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p231_g_e",
        "x": 31276,
        "y": 29857,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p232",
    "name": "Park / Skwer P232 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31882,
        "y": 29430
      },
      {
        "x": 32287,
        "y": 29430
      },
      {
        "x": 32287,
        "y": 30082
      },
      {
        "x": 31882,
        "y": 30082
      }
    ],
    "gates": [
      {
        "id": "p232_g_n",
        "x": 32084,
        "y": 29430,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p232_g_s",
        "x": 32084,
        "y": 30082,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p232_g_w",
        "x": 31882,
        "y": 29756,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p232_g_e",
        "x": 32287,
        "y": 29756,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p233",
    "name": "Park / Skwer P233 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4590,
        "y": 30870
      },
      {
        "x": 5175,
        "y": 30870
      },
      {
        "x": 5175,
        "y": 31635
      },
      {
        "x": 4590,
        "y": 31635
      }
    ],
    "gates": [
      {
        "id": "p233_g_n",
        "x": 4882,
        "y": 30870,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p233_g_s",
        "x": 4882,
        "y": 31635,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p233_g_w",
        "x": 4590,
        "y": 31252,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p233_g_e",
        "x": 5175,
        "y": 31252,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p234",
    "name": "Park / Skwer P234 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4590,
        "y": 30150
      },
      {
        "x": 4905,
        "y": 30150
      },
      {
        "x": 4905,
        "y": 30802
      },
      {
        "x": 4590,
        "y": 30802
      }
    ],
    "gates": [
      {
        "id": "p234_g_n",
        "x": 4748,
        "y": 30150,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p234_g_s",
        "x": 4748,
        "y": 30802,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p234_g_w",
        "x": 4590,
        "y": 30476,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p234_g_e",
        "x": 4905,
        "y": 30476,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p235",
    "name": "Park / Skwer P235 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 5400,
        "y": 30352
      },
      {
        "x": 13568,
        "y": 30352
      },
      {
        "x": 13568,
        "y": 35730
      },
      {
        "x": 5400,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p235_g_n",
        "x": 9484,
        "y": 30352,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p235_g_s",
        "x": 9484,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p235_g_w",
        "x": 5400,
        "y": 33041,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p235_g_e",
        "x": 13568,
        "y": 33041,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p236",
    "name": "Park / Skwer P236 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 9652,
        "y": 30420
      },
      {
        "x": 10934,
        "y": 30420
      },
      {
        "x": 10934,
        "y": 31005
      },
      {
        "x": 9652,
        "y": 31005
      }
    ],
    "gates": [
      {
        "id": "p236_g_n",
        "x": 10293,
        "y": 30420,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p236_g_s",
        "x": 10293,
        "y": 31005,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p236_g_w",
        "x": 9652,
        "y": 30712,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p236_g_e",
        "x": 10934,
        "y": 30712,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p237",
    "name": "Park / Skwer P237 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 12465,
        "y": 30128
      },
      {
        "x": 16357,
        "y": 30128
      },
      {
        "x": 16357,
        "y": 32873
      },
      {
        "x": 12465,
        "y": 32873
      }
    ],
    "gates": [
      {
        "id": "p237_g_n",
        "x": 14411,
        "y": 30128,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p237_g_s",
        "x": 14411,
        "y": 32873,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p237_g_w",
        "x": 12465,
        "y": 31500,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p237_g_e",
        "x": 16357,
        "y": 31500,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p238",
    "name": "Park / Skwer P238 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 15412,
        "y": 30465
      },
      {
        "x": 16740,
        "y": 30465
      },
      {
        "x": 16740,
        "y": 31163
      },
      {
        "x": 15412,
        "y": 31163
      }
    ],
    "gates": [
      {
        "id": "p238_g_n",
        "x": 16076,
        "y": 30465,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p238_g_s",
        "x": 16076,
        "y": 31163,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p238_g_w",
        "x": 15412,
        "y": 30814,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p238_g_e",
        "x": 16740,
        "y": 30814,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p239",
    "name": "Park / Skwer P239 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 16808,
        "y": 30420
      },
      {
        "x": 18068,
        "y": 30420
      },
      {
        "x": 18068,
        "y": 31342
      },
      {
        "x": 16808,
        "y": 31342
      }
    ],
    "gates": [
      {
        "id": "p239_g_n",
        "x": 17438,
        "y": 30420,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p239_g_s",
        "x": 17438,
        "y": 31342,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p239_g_w",
        "x": 16808,
        "y": 30881,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p239_g_e",
        "x": 18068,
        "y": 30881,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p240",
    "name": "Park / Skwer P240 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 20250,
        "y": 30510
      },
      {
        "x": 20700,
        "y": 30510
      },
      {
        "x": 20700,
        "y": 31140
      },
      {
        "x": 20250,
        "y": 31140
      }
    ],
    "gates": [
      {
        "id": "p240_g_n",
        "x": 20475,
        "y": 30510,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p240_g_s",
        "x": 20475,
        "y": 31140,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p240_g_w",
        "x": 20250,
        "y": 30825,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p240_g_e",
        "x": 20700,
        "y": 30825,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p241",
    "name": "Park / Skwer P241 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 20970,
        "y": 30712
      },
      {
        "x": 21398,
        "y": 30712
      },
      {
        "x": 21398,
        "y": 32130
      },
      {
        "x": 20970,
        "y": 32130
      }
    ],
    "gates": [
      {
        "id": "p241_g_n",
        "x": 21184,
        "y": 30712,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p241_g_s",
        "x": 21184,
        "y": 32130,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p241_g_w",
        "x": 20970,
        "y": 31421,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p241_g_e",
        "x": 21398,
        "y": 31421,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p242",
    "name": "Park / Skwer P242 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 23288,
        "y": 30330
      },
      {
        "x": 27450,
        "y": 30330
      },
      {
        "x": 27450,
        "y": 34132
      },
      {
        "x": 23288,
        "y": 34132
      }
    ],
    "gates": [
      {
        "id": "p242_g_n",
        "x": 25369,
        "y": 30330,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p242_g_s",
        "x": 25369,
        "y": 34132,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p242_g_w",
        "x": 23288,
        "y": 32231,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p242_g_e",
        "x": 27450,
        "y": 32231,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p243",
    "name": "Park / Skwer P243 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 24660,
        "y": 30352
      },
      {
        "x": 25312,
        "y": 30352
      },
      {
        "x": 25312,
        "y": 30802
      },
      {
        "x": 24660,
        "y": 30802
      }
    ],
    "gates": [
      {
        "id": "p243_g_n",
        "x": 24986,
        "y": 30352,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p243_g_s",
        "x": 24986,
        "y": 30802,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p243_g_w",
        "x": 24660,
        "y": 30577,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p243_g_e",
        "x": 25312,
        "y": 30577,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p244",
    "name": "Park / Skwer P244 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30420,
        "y": 30218
      },
      {
        "x": 31050,
        "y": 30218
      },
      {
        "x": 31050,
        "y": 30938
      },
      {
        "x": 30420,
        "y": 30938
      }
    ],
    "gates": [
      {
        "id": "p244_g_n",
        "x": 30735,
        "y": 30218,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p244_g_s",
        "x": 30735,
        "y": 30938,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p244_g_w",
        "x": 30420,
        "y": 30578,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p244_g_e",
        "x": 31050,
        "y": 30578,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p245",
    "name": "Park / Skwer P245 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31208,
        "y": 30712
      },
      {
        "x": 31680,
        "y": 30712
      },
      {
        "x": 31680,
        "y": 31094
      },
      {
        "x": 31208,
        "y": 31094
      }
    ],
    "gates": [
      {
        "id": "p245_g_n",
        "x": 31444,
        "y": 30712,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p245_g_s",
        "x": 31444,
        "y": 31094,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p245_g_w",
        "x": 31208,
        "y": 30903,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p245_g_e",
        "x": 31680,
        "y": 30903,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p246",
    "name": "Park / Skwer P246 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 32422,
        "y": 30622
      },
      {
        "x": 32804,
        "y": 30622
      },
      {
        "x": 32804,
        "y": 31140
      },
      {
        "x": 32422,
        "y": 31140
      }
    ],
    "gates": [
      {
        "id": "p246_g_n",
        "x": 32613,
        "y": 30622,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p246_g_s",
        "x": 32613,
        "y": 31140,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p246_g_w",
        "x": 32422,
        "y": 30881,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p246_g_e",
        "x": 32804,
        "y": 30881,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p247",
    "name": "Park / Skwer P247 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 11048,
        "y": 31005
      },
      {
        "x": 11723,
        "y": 31005
      },
      {
        "x": 11723,
        "y": 31635
      },
      {
        "x": 11048,
        "y": 31635
      }
    ],
    "gates": [
      {
        "id": "p247_g_n",
        "x": 11386,
        "y": 31005,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p247_g_s",
        "x": 11386,
        "y": 31635,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p247_g_w",
        "x": 11048,
        "y": 31320,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p247_g_e",
        "x": 11723,
        "y": 31320,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p248",
    "name": "Park / Skwer P248 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 13230,
        "y": 31432
      },
      {
        "x": 14535,
        "y": 31432
      },
      {
        "x": 14535,
        "y": 32400
      },
      {
        "x": 13230,
        "y": 32400
      }
    ],
    "gates": [
      {
        "id": "p248_g_n",
        "x": 13882,
        "y": 31432,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p248_g_s",
        "x": 13882,
        "y": 32400,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p248_g_w",
        "x": 13230,
        "y": 31916,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p248_g_e",
        "x": 14535,
        "y": 31916,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p249",
    "name": "Park / Skwer P249 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 14490,
        "y": 31342
      },
      {
        "x": 15412,
        "y": 31342
      },
      {
        "x": 15412,
        "y": 31927
      },
      {
        "x": 14490,
        "y": 31927
      }
    ],
    "gates": [
      {
        "id": "p249_g_n",
        "x": 14951,
        "y": 31342,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p249_g_s",
        "x": 14951,
        "y": 31927,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p249_g_w",
        "x": 14490,
        "y": 31634,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p249_g_e",
        "x": 15412,
        "y": 31634,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p250",
    "name": "Park / Skwer P250 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 14535,
        "y": 30960
      },
      {
        "x": 18675,
        "y": 30960
      },
      {
        "x": 18675,
        "y": 35730
      },
      {
        "x": 14535,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p250_g_n",
        "x": 16605,
        "y": 30960,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p250_g_s",
        "x": 16605,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p250_g_w",
        "x": 14535,
        "y": 33345,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p250_g_e",
        "x": 18675,
        "y": 33345,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p251",
    "name": "Park / Skwer P251 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 16155,
        "y": 31185
      },
      {
        "x": 16673,
        "y": 31185
      },
      {
        "x": 16673,
        "y": 31635
      },
      {
        "x": 16155,
        "y": 31635
      }
    ],
    "gates": [
      {
        "id": "p251_g_n",
        "x": 16414,
        "y": 31185,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p251_g_s",
        "x": 16414,
        "y": 31635,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p251_g_w",
        "x": 16155,
        "y": 31410,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p251_g_e",
        "x": 16673,
        "y": 31410,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p252",
    "name": "Park / Skwer P252 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 17078,
        "y": 31478
      },
      {
        "x": 17528,
        "y": 31478
      },
      {
        "x": 17528,
        "y": 31883
      },
      {
        "x": 17078,
        "y": 31883
      }
    ],
    "gates": [
      {
        "id": "p252_g_n",
        "x": 17303,
        "y": 31478,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p252_g_s",
        "x": 17303,
        "y": 31883,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p252_g_w",
        "x": 17078,
        "y": 31680,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p252_g_e",
        "x": 17528,
        "y": 31680,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p253",
    "name": "Park / Skwer P253 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19980,
        "y": 31230
      },
      {
        "x": 20790,
        "y": 31230
      },
      {
        "x": 20790,
        "y": 32332
      },
      {
        "x": 19980,
        "y": 32332
      }
    ],
    "gates": [
      {
        "id": "p253_g_n",
        "x": 20385,
        "y": 31230,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p253_g_s",
        "x": 20385,
        "y": 32332,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p253_g_w",
        "x": 19980,
        "y": 31781,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p253_g_e",
        "x": 20790,
        "y": 31781,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p254",
    "name": "Park / Skwer P254 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 22028,
        "y": 31702
      },
      {
        "x": 25020,
        "y": 31702
      },
      {
        "x": 25020,
        "y": 35730
      },
      {
        "x": 22028,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p254_g_n",
        "x": 23524,
        "y": 31702,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p254_g_s",
        "x": 23524,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p254_g_w",
        "x": 22028,
        "y": 33716,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p254_g_e",
        "x": 25020,
        "y": 33716,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p255",
    "name": "Park / Skwer P255 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 27338,
        "y": 31140
      },
      {
        "x": 29768,
        "y": 31140
      },
      {
        "x": 29768,
        "y": 35730
      },
      {
        "x": 27338,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p255_g_n",
        "x": 28553,
        "y": 31140,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p255_g_s",
        "x": 28553,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p255_g_w",
        "x": 27338,
        "y": 33435,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p255_g_e",
        "x": 29768,
        "y": 33435,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p256",
    "name": "Park / Skwer P256 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30825,
        "y": 30960
      },
      {
        "x": 31140,
        "y": 30960
      },
      {
        "x": 31140,
        "y": 31432
      },
      {
        "x": 30825,
        "y": 31432
      }
    ],
    "gates": [
      {
        "id": "p256_g_n",
        "x": 30982,
        "y": 30960,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p256_g_s",
        "x": 30982,
        "y": 31432,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p256_g_w",
        "x": 30825,
        "y": 31196,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p256_g_e",
        "x": 31140,
        "y": 31196,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p257",
    "name": "Park / Skwer P257 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31590,
        "y": 31320
      },
      {
        "x": 32805,
        "y": 31320
      },
      {
        "x": 32805,
        "y": 32108
      },
      {
        "x": 31590,
        "y": 32108
      }
    ],
    "gates": [
      {
        "id": "p257_g_n",
        "x": 32198,
        "y": 31320,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p257_g_s",
        "x": 32198,
        "y": 32108,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p257_g_w",
        "x": 31590,
        "y": 31714,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p257_g_e",
        "x": 32805,
        "y": 31714,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p258",
    "name": "Park / Skwer P258 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 6052,
        "y": 32468
      },
      {
        "x": 10642,
        "y": 32468
      },
      {
        "x": 10642,
        "y": 35730
      },
      {
        "x": 6052,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p258_g_n",
        "x": 8347,
        "y": 32468,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p258_g_s",
        "x": 8347,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p258_g_w",
        "x": 6052,
        "y": 34099,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p258_g_e",
        "x": 10642,
        "y": 34099,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p259",
    "name": "Park / Skwer P259 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 12735,
        "y": 32422
      },
      {
        "x": 13140,
        "y": 32422
      },
      {
        "x": 13140,
        "y": 33210
      },
      {
        "x": 12735,
        "y": 33210
      }
    ],
    "gates": [
      {
        "id": "p259_g_n",
        "x": 12938,
        "y": 32422,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p259_g_s",
        "x": 12938,
        "y": 33210,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p259_g_w",
        "x": 12735,
        "y": 32816,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p259_g_e",
        "x": 13140,
        "y": 32816,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p260",
    "name": "Park / Skwer P260 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 13815,
        "y": 32670
      },
      {
        "x": 16110,
        "y": 32670
      },
      {
        "x": 16110,
        "y": 34672
      },
      {
        "x": 13815,
        "y": 34672
      }
    ],
    "gates": [
      {
        "id": "p260_g_n",
        "x": 14962,
        "y": 32670,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p260_g_s",
        "x": 14962,
        "y": 34672,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p260_g_w",
        "x": 13815,
        "y": 33671,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p260_g_e",
        "x": 16110,
        "y": 33671,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p261",
    "name": "Park / Skwer P261 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 14985,
        "y": 32625
      },
      {
        "x": 15390,
        "y": 32625
      },
      {
        "x": 15390,
        "y": 32963
      },
      {
        "x": 14985,
        "y": 32963
      }
    ],
    "gates": [
      {
        "id": "p261_g_n",
        "x": 15188,
        "y": 32625,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p261_g_s",
        "x": 15188,
        "y": 32963,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p261_g_w",
        "x": 14985,
        "y": 32794,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p261_g_e",
        "x": 15390,
        "y": 32794,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p262",
    "name": "Park / Skwer P262 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 15480,
        "y": 31882
      },
      {
        "x": 15862,
        "y": 31882
      },
      {
        "x": 15862,
        "y": 32264
      },
      {
        "x": 15480,
        "y": 32264
      }
    ],
    "gates": [
      {
        "id": "p262_g_n",
        "x": 15671,
        "y": 31882,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p262_g_s",
        "x": 15671,
        "y": 32264,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p262_g_w",
        "x": 15480,
        "y": 32073,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p262_g_e",
        "x": 15862,
        "y": 32073,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p263",
    "name": "Park / Skwer P263 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 16268,
        "y": 32265
      },
      {
        "x": 16808,
        "y": 32265
      },
      {
        "x": 16808,
        "y": 32490
      },
      {
        "x": 16268,
        "y": 32490
      }
    ],
    "gates": [
      {
        "id": "p263_g_n",
        "x": 16538,
        "y": 32265,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p263_g_s",
        "x": 16538,
        "y": 32490,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p263_g_w",
        "x": 16268,
        "y": 32378,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p263_g_e",
        "x": 16808,
        "y": 32378,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p264",
    "name": "Park / Skwer P264 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 17302,
        "y": 32152
      },
      {
        "x": 17527,
        "y": 32152
      },
      {
        "x": 17527,
        "y": 32490
      },
      {
        "x": 17302,
        "y": 32490
      }
    ],
    "gates": [
      {
        "id": "p264_g_n",
        "x": 17414,
        "y": 32152,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p264_g_s",
        "x": 17414,
        "y": 32490,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p264_g_w",
        "x": 17302,
        "y": 32321,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p264_g_e",
        "x": 17527,
        "y": 32321,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p265",
    "name": "Park / Skwer P265 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 17572,
        "y": 32175
      },
      {
        "x": 17820,
        "y": 32175
      },
      {
        "x": 17820,
        "y": 33030
      },
      {
        "x": 17572,
        "y": 33030
      }
    ],
    "gates": [
      {
        "id": "p265_g_n",
        "x": 17696,
        "y": 32175,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p265_g_s",
        "x": 17696,
        "y": 33030,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p265_g_w",
        "x": 17572,
        "y": 32602,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p265_g_e",
        "x": 17820,
        "y": 32602,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p266",
    "name": "Park / Skwer P266 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 18765,
        "y": 32400
      },
      {
        "x": 19013,
        "y": 32400
      },
      {
        "x": 19013,
        "y": 32940
      },
      {
        "x": 18765,
        "y": 32940
      }
    ],
    "gates": [
      {
        "id": "p266_g_n",
        "x": 18889,
        "y": 32400,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p266_g_s",
        "x": 18889,
        "y": 32940,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p266_g_w",
        "x": 18765,
        "y": 32670,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p266_g_e",
        "x": 19013,
        "y": 32670,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p267",
    "name": "Park / Skwer P267 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19935,
        "y": 32535
      },
      {
        "x": 20363,
        "y": 32535
      },
      {
        "x": 20363,
        "y": 32895
      },
      {
        "x": 19935,
        "y": 32895
      }
    ],
    "gates": [
      {
        "id": "p267_g_n",
        "x": 20149,
        "y": 32535,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p267_g_s",
        "x": 20149,
        "y": 32895,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p267_g_w",
        "x": 19935,
        "y": 32715,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p267_g_e",
        "x": 20363,
        "y": 32715,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p268",
    "name": "Park / Skwer P268 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 26708,
        "y": 32490
      },
      {
        "x": 27180,
        "y": 32490
      },
      {
        "x": 27180,
        "y": 33255
      },
      {
        "x": 26708,
        "y": 33255
      }
    ],
    "gates": [
      {
        "id": "p268_g_n",
        "x": 26944,
        "y": 32490,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p268_g_s",
        "x": 26944,
        "y": 33255,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p268_g_w",
        "x": 26708,
        "y": 32872,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p268_g_e",
        "x": 27180,
        "y": 32872,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p269",
    "name": "Park / Skwer P269 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4590,
        "y": 32828
      },
      {
        "x": 5850,
        "y": 32828
      },
      {
        "x": 5850,
        "y": 34043
      },
      {
        "x": 4590,
        "y": 34043
      }
    ],
    "gates": [
      {
        "id": "p269_g_n",
        "x": 5220,
        "y": 32828,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p269_g_s",
        "x": 5220,
        "y": 34043,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p269_g_w",
        "x": 4590,
        "y": 33436,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p269_g_e",
        "x": 5850,
        "y": 33436,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p270",
    "name": "Park / Skwer P270 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 6458,
        "y": 33435
      },
      {
        "x": 6998,
        "y": 33435
      },
      {
        "x": 6998,
        "y": 33683
      },
      {
        "x": 6458,
        "y": 33683
      }
    ],
    "gates": [
      {
        "id": "p270_g_n",
        "x": 6728,
        "y": 33435,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p270_g_s",
        "x": 6728,
        "y": 33683,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p270_g_w",
        "x": 6458,
        "y": 33559,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p270_g_e",
        "x": 6998,
        "y": 33559,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p271",
    "name": "Park / Skwer P271 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 9180,
        "y": 32760
      },
      {
        "x": 10328,
        "y": 32760
      },
      {
        "x": 10328,
        "y": 34538
      },
      {
        "x": 9180,
        "y": 34538
      }
    ],
    "gates": [
      {
        "id": "p271_g_n",
        "x": 9754,
        "y": 32760,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p271_g_s",
        "x": 9754,
        "y": 34538,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p271_g_w",
        "x": 9180,
        "y": 33649,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p271_g_e",
        "x": 10328,
        "y": 33649,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p272",
    "name": "Park / Skwer P272 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 12262,
        "y": 32850
      },
      {
        "x": 12554,
        "y": 32850
      },
      {
        "x": 12554,
        "y": 33682
      },
      {
        "x": 12262,
        "y": 33682
      }
    ],
    "gates": [
      {
        "id": "p272_g_n",
        "x": 12408,
        "y": 32850,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p272_g_s",
        "x": 12408,
        "y": 33682,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p272_g_w",
        "x": 12262,
        "y": 33266,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p272_g_e",
        "x": 12554,
        "y": 33266,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p273",
    "name": "Park / Skwer P273 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 12488,
        "y": 33120
      },
      {
        "x": 12960,
        "y": 33120
      },
      {
        "x": 12960,
        "y": 34200
      },
      {
        "x": 12488,
        "y": 34200
      }
    ],
    "gates": [
      {
        "id": "p273_g_n",
        "x": 12724,
        "y": 33120,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p273_g_s",
        "x": 12724,
        "y": 34200,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p273_g_w",
        "x": 12488,
        "y": 33660,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p273_g_e",
        "x": 12960,
        "y": 33660,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p274",
    "name": "Park / Skwer P274 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 13320,
        "y": 32738
      },
      {
        "x": 14018,
        "y": 32738
      },
      {
        "x": 14018,
        "y": 33818
      },
      {
        "x": 13320,
        "y": 33818
      }
    ],
    "gates": [
      {
        "id": "p274_g_n",
        "x": 13669,
        "y": 32738,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p274_g_s",
        "x": 13669,
        "y": 33818,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p274_g_w",
        "x": 13320,
        "y": 33278,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p274_g_e",
        "x": 14018,
        "y": 33278,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p275",
    "name": "Park / Skwer P275 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 15795,
        "y": 33075
      },
      {
        "x": 19215,
        "y": 33075
      },
      {
        "x": 19215,
        "y": 35415
      },
      {
        "x": 15795,
        "y": 35415
      }
    ],
    "gates": [
      {
        "id": "p275_g_n",
        "x": 17505,
        "y": 33075,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p275_g_s",
        "x": 17505,
        "y": 35415,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p275_g_w",
        "x": 15795,
        "y": 34245,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p275_g_e",
        "x": 19215,
        "y": 34245,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p276",
    "name": "Park / Skwer P276 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19125,
        "y": 33008
      },
      {
        "x": 19507,
        "y": 33008
      },
      {
        "x": 19507,
        "y": 33660
      },
      {
        "x": 19125,
        "y": 33660
      }
    ],
    "gates": [
      {
        "id": "p276_g_n",
        "x": 19316,
        "y": 33008,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p276_g_s",
        "x": 19316,
        "y": 33660,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p276_g_w",
        "x": 19125,
        "y": 33334,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p276_g_e",
        "x": 19507,
        "y": 33334,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p277",
    "name": "Park / Skwer P277 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 24548,
        "y": 32918
      },
      {
        "x": 25898,
        "y": 32918
      },
      {
        "x": 25898,
        "y": 34606
      },
      {
        "x": 24548,
        "y": 34606
      }
    ],
    "gates": [
      {
        "id": "p277_g_n",
        "x": 25223,
        "y": 32918,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p277_g_s",
        "x": 25223,
        "y": 34606,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p277_g_w",
        "x": 24548,
        "y": 33762,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p277_g_e",
        "x": 25898,
        "y": 33762,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p278",
    "name": "Park / Skwer P278 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 28688,
        "y": 33390
      },
      {
        "x": 29588,
        "y": 33390
      },
      {
        "x": 29588,
        "y": 33818
      },
      {
        "x": 28688,
        "y": 33818
      }
    ],
    "gates": [
      {
        "id": "p278_g_n",
        "x": 29138,
        "y": 33390,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p278_g_s",
        "x": 29138,
        "y": 33818,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p278_g_w",
        "x": 28688,
        "y": 33604,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p278_g_e",
        "x": 29588,
        "y": 33604,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p279",
    "name": "Park / Skwer P279 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 4860,
        "y": 34492
      },
      {
        "x": 5242,
        "y": 34492
      },
      {
        "x": 5242,
        "y": 34830
      },
      {
        "x": 4860,
        "y": 34830
      }
    ],
    "gates": [
      {
        "id": "p279_g_n",
        "x": 5051,
        "y": 34492,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p279_g_s",
        "x": 5051,
        "y": 34830,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p279_g_w",
        "x": 4860,
        "y": 34661,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p279_g_e",
        "x": 5242,
        "y": 34661,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p280",
    "name": "Park / Skwer P280 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 5468,
        "y": 33818
      },
      {
        "x": 5896,
        "y": 33818
      },
      {
        "x": 5896,
        "y": 34088
      },
      {
        "x": 5468,
        "y": 34088
      }
    ],
    "gates": [
      {
        "id": "p280_g_n",
        "x": 5682,
        "y": 33818,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p280_g_s",
        "x": 5682,
        "y": 34088,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p280_g_w",
        "x": 5468,
        "y": 33953,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p280_g_e",
        "x": 5896,
        "y": 33953,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p281",
    "name": "Park / Skwer P281 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 5918,
        "y": 34268
      },
      {
        "x": 6256,
        "y": 34268
      },
      {
        "x": 6256,
        "y": 34786
      },
      {
        "x": 5918,
        "y": 34786
      }
    ],
    "gates": [
      {
        "id": "p281_g_n",
        "x": 6087,
        "y": 34268,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p281_g_s",
        "x": 6087,
        "y": 34786,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p281_g_w",
        "x": 5918,
        "y": 34527,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p281_g_e",
        "x": 6256,
        "y": 34527,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p282",
    "name": "Park / Skwer P282 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 12690,
        "y": 34290
      },
      {
        "x": 14445,
        "y": 34290
      },
      {
        "x": 14445,
        "y": 35730
      },
      {
        "x": 12690,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p282_g_n",
        "x": 13568,
        "y": 34290,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p282_g_s",
        "x": 13568,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p282_g_w",
        "x": 12690,
        "y": 35010,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p282_g_e",
        "x": 14445,
        "y": 35010,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p283",
    "name": "Park / Skwer P283 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 13612,
        "y": 34492
      },
      {
        "x": 13994,
        "y": 34492
      },
      {
        "x": 13994,
        "y": 34987
      },
      {
        "x": 13612,
        "y": 34987
      }
    ],
    "gates": [
      {
        "id": "p283_g_n",
        "x": 13803,
        "y": 34492,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p283_g_s",
        "x": 13803,
        "y": 34987,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p283_g_w",
        "x": 13612,
        "y": 34740,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p283_g_e",
        "x": 13994,
        "y": 34740,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p284",
    "name": "Park / Skwer P284 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 15322,
        "y": 34290
      },
      {
        "x": 15794,
        "y": 34290
      },
      {
        "x": 15794,
        "y": 34785
      },
      {
        "x": 15322,
        "y": 34785
      }
    ],
    "gates": [
      {
        "id": "p284_g_n",
        "x": 15558,
        "y": 34290,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p284_g_s",
        "x": 15558,
        "y": 34785,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p284_g_w",
        "x": 15322,
        "y": 34538,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p284_g_e",
        "x": 15794,
        "y": 34538,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p285",
    "name": "Park / Skwer P285 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 19372,
        "y": 34245
      },
      {
        "x": 19844,
        "y": 34245
      },
      {
        "x": 19844,
        "y": 34920
      },
      {
        "x": 19372,
        "y": 34920
      }
    ],
    "gates": [
      {
        "id": "p285_g_n",
        "x": 19608,
        "y": 34245,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p285_g_s",
        "x": 19608,
        "y": 34920,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p285_g_w",
        "x": 19372,
        "y": 34582,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p285_g_e",
        "x": 19844,
        "y": 34582,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p286",
    "name": "Park / Skwer P286 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 21578,
        "y": 33952
      },
      {
        "x": 21893,
        "y": 33952
      },
      {
        "x": 21893,
        "y": 34290
      },
      {
        "x": 21578,
        "y": 34290
      }
    ],
    "gates": [
      {
        "id": "p286_g_n",
        "x": 21736,
        "y": 33952,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p286_g_s",
        "x": 21736,
        "y": 34290,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p286_g_w",
        "x": 21578,
        "y": 34121,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p286_g_e",
        "x": 21893,
        "y": 34121,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p287",
    "name": "Park / Skwer P287 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 25402,
        "y": 34155
      },
      {
        "x": 26280,
        "y": 34155
      },
      {
        "x": 26280,
        "y": 35685
      },
      {
        "x": 25402,
        "y": 35685
      }
    ],
    "gates": [
      {
        "id": "p287_g_n",
        "x": 25841,
        "y": 34155,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p287_g_s",
        "x": 25841,
        "y": 35685,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p287_g_w",
        "x": 25402,
        "y": 34920,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p287_g_e",
        "x": 26280,
        "y": 34920,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p288",
    "name": "Park / Skwer P288 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 28395,
        "y": 33952
      },
      {
        "x": 28687,
        "y": 33952
      },
      {
        "x": 28687,
        "y": 34380
      },
      {
        "x": 28395,
        "y": 34380
      }
    ],
    "gates": [
      {
        "id": "p288_g_n",
        "x": 28541,
        "y": 33952,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p288_g_s",
        "x": 28541,
        "y": 34380,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p288_g_w",
        "x": 28395,
        "y": 34166,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p288_g_e",
        "x": 28687,
        "y": 34166,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p289",
    "name": "Park / Skwer P289 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 30420,
        "y": 33660
      },
      {
        "x": 30982,
        "y": 33660
      },
      {
        "x": 30982,
        "y": 34245
      },
      {
        "x": 30420,
        "y": 34245
      }
    ],
    "gates": [
      {
        "id": "p289_g_n",
        "x": 30701,
        "y": 33660,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p289_g_s",
        "x": 30701,
        "y": 34245,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p289_g_w",
        "x": 30420,
        "y": 33952,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p289_g_e",
        "x": 30982,
        "y": 33952,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p290",
    "name": "Park / Skwer P290 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 6795,
        "y": 35055
      },
      {
        "x": 7133,
        "y": 35055
      },
      {
        "x": 7133,
        "y": 35730
      },
      {
        "x": 6795,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p290_g_n",
        "x": 6964,
        "y": 35055,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p290_g_s",
        "x": 6964,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p290_g_w",
        "x": 6795,
        "y": 35392,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p290_g_e",
        "x": 7133,
        "y": 35392,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p291",
    "name": "Park / Skwer P291 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 9540,
        "y": 34785
      },
      {
        "x": 10395,
        "y": 34785
      },
      {
        "x": 10395,
        "y": 35730
      },
      {
        "x": 9540,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p291_g_n",
        "x": 9968,
        "y": 34785,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p291_g_s",
        "x": 9968,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p291_g_w",
        "x": 9540,
        "y": 35258,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p291_g_e",
        "x": 10395,
        "y": 35258,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p292",
    "name": "Park / Skwer P292 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 13905,
        "y": 34942
      },
      {
        "x": 14850,
        "y": 34942
      },
      {
        "x": 14850,
        "y": 35527
      },
      {
        "x": 13905,
        "y": 35527
      }
    ],
    "gates": [
      {
        "id": "p292_g_n",
        "x": 14378,
        "y": 34942,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p292_g_s",
        "x": 14378,
        "y": 35527,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p292_g_w",
        "x": 13905,
        "y": 35234,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p292_g_e",
        "x": 14850,
        "y": 35234,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p293",
    "name": "Park / Skwer P293 (Zakole Wis\u0142y / D\u0119bniki)",
    "polygon": [
      {
        "x": 15052,
        "y": 35122
      },
      {
        "x": 15884,
        "y": 35122
      },
      {
        "x": 15884,
        "y": 35730
      },
      {
        "x": 15052,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p293_g_n",
        "x": 15468,
        "y": 35122,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p293_g_s",
        "x": 15468,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p293_g_w",
        "x": 15052,
        "y": 35426,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p293_g_e",
        "x": 15884,
        "y": 35426,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p294",
    "name": "Park / Skwer P294 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 17888,
        "y": 35348
      },
      {
        "x": 18406,
        "y": 35348
      },
      {
        "x": 18406,
        "y": 35730
      },
      {
        "x": 17888,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p294_g_n",
        "x": 18147,
        "y": 35348,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p294_g_s",
        "x": 18147,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p294_g_w",
        "x": 17888,
        "y": 35539,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p294_g_e",
        "x": 18406,
        "y": 35539,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p295",
    "name": "Park / Skwer P295 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 18675,
        "y": 35078
      },
      {
        "x": 18945,
        "y": 35078
      },
      {
        "x": 18945,
        "y": 35438
      },
      {
        "x": 18675,
        "y": 35438
      }
    ],
    "gates": [
      {
        "id": "p295_g_n",
        "x": 18810,
        "y": 35078,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p295_g_s",
        "x": 18810,
        "y": 35438,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p295_g_w",
        "x": 18675,
        "y": 35258,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p295_g_e",
        "x": 18945,
        "y": 35258,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p296",
    "name": "Park / Skwer P296 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 28215,
        "y": 34695
      },
      {
        "x": 28643,
        "y": 34695
      },
      {
        "x": 28643,
        "y": 35280
      },
      {
        "x": 28215,
        "y": 35280
      }
    ],
    "gates": [
      {
        "id": "p296_g_n",
        "x": 28429,
        "y": 34695,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p296_g_s",
        "x": 28429,
        "y": 35280,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p296_g_w",
        "x": 28215,
        "y": 34988,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p296_g_e",
        "x": 28643,
        "y": 34988,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p297",
    "name": "Park / Skwer P297 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 28642,
        "y": 35168
      },
      {
        "x": 29002,
        "y": 35168
      },
      {
        "x": 29002,
        "y": 35730
      },
      {
        "x": 28642,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p297_g_n",
        "x": 28822,
        "y": 35168,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p297_g_s",
        "x": 28822,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p297_g_w",
        "x": 28642,
        "y": 35449,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p297_g_e",
        "x": 29002,
        "y": 35449,
        "width": 90,
        "side": "right"
      }
    ]
  },
  {
    "id": "park_p298",
    "name": "Park / Skwer P298 (Kazimierz / Podg\u00f3rze)",
    "polygon": [
      {
        "x": 31905,
        "y": 35325
      },
      {
        "x": 32220,
        "y": 35325
      },
      {
        "x": 32220,
        "y": 35730
      },
      {
        "x": 31905,
        "y": 35730
      }
    ],
    "gates": [
      {
        "id": "p298_g_n",
        "x": 32062,
        "y": 35325,
        "width": 90,
        "side": "top"
      },
      {
        "id": "p298_g_s",
        "x": 32062,
        "y": 35730,
        "width": 90,
        "side": "bottom"
      },
      {
        "id": "p298_g_w",
        "x": 31905,
        "y": 35528,
        "width": 90,
        "side": "left"
      },
      {
        "id": "p298_g_e",
        "x": 32220,
        "y": 35528,
        "width": 90,
        "side": "right"
      }
    ]
  }
];
