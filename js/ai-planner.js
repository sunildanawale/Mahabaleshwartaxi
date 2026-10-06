/**
 * ARYAN TAXI MAHABALESHWAR — AI Trip Itinerary Generator
 * Strictly powered by central window.TOUR_DATABASE
 * Zero-Hallucination & Accurate Union Fares
 */

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('ai-planner-form');
    var initial = document.getElementById('ai-initial');
    var loader = document.getElementById('ai-loader');
    var result = document.getElementById('ai-result');
    var container = document.getElementById('ai-itinerary-container');
    var totalPriceEl = document.getElementById('ai-total-price');
    var bookBtn = document.getElementById('ai-book-btn');

    if (!form) return;

    var selectedTourIds = [];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var days = parseInt(document.getElementById('ai-days').value, 10) || 1;
        var group = document.getElementById('ai-group').value || 'family';
        var pace = document.getElementById('ai-pace').value || 'relaxed';

        if (initial) initial.style.display = 'none';
        if (result) result.style.display = 'none';
        if (loader) loader.style.display = 'flex';

        setTimeout(function () {
            var plan = generatePlanFromDatabase(days, group, pace);
            renderGeneratedPlan(plan);
            if (loader) loader.style.display = 'none';
            if (result) result.style.display = 'block';
        }, 500);
    });

    function generatePlanFromDatabase(days, group, pace) {
        var db = window.TOUR_DATABASE;
        var t1 = db ? db.getTourById('T1') : null;
        var t2 = db ? db.getTourById('T2') : null;
        var t3 = db ? db.getTourById('T3') : null;
        var t4 = db ? db.getTourById('T4') : null;
        var t6 = db ? db.getTourById('T6') : null;
        var t7 = db ? db.getTourById('T7') : null;

        var itinerary = [];
        var total = 0;
        selectedTourIds = [];

        // Day 1
        if (days === 1) {
            if (pace === 'fast' || group === 'friends') {
                itinerary.push({ day: 1, title: 'Full Day Grand Exploration', tour: t7 });
                total += t7.fare;
                selectedTourIds.push('T7');
            } else {
                itinerary.push({ day: 1, title: 'Classic Mahabaleshwar Viewpoints', tour: t1 });
                total += t1.fare;
                selectedTourIds.push('T1');
            }
        } else if (days >= 2) {
            itinerary.push({ day: 1, title: 'Mahabaleshwar Temples & Cliff Viewpoints', tour: t1 });
            total += t1.fare;
            selectedTourIds.push('T1');

            if (group === 'family' || group === 'friends') {
                itinerary.push({ day: 2, title: 'Pratapgad Fort Heritage & Maratha History', tour: t3 });
                total += t3.fare;
                selectedTourIds.push('T3');
            } else if (group === 'couple') {
                itinerary.push({ day: 2, title: 'Tapola Mini Kashmir & Shivsagar Boating', tour: t6 });
                total += t6.fare;
                selectedTourIds.push('T6');
            } else {
                itinerary.push({ day: 2, title: 'Panchgani Table Land & Plateau Scenery', tour: t4 });
                total += t4.fare;
                selectedTourIds.push('T4');
            }
        }

        // Day 3 (if applicable)
        if (days >= 3) {
            itinerary.push({ day: 3, title: 'Lingmala Waterfall & Mumbai Sunset Point', tour: t2 });
            total += t2.fare;
            selectedTourIds.push('T2');
        }

        return { items: itinerary, totalPrice: total };
    }

    function renderGeneratedPlan(plan) {
        if (totalPriceEl) totalPriceEl.textContent = '₹' + plan.totalPrice.toLocaleString('en-IN');

        if (container) {
            container.innerHTML = plan.items.map(function (item) {
                var t = item.tour;
                var pointsList = (t.points || []).slice(0, 5).map(function (p) {
                    return '<span style="background:#e0f2fe;color:#0369a1;padding:3px 8px;border-radius:12px;font-size:0.75rem;display:inline-block;margin:2px;"><i class="fa-solid fa-location-dot"></i> ' + p + '</span>';
                }).join('');

                return '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:14px;box-shadow:0 2px 6px rgba(0,0,0,0.03);">'
                    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">'
                    + '<span style="font-size:0.75rem;font-weight:700;background:#dcfce7;color:#15803d;padding:2px 8px;border-radius:10px;">DAY ' + item.day + '</span>'
                    + '<strong style="color:#16a34a;font-size:1.05rem;">₹' + t.fare + '</strong>'
                    + '</div>'
                    + '<h4 style="margin:0 0 4px;color:#0f172a;font-size:1rem;">' + item.title + '</h4>'
                    + '<p style="font-size:0.8rem;color:#64748b;margin:0 0 8px;"><strong>Tour:</strong> ' + t.name + ' (' + t.duration + ')</p>'
                    + '<div>' + pointsList + '</div>'
                    + '</div>';
            }).join('');
        }

        if (bookBtn) {
            bookBtn.onclick = function () {
                var firstTour = selectedTourIds[0] || 'T1';
                if (window.openBookingModal) {
                    window.openBookingModal(firstTour);
                }
            };
        }
    }
});
