// js/places-data.js
// Authoritative source of truth for Mahabaleshwar Sightseeing Map & Route Planner.
// All coordinates are 100% verified ground-truth GPS coordinates aligned with OpenStreetMap / Esri GIS.
// Tour assignments match official Mahabaleshwar Taxi Union tariff packages.

window.PLACES_DATA = [
    // --- Tour 1: Mahabaleshwar Darshan (Arthur Seat & Heritage Temples) ---
    {
        id: "p1",
        name: "Arthur's Seat",
        lat: 17.9811,
        lng: 73.6369,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/arthurs-seat.jpg",
        desc: "The Queen of Points, offering breathtaking views of the Savitri river valley and dense Jor forest.",
        category: "viewpoint",
        aliases: ["Arthur Seat", "Queen of Points", "Window Point", "Tiger Spring", "Malcolm Point", "Hunting Point", "Marjorie Point"]
    },
    {
        id: "p2",
        name: "Elephant's Head Point (Needle Hole)",
        lat: 17.9412,
        lng: 73.7092,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/elephants-head-point.jpg",
        desc: "Natural rock formation resembling an elephant head and trunk with a natural rock needle hole overlooking Balakwadi Dam.",
        category: "viewpoint",
        aliases: ["Needle Hole Point", "Needle Hole", "Elephant Head", "Elephant Rock", "Kamalgadh View"]
    },
    {
        id: "p3",
        name: "Kate's Point & Echo Point",
        lat: 17.9418,
        lng: 73.7081,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/kates-point-view.jpg",
        desc: "Iconic viewpoint 1,290m high overlooking Balakwadi Dam and the serene Dhom reservoir valley.",
        category: "viewpoint",
        aliases: ["Kates Point", "Kate Point", "Echo Point", "Balakwadi Dam View"]
    },
    {
        id: "p4",
        name: "Panchganga Temple (Old Mahabaleshwar)",
        lat: 17.9638,
        lng: 73.6648,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/panchganga-temple.jpg",
        desc: "Historic 13th-century temple at the sacred confluence of 5 holy rivers: Krishna, Venna, Koyna, Savitri & Gayatri.",
        category: "heritage",
        aliases: ["Panchganga Mandir", "Old Mahabaleshwar Temple", "Lord Shiva Temple", "Kshetra Mahabaleshwar"]
    },
    {
        id: "p5",
        name: "Krishnabai Temple",
        lat: 17.9642,
        lng: 73.6653,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/krishnabai-temple.jpg",
        desc: "Ancient Hemadpanthi stone shrine perched over the cliff overlooking the sacred Krishna river valley.",
        category: "heritage",
        aliases: ["Krishnabai Mandir", "Krishna Bai", "Krishna Devi Temple"]
    },
    {
        id: "p6",
        name: "Elphinstone Point",
        lat: 17.9637,
        lng: 73.6277,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/arthurs-seat.jpg",
        desc: "High cliff viewpoint discovered in 1830, opening views of Pratapgad fort and the Koyna ravine.",
        category: "viewpoint",
        aliases: ["Elphinstone", "Elphinstone Point Lower", "Elphinstone Point Upper"]
    },
    {
        id: "p7",
        name: "Savitri Point & Castle Rock",
        lat: 17.9805,
        lng: 73.6375,
        tour: "Tour 1",
        tours: ["Tour 1", "Tour 7"],
        badge: "b-tour1",
        img: "images/mahabaleshwar.jpg",
        desc: "Dramatic gorge viewpoint overlooking the source and deep canyon of the Savitri river.",
        category: "viewpoint",
        aliases: ["Savitri Point", "Castle Rock", "Castle Rock Point"]
    },

    // --- Tour 2: Waterfall & Sunset Circuit (Wilson Point, Lingmala, Lodwick, Bombay Point) ---
    {
        id: "p11",
        name: "Wilson Point (Sunrise Point)",
        lat: 17.9228,
        lng: 73.6702,
        tour: "Tour 2",
        tours: ["Tour 2"],
        badge: "b-tour2",
        img: "images/wilson-point.jpg",
        desc: "The highest plateau in Mahabaleshwar at 1,439m, offering 360-degree panoramic sunrise vistas.",
        category: "viewpoint",
        aliases: ["Wilson Point", "Sunrise Point", "Sindola Hill", "Ganesh Temple Machutar", "King's Chair", "Plato Point"]
    },
    {
        id: "p9",
        name: "Lingmala Waterfall",
        lat: 17.9227,
        lng: 73.6930,
        tour: "Tour 2",
        tours: ["Tour 2"],
        badge: "b-tour2",
        img: "images/lingmala-waterfall.jpg",
        desc: "Spectacular 600-foot cascading falls nestled in dense green canopy near Venna valley.",
        category: "waterfall",
        aliases: ["Lingmala Falls", "Lingmala", "Waterfall"]
    },
    {
        id: "p10",
        name: "Venna Lake & Boating",
        lat: 17.9342,
        lng: 73.6648,
        tour: "Tour 2",
        tours: ["Tour 2"],
        badge: "b-tour2",
        img: "images/venna-lake.jpg",
        desc: "Picturesque lake constructed in 1842, famous for row boating, paddle boats, and lakeside stalls.",
        category: "lake",
        aliases: ["Venna Lake", "Venna Mini Dam", "Vena Lake", "Boating Club"]
    },
    {
        id: "p8",
        name: "Lodwick Point",
        lat: 17.9395,
        lng: 73.6348,
        tour: "Tour 2",
        tours: ["Tour 2"],
        badge: "b-tour2",
        img: "images/elephants-head-point.jpg",
        desc: "Promontory point with General Lodwick's monument, gazing towards Pratapgad fort and Elphinstone.",
        category: "viewpoint",
        aliases: ["Lodwick", "Lodwick Monument", "Elephant Head Western"]
    },
    {
        id: "p12",
        name: "Bombay Point (Sunset Point)",
        lat: 17.9166,
        lng: 73.6382,
        tour: "Tour 2",
        tours: ["Tour 2"],
        badge: "b-tour2",
        img: "images/bombay-point.jpg",
        desc: "Oldest viewpoint in the hill station, celebrated for vibrant golden sunsets over the Konkan horizon.",
        category: "viewpoint",
        aliases: ["Bombay Point", "Sunset Point", "Mumbai Point"]
    },

    // --- Tour 3: Pratapgad Fort Citadel ---
    {
        id: "p13",
        name: "Pratapgad Fort",
        lat: 17.9360,
        lng: 73.5784,
        tour: "Tour 3",
        tours: ["Tour 3"],
        badge: "b-tour3",
        img: "images/pratapgad-fort.jpg",
        desc: "Majestic 1656 mountain citadel of Chhatrapati Shivaji Maharaj, site of the historic victory over Afzal Khan.",
        category: "fort",
        aliases: ["Pratapgadh", "Pratapgad", "Pratapgadh Fort", "Shivaji Maharaj Fort", "Afzal Khan Tomb", "Kadelot Point", "Shivkalin Village"]
    },
    {
        id: "p14",
        name: "Bhavani Mata Temple (Pratapgad)",
        lat: 17.9362,
        lng: 73.5788,
        tour: "Tour 3",
        tours: ["Tour 3"],
        badge: "b-tour3",
        img: "images/pratapgad-fort.jpg",
        desc: "Revered temple installed by Chhatrapati Shivaji Maharaj on the upper fort plateau.",
        category: "heritage",
        aliases: ["Bhavani Temple", "Bhavani Mata", "Pratapgad Temple"]
    },
    {
        id: "p15",
        name: "Shree Ramvardhayni Mandir (Par)",
        lat: 17.9180,
        lng: 73.5680,
        tour: "Tour 3",
        tours: ["Tour 3"],
        badge: "b-tour3",
        img: "images/pratapgad-fort.jpg",
        desc: "Historic temple at the foot of Pratapgad in Par village, available as an optional tour extension.",
        category: "heritage",
        aliases: ["Par Temple", "Ramvardhayni Mandir", "Par Village"]
    },

    // --- Tour 4: Panchgani Darshan ---
    {
        id: "p16",
        name: "Panchgani Table Land",
        lat: 17.9282,
        lng: 73.8056,
        tour: "Tour 4",
        tours: ["Tour 4", "Tour 7"],
        badge: "b-tour4",
        img: "images/panchgani-tableland.jpg",
        desc: "Asia's 2nd longest volcanic plateau at 4,550ft, spanning 95 acres with caves and riding tracks.",
        category: "viewpoint",
        aliases: ["Table Land", "Tableland", "Panchgani Plateau", "Devil's Kitchen Caves"]
    },
    {
        id: "p17",
        name: "Parsi Point (Panchgani)",
        lat: 17.9269,
        lng: 73.7828,
        tour: "Tour 4",
        tours: ["Tour 4", "Tour 7"],
        badge: "b-tour4",
        img: "images/panchgani-tableland.jpg",
        desc: "Panoramic vantage point overlooking the emerald waters of Dhom Dam and the Krishna river valley.",
        category: "viewpoint",
        aliases: ["Parsi Point", "Dhom Valley View", "Panchgani Viewpoint"]
    },
    {
        id: "p18",
        name: "Sydney Point (Panchgani)",
        lat: 17.9374,
        lng: 73.8060,
        tour: "Tour 4",
        tours: ["Tour 4", "Tour 5"],
        badge: "b-tour4",
        img: "images/panchgani-tableland.jpg",
        desc: "Hilltop viewpoint opening onto the Krishna valley, Dhom Dam, and the historic Pandavgad fort.",
        category: "viewpoint",
        aliases: ["Sydney Point", "Pandavgad View", "Sydney Hill"]
    },
    {
        id: "p19",
        name: "Mapro Garden",
        lat: 17.9228,
        lng: 73.7347,
        tour: "Tour 4",
        tours: ["Tour 4", "Tour 7"],
        badge: "b-tour4",
        img: "images/mapro-garden.jpg",
        desc: "Famous agro-tourism destination with strawberry farms, chocolate factory, cafe, and fresh syrups.",
        category: "garden",
        aliases: ["Mapro", "Mapro Garden Gureghar", "Strawberry Garden", "Chocolate Factory"]
    },
    {
        id: "p20",
        name: "Bhilar (Book Village & Waterfall)",
        lat: 17.9067,
        lng: 73.7668,
        tour: "Tour 4",
        tours: ["Tour 4", "Tour 7"],
        badge: "b-tour4",
        img: "images/bhilar-village.png",
        desc: "India's first Village of Books, lined with cozy reading homes and seasonal monsoon waterfalls.",
        category: "heritage",
        aliases: ["Bhilar", "Book Village", "Pustakancha Gaav", "Bhilar Waterfall"]
    },
    {
        id: "p21",
        name: "Velocity Entertainment",
        lat: 17.9245,
        lng: 73.7528,
        tour: "Tour 4",
        tours: ["Tour 4"],
        badge: "b-tour4",
        img: "images/mapro-garden.jpg",
        desc: "Adventure theme park along the highway with outdoor go-karting, gyroscope, and family rides.",
        category: "garden",
        aliases: ["Velocity", "Velocity Entertainmentz", "Go Karting", "Adventure Park"]
    },

    // --- Tour 5: Wai Heritage & Dhom Dam ---
    {
        id: "p22",
        name: "Dhom Dam (Wai)",
        lat: 17.9833,
        lng: 73.8187,
        tour: "Tour 5",
        tours: ["Tour 5"],
        badge: "b-tour5",
        img: "images/Dhom Dam wai.jpg",
        desc: "Earthfill and gravity dam on Krishna river surrounded by Sahyadri peaks, popular for boating and cinema shoots.",
        category: "lake",
        aliases: ["Dhom Dam", "Dhom Lake", "Dhom Reservoir", "Wai Dam"]
    },
    {
        id: "p23",
        name: "Maha Ganpati Mandir (Dholya Ganpati, Wai)",
        lat: 17.9526,
        lng: 73.8862,
        tour: "Tour 5",
        tours: ["Tour 5"],
        badge: "b-tour5",
        img: "images/Dhom Dam wai.jpg",
        desc: "Famous 1762 Peshwa temple on Krishna river ghat housing a colossal monolithic Ganpati idol.",
        category: "heritage",
        aliases: ["Dholya Ganpati", "Maha Ganpati", "Wai Ganpati", "Ganesh Mandir Wai"]
    },
    {
        id: "p24",
        name: "Kashi Vishweshwar Mandir & Wai Ghats",
        lat: 17.9522,
        lng: 73.8865,
        tour: "Tour 5",
        tours: ["Tour 5"],
        badge: "b-tour5",
        img: "images/Dhom Dam wai.jpg",
        desc: "Ancient stone temple featuring a massive carved Nandi bull and sacred stone ghat steps on the river.",
        category: "heritage",
        aliases: ["Kashi Vishweshwar", "Wai Ghats", "Krishna River Ghat", "Menavali Ghat"]
    },
    {
        id: "p25",
        name: "Nana Phadnavis Wada (Menavali)",
        lat: 17.9682,
        lng: 73.8636,
        tour: "Tour 5",
        tours: ["Tour 5"],
        badge: "b-tour5",
        img: "images/Dhom Dam wai.jpg",
        desc: "18th-century Maratha palace with authentic courtyard architecture, bell tower, and riverside ghat.",
        category: "heritage",
        aliases: ["Nana Phadnavis Wada", "Menavali Wada", "Menavli Palace", "Peshwa Wada"]
    },

    // --- Tour 6: Tapola (Mini Kashmir & Lake) ---
    {
        id: "p26",
        name: "Tapola Shivsagar Lake (Mini Kashmir)",
        lat: 17.7656,
        lng: 73.7412,
        tour: "Tour 6",
        tours: ["Tour 6"],
        badge: "b-tour6",
        img: "images/Tapola.jpg",
        desc: "Scenic 30km backwater lake formed by Koyna Dam, celebrated for speedboating, kayaking, and watersports.",
        category: "lake",
        aliases: ["Tapola", "Mini Kashmir", "Shivsagar Lake", "Tapola Boating", "Koyna Backwaters", "Water Sports Center"]
    },
    {
        id: "p27",
        name: "Manghar (Honey Village)",
        lat: 17.8869,
        lng: 73.6462,
        tour: "Tour 6",
        tours: ["Tour 6"],
        badge: "b-tour6",
        img: "images/Tapola.jpg",
        desc: "India's first honey village on the scenic Tapola ghat road, where households practice forest beekeeping.",
        category: "heritage",
        aliases: ["Manghar", "Honey Village", "Madhacha Gaav", "Beekeeping Village"]
    },

    // --- Central Taxi Dispatch Hubs ---
    {
        id: "h1",
        name: "Mahabaleshwar Taxi Union Stand",
        lat: 17.9242,
        lng: 73.6592,
        tour: "Central Hub",
        tours: ["All"],
        badge: "b-tour1",
        img: "images/mahabaleshwar-hero.jpg",
        desc: "Official union taxi central dispatch stand at Mahabaleshwar Main Market. 24/7 cab bookings and tour departures.",
        category: "hub",
        aliases: ["Taxi Stand", "Taxi Union", "Mahabaleshwar Cab Stand", "Market Taxi Stand"]
    },
    {
        id: "h2",
        name: "Panchgani Taxi Stand",
        lat: 17.9248,
        lng: 73.8015,
        tour: "Central Hub",
        tours: ["All"],
        badge: "b-tour4",
        img: "images/panchgani-tableland.jpg",
        desc: "Main taxi dispatch point in Panchgani town for local sightseeing and intercity transfers.",
        category: "hub",
        aliases: ["Panchgani Taxi Stand", "Panchgani Cab Stand"]
    }
];
