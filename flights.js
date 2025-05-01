const flights = [
  {
    "flightNum": "AS130",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-26",
    "price": 265
  },
  {
    "flightNum": "AS875",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-23",
    "price": 242
  },
  {
    "flightNum": "AS375",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-27",
    "price": 132
  },
  {
    "flightNum": "B6876",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-26",
    "price": 381
  },
  {
    "flightNum": "AA582",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-26",
    "price": 276
  },
  {
    "flightNum": "AS232",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-21",
    "price": 422
  },
  {
    "flightNum": "UA223",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-15",
    "price": 305
  },
  {
    "flightNum": "WN422",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-03",
    "price": 500
  },
  {
    "flightNum": "WN259",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-08",
    "price": 471
  },
  {
    "flightNum": "AA807",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-11",
    "price": 320
  },
  {
    "flightNum": "B6722",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-19",
    "price": 312
  },
  {
    "flightNum": "AA159",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-21",
    "price": 245
  },
  {
    "flightNum": "B6445",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-21",
    "price": 231
  },
  {
    "flightNum": "WN783",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-07",
    "price": 430
  },
  {
    "flightNum": "B6397",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-06",
    "price": 475
  },
  {
    "flightNum": "B6611",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-04",
    "price": 106
  },
  {
    "flightNum": "UA923",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 275
  },
  {
    "flightNum": "DL812",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-02",
    "price": 180
  },
  {
    "flightNum": "AA925",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-25",
    "price": 103
  },
  {
    "flightNum": "DL419",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-07",
    "price": 191
  },
  {
    "flightNum": "UA680",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-26",
    "price": 494
  },
  {
    "flightNum": "WN339",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-07",
    "price": 169
  },
  {
    "flightNum": "B6303",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-20",
    "price": 301
  },
  {
    "flightNum": "AS355",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-12",
    "price": 150
  },
  {
    "flightNum": "AA299",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-23",
    "price": 268
  },
  {
    "flightNum": "AA132",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-01",
    "price": 498
  },
  {
    "flightNum": "B6122",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-12",
    "price": 171
  },
  {
    "flightNum": "UA895",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-02",
    "price": 147
  },
  {
    "flightNum": "DL565",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-16",
    "price": 100
  },
  {
    "flightNum": "AS810",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-21",
    "price": 343
  },
  {
    "flightNum": "UA718",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-29",
    "price": 328
  },
  {
    "flightNum": "B6270",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-31",
    "price": 101
  },
  {
    "flightNum": "WN850",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-29",
    "price": 456
  },
  {
    "flightNum": "B6554",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-11",
    "price": 431
  },
  {
    "flightNum": "WN887",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-31",
    "price": 488
  },
  {
    "flightNum": "DL164",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-10",
    "price": 215
  },
  {
    "flightNum": "DL533",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-04",
    "price": 168
  },
  {
    "flightNum": "DL741",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-29",
    "price": 459
  },
  {
    "flightNum": "AA536",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-24",
    "price": 168
  },
  {
    "flightNum": "WN767",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-20",
    "price": 462
  },
  {
    "flightNum": "DL896",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-22",
    "price": 348
  },
  {
    "flightNum": "WN132",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-09",
    "price": 405
  },
  {
    "flightNum": "WN232",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-15",
    "price": 475
  },
  {
    "flightNum": "AS322",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-12",
    "price": 246
  },
  {
    "flightNum": "B6580",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-29",
    "price": 294
  },
  {
    "flightNum": "WN107",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-30",
    "price": 203
  },
  {
    "flightNum": "UA392",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-25",
    "price": 194
  },
  {
    "flightNum": "WN524",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-13",
    "price": 170
  },
  {
    "flightNum": "AA276",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-25",
    "price": 214
  },
  {
    "flightNum": "WN840",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-19",
    "price": 210
  },
  {
    "flightNum": "WN968",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-04",
    "price": 448
  },
  {
    "flightNum": "AS638",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-12",
    "price": 497
  },
  {
    "flightNum": "DL140",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-04",
    "price": 259
  },
  {
    "flightNum": "B6265",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-15",
    "price": 160
  },
  {
    "flightNum": "B6999",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 471
  },
  {
    "flightNum": "B6768",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-06",
    "price": 483
  },
  {
    "flightNum": "DL515",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-20",
    "price": 284
  },
  {
    "flightNum": "DL416",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-07",
    "price": 220
  },
  {
    "flightNum": "AS287",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-01",
    "price": 371
  },
  {
    "flightNum": "UA888",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-28",
    "price": 355
  },
  {
    "flightNum": "AS585",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-22",
    "price": 319
  },
  {
    "flightNum": "WN150",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-30",
    "price": 432
  },
  {
    "flightNum": "DL642",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-09",
    "price": 465
  },
  {
    "flightNum": "UA923",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-03",
    "price": 459
  },
  {
    "flightNum": "B6607",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-24",
    "price": 408
  },
  {
    "flightNum": "AA186",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-05",
    "price": 303
  },
  {
    "flightNum": "WN713",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-07",
    "price": 202
  },
  {
    "flightNum": "B6830",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-25",
    "price": 464
  },
  {
    "flightNum": "WN544",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-01",
    "price": 298
  },
  {
    "flightNum": "AA410",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-09",
    "price": 464
  },
  {
    "flightNum": "AS891",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-05",
    "price": 430
  },
  {
    "flightNum": "AS912",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-25",
    "price": 282
  },
  {
    "flightNum": "WN311",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-06",
    "price": 335
  },
  {
    "flightNum": "WN676",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-25",
    "price": 423
  },
  {
    "flightNum": "WN830",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-24",
    "price": 310
  },
  {
    "flightNum": "UA697",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-13",
    "price": 129
  },
  {
    "flightNum": "AA713",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-20",
    "price": 350
  },
  {
    "flightNum": "DL253",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-04",
    "price": 463
  },
  {
    "flightNum": "UA621",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-07",
    "price": 388
  },
  {
    "flightNum": "AA311",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-21",
    "price": 382
  },
  {
    "flightNum": "WN362",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-02",
    "price": 130
  },
  {
    "flightNum": "AA155",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-26",
    "price": 320
  },
  {
    "flightNum": "WN185",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-19",
    "price": 117
  },
  {
    "flightNum": "DL310",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-13",
    "price": 101
  },
  {
    "flightNum": "AS795",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-21",
    "price": 426
  },
  {
    "flightNum": "DL528",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-04",
    "price": 356
  },
  {
    "flightNum": "WN264",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 221
  },
  {
    "flightNum": "UA291",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-05",
    "price": 187
  },
  {
    "flightNum": "AS768",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-11",
    "price": 236
  },
  {
    "flightNum": "B6292",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-28",
    "price": 207
  },
  {
    "flightNum": "AS951",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-17",
    "price": 152
  },
  {
    "flightNum": "UA178",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-03",
    "price": 253
  },
  {
    "flightNum": "DL871",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-20",
    "price": 158
  },
  {
    "flightNum": "DL593",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-29",
    "price": 226
  },
  {
    "flightNum": "B6420",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-22",
    "price": 167
  },
  {
    "flightNum": "UA714",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-11",
    "price": 349
  },
  {
    "flightNum": "B6910",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-19",
    "price": 253
  },
  {
    "flightNum": "AS856",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-30",
    "price": 479
  },
  {
    "flightNum": "AS376",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-01",
    "price": 168
  },
  {
    "flightNum": "WN932",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-03",
    "price": 270
  },
  {
    "flightNum": "WN303",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-24",
    "price": 436
  },
  {
    "flightNum": "DL344",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-15",
    "price": 270
  },
  {
    "flightNum": "B6132",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-20",
    "price": 289
  },
  {
    "flightNum": "AA551",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-12",
    "price": 478
  },
  {
    "flightNum": "AS652",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-03",
    "price": 207
  },
  {
    "flightNum": "UA519",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-21",
    "price": 274
  },
  {
    "flightNum": "AS303",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-11",
    "price": 237
  },
  {
    "flightNum": "WN410",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-18",
    "price": 134
  },
  {
    "flightNum": "AA410",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-09",
    "price": 174
  },
  {
    "flightNum": "AA368",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-18",
    "price": 457
  },
  {
    "flightNum": "AS713",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-03",
    "price": 410
  },
  {
    "flightNum": "B6220",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-01",
    "price": 140
  },
  {
    "flightNum": "WN719",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-21",
    "price": 418
  },
  {
    "flightNum": "AS573",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-27",
    "price": 177
  },
  {
    "flightNum": "B6137",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-02",
    "price": 268
  },
  {
    "flightNum": "DL740",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-02",
    "price": 302
  },
  {
    "flightNum": "B6194",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-05",
    "price": 263
  },
  {
    "flightNum": "WN811",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-08",
    "price": 222
  },
  {
    "flightNum": "AA670",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-17",
    "price": 242
  },
  {
    "flightNum": "DL127",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-02",
    "price": 338
  },
  {
    "flightNum": "AA602",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-11",
    "price": 490
  },
  {
    "flightNum": "AS785",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-10",
    "price": 392
  },
  {
    "flightNum": "AA373",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-25",
    "price": 217
  },
  {
    "flightNum": "UA353",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-13",
    "price": 202
  },
  {
    "flightNum": "AA237",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-19",
    "price": 140
  },
  {
    "flightNum": "WN616",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-11",
    "price": 144
  },
  {
    "flightNum": "B6363",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-23",
    "price": 238
  },
  {
    "flightNum": "B6871",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-18",
    "price": 158
  },
  {
    "flightNum": "WN253",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-31",
    "price": 321
  },
  {
    "flightNum": "UA594",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-27",
    "price": 308
  },
  {
    "flightNum": "B6173",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-24",
    "price": 242
  },
  {
    "flightNum": "B6539",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-10",
    "price": 439
  },
  {
    "flightNum": "AS582",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-24",
    "price": 316
  },
  {
    "flightNum": "WN450",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-17",
    "price": 455
  },
  {
    "flightNum": "WN530",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 454
  },
  {
    "flightNum": "WN153",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-25",
    "price": 170
  },
  {
    "flightNum": "DL827",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-19",
    "price": 331
  },
  {
    "flightNum": "UA716",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-02",
    "price": 394
  },
  {
    "flightNum": "DL152",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-24",
    "price": 307
  },
  {
    "flightNum": "B6977",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-14",
    "price": 133
  },
  {
    "flightNum": "AA624",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-30",
    "price": 248
  },
  {
    "flightNum": "B6923",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-03",
    "price": 339
  },
  {
    "flightNum": "AS527",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-06",
    "price": 172
  },
  {
    "flightNum": "B6967",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-31",
    "price": 400
  },
  {
    "flightNum": "WN543",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-19",
    "price": 129
  },
  {
    "flightNum": "WN624",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-23",
    "price": 247
  },
  {
    "flightNum": "B6541",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-27",
    "price": 178
  },
  {
    "flightNum": "B6370",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-07",
    "price": 249
  },
  {
    "flightNum": "B6795",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-21",
    "price": 151
  },
  {
    "flightNum": "DL127",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-12",
    "price": 194
  },
  {
    "flightNum": "B6695",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-22",
    "price": 350
  },
  {
    "flightNum": "WN771",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-20",
    "price": 160
  },
  {
    "flightNum": "DL556",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-19",
    "price": 427
  },
  {
    "flightNum": "WN900",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-29",
    "price": 196
  },
  {
    "flightNum": "AS219",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-18",
    "price": 275
  },
  {
    "flightNum": "B6427",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-03",
    "price": 217
  },
  {
    "flightNum": "B6425",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-30",
    "price": 406
  },
  {
    "flightNum": "AS111",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-31",
    "price": 147
  },
  {
    "flightNum": "WN963",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-17",
    "price": 231
  },
  {
    "flightNum": "UA574",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-09",
    "price": 376
  },
  {
    "flightNum": "DL912",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-25",
    "price": 386
  },
  {
    "flightNum": "DL854",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-24",
    "price": 236
  },
  {
    "flightNum": "AA224",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-12",
    "price": 397
  },
  {
    "flightNum": "DL389",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-19",
    "price": 262
  },
  {
    "flightNum": "WN991",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-19",
    "price": 397
  },
  {
    "flightNum": "AS280",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-01",
    "price": 286
  },
  {
    "flightNum": "WN965",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-23",
    "price": 295
  },
  {
    "flightNum": "AA161",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-07",
    "price": 212
  },
  {
    "flightNum": "UA336",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-13",
    "price": 181
  },
  {
    "flightNum": "DL948",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-05",
    "price": 423
  },
  {
    "flightNum": "DL719",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-19",
    "price": 387
  },
  {
    "flightNum": "B6491",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-13",
    "price": 325
  },
  {
    "flightNum": "UA912",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-04",
    "price": 372
  },
  {
    "flightNum": "B6384",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-05",
    "price": 277
  },
  {
    "flightNum": "DL522",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-06",
    "price": 132
  },
  {
    "flightNum": "UA113",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-26",
    "price": 260
  },
  {
    "flightNum": "AA626",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-20",
    "price": 224
  },
  {
    "flightNum": "AA180",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-12",
    "price": 378
  },
  {
    "flightNum": "B6582",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-23",
    "price": 114
  },
  {
    "flightNum": "DL468",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-09",
    "price": 240
  },
  {
    "flightNum": "WN105",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-10",
    "price": 324
  },
  {
    "flightNum": "AS550",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-01",
    "price": 245
  },
  {
    "flightNum": "AA673",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-29",
    "price": 134
  },
  {
    "flightNum": "AS559",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-17",
    "price": 235
  },
  {
    "flightNum": "WN213",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 500
  },
  {
    "flightNum": "UA728",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-19",
    "price": 138
  },
  {
    "flightNum": "WN543",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-22",
    "price": 299
  },
  {
    "flightNum": "WN647",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-19",
    "price": 308
  },
  {
    "flightNum": "UA519",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-13",
    "price": 303
  },
  {
    "flightNum": "B6591",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-21",
    "price": 195
  },
  {
    "flightNum": "DL782",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-31",
    "price": 396
  },
  {
    "flightNum": "B6552",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-22",
    "price": 182
  },
  {
    "flightNum": "DL853",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-18",
    "price": 317
  },
  {
    "flightNum": "WN755",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-25",
    "price": 248
  },
  {
    "flightNum": "DL801",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-04",
    "price": 456
  },
  {
    "flightNum": "DL346",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-25",
    "price": 457
  },
  {
    "flightNum": "AS474",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-16",
    "price": 204
  },
  {
    "flightNum": "DL846",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-28",
    "price": 332
  },
  {
    "flightNum": "AS722",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-13",
    "price": 190
  },
  {
    "flightNum": "AA140",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-10",
    "price": 279
  },
  {
    "flightNum": "DL378",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-26",
    "price": 362
  },
  {
    "flightNum": "B6905",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-17",
    "price": 222
  },
  {
    "flightNum": "AA988",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-10",
    "price": 224
  },
  {
    "flightNum": "AA167",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-05",
    "price": 228
  },
  {
    "flightNum": "DL954",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-14",
    "price": 118
  },
  {
    "flightNum": "B6852",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-06",
    "price": 304
  },
  {
    "flightNum": "WN345",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-03",
    "price": 387
  },
  {
    "flightNum": "DL293",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-20",
    "price": 359
  },
  {
    "flightNum": "B6844",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-07",
    "price": 111
  },
  {
    "flightNum": "AS549",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-12",
    "price": 258
  },
  {
    "flightNum": "UA727",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-18",
    "price": 127
  },
  {
    "flightNum": "AS241",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-16",
    "price": 113
  },
  {
    "flightNum": "AS251",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-29",
    "price": 173
  },
  {
    "flightNum": "WN429",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-25",
    "price": 467
  },
  {
    "flightNum": "AS588",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-21",
    "price": 477
  },
  {
    "flightNum": "AS226",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-08",
    "price": 165
  },
  {
    "flightNum": "AS222",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-22",
    "price": 147
  },
  {
    "flightNum": "AA631",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-23",
    "price": 399
  },
  {
    "flightNum": "WN934",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-30",
    "price": 455
  },
  {
    "flightNum": "WN833",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-21",
    "price": 250
  },
  {
    "flightNum": "UA726",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-22",
    "price": 437
  },
  {
    "flightNum": "AS306",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-05",
    "price": 488
  },
  {
    "flightNum": "WN938",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-12",
    "price": 139
  },
  {
    "flightNum": "WN921",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-03",
    "price": 222
  },
  {
    "flightNum": "DL105",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-21",
    "price": 455
  },
  {
    "flightNum": "UA174",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-25",
    "price": 487
  },
  {
    "flightNum": "DL295",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-09",
    "price": 432
  },
  {
    "flightNum": "DL907",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-29",
    "price": 196
  },
  {
    "flightNum": "B6341",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-15",
    "price": 366
  },
  {
    "flightNum": "DL121",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-26",
    "price": 383
  },
  {
    "flightNum": "AS628",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-26",
    "price": 221
  },
  {
    "flightNum": "AA138",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-17",
    "price": 195
  },
  {
    "flightNum": "AS883",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-30",
    "price": 239
  },
  {
    "flightNum": "AS343",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-01",
    "price": 152
  },
  {
    "flightNum": "AA879",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-24",
    "price": 345
  },
  {
    "flightNum": "AA620",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-26",
    "price": 203
  },
  {
    "flightNum": "UA989",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-10",
    "price": 469
  },
  {
    "flightNum": "B6331",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-16",
    "price": 315
  },
  {
    "flightNum": "AA301",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-18",
    "price": 258
  },
  {
    "flightNum": "B6545",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-19",
    "price": 139
  },
  {
    "flightNum": "DL732",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-22",
    "price": 307
  },
  {
    "flightNum": "UA417",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-26",
    "price": 136
  },
  {
    "flightNum": "DL102",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-10",
    "price": 339
  },
  {
    "flightNum": "WN366",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-29",
    "price": 489
  },
  {
    "flightNum": "AA922",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-20",
    "price": 386
  },
  {
    "flightNum": "AA335",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-04",
    "price": 288
  },
  {
    "flightNum": "DL390",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-03",
    "price": 385
  },
  {
    "flightNum": "WN497",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-21",
    "price": 161
  },
  {
    "flightNum": "B6734",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-20",
    "price": 261
  },
  {
    "flightNum": "DL617",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-04",
    "price": 170
  },
  {
    "flightNum": "DL377",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-31",
    "price": 289
  },
  {
    "flightNum": "AS742",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-13",
    "price": 220
  },
  {
    "flightNum": "UA219",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-29",
    "price": 116
  },
  {
    "flightNum": "DL536",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-03",
    "price": 324
  },
  {
    "flightNum": "B6975",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-01",
    "price": 119
  },
  {
    "flightNum": "AA178",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-18",
    "price": 136
  },
  {
    "flightNum": "DL474",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-07",
    "price": 124
  },
  {
    "flightNum": "AA199",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-31",
    "price": 484
  },
  {
    "flightNum": "AS940",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-11",
    "price": 448
  },
  {
    "flightNum": "DL501",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-05",
    "price": 134
  },
  {
    "flightNum": "UA973",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-10",
    "price": 436
  },
  {
    "flightNum": "DL318",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-17",
    "price": 348
  },
  {
    "flightNum": "AS664",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-31",
    "price": 438
  },
  {
    "flightNum": "DL193",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-14",
    "price": 175
  },
  {
    "flightNum": "AA390",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-04",
    "price": 248
  },
  {
    "flightNum": "DL844",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-05",
    "price": 190
  },
  {
    "flightNum": "WN128",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-07",
    "price": 194
  },
  {
    "flightNum": "AA603",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-31",
    "price": 296
  },
  {
    "flightNum": "UA704",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-13",
    "price": 275
  },
  {
    "flightNum": "DL630",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-10",
    "price": 253
  },
  {
    "flightNum": "AS448",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-14",
    "price": 372
  },
  {
    "flightNum": "DL712",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-22",
    "price": 319
  },
  {
    "flightNum": "UA959",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-28",
    "price": 243
  },
  {
    "flightNum": "AA703",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-13",
    "price": 371
  },
  {
    "flightNum": "AA377",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-16",
    "price": 182
  },
  {
    "flightNum": "AS432",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-03",
    "price": 214
  },
  {
    "flightNum": "WN784",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-03",
    "price": 182
  },
  {
    "flightNum": "WN951",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-24",
    "price": 367
  },
  {
    "flightNum": "B6555",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-25",
    "price": 144
  },
  {
    "flightNum": "B6880",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-01",
    "price": 319
  },
  {
    "flightNum": "AA938",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-24",
    "price": 167
  },
  {
    "flightNum": "DL133",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-22",
    "price": 263
  },
  {
    "flightNum": "B6871",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-27",
    "price": 219
  },
  {
    "flightNum": "AS896",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-01",
    "price": 432
  },
  {
    "flightNum": "B6390",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-06",
    "price": 257
  },
  {
    "flightNum": "AS411",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-19",
    "price": 217
  },
  {
    "flightNum": "WN912",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-09",
    "price": 416
  },
  {
    "flightNum": "AA282",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-29",
    "price": 469
  },
  {
    "flightNum": "UA492",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-19",
    "price": 373
  },
  {
    "flightNum": "AS365",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-22",
    "price": 244
  },
  {
    "flightNum": "B6748",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-14",
    "price": 370
  },
  {
    "flightNum": "WN577",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-11",
    "price": 444
  },
  {
    "flightNum": "UA204",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-21",
    "price": 466
  },
  {
    "flightNum": "AA810",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-07",
    "price": 308
  },
  {
    "flightNum": "WN280",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-05",
    "price": 323
  },
  {
    "flightNum": "AS929",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-19",
    "price": 126
  },
  {
    "flightNum": "DL679",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-23",
    "price": 483
  },
  {
    "flightNum": "AA952",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-24",
    "price": 221
  },
  {
    "flightNum": "AA329",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-31",
    "price": 210
  },
  {
    "flightNum": "B6514",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-05",
    "price": 300
  },
  {
    "flightNum": "B6470",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-14",
    "price": 240
  },
  {
    "flightNum": "UA971",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-02",
    "price": 434
  },
  {
    "flightNum": "AA527",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-29",
    "price": 370
  },
  {
    "flightNum": "AA937",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-16",
    "price": 311
  },
  {
    "flightNum": "B6438",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-10",
    "price": 159
  },
  {
    "flightNum": "UA128",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-04",
    "price": 319
  },
  {
    "flightNum": "AA631",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-27",
    "price": 191
  },
  {
    "flightNum": "AS161",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-06",
    "price": 369
  },
  {
    "flightNum": "AA401",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-10",
    "price": 201
  },
  {
    "flightNum": "B6597",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-08",
    "price": 340
  },
  {
    "flightNum": "DL240",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-05",
    "price": 157
  },
  {
    "flightNum": "B6226",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-03",
    "price": 219
  },
  {
    "flightNum": "B6575",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-24",
    "price": 357
  },
  {
    "flightNum": "AS860",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-04",
    "price": 466
  },
  {
    "flightNum": "WN398",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-27",
    "price": 332
  },
  {
    "flightNum": "AA642",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-29",
    "price": 334
  },
  {
    "flightNum": "AS116",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-10",
    "price": 109
  },
  {
    "flightNum": "DL999",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-19",
    "price": 353
  },
  {
    "flightNum": "B6270",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-16",
    "price": 394
  },
  {
    "flightNum": "UA834",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-29",
    "price": 451
  },
  {
    "flightNum": "AS757",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-03",
    "price": 312
  },
  {
    "flightNum": "WN386",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-31",
    "price": 325
  },
  {
    "flightNum": "DL212",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-25",
    "price": 413
  },
  {
    "flightNum": "B6104",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-21",
    "price": 399
  },
  {
    "flightNum": "WN315",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-18",
    "price": 406
  },
  {
    "flightNum": "B6932",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-09",
    "price": 104
  },
  {
    "flightNum": "UA206",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-22",
    "price": 480
  },
  {
    "flightNum": "B6645",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-03",
    "price": 121
  },
  {
    "flightNum": "UA365",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-15",
    "price": 159
  },
  {
    "flightNum": "UA806",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-27",
    "price": 181
  },
  {
    "flightNum": "WN560",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-26",
    "price": 412
  },
  {
    "flightNum": "UA789",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-14",
    "price": 174
  },
  {
    "flightNum": "DL206",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-20",
    "price": 500
  },
  {
    "flightNum": "DL945",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-15",
    "price": 166
  },
  {
    "flightNum": "WN789",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-26",
    "price": 193
  },
  {
    "flightNum": "AA812",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-30",
    "price": 183
  },
  {
    "flightNum": "WN254",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-15",
    "price": 145
  },
  {
    "flightNum": "WN443",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-01",
    "price": 412
  },
  {
    "flightNum": "B6508",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-29",
    "price": 202
  },
  {
    "flightNum": "AS573",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-26",
    "price": 442
  },
  {
    "flightNum": "DL290",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-12",
    "price": 367
  },
  {
    "flightNum": "WN153",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-20",
    "price": 327
  },
  {
    "flightNum": "DL761",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-10",
    "price": 169
  },
  {
    "flightNum": "WN346",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-18",
    "price": 267
  },
  {
    "flightNum": "DL441",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-28",
    "price": 122
  },
  {
    "flightNum": "WN568",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-05",
    "price": 367
  },
  {
    "flightNum": "AS310",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-17",
    "price": 290
  },
  {
    "flightNum": "UA950",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-19",
    "price": 370
  },
  {
    "flightNum": "B6802",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-16",
    "price": 149
  },
  {
    "flightNum": "DL583",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-14",
    "price": 163
  },
  {
    "flightNum": "DL445",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-08",
    "price": 429
  },
  {
    "flightNum": "DL286",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-19",
    "price": 284
  },
  {
    "flightNum": "B6517",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-02",
    "price": 114
  },
  {
    "flightNum": "WN598",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-28",
    "price": 431
  },
  {
    "flightNum": "AS243",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-05",
    "price": 331
  },
  {
    "flightNum": "B6782",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-13",
    "price": 489
  },
  {
    "flightNum": "B6958",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-03",
    "price": 260
  },
  {
    "flightNum": "WN340",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-25",
    "price": 375
  },
  {
    "flightNum": "UA983",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-15",
    "price": 470
  },
  {
    "flightNum": "AS877",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-06",
    "price": 163
  },
  {
    "flightNum": "DL674",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-07",
    "price": 244
  },
  {
    "flightNum": "B6761",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-23",
    "price": 393
  },
  {
    "flightNum": "B6641",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-14",
    "price": 229
  },
  {
    "flightNum": "AS694",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-02",
    "price": 412
  },
  {
    "flightNum": "B6798",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-01",
    "price": 264
  },
  {
    "flightNum": "B6620",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-20",
    "price": 248
  },
  {
    "flightNum": "B6960",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-18",
    "price": 484
  },
  {
    "flightNum": "DL964",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-26",
    "price": 461
  },
  {
    "flightNum": "DL280",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-26",
    "price": 156
  },
  {
    "flightNum": "AA548",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-05",
    "price": 405
  },
  {
    "flightNum": "WN711",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-05",
    "price": 130
  },
  {
    "flightNum": "UA401",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-04",
    "price": 348
  },
  {
    "flightNum": "B6808",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-30",
    "price": 390
  },
  {
    "flightNum": "AS633",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-20",
    "price": 488
  },
  {
    "flightNum": "B6446",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-10",
    "price": 240
  },
  {
    "flightNum": "AS505",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-12",
    "price": 131
  },
  {
    "flightNum": "WN372",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-06",
    "price": 311
  },
  {
    "flightNum": "DL448",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-27",
    "price": 254
  },
  {
    "flightNum": "AS823",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-25",
    "price": 292
  },
  {
    "flightNum": "AS555",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-22",
    "price": 476
  },
  {
    "flightNum": "B6967",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-18",
    "price": 474
  },
  {
    "flightNum": "UA725",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-03",
    "price": 220
  },
  {
    "flightNum": "B6598",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-09",
    "price": 326
  },
  {
    "flightNum": "DL565",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-30",
    "price": 473
  },
  {
    "flightNum": "AS702",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-26",
    "price": 117
  },
  {
    "flightNum": "WN678",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-18",
    "price": 132
  },
  {
    "flightNum": "UA883",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-21",
    "price": 477
  },
  {
    "flightNum": "DL418",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-20",
    "price": 422
  },
  {
    "flightNum": "UA179",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-21",
    "price": 443
  },
  {
    "flightNum": "WN692",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-28",
    "price": 360
  },
  {
    "flightNum": "WN737",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-22",
    "price": 390
  },
  {
    "flightNum": "UA352",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-13",
    "price": 216
  },
  {
    "flightNum": "WN501",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-18",
    "price": 238
  },
  {
    "flightNum": "AA758",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-07",
    "price": 211
  },
  {
    "flightNum": "DL134",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-06",
    "price": 152
  },
  {
    "flightNum": "AS838",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-07",
    "price": 281
  },
  {
    "flightNum": "AS813",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-04",
    "price": 393
  },
  {
    "flightNum": "WN821",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-19",
    "price": 227
  },
  {
    "flightNum": "AA826",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-07",
    "price": 191
  },
  {
    "flightNum": "AA883",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-19",
    "price": 165
  },
  {
    "flightNum": "B6414",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-02",
    "price": 366
  },
  {
    "flightNum": "AS411",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-09",
    "price": 309
  },
  {
    "flightNum": "AA105",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-26",
    "price": 184
  },
  {
    "flightNum": "WN907",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-23",
    "price": 487
  },
  {
    "flightNum": "WN785",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-18",
    "price": 225
  },
  {
    "flightNum": "WN380",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-05",
    "price": 110
  },
  {
    "flightNum": "B6747",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-10",
    "price": 483
  },
  {
    "flightNum": "B6664",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-09",
    "price": 487
  },
  {
    "flightNum": "WN402",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-29",
    "price": 138
  },
  {
    "flightNum": "DL242",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-30",
    "price": 183
  },
  {
    "flightNum": "AA653",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-17",
    "price": 138
  },
  {
    "flightNum": "B6863",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-04",
    "price": 161
  },
  {
    "flightNum": "WN577",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-04",
    "price": 294
  },
  {
    "flightNum": "B6373",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-23",
    "price": 372
  },
  {
    "flightNum": "DL570",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-15",
    "price": 116
  },
  {
    "flightNum": "DL646",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-22",
    "price": 449
  },
  {
    "flightNum": "B6194",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-28",
    "price": 213
  },
  {
    "flightNum": "DL418",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-06",
    "price": 113
  },
  {
    "flightNum": "DL735",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-14",
    "price": 305
  },
  {
    "flightNum": "DL447",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-19",
    "price": 438
  },
  {
    "flightNum": "B6760",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-19",
    "price": 151
  },
  {
    "flightNum": "UA241",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-10",
    "price": 201
  },
  {
    "flightNum": "B6533",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-16",
    "price": 492
  },
  {
    "flightNum": "DL409",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-17",
    "price": 434
  },
  {
    "flightNum": "AS737",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-13",
    "price": 390
  },
  {
    "flightNum": "AA233",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-18",
    "price": 393
  },
  {
    "flightNum": "AS255",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-17",
    "price": 304
  },
  {
    "flightNum": "AA112",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-03",
    "price": 409
  },
  {
    "flightNum": "DL406",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-20",
    "price": 208
  },
  {
    "flightNum": "AS719",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-14",
    "price": 200
  },
  {
    "flightNum": "DL664",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-21",
    "price": 414
  },
  {
    "flightNum": "DL396",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 250
  },
  {
    "flightNum": "AA594",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-25",
    "price": 204
  },
  {
    "flightNum": "UA297",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-07",
    "price": 121
  },
  {
    "flightNum": "WN136",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-26",
    "price": 182
  },
  {
    "flightNum": "B6242",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-18",
    "price": 469
  },
  {
    "flightNum": "DL924",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-02",
    "price": 240
  },
  {
    "flightNum": "DL110",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-13",
    "price": 207
  },
  {
    "flightNum": "WN976",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-17",
    "price": 474
  },
  {
    "flightNum": "DL613",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-29",
    "price": 406
  },
  {
    "flightNum": "WN352",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-11",
    "price": 498
  },
  {
    "flightNum": "AA691",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-11",
    "price": 178
  },
  {
    "flightNum": "AS249",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-24",
    "price": 247
  },
  {
    "flightNum": "UA513",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-16",
    "price": 313
  },
  {
    "flightNum": "WN249",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-29",
    "price": 211
  },
  {
    "flightNum": "B6811",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-06",
    "price": 238
  },
  {
    "flightNum": "UA682",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-27",
    "price": 477
  },
  {
    "flightNum": "DL670",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-05",
    "price": 443
  },
  {
    "flightNum": "B6222",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-19",
    "price": 363
  },
  {
    "flightNum": "AS406",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-22",
    "price": 482
  },
  {
    "flightNum": "UA554",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-27",
    "price": 292
  },
  {
    "flightNum": "UA217",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-30",
    "price": 113
  },
  {
    "flightNum": "AS808",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-14",
    "price": 471
  },
  {
    "flightNum": "WN341",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-21",
    "price": 190
  },
  {
    "flightNum": "AA567",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-14",
    "price": 308
  },
  {
    "flightNum": "WN418",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-15",
    "price": 392
  },
  {
    "flightNum": "UA113",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-25",
    "price": 404
  },
  {
    "flightNum": "AS510",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-15",
    "price": 314
  },
  {
    "flightNum": "B6185",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-30",
    "price": 389
  },
  {
    "flightNum": "UA572",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-10",
    "price": 327
  },
  {
    "flightNum": "AS834",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-24",
    "price": 492
  },
  {
    "flightNum": "DL975",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-18",
    "price": 414
  },
  {
    "flightNum": "AA626",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-02",
    "price": 145
  },
  {
    "flightNum": "DL866",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-01",
    "price": 285
  },
  {
    "flightNum": "AA811",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-10",
    "price": 315
  },
  {
    "flightNum": "DL715",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-18",
    "price": 425
  },
  {
    "flightNum": "UA963",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-27",
    "price": 215
  },
  {
    "flightNum": "UA314",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-08",
    "price": 464
  },
  {
    "flightNum": "B6703",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-06",
    "price": 224
  },
  {
    "flightNum": "DL181",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-08",
    "price": 276
  },
  {
    "flightNum": "DL883",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-02",
    "price": 458
  },
  {
    "flightNum": "UA223",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-21",
    "price": 272
  },
  {
    "flightNum": "B6383",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-24",
    "price": 119
  },
  {
    "flightNum": "AA228",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-13",
    "price": 220
  },
  {
    "flightNum": "WN199",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-07",
    "price": 310
  },
  {
    "flightNum": "B6886",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-24",
    "price": 288
  },
  {
    "flightNum": "B6864",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-08",
    "price": 212
  },
  {
    "flightNum": "B6590",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-06",
    "price": 437
  },
  {
    "flightNum": "WN480",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-30",
    "price": 479
  },
  {
    "flightNum": "AA152",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-27",
    "price": 210
  },
  {
    "flightNum": "UA458",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-14",
    "price": 330
  },
  {
    "flightNum": "B6571",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-15",
    "price": 333
  },
  {
    "flightNum": "AA415",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-17",
    "price": 381
  },
  {
    "flightNum": "WN768",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-21",
    "price": 454
  },
  {
    "flightNum": "DL714",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-06",
    "price": 113
  },
  {
    "flightNum": "AS755",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-25",
    "price": 316
  },
  {
    "flightNum": "AS486",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-30",
    "price": 114
  },
  {
    "flightNum": "AS790",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-06",
    "price": 287
  },
  {
    "flightNum": "B6732",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-22",
    "price": 205
  },
  {
    "flightNum": "AA663",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-31",
    "price": 475
  },
  {
    "flightNum": "AA287",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-26",
    "price": 226
  },
  {
    "flightNum": "WN124",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-13",
    "price": 125
  },
  {
    "flightNum": "B6502",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-19",
    "price": 377
  },
  {
    "flightNum": "AA107",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-23",
    "price": 310
  },
  {
    "flightNum": "DL710",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-02",
    "price": 373
  },
  {
    "flightNum": "DL120",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-23",
    "price": 138
  },
  {
    "flightNum": "AS781",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-25",
    "price": 274
  },
  {
    "flightNum": "AA152",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-18",
    "price": 278
  },
  {
    "flightNum": "AS578",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-06",
    "price": 246
  },
  {
    "flightNum": "UA541",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-24",
    "price": 404
  },
  {
    "flightNum": "UA648",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-24",
    "price": 328
  },
  {
    "flightNum": "WN162",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-13",
    "price": 139
  },
  {
    "flightNum": "AS648",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-08",
    "price": 219
  },
  {
    "flightNum": "AS481",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-16",
    "price": 278
  },
  {
    "flightNum": "B6667",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-11",
    "price": 359
  },
  {
    "flightNum": "DL925",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-29",
    "price": 403
  },
  {
    "flightNum": "B6461",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-20",
    "price": 258
  },
  {
    "flightNum": "WN212",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-14",
    "price": 296
  },
  {
    "flightNum": "B6457",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-19",
    "price": 132
  },
  {
    "flightNum": "B6978",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-04",
    "price": 248
  },
  {
    "flightNum": "WN348",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-28",
    "price": 471
  },
  {
    "flightNum": "AS900",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-26",
    "price": 204
  },
  {
    "flightNum": "AS881",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-09",
    "price": 178
  },
  {
    "flightNum": "AS958",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-31",
    "price": 260
  },
  {
    "flightNum": "DL262",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-29",
    "price": 316
  },
  {
    "flightNum": "WN344",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-12",
    "price": 482
  },
  {
    "flightNum": "AS790",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-31",
    "price": 222
  },
  {
    "flightNum": "AA621",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-04",
    "price": 179
  },
  {
    "flightNum": "B6565",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-01",
    "price": 137
  },
  {
    "flightNum": "B6272",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-07",
    "price": 325
  },
  {
    "flightNum": "DL703",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-19",
    "price": 158
  },
  {
    "flightNum": "DL894",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-26",
    "price": 135
  },
  {
    "flightNum": "UA493",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-22",
    "price": 406
  },
  {
    "flightNum": "DL122",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-01",
    "price": 149
  },
  {
    "flightNum": "WN182",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-18",
    "price": 178
  },
  {
    "flightNum": "AA760",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-03",
    "price": 158
  },
  {
    "flightNum": "AS115",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-02",
    "price": 467
  },
  {
    "flightNum": "AA126",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-30",
    "price": 406
  },
  {
    "flightNum": "WN845",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-07",
    "price": 190
  },
  {
    "flightNum": "B6466",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-11",
    "price": 154
  },
  {
    "flightNum": "AS415",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-25",
    "price": 253
  },
  {
    "flightNum": "AA989",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-07",
    "price": 295
  },
  {
    "flightNum": "DL628",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-31",
    "price": 252
  },
  {
    "flightNum": "WN676",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-31",
    "price": 206
  },
  {
    "flightNum": "AS772",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-24",
    "price": 181
  },
  {
    "flightNum": "AS441",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-31",
    "price": 451
  },
  {
    "flightNum": "AA650",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-24",
    "price": 337
  },
  {
    "flightNum": "B6507",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-07",
    "price": 429
  },
  {
    "flightNum": "B6713",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-17",
    "price": 255
  },
  {
    "flightNum": "DL682",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-20",
    "price": 302
  },
  {
    "flightNum": "AA609",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-05",
    "price": 177
  },
  {
    "flightNum": "UA983",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-17",
    "price": 457
  },
  {
    "flightNum": "AS504",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-31",
    "price": 107
  },
  {
    "flightNum": "AS492",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-02",
    "price": 155
  },
  {
    "flightNum": "AA149",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-20",
    "price": 103
  },
  {
    "flightNum": "AA159",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-31",
    "price": 192
  },
  {
    "flightNum": "AA942",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-05",
    "price": 140
  },
  {
    "flightNum": "WN276",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-29",
    "price": 394
  },
  {
    "flightNum": "AA523",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-06",
    "price": 393
  },
  {
    "flightNum": "AS261",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-05",
    "price": 400
  },
  {
    "flightNum": "UA132",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-22",
    "price": 399
  },
  {
    "flightNum": "WN909",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-03",
    "price": 282
  },
  {
    "flightNum": "AS385",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-11",
    "price": 224
  },
  {
    "flightNum": "AS914",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-09",
    "price": 393
  },
  {
    "flightNum": "DL167",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-24",
    "price": 437
  },
  {
    "flightNum": "WN701",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-18",
    "price": 226
  },
  {
    "flightNum": "AS400",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-17",
    "price": 439
  },
  {
    "flightNum": "AA329",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-28",
    "price": 165
  },
  {
    "flightNum": "AA418",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-24",
    "price": 440
  },
  {
    "flightNum": "AS150",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-22",
    "price": 294
  },
  {
    "flightNum": "AS491",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-10",
    "price": 278
  },
  {
    "flightNum": "DL271",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-25",
    "price": 239
  },
  {
    "flightNum": "UA204",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-12",
    "price": 299
  },
  {
    "flightNum": "DL690",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-03",
    "price": 110
  },
  {
    "flightNum": "AA230",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-12",
    "price": 454
  },
  {
    "flightNum": "WN679",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-24",
    "price": 453
  },
  {
    "flightNum": "WN269",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-07",
    "price": 342
  },
  {
    "flightNum": "B6173",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-30",
    "price": 381
  },
  {
    "flightNum": "DL901",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-02",
    "price": 497
  },
  {
    "flightNum": "AS532",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-31",
    "price": 368
  },
  {
    "flightNum": "AA707",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 116
  },
  {
    "flightNum": "UA497",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-23",
    "price": 107
  },
  {
    "flightNum": "AA745",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-10",
    "price": 311
  },
  {
    "flightNum": "B6739",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-22",
    "price": 114
  },
  {
    "flightNum": "B6144",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-28",
    "price": 160
  },
  {
    "flightNum": "AS214",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-01",
    "price": 125
  },
  {
    "flightNum": "UA919",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-25",
    "price": 133
  },
  {
    "flightNum": "UA229",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-09",
    "price": 332
  },
  {
    "flightNum": "DL436",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-11",
    "price": 136
  },
  {
    "flightNum": "WN148",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-16",
    "price": 236
  },
  {
    "flightNum": "WN377",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-12",
    "price": 106
  },
  {
    "flightNum": "AA428",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-04",
    "price": 175
  },
  {
    "flightNum": "AS184",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-13",
    "price": 230
  },
  {
    "flightNum": "WN331",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-26",
    "price": 125
  },
  {
    "flightNum": "B6115",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-22",
    "price": 391
  },
  {
    "flightNum": "WN803",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-17",
    "price": 309
  },
  {
    "flightNum": "B6282",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-02",
    "price": 176
  },
  {
    "flightNum": "AA890",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-23",
    "price": 247
  },
  {
    "flightNum": "UA991",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-20",
    "price": 199
  },
  {
    "flightNum": "AA876",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-17",
    "price": 405
  },
  {
    "flightNum": "WN281",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-24",
    "price": 337
  },
  {
    "flightNum": "AS825",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-14",
    "price": 412
  },
  {
    "flightNum": "DL573",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-05",
    "price": 209
  },
  {
    "flightNum": "B6800",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-08",
    "price": 163
  },
  {
    "flightNum": "DL976",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-29",
    "price": 232
  },
  {
    "flightNum": "UA206",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-10",
    "price": 384
  },
  {
    "flightNum": "AA699",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-06",
    "price": 294
  },
  {
    "flightNum": "AA561",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-28",
    "price": 470
  },
  {
    "flightNum": "UA572",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-29",
    "price": 167
  },
  {
    "flightNum": "AA487",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-04",
    "price": 233
  },
  {
    "flightNum": "WN789",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-11",
    "price": 483
  },
  {
    "flightNum": "DL522",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-14",
    "price": 107
  },
  {
    "flightNum": "B6174",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-16",
    "price": 106
  },
  {
    "flightNum": "UA785",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-19",
    "price": 185
  },
  {
    "flightNum": "WN806",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-10",
    "price": 456
  },
  {
    "flightNum": "WN881",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-10",
    "price": 313
  },
  {
    "flightNum": "B6845",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-17",
    "price": 255
  },
  {
    "flightNum": "WN306",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-17",
    "price": 333
  },
  {
    "flightNum": "UA405",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-16",
    "price": 347
  },
  {
    "flightNum": "B6834",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-27",
    "price": 380
  },
  {
    "flightNum": "B6689",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-25",
    "price": 328
  },
  {
    "flightNum": "B6383",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-08",
    "price": 179
  },
  {
    "flightNum": "AS805",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-06",
    "price": 394
  },
  {
    "flightNum": "WN250",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-30",
    "price": 263
  },
  {
    "flightNum": "AA851",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-02",
    "price": 196
  },
  {
    "flightNum": "AA212",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-20",
    "price": 300
  },
  {
    "flightNum": "AA164",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-15",
    "price": 203
  },
  {
    "flightNum": "WN673",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-18",
    "price": 109
  },
  {
    "flightNum": "DL527",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-11",
    "price": 173
  },
  {
    "flightNum": "B6432",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-03",
    "price": 416
  },
  {
    "flightNum": "AS131",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-27",
    "price": 462
  },
  {
    "flightNum": "AS434",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-21",
    "price": 203
  },
  {
    "flightNum": "B6870",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-16",
    "price": 455
  },
  {
    "flightNum": "B6748",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-18",
    "price": 341
  },
  {
    "flightNum": "DL256",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-23",
    "price": 104
  },
  {
    "flightNum": "B6322",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-11",
    "price": 317
  },
  {
    "flightNum": "AS532",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-02",
    "price": 392
  },
  {
    "flightNum": "DL947",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-25",
    "price": 187
  },
  {
    "flightNum": "DL134",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-20",
    "price": 174
  },
  {
    "flightNum": "UA153",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-02",
    "price": 420
  },
  {
    "flightNum": "WN800",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-12",
    "price": 120
  },
  {
    "flightNum": "DL761",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-30",
    "price": 451
  },
  {
    "flightNum": "AA288",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-03",
    "price": 134
  },
  {
    "flightNum": "AS708",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-04",
    "price": 249
  },
  {
    "flightNum": "B6223",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-15",
    "price": 209
  },
  {
    "flightNum": "DL959",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-31",
    "price": 294
  },
  {
    "flightNum": "B6306",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-30",
    "price": 445
  },
  {
    "flightNum": "WN158",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-12",
    "price": 125
  },
  {
    "flightNum": "AA760",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-24",
    "price": 118
  },
  {
    "flightNum": "WN173",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-10",
    "price": 486
  },
  {
    "flightNum": "UA952",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-31",
    "price": 263
  },
  {
    "flightNum": "UA398",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-15",
    "price": 369
  },
  {
    "flightNum": "WN812",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-17",
    "price": 115
  },
  {
    "flightNum": "AS753",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-31",
    "price": 327
  },
  {
    "flightNum": "B6971",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-05",
    "price": 457
  },
  {
    "flightNum": "AS659",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-27",
    "price": 193
  },
  {
    "flightNum": "AS910",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-16",
    "price": 346
  },
  {
    "flightNum": "AS797",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-26",
    "price": 492
  },
  {
    "flightNum": "DL502",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-10",
    "price": 384
  },
  {
    "flightNum": "WN263",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-14",
    "price": 102
  },
  {
    "flightNum": "B6788",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-02",
    "price": 200
  },
  {
    "flightNum": "DL537",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-14",
    "price": 494
  },
  {
    "flightNum": "AA576",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-09",
    "price": 334
  },
  {
    "flightNum": "WN285",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-01",
    "price": 295
  },
  {
    "flightNum": "AA145",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-09",
    "price": 198
  },
  {
    "flightNum": "AA280",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-02",
    "price": 214
  },
  {
    "flightNum": "WN678",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-22",
    "price": 388
  },
  {
    "flightNum": "DL969",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-31",
    "price": 414
  },
  {
    "flightNum": "B6784",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-09",
    "price": 237
  },
  {
    "flightNum": "DL679",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-12",
    "price": 497
  },
  {
    "flightNum": "B6723",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-10",
    "price": 347
  },
  {
    "flightNum": "DL474",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-28",
    "price": 376
  },
  {
    "flightNum": "B6291",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-09",
    "price": 471
  },
  {
    "flightNum": "WN839",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-13",
    "price": 331
  },
  {
    "flightNum": "AA785",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-14",
    "price": 466
  },
  {
    "flightNum": "WN873",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-25",
    "price": 393
  },
  {
    "flightNum": "DL685",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-11",
    "price": 303
  },
  {
    "flightNum": "DL416",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-20",
    "price": 300
  },
  {
    "flightNum": "B6314",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-06",
    "price": 226
  },
  {
    "flightNum": "WN636",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-13",
    "price": 417
  },
  {
    "flightNum": "UA271",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-30",
    "price": 256
  },
  {
    "flightNum": "AA269",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-03",
    "price": 224
  },
  {
    "flightNum": "UA419",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-06",
    "price": 457
  },
  {
    "flightNum": "DL564",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-13",
    "price": 422
  },
  {
    "flightNum": "WN761",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-13",
    "price": 370
  },
  {
    "flightNum": "WN909",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-08",
    "price": 385
  },
  {
    "flightNum": "DL726",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-22",
    "price": 268
  },
  {
    "flightNum": "DL528",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-19",
    "price": 334
  },
  {
    "flightNum": "DL708",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-12",
    "price": 246
  },
  {
    "flightNum": "DL649",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-27",
    "price": 366
  },
  {
    "flightNum": "UA240",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-20",
    "price": 423
  },
  {
    "flightNum": "AS754",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-24",
    "price": 160
  },
  {
    "flightNum": "UA689",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-27",
    "price": 477
  },
  {
    "flightNum": "AS954",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-17",
    "price": 307
  },
  {
    "flightNum": "AA879",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-29",
    "price": 479
  },
  {
    "flightNum": "AS424",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-22",
    "price": 273
  },
  {
    "flightNum": "DL778",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-08",
    "price": 441
  },
  {
    "flightNum": "AA224",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-22",
    "price": 453
  },
  {
    "flightNum": "WN530",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 498
  },
  {
    "flightNum": "B6119",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-25",
    "price": 446
  },
  {
    "flightNum": "B6516",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-05",
    "price": 256
  },
  {
    "flightNum": "WN686",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-26",
    "price": 252
  },
  {
    "flightNum": "AA198",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-18",
    "price": 466
  },
  {
    "flightNum": "AA423",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-07",
    "price": 417
  },
  {
    "flightNum": "AA752",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-03",
    "price": 441
  },
  {
    "flightNum": "AS501",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-30",
    "price": 406
  },
  {
    "flightNum": "DL812",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-30",
    "price": 366
  },
  {
    "flightNum": "AS542",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-26",
    "price": 223
  },
  {
    "flightNum": "B6915",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-13",
    "price": 103
  },
  {
    "flightNum": "AS136",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-26",
    "price": 277
  },
  {
    "flightNum": "B6990",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-31",
    "price": 253
  },
  {
    "flightNum": "WN162",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-09",
    "price": 274
  },
  {
    "flightNum": "AA483",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-21",
    "price": 390
  },
  {
    "flightNum": "DL824",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-04",
    "price": 500
  },
  {
    "flightNum": "AS329",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-12",
    "price": 492
  },
  {
    "flightNum": "UA578",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-05",
    "price": 399
  },
  {
    "flightNum": "UA463",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-12",
    "price": 142
  },
  {
    "flightNum": "AS320",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-04",
    "price": 309
  },
  {
    "flightNum": "AS480",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-04",
    "price": 389
  },
  {
    "flightNum": "DL200",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-02",
    "price": 160
  },
  {
    "flightNum": "B6255",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-03",
    "price": 213
  },
  {
    "flightNum": "DL476",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-16",
    "price": 147
  },
  {
    "flightNum": "AS237",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-29",
    "price": 254
  },
  {
    "flightNum": "WN239",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-07",
    "price": 427
  },
  {
    "flightNum": "AS513",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-14",
    "price": 363
  },
  {
    "flightNum": "B6627",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-04",
    "price": 230
  },
  {
    "flightNum": "WN294",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-30",
    "price": 255
  },
  {
    "flightNum": "B6186",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-26",
    "price": 320
  },
  {
    "flightNum": "DL323",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-08",
    "price": 271
  },
  {
    "flightNum": "DL811",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-17",
    "price": 403
  },
  {
    "flightNum": "AS629",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-03",
    "price": 265
  },
  {
    "flightNum": "B6323",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-22",
    "price": 422
  },
  {
    "flightNum": "AA916",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-18",
    "price": 376
  },
  {
    "flightNum": "B6198",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-21",
    "price": 489
  },
  {
    "flightNum": "DL432",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-01",
    "price": 375
  },
  {
    "flightNum": "B6949",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-11",
    "price": 146
  },
  {
    "flightNum": "UA739",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-07",
    "price": 217
  },
  {
    "flightNum": "UA355",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-01",
    "price": 244
  },
  {
    "flightNum": "UA761",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-13",
    "price": 248
  },
  {
    "flightNum": "UA292",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-03",
    "price": 180
  },
  {
    "flightNum": "B6314",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-30",
    "price": 329
  },
  {
    "flightNum": "WN334",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-11",
    "price": 436
  },
  {
    "flightNum": "B6755",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-02",
    "price": 307
  },
  {
    "flightNum": "B6855",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-14",
    "price": 149
  },
  {
    "flightNum": "UA737",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-22",
    "price": 146
  },
  {
    "flightNum": "AA784",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-07",
    "price": 406
  },
  {
    "flightNum": "UA340",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-12",
    "price": 411
  },
  {
    "flightNum": "AA596",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-29",
    "price": 277
  },
  {
    "flightNum": "UA585",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-19",
    "price": 140
  },
  {
    "flightNum": "UA877",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-31",
    "price": 242
  },
  {
    "flightNum": "B6720",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-03",
    "price": 198
  },
  {
    "flightNum": "DL151",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-05",
    "price": 308
  },
  {
    "flightNum": "DL925",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-11",
    "price": 442
  },
  {
    "flightNum": "AS536",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-05",
    "price": 410
  },
  {
    "flightNum": "AA456",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-08",
    "price": 118
  },
  {
    "flightNum": "DL710",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-26",
    "price": 497
  },
  {
    "flightNum": "UA636",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-18",
    "price": 244
  },
  {
    "flightNum": "B6895",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-27",
    "price": 296
  },
  {
    "flightNum": "B6912",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-01",
    "price": 330
  },
  {
    "flightNum": "AS398",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-18",
    "price": 398
  },
  {
    "flightNum": "AA328",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-02",
    "price": 309
  },
  {
    "flightNum": "WN350",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-29",
    "price": 324
  },
  {
    "flightNum": "B6443",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-22",
    "price": 398
  },
  {
    "flightNum": "DL337",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-27",
    "price": 334
  },
  {
    "flightNum": "AS151",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-24",
    "price": 327
  },
  {
    "flightNum": "DL948",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-02",
    "price": 181
  },
  {
    "flightNum": "WN992",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-11",
    "price": 389
  },
  {
    "flightNum": "DL611",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-13",
    "price": 264
  },
  {
    "flightNum": "AA654",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-30",
    "price": 460
  },
  {
    "flightNum": "AA125",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-09",
    "price": 259
  },
  {
    "flightNum": "AS356",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-25",
    "price": 140
  },
  {
    "flightNum": "DL705",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-22",
    "price": 246
  },
  {
    "flightNum": "AA964",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-16",
    "price": 180
  },
  {
    "flightNum": "UA529",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-24",
    "price": 241
  },
  {
    "flightNum": "DL443",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-01",
    "price": 299
  },
  {
    "flightNum": "AA830",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-05",
    "price": 200
  },
  {
    "flightNum": "B6446",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-13",
    "price": 184
  },
  {
    "flightNum": "UA185",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-21",
    "price": 470
  },
  {
    "flightNum": "UA761",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-28",
    "price": 370
  },
  {
    "flightNum": "DL821",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-31",
    "price": 295
  },
  {
    "flightNum": "B6816",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-19",
    "price": 413
  },
  {
    "flightNum": "WN584",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-06",
    "price": 276
  },
  {
    "flightNum": "WN489",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-26",
    "price": 186
  },
  {
    "flightNum": "B6914",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-25",
    "price": 219
  },
  {
    "flightNum": "B6271",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-02",
    "price": 312
  },
  {
    "flightNum": "B6145",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 258
  },
  {
    "flightNum": "WN954",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-13",
    "price": 241
  },
  {
    "flightNum": "B6971",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-02",
    "price": 358
  },
  {
    "flightNum": "B6604",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-21",
    "price": 398
  },
  {
    "flightNum": "WN452",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-04",
    "price": 363
  },
  {
    "flightNum": "AA772",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-05",
    "price": 342
  },
  {
    "flightNum": "AA717",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-10",
    "price": 266
  },
  {
    "flightNum": "B6199",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-14",
    "price": 153
  },
  {
    "flightNum": "WN327",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-26",
    "price": 219
  },
  {
    "flightNum": "B6103",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-20",
    "price": 313
  },
  {
    "flightNum": "B6482",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-23",
    "price": 181
  },
  {
    "flightNum": "DL703",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-08",
    "price": 215
  },
  {
    "flightNum": "AS172",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-13",
    "price": 419
  },
  {
    "flightNum": "AA659",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-02",
    "price": 175
  },
  {
    "flightNum": "UA998",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-27",
    "price": 326
  },
  {
    "flightNum": "AA585",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-13",
    "price": 214
  },
  {
    "flightNum": "AS901",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-21",
    "price": 173
  },
  {
    "flightNum": "DL539",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-03",
    "price": 218
  },
  {
    "flightNum": "B6504",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-09",
    "price": 255
  },
  {
    "flightNum": "DL435",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-06",
    "price": 114
  },
  {
    "flightNum": "UA739",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-30",
    "price": 187
  },
  {
    "flightNum": "B6442",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-03",
    "price": 370
  },
  {
    "flightNum": "WN347",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-29",
    "price": 499
  },
  {
    "flightNum": "DL388",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-23",
    "price": 430
  },
  {
    "flightNum": "B6668",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-23",
    "price": 160
  },
  {
    "flightNum": "B6419",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-02",
    "price": 238
  },
  {
    "flightNum": "AA207",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-25",
    "price": 194
  },
  {
    "flightNum": "UA666",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-20",
    "price": 151
  },
  {
    "flightNum": "AA754",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-27",
    "price": 487
  },
  {
    "flightNum": "DL325",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-22",
    "price": 182
  },
  {
    "flightNum": "DL675",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-17",
    "price": 244
  },
  {
    "flightNum": "UA427",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 235
  },
  {
    "flightNum": "DL612",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-22",
    "price": 129
  },
  {
    "flightNum": "DL543",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-27",
    "price": 250
  },
  {
    "flightNum": "B6965",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-08",
    "price": 453
  },
  {
    "flightNum": "DL377",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 358
  },
  {
    "flightNum": "DL808",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-07",
    "price": 357
  },
  {
    "flightNum": "AS469",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-26",
    "price": 149
  },
  {
    "flightNum": "WN728",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-15",
    "price": 303
  },
  {
    "flightNum": "B6195",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 311
  },
  {
    "flightNum": "AS500",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-27",
    "price": 270
  },
  {
    "flightNum": "WN933",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-17",
    "price": 115
  },
  {
    "flightNum": "AS813",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-02",
    "price": 239
  },
  {
    "flightNum": "UA738",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-28",
    "price": 185
  },
  {
    "flightNum": "UA856",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-12",
    "price": 124
  },
  {
    "flightNum": "AS605",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-13",
    "price": 144
  },
  {
    "flightNum": "AA256",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-07",
    "price": 244
  },
  {
    "flightNum": "B6464",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-09",
    "price": 235
  },
  {
    "flightNum": "AS554",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-11",
    "price": 220
  },
  {
    "flightNum": "B6951",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-28",
    "price": 113
  },
  {
    "flightNum": "DL303",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-20",
    "price": 248
  },
  {
    "flightNum": "B6900",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-22",
    "price": 344
  },
  {
    "flightNum": "UA398",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-18",
    "price": 224
  },
  {
    "flightNum": "B6920",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-17",
    "price": 275
  },
  {
    "flightNum": "AS978",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-26",
    "price": 338
  },
  {
    "flightNum": "AS132",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-08",
    "price": 239
  },
  {
    "flightNum": "UA813",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-14",
    "price": 430
  },
  {
    "flightNum": "AA824",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-29",
    "price": 494
  },
  {
    "flightNum": "UA976",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-28",
    "price": 277
  },
  {
    "flightNum": "B6803",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-18",
    "price": 273
  },
  {
    "flightNum": "B6706",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-30",
    "price": 203
  },
  {
    "flightNum": "B6248",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-14",
    "price": 227
  },
  {
    "flightNum": "DL176",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-24",
    "price": 362
  },
  {
    "flightNum": "UA269",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-26",
    "price": 133
  },
  {
    "flightNum": "UA224",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-25",
    "price": 473
  },
  {
    "flightNum": "DL760",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-02",
    "price": 243
  },
  {
    "flightNum": "B6296",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-03",
    "price": 269
  },
  {
    "flightNum": "AA661",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-28",
    "price": 215
  },
  {
    "flightNum": "AA737",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-23",
    "price": 379
  },
  {
    "flightNum": "WN611",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-22",
    "price": 202
  },
  {
    "flightNum": "AA336",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-27",
    "price": 213
  },
  {
    "flightNum": "DL894",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-23",
    "price": 374
  },
  {
    "flightNum": "B6535",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-04",
    "price": 278
  },
  {
    "flightNum": "DL403",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-19",
    "price": 213
  },
  {
    "flightNum": "AS978",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-27",
    "price": 478
  },
  {
    "flightNum": "B6273",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-08",
    "price": 231
  },
  {
    "flightNum": "UA263",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-27",
    "price": 125
  },
  {
    "flightNum": "AS777",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-06",
    "price": 425
  },
  {
    "flightNum": "AS881",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-30",
    "price": 283
  },
  {
    "flightNum": "WN706",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-15",
    "price": 450
  },
  {
    "flightNum": "WN357",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-23",
    "price": 130
  },
  {
    "flightNum": "AS245",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-14",
    "price": 358
  },
  {
    "flightNum": "AS124",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-13",
    "price": 287
  },
  {
    "flightNum": "UA380",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-15",
    "price": 206
  },
  {
    "flightNum": "B6923",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-11",
    "price": 393
  },
  {
    "flightNum": "AA186",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-09",
    "price": 298
  },
  {
    "flightNum": "B6682",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-06",
    "price": 217
  },
  {
    "flightNum": "WN610",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-10",
    "price": 168
  },
  {
    "flightNum": "B6251",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-31",
    "price": 251
  },
  {
    "flightNum": "WN381",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-30",
    "price": 338
  },
  {
    "flightNum": "AA267",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-03",
    "price": 251
  },
  {
    "flightNum": "WN117",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-15",
    "price": 216
  },
  {
    "flightNum": "WN945",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-05",
    "price": 164
  },
  {
    "flightNum": "AA527",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-24",
    "price": 118
  },
  {
    "flightNum": "B6330",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-11",
    "price": 213
  },
  {
    "flightNum": "B6873",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-04",
    "price": 177
  },
  {
    "flightNum": "WN720",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-29",
    "price": 299
  },
  {
    "flightNum": "WN611",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-20",
    "price": 456
  },
  {
    "flightNum": "WN869",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-21",
    "price": 209
  },
  {
    "flightNum": "UA418",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-20",
    "price": 114
  },
  {
    "flightNum": "AS885",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-18",
    "price": 493
  },
  {
    "flightNum": "AS613",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-04",
    "price": 189
  },
  {
    "flightNum": "AS169",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-27",
    "price": 265
  },
  {
    "flightNum": "UA457",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-23",
    "price": 290
  },
  {
    "flightNum": "B6269",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-23",
    "price": 272
  },
  {
    "flightNum": "DL457",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-23",
    "price": 319
  },
  {
    "flightNum": "AS473",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-10",
    "price": 310
  },
  {
    "flightNum": "DL353",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-30",
    "price": 106
  },
  {
    "flightNum": "AS869",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-19",
    "price": 102
  },
  {
    "flightNum": "UA348",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-06",
    "price": 237
  },
  {
    "flightNum": "UA231",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-17",
    "price": 481
  },
  {
    "flightNum": "AA390",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-08",
    "price": 337
  },
  {
    "flightNum": "B6385",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-21",
    "price": 291
  },
  {
    "flightNum": "B6781",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-03",
    "price": 114
  },
  {
    "flightNum": "AA232",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-23",
    "price": 305
  },
  {
    "flightNum": "AA768",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-06",
    "price": 333
  },
  {
    "flightNum": "AS594",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-06",
    "price": 156
  },
  {
    "flightNum": "WN893",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-17",
    "price": 105
  },
  {
    "flightNum": "AS486",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-25",
    "price": 120
  },
  {
    "flightNum": "B6389",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-27",
    "price": 165
  },
  {
    "flightNum": "AA630",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-31",
    "price": 112
  },
  {
    "flightNum": "B6237",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-21",
    "price": 464
  },
  {
    "flightNum": "UA350",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-14",
    "price": 105
  },
  {
    "flightNum": "B6298",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-20",
    "price": 400
  },
  {
    "flightNum": "UA325",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-05",
    "price": 133
  },
  {
    "flightNum": "AA551",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-15",
    "price": 264
  },
  {
    "flightNum": "UA806",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-28",
    "price": 206
  },
  {
    "flightNum": "DL430",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-30",
    "price": 138
  },
  {
    "flightNum": "AS496",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-30",
    "price": 338
  },
  {
    "flightNum": "AA152",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-14",
    "price": 395
  },
  {
    "flightNum": "AA674",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-19",
    "price": 335
  },
  {
    "flightNum": "B6685",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-31",
    "price": 276
  },
  {
    "flightNum": "AS442",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-10",
    "price": 229
  },
  {
    "flightNum": "UA716",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-21",
    "price": 132
  },
  {
    "flightNum": "B6619",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-25",
    "price": 442
  },
  {
    "flightNum": "AA305",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-14",
    "price": 466
  },
  {
    "flightNum": "AA716",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-06",
    "price": 227
  },
  {
    "flightNum": "UA944",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-27",
    "price": 159
  },
  {
    "flightNum": "AA237",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-22",
    "price": 162
  },
  {
    "flightNum": "AA766",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-15",
    "price": 332
  },
  {
    "flightNum": "UA431",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-22",
    "price": 140
  },
  {
    "flightNum": "DL979",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-05",
    "price": 357
  },
  {
    "flightNum": "WN700",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-08",
    "price": 318
  },
  {
    "flightNum": "AA808",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-21",
    "price": 451
  },
  {
    "flightNum": "AS860",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-04",
    "price": 183
  },
  {
    "flightNum": "UA385",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-06",
    "price": 111
  },
  {
    "flightNum": "WN738",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-19",
    "price": 151
  },
  {
    "flightNum": "UA848",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-25",
    "price": 279
  },
  {
    "flightNum": "WN202",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-14",
    "price": 385
  },
  {
    "flightNum": "B6802",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-04",
    "price": 479
  },
  {
    "flightNum": "AS993",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-27",
    "price": 393
  },
  {
    "flightNum": "AA969",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-08",
    "price": 171
  },
  {
    "flightNum": "DL441",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-01",
    "price": 447
  },
  {
    "flightNum": "AS365",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-16",
    "price": 465
  },
  {
    "flightNum": "DL385",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-12",
    "price": 400
  },
  {
    "flightNum": "WN954",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-01",
    "price": 392
  },
  {
    "flightNum": "AS622",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-12",
    "price": 310
  },
  {
    "flightNum": "AS641",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-23",
    "price": 338
  },
  {
    "flightNum": "AS679",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-18",
    "price": 452
  },
  {
    "flightNum": "UA260",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-17",
    "price": 155
  },
  {
    "flightNum": "AA397",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-14",
    "price": 431
  },
  {
    "flightNum": "AA397",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-09",
    "price": 260
  },
  {
    "flightNum": "WN534",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-29",
    "price": 153
  },
  {
    "flightNum": "B6795",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-15",
    "price": 464
  },
  {
    "flightNum": "DL269",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-06",
    "price": 467
  },
  {
    "flightNum": "UA166",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-22",
    "price": 111
  },
  {
    "flightNum": "AA941",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-16",
    "price": 223
  },
  {
    "flightNum": "WN535",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-23",
    "price": 128
  },
  {
    "flightNum": "B6101",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-15",
    "price": 237
  },
  {
    "flightNum": "AA371",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-20",
    "price": 484
  },
  {
    "flightNum": "DL206",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-05",
    "price": 128
  },
  {
    "flightNum": "WN546",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-19",
    "price": 480
  },
  {
    "flightNum": "UA994",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-19",
    "price": 302
  },
  {
    "flightNum": "WN580",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-04",
    "price": 454
  },
  {
    "flightNum": "B6835",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-19",
    "price": 387
  },
  {
    "flightNum": "DL403",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-01",
    "price": 481
  },
  {
    "flightNum": "AS627",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-07",
    "price": 343
  },
  {
    "flightNum": "WN509",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-19",
    "price": 376
  },
  {
    "flightNum": "DL953",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-06",
    "price": 293
  },
  {
    "flightNum": "AA100",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-30",
    "price": 394
  },
  {
    "flightNum": "AA253",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-31",
    "price": 328
  },
  {
    "flightNum": "AA766",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-07",
    "price": 122
  },
  {
    "flightNum": "AA289",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-16",
    "price": 476
  },
  {
    "flightNum": "AA373",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-25",
    "price": 215
  },
  {
    "flightNum": "WN263",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-07",
    "price": 247
  },
  {
    "flightNum": "UA913",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-06",
    "price": 466
  },
  {
    "flightNum": "AS711",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-07",
    "price": 486
  },
  {
    "flightNum": "UA686",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-10",
    "price": 185
  },
  {
    "flightNum": "AS769",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-29",
    "price": 235
  },
  {
    "flightNum": "B6616",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-16",
    "price": 370
  },
  {
    "flightNum": "B6302",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-01",
    "price": 252
  },
  {
    "flightNum": "UA171",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-19",
    "price": 253
  },
  {
    "flightNum": "DL466",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SEA",
    "destinationName": "Seattle",
    "date": "2025-08-16",
    "price": 348
  },
  {
    "flightNum": "AA871",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-21",
    "price": 367
  },
  {
    "flightNum": "DL605",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-09",
    "price": 420
  },
  {
    "flightNum": "B6737",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-14",
    "price": 171
  },
  {
    "flightNum": "AS985",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-20",
    "price": 364
  },
  {
    "flightNum": "UA813",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-30",
    "price": 371
  },
  {
    "flightNum": "AS332",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "SFO",
    "destinationName": "San Francisco",
    "date": "2025-08-31",
    "price": 344
  },
  {
    "flightNum": "AA808",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-23",
    "price": 129
  },
  {
    "flightNum": "B6925",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-26",
    "price": 144
  },
  {
    "flightNum": "AS328",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-14",
    "price": 144
  },
  {
    "flightNum": "AS473",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MCO",
    "destinationName": "Orlando",
    "date": "2025-08-17",
    "price": 185
  },
  {
    "flightNum": "AS929",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-09",
    "price": 472
  },
  {
    "flightNum": "B6610",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-26",
    "price": 190
  },
  {
    "flightNum": "UA396",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "PHX",
    "destinationName": "Phoenix",
    "date": "2025-08-07",
    "price": 320
  },
  {
    "flightNum": "B6773",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-30",
    "price": 345
  },
  {
    "flightNum": "WN175",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-17",
    "price": 188
  },
  {
    "flightNum": "WN672",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAS",
    "destinationName": "Las Vegas",
    "date": "2025-08-03",
    "price": 464
  },
  {
    "flightNum": "B6422",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DEN",
    "destinationName": "Denver",
    "date": "2025-08-15",
    "price": 473
  },
  {
    "flightNum": "WN426",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-16",
    "price": 134
  },
  {
    "flightNum": "UA219",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-05",
    "price": 357
  },
  {
    "flightNum": "WN915",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "BOS",
    "destinationName": "Boston",
    "date": "2025-08-02",
    "price": 116
  },
  {
    "flightNum": "B6253",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-08",
    "price": 353
  },
  {
    "flightNum": "WN617",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ATL",
    "destinationName": "Atlanta",
    "date": "2025-08-28",
    "price": 117
  },
  {
    "flightNum": "DL770",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MIA",
    "destinationName": "Miami",
    "date": "2025-08-07",
    "price": 194
  },
  {
    "flightNum": "AA723",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-11",
    "price": 314
  },
  {
    "flightNum": "DL340",
    "airline": "JetBlue",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-22",
    "price": 427
  },
  {
    "flightNum": "DL809",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "JFK",
    "destinationName": "New York",
    "date": "2025-08-29",
    "price": 158
  },
  {
    "flightNum": "UA897",
    "airline": "American Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-12",
    "price": 493
  },
  {
    "flightNum": "AS134",
    "airline": "United Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "LAX",
    "destinationName": "Los Angeles",
    "date": "2025-08-14",
    "price": 423
  },
  {
    "flightNum": "UA170",
    "airline": "Southwest Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "CLT",
    "destinationName": "Charlotte",
    "date": "2025-08-27",
    "price": 137
  },
  {
    "flightNum": "AS455",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "MSP",
    "destinationName": "Minneapolis",
    "date": "2025-08-09",
    "price": 181
  },
  {
    "flightNum": "B6130",
    "airline": "Delta Air Lines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "DFW",
    "destinationName": "Dallas",
    "date": "2025-08-15",
    "price": 383
  },
  {
    "flightNum": "AS210",
    "airline": "Alaska Airlines",
    "origin": "PVD",
    "originName": "Providence",
    "destination": "ORD",
    "destinationName": "Chicago",
    "date": "2025-08-04",
    "price": 285
  }
];