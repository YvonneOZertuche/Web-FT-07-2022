
let data = JSON.parse(`
[
    {
    "id": 1048,
    "uid": "641090c5-d311-4142-8715-7405aacbe0f1",
    "vin": "1FV7Z52N5XU689896",
    "make_and_model": "Chevy Malibu",
    "color": "White",
    "transmission": "Automatic",
    "drive_type": "AWD",
    "fuel_type": "Electric",
    "car_type": "Minivan",
    "car_options": [
    "Power Windows",
    "Airbag: Driver",
    "Power Steering",
    "Cruise Control",
    "Leather Interior",
    "A/C: Front",
    "Keyless Entry",
    "Integrated Phone"
    ],
    "specs": [
    "Rear door child safety locks",
    "Impact-dissipating upper interior trim",
    "Fasten seat belt warning light/chime",
    "Integrated fog lamps",
    "Front & rear passenger folding assist grips",
    "Tilt/telescoping steering column"
    ],
    "doors": 3,
    "mileage": 69712,
    "kilometrage": 86855,
    "license_plate": "OCC-7240"
    },
    {
    "id": 6156,
    "uid": "ea62c947-9b32-466d-bdf3-fe358b2bb4f0",
    "vin": "FH7N0C338LIN05161",
    "make_and_model": "Audi A8",
    "color": "Grey",
    "transmission": "Automanual",
    "drive_type": "RWD",
    "fuel_type": "Compressed Natural Gas",
    "car_type": "Convertible",
    "car_options": [
    "Third Row Seats",
    "Tow Package",
    "Integrated Phone",
    "Tow Package",
    "Power Seats",
    "Power Locks"
    ],
    "specs": [
    "Black windshield molding",
    "Xenon high-intensity discharge (HID) headlamps -inc: adaptive front lighting system, delayed auto-off",
    "Cloth covered headliner",
    "Pwr steering cooler",
    "20' x 9.0' front & 20' x 10.0' rear aluminum wheels",
    "Silver finish interior door handles",
    "Electronic control braking (ECB)"
    ],
    "doors": 1,
    "mileage": 17033,
    "kilometrage": 20687,
    "license_plate": "BZT-2513"
    },
    {
    "id": 2498,
    "uid": "3a1c1add-5658-463d-aebf-25438a29556c",
    "vin": "98Z59AWQ4NJ094641",
    "make_and_model": "Audi A7",
    "color": "Black",
    "transmission": "Automanual",
    "drive_type": "4x2/2-wheel drive",
    "fuel_type": "Diesel",
    "car_type": "Regular Cab Pickup",
    "car_options": [
    "Power Seats",
    "Moonroof/Sunroof",
    "A/C: Front",
    "Tow Package",
    "A/C: Rear"
    ],
    "specs": [
    "Water-repellent windshield & front door glass",
    "Tool kit",
    "Reversible/waterproof cargo storage",
    "3-point ELR driver seat belt w/pretensioner & load limiter",
    "Brake assist",
    "Optitron electroluminescent instrumentation"
    ],
    "doors": 3,
    "mileage": 37223,
    "kilometrage": 31370,
    "license_plate": "PHH-9180"
    },
    {
    "id": 4731,
    "uid": "ac3dcc36-887a-4698-acf3-c5bae8901933",
    "vin": "HTE79ZCW77C181203",
    "make_and_model": "Ford Focus",
    "color": "Beige",
    "transmission": "Automanual",
    "drive_type": "4x4/4-wheel drive",
    "fuel_type": "Diesel",
    "car_type": "Regular Cab Pickup",
    "car_options": [
    "Integrated Phone",
    "Keyless Entry",
    "Memory Seats",
    "Cruise Control",
    "Fog Lights",
    "Bucket Seats",
    "Navigation",
    "Moonroof/Sunroof",
    "DVD System"
    ],
    "specs": [
    "LATCH-ready child seat anchor system",
    "Illuminated entry",
    "LATCH-ready child seat anchor system",
    "Front/rear aluminum multi-link double joint suspension w/coil springs",
    "Dual-stage front airbags w/occupant classification system",
    "Silver accent IP trim finisher -inc: silver shifter finisher"
    ],
    "doors": 2,
    "mileage": 37220,
    "kilometrage": 18174,
    "license_plate": "STC-3415"
    },
    {
    "id": 737,
    "uid": "11156c09-50b1-4892-8ebb-4d974662ab25",
    "vin": "1P3L13312OS491959",
    "make_and_model": "Audi A4",
    "color": "Beige",
    "transmission": "Automatic",
    "drive_type": "AWD",
    "fuel_type": "Gasoline",
    "car_type": "Coupe",
    "car_options": [
    "CD (Multi Disc)",
    "Rear Window Defroster",
    "Power Steering",
    "Navigation",
    "CD (Single Disc)",
    "Cassette Player"
    ],
    "specs": [
    "Impact-dissipating upper interior trim",
    "Zone body construction -inc: front/rear crumple zones, hood deformation point",
    "Tool kit",
    "Dual-zone automatic climate control system -inc: smog sensor, auto recirculation, clear air filter, pollen filter",
    "Dual front illuminated visor vanity mirrors",
    "High performance suspension",
    "60/40 folding rear seat",
    "Dual-stage front airbags w/occupant classification system"
    ],
    "doors": 3,
    "mileage": 75376,
    "kilometrage": 87052,
    "license_plate": "RBZ-7661"
    },
    {
    "id": 6394,
    "uid": "b18a2ea7-4846-454f-891e-371bd107a7d7",
    "vin": "9L886Z084C0779240",
    "make_and_model": "Toyota Prius",
    "color": "Orange",
    "transmission": "CVT",
    "drive_type": "RWD",
    "fuel_type": "E-85/Gasoline",
    "car_type": "Cargo Van",
    "car_options": [
    "Keyless Entry",
    "Alloy Wheels",
    "CD (Multi Disc)",
    "Airbag: Passenger",
    "A/C: Rear",
    "Leather Interior"
    ],
    "specs": [
    "Monotone paint",
    "Front/rear crumple zones",
    "Brake assist",
    "12V pwr outlet",
    "Vehicle dynamics integrated management (VDIM) system -inc: vehicle stability control (VSC), traction control (TRAC)",
    "Reversible/waterproof cargo storage",
    "Security alarm"
    ],
    "doors": 1,
    "mileage": 24683,
    "kilometrage": 68878,
    "license_plate": "LZK-5333"
    },
    {
    "id": 1202,
    "uid": "d4ce9f38-a003-4bcf-be6b-e277f7ae6fcb",
    "vin": "F29PT0N79U0M11611",
    "make_and_model": "Buick Encore",
    "color": "Red",
    "transmission": "Automanual",
    "drive_type": "AWD",
    "fuel_type": "Gasoline Hybrid",
    "car_type": "Regular Cab Pickup",
    "car_options": [
    "Airbag: Driver",
    "CD (Multi Disc)",
    "Tinted Glass",
    "Leather Interior",
    "Bucket Seats",
    "Cassette Player"
    ],
    "specs": [
    "3.73 axle ratio",
    "Dual-stage front airbags w/occupant classification system",
    "Trailer tow wiring harness",
    "Anti-lock 4-wheel performance disc brakes",
    "Electric speed-sensitive variable-assist pwr steering",
    "Glove box lamp",
    "Eco drive indicator",
    "Rear child seat tether anchors (LATCH)",
    "Rear window wiper/washer"
    ],
    "doors": 2,
    "mileage": 12628,
    "kilometrage": 81440,
    "license_plate": "TAF-4685"
    },
    {
    "id": 9930,
    "uid": "5a6ff256-e124-4671-881e-b9d2d55df162",
    "vin": "7XEQ338G6GYY22262",
    "make_and_model": "Nissan Rogue",
    "color": "Orange",
    "transmission": "Manual",
    "drive_type": "4x2/2-wheel drive",
    "fuel_type": "Gasoline Hybrid",
    "car_type": "Minivan",
    "car_options": [
    "A/C: Rear",
    "Rear Window Wiper",
    "Navigation",
    "Power Steering",
    "Alloy Wheels",
    "Keyless Entry",
    "Tow Package",
    "Tow Package",
    "Tow Package"
    ],
    "specs": [
    "Fixed long mast antenna",
    "Pwr front windows w/(1) touch up/down feature",
    "Variable intermittent windshield wipers w/mist function",
    "Direct-type tire pressure monitor system",
    "Rear door child safety locks",
    "Body color fascias w/bright insert",
    "Dual front & rear cup holders"
    ],
    "doors": 3,
    "mileage": 52057,
    "kilometrage": 18381,
    "license_plate": "LYE-8882"
    },
    {
    "id": 2004,
    "uid": "8cf5fae6-23ef-40c4-81e8-6bda23cc169f",
    "vin": "8347K3119WPD19538",
    "make_and_model": "BMW 328i",
    "color": "Violet",
    "transmission": "Automatic",
    "drive_type": "RWD",
    "fuel_type": "E-85/Gasoline",
    "car_type": "Convertible",
    "car_options": [
    "Leather Interior",
    "Premium Sound",
    "DVD System",
    "Power Steering",
    "Keyless Entry",
    "Alarm"
    ],
    "specs": [
    "Multi-reflector halogen headlamps",
    "Carpeted cargo area",
    "Cargo area lamp",
    "Compact spare tire",
    "Driver & front passenger map pockets",
    "1.8L DOHC 16-valve I4 engine -inc: engine cover",
    "Optitron electroluminescent instrumentation",
    "Silver finish interior door handles",
    "Variable intermittent windshield wipers w/mist function"
    ],
    "doors": 3,
    "mileage": 30949,
    "kilometrage": 46249,
    "license_plate": "MIM-5598"
    },
    {
    "id": 786,
    "uid": "39c8ff2e-7013-4e4a-be38-26588f10431d",
    "vin": "4T9ND97C38L177024",
    "make_and_model": "Buick Enclave",
    "color": "Grey",
    "transmission": "Automanual",
    "drive_type": "RWD",
    "fuel_type": "Gasoline Hybrid",
    "car_type": "Regular Cab Pickup",
    "car_options": [
    "Airbag: Passenger",
    "A/C: Rear",
    "A/C: Rear",
    "Premium Sound",
    "Bucket Seats",
    "Bucket Seats"
    ],
    "specs": [
    "Silver finish interior door handles",
    "Child safety rear door locks",
    "Air conditioning w/in-cabin microfilter",
    "Pwr accessory delay",
    "Child seat upper tether anchorages"
    ],
    "doors": 4,
    "mileage": 64493,
    "kilometrage": 65177,
    "license_plate": "JDM-1986"
    },
    {
    "id": 1985,
    "uid": "39968d83-713a-4284-a7b1-1e350ebbce45",
    "vin": "14C3X92MCZA585181",
    "make_and_model": "Chevy Camero",
    "color": "Black",
    "transmission": "Manual",
    "drive_type": "4x4/4-wheel drive",
    "fuel_type": "Ethanol",
    "car_type": "Cargo Van",
    "car_options": [
    "Antilock Brakes",
    "Tinted Glass",
    "CD (Single Disc)",
    "Keyless Entry",
    "Fog Lights"
    ],
    "specs": [
    "Acoustic glass windshield",
    "HomeLink universal transceiver",
    "Leather-wrapped shift knob",
    "Rear reading & courtesy lamps",
    "Full-size spare tire w/aluminum alloy wheel",
    "Luxury front & rear floor mats w/logo",
    "Carpeted floor & cargo area",
    "3.73 axle ratio",
    "3-point ELR driver seat belt w/pretensioner & load limiter"
    ],
    "doors": 3,
    "mileage": 51778,
    "kilometrage": 39028,
    "license_plate": "WOE-4427"
    },
    {
    "id": 3421,
    "uid": "418785e5-0130-41f1-914b-4c90d6adcad5",
    "vin": "42G171S3360N97193",
    "make_and_model": "Honda Accord",
    "color": "Blue",
    "transmission": "Automanual",
    "drive_type": "4x2/2-wheel drive",
    "fuel_type": "Compressed Natural Gas",
    "car_type": "Cargo Van",
    "car_options": [
    "Bucket Seats",
    "DVD System",
    "Alarm",
    "Airbag: Side",
    "Integrated Phone",
    "Power Steering"
    ],
    "specs": [
    "Acoustic control induction system (ACIS)",
    "Body color front/rear bumpers",
    "Tire pressure monitoring system (TPMS)",
    "Water-repellent windshield & front door glass",
    "Brake assist",
    "Enhanced accident response system unlocks the doors, shuts off the fuel pump and turns on interior lights after airbag deploys",
    "Full-length floor console",
    "P235/50R18 all-season tires",
    "6.5' touch screen display"
    ],
    "doors": 3,
    "mileage": 20562,
    "kilometrage": 10497,
    "license_plate": "CHT-3535"
    },
    {
    "id": 867,
    "uid": "b8ab489f-ee17-4dab-9750-8a8670b826c8",
    "vin": "04Y63L36BANP74594",
    "make_and_model": "BMW X5",
    "color": "Yellow",
    "transmission": "CVT",
    "drive_type": "AWD",
    "fuel_type": "E-85/Gasoline",
    "car_type": "Extended Cab Pickup",
    "car_options": [
    "Leather Interior",
    "Airbag: Driver",
    "Cruise Control",
    "Airbag: Passenger",
    "Bucket Seats"
    ],
    "specs": [
    "Independent strut front suspension w/stabilizer bar",
    "6.1L SRT V8 'Hemi' engine",
    "Instrument cluster w/tachometer",
    "Tip start system",
    "Pwr windows -inc: 1-touch open/close",
    "20' x 9.0' front & 20' x 10.0' rear aluminum wheels",
    "Pwr rear liftgate release"
    ],
    "doors": 1,
    "mileage": 80270,
    "kilometrage": 12875,
    "license_plate": "KUK-8494"
    },
    {
    "id": 4807,
    "uid": "d95975b1-7a11-4f28-8431-a8b8897f915e",
    "vin": "8QQQ89RX27R356734",
    "make_and_model": "Audi A4",
    "color": "Beige",
    "transmission": "Manual",
    "drive_type": "4x2/2-wheel drive",
    "fuel_type": "Compressed Natural Gas",
    "car_type": "Regular Cab Pickup",
    "car_options": [
    "Leather Interior",
    "Tinted Glass",
    "A/C: Front",
    "Keyless Entry",
    "Cruise Control",
    "Moonroof/Sunroof",
    "Moonroof/Sunroof",
    "Power Windows"
    ],
    "specs": [
    "4-wheel ventilated pwr disc brakes -inc: brake override system",
    "Pwr front windows w/(1) touch up/down feature",
    "Air conditioning w/in-cabin microfilter",
    "Body color sill extension",
    "Pwr tilt/slide moonroof -inc: 1-touch open/close"
    ],
    "doors": 4,
    "mileage": 66438,
    "kilometrage": 22339,
    "license_plate": "RKI-1445"
    },
    {
    "id": 3809,
    "uid": "1f660880-4874-4bb5-8bf5-b4dcda8575ae",
    "vin": "8OC21562E9C004330",
    "make_and_model": "Nissan Juke",
    "color": "Grey",
    "transmission": "Automatic",
    "drive_type": "RWD",
    "fuel_type": "Gasoline Hybrid",
    "car_type": "Cargo Van",
    "car_options": [
    "Tinted Glass",
    "A/C: Rear",
    "Cruise Control",
    "Airbag: Side",
    "MP3 (Single Disc)",
    "Premium Sound",
    "Power Steering",
    "Keyless Entry"
    ],
    "specs": [
    "Silver accent IP trim finisher -inc: silver shifter finisher",
    "Chrome bodyside molding",
    "Independent strut front suspension w/stabilizer bar",
    "Trim-panel-mounted storage net",
    "Front wheel drive",
    "Roof mounted antenna",
    "P235/50R18 all-season tires"
    ],
    "doors": 1,
    "mileage": 13089,
    "kilometrage": 58239,
    "license_plate": "USE-9816"
    }
    ]
`)

module.exports = data;