let data =  JSON.parse(`
[
    {
    "id": 8048,
    "uid": "78c25707-3915-4ede-8583-815069edf892",
    "brand": "Heineken",
    "name": "Schneider Aventinus",
    "style": "European Amber Lager",
    "hop": "Crystal",
    "yeast": "3333 - German Wheat",
    "malts": "Victory",
    "ibu": "13 IBU",
    "alcohol": "5.4%",
    "blg": "5.1°Blg"
    },
    {
    "id": 905,
    "uid": "fcbef043-c9ac-4379-8d0c-a7184176f40f",
    "brand": "Guinness",
    "name": "Double Bastard Ale",
    "style": "English Brown Ale",
    "hop": "Hallertau",
    "yeast": "1010 - American Wheat",
    "malts": "Munich",
    "ibu": "78 IBU",
    "alcohol": "8.5%",
    "blg": "14.2°Blg"
    },
    {
    "id": 889,
    "uid": "00f86efe-5931-4e31-b351-4c4cb5ab8e0f",
    "brand": "Harp",
    "name": "Sapporo Premium",
    "style": "Fruit Beer",
    "hop": "Mt. Rainier",
    "yeast": "2633 - Octoberfest Lager Blend",
    "malts": "Caramel",
    "ibu": "30 IBU",
    "alcohol": "2.2%",
    "blg": "6.6°Blg"
    },
    {
    "id": 7566,
    "uid": "a1a536a6-581b-4371-a15a-9cfcf44ae495",
    "brand": "Tsingtao",
    "name": "Delirium Noctorum",
    "style": "Amber Hybrid Beer",
    "hop": "Newport",
    "yeast": "3068 - Weihenstephan Weizen",
    "malts": "Carapils",
    "ibu": "37 IBU",
    "alcohol": "8.9%",
    "blg": "12.8°Blg"
    },
    {
    "id": 532,
    "uid": "9960203a-4aaa-4f0d-9e0b-12442609fa99",
    "brand": "Red Stripe",
    "name": "Shakespeare Oatmeal",
    "style": "Vegetable Beer",
    "hop": "Perle",
    "yeast": "1272 - American Ale II",
    "malts": "Munich",
    "ibu": "77 IBU",
    "alcohol": "8.5%",
    "blg": "5.5°Blg"
    },
    {
    "id": 2397,
    "uid": "97eeb824-6ac5-48af-b675-37500ad6347a",
    "brand": "Pabst Blue Ribbon",
    "name": "Hennepin",
    "style": "Dark Lager",
    "hop": "Brewer’s Gold",
    "yeast": "3463 - Forbidden Fruit",
    "malts": "Victory",
    "ibu": "82 IBU",
    "alcohol": "5.3%",
    "blg": "5.4°Blg"
    },
    {
    "id": 5663,
    "uid": "bbabc894-1f9a-4bc6-ba17-1968cb7f477c",
    "brand": "Sapporo",
    "name": "Chocolate St",
    "style": "Merican Ale",
    "hop": "Cascade",
    "yeast": "2042 - Danish Lager",
    "malts": "Rye malt",
    "ibu": "70 IBU",
    "alcohol": "3.4%",
    "blg": "5.1°Blg"
    },
    {
    "id": 57,
    "uid": "49d6deac-02eb-4570-bfd1-4bd2cc1e7976",
    "brand": "Red Stripe",
    "name": "Delirium Noctorum",
    "style": "German Wheat And Rye Beer",
    "hop": "Willamette",
    "yeast": "3787 - Trappist High Gravity",
    "malts": "Roasted barley",
    "ibu": "28 IBU",
    "alcohol": "8.6%",
    "blg": "18.1°Blg"
    },
    {
    "id": 4809,
    "uid": "0fecee45-27f9-4be3-b1db-7e096e733880",
    "brand": "Samuel Adams",
    "name": "Orval Trappist Ale",
    "style": "Belgian Strong Ale",
    "hop": "Columbia",
    "yeast": "5112 - Brettanomyces bruxellensis",
    "malts": "Carapils",
    "ibu": "80 IBU",
    "alcohol": "9.2%",
    "blg": "15.0°Blg"
    },
    {
    "id": 6609,
    "uid": "34a92ffb-07de-4b3a-b43d-77c21152f57b",
    "brand": "BudLight",
    "name": "Edmund Fitzgerald Porter",
    "style": "German Wheat And Rye Beer",
    "hop": "Summit",
    "yeast": "3787 - Trappist High Gravity",
    "malts": "Caramel",
    "ibu": "75 IBU",
    "alcohol": "8.0%",
    "blg": "18.6°Blg"
    },
    {
    "id": 2145,
    "uid": "c96c622c-0ee9-4069-8b59-a9089f9f47c5",
    "brand": "Guinness",
    "name": "Maharaj",
    "style": "Fruit Beer",
    "hop": "Newport",
    "yeast": "2633 - Octoberfest Lager Blend",
    "malts": "Wheat mal",
    "ibu": "67 IBU",
    "alcohol": "5.3%",
    "blg": "15.3°Blg"
    },
    {
    "id": 3081,
    "uid": "c6c72e20-4be9-40e8-a2ea-8ea2ce9600d9",
    "brand": "Pabst Blue Ribbon",
    "name": "Westmalle Trappist Tripel",
    "style": "Light Hybrid Beer",
    "hop": "Fuggle",
    "yeast": "2278 - Czech Pils",
    "malts": "Special roast",
    "ibu": "16 IBU",
    "alcohol": "3.4%",
    "blg": "10.9°Blg"
    },
    {
    "id": 8860,
    "uid": "43de457b-f4b3-4c2e-b126-8b97d7fa2a54",
    "brand": "Miller Draft",
    "name": "Samuel Smith’s Oatmeal Stout",
    "style": "Belgian And French Ale",
    "hop": "Tahoma",
    "yeast": "2112 - California Lager",
    "malts": "Black malt",
    "ibu": "11 IBU",
    "alcohol": "6.1%",
    "blg": "11.0°Blg"
    },
    {
    "id": 7554,
    "uid": "f867584f-c875-41be-a269-e0b2ccbc38b5",
    "brand": "Delirium",
    "name": "Sierra Nevada Celebration Ale",
    "style": "Merican Ale",
    "hop": "Warrior",
    "yeast": "3068 - Weihenstephan Weizen",
    "malts": "Roasted barley",
    "ibu": "36 IBU",
    "alcohol": "8.5%",
    "blg": "9.3°Blg"
    },
    {
    "id": 6065,
    "uid": "5b38dde7-ba5a-4864-ab92-5ff017f8c2aa",
    "brand": "Pabst Blue Ribbon",
    "name": "Bourbon County Stout",
    "style": "English Brown Ale",
    "hop": "Cluster",
    "yeast": "2206 - Bavarian Lager",
    "malts": "Black malt",
    "ibu": "62 IBU",
    "alcohol": "4.9%",
    "blg": "12.8°Blg"
    },
    {
    "id": 4918,
    "uid": "d8c5d973-e19b-4c73-ae1b-8c19bb379271",
    "brand": "Birra Moretti",
    "name": "Trappistes Rochefort 10",
    "style": "Light Hybrid Beer",
    "hop": "Fuggle",
    "yeast": "1762 - Belgian Abbey II",
    "malts": "Victory",
    "ibu": "36 IBU",
    "alcohol": "3.5%",
    "blg": "13.3°Blg"
    },
    {
    "id": 7433,
    "uid": "a0798ff3-e8d5-4b31-b12e-8214e5e7d264",
    "brand": "Miller Draft",
    "name": "St. Bernardus Abt 12",
    "style": "India Pale Ale",
    "hop": "Summit",
    "yeast": "3787 - Trappist High Gravity",
    "malts": "Black malt",
    "ibu": "99 IBU",
    "alcohol": "2.3%",
    "blg": "11.2°Blg"
    },
    {
    "id": 3661,
    "uid": "5dc67447-4013-4782-b363-826fd7e4e0ba",
    "brand": "Paulaner",
    "name": "St. Bernardus Abt 12",
    "style": "Amber Hybrid Beer",
    "hop": "Mosaic",
    "yeast": "5335 - Lactobacillus",
    "malts": "Caramel",
    "ibu": "14 IBU",
    "alcohol": "4.4%",
    "blg": "17.0°Blg"
    },
    {
    "id": 5381,
    "uid": "1bd06d23-96e8-4d76-9919-cd5d07f64bbd",
    "brand": "Coors lite",
    "name": "Kirin Inchiban",
    "style": "Vegetable Beer",
    "hop": "Amarillo",
    "yeast": "3787 - Trappist High Gravity",
    "malts": "Chocolate",
    "ibu": "42 IBU",
    "alcohol": "8.5%",
    "blg": "18.6°Blg"
    },
    {
    "id": 1023,
    "uid": "a052bba2-5a64-45c8-badf-edc899839dcc",
    "brand": "Sierra Nevada",
    "name": "Delirium Tremens",
    "style": "Fruit Beer",
    "hop": "Tettnang",
    "yeast": "2278 - Czech Pils",
    "malts": "Carapils",
    "ibu": "71 IBU",
    "alcohol": "6.8%",
    "blg": "13.2°Blg"
    },
    {
    "id": 8464,
    "uid": "24ead059-3bb3-4c97-9045-03526b89d6a4",
    "brand": "Stella Artois",
    "name": "Oaked Arrogant Bastard Ale",
    "style": "India Pale Ale",
    "hop": "Citra",
    "yeast": "5112 - Brettanomyces bruxellensis",
    "malts": "Munich",
    "ibu": "17 IBU",
    "alcohol": "9.5%",
    "blg": "5.4°Blg"
    },
    {
    "id": 5694,
    "uid": "cc5834f4-8908-4e9d-a327-0f7f907adeb3",
    "brand": "Sierra Nevada",
    "name": "Westmalle Trappist Tripel",
    "style": "Light Hybrid Beer",
    "hop": "Nugget",
    "yeast": "1056 - American Ale",
    "malts": "Special roast",
    "ibu": "55 IBU",
    "alcohol": "4.2%",
    "blg": "5.8°Blg"
    },
    {
    "id": 9257,
    "uid": "e564ee1f-72e1-47ad-ad9c-99e4e85bd00f",
    "brand": "Harp",
    "name": "Sapporo Premium",
    "style": "Light Hybrid Beer",
    "hop": "Nugget",
    "yeast": "2112 - California Lager",
    "malts": "Caramel",
    "ibu": "42 IBU",
    "alcohol": "6.2%",
    "blg": "5.2°Blg"
    },
    {
    "id": 9951,
    "uid": "84f80e43-6bcd-46c5-b654-edc27269308f",
    "brand": "Corona Extra",
    "name": "Chimay Grande Réserve",
    "style": "Pilsner",
    "hop": "Millennium",
    "yeast": "1450 - Dennys Favorite 50",
    "malts": "Roasted barley",
    "ibu": "16 IBU",
    "alcohol": "8.4%",
    "blg": "19.8°Blg"
    },
    {
    "id": 9836,
    "uid": "1f8531ec-dc9a-401f-920e-667181765016",
    "brand": "Rolling Rock",
    "name": "La Fin Du Monde",
    "style": "Light Lager",
    "hop": "Brewer’s Gold",
    "yeast": "2206 - Bavarian Lager",
    "malts": "Vienna",
    "ibu": "76 IBU",
    "alcohol": "3.7%",
    "blg": "6.4°Blg"
    }
    ]

`)

module.exports = data;