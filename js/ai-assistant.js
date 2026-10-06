/* ================================================================
   ARYAN TAXI MAHABALESHWAR — AI TRIP ASSISTANT ("Ask Aryan AI")
   Explore Sahyadri • Mahabaleshwar Taxi & Sightseeing
   Zero-Hallucination Natural Language Recommender & Instant Booking Engine
   ================================================================ */

(function () {
    'use strict';

    var chatHistory = [];
    var collectedState = {
        date: '',
        pax: '3-4',
        pickup: '',
        time: '09:00',
        tourId: null
    };

    // ── 1. Natural Language Intent & Entity Parser ─────────────────────
    function parseUserMessage(text) {
        var t = text.toLowerCase();
        var extracted = {};

        // Date detection
        var today = new Date();
        if (t.includes('tomorrow')) {
            var tm = new Date();
            tm.setDate(today.getDate() + 1);
            extracted.date = tm.toISOString().split('T')[0];
        } else if (t.includes('today')) {
            extracted.date = today.toISOString().split('T')[0];
        } else if (t.includes('day after')) {
            var da = new Date();
            da.setDate(today.getDate() + 2);
            extracted.date = da.toISOString().split('T')[0];
        } else if (t.includes('weekend')) {
            var d = new Date();
            var day = d.getDay();
            var diff = (6 - day + 7) % 7;
            d.setDate(d.getDate() + (diff === 0 ? 7 : diff));
            extracted.date = d.toISOString().split('T')[0];
        }

        // Guests / Pax detection
        var paxMatch = t.match(/(\d+)\s*(people|person|pax|guests|adults|members)/i);
        if (paxMatch) {
            var count = parseInt(paxMatch[1], 10);
            if (count <= 2) extracted.pax = '1-2';
            else if (count <= 4) extracted.pax = '3-4';
            else extracted.pax = '5+';
        } else if (t.includes('family') || t.includes('4 of us') || t.includes('we are 4')) {
            extracted.pax = '3-4';
        } else if (t.includes('couple') || t.includes('2 of us') || t.includes('honeymoon')) {
            extracted.pax = '1-2';
        } else if (t.includes('large group') || t.includes('group of') || t.includes('6 people') || t.includes('7 people') || t.includes('8 people')) {
            extracted.pax = '5+';
        }

        // Pickup / Area detection
        if (t.includes('panchgani')) extracted.pickup = 'Panchgani Hotel / Resort';
        else if (t.includes('dreamland')) extracted.pickup = 'Hotel Dreamland';
        else if (t.includes('meridien')) extracted.pickup = 'Le Méridien Mahabaleshwar';
        else if (t.includes('brightland')) extracted.pickup = 'Brightland Resort & Spa';
        else if (t.includes('evershine')) extracted.pickup = 'Evershine Resort & Spa';
        else if (t.includes('club mahindra')) extracted.pickup = 'Club Mahindra';
        else if (t.includes('tapola')) extracted.pickup = 'Tapola';
        else if (t.includes('pratapgad')) extracted.pickup = 'Pratapgad / Kumbhroshi';
        else if (t.includes('metgutad')) extracted.pickup = 'Metgutad';
        else if (t.includes('bondarwadi')) extracted.pickup = 'Bondarwadi';
        else if (t.includes('avkali')) extracted.pickup = 'Avkali';
        else if (t.includes('gureghar')) extracted.pickup = 'Gureghar';
        else if (t.includes('mapro')) extracted.pickup = 'Mapro Garden Area';
        else if (t.includes('bhose')) extracted.pickup = 'Bhose';
        else if (t.includes('bhilar')) extracted.pickup = 'Bhilar';
        else if (t.includes('kaswand')) extracted.pickup = 'Kaswand';
        else if (t.includes('wai')) extracted.pickup = 'Wai Town';
        else if (t.includes('pune')) extracted.pickup = 'Pune Pickup';
        else if (t.includes('mumbai')) extracted.pickup = 'Mumbai Pickup';

        // Knowledge Intent Flags
        extracted.isRateQuery = /rate|rates|price|pricing|cost|fare|fares|tariff|tariffs|charge|kitna|paisa|fees|how much/i.test(t);
        extracted.isAdvanceQuery = /advance|deposit|prepay|payment|pay in advance|advance policy|online pay|gpay|phonepe|cash|advance kitna/i.test(t);
        extracted.isVehicleQuery = /car|vehicle|cabs|taxi type|ac|non-ac|innova|ertiga|sedan|suv|hifi|luxury|dzire|which car|what car/i.test(t);
        extracted.isWaitingQuery = /waiting|extra time|delay|overtime|extra hour|wait charge|spending time|hold/i.test(t);
        extracted.isAreaQuery = /service area|village|pickup location|which area|where do you pick|coverage|doorstep|villages/i.test(t);
        extracted.isDriverQuery = /who will drive|driver|owner|contact circle|independent|how many taxi|1 taxi|one taxi|fleet|who drives/i.test(t);
        extracted.isBookingQuery = /how to book|booking process|confirm booking|procedure|step/i.test(t);

        // Tour Intent Scoring
        var scores = { T1: 0, T2: 0, T3: 0, T4: 0, T5: 0, T6: 0, T7: 0, TR_PUNE_APT: 0, TR_MUM_APT: 0 };

        // Full day / 1 day / complete trip
        if (t.includes('one day') || t.includes('1 day') || t.includes('full day') || t.includes('all sightseeing') || t.includes('cover everything') || t.includes('tour 7') || t.includes('combo')) {
            scores.T7 += 10;
        }

        // Fort / History / Shivaji Maharaj / Pratapgad
        if (t.includes('pratapgad') || t.includes('fort') || t.includes('shivaji') || t.includes('heritage') || t.includes('tour 3')) {
            scores.T3 += 10;
        }

        // Panchgani / Table Land / Caves
        if (t.includes('panchgani') || t.includes('table land') || t.includes('parsi point') || t.includes('bhilar') || t.includes('tour 4')) {
            scores.T4 += 8;
        }

        // Half day / 3 hours / Arthur Seat / temples
        if (t.includes('half day') || t.includes('3 hours') || t.includes('4 hours') || t.includes('arthur') || t.includes('temple') || t.includes('kate') || t.includes('viewpoint') || t.includes('darshan') || t.includes('tour 1')) {
            scores.T1 += 7;
        }

        // Waterfall / Sunset / Lingmala
        if (t.includes('waterfall') || t.includes('sunset') || t.includes('lingmala') || t.includes('bombay point') || t.includes('afternoon') || t.includes('venna') || t.includes('tour 2')) {
            scores.T2 += 8;
        }

        // Water sports / Tapola / Boating
        if (t.includes('tapola') || t.includes('water sport') || t.includes('boating') || t.includes('kashmir') || t.includes('tour 6')) {
            scores.T6 += 10;
        }

        // Wai / Dhom Dam / Ganpati
        if (t.includes('wai') || t.includes('dhom dam') || t.includes('ganpati') || t.includes('tour 5')) {
            scores.T5 += 10;
        }

        // Transfers
        if (t.includes('pune airport') || (t.includes('pune') && (t.includes('drop') || t.includes('pickup') || t.includes('transfer')))) {
            scores.TR_PUNE_APT += 10;
        }
        if (t.includes('mumbai airport') || (t.includes('mumbai') && (t.includes('drop') || t.includes('pickup') || t.includes('transfer')))) {
            scores.TR_MUM_APT += 10;
        }

        // Find highest score
        var bestId = null;
        var maxScore = 0;
        for (var k in scores) {
            if (scores[k] > maxScore) {
                maxScore = scores[k];
                bestId = k;
            }
        }

        if (maxScore >= 5) {
            extracted.tourId = bestId;
        }

        return extracted;
    }

    // ── 2. AI Decision & Response Formatter ────────────────────────────
    function generateAIResponse(userText) {
        var parsed = parseUserMessage(userText);
        
        // Update session memory
        if (parsed.date) collectedState.date = parsed.date;
        if (parsed.pax) collectedState.pax = parsed.pax;
        if (parsed.pickup) collectedState.pickup = parsed.pickup;
        if (parsed.tourId) collectedState.tourId = parsed.tourId;

        var db = window.TOUR_DATABASE;
        var recommendedTours = [];

        // ── INTENT 1: ZERO ADVANCE POLICY ──────────────────────────────
        if (parsed.isAdvanceQuery) {
            return {
                text: "✅ **Zero Advance Payment for Local Sightseeing!**<br><br>"
                    + "• For all local Mahabaleshwar and Panchgani tours, you pay **₹0 upfront** to confirm your cab.<br>"
                    + "• 100% of the union-approved fare is payable **directly to the driver** after completing your tour via Cash or UPI (GPay / PhonePe / Paytm).<br>"
                    + "• *(Note: Only outstation drops like Pune or Mumbai require a nominal fuel advance to dispatch the taxi).*<br><br>"
                    + "👉 Tap below to lock your date with zero advance:",
                cards: [db ? db.getTourById('T7') : null, db ? db.getTourById('T1') : null].filter(Boolean)
            };
        }

        // ── INTENT 2: VEHICLE & FLEET DETAILS (TRUE FACTS, NO FALSE CLAIMS)
        if (parsed.isVehicleQuery) {
            return {
                text: "🚗 **Clean Mountain-Tested Tourist Cabs (Honest Details):**<br><br>"
                    + "• **4-Seater Cabs for Local Sightseeing:** For local sightseeing circuits, official **4-seater tourist taxis** (Black & Yellow) are standard. Groups of 5 or more passengers are arranged with multiple 4-seater cabs (e.g. 2 cabs for 5 to 8 guests). For outstation trips (Pune / Mumbai drops), larger vehicles like Ertiga / Innova / Sedans are available on request, subject to availability.<br>"
                    + "• **Honest Details:** We arrange clean, road-tested tourist cabs from the Mahabaleshwar Taxi Union. **No false promises or hi-fi luxury claims.** These cabs are the standard approved for Sahyadri ghat inclines and viewpoint parking.<br>"
                    + "• **Local Drivers:** Driven by experienced local drivers familiar with Sahyadri mountain roads.<br><br>"
                    + "Would you like to book sightseeing for your family?",
                cards: [db ? db.getTourById('T1') : null, db ? db.getTourById('T7') : null].filter(Boolean)
            };
        }

        // ── INTENT 3: WAITING CHARGES AT VIEWPOINTS ────────────────────
        if (parsed.isWaitingQuery) {
            return {
                text: "⏱️ **Sightseeing Time & Waiting Policy:**<br><br>"
                    + "• Every tour package includes **generous halt time** at designated viewpoints (approx 45-60 mins at major points like Arthur's Seat or Table Land, and 20-30 mins at scenic viewpoints).<br>"
                    + "• Sufficient time is given to enjoy each viewpoint comfortably.<br>"
                    + "• If your family wishes to spend extra hours beyond the fixed tour duration, the union-approved waiting charge is approximately **₹120 to ₹130 per hour**.<br><br>"
                    + "Plan your tour with transparent union terms:",
                cards: [db ? db.getTourById('T1') : null, db ? db.getTourById('T3') : null].filter(Boolean)
            };
        }

        // ── INTENT 4: SERVICE AREAS & PICKUP COVERAGE ──────────────────
        if (parsed.isAreaQuery) {
            return {
                text: "📍 **Doorstep Hotel Pickup & Service Areas:**<br><br>"
                    + "• **Mahabaleshwar Town:** Standard union package fare applies for all hotels, resorts, and villas within town limits.<br>"
                    + "• **We also provide pickups across all 14 local villages:**<br>"
                    + "&bull; Panchgani &bull; Tapola &bull; Pratapgad &bull; Metgutad &bull; Bondarwadi &bull; Avkali &bull; Gureghar &bull; Mapro Garden &bull; Bhose &bull; Bhilar &bull; Kaswand &bull; Wai &bull; Satara.<br><br>"
                    + "*Note: For pickups outside Mahabaleshwar town limits, a nominal location distance charge applies, which is confirmed upfront with zero surprises.*",
                cards: [db ? db.getTourById('T7') : null, db ? db.getTourById('T4') : null].filter(Boolean)
            };
        }

        // ── INTENT 5: LOCAL NETWORK & DRIVER ARRANGEMENT ───────────────
        if (parsed.isDriverQuery) {
            return {
                text: "🤝 **Local Mahabaleshwar Taxi Union Network:**<br><br>"
                    + "• Registered tourist cabs are arranged from the Mahabaleshwar Taxi Union circle **as per vehicle availability** at official fixed union tariffs.<br>"
                    + "• **Important:** Confirm all tour and route details with the taxi driver before starting your sightseeing.<br>"
                    + "• Zero advance for local sightseeing. Official fixed union rates apply. Vehicle maintenance and on-road transit remain under the direct operational domain of the licensed driver/owner of the assigned cab.",
                cards: [db ? db.getTourById('T7') : null, db ? db.getTourById('T1') : null].filter(Boolean)
            };
        }

        // ── INTENT 6: HOW TO BOOK ──────────────────────────────────────
        if (parsed.isBookingQuery) {
            return {
                text: "📋 **Fast 10-Second Booking Process:**<br><br>"
                    + "1. Click **'Book This Tour'** on any package below.<br>"
                    + "2. Choose your travel date and type your hotel name.<br>"
                    + "3. Your Instant Digital Voucher is generated with Booking ID.<br>"
                    + "4. Click **'Send Confirmation on WhatsApp'** to lock your cab directly with the owner in 5 seconds. Zero advance required!",
                cards: [db ? db.getTourById('T7') : null, db ? db.getTourById('T1') : null].filter(Boolean)
            };
        }

        // ── INTENT 7: RATES & PRICING QUERY ────────────────────────────
        if (parsed.isRateQuery) {
            if (parsed.tourId && db) {
                var specTour = db.getTourById(parsed.tourId);
                if (specTour) {
                    return {
                        text: "💰 **Official Union Rate for " + specTour.name + ":**<br><br>"
                            + "• **Fixed Union Tariff:** <span style='font-size:1.15rem;font-weight:800;color:#16a34a;'>₹" + specTour.fare + "</span> (Non-negotiable union tariff)<br>"
                            + "• **Tour Duration:** " + specTour.duration + "<br>"
                            + "• **Advance Payment:** ₹0 (Zero advance &bull; Pay driver after tour)<br>"
                            + "• **Sightseeing Points:** " + (specTour.points ? specTour.points.slice(0, 5).join(', ') + '...' : '') + "<br><br>"
                            + "👉 Click below to book instantly:",
                        cards: [specTour]
                    };
                }
            }

            // General rate table
            return {
                text: "💰 **Official Mahabaleshwar Taxi Union Rate Card (Fixed & Transparent):**<br><br>"
                    + "• **Tour 1 (Mahabaleshwar Darshan):** ₹1,200 (17 Points &bull; 3.5 hrs)<br>"
                    + "• **Tour 2 (Waterfall & Sunset):** ₹1,200 (Lingmala & Mumbai Pt &bull; 2.5 hrs)<br>"
                    + "• **Tour 3 (Pratapgadh Darshan):** ₹1,600 (Historic Fort & Darshan &bull; 3.5 hrs)<br>"
                    + "• **Tour 4 (Panchgani Darshan):** ₹1,200 (Table Land & Parsi Pt &bull; 3.5 hrs)<br>"
                    + "• **Tour 5 (Wai Darshan):** ₹2,500 (Dhom Dam & Temples &bull; 5 hrs)<br>"
                    + "• **Tour 6 (Tapola Mini Kashmir):** ₹1,450 (Lake & Boating &bull; 4 hrs)<br>"
                    + "• **Tour 7 (Full Day Combo):** ₹3,000 (Mahabaleshwar + Panchgani Complete &bull; 7 hrs)<br><br>"
                    + "✅ *All rates are approved union tariffs. Zero advance required for Mahabaleshwar pickups.*",
                cards: [db ? db.getTourById('T7') : null, db ? db.getTourById('T1') : null, db ? db.getTourById('T3') : null].filter(Boolean)
            };
        }

        // ── DEFAULT: INTELLIGENT TOUR RECOMMENDATION ───────────────────
        if (!db) {
            return {
                text: "I am ready to help you plan your Mahabaleshwar taxi tour! Please let me know your travel date and preferred sightseeing circuit.",
                cards: []
            };
        }

        var rationale = "";

        if (collectedState.tourId) {
            var primary = db.getTourById(collectedState.tourId);
            if (primary) {
                recommendedTours.push(primary);
                if (primary.id === 'T7') {
                    rationale = "For maximum sightseeing in a single day, our **Full Day Combo (Tour 7 - ₹3,000)** is the highest-rated option. It connects Arthur\'s Seat viewpoints in Mahabaleshwar and Table Land in Panchgani seamlessly without backtracking.";
                } else if (primary.id === 'T1') {
                    rationale = "For classic viewpoints and sacred temples, **Mahabaleshwar Darshan (Tour 1 - ₹1,200)** is ideal. It covers 17 attractions including Arthur\'s Seat, Kate\'s Point, and Old Mahabaleshwar heritage temples in a relaxed 3.5 hours.";
                } else if (primary.id === 'T3') {
                    rationale = "For history and mountain fortress vistas, **Pratapgadh Darshan (Tour 3 - ₹1,600)** covers Chhatrapati Shivaji Maharaj\'s iconic fort, Bhavani Mata shrine, and valley vistas.";
                } else if (primary.id === 'T4') {
                    rationale = "For volcanic plateaus and panoramic views, **Panchgani Darshan (Tour 4 - ₹1,200)** covers Table Land, Parsi Point, Sydney Point, and Bhilar.";
                } else if (primary.id === 'T6') {
                    rationale = "For watersports and tranquil backwaters, **Tapola Darshan (Tour 6 - ₹1,450)** takes you through a 30km jungle ghat drive to Shivsagar Lake.";
                } else if (primary.id === 'T2') {
                    rationale = "For a scenic afternoon, **Tour 2 (Waterfall & Sunset - ₹1,200)** takes you to roaring Lingmala Waterfall and finishes with sunset at Bombay Point.";
                } else if (primary.id === 'T5') {
                    rationale = "For heritage and lake waters, **Wai Darshan (Tour 5 - ₹2,500)** covers Dhom Dam, Dholya Ganpati, and ancient riverside temples.";
                }
            }
        } else {
            recommendedTours.push(db.getTourById('T7') || db.tours[0]);
            recommendedTours.push(db.getTourById('T1') || db.tours[1]);
            rationale = "Namaste! Here are our two most popular union-approved tours. **Tour 7 (₹3,000)** gives complete 1-day coverage of Mahabaleshwar + Panchgani, while **Tour 1 (₹1,200)** covers the iconic cliff viewpoints and heritage temples.";
        }

        // Check missing details prompt
        var followUp = "";
        if (!collectedState.date) {
            followUp = "<br><br>📅 **What date are you planning to travel?** (Tap 'Book' below to select date)";
        } else if (!collectedState.pickup) {
            followUp = "<br><br>🏨 **Which hotel or resort will you stay at?** (Doorstep pickup included across Mahabaleshwar town).";
        }

        return {
            text: rationale + followUp,
            cards: recommendedTours
        };
    }

    // ── 3. Render Assistant UI ─────────────────────────────────────────
    function injectAssistantStyles() {
        if (document.getElementById('aryanAiStyles')) return;
        var s = document.createElement('style');
        s.id = 'aryanAiStyles';
        s.textContent = [
            '.aai-float-btn{position:fixed;bottom:90px;right:24px;z-index:9998;background:linear-gradient(135deg,#0891b2 0%,#1e3a5f 100%);color:#fff;border:none;border-radius:30px;padding:10px 16px;font-size:0.85rem;font-weight:700;display:flex;align-items:center;gap:8px;box-shadow:0 10px 25px -5px rgba(8,145,178,0.4);cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;font-family:system-ui,-apple-system,sans-serif;}',
            '@media(max-width:991px){.aai-float-btn,#aaiOpenBtn{display:none !important;visibility:hidden !important;opacity:0 !important;pointer-events:none !important;}}',
            '.aai-float-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -5px rgba(8,145,178,0.5);}',
            '.aai-drawer{display:none;position:fixed;bottom:0;left:0;right:0;max-width:500px;height:85vh;max-height:650px;background:#ffffff;border-radius:24px 24px 0 0;z-index:99999;box-shadow:0 -10px 40px rgba(0,0,0,0.3);flex-direction:column;overflow:hidden;border:1px solid #e2e8f0;font-family:system-ui,-apple-system,sans-serif;}',
            '@media(min-width:640px){.aai-drawer{bottom:20px;right:20px;left:auto;width:440px;border-radius:20px;height:630px;box-shadow:0 20px 50px rgba(0,0,0,0.25);}}',
            '.aai-backdrop{display:none;position:fixed;inset:0;background:rgba(15,23,42,0.6);z-index:99998;backdrop-filter:blur(2px);}',
            '.aai-header{background:linear-gradient(135deg,#0891b2 0%,#1e3a5f 100%);color:#ffffff;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;}',
            '.aai-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:#f8fafc;}',
            '.aai-bubble-bot{background:#ffffff;border:1px solid #e2e8f0;color:#1e293b;padding:12px 14px;border-radius:16px 16px 16px 4px;font-size:0.86rem;line-height:1.55;box-shadow:0 2px 4px rgba(0,0,0,0.03);max-width:94%;}',
            '.aai-bubble-user{background:#0891b2;color:#ffffff;padding:10px 14px;border-radius:16px 16px 4px 16px;font-size:0.86rem;line-height:1.4;align-self:flex-end;max-width:85%;}',
            '.aai-card{background:#ffffff;border:1.5px solid #0891b2;border-radius:14px;padding:14px;margin-top:8px;box-shadow:0 4px 12px rgba(8,145,178,0.08);}',
            '.aai-card-title{font-size:0.96rem;font-weight:800;color:#0f172a;margin:0 0 4px;}',
            '.aai-card-fare{font-size:1.2rem;font-weight:800;color:#16a34a;}',
            '.aai-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}',
            '.aai-chip{background:#e0f2fe;color:#0369a1;border:none;padding:5px 10px;border-radius:14px;font-size:0.75rem;font-weight:600;cursor:pointer;transition:background 0.15s;}',
            '.aai-chip:hover{background:#bae6fd;}',
            '.aai-book-btn{width:100%;margin-top:10px;padding:10px;background:#10b981;color:#ffffff;border:none;border-radius:10px;font-weight:700;font-size:0.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:background 0.15s;}',
            '.aai-book-btn:hover{background:#059669;}',
            '.aai-footer{padding:12px;background:#ffffff;border-top:1px solid #e2e8f0;display:flex;gap:8px;align-items:center;}',
            '.aai-input{flex:1;padding:10px 14px;border:1.5px solid #cbd5e1;border-radius:24px;font-size:0.88rem;outline:none;}',
            '.aai-input:focus{border-color:#0891b2;}',
            '.aai-send-btn{background:#0891b2;color:#ffffff;border:none;width:38px;height:38px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;}'
        ].join('');
        document.head.appendChild(s);
    }

    function injectAssistantDOM() {
        if (document.getElementById('aaiDrawer')) return;

        // Floating Trigger
        var btn = document.createElement('button');
        btn.className = 'aai-float-btn';
        btn.id = 'aaiOpenBtn';
        btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles" style="color:#fbbf24"></i> Ask Aryan AI';
        btn.setAttribute('aria-label', 'Open AI Trip Assistant');
        document.body.appendChild(btn);

        // Backdrop & Drawer
        var html = '<div id="aaiBackdrop" class="aai-backdrop"></div>'
            + '<div id="aaiDrawer" class="aai-drawer" role="dialog" aria-label="Aryan AI Trip Assistant">'
            + '<div class="aai-header">'
            + '<div style="display:flex;align-items:center;gap:8px;">'
            + '<i class="fa-solid fa-wand-magic-sparkles" style="color:#fbbf24;font-size:1.2rem;"></i>'
            + '<div><strong style="font-size:0.95rem;display:block;">Ask Aryan AI</strong><span style="font-size:0.75rem;opacity:0.85;">Official Taxi &amp; Sightseeing Assistant</span></div>'
            + '</div>'
            + '<button id="aaiCloseBtn" style="background:none;border:none;color:#ffffff;font-size:1.5rem;cursor:pointer;padding:4px 8px;">&times;</button>'
            + '</div>'

            + '<div id="aaiBody" class="aai-body">'
            + '<div class="aai-bubble-bot">'
            + 'Namaste! 🙏 I am <strong>Ask Aryan AI</strong>, your local Mahabaleshwar taxi assistant. Ask me anything about sightseeing tours, official union rates, vehicle details, or pickup points. Or tap a quick question below:'
            + '<div class="aai-chips">'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'What are the official taxi rates?\')">💰 Official Rate Card</button>'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'Do I need to pay advance?\')">💳 Zero Advance Policy</button>'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'What type of taxi or car do you provide?\')">🚗 Cabs &amp; Vehicle Details</button>'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'What are waiting charges at viewpoints?\')">⏱️ Waiting Charges</button>'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'Do you pick up from hotels and villages?\')">🏨 Hotel Pickup Coverage</button>'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'I want full day Mahabaleshwar and Panchgani tour\')">⭐ Full Day Combo (Tour 7)</button>'
            + '<button class="aai-chip" onclick="window.AryanAI.sendChip(\'Pratapgad Fort taxi rate and details\')">🏰 Pratapgad Fort (Tour 3)</button>'
            + '</div>'
            + '</div>'
            + '</div>'

            + '<form id="aaiForm" class="aai-footer">'
            + '<input type="text" id="aaiInput" class="aai-input" placeholder="Type trip question (e.g. rate, advance, car)..." autocomplete="off">'
            + '<button type="submit" class="aai-send-btn" aria-label="Send"><i class="fa-solid fa-paper-plane"></i></button>'
            + '</form>'
            + '</div>';

        document.body.insertAdjacentHTML('beforeend', html);

        // Event listeners
        var openBtn = document.getElementById('aaiOpenBtn');
        var closeBtn = document.getElementById('aaiCloseBtn');
        var backdrop = document.getElementById('aaiBackdrop');
        var drawer = document.getElementById('aaiDrawer');
        var form = document.getElementById('aaiForm');
        var input = document.getElementById('aaiInput');

        function toggleAssistant(open) {
            drawer.style.display = open ? 'flex' : 'none';
            backdrop.style.display = open ? 'block' : 'none';
            if (open) input.focus();
        }

        if (openBtn) openBtn.addEventListener('click', function () { toggleAssistant(true); });
        if (closeBtn) closeBtn.addEventListener('click', function () { toggleAssistant(false); });
        if (backdrop) backdrop.addEventListener('click', function () { toggleAssistant(false); });

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                var txt = input.value.trim();
                if (!txt) return;
                input.value = '';
                handleUserChat(txt);
            });
        }
    }

    function handleUserChat(userText) {
        var body = document.getElementById('aaiBody');
        if (!body) return;

        // Add user bubble
        var uEl = document.createElement('div');
        uEl.className = 'aai-bubble-user';
        uEl.textContent = userText;
        body.appendChild(uEl);
        body.scrollTop = body.scrollHeight;

        // Generate bot reply
        setTimeout(function () {
            var reply = generateAIResponse(userText);
            var bEl = document.createElement('div');
            bEl.className = 'aai-bubble-bot';

            var cleanText = reply.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            bEl.innerHTML = cleanText;

            // Render tour cards if any
            if (reply.cards && reply.cards.length) {
                reply.cards.forEach(function (t) {
                    var card = document.createElement('div');
                    card.className = 'aai-card';
                    var pList = (t.points || []).slice(0, 4).join(', ') + '...';
                    card.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;">'
                        + '<h4 class="aai-card-title">' + t.name + '</h4>'
                        + '<span class="aai-card-fare">₹' + t.fare + '</span>'
                        + '</div>'
                        + '<div style="font-size:0.78rem;color:#64748b;margin-bottom:6px;">⏱️ ' + t.duration + ' &bull; Zero Advance &bull; Official Fixed Fare</div>'
                        + '<div style="font-size:0.76rem;color:#334155;line-height:1.4;"><strong>Top Points:</strong> ' + pList + '</div>'
                        + '<button type="button" class="aai-book-btn" onclick="window.AryanAI.bookTour(\'' + t.id + '\')"><i class="fa-solid fa-calendar-check"></i> Book This Tour (' + (collectedState.date || 'Pick Date') + ')</button>';
                    bEl.appendChild(card);
                });
            }

            body.appendChild(bEl);
            body.scrollTop = body.scrollHeight;
        }, 250);
    }

    // ── 4. Public API ────────────────────────────────────────────────
    window.AryanAI = {
        open: function () {
            var drawer = document.getElementById('aaiDrawer');
            var backdrop = document.getElementById('aaiBackdrop');
            if (drawer) drawer.style.display = 'flex';
            if (backdrop) backdrop.style.display = 'block';
        },
        close: function () {
            var drawer = document.getElementById('aaiDrawer');
            var backdrop = document.getElementById('aaiBackdrop');
            if (drawer) drawer.style.display = 'none';
            if (backdrop) backdrop.style.display = 'none';
        },
        sendChip: function (text) {
            handleUserChat(text);
        },
        bookTour: function (tourId) {
            window.AryanAI.close();
            if (window.openBookingModal) {
                window.openBookingModal(tourId);
                // Pre-populate known session details
                setTimeout(function () {
                    var dEl = document.getElementById('amtDate') || document.getElementById('aib_date');
                    if (collectedState.date && dEl) {
                        dEl.value = collectedState.date;
                        dEl.dispatchEvent(new Event('change'));
                    }
                    var pEl = document.getElementById('amtPax') || document.getElementById('aib_pax');
                    if (collectedState.pax && pEl) {
                        pEl.value = collectedState.pax;
                        pEl.dispatchEvent(new Event('change'));
                    }
                    var locEl = document.getElementById('amtPickup') || document.getElementById('aib_pickup');
                    if (collectedState.pickup && locEl) {
                        locEl.value = collectedState.pickup;
                        locEl.dispatchEvent(new Event('input'));
                    }
                }, 150);
            }
        }
    };

    function init() {
        injectAssistantStyles();
        injectAssistantDOM();
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

})();
