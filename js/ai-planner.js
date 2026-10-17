/**
 * ARYAN TAXI MAHABALESHWAR — AI Trip Itinerary Generator (v2.0)
 * World-Class Interactive Trip Planner powered by central window.TOUR_DATABASE
 * Zero-Hallucination, 100% Verified Union & Direct Tariffs
 * Fully supports:
 *  - Express Single Tours (Tour 01, Tour 02, Tour 03 @ ₹800)
 *  - Official Sightseeing Packages (T1 ₹1,200, T2 ₹1,200, T3 ₹1,600, T4 ₹1,200, T5 ₹2,500, T6 ₹1,450, T7 ₹3,000)
 *  - Multi-Day Itineraries (Half-Day, 1-Day, 2-Day, 3-Day, 4-Day)
 *  - Interactive Tour Swapping / Real-Time Recalculation
 *  - Direct WhatsApp Pre-filled Itinerary & Online Booking Modal Integration
 */

(function () {
    'use strict';

    var currentPlan = null;
    var allTourOptions = [
        { id: 'M1', label: 'Tour 01: Arthur Seat Circuit (2.5h • ₹800)' },
        { id: 'M2', label: 'Tour 02: Kate\'s Point & Strawberry (2.5h • ₹800)' },
        { id: 'M3', label: 'Tour 03: Wilson Point & Lingmala (2.5h • ₹800)' },
        { id: 'T1', label: 'Tour 1: Mahabaleshwar Darshan (3.5h • ₹1,200)' },
        { id: 'T2', label: 'Tour 2: Waterfall & Sunset (3.5h • ₹1,200)' },
        { id: 'T3', label: 'Tour 3: Pratapgadh Darshan (3.5h • ₹1,600)' },
        { id: 'T4', label: 'Tour 4: Panchgani Darshan (3h • ₹1,200)' },
        { id: 'T5', label: 'Tour 5: Wai Darshan (6h • ₹2,500)' },
        { id: 'T6', label: 'Tour 6: Tapola Mini Kashmir (3.5h • ₹1,450)' },
        { id: 'T7', label: 'Tour 7: Full Day Combo (8-9h • ₹3,000)' }
    ];

    var driverTips = {
        'M1': 'Start by 09:30 AM to experience the sacred Panchganga Temple and clear clifftop views at Arthur\'s Seat before midday haze.',
        'M2': 'Enjoy sweeping views of the Kamalgadh valley from Kate\'s Point, the natural rock Elephant Head, and seasonal strawberry gardens.',
        'M3': 'Wilson Point is Mahabaleshwar\'s highest plateau (1,439m) — great for morning panoramas, followed by roaring Lingmala Waterfall and quiet Venna Lake.',
        'T1': 'Our most popular union package covering 17 points! Ideal balance of holy Kshetra Mahabaleshwar temples and dramatic clifftop lookouts.',
        'T2': 'Ideal afternoon tour finishing with sunset at Bombay Point. Lingmala Waterfall is majestic and great for photography.',
        'T3': 'Historic 1656 hill fortress of Chhatrapati Shivaji Maharaj. Wear comfortable footwear for the 450 stone steps; guides available at base.',
        'T4': 'Volcanic table land in Panchgani. Great for families and kids — scenic cave walks, horse riding, and breezy Parsi Point overlooking Dhom Dam.',
        'T5': 'Comprehensive 6-hour cultural circuit to the historic Krishna river ghats, ancient Hemadpanthi temples, Menavli Nana Phadnavis Wada, and Dhom Dam.',
        'T6': 'Known as Mini Kashmir! A scenic 30km jungle ghat ride to Shivsagar Lake for exciting speedboating and peaceful water sports.',
        'T7': 'The premier 1-day combo! Covers Arthur\'s Seat in Mahabaleshwar and Table Land in Panchgani seamlessly without backtracking.'
    };

    document.addEventListener('DOMContentLoaded', function () {
        initPlanner();
    });

    function initPlanner() {
        var form = document.getElementById('ai-planner-form');
        var initial = document.getElementById('ai-initial');
        var loader = document.getElementById('ai-loader');
        var result = document.getElementById('ai-result');

        if (!form) return;

        // Auto-detect date default if date input exists
        var dateInput = document.getElementById('ai-date');
        if (dateInput && !dateInput.value) {
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = new Date().toISOString().split('T')[0];
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }

        // Form submission
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var daysVal = document.getElementById('ai-days') ? document.getElementById('ai-days').value : '2';
            var days = parseFloat(daysVal);
            var theme = document.getElementById('ai-theme') ? document.getElementById('ai-theme').value : 'all';
            var group = document.getElementById('ai-group') ? document.getElementById('ai-group').value : 'family';
            var pace = document.getElementById('ai-pace') ? document.getElementById('ai-pace').value : 'relaxed';
            var pickup = document.getElementById('ai-pickup') ? document.getElementById('ai-pickup').value : 'Mahabaleshwar Town';
            var travelDate = dateInput ? dateInput.value : '';

            if (initial) initial.style.display = 'none';
            if (result) result.style.display = 'none';
            if (loader) {
                loader.style.display = 'flex';
                loader.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            setTimeout(function () {
                currentPlan = buildCustomPlan(days, theme, group, pace, pickup, travelDate);
                renderPlan(currentPlan);
                if (loader) loader.style.display = 'none';
                if (result) {
                    result.style.display = 'block';
                    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 450);
        });

        // Auto-run if URL contains ?plan=... or if user arrives from another page
        var params = new URLSearchParams(window.location.search);
        if (params.get('days') || params.get('theme')) {
            if (params.get('days') && document.getElementById('ai-days')) {
                document.getElementById('ai-days').value = params.get('days');
            }
            if (params.get('theme') && document.getElementById('ai-theme')) {
                document.getElementById('ai-theme').value = params.get('theme');
            }
            form.dispatchEvent(new Event('submit'));
        }
    }

    /**
     * Core Algorithm: Generates optimal day-by-day plan strictly based on TOUR_DATABASE
     */
    function buildCustomPlan(days, theme, group, pace, pickup, travelDate) {
        var db = window.TOUR_DATABASE;
        var items = [];
        var total = 0;

        // Fallback safety if database is not loaded
        if (!db) {
            return { items: [], totalPrice: 0, days: days, theme: theme, group: group, pace: pace, pickup: pickup, travelDate: travelDate };
        }

        // ════════════════════════════════════════════════════════════════════
        // CASE A: HALF-DAY / EXPRESS (0.5 Days — 2.5 to 3.5 Hours)
        // Strictly highlights Express Single Tours (₹800) or Single Packages
        // ════════════════════════════════════════════════════════════════════
        if (days === 0.5) {
            if (theme === 'plateau_strawberry') {
                var tourM2 = db.getTourById('M2') || db.getTourById('T4');
                items.push({
                    day: 1,
                    timeSlot: 'Morning (10:00 AM – 12:30 PM) or Afternoon (02:30 PM – 05:00 PM)',
                    title: 'Kate\'s Point, Elephant Head & Strawberry Express',
                    tour: tourM2,
                    customizable: true
                });
            } else if (theme === 'nature_viewpoints') {
                var tourM3 = db.getTourById('M3') || db.getTourById('T2');
                items.push({
                    day: 1,
                    timeSlot: 'Morning (06:30 AM Sunrise) or Afternoon (03:00 PM Sunset)',
                    title: 'Wilson Point, Waterfall & Venna Lake Express',
                    tour: tourM3,
                    customizable: true
                });
            } else if (theme === 'history_forts') {
                var tourT3 = db.getTourById('T3');
                items.push({
                    day: 1,
                    timeSlot: 'Morning Departure (09:00 AM – 01:00 PM)',
                    title: 'Pratapgad Fort Heritage Expedition',
                    tour: tourT3,
                    customizable: true
                });
            } else if (theme === 'lakes_adventure') {
                var tourT6 = db.getTourById('T6');
                items.push({
                    day: 1,
                    timeSlot: 'Morning Departure (09:30 AM – 01:30 PM)',
                    title: 'Tapola Mini Kashmir & Shivsagar Boating',
                    tour: tourT6,
                    customizable: true
                });
            } else {
                // Default / budget_express / fast pace: Tour 01 (M1 - ₹800)
                var tourM1 = db.getTourById('M1') || db.getTourById('T1');
                items.push({
                    day: 1,
                    timeSlot: 'Morning (09:00 AM – 12:00 PM) or Afternoon (02:00 PM – 05:00 PM)',
                    title: 'Arthur Seat Clifftops Express Circuit',
                    tour: tourM1,
                    customizable: true
                });
            }
        }

        // ════════════════════════════════════════════════════════════════════
        // CASE B: 1 FULL DAY (8 to 9 Hours)
        // ════════════════════════════════════════════════════════════════════
        else if (days === 1) {
            if (theme === 'budget_express') {
                // Two budget express circuits combined!
                var m1 = db.getTourById('M1');
                var m2 = db.getTourById('M2');
                items.push({
                    day: 1,
                    timeSlot: 'Morning Session (09:00 AM – 12:00 PM)',
                    title: 'Session 1: Arthur Seat Clifftop Heritage',
                    tour: m1,
                    customizable: true
                });
                items.push({
                    day: 1,
                    timeSlot: 'Afternoon Session (02:30 PM – 05:30 PM)',
                    title: 'Session 2: Kate\'s Point, Echo Point & Strawberry Garden',
                    tour: m2,
                    customizable: true
                });
            } else if (theme === 'history_forts') {
                var t1 = db.getTourById('T1');
                var t3 = db.getTourById('T3');
                items.push({
                    day: 1,
                    timeSlot: 'Morning (09:00 AM – 12:30 PM)',
                    title: 'Mahabaleshwar Clifftops & Sacred Temples',
                    tour: t1,
                    customizable: true
                });
                items.push({
                    day: 1,
                    timeSlot: 'Afternoon (02:00 PM – 06:00 PM)',
                    title: 'Pratapgad Fort Heritage & Mountain Vista',
                    tour: t3,
                    customizable: true
                });
            } else if (theme === 'lakes_adventure') {
                var t2 = db.getTourById('T2');
                var t6 = db.getTourById('T6');
                items.push({
                    day: 1,
                    timeSlot: 'Morning (09:00 AM – 12:30 PM)',
                    title: 'Lingmala Waterfall & Venna Lake',
                    tour: t2,
                    customizable: true
                });
                items.push({
                    day: 1,
                    timeSlot: 'Afternoon (01:30 PM – 05:30 PM)',
                    title: 'Tapola Mini Kashmir Speedboating & Lake Cruise',
                    tour: t6,
                    customizable: true
                });
            } else {
                // Grand 1-Day Full Day Tour 7
                var t7 = db.getTourById('T7');
                items.push({
                    day: 1,
                    timeSlot: 'Full Day (09:00 AM – 06:00 PM)',
                    title: 'Grand Mahabaleshwar & Panchgani Complete Combo',
                    tour: t7,
                    customizable: true
                });
            }
        }

        // ════════════════════════════════════════════════════════════════════
        // CASE C: 2 DAYS (The Classic Weekend Escape)
        // ════════════════════════════════════════════════════════════════════
        else if (days === 2) {
            if (theme === 'budget_express') {
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 Morning (09:30 AM – 12:30 PM)',
                    title: 'Arthur Seat Circuit & Kshetra Temples',
                    tour: db.getTourById('M1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 Morning (09:30 AM – 12:30 PM)',
                    title: 'Wilson Point, Lingmala Waterfall & Venna Lake',
                    tour: db.getTourById('M3'),
                    customizable: true
                });
            } else if (theme === 'history_forts' || group === 'family') {
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 (09:30 AM – 01:00 PM)',
                    title: 'Classic Mahabaleshwar Darshan & Clifftop Viewpoints',
                    tour: db.getTourById('T1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 (09:00 AM – 01:00 PM)',
                    title: 'Pratapgad Fort Heritage Expedition',
                    tour: db.getTourById('T3'),
                    customizable: true
                });
            } else if (theme === 'lakes_adventure' || group === 'couple') {
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 (09:30 AM – 01:00 PM)',
                    title: 'Mahabaleshwar Darshan & Cliff Lookouts',
                    tour: db.getTourById('T1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 (09:30 AM – 01:30 PM)',
                    title: 'Tapola Mini Kashmir Backwaters & Speedboating',
                    tour: db.getTourById('T6'),
                    customizable: true
                });
            } else if (theme === 'temples_culture') {
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 (09:30 AM – 01:00 PM)',
                    title: 'Sacred Temples & Clifftop Lookouts',
                    tour: db.getTourById('T1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 (09:00 AM – 03:00 PM)',
                    title: 'Historic Wai Temples, Krishna Ghats & Dhom Dam',
                    tour: db.getTourById('T5'),
                    customizable: true
                });
            } else {
                // Default 2-Day: Tour 1 + Tour 4
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 (09:30 AM – 01:00 PM)',
                    title: 'Mahabaleshwar Darshan & Arthur Seat Circuit',
                    tour: db.getTourById('T1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 (09:30 AM – 01:00 PM)',
                    title: 'Panchgani Table Land, Caves & Parsi Point',
                    tour: db.getTourById('T4'),
                    customizable: true
                });
            }
        }

        // ════════════════════════════════════════════════════════════════════
        // CASE D: 3 DAYS (In-Depth Discovery)
        // ════════════════════════════════════════════════════════════════════
        else if (days === 3) {
            if (theme === 'budget_express') {
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 (09:30 AM – 12:00 PM)',
                    title: 'Express Tour 01: Arthur Seat Circuit',
                    tour: db.getTourById('M1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 (09:30 AM – 12:00 PM)',
                    title: 'Express Tour 02: Kate\'s Point & Strawberry Farm',
                    tour: db.getTourById('M2'),
                    customizable: true
                });
                items.push({
                    day: 3,
                    timeSlot: 'Day 3 (09:30 AM – 12:00 PM)',
                    title: 'Express Tour 03: Wilson Point & Lingmala Waterfall',
                    tour: db.getTourById('M3'),
                    customizable: true
                });
            } else {
                items.push({
                    day: 1,
                    timeSlot: 'Day 1 (09:30 AM – 01:00 PM)',
                    title: 'Mahabaleshwar Darshan & Ancient Temples',
                    tour: db.getTourById('T1'),
                    customizable: true
                });
                items.push({
                    day: 2,
                    timeSlot: 'Day 2 (09:30 AM – 01:00 PM)',
                    title: 'Panchgani Plateau, Table Land Caves & Parsi Point',
                    tour: db.getTourById('T4'),
                    customizable: true
                });
                if (theme === 'temples_culture') {
                    items.push({
                        day: 3,
                        timeSlot: 'Day 3 (09:00 AM – 03:00 PM)',
                        title: 'Wai Darshan, Holy Temples & Dhom Dam',
                        tour: db.getTourById('T5'),
                        customizable: true
                    });
                } else if (theme === 'lakes_adventure') {
                    items.push({
                        day: 3,
                        timeSlot: 'Day 3 (09:30 AM – 01:30 PM)',
                        title: 'Tapola Mini Kashmir Backwaters & Water Sports',
                        tour: db.getTourById('T6'),
                        customizable: true
                    });
                } else {
                    items.push({
                        day: 3,
                        timeSlot: 'Day 3 (09:00 AM – 01:00 PM)',
                        title: 'Pratapgad Fort Heritage & Maratha History',
                        tour: db.getTourById('T3'),
                        customizable: true
                    });
                }
            }
        }

        // ════════════════════════════════════════════════════════════════════
        // CASE E: 4 DAYS (The Grand Sahyadri Odyssey)
        // ════════════════════════════════════════════════════════════════════
        else {
            items.push({
                day: 1,
                timeSlot: 'Day 1 (09:30 AM – 01:00 PM)',
                title: 'Mahabaleshwar Darshan & Arthur Seat Clifftops',
                tour: db.getTourById('T1'),
                customizable: true
            });
            items.push({
                day: 2,
                timeSlot: 'Day 2 (09:30 AM – 01:00 PM)',
                title: 'Panchgani Plateau, Table Land & Strawberry Farms',
                tour: db.getTourById('T4'),
                customizable: true
            });
            items.push({
                day: 3,
                timeSlot: 'Day 3 (09:00 AM – 01:00 PM)',
                title: 'Pratapgad Fort Heritage & Historic Battle Site',
                tour: db.getTourById('T3'),
                customizable: true
            });
            items.push({
                day: 4,
                timeSlot: 'Day 4 (09:00 AM – 03:00 PM)',
                title: 'Cultural Wai Darshan, Dhom Dam & Nana Phadnavis Wada',
                tour: db.getTourById('T5'),
                customizable: true
            });
        }

        // Calculate total
        items.forEach(function (it) {
            if (it.tour && typeof it.tour.fare === 'number') {
                total += it.tour.fare;
            }
        });

        return {
            days: days,
            theme: theme,
            group: group,
            pace: pace,
            pickup: pickup,
            travelDate: travelDate,
            items: items,
            totalPrice: total
        };
    }

    /**
     * Renders the generated plan with high-end UI/UX cards, interactive dropdowns, and dual booking CTAs
     */
    function renderPlan(plan) {
        var container = document.getElementById('ai-itinerary-container');
        var totalPriceEl = document.getElementById('ai-total-price');
        var metaSummaryEl = document.getElementById('ai-meta-summary');

        if (totalPriceEl) {
            totalPriceEl.textContent = '₹' + plan.totalPrice.toLocaleString('en-IN');
        }

        if (metaSummaryEl) {
            var dayLabel = plan.days === 0.5 ? 'Half Day Express' : (plan.days + ' Days Circuit');
            metaSummaryEl.textContent = dayLabel + ' • ' + plan.items.length + ' Sightseeing Sessions • Private 4-Seater Cab';
        }

        if (!container) return;

        var html = '';

        plan.items.forEach(function (item, index) {
            var t = item.tour;
            if (!t) return;

            var isExpress = (t.id === 'M1' || t.id === 'M2' || t.id === 'M3');
            var badgeClass = isExpress ? 'amt-badge-express' : 'amt-badge-union';
            var badgeText = isExpress ? 'Express Single Tour • ₹800' : ('Official Union Tour ' + (t.tour_no || ''));

            var pointsHtml = (t.points || []).map(function (p) {
                return '<span class="ai-point-tag"><i class="fa-solid fa-location-dot"></i> ' + escapeHtml(p) + '</span>';
            }).join('');

            // Build Options Dropdown for In-Place Tour Swapping
            var swapOptions = allTourOptions.map(function (opt) {
                var selected = (opt.id === t.id) ? ' selected' : '';
                return '<option value="' + opt.id + '"' + selected + '>' + opt.label + '</option>';
            }).join('');

            var tip = driverTips[t.id] || 'Confirm sightseeing sequence with your local driver for the best sunlight and clear mountain views.';

            html += '<div class="ai-day-card" data-day-index="' + index + '">'
                + '<div class="ai-day-card__header">'
                + '  <div class="ai-day-card__meta">'
                + '    <span class="ai-day-pill">DAY ' + item.day + '</span>'
                + '    <span class="ai-tour-badge ' + badgeClass + '">' + badgeText + '</span>'
                + '  </div>'
                + '  <div class="ai-day-card__price">₹' + t.fare.toLocaleString('en-IN') + '</div>'
                + '</div>'

                + '<div class="ai-day-card__body">'
                + '  <div class="ai-day-time"><i class="fa-regular fa-clock"></i> ' + escapeHtml(item.timeSlot) + ' (' + t.duration + ')</div>'
                + '  <h3 class="ai-day-title">' + escapeHtml(item.title) + '</h3>'
                + '  <div class="ai-tour-name-row">'
                + '    <span class="ai-tour-selected">Selected Cab Tour: <strong>' + escapeHtml(t.name) + '</strong></span>'
                + '  </div>'
                + '  <div class="ai-points-wrap">' + pointsHtml + '</div>'

                + '  <div class="ai-driver-tip">'
                + '    <i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> '
                + '    <span><strong>Driver Tip:</strong> ' + escapeHtml(tip) + '</span>'
                + '  </div>'

                // Interactive Swap Selector
                + '  <div class="ai-swap-wrap">'
                + '    <label class="ai-swap-label"><i class="fa-solid fa-arrow-right-arrow-left"></i> Customize This Day\'s Tour:</label>'
                + '    <select class="ai-swap-select" onchange="window.aiPlannerSwapTour(' + index + ', this.value)">'
                +        swapOptions
                + '    </select>'
                + '  </div>'
                + '</div>'
                + '</div>';
        });

        // Add Booking Actions Panel below Itinerary
        html += '<div class="ai-actions-panel">'
            + '  <div class="ai-actions-summary">'
            + '    <div class="ai-actions-title"><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> 100% Transparent Union Pricing Guarantee</div>'
            + '    <p class="ai-actions-sub">Zero advance payment required for Mahabaleshwar pickups. Official Union tourist cabs driven by verified local drivers. Pay directly to the driver after trip completion.</p>'
            + '  </div>'
            + '  <div class="ai-actions-buttons">'
            + '    <button type="button" class="btn btn--whatsapp btn--lg ai-btn-wa" onclick="window.aiPlannerBookWhatsApp()">'
            + '      <i class="fa-brands fa-whatsapp"></i> Book This Plan on WhatsApp (Fastest)'
            + '    </button>'
            + '    <button type="button" class="btn btn--outline btn--lg ai-btn-online" onclick="window.aiPlannerBookOnline()">'
            + '      <i class="fa-solid fa-calendar-check"></i> Book Online with Digital Voucher'
            + '    </button>'
            + '    <button type="button" class="btn btn--ghost ai-btn-copy" onclick="window.aiPlannerCopyItinerary()">'
            + '      <i class="fa-regular fa-copy"></i> Copy Itinerary to Share'
            + '    </button>'
            + '  </div>'
            + '</div>';

        container.innerHTML = html;

        // Sync header book button
        var topBookBtn = document.getElementById('ai-book-btn');
        if (topBookBtn) {
            topBookBtn.onclick = function () {
                window.aiPlannerBookWhatsApp();
            };
        }
    }

    /**
     * Swaps a specific day's tour in real-time and recalculates the plan
     */
    window.aiPlannerSwapTour = function (index, newTourId) {
        if (!currentPlan || !currentPlan.items[index]) return;
        var db = window.TOUR_DATABASE;
        if (!db) return;

        var newTour = db.getTourById(newTourId);
        if (!newTour) return;

        currentPlan.items[index].tour = newTour;
        currentPlan.items[index].title = newTour.name;

        // Recalculate total price
        var newTotal = 0;
        currentPlan.items.forEach(function (it) {
            if (it.tour && typeof it.tour.fare === 'number') {
                newTotal += it.tour.fare;
            }
        });
        currentPlan.totalPrice = newTotal;

        // Re-render
        renderPlan(currentPlan);
    };

    /**
     * Generates a beautifully formatted WhatsApp booking message
     */
    window.aiPlannerBookWhatsApp = function () {
        if (!currentPlan) return;
        var p = currentPlan;
        var phone = '919922882044';

        var msg = "Hello Aryan Taxi Mahabaleshwar 👋\n"
            + "Explore Sahyadri • Custom AI Itinerary Booking Request\n\n"
            + "📋 *My Custom Sightseeing Itinerary:*\n";

        p.items.forEach(function (it, idx) {
            var t = it.tour;
            msg += "• Day " + it.day + ": *" + t.name + "* (" + t.duration + ") — ₹" + t.fare + "\n";
        });

        msg += "\n💰 *Total Smart Estimate:* ₹" + p.totalPrice.toLocaleString('en-IN') + "\n"
            + "🚗 *Vehicle:* Private 4-Seater Tourist Cab\n"
            + "👥 *Group:* " + capitalize(p.group) + " • " + capitalize(p.pace) + " Pace\n";

        if (p.travelDate) {
            msg += "📅 *Travel Date:* " + p.travelDate + "\n";
        } else {
            msg += "📅 *Travel Date:* [Please enter travel date]\n";
        }

        if (p.pickup && p.pickup !== 'Mahabaleshwar Town') {
            msg += "🏨 *Pickup Location:* " + p.pickup + "\n";
        } else {
            msg += "🏨 *Pickup Hotel:* [Please enter hotel name]\n";
        }

        msg += "\n✅ *Official Union Rate accepted. Pay driver directly after trip.*\n"
            + "👉 *Please confirm cab availability.*";

        var waUrl = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(msg);
        window.open(waUrl, '_blank');
    };

    /**
     * Launches the 5-step interactive booking modal pre-loaded with the primary tour
     */
    window.aiPlannerBookOnline = function () {
        if (!currentPlan || !currentPlan.items[0]) return;
        var firstTour = currentPlan.items[0].tour;
        var tourHint = firstTour ? firstTour.id : 'T1';

        if (typeof window.openBookingModal === 'function') {
            window.openBookingModal(tourHint);
        } else {
            window.location.href = 'booking.html?tour=' + encodeURIComponent(tourHint);
        }
    };

    /**
     * Copies the itinerary text cleanly to the user's clipboard
     */
    window.aiPlannerCopyItinerary = function () {
        if (!currentPlan) return;
        var p = currentPlan;

        var text = "🚖 Aryan Taxi Mahabaleshwar — Custom Sightseeing Plan\n"
            + "Duration: " + (p.days === 0.5 ? 'Half Day Express' : (p.days + ' Days')) + "\n"
            + "Total Estimate: ₹" + p.totalPrice.toLocaleString('en-IN') + " (Union Fixed Tariff)\n\n";

        p.items.forEach(function (it) {
            var t = it.tour;
            text += "DAY " + it.day + ": " + t.name + " (" + t.duration + " • ₹" + t.fare + ")\n"
                + "Points: " + (t.points || []).join(', ') + "\n\n";
        });

        text += "Official Union Rates • Zero Advance Payment • Direct Driver: +91 99228 82044\n"
            + "Book online at: https://sunildanawale.github.io/Mahabaleshwartaxi/ai-trip-planner.html";

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                showToast("Itinerary copied to clipboard! Share on WhatsApp.");
            });
        } else {
            // Fallback for older browsers
            var ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast("Itinerary copied to clipboard! Share on WhatsApp.");
        }
    };

    function showToast(msg) {
        var existing = document.getElementById('ai-toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.id = 'ai-toast';
        toast.className = 'ai-toast';
        toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + escapeHtml(msg);
        document.body.appendChild(toast);

        setTimeout(function () {
            toast.classList.add('ai-toast--visible');
        }, 10);

        setTimeout(function () {
            toast.classList.remove('ai-toast--visible');
            setTimeout(function () { toast.remove(); }, 300);
        }, 3200);
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
})();
