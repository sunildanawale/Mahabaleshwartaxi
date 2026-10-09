(function () { function purgeStale() { var bad = document.querySelectorAll('.mobile-sticky-bar,[class*="mobile-bar"],[aria-label*="Driver"],[href*="Driver"]'); for (var i = 0; i < bad.length; i++) { bad[i].remove(); } } purgeStale(); if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', purgeStale); } window.addEventListener('load', purgeStale); })();
/* ============================================================
   ADVANCED CRO & PREMIUM FEATURES JAVASCRIPT
   Aryan Taxi Mahabaleshwar — World-Class Customer Experience
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // 1. Mobile sticky bar handled natively by .mobile-cta in HTML/CSS with zero name disclosure

    // 2. Weather & Hill Station Season Advisory
    var topBarLeft = document.querySelector('.top-bar__left');
    if (topBarLeft && !document.querySelector('.weather-widget')) {
        var month = new Date().getMonth();
        var temp = 20;
        var cond = "Pleasant";
        var icon = "fa-cloud-sun";

        if (month >= 2 && month <= 5) { temp = 26; cond = "Clear Breeze"; icon = "fa-sun"; }
        else if (month >= 6 && month <= 9) { temp = 19; cond = "Rain / Mist"; icon = "fa-cloud-showers-heavy"; }
        else { temp = 16; cond = "Crisp & Cool"; icon = "fa-snowflake"; }

        var weatherWidgetHTML = '<div class="weather-widget">'
            + '<i class="fa-solid ' + icon + '"></i>'
            + '<span id="weatherText">Mahabaleshwar: ' + temp + '°C (' + cond + ')</span>'
            + '</div>';
        topBarLeft.insertAdjacentHTML('afterbegin', weatherWidgetHTML);
    }

    // 3. Dynamic Hill Station Season Advisory Banner
    renderSeasonAdvisory();

    // 4. Inject Language Selector into top bar & navbar if not present
    injectLanguageSelector();
});

// Dynamic Season Banner Render
function renderSeasonAdvisory() {
    var el = document.getElementById('liveSeasonAdvisory');
    if (!el) return;

    var month = new Date().getMonth();
    var data = {
        icon: '🍓',
        title: 'Winter & Strawberry Harvest Season (Active Now)',
        temp: '14°C – 22°C (Pleasant & Crisp)',
        badges: ['🍓 Fresh Farm Strawberry Harvest', '🌅 Clear Valley Sunsets', '🏰 Pratapgad Trekking'],
        tip: 'Evenings get chilly; carry light jackets/sweaters. Free strawberry garden visit included with Tour 1!',
        bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
        border: '#f472b6'
    };

    if (month >= 2 && month <= 5) {
        data = {
            icon: '☀️',
            title: 'Summer Hill Station Retreat (Active Now)',
            temp: '22°C – 28°C (Cool Mountain Breeze)',
            badges: ['🚣 Venna Lake Boating', '🌲 Shady Forest Walks', '🍦 Mapro Fresh Crushes'],
            tip: 'Escape the city heat with pleasant 24°C mountain temperatures. Pre-book early for weekend cabs.',
            bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            border: '#f59e0b'
        };
    } else if (month >= 6 && month <= 9) {
        data = {
            icon: '🌊',
            title: 'Sahyadri Monsoon & Waterfall Season (Active Now)',
            temp: '17°C – 21°C (Misty & Lush Green)',
            badges: ['🌊 Lingmala & Bhilar Waterfalls Full Flow', '🌫️ Misty Viewpoints', '🌽 Hot Charcoal Corn at Viewpoints'],
            tip: 'Carry rainwear. If high viewpoints have dense fog, our drivers provide alternative scenic valley points at zero extra charge!',
            bgGradient: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
            border: '#0891b2'
        };
    }

    el.style.background = data.bgGradient;
    el.style.border = '1.5px solid ' + data.border;
    el.style.borderRadius = '16px';
    el.style.padding = '18px 22px';
    el.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.06)';

    el.innerHTML = '<div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">'
        + '<div style="display:flex;align-items:center;gap:12px;">'
        + '<span style="font-size:2.2rem;line-height:1;">' + data.icon + '</span>'
        + '<div>'
        + '<span style="font-size:0.75rem;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;color:#0e7490;">Live Hill Station Advisory</span>'
        + '<h3 style="margin:2px 0 4px;font-size:1.15rem;color:#0f172a;font-weight:800;">' + data.title + '</h3>'
        + '<div style="font-size:0.85rem;color:#334155;font-weight:600;"><i class="fa-solid fa-temperature-half" style="color:#ef4444;"></i> Expected Temp: ' + data.temp + '</div>'
        + '</div>'
        + '</div>'
        + '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">'
        + data.badges.map(function (b) { return '<span style="background:#ffffff;padding:4px 10px;border-radius:20px;font-size:0.75rem;font-weight:700;color:#0f172a;border:1px solid rgba(0,0,0,0.08);box-shadow:0 1px 3px rgba(0,0,0,0.05);">' + b + '</span>'; }).join('')
        + '</div>'
        + '</div>'
        + '<div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(0,0,0,0.06);font-size:0.8rem;color:#475569;display:flex;align-items:center;gap:6px;">'
        + '<i class="fa-solid fa-circle-info" style="color:#0284c7;"></i> <strong>Traveler Tip:</strong> ' + data.tip
        + '</div>';
}

// Language Switcher Controller
window.switchLanguage = function (lang, btnEl) {
    var buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(function (b) {
        if (b.getAttribute('data-lang') === lang) b.classList.add('active');
        else b.classList.remove('active');
    });

    var select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
    } else {
        document.cookie = "googtrans=/en/" + lang + "; path=/;";
        document.cookie = "googtrans=/en/" + lang + "; path=/; domain=" + window.location.hostname;

        // Load Google Translate script if not present
        if (!window.google || !window.google.translate) {
            var s = document.createElement('script');
            s.src = '//translate.google.com/translate_a/element.js?cb=initGTranslate';
            document.body.appendChild(s);
            window.initGTranslate = function () {
                new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,mr,hi', autoDisplay: false }, 'google_translate_element');
                setTimeout(function () {
                    var sl = document.querySelector('.goog-te-combo');
                    if (sl) {
                        sl.value = lang;
                        sl.dispatchEvent(new Event('change'));
                    }
                }, 500);
            };
        }
    }
};

function injectLanguageSelector() {
    var topBarRight = document.querySelector('.top-bar__right');
    if (topBarRight && !document.querySelector('.lang-switcher')) {
        var langHtml = '<div class="lang-switcher">'
            + '<button type="button" class="lang-btn active" data-lang="en" onclick="window.switchLanguage(\'en\', this)" title="English">EN</button>'
            + '<button type="button" class="lang-btn" data-lang="mr" onclick="window.switchLanguage(\'mr\', this)" title="मराठी">मराठी</button>'
            + '<button type="button" class="lang-btn" data-lang="hi" onclick="window.switchLanguage(\'hi\', this)" title="हिंदी">हिंदी</button>'
            + '</div>'
            + '<div id="google_translate_element" style="display:none;"></div>';
        topBarRight.insertAdjacentHTML('beforeend', langHtml);
    }
}
