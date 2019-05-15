(<HTMLElement> document.querySelector("#gameStateBar > .text-left")).textContent = sessionStorage.getItem("nickname");
let initialData = JSON.parse("{\n" +
    "    \"game_duration\": 300,\n" +
    "    \"initial_credits\": 1984,\n" +
    "    \"items\": [\n" +
    "        \"Dwimeryt\",\n" +
    "        \"Cynamon\",\n" +
    "        \"Nuka-Cola\",\n" +
    "        \"Z\u0142oto\",\n" +
    "        \"Unobtainium\",\n" +
    "        \"Protea\u0144skie dyski\",\n" +
    "        \"Ziemniaki\",\n" +
    "        \"Lyrium\",\n" +
    "        \"Murkwie\",\n" +
    "        \"Woda\"\n" +
    "    ],\n" +
    "    \"planets\": {\n" +
    "        \"Alderaan\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 74,\n" +
    "                    \"buy_price\": 6,\n" +
    "                    \"sell_price\": 6\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 42,\n" +
    "                    \"buy_price\": 12,\n" +
    "                    \"sell_price\": 11\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 34,\n" +
    "                    \"buy_price\": 13,\n" +
    "                    \"sell_price\": 12\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 5,\n" +
    "                    \"buy_price\": 76,\n" +
    "                    \"sell_price\": 69\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 23,\n" +
    "                    \"buy_price\": 33,\n" +
    "                    \"sell_price\": 31\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 22,\n" +
    "                    \"buy_price\": 19,\n" +
    "                    \"sell_price\": 18\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 92,\n" +
    "                    \"sell_price\": 86\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 19,\n" +
    "                    \"sell_price\": 17\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 15,\n" +
    "            \"y\": 32\n" +
    "        },\n" +
    "        \"Argoland\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 23,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 10\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 39,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 5,\n" +
    "                    \"buy_price\": 73,\n" +
    "                    \"sell_price\": 64\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 25,\n" +
    "                    \"buy_price\": 22,\n" +
    "                    \"sell_price\": 19\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 75,\n" +
    "                    \"sell_price\": 65\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 69,\n" +
    "                    \"sell_price\": 61\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 34,\n" +
    "                    \"sell_price\": 30\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 59,\n" +
    "            \"y\": 44\n" +
    "        },\n" +
    "        \"Arrakis\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 59,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 53,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 89,\n" +
    "                    \"sell_price\": 76\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 25,\n" +
    "                    \"buy_price\": 16,\n" +
    "                    \"sell_price\": 15\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 7,\n" +
    "                    \"buy_price\": 64,\n" +
    "                    \"sell_price\": 57\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 36,\n" +
    "                    \"sell_price\": 33\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 25,\n" +
    "                    \"sell_price\": 21\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 120,\n" +
    "                    \"sell_price\": 107\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 16,\n" +
    "                    \"buy_price\": 23,\n" +
    "                    \"sell_price\": 21\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 81,\n" +
    "            \"y\": 34\n" +
    "        },\n" +
    "        \"Corellia\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 38,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 63,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 91,\n" +
    "                    \"sell_price\": 84\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 74,\n" +
    "                    \"sell_price\": 66\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 11,\n" +
    "                    \"buy_price\": 30,\n" +
    "                    \"sell_price\": 26\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 71,\n" +
    "                    \"sell_price\": 66\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 19,\n" +
    "                    \"buy_price\": 37,\n" +
    "                    \"sell_price\": 33\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 43,\n" +
    "            \"y\": 69\n" +
    "        },\n" +
    "        \"Encja\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 59,\n" +
    "                    \"buy_price\": 6,\n" +
    "                    \"sell_price\": 5\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 56,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 10\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 51,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 88,\n" +
    "                    \"sell_price\": 76\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 35,\n" +
    "                    \"buy_price\": 17,\n" +
    "                    \"sell_price\": 16\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 103,\n" +
    "                    \"sell_price\": 90\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 13,\n" +
    "                    \"buy_price\": 39,\n" +
    "                    \"sell_price\": 37\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 32,\n" +
    "                    \"sell_price\": 32\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 60,\n" +
    "                    \"sell_price\": 57\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 26,\n" +
    "                    \"buy_price\": 40,\n" +
    "                    \"sell_price\": 35\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 91,\n" +
    "            \"y\": 32\n" +
    "        },\n" +
    "        \"Gaia\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 80,\n" +
    "                    \"buy_price\": 6,\n" +
    "                    \"sell_price\": 6\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 85,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 41,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 9\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 102,\n" +
    "                    \"sell_price\": 94\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 25,\n" +
    "                    \"buy_price\": 43,\n" +
    "                    \"sell_price\": 39\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 8,\n" +
    "                    \"buy_price\": 92,\n" +
    "                    \"sell_price\": 82\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 16,\n" +
    "                    \"buy_price\": 35,\n" +
    "                    \"sell_price\": 31\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 75,\n" +
    "            \"y\": 76\n" +
    "        },\n" +
    "        \"Ksi\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 33,\n" +
    "                    \"buy_price\": 11,\n" +
    "                    \"sell_price\": 10\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 80,\n" +
    "                    \"buy_price\": 6,\n" +
    "                    \"sell_price\": 6\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 64,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 4,\n" +
    "                    \"buy_price\": 73,\n" +
    "                    \"sell_price\": 67\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 30,\n" +
    "                    \"buy_price\": 17,\n" +
    "                    \"sell_price\": 14\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 8,\n" +
    "                    \"buy_price\": 39,\n" +
    "                    \"sell_price\": 37\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 41,\n" +
    "                    \"sell_price\": 39\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 15,\n" +
    "                    \"buy_price\": 30,\n" +
    "                    \"sell_price\": 28\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 74,\n" +
    "                    \"sell_price\": 64\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 16,\n" +
    "                    \"buy_price\": 20,\n" +
    "                    \"sell_price\": 18\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 91,\n" +
    "            \"y\": 71\n" +
    "        },\n" +
    "        \"Leonida\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 36,\n" +
    "                    \"buy_price\": 12,\n" +
    "                    \"sell_price\": 11\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 50,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 60,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 9\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 89,\n" +
    "                    \"sell_price\": 85\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 39,\n" +
    "                    \"buy_price\": 18,\n" +
    "                    \"sell_price\": 16\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 7,\n" +
    "                    \"buy_price\": 65,\n" +
    "                    \"sell_price\": 57\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 38,\n" +
    "                    \"sell_price\": 33\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 5,\n" +
    "                    \"buy_price\": 121,\n" +
    "                    \"sell_price\": 112\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 11,\n" +
    "                    \"buy_price\": 45,\n" +
    "                    \"sell_price\": 41\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 32,\n" +
    "            \"y\": 5\n" +
    "        },\n" +
    "        \"NowWhat\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 62,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 22,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 9\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 67,\n" +
    "                    \"sell_price\": 66\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 27,\n" +
    "                    \"buy_price\": 18,\n" +
    "                    \"sell_price\": 16\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 82,\n" +
    "                    \"sell_price\": 71\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 4,\n" +
    "                    \"buy_price\": 74,\n" +
    "                    \"sell_price\": 63\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 17,\n" +
    "                    \"buy_price\": 28,\n" +
    "                    \"sell_price\": 24\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 35,\n" +
    "            \"y\": 41\n" +
    "        },\n" +
    "        \"Sur'Kesh\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 55,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 34,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 73,\n" +
    "                    \"sell_price\": 66\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 30,\n" +
    "                    \"buy_price\": 19,\n" +
    "                    \"sell_price\": 17\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 5,\n" +
    "                    \"buy_price\": 85,\n" +
    "                    \"sell_price\": 79\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 19,\n" +
    "                    \"buy_price\": 34,\n" +
    "                    \"sell_price\": 31\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 21,\n" +
    "                    \"buy_price\": 23,\n" +
    "                    \"sell_price\": 20\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 8,\n" +
    "                    \"buy_price\": 99,\n" +
    "                    \"sell_price\": 95\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 39,\n" +
    "            \"y\": 31\n" +
    "        },\n" +
    "        \"Tairia\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 70,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 10\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 43,\n" +
    "                    \"buy_price\": 6,\n" +
    "                    \"sell_price\": 5\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 8,\n" +
    "                    \"buy_price\": 97,\n" +
    "                    \"sell_price\": 84\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 32,\n" +
    "                    \"buy_price\": 20,\n" +
    "                    \"sell_price\": 19\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 19,\n" +
    "                    \"buy_price\": 44,\n" +
    "                    \"sell_price\": 41\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 29,\n" +
    "                    \"sell_price\": 25\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 123,\n" +
    "                    \"sell_price\": 103\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 14,\n" +
    "                    \"buy_price\": 37,\n" +
    "                    \"sell_price\": 34\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 36,\n" +
    "            \"y\": 84\n" +
    "        },\n" +
    "        \"Tatooine\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 60,\n" +
    "                    \"buy_price\": 11,\n" +
    "                    \"sell_price\": 10\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 64,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 9\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 45,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 81,\n" +
    "                    \"sell_price\": 71\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 39,\n" +
    "                    \"buy_price\": 15,\n" +
    "                    \"sell_price\": 13\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 7,\n" +
    "                    \"buy_price\": 89,\n" +
    "                    \"sell_price\": 84\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 13,\n" +
    "                    \"buy_price\": 37,\n" +
    "                    \"sell_price\": 32\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 23,\n" +
    "                    \"sell_price\": 21\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 7,\n" +
    "                    \"buy_price\": 95,\n" +
    "                    \"sell_price\": 87\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 19,\n" +
    "                    \"buy_price\": 35,\n" +
    "                    \"sell_price\": 32\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 47,\n" +
    "            \"y\": 68\n" +
    "        },\n" +
    "        \"Tuchanka\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 59,\n" +
    "                    \"buy_price\": 10,\n" +
    "                    \"sell_price\": 9\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 51,\n" +
    "                    \"buy_price\": 7,\n" +
    "                    \"sell_price\": 6\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 65,\n" +
    "                    \"buy_price\": 11,\n" +
    "                    \"sell_price\": 10\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 9,\n" +
    "                    \"buy_price\": 90,\n" +
    "                    \"sell_price\": 82\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 46,\n" +
    "                    \"buy_price\": 18,\n" +
    "                    \"sell_price\": 16\n" +
    "                },\n" +
    "                \"Protea\u0144skie dyski\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 71,\n" +
    "                    \"sell_price\": 65\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 8,\n" +
    "                    \"buy_price\": 39,\n" +
    "                    \"sell_price\": 37\n" +
    "                },\n" +
    "                \"Woda\": {\n" +
    "                    \"available\": 15,\n" +
    "                    \"buy_price\": 28,\n" +
    "                    \"sell_price\": 24\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 10,\n" +
    "                    \"buy_price\": 61,\n" +
    "                    \"sell_price\": 57\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 12,\n" +
    "                    \"buy_price\": 46,\n" +
    "                    \"sell_price\": 40\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 27,\n" +
    "            \"y\": 76\n" +
    "        },\n" +
    "        \"Ziemia\": {\n" +
    "            \"available_items\": {\n" +
    "                \"Cynamon\": {\n" +
    "                    \"available\": 58,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Dwimeryt\": {\n" +
    "                    \"available\": 106,\n" +
    "                    \"buy_price\": 8,\n" +
    "                    \"sell_price\": 7\n" +
    "                },\n" +
    "                \"Lyrium\": {\n" +
    "                    \"available\": 31,\n" +
    "                    \"buy_price\": 9,\n" +
    "                    \"sell_price\": 8\n" +
    "                },\n" +
    "                \"Murkwie\": {\n" +
    "                    \"available\": 7,\n" +
    "                    \"buy_price\": 82,\n" +
    "                    \"sell_price\": 75\n" +
    "                },\n" +
    "                \"Nuka-Cola\": {\n" +
    "                    \"available\": 30,\n" +
    "                    \"buy_price\": 18,\n" +
    "                    \"sell_price\": 17\n" +
    "                },\n" +
    "                \"Unobtainium\": {\n" +
    "                    \"available\": 21,\n" +
    "                    \"buy_price\": 37,\n" +
    "                    \"sell_price\": 36\n" +
    "                },\n" +
    "                \"Ziemniaki\": {\n" +
    "                    \"available\": 6,\n" +
    "                    \"buy_price\": 77,\n" +
    "                    \"sell_price\": 69\n" +
    "                },\n" +
    "                \"Z\u0142oto\": {\n" +
    "                    \"available\": 13,\n" +
    "                    \"buy_price\": 38,\n" +
    "                    \"sell_price\": 32\n" +
    "                }\n" +
    "            },\n" +
    "            \"x\": 94,\n" +
    "            \"y\": 24\n" +
    "        }\n" +
    "    },\n" +
    "    \"starships\": {\n" +
    "        \"Axiom\": {\n" +
    "            \"cargo_hold_size\": 27,\n" +
    "            \"position\": \"Tatooine\"\n" +
    "        },\n" +
    "        \"Enterprise\": {\n" +
    "            \"cargo_hold_size\": 46,\n" +
    "            \"position\": \"Corellia\"\n" +
    "        },\n" +
    "        \"Goliath\": {\n" +
    "            \"cargo_hold_size\": 33,\n" +
    "            \"position\": \"Sur'Kesh\"\n" +
    "        },\n" +
    "        \"Hermes\": {\n" +
    "            \"cargo_hold_size\": 26,\n" +
    "            \"position\": \"NowWhat\"\n" +
    "        },\n" +
    "        \"Millenium Falcon\": {\n" +
    "            \"cargo_hold_size\": 35,\n" +
    "            \"position\": \"Tatooine\"\n" +
    "        },\n" +
    "        \"Niezwyci\u0119\u017cony\": {\n" +
    "            \"cargo_hold_size\": 60,\n" +
    "            \"position\": \"Argoland\"\n" +
    "        },\n" +
    "        \"Normandy SR-2\": {\n" +
    "            \"cargo_hold_size\": 40,\n" +
    "            \"position\": \"Gaia\"\n" +
    "        },\n" +
    "        \"Nostromo\": {\n" +
    "            \"cargo_hold_size\": 25,\n" +
    "            \"position\": \"Arrakis\"\n" +
    "        },\n" +
    "        \"Rocinante\": {\n" +
    "            \"cargo_hold_size\": 30,\n" +
    "            \"position\": \"Alderaan\"\n" +
    "        },\n" +
    "        \"\u041a\u043e\u0441\u043c\u043e\u043d\u0430\u0432\u0442 \u0410\u043b\u0435\u043a\u0441\u0435\u0301\u0439 \u041b\u0435\u043e\u0301\u043d\u043e\u0432\": {\n" +
    "            \"cargo_hold_size\": 35,\n" +
    "            \"position\": \"Arrakis\"\n" +
    "        }\n" +
    "    }\n" +
    "}");

interface Iitem {
    [name: string]: {
        available: number
        buy_price: number
        sell_price: number
    }
}

interface Iplanet {
    [name: string]: {
        available_items: Iitem
        x: number
        y: number
        docked_ships: string[]
    }
}

interface IcargoBay {
    [name: string]: number
}
interface Iship {
    [name: string]: {
        cargo_hold_size: number     // max capacity
        position: string            // docking planet or destination
        moving: boolean             // if enroute
        index: number               // index in ship table in game window
        cargo_load: number          // current load
        cargo_bay: IcargoBay        // current amount of specific cargo
    }
}

startGameCountdown(initialData.game_duration);
let money = initialData.initial_credits;
let moneyText = (<HTMLElement> document.querySelector("#gameStateBar > .text-right"));
moneyText.textContent = "$" + String(money);
let items = initialData.items as string[];
let planets = initialData.planets as Iplanet;
let ships = initialData.starships as Iship;
let shipClicked = "";
let planetClicked = "";
let itemClicked = "";

// Initialize ships and planets (ship indexes initialized later)
for (let planetName in planets) {
    planets[planetName].docked_ships = [];
    for (let itemName of items) {
        if (planets[planetName].available_items[itemName] === undefined)
            planets[planetName].available_items[itemName] = {available: 0, buy_price: 0, sell_price: 0};
    }
}

for (let shipName in ships) {
    ships[shipName].moving = false;
    planets[ships[shipName].position].docked_ships.push(shipName);
    ships[shipName].cargo_load = 0;
    ships[shipName].cargo_bay = [] as unknown as IcargoBay;
    for (let itemName of items)
        ships[shipName].cargo_bay[itemName] = 0;
}

// Fill ship table
let shipsTableBody = (<HTMLTableElement> document.querySelector("#shipWindow > table")).createTBody();
let currentIndex = 0;
for (let shipName in ships) {
    ships[shipName].index = currentIndex;
    currentIndex++;

    let row = shipsTableBody.insertRow();

    let nameCell = row.insertCell();
    nameCell.textContent = shipName;
    nameCell.setAttribute("onclick", "openShipPopup(\"" + shipName + "\")");
    nameCell.setAttribute("class", "clickable");

    let positionCell = row.insertCell();
    positionCell.textContent = ships[shipName].position;
    positionCell.setAttribute("onclick", "openPlanetPopup(\"" + ships[shipName].position + "\")");
    positionCell.setAttribute("class", "clickable");
}

// Fill planet list
let planetWindowDiv = document.getElementById("planetWindow");
for (let planetName in planets) {
    let container = document.createElement("div");
    container.setAttribute("class", "planet clickable");
    container.setAttribute("onclick", "openPlanetPopup(\"" + planetName + "\")");

    let image = document.createElement("img");
    let randomInt = Math.floor(Math.random() * 3) + 1;
    image.setAttribute("src", "assets/planet" + randomInt + ".jpg");
    image.setAttribute("alt", "assets/planet" + randomInt + ".jpg");

    let planetTitle = document.createElement("h3");
    planetTitle.textContent = planetName;

    container.appendChild(image);
    container.appendChild(planetTitle);
    planetWindowDiv.appendChild(container);
}

// Starts the main game countdown
function startGameCountdown(seconds){
    let counter = seconds;
    let timerText = (<HTMLElement> document.querySelector("#gameStateBar > .text-middle"));

    const interval = setInterval(() => {
        timerText.textContent = String(counter);
        counter--;

        if (counter < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

// Opens a popup for a given ship
function openShipPopup(shipName: string) {
    closePopup();
    shipClicked = shipName;
    let planetName = ships[shipName].position;
    let popup = "#shipPopup";
    if (!ships[shipName].moving)
        popup += "Docked";
    else
        popup += "Enroute";

    // Set data
    let goodsTableBody = (<HTMLTableElement>document.querySelector(popup + " table")).createTBody();
    /*let planetItemsToShow = Object.keys(planets[planetName].available_items);
    let shipItemsToShow = [];
    for (let shipItem in ships[shipName].cargo_bay) {
        if (planetItemsToShow.indexOf(shipItem) === -1)
            shipItemsToShow.push(shipItem);
    }*/
    
    
    for (let itemName of items) {
        let row = goodsTableBody.insertRow();
        if (!ships[shipName].moving) {
            row.setAttribute("onclick", "selectItem(\"" + itemName + "\")");
            row.setAttribute("class", "clickable");
        }

        row.insertCell().textContent = String(ships[shipName].cargo_bay[itemName]);
        row.insertCell().textContent = itemName;
        row.insertCell().textContent = String(planets[planetName].available_items[itemName].buy_price);
        row.insertCell().textContent = String(planets[planetName].available_items[itemName].sell_price);
        row.insertCell().textContent = String(planets[planetName].available_items[itemName].available);
    }

    /*for (let shipItemName of shipItemsToShow) {
        let row = goodsTableBody.insertRow();
        if (!ships[shipName].moving) {
            row.setAttribute("onclick", "selectItem(\"" + shipItemName + "\")");
            row.setAttribute("class", "clickable");
        }

        row.insertCell().textContent = String(ships[shipName].cargo_bay[shipItemName]);
        row.insertCell().textContent = shipItemName;
        row.insertCell().textContent = String(0);
        row.insertCell().textContent = String(0);
        row.insertCell().textContent = String(0);
    }
*/
    document.querySelector(popup + " .text-left").textContent = shipName;
    document.querySelector(popup + " .text-right").textContent = planetName;
    document.querySelector(popup).querySelector(".ship-popup.popup-control-window > h3")
        .textContent = ships[shipName].cargo_load + "/" + ships[shipName].cargo_hold_size;

    if (!ships[shipName].moving) {
        // Replace planet divs' functionality
        document.querySelectorAll("#planetWindow > div").forEach((planetDiv) => {
            planetDiv.setAttribute("onclick", "moveToPlanet(\"" + shipName + "\", \""
                + planetDiv.querySelector("h3").textContent + "\")");
        });
    }
    window.location.href = popup;
}

// Opens a popup for a given planet
function openPlanetPopup(planetName: string) {
    closePopup();
    planetClicked = planetName;
    let title = document.querySelector(".planet-popup.popup-title");
    title.textContent = planetName;

    let goodsTableBody = (<HTMLTableElement> document.querySelector(".scrollable.goods-window.planet-popup > table"))
        .createTBody();
    for (let itemName in planets[planetName].available_items) {
        let row = goodsTableBody.insertRow();

        row.insertCell().textContent = itemName;
        row.insertCell().textContent = String(planets[planetName].available_items[itemName].buy_price);
        row.insertCell().textContent = String(planets[planetName].available_items[itemName].sell_price);
        row.insertCell().textContent = String(planets[planetName].available_items[itemName].available);
    }

    let shipsTableBody = (<HTMLTableElement> document.querySelector(".scrollable.ship-window.planet-popup > table"))
        .createTBody();
    for (let shipName of planets[planetName].docked_ships) {
        let cell = shipsTableBody.insertRow().insertCell();
        cell.textContent = shipName;
        cell.setAttribute("onclick", "openShipPopup(\"" + shipName + "\")");
        cell.setAttribute("class", "clickable");
    }

    window.location.href = "#planetPopup"
}

function selectItem(itemName: string) {
    let inputElement = document.querySelector("#shipPopupDocked input");
    if (itemClicked !== "") {
        findRow(itemClicked).setAttribute("class", "clickable");
    } else {
        inputElement.removeAttribute("disabled");
        document.querySelector("#shipPopupDocked button").removeAttribute("disabled");
    }
    let selectedRow = findRow(itemName);
    selectedRow.setAttribute("class", "highlighted");
    itemClicked = itemName;
    resetInputElement()
}

// Trades the selected item of amount given by input in ship popup
function tradeItem() {
    let inputElement = (<HTMLInputElement>document.querySelector("#shipPopupDocked input"));
    let amount = Number(inputElement.value);
    if (amount === 0)
        return;

    let buyPrice = planets[ships[shipClicked].position].available_items[itemClicked].buy_price;
    let onPlanet =  planets[ships[shipClicked].position].available_items[itemClicked].available;
    let onShip = ships[shipClicked].cargo_bay[itemClicked];
    amount = Math.min(amount, Math.floor(money / buyPrice), ships[shipClicked].cargo_hold_size - ships[shipClicked].cargo_load, onPlanet);
    amount = Math.max(amount, -1 * onShip);

    // Update real values
    planets[ships[shipClicked].position].available_items[itemClicked].available -= amount;
    ships[shipClicked].cargo_bay[itemClicked] += amount;
    ships[shipClicked].cargo_load += amount;
    if (amount > 0)
        money -= amount * planets[ships[shipClicked].position].available_items[itemClicked].buy_price;
    else
        money -= amount * planets[ships[shipClicked].position].available_items[itemClicked].sell_price;
    moneyText.textContent = "$" + String(money);

    // Update layout
    let row = findRow(itemClicked);
    row.children[0].textContent = String(ships[shipClicked].cargo_bay[itemClicked]);
    row.children[4].textContent = String(planets[ships[shipClicked].position].available_items[itemClicked].available);
    document.getElementById("shipPopupDocked").querySelector(".ship-popup.popup-control-window > h3")
        .textContent = ships[shipClicked].cargo_load + "/" + ships[shipClicked].cargo_hold_size;

    resetInputElement()
}

// Initiates a journey for a ship to a planet
function moveToPlanet(shipName: string, planetName: string) {
    if (ships[shipName].position === planetName)
        return;

    let distance = 10; //calcDistance(shipName, planetName); TODO: restore

    // Remove the ship from planet docklist
    ships[shipName].moving = true;
    planets[ships[shipName].position].docked_ships = planets[ships[shipName].position].docked_ships.filter( (ship) => {
        return ship !== shipName;
    });
    ships[shipName].position = planetName;

    // Set the ship status to "En route"
    let row: Node = document.querySelector("#shipWindow > table").querySelector("tbody").firstChild;
    for (let i = 0; i < ships[shipName].index; i++)
        row = row.nextSibling;
    row.lastChild.textContent = "En route";

    // Time the journey
    let etaText = <HTMLElement> document.querySelector("#shipPopupEnroute .ship-popup.popup-control-window").lastElementChild;
    etaText.textContent = "ETA: " + String(distance);
    distance--;
    const interval = setInterval(() => {
        if (shipClicked === shipName)
            etaText.textContent = "ETA: " + String(distance);
        distance--;

        if (distance < 0) {
            planets[planetName].docked_ships.push(shipName);
            row.lastChild.textContent = planetName;
            ships[shipName].moving = false;
            if (shipClicked === shipName) {
                closePopup();
                openShipPopup(shipName);
            }
            if (planetClicked === planetName) {
                closePopup();
                openPlanetPopup(planetName);
            }
            clearInterval(interval);
        }
    }, 1000);

    // Roll back planet divs' functionality
    document.querySelectorAll("#planetWindow > div").forEach( (planetDiv) => {
        planetDiv.setAttribute("onclick", "openPlanetPopup(\""
            + planetDiv.querySelector("h3").textContent + "\")");
    });

    closePopup();
    openShipPopup(shipName);
}

// Closes currently opened popup
function closePopup() {
    window.location.href = "#";

    // Clear popup data
    document.querySelectorAll("tbody").forEach( (tableBody) => {
        if (tableBody !== shipsTableBody)
            tableBody.parentNode.removeChild(tableBody);
    });
    document.querySelector("#shipPopupDocked input").setAttribute("disabled", "disabled");
    document.querySelector("#shipPopupDocked button").setAttribute("disabled", "disabled");

    // Roll back planet divs' functionality
    if (shipClicked !== "" && !ships[shipClicked].moving) {
        document.querySelectorAll("#planetWindow > div").forEach((planetDiv) => {
            planetDiv.setAttribute("onclick", "openPlanetPopup(\""
                + planetDiv.querySelector("h3").textContent + "\")");
        });
    }

    // Reset current selections
    shipClicked = "";
    planetClicked = "";
    itemClicked = "";
}

// Returns the row of shipPopupDocked goods table that contains given string
function findRow(name: string) {
    let row = document.querySelector("#shipPopupDocked tbody").firstElementChild;
    while (row.children[1].innerHTML !== name)
        row = row.nextElementSibling;
    return row;
}

function resetInputElement() {
    let inputElement = (<HTMLInputElement>document.querySelector("#shipPopupDocked input"));
    let buyPrice = planets[ships[shipClicked].position].available_items[itemClicked].buy_price;
    let onPlanet =  planets[ships[shipClicked].position].available_items[itemClicked].available;
    let onShip = ships[shipClicked].cargo_bay[itemClicked];
    inputElement.setAttribute("max", String(Math.min(Math.floor(money / buyPrice),
        ships[shipClicked].cargo_hold_size - ships[shipClicked].cargo_load ,onPlanet)));
    inputElement.setAttribute("min", String(-1 * onShip));
    inputElement.value = String(0);
}

// Returns the distance between a ship and a planet rounded to the nearest integer
function calcDistance(shipName: string, planetName: string) : number {
    let dockedAt = ships[shipName].position;
    return Math.round(Math.sqrt((planets[dockedAt].x - planets[planetName].x) ** 2 + (planets[dockedAt].y - planets[planetName].y) ** 2));
}