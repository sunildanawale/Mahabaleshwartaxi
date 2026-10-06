/* ================================================================
   ARYAN TAXI MAHABALESHWAR — TOUR & TARIFF DATABASE (TAX UNION MEMBER) (v22.0)
   Explore Sahyadri • Mahabaleshwar Taxi & Sightseeing
   Single Source of Truth for Tours, Fares, Local Drops & Autocomplete
   ================================================================ */

const TOUR_DATABASE = {
    brand: {
        name: 'Aryan Taxi Mahabaleshwar',
        tagline: 'Explore Sahyadri',
        service: 'Mahabaleshwar Taxi & Sightseeing',
        phone: '+919922882044',
        displayPhone: '+91 99228 82044',
        email: 'aryansdtravels@gmail.com',
        owner: 'Aryan Taxi Mahabaleshwar'
    },
    settings: {
        seasonPeriods: [
            { start: '04-15', end: '06-15', name: 'Summer Peak Season' },
            { start: '10-20', end: '11-10', name: 'Diwali Vacation Season' },
            { start: '12-20', end: '01-05', name: 'Christmas / New Year Season' }
        ],
        monsoonPeriod: { start: '06-15', end: '09-15', name: 'Monsoon Season' },
        defaultVehicle: '4-Seater Tourist Taxi (Local Sightseeing • Subject to vehicle and driver availability)',
        primaryVehicle: 'Registered Tourist Taxi (Tourist Vehicle Arranged as per Availability)',
        fleetNote: 'Trips are operated with registered 4-seater tourist taxis arranged from the Mahabaleshwar Taxi Union circle as per vehicle availability. For local sightseeing, 4-seater cabs are standard (5+ guests require multiple 4-seater cabs). All tourist vehicles follow fixed union tariff rates. Guests are requested to confirm all tour and route details with the taxi driver before starting sightseeing.',
        disclaimer: 'Booking & Service Terms: Aryan Taxi Mahabaleshwar coordinates travel with licensed Mahabaleshwar Taxi Union operators, with tourist vehicles arranged as per availability. Vehicle maintenance, on-road transit, and passenger safety remain under the direct operational responsibility of the licensed vehicle owner/driver. Please confirm all details with the taxi driver before starting sightseeing. Viewpoint visits are subject to weather, road conditions, mist, and local authority regulations — 100% coverage cannot be guaranteed. Aryan Taxi provides dispatch coordination and telephone support (+91 99228 82044).',
        advancePolicy: 'Zero advance for local Mahabaleshwar/Panchgani sightseeing tours. Nominal advance required for Outstation transfers (Pune, Mumbai, etc.) for fuel and cab scheduling.',
        extraTimeRate: '₹120–₹130 per hour (approx) for delay/waiting beyond fixed package duration',
        defaultInclusions: 'Driver, fuel, standard sightseeing halt time',
        defaultExclusions: 'Toll, entry tax, paid parking, hidden/extra points not listed in itinerary',
        cancellationPolicy: 'Cancellation and refund terms confirmed at booking. Free cancellation up to 2 hours before scheduled pickup for local tours. If cancelled after taxi arrives at hotel porch, a nominal ₹200 driver reporting / fuel charge applies as per union guidelines.',
    },
    pickupZones: [
        { id: 'MAHA_TOWN', name: 'Mahabaleshwar Town', areas: ['Mahabaleshwar Market', 'Mahabaleshwar', 'Town Center', 'Main Market', 'Mahabaleshwar Main Road', 'Near ST Bus Stand', 'Near Venna Lake', 'Khed-Mahabaleshwar Rd', 'Duchess Road', 'Woodlawn Road', 'Satara Road', 'Opposite Koyna Valley', 'L.C. Dsouza Road', 'Gautam Road', 'Kate\'s Point Road', 'Blue Valley Ride', 'Valley View Road', 'Near Bombay Point', 'Tapola Road (Town Limits)'], isStandardTariffZone: true, additionalCharge: 0, chargeRule: 'Standard Mahabaleshwar sightseeing tariff applies', notes: 'No additional pickup charge' },
        { id: 'OLD_MAHA', name: 'Old Mahabaleshwar / Kshetra Mahabaleshwar', areas: ['Kshetra Mahabaleshwar', 'Old Mahabaleshwar'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' },
        { id: 'METGUTAD', name: 'Metgutad', areas: ['Metgutad', '19-B Metgutad'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' },
        { id: 'PANCHGANI', name: 'Panchgani', areas: ['Panchgani', 'Panchgani Market', 'Sydney Point, Panchgani', 'Godavali Road, Panchgani', 'Khingar Road, Panchgani', 'Mount Malcolm, Panchgani', 'Ring Road', 'Dandeghar', 'Panchgani Center'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Panchgani is ~18km from Mahabaleshwar. Contact operator for exact charge.' },
        { id: 'BHILAR', name: 'Bhilar', areas: ['Bhilar', 'Bhilar Road'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' },
        { id: 'PANCHGANI_MAHA_RD', name: 'Panchgani-Mahabaleshwar Road', areas: ['Panchgani-Mahabaleshwar Rd', 'Mahabaleshwar-Panchgani Rd', 'Panchgani Road'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' },
        { id: 'MEDHA', name: 'Medha Road Area', areas: ['Medha Road'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' },
        { id: 'KUMBHROSHI', name: 'Kumbhroshi / Pratapgad Area', areas: ['Kumbhroshi', 'Poladpur Road'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' },
        { id: 'TAPOLA', name: 'Tapola Area', areas: ['Tapola', 'Tapola Backwaters'], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Tapola is ~28km from Mahabaleshwar. Contact operator for exact charge.' },
        { id: 'OTHER', name: 'Other Location', areas: [], isStandardTariffZone: false, additionalCharge: null, chargeRule: 'Additional pickup charge as per location — to be confirmed', notes: 'Contact operator for exact charge' }
    ],
    seasonRule: {
        enforceMinimum: true,
        minimumTours: 2,
        alternativeOption: 'Full Day Tour (Tour 7 — ₹3,000)',
        message: 'During weekends and peak season, a minimum of 2 tours or 1 full-day tour is required.',
        periods: [
            { start: '04-15', end: '06-15', name: 'Summer Peak Season' },
            { start: '10-20', end: '11-10', name: 'Diwali Vacation Season' },
            { start: '12-20', end: '01-05', name: 'Christmas / New Year Season' }
        ],
        includeWeekends: true
    },
    tours: [
        {
            id: 'T1',
            tour_no: 1,
            name: 'Mahabaleshwar Darshan (Tour 1)',
            category: 'sightseeing',
            type: 'tour',
            fare: 1200,
            duration: '3:30 Hrs.',
            duration_minutes: 210,
            points: [
                'Old Mahabaleshwar',
                'Panchganga Temple',
                'Lord Shiva Temple',
                'Arthur Seat',
                'Window Point',
                'Tiger Spring',
                'Hunting Point',
                'Malcolm Point',
                'Echo Point',
                'Castle Rock Point',
                'Savitri Point',
                'Marjorie Point',
                'Elphinstone Point (Upper)',
                'Elphinstone Point (Lower)',
                'Kate\'s Point',
                'Needle Hole (Elephant Head)',
                'Free Visit Strawberry Garden (Only in Strawberry Season)'
            ],
            hidden_points: [], // All 17 points included in union tariff
            description: 'The iconic Mahabaleshwar circuit covering sacred heritage temples and dramatic cliff viewpoints over Savitri River Valley.'
        },
        {
            id: 'T2',
            tour_no: 2,
            name: 'Mahabaleshwar Darshan (Tour 2)',
            category: 'sightseeing',
            type: 'tour',
            fare: 1200,
            duration: '3:30 Hrs.',
            duration_minutes: 210,
            points: [
                'Wilson Point (Sunrise)',
                'Ganesh Temple (Machutar Village)',
                'Plato Point',
                'King\'s Chair Point',
                'Lingmala Waterfall',
                'Venna Mini Dam',
                'Lodwick Point',
                'Mumbai Point (Sunset)'
            ],
            hidden_points: [],
            description: 'Nature and sunset circuit featuring Wilson Point, roaring Lingmala Waterfall, Venna Mini Dam, and Mumbai Sunset Point.'
        },
        {
            id: 'T3',
            tour_no: 3,
            name: 'Pratapgadh Darshan (Tour 3)',
            category: 'sightseeing',
            type: 'tour',
            fare: 1600,
            duration: '3:30 Hrs.',
            duration_minutes: 210,
            points: [
                'Pratapgadh Fort',
                'Bhavani Mata Temple',
                'Pratap Garden',
                'Shivaji Maharaj Statue',
                'Kadelot Point',
                'Tomb of Afzalkhan',
                'Shivkalin Village (Pratapgadh Machi)'
            ],
            hidden_points: ['Shree Ramvardhayni Mandir (Par) - Extra charge if requested'],
            description: 'Historic expedition to Chhatrapati Shivaji Maharaj\'s mountain fortress, Bhavani Mata shrine, and Shivkalin village.'
        },
        {
            id: 'T4',
            tour_no: 4,
            name: 'Panchgani Darshan (Tour 4)',
            category: 'sightseeing',
            type: 'tour',
            fare: 1200,
            duration: '3:00 Hrs.',
            duration_minutes: 180,
            points: [
                'Parsi Point',
                'Table Land (Caves)',
                'Museum (Gureghar)',
                'Bhilar Waterfall (Only Monsoon)',
                'Avis World Theme Park'
            ],
            hidden_points: [
                'Mapro Garden (Extra charge - Not included in ₹1200 base fare)',
                'Velocity Entertainment (Extra charge - Not included in ₹1200 base fare)'
            ],
            description: 'Explore the plateau town of Panchgani, scenic Table Land volcanic table, and breezy Parsi Point overlooking Dhom Dam.'
        },
        {
            id: 'T5',
            tour_no: 5,
            name: 'Wai Darshan (Tour 5)',
            category: 'sightseeing',
            type: 'tour',
            fare: 2500,
            duration: '6:00 Hrs.',
            duration_minutes: 360,
            points: [
                'Sydney Point',
                'Wai Ghats',
                'Shree Ganesh Temple (Dholya Ganpati)',
                'Shree Kashivishveshwar Temple',
                'Dhom Dam',
                'Nana Phadnavis Wada (Menavli)',
                'Mapro Factory (Shendurjane Wai)'
            ],
            hidden_points: [],
            description: 'Full cultural tour to historic temple town Wai, sacred Krishna river ghats, historic wadas, and picturesque Dhom Dam.'
        },
        {
            id: 'T6',
            tour_no: 6,
            name: 'Tapola Darshan (Tour 6)',
            category: 'sightseeing',
            type: 'tour',
            fare: 1450,
            duration: '3:30 Hrs.',
            duration_minutes: 210,
            points: [
                'Mini Kashmir',
                'Water Sports Center',
                'Shivsagar Darshan (Lake View)'
            ],
            hidden_points: ['Honey Village (Manghar) - Extra charge if requested'],
            description: 'Scenic 30km jungle ghat ride to the backwaters of Koyna Dam (Shivsagar Lake) for exhilarating speedboating and watersports.'
        },
        {
            id: 'T7',
            tour_no: 7,
            name: 'Full Day Mahabaleshwar & Panchgani Combo (Tour 7)',
            category: 'combo',
            type: 'tour',
            fare: 3000,
            duration: '8:00 - 9:00 Hrs.',
            duration_minutes: 510,
            points: [
                'Old Mahabaleshwar (Temples)',
                'Panchganga Temple',
                'Lord Shiva Temple',
                'Arthur Seat Point',
                'Window Point',
                'Tiger Spring',
                'Hunting Point',
                'Malcolm Point',
                'Echo Point',
                'Castle Rock Point',
                'Savitri Point',
                'Marjorie Point',
                'Elphinstone Point',
                'Kate\'s Point',
                'Needle Hole (Elephant Head)',
                'Strawberry Garden (Seasonal)',
                'Parsi Point (Panchgani)',
                'Table Land (Caves)',
                'Museum (Gureghar)',
                'Bhilar Waterfall (Monsoon)',
                'Avis World'
            ],
            hidden_points: [
                'Mapro Garden (Extra charge - Not included in ₹3000 base fare)',
                'Velocity Entertainment (Extra charge - Not included in ₹3000 base fare)'
            ],
            description: 'The premier full-day combo covering both Mahabaleshwar & Panchgani in a relaxed, complete itinerary. Best value for 1-day travelers!'
        },
        // LOCAL POINT-TO-POINT DROPS (From Taxi Union Rate Sheet)
        { id: 'LOC_2KM', name: 'Local Drop (Up to 2 KM)', category: 'local_drop', type: 'local', fare: 100, return_fare: 150, duration: '15 Mins', points: ['Direct Point-to-Point Drop within 2 KM in Mahabaleshwar Market area'] },
        { id: 'LOC_5KM', name: 'Local Drop (Up to 5 KM)', category: 'local_drop', type: 'local', fare: 400, return_fare: 500, duration: '20 Mins', points: ['Direct Point-to-Point Drop within 5 KM radius'] },
        { id: 'LOC_MAPRO', name: 'Mapro Garden (Gureghar) Drop', category: 'local_drop', type: 'local', fare: 600, return_fare: 800, duration: '45 Mins', points: ['Drop to Mapro Garden strawberry center (or Return with waiting)'] },
        { id: 'LOC_PANCHGANI', name: 'Panchgani Town Drop', category: 'local_drop', type: 'local', fare: 600, return_fare: 900, duration: '45 Mins', points: ['Direct Drop to Panchgani Market / Hotels'] },
        { id: 'LOC_OLD_MAHA', name: 'Old Mahabaleshwar Temple Drop', category: 'local_drop', type: 'local', fare: 400, return_fare: 600, duration: '30 Mins', points: ['Drop to sacred Old Mahabaleshwar Panchganga Temple'] },
        { id: 'LOC_WILSON', name: 'Wilson Point (Sunrise Trip)', category: 'local_drop', type: 'local', fare: 400, return_fare: 600, duration: '45 Mins', points: ['Early morning Sunrise drop & return from Wilson Point'] },
        { id: 'LOC_BOMBAY', name: 'Bombay Point (Sunset Trip)', category: 'local_drop', type: 'local', fare: 400, return_fare: 600, duration: '45 Mins', points: ['Evening Sunset drop & return from Bombay Point (Mumbai Point)'] },
        { id: 'LOC_WAI', name: 'Wai Town Drop', category: 'local_drop', type: 'local', fare: 1200, return_fare: 1800, duration: '1.5 Hrs', points: ['Direct Drop to Wai town / Ganpati Ghat'] },

        // OUT OF MAHABALESHWAR DROPS & TRANSFERS (From Taxi Union Rate Sheet)
        { id: 'TR_PUNE_APT', name: 'Mahabaleshwar to Pune Airport Drop', category: 'outstation', type: 'transfer', fare: 4000, duration: '3.5 Hrs', points: ['Direct Door-to-Terminal Drop at Pune International Airport (Lohegaon)'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_PUNE_RLY', name: 'Mahabaleshwar to Pune Railway Station Drop', category: 'outstation', type: 'transfer', fare: 3500, duration: '3.5 Hrs', points: ['Direct Drop to Pune Junction Railway Station'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_MUM_APT', name: 'Mahabaleshwar to Mumbai Airport Drop', category: 'outstation', type: 'transfer', fare: 8000, duration: '6.0 Hrs', points: ['Direct Door-to-Terminal Drop at Mumbai CSMI Airport (T1/T2)'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_MUM_VASHI', name: 'Mahabaleshwar to Mumbai (Vashi / Dadar) Drop', category: 'outstation', type: 'transfer', fare: 7000, duration: '5.5 Hrs', points: ['Direct Drop to Vashi, Chembur, Dadar, or Central Mumbai'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_SATARA_BUS', name: 'Mahabaleshwar to Satara Bus Stand Drop', category: 'outstation', type: 'transfer', fare: 2000, duration: '1.5 Hrs', points: ['Direct Drop to Satara Central Bus Stand'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_SATARA_RLY', name: 'Mahabaleshwar to Satara Railway Station Drop', category: 'outstation', type: 'transfer', fare: 2300, duration: '1.5 Hrs', points: ['Direct Drop to Satara Railway Station'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_KAS_PATHAR', name: 'Mahabaleshwar to Kas Pathar (Valley of Flowers)', category: 'outstation', type: 'transfer', fare: 3000, duration: '2.5 Hrs', points: ['Trip to Kas Plateau (Valley of Flowers World Heritage Site)'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_SAJJANGAD', name: 'Mahabaleshwar to Sajjangad Fort Drop', category: 'outstation', type: 'transfer', fare: 3000, duration: '2.0 Hrs', points: ['Trip to sacred Samarth Ramdas Swami Sajjangad Fort'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_WATHAR', name: 'Mahabaleshwar to Wathar Railway Station Drop', category: 'outstation', type: 'transfer', fare: 2500, duration: '1.5 Hrs', points: ['Direct Drop to Wathar Railway Station'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_POLADPUR', name: 'Mahabaleshwar to Poladpur Drop', category: 'outstation', type: 'transfer', fare: 2000, duration: '1.5 Hrs', points: ['Direct Drop to Poladpur on NH 66'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_MAHAD', name: 'Mahabaleshwar to Mahad Drop', category: 'outstation', type: 'transfer', fare: 2300, duration: '2.0 Hrs', points: ['Direct Drop to Mahad town / Gandharpale'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_RAIGADH', name: 'Mahabaleshwar to Raigadh Fort (Return Trip)', category: 'outstation', type: 'transfer', fare: 3500, duration: 'Full Day', points: ['Round trip to historic Chhatrapati Shivaji Maharaj Capital Fort Raigad'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_MATHERAN', name: 'Mahabaleshwar to Matheran Drop (Dasturi Naka)', category: 'outstation', type: 'transfer', fare: 7500, duration: '5.0 Hrs', points: ['Direct Drop to Dasturi Naka, Matheran car parking'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_GANPATIPULE', name: 'Mahabaleshwar to Ganpatipule Drop', category: 'outstation', type: 'transfer', fare: 6000, duration: '5.5 Hrs', points: ['Direct Drop to Ganpatipule Temple & Beach resort'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_KOLHAPUR', name: 'Mahabaleshwar to Kolhapur Drop', category: 'outstation', type: 'transfer', fare: 6000, duration: '4.5 Hrs', points: ['Direct Drop to Kolhapur city / Mahalaxmi Temple'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_SANGLI', name: 'Mahabaleshwar to Sangli Drop', category: 'outstation', type: 'transfer', fare: 6000, duration: '4.5 Hrs', points: ['Direct Drop to Sangli city / Miraj junction'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_KHED', name: 'Mahabaleshwar to Khed Drop', category: 'outstation', type: 'transfer', fare: 3000, duration: '2.5 Hrs', points: ['Direct Drop to Khed town'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_CHIPLUN', name: 'Mahabaleshwar to Chiplun Drop', category: 'outstation', type: 'transfer', fare: 3500, duration: '3.0 Hrs', points: ['Direct Drop to Chiplun town / Railway Station'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_LONAVALA', name: 'Mahabaleshwar to Lonavala / Khandala Drop', category: 'outstation', type: 'transfer', fare: 5500, duration: '4.5 Hrs', points: ['Direct Drop to Lonavala / Khandala'], hidden_points: ['Toll charges extra'] },
        { id: 'TR_ALIBAUG', name: 'Mahabaleshwar to Alibaug Drop', category: 'outstation', type: 'transfer', fare: 5000, duration: '4.5 Hrs', points: ['Direct Drop to Alibaug coastal town & beaches'], hidden_points: ['Toll charges extra'] }
    ],

    // AUTOCOMPLETE LOCATION DATABASE (60+ Major Hotels, Resorts, Landmarks in Mahabaleshwar & Panchgani)
    locations: [
        { name: 'Hotel Dreamland', area: 'Mahabaleshwar Market', type: 'hotel' },
        { name: 'Le Méridien Mahabaleshwar Resort & Spa', area: 'Medha Road', type: 'luxury_resort' },
        { name: 'Brightland Resort & Spa', area: 'Kate\'s Point Road', type: 'luxury_resort' },
        { name: 'Evershine Resort & Spa', area: 'Gautam Road', type: 'luxury_resort' },
        { name: 'Club Mahindra Sherwood', area: 'Blue Valley Ride', type: 'resort' },
        { name: 'Club Mahindra Pratapgad', area: 'Kumbhroshi', type: 'resort' },
        { name: 'Saj By The Mountain', area: 'Panchgani-Mahabaleshwar Rd', type: 'resort' },
        { name: 'Citrus Chambers Mahabaleshwar', area: 'L.C. Dsouza Road', type: 'hotel' },
        { name: 'Bella Vista Resort', area: 'Mahabaleshwar-Panchgani Rd', type: 'resort' },
        { name: 'Regenta MPG Club', area: 'Tapola Road', type: 'resort' },
        { name: 'Courtyard by Marriott Mahabaleshwar', area: '19-B Metgutad', type: 'luxury_resort' },
        { name: 'Forest County Resort', area: 'Duchess Road', type: 'resort' },
        { name: 'Rockford Resort', area: 'Mahabaleshwar', type: 'resort' },
        { name: 'Ramsukh Resorts & Spa', area: 'Kshetra Mahabaleshwar', type: 'luxury_resort' },
        { name: 'Valley View Beacon Resort', area: 'Valley View Road', type: 'hotel' },
        { name: 'Grand Resort', area: 'Woodlawn Road', type: 'hotel' },
        { name: 'Hotel Lake View', area: 'Satara Road', type: 'hotel' },
        { name: 'Fountain Hotel', area: 'Opposite Koyna Valley', type: 'hotel' },
        { name: 'Hotel Shreyas', area: 'Mahabaleshwar Market', type: 'hotel' },
        { name: 'Hotel Panorama', area: 'Near ST Bus Stand', type: 'hotel' },
        { name: 'MTDC Resort Mahabaleshwar', area: 'Near Bombay Point', type: 'govt_resort' },
        { name: 'Hotel Rahil International', area: 'Main Market', type: 'hotel' },
        { name: 'J\'s Excelsior Hotel', area: 'Mahabaleshwar', type: 'hotel' },
        { name: 'Anand Van Bhuvan', area: 'Duchess Road', type: 'heritage_hotel' },
        { name: 'Strawberry Homes Villa', area: 'Metgutad', type: 'villa' },
        { name: 'Summer Palace Resort', area: 'Panchgani Road', type: 'hotel' },
        // Panchgani Properties
        { name: 'Ravine Hotel', area: 'Sydney Point, Panchgani', type: 'luxury_resort' },
        { name: 'Hotel Millennium Park', area: 'Godavali Road, Panchgani', type: 'resort' },
        { name: 'Blue Country Resort', area: 'Khingar Road, Panchgani', type: 'resort' },
        { name: 'Mount View Heritage Hotel', area: 'Main Road, Panchgani', type: 'heritage_hotel' },
        { name: 'Hotel Prospect', area: 'Mount Malcolm, Panchgani', type: 'heritage_hotel' },
        { name: 'Il Palazzo Hotel', area: 'Panchgani Market', type: 'heritage_hotel' },
        { name: 'Terra Camp Panchgani', area: 'Dandeghar', type: 'glamping' },
        { name: 'Silver Oak Villa Panchgani', area: 'Ring Road', type: 'villa' },
        // Landmarks & Transit Points
        { name: 'Mahabaleshwar ST Bus Stand', area: 'Town Center', type: 'transit' },
        { name: 'Panchgani ST Bus Stand', area: 'Panchgani Center', type: 'transit' },
        { name: 'Wai ST Bus Stand', area: 'Wai Town', type: 'transit' },
        { name: 'Venna Lake Boating Club', area: 'Khed-Mahabaleshwar Rd', type: 'landmark' },
        { name: 'Mapro Garden (Gureghar)', area: 'Panchgani-Mahabaleshwar Rd', type: 'landmark' },
        { name: 'Old Mahabaleshwar Temple Complex', area: 'Kshetra Mahabaleshwar', type: 'landmark' },
        { name: 'Table Land Parking', area: 'Panchgani', type: 'landmark' },
        { name: 'Velocity Entertainment Park', area: 'Bhilar Road', type: 'landmark' },
        { name: 'Arthur\'s Seat Point Gate', area: 'Old Mahabaleshwar', type: 'landmark' },
        { name: 'Pratapgad Fort Base (Kumbhroshi)', area: 'Poladpur Road', type: 'landmark' },
        { name: 'Tapola Water Sports Center (Shivsagar)', area: 'Tapola Backwaters', type: 'landmark' },
        { name: 'Pune International Airport (PNQ)', area: 'Lohegaon, Pune', type: 'transit' },
        { name: 'Pune Junction Railway Station', area: 'Pune', type: 'transit' },
        { name: 'Mumbai CSMI Airport (BOM)', area: 'Sahar / Santacruz, Mumbai', type: 'transit' },
        { name: 'Satara Railway Station', area: 'Satara', type: 'transit' }
    ],

    // CORE QUERY & HELPER METHODS
    getTourById: function(id) {
        if (!id) return null;
        var q = String(id).toUpperCase().trim();
        return this.tours.find(function(t) { return t.id === q; }) || null;
    },

    resolveTour: function(query) {
        if (!query) return this.tours[0];
        var q = String(query).toLowerCase().trim();

        // Exact ID match
        var direct = this.tours.find(function(t) { return t.id.toLowerCase() === q; });
        if (direct) return direct;

        // Combos (Tour 7)
        if (q.includes('tour 7') || q.includes('combo') || q.includes('full day') || q.includes('1 day') || q.includes('one day') || (q.includes('all') && q.includes('maha'))) {
            return this.getTourById('T7');
        }

        // Outstation Airport Transfers
        if (q.includes('mumbai') && (q.includes('airport') || q.includes('csmia') || q.includes('flight') || q.includes('terminal'))) {
            return this.getTourById('TR_MUM_APT');
        }
        if (q.includes('airport') || q.includes('flight') || q.includes('terminal')) {
            return this.getTourById('TR_PUNE_APT');
        }

        // Outstation City / Railway Transfers
        if (q.includes('mumbai') || q.includes('dadar') || q.includes('vashi') || q.includes('thane') || q.includes('chembur')) {
            return this.getTourById('TR_MUM_VASHI');
        }
        if (q.includes('pune') && (q.includes('station') || q.includes('train') || q.includes('rly') || q.includes('junction'))) {
            return this.getTourById('TR_PUNE_RLY');
        }
        if (q.includes('pune')) {
            return this.getTourById('TR_PUNE_RLY');
        }
        if (q.includes('satara') && (q.includes('railway') || q.includes('station') || q.includes('rly'))) {
            return this.getTourById('TR_SATARA_RLY');
        }
        if (q.includes('satara')) {
            return this.getTourById('TR_SATARA_BUS');
        }
        if (q.includes('kas') || q.includes('flower')) {
            return this.getTourById('TR_KAS_PATHAR');
        }
        if (q.includes('sajjangad')) {
            return this.getTourById('TR_SAJJANGAD');
        }
        if (q.includes('wathar')) {
            return this.getTourById('TR_WATHAR');
        }
        if (q.includes('poladpur')) {
            return this.getTourById('TR_POLADPUR');
        }
        if (q.includes('mahad')) {
            return this.getTourById('TR_MAHAD');
        }
        if (q.includes('raigadh') || q.includes('raigad')) {
            return this.getTourById('TR_RAIGADH');
        }
        if (q.includes('matheran')) {
            return this.getTourById('TR_MATHERAN');
        }
        if (q.includes('ganpatipule')) {
            return this.getTourById('TR_GANPATIPULE');
        }
        if (q.includes('kolhapur')) {
            return this.getTourById('TR_KOLHAPUR');
        }
        if (q.includes('sangli')) {
            return this.getTourById('TR_SANGLI');
        }
        if (q.includes('lonavala') || q.includes('khandala')) {
            return this.getTourById('TR_LONAVALA');
        }
        if (q.includes('alibaug') || q.includes('alibag')) {
            return this.getTourById('TR_ALIBAUG');
        }

        // Local Point-to-Point Drops
        if (q.includes('mapro drop') || q.includes('mapro garden drop') || (q.includes('mapro') && q.includes('drop'))) {
            return this.getTourById('LOC_MAPRO');
        }
        if (q.includes('panchgani drop') || q.includes('panchgani town drop') || (q.includes('panchgani') && q.includes('drop'))) {
            return this.getTourById('LOC_PANCHGANI');
        }
        if (q.includes('old maha drop') || q.includes('old mahabaleshwar drop') || (q.includes('old maha') && q.includes('drop'))) {
            return this.getTourById('LOC_OLD_MAHA');
        }
        if (q.includes('wilson sunrise') || q.includes('wilson point sunrise') || (q.includes('wilson') && q.includes('drop'))) {
            return this.getTourById('LOC_WILSON');
        }
        if (q.includes('bombay sunset') || q.includes('bombay point sunset') || q.includes('mumbai point sunset') || (q.includes('bombay') && q.includes('drop'))) {
            return this.getTourById('LOC_BOMBAY');
        }
        if (q.includes('wai drop') || q.includes('wai town drop') || (q.includes('wai') && q.includes('drop'))) {
            return this.getTourById('LOC_WAI');
        }

        // Sightseeing Tours
        if (q.includes('tour 3') || q.includes('pratapgad') || q.includes('pratapgadh') || q.includes('fort') || q.includes('shivaji') || q.includes('third tour')) {
            return this.getTourById('T3');
        }
        if (q.includes('tour 5') || q.includes('wai') || q.includes('dhom') || q.includes('ganpati ghat') || q.includes('fifth tour')) {
            return this.getTourById('T5');
        }
        if (q.includes('tour 6') || q.includes('tapola') || q.includes('kashmir') || q.includes('boating') || q.includes('water sport') || q.includes('sixth tour')) {
            return this.getTourById('T6');
        }
        if (q.includes('tour 4') || q.includes('panchgani') || q.includes('table land') || q.includes('parsi point') || q.includes('fourth tour')) {
            return this.getTourById('T4');
        }
        if (q.includes('tour 2') || q.includes('waterfall') || q.includes('sunset') || q.includes('lingmala') || q.includes('mumbai point') || q.includes('bombay point') || q.includes('venna') || q.includes('second tour') || q.includes('wilson') || q.includes('lodwick') || q.includes('lodwik')) {
            return this.getTourById('T2');
        }
        if (q.includes('tour 1') || q.includes('darshan 1') || q.includes('arthur') || q.includes('temple') || q.includes('first tour') || q.includes('kate') || q.includes('elephant')) {
            return this.getTourById('T1');
        }

        // Substring search in tour names
        var matched = this.tours.find(function(t) { return t.name.toLowerCase().includes(q); });
        return matched || this.tours[0];
    },

    searchLocations: function(query) {
        if (!query || typeof query !== 'string' || query.trim().length < 2) return [];
        var q = query.toLowerCase().trim();
        return this.locations.filter(function(loc) {
            return loc.name.toLowerCase().includes(q) || loc.area.toLowerCase().includes(q);
        }).slice(0, 6);
    },

    isSeasonDate: function(dateStr) {
        if (!dateStr) return false;
        var d = new Date(dateStr);
        if (isNaN(d.getTime())) return false;
        var dow = d.getDay();
        if (dow === 0 || dow === 6) return true; // Weekend
        var mm = String(d.getMonth() + 1).padStart(2, '0');
        var dd = String(d.getDate()).padStart(2, '0');
        var md = mm + '-' + dd;
        return this.settings.seasonPeriods.some(function(p) {
            return p.start <= p.end
                ? (md >= p.start && md <= p.end)
                : (md >= p.start || md <= p.end);
        });
    },

    isMonsoonDate: function(dateStr) {
        if (!dateStr) return false;
        var d = new Date(dateStr);
        if (isNaN(d.getTime())) return false;
        var mm = String(d.getMonth() + 1).padStart(2, '0');
        var dd = String(d.getDate()).padStart(2, '0');
        var md = mm + '-' + dd;
        var p = this.settings.monsoonPeriod;
        return md >= p.start && md <= p.end;
    },

    getPickupZone: function(locationOrArea) {
        if (!locationOrArea || !String(locationOrArea).trim()) return this.pickupZones.find(function(z) { return z.id === 'MAHA_TOWN'; });
        var q = String(locationOrArea).toLowerCase().trim();
        if (!q) return this.pickupZones.find(function(z) { return z.id === 'MAHA_TOWN'; });

        // 1. If matches a known location in this.locations, check that location's area as well
        if (this.locations && this.locations.length) {
            var matchedLoc = this.locations.find(function(l) {
                var lName = (l.name || '').toLowerCase();
                return lName === q || (q.length >= 3 && (lName.includes(q) || q.includes(lName)));
            });
            if (matchedLoc && matchedLoc.area) {
                var areaLower = matchedLoc.area.toLowerCase();
                for (var z = 0; z < this.pickupZones.length; z++) {
                    var pz = this.pickupZones[z];
                    for (var a = 0; a < pz.areas.length; a++) {
                        var pzaLower = pz.areas[a].toLowerCase();
                        if (areaLower === pzaLower || areaLower.includes(pzaLower) || pzaLower.includes(areaLower)) {
                            return pz;
                        }
                    }
                }
            }
        }

        // 2. Direct check against pickupZone areas and names
        for (var i = 0; i < this.pickupZones.length; i++) {
            var zone = this.pickupZones[i];
            for (var j = 0; j < zone.areas.length; j++) {
                var aLower = zone.areas[j].toLowerCase();
                if (q === aLower || (q.length >= 4 && (q.includes(aLower) || aLower.includes(q)))) {
                    return zone;
                }
            }
            var zNameLower = zone.name.toLowerCase();
            if (q === zNameLower || (q.length >= 4 && (zNameLower.includes(q) || q.includes(zNameLower)))) {
                return zone;
            }
        }

        // 3. If query mentions mahabaleshwar, default to MAHA_TOWN
        if (q.includes('mahabaleshwar') && !q.includes('old mahabaleshwar')) {
            return this.pickupZones.find(function(z) { return z.id === 'MAHA_TOWN'; });
        }

        return this.pickupZones.find(function(z) { return z.id === 'OTHER'; });
    },

    isSeasonOrWeekend: function(dateStr) {
        if (!dateStr) return false;
        var d = new Date(dateStr);
        if (isNaN(d.getTime())) return false;
        // Check weekends
        var dow = d.getDay();
        if (this.seasonRule.includeWeekends && (dow === 0 || dow === 6)) return true;
        // Check season periods
        var mm = String(d.getMonth() + 1).padStart(2, '0');
        var dd = String(d.getDate()).padStart(2, '0');
        var md = mm + '-' + dd;
        return this.seasonRule.periods.some(function(p) {
            return p.start <= p.end
                ? (md >= p.start && md <= p.end)
                : (md >= p.start || md <= p.end);
        });
    },

    // DYNAMIC CUSTOM RATES ENGINE
    _defaultFares: null,

    initDefaults: function() {
        if (!this._defaultFares) {
            this._defaultFares = {};
            var self = this;
            this.tours.forEach(function(t) {
                self._defaultFares[t.id] = t.fare;
            });
        }
    },

    getDefaultRates: function() {
        this.initDefaults();
        return Object.assign({}, this._defaultFares);
    },

    loadCustomRates: function() {
        this.initDefaults();
        try {
            if (typeof localStorage !== 'undefined') {
                var stored = localStorage.getItem('amt_custom_rates');
                if (stored) {
                    var customRates = JSON.parse(stored);
                    this.tours.forEach(function(t) {
                        if (customRates[t.id] !== undefined && !isNaN(Number(customRates[t.id]))) {
                            t.fare = Number(customRates[t.id]);
                        }
                    });
                }
            }
        } catch(e) {
            console.warn('Could not load custom rates from localStorage', e);
        }
    },

    saveCustomRates: function(ratesMap) {
        this.initDefaults();
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('amt_custom_rates', JSON.stringify(ratesMap));
                this.loadCustomRates();
            }
            return true;
        } catch(e) {
            console.error('Could not save custom rates', e);
            return false;
        }
    },

    resetToDefaultRates: function() {
        this.initDefaults();
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem('amt_custom_rates');
            }
            var self = this;
            this.tours.forEach(function(t) {
                if (self._defaultFares[t.id] !== undefined) {
                    t.fare = self._defaultFares[t.id];
                }
            });
            return true;
        } catch(e) {
            console.error('Could not reset rates', e);
            return false;
        }
    },

};

if (typeof window !== 'undefined') {
    window.TOUR_DATABASE = TOUR_DATABASE;

    TOUR_DATABASE.loadCustomRates();

    // SMART TOUR FINDER ENGINE
    window.recommendTour = function() {
        var timeEl = document.getElementById('tf_time');
        var interestEl = document.getElementById('tf_interest');
        var resultEl = document.getElementById('tf_result');
        if (!resultEl) return;

        var time = timeEl ? timeEl.value : 'half';
        var interest = interestEl ? interestEl.value : 'views';

        var rec = null;

        if (time === 'half') {
            switch(interest) {
                case 'nature':
                    rec = {
                        tourId: 'T2',
                        title: 'Mahabaleshwar Darshan (Tour 2 - Waterfall & Sunset)',
                        badge: 'Half-Day Nature Match',
                        fare: '₹1,200',
                        duration: '3:30 Hrs',
                        pointsCount: '8 Iconic Spots',
                        summary: 'Designed for lush waterfalls, serene lake vistas, and evening sunset magic.',
                        highlights: [
                            'Lingmala Cascading Waterfall (Roaring seasonal falls & forest walk)',
                            'Mumbai Point (Bombay Sunset Point - famous golden hour panoramic view)',
                            'Wilson Point (Sunrise Point - highest hilltop elevation at 1,439m)',
                            'Venna Mini Dam, Plato Point & Lodwick Point'
                        ],
                        detailsUrl: '#t2'
                    };
                    break;
                case 'history':
                    rec = {
                        tourId: 'T3',
                        title: 'Pratapgadh Fort Darshan (Tour 3 - Mountain Citadel)',
                        badge: 'Half-Day Heritage Match',
                        fare: '₹1,600',
                        duration: '3:30 Hrs',
                        pointsCount: '7 Historic Points',
                        summary: 'Relive Maratha history at Chhatrapati Shivaji Maharaj\'s majestic fortress in Sahyadri.',
                        highlights: [
                            'Pratapgad Fort Citadel, Ramparts & Double Bastions',
                            'Sacred Bhavani Mata Mandir & Shivaji Maharaj Bronze Statue',
                            'Kadelot Point sheer cliff drop & Afzalkhan Historic Tomb',
                            'Shivkalin Village (Pratapgad Machi) cultural heritage'
                        ],
                        detailsUrl: '#t3'
                    };
                    break;
                case 'panchgani':
                    rec = {
                        tourId: 'T4',
                        title: 'Panchgani Sightseeing (Tour 4 - Plateau & Strawberry)',
                        badge: 'Half-Day Panchgani Match',
                        fare: '₹1,200',
                        duration: '3:00 Hrs',
                        pointsCount: '5 Top Spots',
                        summary: 'Breezy highland tour across volcanic tablelands and strawberry farm lands.',
                        highlights: [
                            'Table Land - Asia\'s 2nd largest volcanic plateau & Devil\'s Kitchen caves',
                            'Parsi Point - Spectacular overlook of Krishna Valley & Dhom Dam reservoir',
                            'Gureghar Strawberry Center & Handicrafts Museum',
                            'Bhilar Waterfall (Monsoon) & Avis World'
                        ],
                        detailsUrl: '#t4'
                    };
                    break;
                case 'spiritual':
                    rec = {
                        tourId: 'T5',
                        title: 'Wai Darshan (Tour 5 - Sacred Ghats & Dakshin Kashi)',
                        badge: 'Spiritual Heritage Match',
                        fare: '₹2,500',
                        duration: '6:00 Hrs',
                        pointsCount: '7 Sacred Spots',
                        summary: 'Peaceful temple pilgrimage to holy Krishna River stone ghats and 12th-century shrines.',
                        highlights: [
                            'Dholya Ganpati Mandir - Massive monolithic idol on holy Krishna Ghats',
                            'Kashivishveshwar 12th-Century Hemadpanthi Stone Temple',
                            'Nana Phadnavis Historic Wada at Menavali (Peshwa heritage)',
                            'Dhom Dam picturesque reservoir & Sydney Point'
                        ],
                        detailsUrl: '#t5'
                    };
                    break;
                case 'water':
                    rec = {
                        tourId: 'T6',
                        title: 'Tapola Mini Kashmir (Tour 6 - Boating & Backwaters)',
                        badge: 'Half-Day Adventure Match',
                        fare: '₹1,450',
                        duration: '3:30 - 4:00 Hrs',
                        pointsCount: '3 Scenic Points',
                        summary: 'Scenic 30km jungle ghat ride to Shivsagar Lake backwaters for exhilarating speedboating.',
                        highlights: [
                            'Shivsagar Lake - Koyna Dam pristine backwaters',
                            'Tapola Water Sports: Speedboating, scooter rides, and family boat cruises',
                            'Dense rainforest ghat drive and breathtaking Sahyadri valley views',
                            'Tranquil Mini Kashmir village atmosphere'
                        ],
                        detailsUrl: '#t6'
                    };
                    break;
                case 'views':
                default:
                    rec = {
                        tourId: 'T1',
                        title: 'Mahabaleshwar Darshan (Tour 1 - Heritage & Views)',
                        badge: 'Most Popular Half-Day Tour',
                        fare: '₹1,200',
                        duration: '3:30 Hrs',
                        pointsCount: '17 Union Points',
                        summary: 'The flagship Mahabaleshwar tour! Sweeping cliffside viewpoints and sacred river origin shrines.',
                        highlights: [
                            'Arthur\'s Seat (Queen of Points) & Window Point over Savitri Valley',
                            'Ancient Panchganga Temple (origin of 5 holy rivers) & Shiva Temple',
                            'Kate\'s Point & Needle Hole Rock (Elephant\'s Head)',
                            'Echo Point, Malcolm Point, Castle Rock & Strawberry Garden (seasonal)'
                        ],
                        detailsUrl: '#t1'
                    };
                    break;
            }
        } else {
            // Full Day selections
            switch(interest) {
                case 'history':
                    rec = {
                        tourId: 'T3',
                        title: 'Pratapgad Fort Heritage Expedition + Sightseeing Combo',
                        badge: 'Full-Day Heritage Match',
                        fare: '₹1,600 (T3) / ₹2,800 (T1+T3 Combo)',
                        duration: '3:30 to 7:00 Hrs',
                        pointsCount: 'Fort + Viewpoints',
                        summary: 'Full historical immersion into Maratha forts combined with Mahabaleshwar\'s top viewpoints.',
                        highlights: [
                            'Full guided exploration of Pratapgad Fort, Machi, and Shivaji Memorial',
                            'Bhavani Mata Temple, Kadelot Point & Afzal Khan Tomb',
                            'Combine with Tour 1 Arthur\'s Seat and sacred Panchganga Temple',
                            'Personal driver guidance with zero advance booking required'
                        ],
                        detailsUrl: '#t3'
                    };
                    break;
                case 'spiritual':
                    rec = {
                        tourId: 'T5',
                        title: 'Wai Darshan Pilgrimage Circuit (Tour 5)',
                        badge: 'Full-Day Spiritual Match',
                        fare: '₹2,500',
                        duration: '6:00 - 7:00 Hrs',
                        pointsCount: '7 Sacred Shrines',
                        summary: 'A deep spiritual and architectural journey to Dakshin Kashi and ancient Sahyadri shrines.',
                        highlights: [
                            'Dholya Ganpati Temple & holy Krishna River Ghats',
                            'Kashivishveshwar 12th-century stone carvings',
                            'Nana Phadnavis Menavali Wada & Dhom Dam reservoir',
                            'Old Mahabaleshwar Panchganga & Mahabaleshwar Shiva Temples'
                        ],
                        detailsUrl: '#t5'
                    };
                    break;
                case 'water':
                    rec = {
                        tourId: 'T6',
                        title: 'Tapola Mini Kashmir + Lake Leisure Experience (Tour 6)',
                        badge: 'Full-Day Water & Adventure',
                        fare: '₹1,450 (Tour 6) / ₹2,650 (Combo with Venna)',
                        duration: '4:00 - 6:00 Hrs',
                        pointsCount: 'Lakes & Backwaters',
                        summary: 'Spend an unhurried day enjoying speedboating at Tapola backwaters and relaxing at Venna Lake.',
                        highlights: [
                            'Tapola Shivsagar Lake: Exhilarating speedboat cruises & watersports',
                            'Scenic 30km jungle road through Sahyadri forests',
                            'Venna Lake pedal/row boating and evening lakeside strawberry market',
                            'Scenic lakeside halts for family photos and local cuisine'
                        ],
                        detailsUrl: '#t6'
                    };
                    break;
                case 'nature':
                    rec = {
                        tourId: 'T7',
                        title: 'Full Day Sahyadri Nature & Waterfalls Combo (Tour 7)',
                        badge: 'Full-Day Nature Match',
                        fare: '₹3,000',
                        duration: '8:00 - 9:00 Hrs',
                        pointsCount: '22 Panoramic Spots',
                        summary: 'A comprehensive full-day immersion in waterfalls, clifftop views, and strawberry plateaus.',
                        highlights: [
                            'Lingmala Cascading Waterfall & Wilson Sunrise Point',
                            'Arthur\'s Seat Queen of Points & Savitri Valley vistas',
                            'Panchgani Table Land volcanic plateau & Parsi Point',
                            'Venna Mini Dam, Plato Point & Old Mahabaleshwar temples'
                        ],
                        detailsUrl: '#t7'
                    };
                    break;
                case 'views':
                case 'panchgani':
                default:
                    rec = {
                        tourId: 'T7',
                        title: 'Full Day Mahabaleshwar & Panchgani Combo (Tour 7)',
                        badge: 'Ultimate Full-Day Combo',
                        fare: '₹3,000',
                        duration: '8:00 - 9:00 Hrs',
                        pointsCount: '22 Union Points',
                        summary: 'The best value 1-day package! Covers all premier spots in both Mahabaleshwar and Panchgani in a single relaxed day.',
                        highlights: [
                            'All Mahabaleshwar Gems: Arthur\'s Seat, Old Mahabaleshwar, Kate\'s Point & Needle Hole',
                            'All Panchgani Highlights: Table Land volcanic plateau, Parsi Point & Gureghar',
                            '22 Official Union Sightseeing circuit points (points visited subject to weather & road conditions)',
                            'Zero advance required • Pay directly to driver after tour completion'
                        ],
                        detailsUrl: '#t7'
                    };
                    break;
            }
        }

        var waText = encodeURIComponent('Hello Aryan Taxi Mahabaleshwar! Smart Tour Finder recommended: ' + rec.title + ' (' + rec.fare + '). Please confirm availability.');
        var waUrl = 'https://api.whatsapp.com/send?phone=919922882044&text=' + waText;

        var html = '<div style="background: rgba(255, 255, 255, 0.98); color: #0f172a; border-radius: 16px; padding: 22px 20px; margin-top: 20px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25); text-align: left; border: 2px solid #38bdf8; animation: tfFadeIn 0.3s ease-out;">' +
            '<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">' +
                '<span style="background: #0284c7; color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 6px;">' +
                    '<i class="fa-solid fa-wand-magic-sparkles"></i> ' + rec.badge +
                '</span>' +
                '<div style="background: #e0f2fe; color: #0369a1; padding: 5px 12px; border-radius: 20px; font-size: 0.92rem; font-weight: 800;">' +
                    rec.fare + ' <span style="font-weight: 600; font-size: 0.8rem; color: #475569;">• ' + rec.duration + ' • ' + rec.pointsCount + '</span>' +
                '</div>' +
            '</div>' +
            '<h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 800; margin: 0 0 8px 0; line-height: 1.35;">' +
                rec.title +
            '</h3>' +
            '<p style="color: #475569; font-size: 0.92rem; line-height: 1.5; margin: 0 0 14px 0;">' +
                rec.summary +
            '</p>' +
            '<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 14px; margin-bottom: 16px;">' +
                '<div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 6px;">' +
                    'Key Itinerary Highlights:' +
                '</div>' +
                '<ul style="margin: 0; padding-left: 18px; color: #1e293b; font-size: 0.85rem; line-height: 1.55;">' +
                    rec.highlights.map(function(h) { return '<li>' + h + '</li>'; }).join('') +
                '</ul>' +
            '</div>' +
            '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">' +
                '<button type="button" onclick="window.bookFromFinder(\'' + rec.tourId + '\')" class="btn btn--accent" style="padding: 12px 16px; font-size: 0.95rem; font-weight: 700; border-radius: 8px; justify-content: center; width: 100%; border: none; cursor: pointer;">' +
                    '<i class="fa-solid fa-calendar-check"></i> Book This Tour' +
                '</button>' +
                '<a href="' + rec.detailsUrl + '" onclick="window.scrollFromFinder(\'' + rec.detailsUrl + '\'); return false;" class="btn btn--outline" style="padding: 12px 16px; font-size: 0.95rem; font-weight: 700; border-radius: 8px; justify-content: center; width: 100%; border: 1.5px solid #0284c7; color: #0284c7; background: white; text-align: center; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">' +
                    '<i class="fa-solid fa-circle-info"></i> View Itinerary' +
                '</a>' +
            '</div>' +
            '<div style="margin-top: 12px; text-align: center;">' +
                '<a href="' + waUrl + '" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; color: #16a34a; font-size: 0.86rem; font-weight: 700; text-decoration: none;">' +
                    '<i class="fa-brands fa-whatsapp" style="font-size: 1.1rem;"></i> Or book instantly via WhatsApp (Direct Owner)' +
                '</a>' +
            '</div>' +
        '</div>';

        resultEl.innerHTML = html;
        resultEl.style.display = 'block';

        try {
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch(e) {}
    };

    window.bookFromFinder = function(tourId) {
        if (typeof window.openBookingModal === 'function') {
            window.openBookingModal(tourId);
        } else {
            window.location.href = 'booking.html?tour=' + encodeURIComponent(tourId);
        }
    };

    window.scrollFromFinder = function(hash) {
        if (!hash) return;
        var target = document.querySelector(hash);
        if (target) {
            var header = target.previousElementSibling;
            if (header && header.classList.contains('tour-header')) {
                header.setAttribute('aria-expanded', 'true');
                target.setAttribute('aria-hidden', 'false');
                target.style.display = 'block';
            }
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            window.location.href = 'tour-packages.html' + hash;
        }
    };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOUR_DATABASE;
}
