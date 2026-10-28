/* ================================================================
   ARYAN TAXI MAHABALESHWAR — WORLD-CLASS TAXI BOOKING ENGINE (v22.0)
   Explore Sahyadri • Mahabaleshwar Taxi & Sightseeing
   Multi-Step Conversion Flow • Real Availability Engine • Digital Vouchers
   ================================================================ */

(function () {
    'use strict';

    var ARYAN_LOGO_DATA_URI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4NCiAgPGRlZnM+DQogICAgPCEtLSBSYWRpYWwgQmFja2dyb3VuZCBHcmFkaWVudCAtLT4NCiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImJnR3JhZCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxZTI5M2IiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iODUlIiBzdG9wLWNvbG9yPSIjMGYxNzJhIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjA2MTciLz4NCiAgICA8L3JhZGlhbEdyYWRpZW50Pg0KDQogICAgPCEtLSBHb2xkIEdyYWRpZW50IC0tPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ29sZEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZlZjA4YSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSI0MCUiIHN0b3AtY29sb3I9IiNmYmJmMjQiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Q5NzcwNiIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQoNCiAgICA8IS0tIE1vdW50YWluIEdyYWRpZW50IC0tPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibXRuR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzM4YmRmOCIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDM2OWExIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCg0KICAgIDwhLS0gVGF4aSBZZWxsb3cgR3JhZGllbnQgLS0+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ0YXhpWWVsbG93IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmRlMDQ3Ii8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlYWIzMDgiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICA8L2RlZnM+DQoNCiAgPCEtLSBDaXJjdWxhciBCYXNlIEJhZGdlIC0tPg0KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9Ijk2IiBmaWxsPSJ1cmwoI2JnR3JhZCkiIHN0cm9rZT0idXJsKCNnb2xkR3JhZCkiIHN0cm9rZS13aWR0aD0iNC41Ii8+DQogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjMgMiIgb3BhY2l0eT0iMC42Ii8+DQoNCiAgPCEtLSBTYWh5YWRyaSBNb3VudGFpbiBQZWFrcyAtLT4NCiAgPHBvbHlnb24gcG9pbnRzPSIyNiwxMjYgNTgsODIgOTIsMTI2IiBmaWxsPSIjMDI4NGM3IiBvcGFjaXR5PSIwLjUiLz4NCiAgPHBvbHlnb24gcG9pbnRzPSI3NiwxMjYgMTE2LDcwIDE1NiwxMjYiIGZpbGw9IiMwMzY5YTEiIG9wYWNpdHk9IjAuNiIvPg0KICA8cG9seWdvbiBwb2ludHM9IjQ0LDEyNiA4MCw4OCAxMTYsMTI2IiBmaWxsPSJ1cmwoI210bkdyYWQpIiBvcGFjaXR5PSIwLjg1Ii8+DQogIDxwb2x5Z29uIHBvaW50cz0iMTAyLDEyNiAxMzgsODAgMTc0LDEyNiIgZmlsbD0idXJsKCNtdG5HcmFkKSIgb3BhY2l0eT0iMC45Ii8+DQoNCiAgPCEtLSBNb3JuaW5nIFN1bnJpc2UgU3VuIEdsb3cgLS0+DQogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIxMyIgZmlsbD0iI2ZiYmYyNCIgb3BhY2l0eT0iMC44Ii8+DQoNCiAgPCEtLSBSb2FkIFBsYXRlYXUgQmFzZWxpbmUgLS0+DQogIDxwYXRoIGQ9Ik0yMiwxMjYgUTEwMCwxMjIgMTc4LDEyNiBMMTc4LDE0NiBRMTAwLDE0MiAyMiwxNDYgWiIgZmlsbD0iIzBmMTcyYSIvPg0KICA8cGF0aCBkPSJNNjAsMTM2IEw3NiwxMzYgTTk0LDEzNiBMMTEwLDEzNiBNMTI4LDEzNiBMMTQ0LDEzNiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwLjciLz4NCg0KICA8IS0tIEljb25pYyBCbGFjayAmIFllbGxvdyBUYXhpIENhYiAtLT4NCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYsIDEwMikiPg0KICAgIDwhLS0gQ2FiIEJvZHkgKFllbGxvdyBCYXNlKSAtLT4NCiAgICA8cmVjdCB4PSI4IiB5PSIxNiIgd2lkdGg9IjcyIiBoZWlnaHQ9IjE0IiByeD0iNCIgZmlsbD0idXJsKCN0YXhpWWVsbG93KSIvPg0KICAgIA0KICAgIDwhLS0gQ2FiIENhYmluIChDbGFzc2ljIEJsYWNrIFRvcCkgLS0+DQogICAgPHBhdGggZD0iTTE4LDE2IEwyNyw1IEw2MSw1IEw3MCwxNiBaIiBmaWxsPSIjMGYxNzJhIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgIA0KICAgIDwhLS0gV2luZG93cyAtLT4NCiAgICA8cGF0aCBkPSJNMjIsMTQgTDI5LDcgTDQyLDcgTDQyLDE0IFoiIGZpbGw9IiNlMGYyZmUiLz4NCiAgICA8cGF0aCBkPSJNNDYsNyBMNTksNyBMNjYsMTQgTDQ2LDE0IFoiIGZpbGw9IiNlMGYyZmUiLz4NCg0KICAgIDwhLS0gVEFYSSBSb29mIFNpZ24gLS0+DQogICAgPHJlY3QgeD0iMzciIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSI0LjUiIHJ4PSIxLjIiIGZpbGw9IiNmNTllMGIiLz4NCiAgICA8dGV4dCB4PSI0NCIgeT0iNC4yIiBmb250LXNpemU9IjIuOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjMGYxNzJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UQVhJPC90ZXh0Pg0KDQogICAgPCEtLSBXaGVlbHMgLS0+DQogICAgPGNpcmNsZSBjeD0iMjMiIGN5PSIyOSIgcj0iNi44IiBmaWxsPSIjMGYxNzJhIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMS41Ii8+DQogICAgPGNpcmNsZSBjeD0iMjMiIGN5PSIyOSIgcj0iMyIgZmlsbD0iIzY0NzQ4YiIvPg0KICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMjkiIHI9IjYuOCIgZmlsbD0iIzBmMTcyYSIgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjEuNSIvPg0KICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMjkiIHI9IjMiIGZpbGw9IiM2NDc0OGIiLz4NCg0KICAgIDwhLS0gSGVhZGxpZ2h0ICYgVGFpbGxpZ2h0IC0tPg0KICAgIDxyZWN0IHg9Ijc4IiB5PSIxOCIgd2lkdGg9IjMiIGhlaWdodD0iNC41IiByeD0iMSIgZmlsbD0iI2ZlZjA4YSIvPg0KICAgIDxyZWN0IHg9IjciIHk9IjE4IiB3aWR0aD0iMi41IiBoZWlnaHQ9IjMuNSIgcng9IjEiIGZpbGw9IiNlZjQ0NDQiLz4NCiAgPC9nPg0KDQogIDwhLS0gVHlwb2dyYXBoeSBBcmM6IEFSWUFOIFRBWEkgLS0+DQogIDx0ZXh0IHg9IjEwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0idXJsKCNnb2xkR3JhZCkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIyIj4NCiAgICBBUllBTiBUQVhJDQogIDwvdGV4dD4NCiAgDQogIDwhLS0gU3VidGl0bGU6IE1BSEFCQUxFU0hXQVIgLS0+DQogIDx0ZXh0IHg9IjEwMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI4LjUiIGZvbnQtd2VpZ2h0PSI4MDAiIGZpbGw9IiMzOGJkZjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj4NCiAgICBNQUhBQkFMRVNIV0FSDQogIDwvdGV4dD4NCg0KICA8IS0tIEJvdHRvbSBUYWdsaW5lIFJpYmJvbiAtLT4NCiAgPHJlY3QgeD0iMzUiIHk9IjE2MCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiMwODkxYjIiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDx0ZXh0IHg9IjEwMCIgeT0iMTcyLjUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI3LjUiIGZvbnQtd2VpZ2h0PSI4MDAiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIxIj4NCiAgICBFWFBMT1JFIFNBSFlBRFJJDQogIDwvdGV4dD4NCg0KICA8IS0tIFN0YXIgQWNjZW50cyAtLT4NCiAgPHBvbHlnb24gcG9pbnRzPSIxMDAsNjEgMTAxLjUsNjUgMTA2LDY1LjUgMTAyLjUsNjguNSAxMDMuNSw3MyAxMDAsNzAuNSA5Ni41LDczIDk3LjUsNjguNSA5NCw2NS41IDk4LjUsNjUiIGZpbGw9IiNmYmJmMjQiLz4NCjwvc3ZnPg==';

    var currentStep = 1;
    var totalSteps = 3; // 1: Tour & Schedule, 2: Pickup & Contact, 3: Voucher // 1: Service & Tour, 2: Date & Time, 3: Guests & Pickup, 4: Passenger & Confirm
    var bookingState = {
        service: 'sightseeing',
        tourId: 'T1',
        tour2Id: '',
        selectedTours: [{ id: 'T1', date: '', time: '09:00' }],
        differentSchedule: false,
        date: '',
        time: '09:00',
        pax: '3-4',
        taxiCount: 1,
        pickup: '',
        name: '',
        phone: '',
        notes: '',
        bookingId: '',
        idempotencyKey: '',
        submitting: false
    };

    // ── 1. Helpers ───────────────────────────────────────────────────
    function escapeHtml(str) {
        if (str === undefined || str === null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function getWhatsAppUrl(encodedText) {
        return 'https://api.whatsapp.com/send?phone=919922882044&text=' + encodedText;
    }

    function formatPickupTime(timeStr) {
        if (!timeStr) return '09:00 AM';
        var t = String(timeStr).trim();
        if (t.toLowerCase().includes('am') || t.toLowerCase().includes('pm')) return t;
        var parts = t.split(':');
        if (parts.length >= 2) {
            var h = parseInt(parts[0], 10);
            var m = parts[1].substring(0, 2);
            if (isNaN(h)) return '09:00 AM';
            var ampm = h >= 12 ? 'PM' : 'AM';
            h = h % 12;
            h = h ? h : 12;
            return (h < 10 ? '0' + h : '' + h) + ':' + m + ' ' + ampm;
        }
        return t || '09:00 AM';
    }

    function validateIndianPhone(phoneStr) {
        if (!phoneStr) return false;
        var clean = String(phoneStr).replace(/[\s\-()]/g, '');
        if (clean.startsWith('+91')) clean = clean.substring(3);
        else if (clean.startsWith('91') && clean.length === 12) clean = clean.substring(2);
        else if (clean.startsWith('0') && clean.length === 11) clean = clean.substring(1);

        if (/^[6-9]\d{9}$/.test(clean)) return clean;
        if (/^\+[1-9]\d{7,14}$/.test(String(phoneStr).replace(/[\s\-()]/g, ''))) {
            return String(phoneStr).trim();
        }
        return false;
    }

    function generateBookingId() {
        var now = new Date();
        var y = now.getFullYear();
        var num = Math.floor(100000 + Math.random() * 900000);
        return 'AMT-' + y + '-' + num;
    }

    var DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyqsWM2u-X-dqLIkac9REiWQoA3KWyMnteZtHjlI3sNEQgdQk8JeT5-p7CW0T_TLA2s/exec';

    function dispatchBookingRemote(bookingData) {
        try {
            var webhookUrl = window.AMT_LEAD_WEBHOOK_URL || (typeof localStorage !== 'undefined' ? localStorage.getItem('amt_lead_webhook_url') : '') || DEFAULT_WEBHOOK_URL;
            if (!webhookUrl) return;

            var bId = bookingData.bookingId || bookingData.id || ('AMT-' + Date.now().toString().slice(-6));
            var bName = bookingData.name || 'Guest';
            var bPhone = bookingData.phone || '';
            var bDate = bookingData.date || '';
            var bTime = bookingData.time || '';
            var bPickup = bookingData.pickup || '';
            var bTour = bookingData.tour || bookingData.tourId || '';
            var bFare = bookingData.fare || bookingData.totalFare || 0;
            var bPax = bookingData.pax || '1-4';
            var bNotes = bookingData.notes || '';
            var bStatus = bookingData.status || 'pending';

            var payload = JSON.stringify({
                bookingId: bId,
                name: bName,
                phone: bPhone,
                date: bDate,
                time: bTime,
                pickup: bPickup,
                tour: bTour,
                fare: bFare,
                pax: bPax,
                notes: bNotes,
                status: bStatus,
                timestamp: new Date().toISOString()
            });

            // Method 1: Fetch with keepalive
            if (typeof fetch !== 'undefined') {
                fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    keepalive: true,
                    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
                    body: payload
                }).catch(function () { });
            }

            // Method 2: Hidden iframe form post (guaranteed browser form submit to Google Apps Script)
            try {
                var iframeName = 'amt_post_iframe_' + Date.now();
                var iframe = document.createElement('iframe');
                iframe.name = iframeName;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);

                var form = document.createElement('form');
                form.method = 'POST';
                form.action = webhookUrl;
                form.target = iframeName;
                form.style.display = 'none';

                var fields = {
                    bookingId: bId,
                    name: bName,
                    phone: bPhone,
                    date: bDate,
                    time: bTime,
                    pickup: bPickup,
                    tour: bTour,
                    fare: bFare,
                    pax: bPax,
                    notes: bNotes,
                    status: bStatus
                };

                for (var key in fields) {
                    if (fields.hasOwnProperty(key)) {
                        var input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = fields[key];
                        form.appendChild(input);
                    }
                }

                document.body.appendChild(form);
                form.submit();

                setTimeout(function () {
                    try { document.body.removeChild(form); } catch (e) { }
                    try { document.body.removeChild(iframe); } catch (e) { }
                }, 4000);
            } catch (eForm) { }
        } catch (e) {
            console.warn('Could not dispatch booking remotely:', e);
        }
    }

    function saveBookingToLedger(booking) {
        if (booking && !booking.status) booking.status = 'pending';
        try {
            var ledger = JSON.parse(localStorage.getItem('amt_bookings') || '[]');
            ledger.unshift(booking);
            // keep up to 100 recent bookings
            if (ledger.length > 100) ledger = ledger.slice(0, 100);
            localStorage.setItem('amt_bookings', JSON.stringify(ledger));
        } catch (e) {
            console.warn('Could not save booking to localStorage', e);
        }
        dispatchBookingRemote(booking);
    }

    // ── 2. WhatsApp Message Generator ────────────────────────────────
    function formatSafeDisplayDate(isoDateStr) {
        if (!isoDateStr) return '';
        var parts = String(isoDateStr).split('-');
        if (parts.length === 3) {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var yr = parts[0], mo = parseInt(parts[1], 10) - 1, dy = parseInt(parts[2], 10);
            if (!isNaN(mo) && !isNaN(dy) && months[mo]) {
                return dy + ' ' + months[mo] + ' ' + yr;
            }
        }
        return isoDateStr;
    }

    
    function formatSafeTitleCase(str) {
        if (!str) return '';
        return String(str).replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
    }

    function addBookingToGoogleCalendar() {
        var b = bookingState;
        var db = window.TOUR_DATABASE;
        var t = (db && b.selectedTours && b.selectedTours[0]) ? db.getTourById(b.selectedTours[0].id) : (db && db.getTourById ? db.getTourById(b.tourId) : null);
        var title = encodeURIComponent((t ? t.name : 'Mahabaleshwar Taxi Tour') + ' - Aryan Taxi');
        var details = encodeURIComponent('Booking Voucher ID: ' + (b.bookingId || '') + '\nPickup: ' + (b.pickup || 'Mahabaleshwar') + '\nOperator Helpline: +91 99228 82044');
        var loc = encodeURIComponent(b.pickup || 'Mahabaleshwar, Maharashtra');

        var dRaw = (b.date || '').replace(/-/g, '');
        if (!dRaw) {
            var now = new Date();
            var yyyy = now.getFullYear();
            var mm = String(now.getMonth() + 1).padStart(2, '0');
            var dd = String(now.getDate()).padStart(2, '0');
            dRaw = yyyy + mm + dd;
        }
        var tRaw = (b.time || '09:00').replace(':', '') + '00';
        var startIso = dRaw + 'T' + tRaw;

        var hr = parseInt((b.time || '09:00').split(':')[0], 10) || 9;
        var mn = (b.time || '09:00').split(':')[1] || '00';
        var endHr = String((hr + 3) % 24).padStart(2, '0');
        var endIso = dRaw + 'T' + endHr + mn + '00';

        var url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + title + '&dates=' + startIso + '/' + endIso + '&details=' + details + '&location=' + loc;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    // ── 2. Service-Specific Rule Engine & WhatsApp Generator ────────
    function getServiceRules(serviceType, tours, isLarge, taxiCount) {
        serviceType = serviceType || 'sightseeing';
        tours = tours || [];
        isLarge = !!isLarge;
        taxiCount = parseInt(taxiCount, 10) || 1;

        var isMultiSightseeing = (serviceType === 'sightseeing' || !serviceType) && tours.length > 1;
        var key = 'sightseeing';
        if (serviceType === 'outstation' || tours.some(function (it) { return it.tour && (it.tour.category === 'outstation' || it.tour.type === 'transfer'); })) {
            key = 'outstation';
        } else if (serviceType === 'local_drop' || tours.some(function (it) { return it.tour && (it.tour.category === 'local_drop' || it.tour.type === 'local'); })) {
            key = 'local_drop';
        } else if (serviceType === 'combo' || tours.some(function (it) { return it.tour && (it.tour.category === 'combo' || (it.tour.id && it.tour.id.toLowerCase() === 't7')); })) {
            key = 'combo';
        }

        var isSameDayAfternoon = false;
        if (bookingState && bookingState.date && bookingState.time) {
            var today = new Date();
            var yyyy = today.getFullYear();
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var dd = String(today.getDate()).padStart(2, '0');
            var todayStr = yyyy + '-' + mm + '-' + dd;
            if (bookingState.date === todayStr) {
                var hr = parseInt(bookingState.time.split(':')[0], 10);
                if (hr >= 12) {
                    isSameDayAfternoon = true;
                }
            }
        }

        if (key === 'outstation') {
            return {
                key: 'outstation',
                serviceTitle: 'Outstation Drop Transfer',
                badgeText: isSameDayAfternoon ? 'OUTSTATION INQUIRY (AVAILABILITY CONFIRMATION REQUIRED)' : '✓ BOOKING CONFIRMED',
                badgeBg: '#e0f2fe',
                badgeColor: '#0369a1',
                badgeBorder: '#bae6fd',
                paymentBadge: 'Nominal Fuel Advance • Balance to Driver',
                paymentColor: '#b45309',
                tariffLabel: 'LOCKED OUTSTATION TARIFF',
                advanceNote: 'Nominal Fuel Advance • Balance to Driver upon Drop',
                paymentSettlement: 'Nominal fuel lock advance via link; balance to driver upon drop',
                vehicleDesc: '4-Seater Dedicated Tourist Cab (Arranged as per availability)',
                dispatchNotice: isSameDayAfternoon
                    ? '⚠️ Vehicle availability may be limited for same-day afternoon/evening bookings, especially during the tourist season. Your booking will be confirmed after vehicle availability is checked.'
                    : '⚠️ Outstation Cab Dispatch: Reconfirmation required on WhatsApp/Phone. Nominal fuel advance applies. ₹200 reporting fee applies if cancelled after driver departs for pickup.',
                reviewNotice: 'Please review your destination drop route, vehicle requirement, and locked outstation tariff below.',
                termsTitle: 'Important Outstation Travel Guidelines & Carriage Terms',
                terms: [
                    { title: 'Direct Highway Transit', desc: 'Direct intercity transfer via Pasarni / Wai Ghat descent connecting directly to NH-48 Expressway to your drop destination.' },
                    { title: 'Vehicle Allocation', desc: 'Standard 4-Seater tourist cab allocated for your private group.' },
                    { title: 'Tolls & Fastag', desc: 'Locked outstation base fare. Highway tolls and airport parking payable as per actual Fastag receipts.' },
                    { title: 'Fuel Advance & Balance', desc: 'Operator shares secure payment link for nominal fuel lock advance; remaining balance payable directly to driver upon destination arrival.' },
                    { title: 'Cancellation Policy', desc: 'Free cancellation up to 2 hours prior to scheduled departure. Standard reporting charge applies if cancelled after vehicle departs for pickup.' },
                    { title: 'Helpline Support', desc: '24/7 dedicated assistance available at +91 99228 82044 for driver dispatch and expressway coordination.' }
                ],
                policyItems: [
                    { icon: 'fa-phone', title: 'Pre-Dispatch Call', text: 'Driver reconfirms pickup time before departure' },
                    { icon: 'fa-road', title: 'Highway Route', text: 'Direct Pasarni/Wai Ghat to NH-48 Expressway' },
                    { icon: 'fa-receipt', title: 'Tolls & Parking', text: 'Fastag tolls & airport parking at actuals' },
                    { icon: 'fa-rotate-left', title: 'Free Cancellation', text: 'Notify up to 2 hours prior to trip' }
                ],
                policyNote: 'Please confirm drop destination and route halts with the taxi driver before departure.',
                whatsappTariffNote: function (fare) {
                    return '💰 *Outstation Tariff:* ₹' + fare + ' (+ Tolls at actuals)\n_Nominal fuel advance • Balance payable to driver upon drop_\nℹ️ _Outstation Transit: Tourist cab arranged as per vehicle availability._\n\n';
                },
                whatsappReadiness: 'I confirm this direct outstation booking. Please dispatch the cab driver for my trip as per schedule.'
            };
        }

        if (key === 'local_drop') {
            return {
                key: 'local_drop',
                serviceTitle: 'Local Point-to-Point Drop',
                badgeText: isSameDayAfternoon ? 'LOCAL DROP INQUIRY (AVAILABILITY CONFIRMATION REQUIRED)' : '✓ BOOKING CONFIRMED',
                badgeBg: '#f0fdf4',
                badgeColor: '#166534',
                badgeBorder: '#86efac',
                paymentBadge: 'Zero Advance Required • Pay Driver After Drop',
                paymentColor: '#15803d',
                tariffLabel: 'OFFICIAL UNION DROP TARIFF',
                advanceNote: 'Zero Advance Required (Standard Local Drop)',
                paymentSettlement: '100% Cash / UPI to Driver directly after drop',
                vehicleDesc: '4-Seater Dedicated Tourist Cab (Arranged as per availability)',
                dispatchNotice: isSameDayAfternoon
                    ? '⚠️ Vehicle availability may be limited for same-day afternoon/evening bookings, especially during the tourist season. Your booking will be confirmed after vehicle availability is checked.'
                    : '⚠️ Local Point-to-Point Drop: Driver dispatch confirmed after final WhatsApp/phone check. Direct hotel porch pickup. ₹200 fee if cancelled after driver arrives.',
                reviewNotice: 'Please review your local point drop destination and official Union fare below.',
                termsTitle: 'Important Local Drop Guidelines & Carriage Terms',
                terms: [
                    { title: 'Direct Point Transfer', desc: 'Doorstep hotel porch pickup to destination with direct point-to-point transit (Mapro Garden, Panchgani, Old Mahabaleshwar, etc.).' },
                    { title: 'No Sightseeing Halts', desc: 'Point-to-point transfer only. Scenic viewpoint halts and extended waiting are not included in local drop tariff.' },
                    { title: 'Locked Union Tariff', desc: 'Fixed official Taxi Union drop rate. Zero advance required — pay operating driver directly after drop via UPI or Cash.' },
                    { title: 'Vehicle Allocation', desc: '4-Seater tourist cab allocated as per Taxi Union network availability.' },
                    { title: 'Cancellation Policy', desc: 'Free cancellation up to 2 hours prior. Standard ₹200 union reporting charge applies if cancelled after taxi reaches hotel porch.' },
                    { title: 'Helpline Support', desc: 'Direct assistance available at +91 99228 82044 for pickup and dispatch coordination.' }
                ],
                policyItems: [
                    { icon: 'fa-phone', title: 'Pre-Dispatch Call', text: 'Driver reconfirms pickup time before departure' },
                    { icon: 'fa-location-dot', title: 'Direct Transfer', text: 'Direct point-to-point drop (no tour halts)' },
                    { icon: 'fa-lock', title: 'Union Drop Rate', text: 'Approved fixed tariff, zero advance required' },
                    { icon: 'fa-rotate-left', title: 'Free Cancellation', text: 'Notify up to 2 hours prior to trip' }
                ],
                policyNote: 'Please confirm destination drop point with the taxi driver before departure.',
                whatsappTariffNote: function (fare) {
                    return '💰 *Local Drop Tariff:* ₹' + fare + ' (Official Union Rate)\n_Zero advance required • Pay driver directly after drop_\nℹ️ _Direct point-to-point transfer from hotel porch to destination._\n\n';
                },
                whatsappReadiness: 'I confirm this direct local drop booking. Please dispatch the cab driver for my drop as per schedule.'
            };
        }

        if (key === 'combo') {
            return {
                key: 'combo',
                serviceTitle: 'Full Day Combined Tour',
                badgeText: isSameDayAfternoon ? 'COMBO TOUR INQUIRY (AVAILABILITY CONFIRMATION REQUIRED)' : '✓ BOOKING CONFIRMED',
                badgeBg: '#f0fdf4',
                badgeColor: '#166534',
                badgeBorder: '#bbf7d0',
                paymentBadge: 'Zero Advance Required • Pay Driver After Tour',
                paymentColor: '#15803d',
                tariffLabel: isLarge ? 'ESTIMATED GROUP COMBO TARIFF' : 'LOCKED UNION COMBO TARIFF',
                advanceNote: 'Zero Advance Required (Approved Union Combo)',
                paymentSettlement: '100% Cash / UPI to Driver directly after tour completion',
                vehicleDesc: isLarge
                    ? (taxiCount + 'x 4-Seater Tourist Cabs, arranged as per availability')
                    : '4-Seater Dedicated Tourist Cab (Arranged as per availability)',
                dispatchNotice: isSameDayAfternoon
                    ? '⚠️ Vehicle availability may be limited for same-day afternoon/evening bookings, especially during the tourist season. Your booking will be confirmed after vehicle availability is checked.'
                    : '⚠️ Full Day Combo Tour: Continuous full-day circuit (~7-9 hrs). Driver dispatch confirmed after final WhatsApp/phone reconfirmation.',
                reviewNotice: 'Please review your full-day combined circuits, schedule, and locked combo tariff below.',
                termsTitle: 'Important Full Day Combo Guidelines & Carriage Terms',
                terms: [
                    { title: 'Multi-Circuit Coverage', desc: 'Continuous full-day sightseeing itinerary covering selected circuits in sequence (e.g. Mahabaleshwar Darshan + Panchgani or Pratapgad).' },
                    { title: 'Tour Timing & Halts', desc: 'Covers full day (~7 to 9 hours) including lunch/refreshment breaks. Viewpoint sequence arranged by operating driver for best visibility.' },
                    { title: 'Locked Combo Tariff', desc: 'Fixed official Union combined rate. Zero advance required for Mahabaleshwar hotel pickup — pay operating driver after tour completion.' },
                    { title: 'Vehicle Allocation', desc: isLarge ? (taxiCount + 'x 4-Seater Tourist Cabs allocated for full day.') : '4-Seater tourist cab allocated for the entire duration of the combined circuit.' },
                    { title: 'Cancellation Policy', desc: 'Free cancellation up to 2 hours prior. Standard ₹200 union reporting charge applies if cancelled after taxi reaches hotel porch.' },
                    { title: 'Helpline Support', desc: 'Direct assistance available at +91 99228 82044 for tour coordination and timing assistance.' }
                ],
                policyItems: [
                    { icon: 'fa-phone', title: 'Pre-Dispatch Call', text: 'Driver reconfirms pickup time before departure' },
                    { icon: 'fa-calendar-day', title: 'Full Day Itinerary', text: 'Comprehensive 7-9 hr multi-circuit sightseeing' },
                    { icon: 'fa-lock', title: 'Combo Tariff Locked', text: 'Official Union combined rate, zero advance' },
                    { icon: 'fa-rotate-left', title: 'Free Cancellation', text: 'Notify up to 2 hours prior to trip' }
                ],
                policyNote: 'Please confirm combined tour itinerary with the taxi driver before starting your tour.',
                whatsappTariffNote: function (fare) {
                    return '💰 *Combo Tariff:* ₹' + fare + ' (Official Union Rate' + (isLarge ? ' • ' + taxiCount + ' Cabs' : '') + ')\n_Zero advance required • Pay driver after completing the combined tour_\nℹ️ _Full Day Combo: Continuous sightseeing itinerary (~7-9 hrs)._\n\n';
                },
                whatsappReadiness: 'I confirm this direct full day combo booking. Please dispatch the cab driver for my tour as per schedule.'
            };
        }

        var allAreSingleTours = tours.length > 0 && tours.every(function (it) {
            return it.tour && (it.tour.sub_category === 'single_tour' || it.tour.fare === 800);
        });

        if (allAreSingleTours) {
            return {
                key: 'sightseeing',
                serviceTitle: 'Express Single Tour (Budget Option)',
                badgeText: isSameDayAfternoon ? 'SINGLE TOUR INQUIRY (AVAILABILITY CHECK REQUIRED)' : '✓ BOOKING CONFIRMED',
                badgeBg: '#f0fdf4',
                badgeColor: '#166534',
                badgeBorder: '#86efac',
                paymentBadge: 'Zero Advance Required • Pay Driver After Tour',
                paymentColor: '#15803d',
                tariffLabel: isLarge ? 'ESTIMATED SINGLE TOUR TARIFF' : 'CONFIRMED SPECIAL FARE (₹800)',
                advanceNote: 'Zero Advance Required (Special Single Tour)',
                paymentSettlement: '100% Cash / UPI to Driver directly after tour completion',
                vehicleDesc: isLarge
                    ? (taxiCount + 'x 4-Seater Tourist Cabs, arranged as per availability')
                    : '4-Seater Dedicated Tourist Cab (Arranged as per availability)',
                dispatchNotice: isSameDayAfternoon
                    ? '⚠️ Vehicle availability may be limited for same-day afternoon/evening bookings, especially during the tourist season. Your booking will be confirmed after vehicle availability is checked.'
                    : '⚠️ Express Single Tour: Driver dispatch confirmed after final WhatsApp/phone reconfirmation before departure.',
                reviewNotice: 'Please review your single tour sector, included viewpoints, and confirmed special ₹800 fare below.',
                termsTitle: 'Important Single Tour Guidelines & Terms',
                terms: [
                    { title: 'Independent Budget Option', desc: 'Single tour (₹800 flat, 2.5 hrs) is an independent budget option offered directly by Aryan Taxi for visitors wanting minimum viewpoints. Note: It is not part of the official Taxi Union rate card (official Union packages are full Tours 1–7).' },
                    { title: 'Sightseeing Sequence', desc: 'Operating driver covers all included viewpoints in this sector. Viewpoint halts are subject to weather, mountain fog, and local authority regulations.' },
                    { title: 'Zero Advance Payment', desc: 'Zero advance required for Mahabaleshwar hotel pickup — pay operating driver directly after tour completion via UPI or Cash.' },
                    { title: 'Vehicle Allocation', desc: isLarge ? (taxiCount + 'x 4-Seater Tourist Cabs allocated for group.') : '4-Seater tourist cab allocated as per availability.' },
                    { title: 'Cancellation Policy', desc: 'Free cancellation up to 2 hours prior. Standard ₹200 union reporting charge applies if cancelled after taxi reaches hotel porch.' },
                    { title: 'Helpline Support', desc: 'Direct assistance available at +91 99228 82044 for driver dispatch coordination.' }
                ],
                policyItems: [
                    { icon: 'fa-phone', title: 'Pre-Dispatch Call', text: 'Driver reconfirms pickup time before departure' },
                    { icon: 'fa-mountain-sun', title: 'Single Sector Tour', text: 'Focused 2.5-hour circuit with key viewpoints' },
                    { icon: 'fa-tag', title: 'Special ₹800 Fare', text: 'Direct Aryan Taxi rate (not in union card)' },
                    { icon: 'fa-rotate-left', title: 'Free Cancellation', text: 'Notify up to 2 hours prior to trip' }
                ],
                policyNote: 'Please confirm single tour route points with the taxi driver before starting sightseeing.',
                whatsappTariffNote: function (fare) {
                    return '💰 *Tour Fare:* ₹' + fare + ' (Special Single Tour Rate' + (isLarge ? ' • ' + taxiCount + ' Cabs' : '') + ')\n_Zero advance required • Pay driver after tour_\nℹ️ *Note:* Single tour (₹800) is an independent budget option offered directly by Aryan Taxi (not part of the official Taxi Union rate card).\n\n';
                },
                whatsappReadiness: 'I confirm this direct single tour booking. Please dispatch the cab driver for my tour as per schedule.'
            };
        }

        // Default: Local Sightseeing (Single or Multi-Tour)
        return {
            key: 'sightseeing',
            serviceTitle: isMultiSightseeing ? 'Combined Sightseeing Packages' : 'Local Sightseeing',
            badgeText: isMultiSightseeing
                ? (isSameDayAfternoon ? 'MULTI-TOUR INQUIRY (AVAILABILITY CONFIRMATION REQUIRED)' : '✓ BOOKING CONFIRMED')
                : (isSameDayAfternoon ? 'SIGHTSEEING INQUIRY (AVAILABILITY CONFIRMATION REQUIRED)' : '✓ BOOKING CONFIRMED'),
            badgeBg: '#f0fdf4',
            badgeColor: '#166534',
            badgeBorder: '#86efac',
            paymentBadge: 'Zero Advance Required • Pay Driver After Tour',
            paymentColor: '#15803d',
            tariffLabel: isLarge ? 'ESTIMATED GROUP SIGHTSEEING TARIFF' : (isMultiSightseeing ? 'LOCKED UNION TARIFF (COMBINED)' : 'LOCKED UNION TARIFF'),
            advanceNote: 'Zero Advance Required (Standard Local Sightseeing)',
            paymentSettlement: '100% Cash / UPI to Driver directly after tour completion',
            vehicleDesc: isLarge
                ? (taxiCount + 'x 4-Seater Tourist Cabs, arranged as per availability')
                : '4-Seater Dedicated Tourist Cab (Arranged as per availability)',
            dispatchNotice: isSameDayAfternoon
                ? '⚠️ Vehicle availability may be limited for same-day afternoon/evening bookings, especially during the tourist season. Your booking will be confirmed after vehicle availability is checked.'
                : (isMultiSightseeing
                    ? '⚠️ Combined Sightseeing: Driver dispatch confirmed after final WhatsApp/phone reconfirmation before departure.'
                    : '⚠️ Local Sightseeing Cab: Driver dispatch confirmed after final WhatsApp/phone reconfirmation before departure.'),
            reviewNotice: isMultiSightseeing
                ? 'Please review your combined sightseeing itinerary, pickup hotel, and fixed Union fare below.'
                : 'Please review all included viewpoints, pickup hotel, and fixed Union fare below.',
            termsTitle: isMultiSightseeing ? 'Important Combined Sightseeing Guidelines & Terms' : 'Important Sightseeing Guidelines & Carriage Terms',
            terms: [
                { title: 'Cab Dispatch', desc: '4-Seater Tourist Cab allocated through Mahabaleshwar Taxi Union network, arranged as per availability. Dispatch confirmed after phone/WhatsApp check.' },
                { title: 'Sightseeing Sequence', desc: 'Operating driver arranges route sequence based on viewpoint visibility. Viewpoint halts and visits are subject to weather, mountain fog, road conditions, and police regulations.' },
                { title: 'Locked Union Tariff', desc: 'Approved official Taxi Union tariff. Zero advance required for Mahabaleshwar hotel porch pickup — pay driver directly after tour via UPI or Cash.' },
                { title: 'Vehicle Allocation', desc: isLarge ? (taxiCount + 'x 4-Seater Tourist Cabs allocated for safety.') : '4-Seater tourist cab allocated as per Taxi Union safety regulations.' },
                { title: 'Cancellation Policy', desc: 'Free cancellation up to 2 hours prior. Standard ₹200 union reporting charge applies if cancelled after taxi reaches hotel porch.' },
                { title: 'Helpline Support', desc: 'Direct assistance available at +91 99228 82044 for driver dispatch coordination.' }
            ],
            policyItems: [
                { icon: 'fa-phone', title: 'Pre-Dispatch Call', text: 'Driver reconfirms pickup time before departure' },
                { icon: 'fa-mountain-sun', title: 'Sightseeing Sequence', text: 'Route arranged by driver for optimal visibility' },
                { icon: 'fa-lock', title: 'Tariff Locked', text: 'Fixed union rates apply, zero advance' },
                { icon: 'fa-rotate-left', title: 'Free Cancellation', text: 'Notify up to 2 hours prior to trip' }
            ],
            policyNote: 'Please confirm all tour details with the taxi driver before starting sightseeing.',
            whatsappTariffNote: function (fare) {
                return '💰 *Approved Tariff:* ₹' + fare + ' (Locked Union Rate' + (isLarge ? ' • ' + taxiCount + ' Cabs' : '') + ')\n_Zero advance required for Mahabaleshwar pickup • Pay driver after tour_\nℹ️ _Union Rule: Local sightseeing is strictly 4-seater tourist cabs._\n\n';
            },
            whatsappReadiness: 'I confirm this direct sightseeing booking. Please dispatch the cab driver for my tour as per schedule.'
        };
    }

    function formatTourDisplayName(tour, idx, isMulti) {
        if (!tour) return '';
        var rawName = tour.name || '';
        if (!isMulti) return rawName;
        var match = rawName.match(/\s*\(Tour\s*(\d+)\)/i);
        if (match) {
            var clean = rawName.replace(/\s*\(Tour\s*\d+\)/i, '').trim();
            return 'Tour ' + (idx + 1) + ': ' + clean;
        }
        return 'Tour ' + (idx + 1) + ': ' + rawName;
    }

    function buildConfirmedWhatsAppMessage(b) {
        var db = window.TOUR_DATABASE;
        var tours = [];
        if (b.selectedTours && b.selectedTours.length > 0) {
            b.selectedTours.forEach(function (st) {
                var t = db ? db.getTourById(st.id) : null;
                if (t) {
                    tours.push({
                        tour: t,
                        date: (b.differentSchedule && st.date) ? st.date : b.date,
                        time: (b.differentSchedule && st.time) ? st.time : b.time
                    });
                }
            });
        }
        if (tours.length === 0 && db) {
            var fallback = db.getTourById(b.tourId) || (db.tours ? db.tours[0] : null);
            if (fallback) {
                tours.push({ tour: fallback, date: b.date, time: b.time });
            }
        }

        var isMulti = tours.length > 1;
        var baseFare = tours.reduce(function (acc, item) { return acc + (item.tour ? item.tour.fare : 0); }, 0);
        var isLarge = b.pax === '5+';
        var taxiCount = parseInt(b.taxiCount, 10) || (isLarge ? 2 : 1);
        var totalFare = baseFare * taxiCount;

        var sRules = getServiceRules(b.service, tours, isLarge, taxiCount);
        var zone = (db && db.getPickupZone) ? db.getPickupZone(b.pickup) : null;
        var isNonMahaZone = zone && !zone.isStandardTariffZone;
        var pickupStr = b.pickup + (isNonMahaZone ? ' (Outside town limits)' : '');

        var tourListStr = '';
        if (isMulti) {
            tourListStr = tours.map(function (item, idx) {
                var dStr = formatSafeDisplayDate(item.date);
                var tStr = formatPickupTime(item.time);
                return (idx + 1) + '. *' + item.tour.name + '* (' + item.tour.duration + ')\n'
                    + '   📅 ' + dStr + ' at ' + tStr + ' • ₹' + item.tour.fare;
            }).join('\n');
        } else if (tours[0]) {
            var item0 = tours[0];
            tourListStr = '*' + item0.tour.name + '* (' + item0.tour.duration + ')\n'
                + '📅 Date & Time: ' + formatSafeDisplayDate(item0.date) + ' at ' + formatPickupTime(item0.time);
        }

        var msg = 'Hello Aryan Taxi Mahabaleshwar 👋\n'
            + '🚕 *DIRECT TAXI BOOKING CONFIRMATION — ' + sRules.serviceTitle.toUpperCase() + '*\n'
            + (sRules.key === 'outstation'
                ? '_(Official Union Outstation Tariff • Nominal Fuel Advance • Balance to Driver)_\n\n'
                : (sRules.key === 'local_drop'
                    ? '_(Official Union Drop Tariff • Zero Advance • Pay Driver After Drop)_\n\n'
                    : '_(Official Union Tariff • Zero Advance • Pay Driver After Trip)_\n\n'))
            + '🔖 *Booking Voucher ID:* ' + (b.bookingId || 'AMT-REQ') + '\n'
            + '👤 *Guest Name:* ' + b.name + (b.phone ? ' (' + b.phone + ')' : '') + '\n'
            + '🏨 *Pickup Location:* ' + pickupStr + '\n'
            + '👥 *Cab Requirement:* ' + sRules.vehicleDesc + '\n\n'
            + '🚖 *Confirmed Tour' + (isMulti ? 's (' + tours.length + ' Tours):*' : ':*') + '\n'
            + tourListStr + '\n\n';

        if (b.notes) {
            msg += '📝 *Special Notes / Request:* ' + b.notes + '\n\n';
        }

        msg += sRules.whatsappTariffNote(totalFare);

        msg += '📋 *Notice:* ' + sRules.policyNote + '\n\n'
            + '✅ *TRIP READINESS & DISPATCH RECONFIRMATION:*\n'
            + sRules.whatsappReadiness;

        return msg;
    }

    // ── 2.5 Body Scroll Lock Manager (Zero Jump) ──────────────────────
    if (typeof window.lockModalBodyScroll !== 'function') {
        var _modalScrollY = 0;
        var _openModals = {};
        window.lockModalBodyScroll = function (id) {
            if (document.body && document.body.classList.contains('booking-portal-page')) return;
            id = id || 'amtBookingModal';
            var count = Object.keys(_openModals).length;
            _openModals[id] = true;
            if (count === 0) {
                _modalScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                document.body.style.position = 'fixed';
                document.body.style.top = '-' + _modalScrollY + 'px';
                document.body.style.left = '0';
                document.body.style.right = '0';
                document.body.style.width = '100%';
                document.body.style.overflow = 'hidden';
                document.documentElement.classList.add('modal-open');
                document.body.classList.add('modal-open');
            }
        };
        window.unlockModalBodyScroll = function (id) {
            id = id || 'amtBookingModal';
            delete _openModals[id];
            if (Object.keys(_openModals).length === 0) {
                var scrollY = _modalScrollY;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                document.documentElement.classList.remove('modal-open');
                document.body.classList.remove('modal-open');
                window.scrollTo(0, scrollY);
            }
        };
    }

    // ── 3. Style Injection (Mobile-First Design) ───────────────────────
    function injectStyles() {
        if (document.getElementById('amtWidgetStyles')) return;
        var s = document.createElement('style');
        s.id = 'amtWidgetStyles';
        s.textContent = [
            '.amt-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,0.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:none;justify-content:center;align-items:center;z-index:20000000 !important;padding:12px;box-sizing:border-box;}',
            '.amt-card,#amtBookingModal .amt-card{background:#ffffff;border-radius:20px;width:100%;max-width:500px;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 25px 60px rgba(0,0,0,0.45);overflow:hidden;margin:auto;border:1px solid #e2e8f0;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}',
            '@media (min-width:768px){.amt-card,#amtBookingModal .amt-card{max-width:540px !important;margin:auto !important;}}',
            '@media (max-width:640px){.amt-modal-overlay{padding:calc(env(safe-area-inset-top, 8px) + 8px) 8px 30px !important;z-index:20000000 !important;}.amt-card,#amtBookingModal .amt-card{width:100% !important;max-width:100% !important;margin:0 auto !important;border-radius:16px !important;max-height:92vh !important;}}',
            'body.modal-open .navbar{z-index:0 !important;visibility:hidden !important;display:none !important;}',
            'body.modal-open .mobile-cta{display:none !important;}',
            '.amt-card-header{background:linear-gradient(135deg,#0e2338 0%,#0891b2 100%);color:#ffffff;padding:14px 18px 10px;border-radius:20px 20px 0 0;position:relative;box-sizing:border-box;flex-shrink:0;}',
            '.amt-header-brand{font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;color:#fbbf24;font-weight:700;margin-bottom:2px;white-space:nowrap !important;}',
            '.amt-header-title{font-size:1.18rem;font-weight:800;color:#ffffff;margin-bottom:6px;letter-spacing:-0.2px;line-height:1.2;}',
            '.amt-header-step-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:4px;}',
            '.amt-header-step-label{font-size:0.78rem;font-weight:700;color:#e0f2fe;white-space:nowrap;}',
            '.amt-header-track{flex:1;height:6px;background:rgba(255,255,255,0.22);border-radius:6px;overflow:hidden;}',
            '.amt-header-fill{height:100%;background:#38bdf8;border-radius:6px;transition:width 0.35s ease;}',
            '.amt-close-btn{position:absolute;top:12px;right:12px;background:rgba(255,255,255,0.18);border:none;color:#ffffff;min-width:40px;min-height:40px;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;transition:background 0.2s;box-sizing:border-box;}',
            '.amt-close-btn:hover{background:rgba(255,255,255,0.32);}',
            '.amt-card-body{padding:14px 18px 18px;overflow-y:auto;-webkit-overflow-scrolling:touch;flex:1;box-sizing:border-box;}',
            '@media (max-width:640px){.amt-card-header{padding:12px 14px 10px;border-radius:16px 16px 0 0;}.amt-header-title{font-size:1.05rem;margin-bottom:4px;}.amt-card-body{padding:12px 14px 16px;}.amt-input,.amt-card input,.amt-card select,.amt-card textarea{font-size:16px !important;min-height:42px !important;}}',
            '.amt-step-hdr-compact{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}',
            '.amt-step-hdr-compact .amt-step-title{font-size:0.95rem;font-weight:800;color:#0f172a;margin:0;}',
            '.amt-trust-chip{font-size:0.68rem;font-weight:700;color:#059669;background:#ecfdf5;padding:2px 7px;border-radius:6px;border:1px solid #a7f3d0;white-space:nowrap;}',
            'RESPONSIVE CATEGORY GRID & COMPACT UI (PC 1-ROW / MOBILE 3+2)',
            '============================================================ */',
            '.amt-category-grid {',
            'display: grid !important;',
            'width: 100% !important;',
            'box-sizing: border-box !important;',
            'margin-bottom: 10px !important;',
            '}',
            '@media (max-width: 767px) {',
            '.amt-category-grid {',
            'grid-template-columns: repeat(6, 1fr) !important;',
            'gap: 6px !important;',
            '}',
            '.amt-category-grid .amt-service-btn:nth-child(1),',
            '.amt-category-grid .amt-service-btn:nth-child(2),',
            '.amt-category-grid .amt-service-btn:nth-child(3) {',
            'grid-column: span 2 !important;',
            '}',
            '.amt-category-grid .amt-service-btn:nth-child(4),',
            '.amt-category-grid .amt-service-btn:nth-child(5) {',
            'grid-column: span 3 !important;',
            '}',
            '}',
            '@media (min-width: 768px) {',
            '.amt-category-grid {',
            'grid-template-columns: repeat(5, 1fr) !important;',
            'gap: 8px !important;',
            '}',
            '.amt-category-grid .amt-service-btn:nth-child(1),',
            '.amt-category-grid .amt-service-btn:nth-child(2),',
            '.amt-category-grid .amt-service-btn:nth-child(3),',
            '.amt-category-grid .amt-service-btn:nth-child(4),',
            '.amt-category-grid .amt-service-btn:nth-child(5) {',
            'grid-column: span 1 !important;',
            '}',
            '}',
            '.amt-category-grid .amt-service-btn {',
            'display: flex !important;',
            'flex-direction: column !important;',
            'align-items: center !important;',
            'justify-content: center !important;',
            'padding: 7px 4px !important;',
            'border: 1.5px solid #cbd5e1 !important;',
            'background: #ffffff !important;',
            'border-radius: 11px !important;',
            'cursor: pointer !important;',
            'transition: all 0.18s ease-in-out !important;',
            'min-height: 52px !important;',
            'box-sizing: border-box !important;',
            'width: 100% !important;',
            'box-shadow: 0 1px 3px rgba(0,0,0,0.05) !important;',
            '-webkit-tap-highlight-color: transparent !important;',
            'text-align: center !important;',
            '}',
            '.amt-category-grid .amt-service-btn:hover {',
            'border-color: #0284c7 !important;',
            'background: #f0f9ff !important;',
            'transform: translateY(-1px) !important;',
            '}',
            '.amt-category-grid .amt-service-btn.active {',
            'background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;',
            'border-color: #0284c7 !important;',
            'color: #ffffff !important;',
            'box-shadow: 0 4px 12px rgba(2, 132, 199, 0.35) !important;',
            '}',
            '.amt-category-grid .amt-service-btn .amt-cat-icon {',
            'font-size: 1.15rem !important;',
            'line-height: 1 !important;',
            'margin-bottom: 2px !important;',
            'display: block !important;',
            '}',
            '.amt-category-grid .amt-service-btn .amt-cat-name {',
            'display: block !important;',
            'font-size: 0.76rem !important;',
            'font-weight: 800 !important;',
            'color: #0f172a !important;',
            'line-height: 1.2 !important;',
            'white-space: nowrap !important;',
            '}',
            '.amt-category-grid .amt-service-btn.active .amt-cat-name {',
            'color: #ffffff !important;',
            '}',
            '.amt-category-grid .amt-service-btn .amt-cat-tag {',
            'display: block !important;',
            'font-size: 0.62rem !important;',
            'font-weight: 700 !important;',
            'color: #64748b !important;',
            'margin-top: 1px !important;',
            'line-height: 1.1 !important;',
            'white-space: nowrap !important;',
            '}',
            '.amt-category-grid .amt-service-btn.active .amt-cat-tag {',
            'color: #e0f2fe !important;',
            '}',
            '.amt-category-grid .amt-service-btn .amt-tag-green {',
            'color: #15803d !important;',
            '}',
            '.amt-category-grid .amt-service-btn.active .amt-tag-green {',
            'color: #bbf7d0 !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn {',
            'background: #1e293b !important;',
            'border-color: #334155 !important;',
            'color: #f8fafc !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn:hover {',
            'background: #0f2b3e !important;',
            'border-color: #38bdf8 !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn .amt-cat-name {',
            'color: #f8fafc !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn .amt-cat-tag {',
            'color: #94a3b8 !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn.active {',
            'background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;',
            'border-color: #38bdf8 !important;',
            'color: #ffffff !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn.active .amt-cat-name {',
            'color: #ffffff !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-category-grid .amt-service-btn.active .amt-cat-tag {',
            'color: #e0f2fe !important;',
            '}',
            '.amt-count-badge {',
            'font-size: 0.65rem !important;',
            'font-weight: 700 !important;',
            'color: #0284c7 !important;',
            'background: #e0f2fe !important;',
            'border: 1px solid #bae6fd !important;',
            'padding: 2px 7px !important;',
            'border-radius: 10px !important;',
            'white-space: nowrap !important;',
            'flex-shrink: 0 !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-count-badge {',
            'color: #38bdf8 !important;',
            'background: rgba(2, 132, 199, 0.2) !important;',
            'border-color: rgba(56, 189, 248, 0.35) !important;',
            '}',
            '.amt-stb-card {',
            'background: #ffffff;',
            'border: 1.5px solid #0284c7;',
            'border-radius: 11px;',
            'padding: 8px 10px;',
            'margin: 6px 0;',
            'box-sizing: border-box;',
            'box-shadow: 0 2px 8px rgba(2, 132, 199, 0.08);',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-stb-card {',
            'background: #1e293b !important;',
            'border-color: #0284c7 !important;',
            'color: #f8fafc !important;',
            '}',
            '.amt-stb-top-row {',
            'display: flex;',
            'justify-content: space-between;',
            'align-items: center;',
            'margin-bottom: 4px;',
            'gap: 8px;',
            '}',
            '.amt-stb-badge {',
            'font-size: 0.64rem;',
            'font-weight: 800;',
            'text-transform: uppercase;',
            'padding: 2px 7px;',
            'border-radius: 10px;',
            'letter-spacing: 0.2px;',
            'white-space: nowrap;',
            '}',
            '.amt-stb-badge.amt-badge-union { background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; }',
            '.amt-stb-badge.amt-badge-express { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }',
            '.amt-stb-badge.amt-badge-combo { background: #f3e8ff; color: #6b21a8; border: 1px solid #e9d5ff; }',
            '.amt-stb-badge.amt-badge-outstation { background: #ecfeff; color: #0e7490; border: 1px solid #a5f3fc; }',
            '.amt-stb-badge.amt-badge-local { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-badge.amt-badge-union { background: rgba(2,132,199,0.2) !important; color: #38bdf8 !important; border-color: rgba(56,189,248,0.4) !important; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-badge.amt-badge-express { background: rgba(245,158,11,0.2) !important; color: #fbbf24 !important; border-color: rgba(245,158,11,0.4) !important; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-badge.amt-badge-combo { background: rgba(139,92,246,0.2) !important; color: #c084fc !important; border-color: rgba(139,92,246,0.4) !important; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-badge.amt-badge-outstation { background: rgba(14,116,144,0.2) !important; color: #22d3ee !important; border-color: rgba(34,211,238,0.4) !important; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-badge.amt-badge-local { background: rgba(22,101,52,0.2) !important; color: #4ade80 !important; border-color: rgba(74,222,128,0.4) !important; }',
            '.amt-stb-fare-box { text-align: right; }',
            '.amt-stb-fare-val { font-size: 1.05rem; font-weight: 900; color: #0284c7; display: block; line-height: 1.1; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-fare-val { color: #38bdf8 !important; }',
            '.amt-stb-fare-sub { font-size: 0.63rem; color: #64748b; font-weight: 600; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-fare-sub { color: #94a3b8 !important; }',
            '.amt-stb-tour-title { font-size: 0.88rem; font-weight: 800; color: #0f172a; margin-bottom: 3px; line-height: 1.25; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-tour-title { color: #ffffff !important; }',
            '.amt-stb-meta-row { display: flex; flex-wrap: wrap; gap: 6px 10px; font-size: 0.7rem; color: #475569; margin-bottom: 4px; padding-bottom: 4px; border-bottom: 1px dashed #e2e8f0; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-meta-row { color: #cbd5e1 !important; border-bottom-color: #334155 !important; }',
            '.amt-stb-meta-row span { display: inline-flex; align-items: center; gap: 3px; }',
            '.amt-stb-points-wrap { display: flex; flex-wrap: wrap; gap: 3px; align-items: center; margin-top: 3px; }',
            '.amt-stb-points-lbl { font-size: 0.68rem; font-weight: 700; color: #0f172a; margin-right: 2px; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-points-lbl { color: #f8fafc !important; }',
            '.amt-stb-point-chip { font-size: 0.63rem; background: #f1f5f9; color: #334155; padding: 1px 5px; border-radius: 4px; border: 1px solid #e2e8f0; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-point-chip { background: #0f172a !important; color: #cbd5e1 !important; border-color: #334155 !important; }',
            '.amt-chip-more { background: #e0f2fe; color: #0284c7; font-weight: 700; }',
            '[data-theme="dark"] #amtBookingModal .amt-chip-more { background: rgba(2,132,199,0.2) !important; color: #38bdf8 !important; }',
            '.amt-stb-disclaimer { margin-top: 4px; padding: 4px 6px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px; font-size: 0.65rem; color: #475569; line-height: 1.25; }',
            '[data-theme="dark"] #amtBookingModal .amt-stb-disclaimer { background: #0f172a !important; color: #cbd5e1 !important; border-left-color: #38bdf8 !important; }',
            '.amt-tour-insight-box {',
            'margin-top: 4px !important;',
            'margin-bottom: 6px !important;',
            'padding: 5px 8px !important;',
            'background: #f0fdf4 !important;',
            'border: 1px solid #bbf7d0 !important;',
            'border-radius: 8px !important;',
            'font-size: 0.71rem !important;',
            'color: #166534 !important;',
            'line-height: 1.3 !important;',
            'box-sizing: border-box !important;',
            '}',
            '[data-theme="dark"] #amtBookingModal .amt-tour-insight-box {',
            'background: rgba(16, 185, 129, 0.12) !important;',
            'border-color: rgba(16, 185, 129, 0.3) !important;',
            'color: #6ee7b7 !important;',
            '}',
            '.amt-quick-time-chips{display:flex;gap:4px;margin-top:4px;width:100%;box-sizing:border-box;}',
            '.amt-time-chip{flex:1 1 0;min-width:0;white-space:nowrap;height:auto;min-height:24px;padding:3px 2px;font-size:0.60rem;line-height:1.15;border-radius:4px;font-weight:700;border:1px solid #cbd5e1;background:#f8fafc;color:#475569;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;text-align:center;overflow:visible;box-sizing:border-box;}',
            '.amt-time-chip:hover{border-color:#0284c7;color:#0284c7;}',
            '.amt-time-chip.active{background:#0284c7;border-color:#0284c7;color:#ffffff;}',
            '.amt-cab-selector-wrap{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:6px 10px;margin-bottom:6px;box-sizing:border-box;width:100%;}',
            '.amt-cab-pill-grid{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;margin-top:3px;}',
            '.amt-cab-pill{display:flex;align-items:center;gap:8px;padding:7px 10px;border:1.5px solid #cbd5e1;border-radius:8px;background:#ffffff;cursor:pointer;transition:all 0.15s ease;width:100%;box-sizing:border-box;min-height:44px;}',
            '.amt-cab-pill:hover{border-color:#0284c7;background:#f0f9ff;}',
            '.amt-cab-pill.active{border-color:#0284c7;background:#f0f9ff;box-shadow:0 0 0 2px #0284c7;}',
            '.amt-cab-pill-radio{width:14px;height:14px;border-radius:50%;border:2px solid #94a3b8;flex-shrink:0;display:flex;align-items:center;justify-content:center;}',
            '.amt-cab-pill.active .amt-cab-pill-radio{border-color:#0284c7;background:#0284c7;}',
            '.amt-cab-pill-info{display:flex;flex-direction:column;text-align:left;flex:1 1 auto;}',
            '.amt-cab-pill-info strong{font-size:0.76rem;color:#0f172a;line-height:1.2;font-weight:700;}',
            '.amt-cab-pill-info span{font-size:0.62rem;color:#64748b;margin-top:1px;}',
            '.amt-cab-subnote{font-size:0.62rem;color:#475569;margin:4px 0 0;line-height:1.25;}',
            '.amt-compact-review-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:9px;padding:8px 10px;margin-bottom:10px;}',
            '.amt-crb-row{display:flex;justify-content:space-between;align-items:center;}',
            '.amt-crb-item{font-size:0.78rem;color:#0f172a;font-weight:600;}',
            '.amt-crb-fare{font-size:1.05rem;font-weight:900;color:#0e7490;}',
            '.amt-crb-meta{display:flex;flex-wrap:wrap;gap:8px;font-size:0.68rem;color:#64748b;margin-top:3px;}',
            '.amt-crb-zero{color:#15803d;font-weight:700;}',
            '.amt-step-title{font-size:1.02rem;font-weight:800;color:#0f172a;margin:0 0 3px;}',
            '.amt-step-sub{font-size:0.8rem;color:#64748b;margin:0 0 14px;}',
            '.amt-service-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;}',
            '.amt-service-btn{background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:8px 10px;text-align:left;cursor:pointer;transition:all 0.15s ease;display:flex;align-items:center;gap:8px;}',
            '.amt-service-btn:hover{border-color:#0891b2;background:#f0f9ff;}',
            '.amt-service-btn.active{border-color:#0891b2;background:#e0f2fe;box-shadow:0 0 0 2px rgba(8,145,178,0.25);}',
            '.amt-service-btn i{font-size:1.15rem;color:#0891b2;flex-shrink:0;}',
            '.amt-service-btn strong{display:block;font-size:0.8rem;color:#0f172a;line-height:1.2;}',
            '.amt-service-btn span{display:block;font-size:0.68rem;color:#64748b;margin-top:1px;}',
            '.amt-label{display:block;font-size:0.78rem;font-weight:700;color:#334155;margin-bottom:4px;}',
            '.amt-grid2{display:grid !important;grid-template-columns:1fr 1fr !important;gap:10px !important;margin-bottom:12px !important;}',
            '@media (max-width:480px){.amt-grid2{grid-template-columns:1fr !important;gap:8px !important;}}',
            '.amt-input,.amt-card input,.amt-card select,.amt-card textarea{min-width:0 !important;width:100%;padding:10px 12px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:16px;color:#0f172a;box-sizing:border-box;background:#ffffff;font-family:inherit;min-height:44px;}',
            '.amt-input:focus,.amt-card input:focus,.amt-card select:focus{outline:none;border-color:#0891b2 !important;box-shadow:0 0 0 3px rgba(8,145,178,0.1) !important;}',
            '.amt-autocomplete-box{position:relative;}',
            '.amt-autocomplete-list{position:absolute;top:100%;left:0;right:0;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 10px 20px rgba(0,0,0,0.1);max-height:180px;overflow-y:auto;z-index:1000;display:none;margin-top:4px;}',
            '.amt-autocomplete-item{padding:10px 12px;font-size:0.85rem;cursor:pointer;border-bottom:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:center;}',
            '.amt-autocomplete-item:hover{background:#f0f9ff;color:#0891b2;}',
            '.amt-tour-summary-card{background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:14px;padding:14px;margin:12px 0;box-sizing:border-box;}',
            '.amt-points-wrap{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;}',
            '.amt-point-badge{background:#ffffff;border:1px solid #cbd5e1;color:#334155;font-size:0.75rem;padding:3px 8px;border-radius:12px;display:inline-flex;align-items:center;gap:4px;}',
            '.amt-btn-row{display:flex !important;gap:8px !important;margin-top:16px !important;width:100% !important;box-sizing:border-box !important;align-items:stretch !important;}',
            '.amt-btn-back{flex:0 0 auto !important;min-width:75px !important;padding:11px 14px !important;border:1.5px solid #cbd5e1 !important;background:#ffffff !important;color:#475569 !important;border-radius:10px !important;font-weight:700 !important;cursor:pointer !important;font-size:0.88rem !important;box-sizing:border-box !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:4px !important;}',
            '.amt-btn-next{flex:1 1 auto !important;min-width:0 !important;padding:11px 14px !important;background:#0891b2 !important;color:#ffffff !important;border:none !important;border-radius:10px !important;font-weight:800 !important;cursor:pointer !important;font-size:0.88rem !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:6px !important;white-space:normal !important;word-break:break-word !important;box-sizing:border-box !important;}',
            '.amt-btn-next:hover{background:#0e7490 !important;}',
            '.amt-btn-confirm{background:#10b981 !important;color:#ffffff !important;}',
            '.amt-btn-confirm:hover{background:#059669 !important;}',
            /* Voucher Screen Styles */
            '.amt-voucher{background:#ffffff;border:1.5px solid #cbd5e1;border-radius:12px;padding:14px 16px;margin:8px 0;position:relative;box-sizing:border-box;box-shadow:0 4px 16px rgba(0,0,0,0.06);}',
            '.amt-voucher-badge{display:inline-flex;align-items:center;gap:5px;background:#fef3c7;color:#92400e;padding:4px 10px;border-radius:20px;font-size:0.72rem;font-weight:700;text-transform:uppercase;white-space:nowrap;line-height:1.2;flex-shrink:0;}',
            '.amt-voucher-terms{font-size:0.72rem;color:#475569;line-height:1.45;background:#f8fafc;padding:10px 12px;border-radius:10px;border:1px solid #e2e8f0;margin-top:8px;box-sizing:border-box;}',
            /* Dark Theme Overrides */
            '[data-theme="dark"] #amtBookingModal .amt-card{background:#0f172a !important;border-color:#334155 !important;color:#f8fafc !important;box-shadow:0 20px 50px rgba(0,0,0,0.7) !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-step-title{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-step-sub{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-label{color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-input,[data-theme="dark"] #amtBookingModal input,[data-theme="dark"] #amtBookingModal select,[data-theme="dark"] #amtBookingModal textarea{background:#1e293b !important;border-color:#334155 !important;color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-input::placeholder,[data-theme="dark"] #amtBookingModal input::placeholder{color:#64748b !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn{background:#1e293b !important;border-color:#334155 !important;color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn strong{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn span{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn:hover{background:#0f2b3e !important;border-color:#0891b2 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn.active{background:#0e3d54 !important;border-color:#06b6d4 !important;color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn.active strong{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-service-btn.active span{color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tour-summary-card{background:#1e293b !important;border:1.5px solid #334155 !important;color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-point-badge{background:#0f172a !important;border:1px solid #334155 !important;color:#e2e8f0 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-btn-back{background:#1e293b !important;border-color:#334155 !important;color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-btn-back:hover{background:#334155 !important;color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-autocomplete-list{background:#1e293b !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-autocomplete-item{border-bottom:1px solid #334155 !important;color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-autocomplete-item:hover{background:#0f2b3e !important;color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-voucher{background:#1e293b !important;border-color:#0891b2 !important;color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-voucher-badge{background:rgba(217,119,6,0.2) !important;color:#fde68a !important;border:1px solid rgba(217,119,6,0.4) !important;}',
            'body.booking-portal-page{background:#0b1329 !important;min-height:100vh;margin:0;padding:0;}',
            'body.booking-portal-page .amt-modal-overlay{display:flex !important;position:relative !important;inset:auto !important;top:auto !important;left:auto !important;right:auto !important;bottom:auto !important;width:100% !important;height:auto !important;min-height:auto !important;background:transparent !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;padding:8px 12px 30px !important;z-index:1 !important;overflow:visible !important;}',
            'body.booking-portal-page .amt-card{max-height:none !important;overflow:visible !important;box-shadow:0 25px 60px rgba(0,0,0,0.6) !important;margin:0 auto !important;border:1px solid rgba(255,255,255,0.1) !important;}',
            'body.booking-portal-page .amt-card-body{max-height:none !important;overflow:visible !important;}',
            'body.booking-portal-page .amt-close-btn{display:none !important;}',
            /* Multi-Tour Dynamic Circuit UI */
            '.amt-add-tour-btn{background:#f0fdf4;border:1.5px dashed #16a34a;color:#15803d;border-radius:10px;padding:9px 12px;font-size:0.82rem;font-weight:700;cursor:pointer;width:100%;margin-bottom:10px;display:flex;align-items:center;justify-content:center;gap:6px;transition:all 0.15s ease;box-sizing:border-box;min-height:44px;}',
            '.amt-add-tour-btn:hover{background:#dcfce7;border-color:#15803d;}',
            '.amt-remove-tour-btn{background:#fee2e2;color:#ef4444;border:1px solid #fca5a5;border-radius:8px;min-width:44px;min-height:44px;width:44px;height:44px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;transition:background 0.15s ease;box-sizing:border-box;}',
            '.amt-remove-tour-btn:hover{background:#fecaca;}',
            '.amt-extra-tour-row{display:flex;align-items:flex-end;gap:8px;margin-bottom:10px;background:#f8fafc;padding:8px 10px;border:1px solid #e2e8f0;border-radius:10px;box-sizing:border-box;}',
            '.amt-multi-tour-summary-banner{background:#f0f9ff;border:1.5px solid #bae6fd;border-radius:10px;padding:8px 12px;font-size:0.8rem;color:#0369a1;margin-bottom:12px;display:none;align-items:center;justify-content:space-between;font-weight:700;box-sizing:border-box;}',
            '.amt-multi-day-box{margin-top:10px;margin-bottom:12px;padding:10px 12px;background:#f8fafc;border:1.5px solid #cbd5e1;border-radius:10px;box-sizing:border-box;}',
            '.amt-multi-day-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;padding-top:8px;border-top:1px dashed #cbd5e1;align-items:center;box-sizing:border-box;}',
            '.amt-v-logo{width:38px;height:38px;object-fit:contain;flex-shrink:0;}',
            '[data-theme="dark"] #amtBookingModal .amt-add-tour-btn{background:#064e3b !important;border-color:#10b981 !important;color:#6ee7b7 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-extra-tour-row{background:#1e293b !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-remove-tour-btn{background:#7f1d1d !important;border-color:#dc2626 !important;color:#fca5a5 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-multi-tour-summary-banner{background:#0e3d54 !important;border-color:#06b6d4 !important;color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-multi-day-box{background:#1e293b !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-multi-day-row{border-color:#334155 !important;}',
            /* Step 4 Review Card Styles (Light & Dark) */
            '.amt-rev-tour-card{background:#ffffff;border:1.5px solid #0284c7;border-left:4px solid #0284c7;border-radius:10px;padding:10px 12px;margin-bottom:10px;box-sizing:border-box;text-align:left;}',
            '.amt-rev-tour-hdr{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;gap:8px;}',
            '.amt-rev-tour-title{color:#0f172a;font-size:0.95rem;display:block;font-weight:800;line-height:1.25;}',
            '.amt-rev-tour-dur{font-size:0.73rem;color:#0284c7;font-weight:700;}',
            '.amt-rev-tour-rate-col{text-align:right;flex-shrink:0;}',
            '.amt-rev-tour-fare{font-size:1.1rem;font-weight:800;color:#16a34a;}',
            '.amt-rev-tour-rate-sub{display:block;font-size:0.68rem;color:#64748b;font-weight:600;}',
            '.amt-rev-schedule-box{font-size:0.76rem;color:#475569;margin-bottom:6px;background:#f8fafc;padding:5px 8px;border-radius:6px;border:1px solid #e2e8f0;line-height:1.3;}',
            '.amt-rev-schedule-box strong{color:#0f172a;}',
            '.amt-rev-points-title{font-size:0.74rem;font-weight:800;color:#0f2b48;text-transform:uppercase;margin:6px 0 4px;display:flex;align-items:center;gap:5px;}',
            '.amt-rev-points-title i{color:#0284c7;}',
            '.amt-rev-route-box{font-size:0.74rem;color:#0369a1;background:#f0f9ff;padding:6px 8px;border-radius:6px;border:1px solid #bae6fd;line-height:1.35;}',
            '.amt-rev-extra-box{margin-top:6px;padding:5px 8px;background:#fff1f2;border:1px solid #fecdd3;border-radius:6px;font-size:0.72rem;color:#be123c;}',
            '.amt-rev-tariff-card{background:#f8fafc;border:1.5px solid #cbd5e1;border-radius:10px;padding:10px 12px;margin-top:8px;box-sizing:border-box;text-align:left;}',
            '.amt-rev-tariff-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;}',
            '.amt-rev-tariff-lbl{font-size:0.74rem;color:#64748b;font-weight:700;text-transform:uppercase;}',
            '.amt-rev-tariff-breakdown{font-size:0.7rem;color:#0284c7;font-weight:600;}',
            '.amt-rev-tariff-amt-col{text-align:right;}',
            '.amt-rev-tariff-amt{font-size:1.35rem;font-weight:900;color:#0e7490;line-height:1.1;}',
            '.amt-rev-tariff-terms{display:block;font-size:0.68rem;font-weight:800;}',
            '.amt-rev-advance{color:#b45309;}',
            '.amt-rev-zero-advance{color:#15803d;}',
            '.amt-rev-meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 10px;font-size:0.78rem;}',
            '.amt-rev-meta-cell{display:flex;flex-direction:column;line-height:1.25;}',
            '.amt-rev-meta-lbl{color:#64748b;font-size:0.7rem;font-weight:600;}',
            '.amt-rev-meta-val{color:#0f172a;}',
            '.amt-rev-vehicle-banner{grid-column:1/-1;font-size:0.75rem;color:#0369a1;background:#eff6ff;padding:6px 9px;border-radius:6px;border:1px solid #bfdbfe;margin-top:2px;line-height:1.35;}',
            '.amt-rev-vehicle-banner strong{color:#0369a1;}',
            '.amt-rev-zone-notice{margin-top:8px;padding:8px 10px;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;font-size:0.74rem;color:#92400e;line-height:1.35;}',
            '.amt-rev-ai-advisory{margin-top:8px;padding:7px 10px;background:linear-gradient(135deg,#f0fdf4 0%,#ecfeff 100%);border:1px solid #a7f3d0;border-left:3.5px solid #10b981;border-radius:6px;font-size:0.73rem;color:#065f46;line-height:1.35;display:flex;align-items:flex-start;gap:7px;box-sizing:border-box;}',
            '.amt-rev-footer-note{font-size:0.73rem;color:#64748b;margin-top:8px;line-height:1.3;}',
            '.amt-rev-footer-note i{color:#16a34a;}',
            /* Step 4 Review Card Dark Mode Overrides */
            '[data-theme="dark"] #amtBookingModal .amt-rev-tour-card{background:#1e293b !important;border-color:#0284c7 !important;border-left-color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tour-title{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tour-dur{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tour-fare{color:#4ade80 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tour-rate-sub{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-schedule-box{background:#0f172a !important;border-color:#334155 !important;color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-schedule-box strong{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-points-title{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-points-title i{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-route-box{background:rgba(8,145,178,0.18) !important;border-color:rgba(8,145,178,0.4) !important;color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-extra-box{background:rgba(225,29,72,0.18) !important;border-color:rgba(225,29,72,0.4) !important;color:#fda4af !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tariff-card{background:#1e293b !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tariff-hdr{border-bottom-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tariff-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tariff-breakdown{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-tariff-amt{color:#22d3ee !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-advance{color:#fbbf24 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-zero-advance{color:#4ade80 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-meta-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-meta-val{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-vehicle-banner{background:rgba(8,145,178,0.2) !important;border-color:rgba(8,145,178,0.4) !important;color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-vehicle-banner strong{color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-zone-notice{background:rgba(217,119,6,0.18) !important;border-color:rgba(217,119,6,0.4) !important;color:#fde68a !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-ai-advisory{background:rgba(16,185,129,0.12) !important;border-color:rgba(16,185,129,0.3) !important;border-left-color:#10b981 !important;color:#a7f3d0 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-ai-advisory strong{color:#34d399 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-footer-note{color:#94a3b8 !important;}',
            /* Review Card 9-Part Header & Ref Box */
            '.amt-rev-header-bar{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;padding-bottom:8px;border-bottom:1.5px solid #e2e8f0;}',
            '.amt-rev-service-badge{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:8px;font-size:0.74rem;font-weight:800;text-transform:uppercase;letter-spacing:0.3px;border:1px solid;white-space:nowrap;}',
            '.amt-v-ref-box{display:inline-flex;align-items:center;gap:6px;font-size:0.74rem;color:#475569;white-space:nowrap !important;background:#f1f5f9;padding:3px 8px;border-radius:6px;border:1px solid #e2e8f0;}',
            '.amt-v-ref-lbl{font-weight:700;color:#64748b;white-space:nowrap !important;}',
            '.amt-v-ref-val{color:#0284c7;font-family:monospace,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:0.85rem;font-weight:800;white-space:nowrap !important;letter-spacing:0.5px;}',
            /* Review Card Dynamic Policy Box */
            '.amt-rev-policy-card{background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:10px 12px;margin:10px 0;font-size:0.77rem;color:#92400e;line-height:1.45;}',
            '.amt-rev-policy-title{font-weight:800;font-size:0.8rem;margin-bottom:6px;display:flex;align-items:center;gap:6px;color:#b45309;}',
            '.amt-policy-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.74rem;}',
            '.amt-policy-item{display:flex;align-items:flex-start;gap:6px;background:rgba(254,243,199,0.4);padding:5px 7px;border-radius:6px;}',
            '.amt-policy-icon{color:#b45309;font-size:0.82rem;margin-top:1px;flex-shrink:0;}',
            '.amt-policy-text-box{display:flex;flex-direction:column;}',
            '.amt-policy-item-title{font-weight:700;color:#78350f;font-size:0.73rem;}',
            '.amt-policy-item-text{font-size:0.69rem;color:#92400e;line-height:1.25;}',
            '.amt-policy-note{margin-top:6px;padding-top:6px;border-top:1px dashed #fcd34d;font-size:0.72rem;color:#78350f;font-weight:600;}',
            /* Step 4 Review Card Dark Mode Overrides */
            '[data-theme="dark"] #amtBookingModal .amt-rev-header-bar{border-bottom-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-policy-card{background:rgba(217,119,6,0.15) !important;border-color:rgba(217,119,6,0.35) !important;color:#fde68a !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-rev-policy-title{color:#f59e0b !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-policy-item{background:rgba(15,23,42,0.6) !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-policy-icon{color:#fbbf24 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-policy-item-title{color:#fef08a !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-policy-item-text{color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-policy-note{border-top-color:rgba(217,119,6,0.3) !important;color:#fde68a !important;}',
            // STREAMLINED COMPACT VOUCHER STYLES (SCREEN & PRINT)
            '.amt-v-card-streamlined{background:#ffffff;border:1.5px solid #cbd5e1;border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:8px;box-sizing:border-box;width:100%;text-align:left;}',
            '.amt-v-hdr{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1.5px solid #e2e8f0;padding-bottom:6px;gap:8px;}',
            '.amt-v-hdr-left{display:flex;align-items:center;gap:10px;min-width:0;flex-shrink:0;}',
            '.amt-v-brand{font-size:0.98rem;font-weight:800;color:#0f2b48;letter-spacing:0.4px;line-height:1.2;white-space:nowrap !important;}',
            '.amt-v-sub{font-size:0.72rem;color:#0284c7;font-weight:700;margin-top:1px;}',
            '.amt-v-hdr-right{text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;}',
            '.amt-v-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:0.68rem;font-weight:800;border:1px solid;text-transform:uppercase;white-space:nowrap;}',
            '.amt-v-ref{font-size:0.73rem;color:#64748b;margin-top:2px;}',
            '.amt-v-ref strong{color:#0284c7;font-family:monospace;font-size:0.84rem;}',
            '.amt-v-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:8px 10px;box-sizing:border-box;}',
            '.amt-v-cell{display:flex;flex-direction:column;font-size:0.76rem;line-height:1.25;}',
            '.amt-v-lbl{font-size:0.63rem;color:#64748b;text-transform:uppercase;font-weight:700;letter-spacing:0.3px;margin-bottom:1px;}',
            '.amt-v-val{color:#0f172a;word-break:break-word;}',
            '.amt-v-vehicle-cell{grid-column:1/-1;border-top:1px dashed #cbd5e1;padding-top:5px;margin-top:2px;}',
            '.amt-v-vehicle-wrap{font-size:0.76rem;color:#0f2b48;display:flex;align-items:center;flex-wrap:wrap;gap:5px;line-height:1.35;}',
            '.amt-v-vehicle-lbl{font-size:0.67rem;color:#64748b;text-transform:uppercase;font-weight:700;letter-spacing:0.3px;}',
            '.amt-v-vehicle-val{color:#0f2b48;font-weight:700;}',
            '.amt-v-notes-chip{background:#eff6ff;border:1px dashed #93c5fd;border-radius:6px;padding:5px 8px;font-size:0.73rem;color:#1e40af;line-height:1.3;}',
            '.amt-v-tour-strip{background:#ffffff;border:1.5px solid #0284c7;border-left:3.5px solid #0284c7;border-radius:8px;padding:7px 10px;box-sizing:border-box;}',
            '.amt-v-tour-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;gap:6px;}',
            '.amt-v-tour-name{font-size:0.85rem;font-weight:800;color:#0f172a;}',
            '.amt-v-tour-dur{font-size:0.72rem;color:#0284c7;font-weight:700;background:#e0f2fe;padding:2px 7px;border-radius:10px;white-space:nowrap;}',
            '.amt-v-tour-meta{font-size:0.74rem;color:#0f2b48;display:flex;justify-content:space-between;align-items:center;margin-top:2px;}',
            '.amt-v-tour-rate{font-size:0.7rem;color:#16a34a;font-weight:700;}',
            '.amt-v-points-box{margin-top:3px;}',
            '.amt-v-points-head{font-size:0.68rem;font-weight:700;color:#475569;text-transform:uppercase;margin-bottom:3px;}',
            '.amt-v-chips-wrap{display:flex;flex-wrap:wrap;gap:3.5px;}',
            '.amt-v-chip{background:#f1f5f9;color:#334155;font-size:0.69rem;font-weight:600;padding:2px 7px;border-radius:4px;border:1px solid #e2e8f0;}',
            '.amt-v-route-strip{display:flex;flex-wrap:wrap;align-items:center;gap:5px;font-size:0.73rem;font-weight:600;color:#1e293b;margin-top:3px;}',
            '.amt-v-route-step{background:#f8fafc;border:1px solid #cbd5e1;padding:2px 6px;border-radius:4px;}',
            '.amt-v-route-arrow{color:#0284c7;font-weight:800;}',
            '.amt-v-ai-advisory{background:linear-gradient(135deg,#f0fdf4 0%,#ecfeff 100%);border:1px solid #a7f3d0;border-left:3.5px solid #10b981;border-radius:6px;padding:5px 9px;display:flex;align-items:flex-start;gap:7px;box-sizing:border-box;}',
            '.amt-v-ai-badge{display:inline-flex;align-items:center;background:#059669;color:#ffffff;font-size:0.62rem;font-weight:800;letter-spacing:0.4px;text-transform:uppercase;padding:2px 6px;border-radius:4px;white-space:nowrap;flex-shrink:0;}',
            '.amt-v-ai-text{font-size:0.71rem;color:#065f46;line-height:1.35;flex:1;}',
            '.amt-v-fare-bar{display:flex;justify-content:space-between;align-items:center;background:#f8fafc;border:1.5px solid #cbd5e1;border-radius:8px;padding:7px 10px;box-sizing:border-box;}',
            '.amt-v-fare-left{display:flex;flex-direction:column;}',
            '.amt-v-fare-lbl{font-size:0.63rem;color:#64748b;font-weight:800;letter-spacing:0.3px;}',
            '.amt-v-fare-amt{font-size:1.3rem;font-weight:900;color:#0e7490;line-height:1.1;}',
            '.amt-v-fare-breakdown{font-size:0.65rem;color:#64748b;}',
            '.amt-v-fare-right{text-align:right;display:flex;flex-direction:column;}',
            '.amt-v-pay-badge{font-size:0.78rem;font-weight:800;}',
            '.amt-v-pay-note{font-size:0.66rem;color:#64748b;}',
            '.amt-v-terms-compact{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;font-size:0.74rem;color:#475569;line-height:1.42;display:flex;flex-direction:column;gap:3px;box-sizing:border-box;}',
            '.amt-v-terms-title{font-size:0.74rem;font-weight:800;color:#0f2b48;text-transform:uppercase;letter-spacing:0.3px;margin-bottom:2px;}',
            '.amt-v-terms-list{list-style-type:disc;padding-left:16px;margin:0;display:flex;flex-direction:column;gap:3.5px;}',
            '.amt-v-terms-list li{font-size:0.73rem;line-height:1.42;color:#475569;text-align:left;}',
            '.amt-v-terms-list li strong{color:#0f2b48;font-weight:700;}',
            '.amt-v-ftr{display:flex;justify-content:space-between;font-size:0.63rem;color:#64748b;border-top:1px dashed #cbd5e1;padding-top:4px;line-height:1.35;}',
            /* Dark Mode Voucher On-Screen Overrides */
            '[data-theme="dark"] #amtBookingModal .amt-v-card-streamlined{background:#1e293b !important;border:1.5px solid #334155 !important;box-shadow:0 10px 30px rgba(0,0,0,0.5) !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-hdr{border-bottom-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-brand{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-sub{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ref{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ref strong{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ref-box{background:#0f172a !important;border-color:#334155 !important;color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ref-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ref-val{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-grid{background:#0f172a !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-val{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-val strong{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-vehicle-cell{border-top-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-vehicle-wrap{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-vehicle-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-vehicle-val{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-notes-chip{background:rgba(8,145,178,0.18) !important;border-color:rgba(8,145,178,0.4) !important;color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-tour-strip{background:#0f172a !important;border-color:#0284c7 !important;border-left-color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-tour-name{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-tour-dur{background:rgba(8,145,178,0.25) !important;color:#38bdf8 !important;border:1px solid rgba(8,145,178,0.4) !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-tour-meta{color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-tour-meta strong{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-tour-rate{color:#4ade80 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ai-advisory{background:rgba(16,185,129,0.12) !important;border-color:rgba(16,185,129,0.3) !important;border-left-color:#10b981 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ai-badge{background:#059669 !important;color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ai-text{color:#a7f3d0 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ai-text strong{color:#34d399 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-fare-bar{background:#0f172a !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-fare-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-fare-amt{color:#22d3ee !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-fare-breakdown{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-pay-badge{color:#4ade80 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-pay-note{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-terms-compact{background:#0f172a !important;border-color:#334155 !important;color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-terms-title{color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-terms-list li{color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-terms-list li strong{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-ftr{color:#94a3b8 !important;border-top-color:#334155 !important;}',
            /* Responsive Mobile Layout (< 640px) */
            '@media (max-width:640px){',
            '  .amt-v-brand{font-size:0.86rem !important;white-space:nowrap !important;}',
            '  .amt-header-brand{white-space:nowrap !important;}',
            '  .amt-rev-header-bar{flex-direction:column !important;align-items:stretch !important;gap:6px !important;}',
            '  .amt-rev-service-badge{align-self:flex-start !important;}',
            '  .amt-rev-tour-card{padding:9px 10px !important;box-sizing:border-box !important;width:100% !important;}',
            '  .amt-rev-tour-hdr{flex-direction:column !important;align-items:flex-start !important;gap:4px !important;}',
            '  .amt-rev-tour-title{width:100% !important;word-break:break-word !important;display:block !important;}',
            '  .amt-rev-tour-dur{display:inline-block !important;margin-top:3px !important;}',
            '  .amt-rev-tour-rate-col{text-align:left !important;display:flex !important;align-items:baseline !important;gap:6px !important;margin-top:2px !important;}',
            '  .amt-rev-meta-grid{grid-template-columns:1fr;gap:6px;}',
            '  .amt-rev-tariff-card{padding:9px 10px !important;box-sizing:border-box !important;width:100% !important;}',
            '  .amt-rev-tariff-hdr{flex-direction:column;align-items:flex-start;gap:4px;}',
            '  .amt-rev-tariff-amt-col{text-align:left;}',
            '  .amt-voucher,#amtVoucherContent{padding:0 !important;border:none !important;box-shadow:none !important;background:transparent !important;margin:0 !important;width:100% !important;box-sizing:border-box !important;}',
            '  .amt-v-card-streamlined{padding:10px 10px !important;gap:7px !important;width:100% !important;box-sizing:border-box !important;overflow:hidden !important;border-radius:10px !important;margin:0 !important;}',
            '  .amt-v-hdr{flex-direction:column;gap:6px;align-items:stretch;}',
            '  .amt-v-hdr-left{width:100%;}',
            '  .amt-v-hdr-right{text-align:left;display:flex !important;flex-direction:column !important;align-items:stretch !important;gap:5px !important;width:100% !important;border-top:1px dashed #e2e8f0 !important;padding-top:6px !important;}',
            '  .amt-v-hdr-right .amt-v-badge{align-self:flex-start !important;margin-bottom:2px !important;}',
            '  .amt-v-hdr-right .amt-v-ref-box,.amt-rev-header-bar .amt-v-ref-box{width:100% !important;box-sizing:border-box !important;display:flex !important;justify-content:space-between !important;align-items:center !important;padding:4px 8px !important;}',
            '  [data-theme="dark"] #amtBookingModal .amt-v-hdr-right{border-top-color:#334155 !important;}',
            '  .amt-v-grid{grid-template-columns:1fr;gap:6px;padding:7px 9px;}',
            '  .amt-v-tour-hdr{display:flex !important;flex-direction:column !important;align-items:flex-start !important;gap:4px !important;}',
            '  .amt-v-tour-name{width:100% !important;font-size:0.88rem !important;line-height:1.35 !important;word-break:break-word !important;}',
            '  .amt-v-tour-dur{align-self:flex-start !important;margin-top:2px !important;display:inline-flex !important;align-items:center !important;gap:4px !important;white-space:normal !important;font-size:0.72rem !important;}',
            '  .amt-v-tour-meta{flex-wrap:wrap !important;gap:4px !important;}',
            '  .amt-v-fare-bar{flex-direction:column;align-items:flex-start;gap:6px;padding:8px 10px;}',
            '  .amt-v-fare-right{text-align:left;width:100%;border-top:1px dashed #e2e8f0;padding-top:5px;}',
            '  [data-theme="dark"] #amtBookingModal .amt-v-fare-right{border-top-color:#334155 !important;}',
            '  .amt-v-ftr{flex-direction:column;gap:3px;text-align:center;}',
            '  .amt-policy-grid{grid-template-columns:1fr !important;}',
            '  .portal-booking-container{padding:0 6px !important;width:100% !important;box-sizing:border-box !important;overflow-x:hidden !important;}',
            '  .portal-card-body,.amt-card-body,body.booking-portal-page .amt-card-body{padding:12px 8px !important;box-sizing:border-box !important;overflow-x:hidden !important;}',
            '  #amtReviewCard{padding:8px !important;width:100% !important;box-sizing:border-box !important;}',
            '}',
            '@media (max-width:380px){',
            '  .amt-v-brand{font-size:0.75rem !important;letter-spacing:0.2px !important;white-space:nowrap !important;}',
            '}',
            /* 28. World-Class Booking Engine Upgrades */
            '.amt-stepper{display:flex;align-items:center;justify-content:space-between;margin-top:10px;margin-bottom:6px;padding:2px 4px;position:relative;user-select:none;}',
            '.amt-step-item{display:flex;flex-direction:column;align-items:center;gap:4px;position:relative;z-index:2;cursor:default;}',
            '.amt-step-bubble{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.15);border:1.5px solid rgba(255,255,255,0.3);color:#cbd5e1;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;transition:all 0.25s ease;}',
            '.amt-step-check{display:none;font-size:0.72rem;}',
            '.amt-step-name{font-size:0.7rem;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.3px;transition:color 0.25s ease;}',
            '.amt-step-divider{flex:1;height:2px;background:rgba(255,255,255,0.2);margin:0 6px 16px;position:relative;z-index:1;transition:background 0.3s ease;}',
            '.amt-step-divider.completed{background:#10b981;}',
            '.amt-step-item.active .amt-step-bubble{background:#0284c7;border-color:#38bdf8;color:#ffffff;box-shadow:0 0 12px rgba(56,189,248,0.5);transform:scale(1.08);}',
            '.amt-step-item.active .amt-step-name{color:#ffffff;font-weight:800;}',
            '.amt-step-item.completed .amt-step-bubble{background:#10b981;border-color:#34d399;color:#ffffff;}',
            '.amt-step-item.completed .amt-step-num{display:none;}',
            '.amt-step-item.completed .amt-step-check{display:inline-block;}',
            '.amt-step-item.completed .amt-step-name{color:#34d399;}',
            /* Sub-Category Switcher Filter Bar */
            '.amt-sightseeing-filter-bar{display:flex;gap:6px;margin-bottom:10px;padding:4px;background:#f1f5f9;border-radius:12px;border:1px solid #e2e8f0;box-sizing:border-box;}',
            '.amt-tf-pill{flex:1;padding:8px 6px;border:none;background:transparent;border-radius:9px;font-size:0.78rem;font-weight:700;color:#475569;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;transition:all 0.18s ease;text-align:center;min-height:46px;box-sizing:border-box;}',
            '.amt-tf-pill:hover{background:rgba(255,255,255,0.7);color:#0f2b48;}',
            '.amt-tf-pill.active{background:#ffffff;color:#0284c7;font-weight:800;box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1px solid #bae6fd;}',
            '.amt-tf-pill-title{font-size:0.76rem;font-weight:800;line-height:1.2;}',
            '.amt-tf-pill-badge{font-size:0.65rem;font-weight:700;padding:1px 6px;border-radius:10px;background:#e0f2fe;color:#0369a1;white-space:nowrap;}',
            '.amt-tf-pill.active .amt-tf-pill-badge{background:#0284c7;color:#ffffff;}',
            /* Clarity Guidance Box */
            '.amt-tour-guide-box{background:#f0fdf4;border:1.5px solid #86efac;border-left:4px solid #16a34a;border-radius:10px;padding:8px 12px;margin-bottom:12px;font-size:0.76rem;color:#14532d;line-height:1.4;box-sizing:border-box;display:flex;align-items:flex-start;gap:8px;}',
            '.amt-tour-guide-box.standard{background:#eff6ff;border-color:#93c5fd;border-left-color:#0284c7;color:#1e3a8a;}',
            '.amt-tour-guide-box.all{background:#f8fafc;border-color:#cbd5e1;border-left-color:#64748b;color:#334155;}',
            /* Responsive Grid for Visual Tour Cards */
            '.amt-visual-tour-cards{display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:12px;box-sizing:border-box;}',
            '@media (min-width:641px) and (max-width:991px){.amt-visual-tour-cards{grid-template-columns:repeat(2,1fr) !important;gap:10px !important;}}',
            '@media (min-width:992px){.amt-visual-tour-cards{grid-template-columns:repeat(3,1fr) !important;gap:12px !important;}.portal-booking-container{max-width:1000px !important;}.amt-card,#amtBookingModal .amt-card{max-width:940px !important;}}',
            /* Card Layout */
            '.amt-vt-card{background:#ffffff;border:1.5px solid #cbd5e1;border-radius:12px;padding:12px;cursor:pointer;transition:all 0.2s cubic-bezier(0.16,1,0.3,1);box-sizing:border-box;position:relative;text-align:left;outline:none;display:flex;flex-direction:column;justify-content:space-between;min-height:140px;}',
            '.amt-vt-card:hover{border-color:#0284c7;box-shadow:0 6px 16px rgba(2,132,199,0.12);transform:translateY(-2px);}',
            '.amt-vt-card.active{border-color:#0284c7;background:#f0f9ff;box-shadow:0 0 0 2px #0284c7,0 6px 18px rgba(2,132,199,0.18);}',
            '.amt-vt-card-top{display:flex;flex-direction:column;gap:5px;}',
            '.amt-vt-badge-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;}',
            '.amt-vt-tag-badge{display:inline-flex;align-items:center;gap:4px;padding:2px 7px;border-radius:6px;font-size:0.66rem;font-weight:800;text-transform:uppercase;letter-spacing:0.3px;white-space:nowrap;}',
            '.amt-vt-tag-badge.express{background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;}',
            '.amt-vt-tag-badge.standard{background:#e0f2fe;color:#0369a1;border:1px solid #bae6fd;}',
            '.amt-vt-tag-badge.heritage{background:#fef3c7;color:#92400e;border:1px solid #fde68a;}',
            '.amt-vt-tag-badge.wai{background:#fae8ff;color:#86198f;border:1px solid #f5d0fe;}',
            '.amt-vt-tag-badge.lake{background:#cffafe;color:#155e75;border:1px solid #a5f3fc;}',
            '.amt-vt-radio{width:16px;height:16px;border-radius:50%;border:2px solid #94a3b8;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s ease;}',
            '.amt-vt-card.active .amt-vt-radio{border-color:#0284c7;background:#0284c7;}',
            '.amt-vt-radio-dot{width:6px;height:6px;border-radius:50%;background:#ffffff;display:none;}',
            '.amt-vt-card.active .amt-vt-radio-dot{display:block;}',
            '.amt-vt-title{font-size:0.9rem;font-weight:800;color:#0f2b48;line-height:1.25;}',
            '.amt-vt-desc{font-size:0.73rem;color:#475569;line-height:1.35;margin:3px 0 6px;}',
            '.amt-vt-card-bottom{display:flex;flex-direction:column;gap:6px;margin-top:auto;}',
            '.amt-vt-actions{display:flex;align-items:center;justify-content:space-between;}',
            '.amt-vt-accordion-btn{background:transparent;border:none;padding:3px 0;color:#0284c7;font-size:0.72rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:4px;transition:color 0.15s ease;}',
            '.amt-vt-accordion-btn:hover{color:#0369a1;text-decoration:underline;}',
            '.amt-vt-arrow{font-size:0.62rem;transition:transform 0.2s ease;}',
            '.amt-vt-accordion-btn.expanded .amt-vt-arrow{transform:rotate(180deg);}',
            '.amt-vt-points-panel{margin-top:6px;padding:8px 10px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;}',
            '.amt-vt-chips-wrap{display:flex;flex-wrap:wrap;gap:3.5px;}',
            '.amt-vt-chip{font-size:0.67rem;font-weight:600;color:#334155;background:#ffffff;border:1px solid #cbd5e1;padding:2px 6px;border-radius:4px;display:inline-flex;align-items:center;gap:4px;}',
            '.amt-vt-price-row{display:flex;align-items:baseline;justify-content:space-between;padding-top:6px;border-top:1px dashed #e2e8f0;margin-top:4px;}',
            '.amt-vt-dur-wrap{display:flex;align-items:center;gap:4px;}',
            '.amt-vt-dur{font-size:0.72rem;font-weight:700;color:#0284c7;}',
            '.amt-vt-fare-wrap{display:flex;align-items:baseline;gap:4px;text-align:right;}',
            '.amt-vt-fare{font-size:1.12rem;font-weight:900;color:#0e7490;}',
            '.amt-vt-fare-sub{font-size:0.65rem;color:#64748b;font-weight:600;}',
            /* Confirmed Selection Banner */
            '.amt-selected-tour-banner{background:linear-gradient(135deg,#f0fdf4 0%,#ecfeff 100%);border:1.5px solid #10b981;border-radius:12px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:12px;box-sizing:border-box;box-shadow:0 3px 12px rgba(16,185,129,0.1);}',
            '.amt-stb-icon{font-size:1.4rem;color:#10b981;flex-shrink:0;}',
            '.amt-stb-content{flex:1;min-width:0;}',
            '.amt-stb-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:2px;}',
            '.amt-stb-badge{font-size:0.65rem;font-weight:800;background:#059669;color:#ffffff;padding:2px 7px;border-radius:4px;text-transform:uppercase;letter-spacing:0.3px;}',
            '.amt-stb-fare{font-size:1.12rem;font-weight:900;color:#065f46;}',
            '.amt-stb-title{font-size:0.92rem;font-weight:800;color:#0f2b48;line-height:1.25;margin-bottom:4px;word-break:break-word;}',
            '.amt-stb-meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;font-size:0.72rem;color:#065f46;font-weight:600;}',
            '.amt-stb-meta span{display:inline-flex;align-items:center;gap:4px;}',
            '.amt-quick-time-section{margin-bottom:8px;}',
            '.amt-quick-time-lbl{font-size:0.73rem;font-weight:700;color:#334155;margin-bottom:5px;display:flex;align-items:center;gap:4px;}',
            '.amt-time-pills{display:flex;flex-wrap:wrap;gap:6px;}',
            '.amt-time-pill{background:#ffffff;border:1.5px solid #cbd5e1;border-radius:8px;padding:6px 9px;font-size:0.74rem;font-weight:700;color:#1e293b;cursor:pointer;display:inline-flex;align-items:center;gap:5px;transition:all 0.18s ease;}',
            '.amt-time-pill:hover{border-color:#0284c7;background:#f0f9ff;color:#0284c7;}',
            '.amt-time-pill.active{background:#0284c7;border-color:#0284c7;color:#ffffff;box-shadow:0 2px 8px rgba(2,132,199,0.3);}',
            '.amt-pill-tag{font-size:0.64rem;font-weight:600;opacity:0.85;background:rgba(0,0,0,0.06);padding:1px 4px;border-radius:3px;}',
            '.amt-time-pill.active .amt-pill-tag{background:rgba(255,255,255,0.2);}',
            '.amt-vehicle-spec-card{background:linear-gradient(135deg,#f8fafc 0%,#f0f9ff 100%);border:1.5px solid #bae6fd;border-radius:12px;padding:10px 12px;margin-bottom:12px;box-sizing:border-box;}',
            '.amt-vspec-hdr{display:flex;align-items:center;gap:10px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px dashed #cbd5e1;}',
            '.amt-vspec-avatar{width:34px;height:34px;border-radius:8px;background:#0284c7;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}',
            '.amt-vspec-title{font-size:0.82rem;font-weight:800;color:#0f2b48;}',
            '.amt-vspec-sub{font-size:0.71rem;color:#0284c7;font-weight:600;}',
            '.amt-vspec-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 10px;}',
            '.amt-vspec-cell{display:flex;align-items:center;gap:6px;font-size:0.72rem;color:#334155;line-height:1.25;}',
            '.amt-vspec-cell strong{color:#0f172a;display:block;}',
            '.amt-vspec-cell span{color:#64748b;font-size:0.68rem;}',
            '.amt-desktop-qr-card{display:flex;align-items:center;gap:12px;background:#f0fdf4;border:1.5px solid #86efac;border-radius:12px;padding:10px 12px;margin-top:10px;box-sizing:border-box;text-align:left;}',
            '.amt-dqr-left{background:#ffffff;border:1px solid #bbf7d0;border-radius:8px;padding:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
            '.amt-dqr-img{width:84px;height:84px;object-fit:contain;display:block;}',
            '.amt-dqr-right{flex:1;}',
            '.amt-dqr-badge{font-size:0.68rem;font-weight:800;color:#15803d;text-transform:uppercase;letter-spacing:0.3px;margin-bottom:2px;display:inline-flex;align-items:center;gap:4px;}',
            '.amt-dqr-title{font-size:0.85rem;font-weight:800;color:#0f2b48;line-height:1.2;margin-bottom:3px;}',
            '.amt-dqr-desc{font-size:0.72rem;color:#166534;line-height:1.35;}',
            '@media (max-width:640px){.amt-desktop-qr-card{display:none !important;}}',
            '.amt-draft-banner{display:flex;align-items:center;justify-content:space-between;background:#ecfeff;border:1px solid #a5f3fc;border-radius:8px;padding:6px 10px;margin-bottom:10px;font-size:0.74rem;color:#0891b2;animation:tfFadeIn 0.3s ease;}',
            '.amt-draft-btn-clear{background:transparent;border:none;color:#ef4444;font-size:0.72rem;font-weight:700;cursor:pointer;text-decoration:underline;padding:0;}',
            /* Schedule Card & Time Selection */
            '.amt-schedule-card{background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:12px;margin:12px 0 10px;box-sizing:border-box;}',
            '.amt-schedule-title{font-size:0.82rem;font-weight:800;color:#0f172a;margin-bottom:8px;display:flex;align-items:center;gap:6px;}',
            '.amt-smart-time-btn{background:#e0f2fe;color:#0284c7;border:1px solid #bae6fd;border-radius:6px;padding:2px 8px;font-weight:700;font-size:0.73rem;cursor:pointer;}',
            '.amt-tour-insight-box{margin-bottom:12px;padding:8px 12px;border-radius:10px;font-size:0.77rem;background:#f0f9ff;border:1px solid #bae6fd;color:#0369a1;line-height:1.4;}',
            '.amt-stb-union-disclaimer{margin-top:6px;padding:6px 9px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.35);border-radius:6px;font-size:0.72rem;color:#92400e;line-height:1.35;width:100%;box-sizing:border-box;}',
            /* Dark Theme Overrides */
            '[data-theme="dark"] #amtBookingModal .amt-schedule-card{background:#1e293b !important;border-color:#334155 !important;color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-schedule-title{color:#f8fafc !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-quick-time-lbl{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-smart-time-btn{background:rgba(2,132,199,0.25) !important;color:#38bdf8 !important;border-color:rgba(2,132,199,0.5) !important;}',
            '[data-theme="dark"] #amtBookingModal #amtSmartTimeReason{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tour-insight-box{background:#0e3d54 !important;border-color:#06b6d4 !important;color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-stb-union-disclaimer{background:rgba(245,158,11,0.18) !important;border-color:rgba(245,158,11,0.45) !important;color:#fde68a !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-sightseeing-filter-bar{background:#0f172a !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tf-pill{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tf-pill:hover{background:rgba(255,255,255,0.06) !important;color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tf-pill.active{background:#1e293b !important;color:#38bdf8 !important;border-color:#0284c7 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tf-pill-badge{background:#0f172a !important;color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tf-pill.active .amt-tf-pill-badge{background:#0284c7 !important;color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tour-guide-box{background:rgba(16,185,129,0.12) !important;border-color:rgba(16,185,129,0.35) !important;border-left-color:#10b981 !important;color:#a7f3d0 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tour-guide-box.standard{background:rgba(8,145,178,0.15) !important;border-color:rgba(8,145,178,0.35) !important;border-left-color:#0284c7 !important;color:#67e8f9 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-tour-guide-box.all{background:#0f172a !important;border-color:#334155 !important;border-left-color:#64748b !important;color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-selected-tour-banner{background:#0f172a !important;border-color:#059669 !important;box-shadow:none !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-stb-title{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-stb-fare{color:#4ade80 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-stb-meta{color:#a7f3d0 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-price-row{border-top-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-fare{color:#22d3ee !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-fare-sub{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-card{background:#0f172a !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-card:hover{border-color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-card.active{background:rgba(2,132,199,0.15) !important;border-color:#38bdf8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-title{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-desc{color:#94a3b8 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-points-panel{background:#1e293b !important;border-color:#334155 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vt-chip{background:#0f172a !important;border-color:#334155 !important;color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-time-pill{background:#1e293b !important;border-color:#334155 !important;color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-time-pill.active{background:#0284c7 !important;border-color:#38bdf8 !important;color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vehicle-spec-card{background:#0f172a !important;border-color:#1e3a5f !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vspec-title{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vspec-cell{color:#cbd5e1 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-vspec-cell strong{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-desktop-qr-card{background:#064e3b !important;border-color:#10b981 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-dqr-title{color:#ffffff !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-dqr-desc{color:#a7f3d0 !important;}',
            '.amt-btn-pdf{background:#f0fdf4 !important;border:1.5px solid #0891b2 !important;color:#0e7490 !important;font-weight:700 !important;transition:all 0.2s ease !important;}',
            '.amt-btn-pdf:hover{background:#e0f2fe !important;border-color:#0284c7 !important;transform:translateY(-1px);}',
            '.amt-v-link-btn{border:1px solid #cbd5e1;background:#f8fafc;border-radius:8px;font-size:0.75rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;padding:8px 4px;transition:all 0.15s ease;text-decoration:none;}',
            '.amt-v-link-btn:hover{background:#f1f5f9;transform:translateY(-1px);}',
            '[data-theme="dark"] #amtBookingModal .amt-btn-pdf{background:#064e3b !important;border-color:#10b981 !important;color:#6ee7b7 !important;}',
            '[data-theme="dark"] #amtBookingModal .amt-v-link-btn{background:#1e293b !important;border-color:#334155 !important;color:#cbd5e1 !important;}',
            /* Mobile Alignment & Touch Optimization */
            '@media (max-width:640px){',
            '  .amt-sightseeing-filter-bar{gap:4px !important;padding:3px !important;}',
            '  .amt-tf-pill{padding:6px 4px !important;min-height:44px !important;}',
            '  .amt-tf-pill-title{font-size:0.72rem !important;}',
            '  .amt-tf-pill-badge{font-size:0.6rem !important;padding:1px 4px !important;}',
            '  .amt-tour-guide-box{font-size:0.72rem !important;padding:7px 9px !important;margin-bottom:10px !important;}',
            '  .amt-selected-tour-banner{padding:8px 10px !important;gap:8px !important;flex-direction:row !important;}',
            '  .amt-stb-icon{font-size:1.15rem !important;}',
            '  .amt-stb-title{font-size:0.84rem !important;}',
            '  .amt-stb-fare{font-size:1rem !important;}',
            '  .amt-stb-meta{gap:4px 8px !important;font-size:0.68rem !important;}',
            '  .amt-rev-ai-advisory,.amt-v-ai-advisory{display:flex !important;flex-direction:column !important;align-items:flex-start !important;gap:5px !important;padding:8px 10px !important;width:100% !important;box-sizing:border-box !important;border-radius:8px !important;}',
            '  .amt-rev-ai-advisory .amt-v-ai-badge,.amt-v-ai-advisory .amt-v-ai-badge{align-self:flex-start !important;margin-bottom:2px !important;font-size:0.65rem !important;padding:2.5px 7px !important;white-space:nowrap !important;flex-shrink:0 !important;}',
            '  .amt-rev-ai-advisory .amt-v-ai-text,.amt-v-ai-advisory .amt-v-ai-text{font-size:0.74rem !important;line-height:1.4 !important;color:#065f46 !important;width:100% !important;box-sizing:border-box !important;word-break:break-word !important;}',
            '  .amt-service-grid{display:grid !important;grid-template-columns:1fr 1fr !important;gap:6px !important;margin-bottom:12px !important;width:100% !important;}',
            '  .amt-service-btn{display:flex !important;flex-direction:column !important;align-items:flex-start !important;justify-content:center !important;padding:9px 8px !important;min-width:0 !important;width:100% !important;box-sizing:border-box !important;border-radius:10px !important;min-height:52px !important;}',
            '  .amt-service-btn strong{font-size:0.78rem !important;line-height:1.25 !important;white-space:normal !important;word-break:break-word !important;}',
            '  .amt-service-btn span{font-size:0.66rem !important;line-height:1.2 !important;color:#64748b !important;margin-top:2px !important;white-space:normal !important;word-break:break-word !important;}',
            '  .amt-vt-card{padding:10px 10px !important;width:100% !important;box-sizing:border-box !important;}',
            '  .amt-vt-header{flex-wrap:wrap !important;align-items:center !important;justify-content:space-between !important;gap:4px !important;width:100% !important;}',
            '  .amt-vt-title-wrap{width:100% !important;flex:1 1 100% !important;min-width:0 !important;display:flex !important;align-items:center !important;gap:6px !important;}',
            '  .amt-vt-title{font-size:0.84rem !important;line-height:1.3 !important;word-break:break-word !important;}',
            '  .amt-vt-badges{width:100% !important;display:flex !important;justify-content:space-between !important;align-items:center !important;padding-left:22px !important;box-sizing:border-box !important;margin-top:3px !important;}',
            '  .amt-vt-dur{font-size:0.68rem !important;padding:2px 6px !important;border-radius:4px !important;}',
            '  .amt-vt-fare{font-size:0.92rem !important;font-weight:900 !important;color:#0e7490 !important;margin-left:auto !important;}',
            '  .amt-vt-desc{padding-left:22px !important;font-size:0.73rem !important;line-height:1.35 !important;margin:4px 0 6px !important;}',
            '  .amt-vt-actions{padding-left:22px !important;width:100% !important;box-sizing:border-box !important;}',
            '  .amt-add-tour-btn{font-size:0.78rem !important;padding:9px 8px !important;white-space:normal !important;word-break:break-word !important;text-align:center !important;width:100% !important;}',
            '  .amt-time-pills{display:grid !important;grid-template-columns:1fr 1fr !important;gap:6px !important;width:100% !important;}',
            '  .amt-time-pill{width:100% !important;display:flex !important;align-items:center !important;justify-content:center !important;text-align:center !important;padding:7px 4px !important;font-size:0.72rem !important;gap:4px !important;min-height:42px !important;box-sizing:border-box !important;white-space:nowrap !important;}',
            '  .amt-pill-tag{font-size:0.6rem !important;padding:1px 4px !important;}',
            '  .amt-grid2{grid-template-columns:1fr !important;gap:10px !important;margin-bottom:10px !important;width:100% !important;}',
            '  .amt-stepper{padding:0 2px !important;margin:8px 0 6px !important;}',
            '  .amt-step-name{font-size:0.65rem !important;letter-spacing:0 !important;}',
            '  .amt-step-divider{margin:0 4px 14px !important;}',
            '}',
            '@media (max-width:480px){',
            '  .amt-btn-row{flex-direction:column-reverse !important;gap:8px !important;}',
            '  .amt-btn-row .amt-btn-back,.amt-btn-row .amt-btn-next{width:100% !important;min-height:46px !important;justify-content:center !important;}',
            '  #amtWaBtn{font-size:0.85rem !important;line-height:1.3 !important;text-align:center !important;padding:11px 8px !important;}',
            '  #amtWaBtn div{justify-content:center !important;flex-wrap:wrap !important;}',
            '}',
            /* Guaranteed Single-Page A4 Print Stylesheet */
            '@page { size: A4 portrait; margin: 5mm 6mm; }',
            '@media print {',
            '  *, *::before, *::after { box-shadow: none !important; -webkit-box-shadow: none !important; text-shadow: none !important; filter: none !important; }',
            '  html, body, body.booking-portal-page { background: #ffffff !important; color: #0f172a !important; margin: 0 !important; padding: 0 !important; width: 100% !important; height: 100% !important; max-height: 100% !important; position: static !important; overflow: hidden !important; page-break-after: avoid !important; break-after: avoid !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }',
            '  body > *:not(.portal-booking-container):not(#amtBookingModal):not(.amt-modal-overlay) { display: none !important; visibility: hidden !important; height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; }',
            '  header, footer, nav, aside, .portal-header, .portal-hero-strip, .portal-trust-section, .portal-footer, .portal-actions,',
            '  .amt-card-header, .amt-close-btn, .amt-progress,',
            '  #amtStep1, #amtStep2, #amtStep3, #amtStep4, #amtAdvisoryBox,',
            '  .amt-voucher-screen-notice, .amt-voucher-actions, .amt-voucher-question,',
            '  #amtWaBtn, #amtPrintBtn, #amtDownloadPdfBtn, #amtEmailVoucherBtn, #amtShareFamilyBtn, #amtCallBtn, #amtNewBookingBtn, .amt-btn-row, .aai-float-btn, #aiChatModal,',
            '  [class*="whatsapp"], [class*="chat"], .portal-trust-item, script, style, link, meta, iframe { display: none !important; visibility: hidden !important; height: 0 !important; margin: 0 !important; padding: 0 !important; }',
            '  .portal-booking-container, #amtBookingModal, .amt-modal-overlay, body.booking-portal-page .amt-modal-overlay,',
            '  .amt-card, body.booking-portal-page .amt-card, #amtBookingModal .amt-card, .portal-card, body.booking-portal-page .portal-card,',
            '  .amt-card-body, body.booking-portal-page .amt-card-body, .portal-card-body, #amtStepVoucher { display: block !important; position: static !important; inset: auto !important; width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; background: transparent !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; overflow: visible !important; page-break-after: avoid !important; break-after: avoid !important; }',
            '  .amt-voucher, #amtVoucherContent { display: block !important; width: 100% !important; max-width: 198mm !important; margin: 0 auto !important; padding: 0 !important; background: transparent !important; border: none !important; border-radius: 0 !important; box-sizing: border-box !important; page-break-inside: avoid !important; break-inside: avoid !important; page-break-after: avoid !important; break-after: avoid !important; }',
            '  .amt-v-card-streamlined { display: flex !important; flex-direction: column !important; border: 1.5px solid #0f2b48 !important; border-radius: 6px !important; padding: 3.5mm 5mm !important; gap: 1.8mm !important; box-sizing: border-box !important; background: #ffffff !important; color: #0f172a !important; page-break-inside: avoid !important; break-inside: avoid !important; page-break-after: avoid !important; break-after: avoid !important; max-height: 275mm !important; }',
            '  .amt-v-hdr { border-bottom: 1.5px solid #0f2b48 !important; padding-bottom: 1.5mm !important; display: flex !important; justify-content: space-between !important; align-items: flex-start !important; flex-direction: row !important; }',
            '  .amt-v-hdr-left { display: flex !important; align-items: center !important; gap: 2mm !important; }',
            '  .amt-v-logo { width: 30px !important; height: 30px !important; object-fit: contain !important; flex-shrink: 0 !important; }',
            '  .amt-v-brand { font-size: 13pt !important; color: #0f2b48 !important; font-weight: 800 !important; letter-spacing: 0.3px !important; line-height: 1.15 !important; white-space: nowrap !important; }',
            '  .amt-v-sub { font-size: 7.5pt !important; color: #0284c7 !important; font-weight: 700 !important; margin-top: 0.3mm !important; }',
            '  .amt-v-hdr-right { text-align: right !important; display: flex !important; flex-direction: column !important; align-items: flex-end !important; gap: 1mm !important; border-top: none !important; padding-top: 0 !important; width: auto !important; }',
            '  .amt-v-badge { font-size: 7pt !important; border: 1.2px solid #16a34a !important; color: #15803d !important; background: #f0fdf4 !important; padding: 0.8mm 2.5mm !important; display: inline-block !important; font-weight: 800 !important; border-radius: 3px !important; text-transform: uppercase !important; white-space: nowrap !important; }',
            '  .amt-v-ref { font-size: 7pt !important; color: #64748b !important; margin-top: 0.5mm !important; }',
            '  .amt-v-ref strong { font-size: 8.5pt !important; color: #0284c7 !important; font-family: monospace !important; }',
            '  .amt-v-ref-box { background: #f8fafc !important; border: 1px solid #cbd5e1 !important; border-radius: 4px !important; padding: 0.8mm 2mm !important; display: inline-flex !important; align-items: center !important; gap: 1.5mm !important; }',
            '  .amt-v-ref-lbl { font-size: 6.8pt !important; color: #64748b !important; font-weight: 700 !important; }',
            '  .amt-v-ref-val { font-size: 8.5pt !important; color: #0284c7 !important; font-family: monospace !important; font-weight: 800 !important; }',
            '  .amt-v-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 1mm 3mm !important; padding: 1.5mm 2.5mm !important; background: #f8fafc !important; border: 1px solid #cbd5e1 !important; border-radius: 5px !important; box-sizing: border-box !important; }',
            '  .amt-v-cell { display: flex !important; flex-direction: column !important; line-height: 1.15 !important; }',
            '  .amt-v-lbl { font-size: 6.2pt !important; color: #475569 !important; text-transform: uppercase !important; font-weight: 700 !important; letter-spacing: 0.2px !important; margin-bottom: 0.3mm !important; }',
            '  .amt-v-val { font-size: 8pt !important; color: #0f172a !important; word-break: break-word !important; }',
            '  .amt-v-val strong { color: #0f172a !important; }',
            '  .amt-v-vehicle-cell { grid-column: 1 / -1 !important; border-top: 1px dashed #cbd5e1 !important; padding-top: 0.8mm !important; margin-top: 0.5mm !important; }',
            '  .amt-v-vehicle-wrap { font-size: 7.5pt !important; color: #0f2b48 !important; display: flex !important; align-items: center !important; gap: 1.5mm !important; }',
            '  .amt-v-vehicle-lbl { font-size: 6.2pt !important; color: #475569 !important; text-transform: uppercase !important; font-weight: 700 !important; }',
            '  .amt-v-vehicle-val { color: #0f2b48 !important; font-weight: 700 !important; }',
            '  .amt-v-notes-chip { font-size: 7.2pt !important; padding: 1mm 2mm !important; background: #eff6ff !important; border: 1px dashed #93c5fd !important; border-radius: 3px !important; color: #1e40af !important; }',
            '  .amt-v-tour-strip { padding: 1.5mm 2.5mm !important; border: 1.2px solid #0284c7 !important; border-left: 3.5px solid #0284c7 !important; border-radius: 5px !important; background: #ffffff !important; box-sizing: border-box !important; margin-bottom: 1.2mm !important; }',
            '  .amt-v-tour-hdr { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-bottom: 0.8mm !important; }',
            '  .amt-v-tour-name { font-size: 8.8pt !important; font-weight: 800 !important; color: #0f172a !important; }',
            '  .amt-v-tour-dur { font-size: 7pt !important; color: #0284c7 !important; font-weight: 700 !important; background: #e0f2fe !important; padding: 0.5mm 2mm !important; border-radius: 3px !important; }',
            '  .amt-v-tour-meta { font-size: 7.2pt !important; color: #0f2b48 !important; display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 0.3mm !important; }',
            '  .amt-v-tour-rate { font-size: 7.2pt !important; color: #15803d !important; font-weight: 700 !important; }',
            '  .amt-v-points-box { margin-top: 0.8mm !important; line-height: 1.25 !important; }',
            '  .amt-v-points-head { font-size: 6.5pt !important; font-weight: 700 !important; color: #475569 !important; text-transform: uppercase !important; margin-bottom: 0.5mm !important; display: block !important; }',
            '  .amt-v-chips-wrap { display: inline !important; line-height: 1.3 !important; }',
            '  .amt-v-chip { display: inline !important; font-size: 6.5pt !important; padding: 0 !important; background: transparent !important; border: none !important; border-radius: 0 !important; color: #334155 !important; font-weight: 600 !important; white-space: normal !important; }',
            '  .amt-v-chip i { display: none !important; }',
            '  .amt-v-chip:not(:last-child)::after { content: " • "; color: #0284c7; font-weight: 800; }',
            '  .amt-v-route-strip { display: flex !important; flex-wrap: wrap !important; align-items: center !important; gap: 1.5mm !important; font-size: 7.2pt !important; font-weight: 600 !important; margin-top: 1mm !important; }',
            '  .amt-v-route-step { background: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 0.5mm 1.8mm !important; border-radius: 3px !important; }',
            '  .amt-v-route-arrow { color: #0284c7 !important; font-weight: 800 !important; }',
            '  .amt-v-ai-advisory { display: flex !important; align-items: flex-start !important; gap: 1.5mm !important; padding: 1mm 2mm !important; background: #f0fdf4 !important; border: 1px solid #a7f3d0 !important; border-left: 2.5mm solid #10b981 !important; border-radius: 4px !important; box-sizing: border-box !important; }',
            '  .amt-v-ai-badge { display: inline-flex !important; align-items: center !important; font-size: 6pt !important; font-weight: 800 !important; background: #059669 !important; color: #ffffff !important; padding: 0.5mm 1.5mm !important; border-radius: 2px !important; text-transform: uppercase !important; white-space: nowrap !important; flex-shrink: 0 !important; }',
            '  .amt-v-ai-text { font-size: 6.8pt !important; line-height: 1.25 !important; color: #065f46 !important; flex: 1 !important; }',
            '  .amt-v-ai-text strong { color: #065f46 !important; font-weight: 700 !important; }',
            '  .amt-v-fare-bar { display: flex !important; justify-content: space-between !important; align-items: center !important; padding: 1.5mm 2.5mm !important; border: 1.2px solid #cbd5e1 !important; border-radius: 5px !important; background: #f8fafc !important; box-sizing: border-box !important; flex-direction: row !important; }',
            '  .amt-v-fare-left { display: flex !important; flex-direction: column !important; }',
            '  .amt-v-fare-lbl { font-size: 6.5pt !important; color: #64748b !important; font-weight: 800 !important; }',
            '  .amt-v-fare-amt { font-size: 13.5pt !important; color: #0e7490 !important; font-weight: 900 !important; line-height: 1 !important; }',
            '  .amt-v-fare-breakdown { font-size: 6.5pt !important; color: #64748b !important; }',
            '  .amt-v-fare-right { text-align: right !important; display: flex !important; flex-direction: column !important; border-top: none !important; padding-top: 0 !important; width: auto !important; }',
            '  .amt-v-pay-badge { font-size: 8pt !important; font-weight: 800 !important; color: #15803d !important; }',
            '  .amt-v-pay-note { font-size: 6.5pt !important; color: #64748b !important; }',
            '  .amt-v-terms-compact { font-size: 6.3pt !important; padding: 1.5mm 2.5mm !important; line-height: 1.2 !important; border: 1px solid #cbd5e1 !important; border-radius: 4px !important; background: #f8fafc !important; color: #475569 !important; }',
            '  .amt-v-terms-title { font-size: 6.8pt !important; font-weight: 800 !important; color: #0f2b48 !important; text-transform: uppercase !important; margin-bottom: 0.8mm !important; }',
            '  .amt-v-terms-list { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 0.8mm 3mm !important; padding-left: 12px !important; margin: 0 !important; list-style-type: disc !important; }',
            '  .amt-v-terms-list li { font-size: 6.2pt !important; line-height: 1.18 !important; color: #475569 !important; text-align: left !important; }',
            '  .amt-v-terms-list li strong { color: #0f2b48 !important; font-weight: 700 !important; }',
            '  .amt-v-ftr { font-size: 6.2pt !important; color: #64748b !important; border-top: 1px dashed #cbd5e1 !important; padding-top: 1mm !important; display: flex !important; justify-content: space-between !important; flex-direction: row !important; margin-top: 0.5mm !important; }',
            '  .amt-desktop-qr-card { display: none !important; }',
            '  .amt-v-print-slip { display: block !important; margin-top: 3mm !important; border: 1.2px dashed #0f2b48 !important; border-radius: 5px !important; padding: 2.5mm 3.5mm !important; background: #f8fafc !important; box-sizing: border-box !important; page-break-inside: avoid !important; break-inside: avoid !important; }',
            '  .amt-v-slip-hdr { display: flex !important; justify-content: space-between !important; align-items: center !important; border-bottom: 1px solid #cbd5e1 !important; padding-bottom: 1.2mm !important; font-size: 7pt !important; font-weight: 800 !important; color: #0f2b48 !important; text-transform: uppercase !important; }',
            '  .amt-v-slip-auth { color: #15803d !important; font-size: 6.5pt !important; }',
            '  .amt-v-slip-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 1.5mm 4mm !important; margin-top: 1.8mm !important; font-size: 6.8pt !important; }',
            '  .amt-v-slip-cell { display: flex !important; align-items: center !important; gap: 1.5mm !important; }',
            '  .amt-v-slip-lbl { font-weight: 700 !important; color: #475569 !important; }',
            '  .amt-v-slip-line { color: #0f172a !important; font-weight: 600 !important; }',
            '  .amt-v-slip-ftr { display: flex !important; justify-content: space-between !important; font-size: 6pt !important; color: #64748b !important; border-top: 1px dotted #cbd5e1 !important; margin-top: 1.8mm !important; padding-top: 1mm !important; }',
            '}'
        ].join('');
        s.textContent += "\n.portal-header { padding: 6px 14px !important; } .portal-brand img { width: 28px !important; height: 28px !important; } .portal-brand-title { font-size: 0.88rem !important; line-height: 1.1 !important; } .portal-brand-sub { font-size: 0.62rem !important; line-height: 1 !important; } .portal-btn { padding: 5px 9px !important; font-size: 0.75rem !important; } .portal-hero-strip { padding: 4px 12px 2px !important; margin: 0 auto !important; text-align: center !important; } .portal-badge { padding: 2px 8px !important; font-size: 0.64rem !important; margin-bottom: 2px !important; line-height: 1.2 !important; } .portal-hero-strip h1 { font-size: 1.05rem !important; font-weight: 800 !important; margin: 0 0 1px !important; line-height: 1.2 !important; } .portal-hero-strip p { font-size: 0.72rem !important; line-height: 1.2 !important; margin: 0 !important; display: none !important; } @media (min-height: 800px) { .portal-hero-strip p { display: block !important; margin-top: 2px !important; } } .portal-booking-container { padding: 0 8px !important; margin: 4px auto 8px !important; max-width: 580px !important; } .amt-modal-overlay { position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; background: rgba(15, 23, 42, 0.82) !important; backdrop-filter: blur(6px) !important; -webkit-backdrop-filter: blur(6px) !important; display: none; justify-content: center !important; align-items: center !important; z-index: 20000000 !important; padding: 6px !important; box-sizing: border-box !important; } .amt-card, #amtBookingModal .amt-card, .portal-card { background: #ffffff !important; border-radius: 14px !important; width: 100% !important; max-width: 540px !important; max-height: 96vh !important; display: flex !important; flex-direction: column !important; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45) !important; overflow: hidden !important; margin: 0 auto !important; border: 1.5px solid #cbd5e1 !important; box-sizing: border-box !important; font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif !important; } body.booking-portal-page .amt-card, body.booking-portal-page .portal-card { max-height: none !important; box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important; } .amt-card-header, .portal-card-header { background: linear-gradient(135deg, #0e2338 0%, #0891b2 100%) !important; color: #ffffff !important; padding: 7px 12px 6px !important; border-radius: 13px 13px 0 0 !important; position: relative !important; box-sizing: border-box !important; flex-shrink: 0 !important; } .amt-header-brand { font-size: 0.62rem !important; text-transform: uppercase !important; letter-spacing: 0.8px !important; color: #fbbf24 !important; font-weight: 700 !important; margin-bottom: 1px !important; line-height: 1 !important; } .amt-header-title { font-size: 1rem !important; font-weight: 800 !important; color: #ffffff !important; margin-bottom: 2px !important; letter-spacing: -0.2px !important; line-height: 1.15 !important; } .amt-stepper { display: flex !important; align-items: center !important; justify-content: center !important; gap: 6px !important; margin: 1px 0 0 !important; } .amt-step-item { display: flex !important; align-items: center !important; gap: 4px !important; opacity: 0.65 !important; transition: opacity 0.2s ease !important; } .amt-step-item.active { opacity: 1 !important; } .amt-step-item.completed { opacity: 0.9 !important; } .amt-step-bubble { width: 18px !important; height: 18px !important; border-radius: 50% !important; background: rgba(255, 255, 255, 0.25) !important; color: #ffffff !important; font-size: 0.62rem !important; font-weight: 800 !important; display: flex !important; align-items: center !important; justify-content: center !important; } .amt-step-item.active .amt-step-bubble { background: #38bdf8 !important; color: #0f172a !important; } .amt-step-item.completed .amt-step-bubble { background: #10b981 !important; color: #ffffff !important; } .amt-step-name { font-size: 0.66rem !important; font-weight: 700 !important; color: #e0f2fe !important; } .amt-step-divider { width: 16px !important; height: 2px !important; background: rgba(255, 255, 255, 0.25) !important; } .amt-step-divider.completed { background: #10b981 !important; } .amt-close-btn { position: absolute !important; top: 6px !important; right: 8px !important; background: rgba(255, 255, 255, 0.18) !important; border: none !important; color: #ffffff !important; min-width: 28px !important; min-height: 28px !important; width: 28px !important; height: 28px !important; border-radius: 50% !important; cursor: pointer !important; font-size: 15px !important; display: flex !important; align-items: center !important; justify-content: center !important; } .amt-card-body, .portal-card-body { padding: 7px 11px 9px !important; overflow-y: auto !important; -webkit-overflow-scrolling: touch !important; flex: 1 !important; box-sizing: border-box !important; } .amt-step-hdr-compact { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-bottom: 4px !important; } .amt-step-hdr-compact .amt-step-title { font-size: 0.84rem !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 !important; line-height: 1.15 !important; } .amt-trust-chip { font-size: 0.61rem !important; font-weight: 700 !important; color: #059669 !important; background: #ecfdf5 !important; padding: 1px 5px !important; border-radius: 5px !important; border: 1px solid #a7f3d0 !important; white-space: nowrap !important; } .amt-category-grid { display: grid !important; width: 100% !important; box-sizing: border-box !important; margin-bottom: 5px !important; } @media (max-width: 767px) { .amt-category-grid { grid-template-columns: repeat(6, 1fr) !important; gap: 4px !important; } .amt-category-grid .amt-service-btn:nth-child(1), .amt-category-grid .amt-service-btn:nth-child(2), .amt-category-grid .amt-service-btn:nth-child(3) { grid-column: span 2 !important; } .amt-category-grid .amt-service-btn:nth-child(4), .amt-category-grid .amt-service-btn:nth-child(5) { grid-column: span 3 !important; } } @media (min-width: 768px) { .amt-category-grid { grid-template-columns: repeat(5, 1fr) !important; gap: 5px !important; } .amt-category-grid .amt-service-btn:nth-child(1), .amt-category-grid .amt-service-btn:nth-child(2), .amt-category-grid .amt-service-btn:nth-child(3), .amt-category-grid .amt-service-btn:nth-child(4), .amt-category-grid .amt-service-btn:nth-child(5) { grid-column: span 1 !important; } } .amt-category-grid .amt-service-btn { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; padding: 4px 2px !important; border: 1.5px solid #cbd5e1 !important; background: #ffffff !important; border-radius: 8px !important; cursor: pointer !important; transition: all 0.15s ease-in-out !important; min-height: 42px !important; box-sizing: border-box !important; width: 100% !important; box-shadow: 0 1px 2px rgba(0,0,0,0.03) !important; -webkit-tap-highlight-color: transparent !important; text-align: center !important; } .amt-category-grid .amt-service-btn:hover { border-color: #0284c7 !important; background: #f0f9ff !important; } .amt-category-grid .amt-service-btn.active { background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important; border-color: #0284c7 !important; color: #ffffff !important; box-shadow: 0 2px 6px rgba(2, 132, 199, 0.3) !important; } .amt-category-grid .amt-service-btn .amt-cat-icon { font-size: 1rem !important; line-height: 1 !important; margin-bottom: 1px !important; display: block !important; } .amt-category-grid .amt-service-btn .amt-cat-name { display: block !important; font-size: 0.70rem !important; font-weight: 800 !important; color: #0f172a !important; line-height: 1.1 !important; white-space: nowrap !important; } .amt-category-grid .amt-service-btn.active .amt-cat-name { color: #ffffff !important; } .amt-category-grid .amt-service-btn .amt-cat-tag { display: block !important; font-size: 0.56rem !important; font-weight: 700 !important; color: #64748b !important; margin-top: 1px !important; line-height: 1 !important; white-space: nowrap !important; } .amt-category-grid .amt-service-btn.active .amt-cat-tag { color: #e0f2fe !important; } .amt-category-grid .amt-service-btn .amt-tag-green { color: #15803d !important; } .amt-category-grid .amt-service-btn.active .amt-tag-green { color: #bbf7d0 !important; } .amt-form-group { margin-bottom: 4px !important; } .amt-label { display: flex !important; justify-content: space-between !important; align-items: center !important; font-size: 0.71rem !important; font-weight: 700 !important; color: #334155 !important; margin-bottom: 2px !important; } .amt-count-badge { font-size: 0.60rem !important; font-weight: 700 !important; color: #0284c7 !important; background: #e0f2fe !important; border: 1px solid #bae6fd !important; padding: 1px 5px !important; border-radius: 6px !important; white-space: nowrap !important; } .amt-select, #amtTourSelect { width: 100% !important; padding: 5px 8px !important; border: 1.5px solid #0284c7 !important; border-radius: 8px !important; font-size: 12px !important; font-weight: 700 !important; background: #f8fafc !important; color: #0f172a !important; min-height: 34px !important; height: 34px !important; padding: 5px 8px !important; box-sizing: border-box !important; text-overflow: ellipsis !important; cursor: pointer !important; } .amt-select option, #amtTourSelect option { background: #ffffff !important; color: #0f172a !important; font-weight: 600 !important; font-size: 11.5px !important; padding: 4px 6px !important; } .amt-select optgroup, #amtTourSelect optgroup { background: #e0f2fe !important; background-color: #e0f2fe !important; color: #0369a1 !important; font-weight: 800 !important; font-size: 11px !important; padding: 6px 8px !important; letter-spacing: 0.6px !important; border-bottom: 1.5px solid #0284c7 !important; border-top: 1.5px solid #bae6fd !important; } .amt-stb-card { background: #ffffff !important; border: 1.5px solid #0284c7 !important; border-radius: 9px !important; padding: 5px 8px !important; margin: 3px 0 !important; box-sizing: border-box !important; box-shadow: 0 1px 4px rgba(2, 132, 199, 0.08) !important; } .amt-stb-top-row { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-bottom: 2px !important; gap: 4px !important; } .amt-stb-badge { font-size: 0.60rem !important; font-weight: 800 !important; text-transform: uppercase !important; padding: 1px 5px !important; border-radius: 5px !important; white-space: nowrap !important; } .amt-stb-badge.amt-badge-union { background: #e0f2fe !important; color: #0369a1 !important; border: 1px solid #bae6fd !important; } .amt-stb-badge.amt-badge-express { background: #fef3c7 !important; color: #92400e !important; border: 1px solid #fde68a !important; } .amt-stb-badge.amt-badge-combo { background: #f3e8ff !important; color: #6b21a8 !important; border: 1px solid #e9d5ff !important; } .amt-stb-badge.amt-badge-outstation { background: #ecfeff !important; color: #0e7490 !important; border: 1px solid #a5f3fc !important; } .amt-stb-badge.amt-badge-local { background: #f0fdf4 !important; color: #166534 !important; border: 1px solid #bbf7d0 !important; } .amt-stb-fare-box { text-align: right !important; } .amt-stb-fare-val { font-size: 0.92rem !important; font-weight: 900 !important; color: #0284c7 !important; line-height: 1.1 !important; display: block !important; } .amt-stb-fare-sub { font-size: 0.58rem !important; color: #64748b !important; font-weight: 600 !important; } .amt-stb-meta-row { display: flex !important; align-items: center !important; flex-wrap: wrap !important; gap: 4px 8px !important; font-size: 0.66rem !important; color: #475569 !important; margin-top: 1px !important; line-height: 1.15 !important; } .amt-stb-points-wrap { display: flex !important; flex-wrap: wrap !important; gap: 3px !important; align-items: center !important; margin-top: 2px !important; padding-top: 2px !important; border-top: 1px dashed #e2e8f0 !important; } .amt-stb-points-lbl { font-size: 0.62rem !important; font-weight: 700 !important; color: #0f172a !important; } .amt-stb-point-chip { font-size: 0.58rem !important; background: #f1f5f9 !important; color: #334155 !important; padding: 1px 4px !important; border-radius: 4px !important; border: 1px solid #e2e8f0 !important; } .amt-chip-more { background: #e0f2fe !important; color: #0284c7 !important; font-weight: 700 !important; } .amt-grid2 { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 6px !important; margin-top: 4px !important; margin-bottom: 4px !important; } .amt-input { width: 100% !important; padding: 5px 8px !important; border: 1.5px solid #cbd5e1 !important; border-radius: 8px !important; font-size: 13.5px !important; color: #0f172a !important; box-sizing: border-box !important; background: #ffffff !important; min-height: 35px !important; } .amt-input:focus, .amt-select:focus { outline: none !important; border-color: #0284c7 !important; box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.2) !important; } .amt-quick-time-chips { display: flex !important; gap: 4px !important; margin-top: 4px !important; width: 100% !important; box-sizing: border-box !important; } .amt-time-chip { flex: 1 1 0 !important; min-width: 0 !important; white-space: nowrap !important; height: auto !important; min-height: 24px !important; padding: 3px 2px !important; border-radius: 4px !important; border: 1px solid #cbd5e1 !important; background: #f8fafc !important; font-size: 0.60rem !important; line-height: 1.15 !important; font-weight: 700 !important; color: #475569 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; overflow: visible !important; box-sizing: border-box !important; } .amt-time-chip:hover { border-color: #0284c7 !important; color: #0284c7 !important; } .amt-time-chip.active { background: #0284c7 !important; border-color: #0284c7 !important; color: #ffffff !important; } .amt-btn-row { margin-top: 6px !important; } .amt-btn-next { width: 100% !important; padding: 9px 14px !important; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important; color: #ffffff !important; border: none !important; border-radius: 9px !important; font-weight: 800 !important; font-size: 0.90rem !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 6px !important; box-shadow: 0 3px 8px rgba(2, 132, 199, 0.3) !important; min-height: 40px !important; box-sizing: border-box !important; } .amt-btn-next:hover { background: #0369a1 !important; } .amt-cab-selector-wrap { background: #f8fafc !important; border: 1px solid #e2e8f0 !important; border-radius: 8px !important; padding: 6px 10px !important; margin-bottom: 6px !important; box-sizing: border-box !important; width: 100% !important; } .amt-cab-pill-grid { display: flex !important; flex-direction: column !important; gap: 6px !important; width: 100% !important; box-sizing: border-box !important; margin-top: 3px !important; } .amt-cab-pill { display: flex !important; align-items: center !important; gap: 8px !important; padding: 7px 10px !important; border: 1.5px solid #cbd5e1 !important; border-radius: 8px !important; background: #ffffff !important; cursor: pointer !important; transition: all 0.15s ease !important; width: 100% !important; box-sizing: border-box !important; min-height: 44px !important; } .amt-cab-pill:hover { border-color: #0284c7 !important; background: #f0f9ff !important; } .amt-cab-pill.active { border-color: #0284c7 !important; background: #f0f9ff !important; box-shadow: 0 0 0 2px #0284c7 !important; } .amt-cab-pill-radio { width: 14px !important; height: 14px !important; border-radius: 50% !important; border: 2px solid #94a3b8 !important; flex-shrink: 0 !important; box-sizing: border-box !important; } .amt-cab-pill.active .amt-cab-pill-radio { border-color: #0284c7 !important; background: #0284c7 !important; } .amt-cab-pill-info { display: flex !important; flex-direction: column !important; text-align: left !important; flex: 1 1 auto !important; } .amt-cab-pill-info strong { font-size: 0.76rem !important; color: #0f172a !important; line-height: 1.2 !important; display: flex !important; align-items: center !important; gap: 4px !important; font-weight: 700 !important; } .amt-cab-pill-info span { font-size: 0.62rem !important; color: #64748b !important; margin-top: 1px !important; display: block !important; } .amt-cab-subnote { font-size: 0.62rem !important; color: #475569 !important; margin: 4px 0 0 !important; line-height: 1.25 !important; display: block !important; } .amt-compact-review-box, .amt-compact-review-bar { background: #f8fafc !important; border: 1px solid #e2e8f0 !important; border-radius: 8px !important; padding: 5px 8px !important; margin-bottom: 5px !important; } .amt-crb-row { display: flex !important; justify-content: space-between !important; align-items: center !important; } .amt-crb-item { font-size: 0.72rem !important; color: #0f172a !important; font-weight: 700 !important; } .amt-crb-fare { font-size: 0.95rem !important; font-weight: 900 !important; color: #0284c7 !important; } .amt-crb-meta { display: flex !important; flex-wrap: wrap !important; gap: 5px !important; font-size: 0.63rem !important; color: #64748b !important; margin-top: 1px !important; } .amt-crb-zero { color: #15803d !important; font-weight: 700 !important; } .amt-btn-confirm { background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important; color: #ffffff !important; } .amt-btn-confirm:hover { background: #059669 !important; } [data-theme=\"dark\"] .amt-card, [data-theme=\"dark\"] #amtBookingModal .amt-card, [data-theme=\"dark\"] .portal-card { background: #0f172a !important; border-color: #334155 !important; color: #f8fafc !important; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7) !important; } [data-theme=\"dark\"] .amt-step-hdr-compact .amt-step-title { color: #f8fafc !important; } [data-theme=\"dark\"] .amt-label { color: #cbd5e1 !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn { background: #1e293b !important; border-color: #334155 !important; color: #f8fafc !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn:hover { background: #0f2b3e !important; border-color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn .amt-cat-name { color: #f8fafc !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn .amt-cat-tag { color: #94a3b8 !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn .amt-tag-green { color: #4ade80 !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn.active { background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important; border-color: #38bdf8 !important; color: #ffffff !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn.active .amt-cat-name { color: #ffffff !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn.active .amt-cat-tag { color: #e0f2fe !important; } [data-theme=\"dark\"] .amt-category-grid .amt-service-btn.active .amt-tag-green { color: #bbf7d0 !important; } [data-theme=\"dark\"] .amt-count-badge { color: #38bdf8 !important; background: rgba(2, 132, 199, 0.2) !important; border-color: rgba(56, 189, 248, 0.35) !important; } [data-theme=\"dark\"] .amt-select, [data-theme=\"dark\"] #amtTourSelect { background: #1e293b !important; border-color: #38bdf8 !important; color: #f8fafc !important; color-scheme: dark !important; } [data-theme=\"dark\"] .amt-select option, [data-theme=\"dark\"] #amtTourSelect option { background: #1e293b !important; color: #f8fafc !important; } [data-theme=\"dark\"] .amt-select optgroup, [data-theme=\"dark\"] #amtTourSelect optgroup { background: #0f172a !important; color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-stb-card { background: #1e293b !important; border-color: #0284c7 !important; color: #f8fafc !important; } [data-theme=\"dark\"] .amt-stb-badge.amt-badge-union { background: rgba(2,132,199,0.2) !important; color: #38bdf8 !important; border-color: rgba(56,189,248,0.4) !important; } [data-theme=\"dark\"] .amt-stb-badge.amt-badge-express { background: rgba(245,158,11,0.2) !important; color: #fbbf24 !important; border-color: rgba(245,158,11,0.4) !important; } [data-theme=\"dark\"] .amt-stb-badge.amt-badge-combo { background: rgba(139,92,246,0.2) !important; color: #c084fc !important; border-color: rgba(139,92,246,0.4) !important; } [data-theme=\"dark\"] .amt-stb-badge.amt-badge-outstation { background: rgba(14,116,144,0.2) !important; color: #22d3ee !important; border-color: rgba(34,211,238,0.4) !important; } [data-theme=\"dark\"] .amt-stb-badge.amt-badge-local { background: rgba(22,101,52,0.2) !important; color: #4ade80 !important; border-color: rgba(74,222,128,0.4) !important; } [data-theme=\"dark\"] .amt-stb-fare-val { color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-stb-fare-sub { color: #94a3b8 !important; } [data-theme=\"dark\"] .amt-stb-tour-title { color: #ffffff !important; } [data-theme=\"dark\"] .amt-stb-meta-row { color: #cbd5e1 !important; border-bottom-color: #334155 !important; } [data-theme=\"dark\"] .amt-stb-points-wrap { border-top-color: #334155 !important; } [data-theme=\"dark\"] .amt-stb-points-lbl { color: #f8fafc !important; } [data-theme=\"dark\"] .amt-stb-point-chip { background: #0f172a !important; color: #cbd5e1 !important; border-color: #334155 !important; } [data-theme=\"dark\"] .amt-chip-more { background: rgba(2,132,199,0.2) !important; color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-input, [data-theme=\"dark\"] input[type=\"text\"], [data-theme=\"dark\"] input[type=\"tel\"], [data-theme=\"dark\"] input[type=\"date\"], [data-theme=\"dark\"] input[type=\"time\"] { background: #1e293b !important; border-color: #334155 !important; color: #f8fafc !important; color-scheme: dark !important; } [data-theme=\"dark\"] .amt-input::placeholder { color: #64748b !important; } [data-theme=\"dark\"] .amt-time-chip { background: #1e293b !important; border-color: #334155 !important; color: #cbd5e1 !important; } [data-theme=\"dark\"] .amt-time-chip:hover { border-color: #38bdf8 !important; color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-time-chip.active { background: #0284c7 !important; border-color: #38bdf8 !important; color: #ffffff !important; } [data-theme=\"dark\"] .amt-cab-selector-wrap { background: #1e293b !important; border-color: #334155 !important; } [data-theme=\"dark\"] .amt-cab-pill { background: #0f172a !important; border-color: #334155 !important; color: #f8fafc !important; } [data-theme=\"dark\"] .amt-cab-pill:hover { border-color: #38bdf8 !important; background: #0f2b3e !important; } [data-theme=\"dark\"] .amt-cab-pill.active { background: rgba(2, 132, 199, 0.25) !important; border-color: #38bdf8 !important; box-shadow: 0 0 0 2px #38bdf8 !important; } [data-theme=\"dark\"] .amt-cab-pill-info strong { color: #f8fafc !important; } [data-theme=\"dark\"] .amt-cab-pill-info span { color: #94a3b8 !important; } [data-theme=\"dark\"] .amt-cab-subnote { color: #94a3b8 !important; } [data-theme=\"dark\"] .amt-compact-review-box, [data-theme=\"dark\"] .amt-compact-review-bar { background: #1e293b !important; border-color: #334155 !important; } [data-theme=\"dark\"] .amt-crb-item { color: #f8fafc !important; } [data-theme=\"dark\"] .amt-crb-fare { color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-crb-meta { color: #94a3b8 !important; } [data-theme=\"dark\"] .amt-autocomplete-dropdown, [data-theme=\"dark\"] .amt-autocomplete-list { background: #1e293b !important; border-color: #334155 !important; } [data-theme=\"dark\"] .amt-autocomplete-item { border-bottom-color: #334155 !important; color: #f8fafc !important; } [data-theme=\"dark\"] .amt-autocomplete-item:hover { background: #0f2b3e !important; color: #38bdf8 !important; } [data-theme=\"dark\"] .amt-btn-back { background: #1e293b !important; border-color: #334155 !important; color: #cbd5e1 !important; } [data-theme=\"dark\"] .amt-btn-back:hover { background: #334155 !important; color: #ffffff !important; } [data-theme=\"dark\"] .amt-voucher-screen-notice { background: rgba(245, 158, 11, 0.15) !important; border-color: rgba(245, 158, 11, 0.35) !important; } [data-theme=\"dark\"] .amt-voucher-screen-notice div { color: #fbbf24 !important; } [data-theme=\"dark\"] #amtVoucherNoticeSub { color: #fde68a !important; } [data-theme=\"dark\"] #amtDownloadPdfBtn { background: #064e3b !important; border-color: #10b981 !important; color: #6ee7b7 !important; } [data-theme=\"dark\"] #amtPrintBtn { background: #1e293b !important; border-color: #334155 !important; color: #cbd5e1 !important; } [data-theme=\"dark\"] .amt-v-link-btn { background: #1e293b !important; border-color: #334155 !important; color: #cbd5e1 !important; } [data-theme=\"dark\"] #amtEditTripBtn { background: #1e293b !important; border-color: #334155 !important; color: #cbd5e1 !important; }";
        document.head.appendChild(s);
    }

    // ── 4. Inject Engine DOM ───────────────────────────────────────────
    function injectEngineDOM() {
        if (document.getElementById('amtBookingModal')) return;

        var db = window.TOUR_DATABASE;
        var tourOptions = '';
        var comboOptions = '<option value="">-- None (Single Tour) --</option>';

        if (db) {
            var stours = db.tours.filter(function (t) { return (t.category === 'sightseeing' && t.sub_category === 'single_tour') || t.id === 'M1' || t.id === 'M2' || t.id === 'M3'; });
            var mtours = db.tours.filter(function (t) { return (t.category === 'sightseeing' || t.type === 'tour') && t.sub_category !== 'single_tour' && t.id !== 'M1' && t.id !== 'M2' && t.id !== 'M3'; });
            if (stours.length > 0) {
                tourOptions += '<optgroup label="── ⚡ EXPRESS FLAT ₹800 (2.5 Hrs) ──">';
                stours.forEach(function (t) {
                    var cleanName = 'Arthur Seat';
                    if (t.id === 'M2') cleanName = "Kate's Point";
                    else if (t.id === 'M3') cleanName = 'Wilson Point';
                    tourOptions += '<option value="' + t.id + '">' + t.id + ': ' + cleanName + ' — ₹800</option>';
                });
                tourOptions += '</optgroup>';
            }
            if (mtours.length > 0) {
                tourOptions += '<optgroup label="⭐ Standard Union Sightseeing (₹1,200 - ₹1,600 • 3.5 Hrs)">';
                mtours.forEach(function (t) {
                    var line = '<option value="' + t.id + '">' + t.name + ' — ₹' + t.fare + ' (' + t.duration + ')</option>';
                    tourOptions += line;
                    comboOptions += line;
                });
                tourOptions += '</optgroup>';
            }
        }

        var html = '<div id="amtBookingModal" class="amt-modal-overlay">'
            + '<div class="amt-card">'
            + '<div class="amt-card-header">'
            + '<button class="amt-close-btn" id="amtCloseBtn" aria-label="Close">&times;</button>'
            + '<div class="amt-header-brand">Aryan Taxi Mahabaleshwar</div>'
            + '<div class="amt-header-title">Instant Taxi Booking Engine</div>'
            + '<div class="amt-stepper" id="amtStepper">'
            + '  <div class="amt-step-item active" data-step="1">'
            + '    <div class="amt-step-bubble"><span class="amt-step-num">1</span><span class="amt-step-check">&#10003;</span></div>'
            + '    <span class="amt-step-name">Tour &amp; Time</span>'
            + '  </div>'
            + '  <div class="amt-step-divider" id="amtStepDiv1"></div>'
            + '  <div class="amt-step-item" data-step="2">'
            + '    <div class="amt-step-bubble"><span class="amt-step-num">2</span><span class="amt-step-check">&#10003;</span></div>'
            + '    <span class="amt-step-name">Pickup &amp; Contact</span>'
            + '  </div>'
            + '  <div class="amt-step-divider" id="amtStepDiv2"></div>'
            + '  <div class="amt-step-item" data-step="3">'
            + '    <div class="amt-step-bubble"><span class="amt-step-num">3</span><span class="amt-step-check">&#10003;</span></div>'
            + '    <span class="amt-step-name">Voucher</span>'
            + '  </div>'
            + '</div>'
            + '<div class="amt-header-step-row" style="display:none;">'
            + '<span id="amtStepLabel" class="amt-header-step-label">Step 1 of 3</span>'
            + '<div class="amt-header-track"><div id="amtProgressFill" class="amt-header-fill" style="width:33.33%;"></div></div>'
            + '</div>'
            + '</div>'

            + '<div class="amt-card-body">'

            // STEP 1: SERVICE, TOUR & SCHEDULE
            + '<div id="amtStep1">'
            + '<div id="amtDraftBanner" class="amt-draft-banner" style="display:none;">'
            + '  <span><i class="fa-solid fa-clock-rotate-left"></i> Restored your previous trip selections</span>'
            + '  <button type="button" id="amtClearDraftBtn" class="amt-draft-btn-clear">Start Fresh</button>'
            + '</div>'
            + '<div class="amt-step-hdr-compact">'
            + '  <h3 class="amt-step-title">1. Service &amp; Departure</h3>'
            + '  <span class="amt-trust-chip" id="amtStep1TrustChip"><i class="fa-solid fa-shield-halved"></i> Fixed Rates &bull; Zero Advance</span>'
            + '</div>'
            + '<div class="amt-category-grid" role="radiogroup" aria-label="Select Service Category">'
            + '  <button type="button" class="amt-service-btn active" role="radio" aria-checked="true" data-service="sightseeing">'
            + '    <span class="amt-cat-icon">🚕</span>'
            + '    <strong class="amt-cat-name">Sightseeing</strong>'
            + '    <span class="amt-cat-tag">Union Rates</span>'
            + '  </button>'
            + '  <button type="button" class="amt-service-btn" role="radio" aria-checked="false" data-service="express">'
            + '    <span class="amt-cat-icon">⚡</span>'
            + '    <strong class="amt-cat-name">Express ₹800</strong>'
            + '    <span class="amt-cat-tag amt-tag-green">Budget Flat</span>'
            + '  </button>'
            + '  <button type="button" class="amt-service-btn" role="radio" aria-checked="false" data-service="combo">'
            + '    <span class="amt-cat-icon">⭐</span>'
            + '    <strong class="amt-cat-name">Full Day</strong>'
            + '    <span class="amt-cat-tag">Combo ₹3000</span>'
            + '  </button>'
            + '  <button type="button" class="amt-service-btn" role="radio" aria-checked="false" data-service="outstation">'
            + '    <span class="amt-cat-icon">✈️</span>'
            + '    <strong class="amt-cat-name">Outstation Drop</strong>'
            + '    <span class="amt-cat-tag">Pune &bull; Mumbai &bull; Satara</span>'
            + '  </button>'
            + '  <button type="button" class="amt-service-btn" role="radio" aria-checked="false" data-service="local_drop">'
            + '    <span class="amt-cat-icon">📍</span>'
            + '    <strong class="amt-cat-name">Local Point Drop</strong>'
            + '    <span class="amt-cat-tag">Mapro &bull; Panchgani &bull; Local</span>'
            + '  </button>'
            + '</div>'
            + '<div class="amt-form-group" style="margin-bottom:8px;">'
            + '  <label class="amt-label" for="amtTourSelect" style="display:flex;justify-content:space-between;align-items:center;">'
            + '    <span id="amtTourSelectLabel">Select Sightseeing Tour *</span>'
            + '    <span id="amtTourCountBadge" class="amt-count-badge">6 Tours</span>'
            + '  </label>'
            + '  <select id="amtTourSelect" class="amt-select" style="width:100%;font-weight:700;font-size:12px;padding:5px 8px;border:1.5px solid #0284c7;border-radius:8px;background:#f0f9ff;color:#0f172a;min-height:34px;height:34px;">'
            + tourOptions
            + '  </select>'
            + '</div>'
            + '<div id="amtSelectedTourBanner" class="amt-selected-tour-banner" style="display:none;"></div>'
            + '<div id="amtSightseeingFilterWrap" style="display:none;"></div>'
            + '<div id="amtVisualTourCards" style="display:none;"></div>'
            + '<div id="amtExtraToursContainer" style="display:none;"></div>'
            + '<button type="button" id="amtAddTourBtn" style="display:none;"></button>'
            + '<div id="amtMultiTourSummary" style="display:none;"></div>'
            + '<div id="amtTourInsight" style="display:none;"></div>'
            + '<div class="amt-grid2" style="margin-top:10px;margin-bottom:8px;">'
            + '  <div>'
            + '    <label class="amt-label" for="amtDate">Travel Date *</label>'
            + '    <input type="date" id="amtDate" class="amt-input" required>'
            + '  </div>'
            + '  <div>'
            + '    <label class="amt-label" for="amtTime">Pickup Time *</label>'
            + '    <input type="time" id="amtTime" class="amt-input" value="09:00" required>'
            + '    <div class="amt-quick-time-chips" style="display:flex;gap:4px;margin-top:4px;width:100%;box-sizing:border-box;">'
            + '      <button type="button" class="amt-time-chip active" data-time="09:00">09:00 AM</button>'
            + '      <button type="button" class="amt-time-chip" data-time="10:30">10:30 AM</button>'
            + '      <button type="button" class="amt-time-chip" data-time="14:00">02:00 PM</button>'
            + '    </div>'
            + '  </div>'
            + '</div>'
            + '<div id="amtSmartTimeBox" style="display:none;">'
            + '  <button type="button" id="amtSmartTimeBtn" class="amt-smart-time-btn" style="display:none;">09:00 AM</button>'
            + '  <span id="amtSmartTimeReason" style="display:none;"></span>'
            + '</div>'
            + '<div id="amtMultiDayToggleBox" style="display:none;">'
            + '  <input type="checkbox" id="amtDiffScheduleCheckbox">'
            + '  <div id="amtMultiDayList"></div>'
            + '</div>'
            + '<div id="amtAdvisoryBox" style="display:none;"></div>'
            + '<div class="amt-btn-row" style="margin-top:12px;">'
            + '  <button type="button" class="amt-btn-next" id="amtToStep2" style="width:100%;padding:12px 20px;background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%);color:#ffffff;border:none;border-radius:11px;font-weight:800;font-size:0.96rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 12px rgba(2,132,199,0.35);">'
            + '    Next: Pickup &amp; Cab Details <i class="fa-solid fa-arrow-right"></i>'
            + '  </button>'
            + '</div>'
            + '</div>'

            // STEP 2: PICKUP HOTEL & GUEST DETAILS
            + '<div id="amtStep2" style="display:none;">'
            + '<div class="amt-step-hdr-compact">'
            + '  <h3 class="amt-step-title">2. Pickup Hotel &amp; Cab Details</h3>'
            + '  <span class="amt-trust-chip"><i class="fa-solid fa-shield-halved"></i> Pay Driver After Trip</span>'
            + '</div>'
            + '<div class="amt-cab-selector-wrap" style="margin-bottom:6px;">'
            + '  <label class="amt-label">Cab Type</label>'
            + '  <div class="amt-cab-pill-grid" style="display:flex;flex-direction:column;gap:6px;margin-top:3px;width:100%;">'
            + '    <div class="amt-cab-pill active" data-cab="4-seater" style="width:100%;box-sizing:border-box;">'
            + '      <div class="amt-cab-pill-radio"></div>'
            + '      <div class="amt-cab-pill-info">'
            + '        <strong>🚖 4-Seater Dedicated Tourist Cab</strong>'
            + '        <span>1 to 4 Guests &bull; Official Union Tariff &bull; Private Cab</span>'
            + '      </div>'
            + '    </div>'

            + '  </div>'
            + '  <p class="amt-cab-subnote" style="margin-top:4px;"><i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Dedicated private cab &bull; Hotel porch pickup</p>'
            + '  <select id="amtPax" style="display:none;"><option value="3-4" selected>3-4 Guests</option></select>'
            + '  '
            + '</div>'
            + '<div style="position:relative;margin-bottom:10px;">'
            + '  <label class="amt-label" for="amtPickup">Pickup Hotel / Landmark in Mahabaleshwar / Panchgani *</label>'
            + '  <div style="position:relative;">'
            + '    <input type="text" id="amtPickup" class="amt-input" placeholder="Type hotel name (e.g. Club Mahindra, Le Méridien, Market...)" autocomplete="off" required>'
            + '    <span id="amtPickupClear" style="display:none;position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;color:#94a3b8;font-size:1.1rem;padding:4px;">&times;</span>'
            + '  </div>'
            + '  <div id="amtAutocompleteList" class="amt-autocomplete-dropdown" style="display:none;"></div>'
            + '</div>'
            + '<div id="amtZoneNotice" style="display:none;"></div>'
            + '<div id="amtAvailabilityBox" style="display:none;"></div>'
            + '<div class="amt-grid2" style="margin-bottom:10px;">'
            + '  <div>'
            + '    <label class="amt-label" for="amtName">Your Full Name *</label>'
            + '    <input type="text" id="amtName" class="amt-input" placeholder="e.g. Rahul Sharma" required>'
            + '  </div>'
            + '  <div>'
            + '    <label class="amt-label" for="amtPhone">WhatsApp Mobile Number *</label>'
            + '    <input type="tel" id="amtPhone" class="amt-input" placeholder="10-digit mobile number" required>'
            + '  </div>'
            + '</div>'
            + '<div style="margin-bottom:10px;">'
            + '  <label class="amt-label" for="amtNotes">Special Notes <span style="font-weight:400;color:#64748b;font-size:0.72rem;">(Optional)</span></label>'
            + '  <input type="text" id="amtNotes" class="amt-input" placeholder="Any special notes (luggage count, senior citizen, etc.)?" maxlength="120">'
            + '</div>'
            + '<div id="amtReviewCard" class="amt-compact-review-bar"></div>'
            + '<div id="amtStep4PolicyBox" style="display:none;"></div>'
            + '  <div class="amt-btn-row" style="margin-top:8px;display:flex;flex-direction:column;gap:6px;">'
            + '    <button type="button" class="amt-btn-next amt-btn-confirm" id="amtConfirmBtn" style="width:100%;padding:10px 14px;background:linear-gradient(135deg, #10b981 0%, #059669 100%);color:#ffffff;border:none;border-radius:10px;font-weight:800;font-size:0.92rem;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;box-shadow:0 4px 14px rgba(16,185,129,0.35);">'
            + '      <div style="display:flex;align-items:center;gap:6px;"><i class="fa-solid fa-file-invoice"></i> GENERATE BOOKING VOUCHER &amp; REVIEW <i class="fa-solid fa-arrow-right"></i></div>'
            + '      <span style="font-size:0.68rem;font-weight:600;opacity:0.95;">Review Official Voucher &amp; Tour Details &bull; Direct Driver Dispatch</span>'
            + '    </button>'
            + '    <button type="button" class="amt-btn-back" id="amtBackTo1" style="width:100%;padding:6px 12px;border:1px solid #cbd5e1;background:#ffffff;color:#475569;border-radius:8px;font-weight:700;font-size:0.75rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;"><i class="fa-solid fa-arrow-left"></i> Change Tour Selection</button>'
            + '  </div>'
                        + '</div>'

            // STEP 3: DIGITAL CONFIRMED VOUCHER SCREEN
            + '<div id="amtStepVoucher" style="display:none;">'
            + '<div id="amtVoucherNotice" class="amt-voucher-screen-notice" style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:6px 10px;margin-bottom:8px;text-align:left;box-sizing:border-box;">'
            + '  <div style="display:flex;align-items:center;gap:6px;color:#065f46;font-size:0.80rem;font-weight:800;margin-bottom:1px;"><i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Booking Voucher Generated &bull; Union Rate Locked</div>'
            + '  <p id="amtVoucherNoticeSub" style="margin:0;font-size:0.72rem;color:#047857;line-height:1.25;font-weight:500;">Your trip reference is saved. Tap below to send details on WhatsApp for immediate cab dispatch. Pay driver after trip.</p>'
            + '</div>'
            + '<div id="amtVoucherContent" class="amt-voucher"></div>'
            + '<div id="amtDesktopQrContainer"></div>'
            + '<div class="amt-dispatch-tracker" style="display:flex;align-items:flex-start;justify-content:space-between;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:6px 12px 5px;margin-top:5px;margin-bottom:5px;box-sizing:border-box;width:100%;">'
            + '<div class="amt-dt-step completed" style="display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;"><div class="amt-dt-icon" style="width:18px;height:18px;border-radius:50%;background:#10b981;color:#fff;font-size:0.55rem;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-check"></i></div><div class="amt-dt-label" style="font-size:0.62rem;font-weight:700;color:#0f2b48;white-space:nowrap;">1. Voucher Issued</div></div>'
            + '<div class="amt-dt-line" style="flex:1 1 0;height:2px;background:#10b981;align-self:flex-start;margin-top:8px;margin-left:6px;margin-right:6px;"></div>'
            + '<div class="amt-dt-step active" style="display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;"><div class="amt-dt-icon" style="width:18px;height:18px;border-radius:50%;background:#0284c7;color:#fff;font-size:0.55rem;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px rgba(2,132,199,0.25);"><i class="fa-brands fa-whatsapp"></i></div><div class="amt-dt-label" style="font-size:0.62rem;font-weight:700;color:#0284c7;white-space:nowrap;">2. WhatsApp Dispatch</div></div>'
            + '<div class="amt-dt-line" style="flex:1 1 0;height:2px;background:#cbd5e1;align-self:flex-start;margin-top:8px;margin-left:6px;margin-right:6px;"></div>'
            + '<div class="amt-dt-step" style="display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;"><div class="amt-dt-icon" style="width:18px;height:18px;border-radius:50%;background:#cbd5e1;color:#fff;font-size:0.55rem;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-hotel"></i></div><div class="amt-dt-label" style="font-size:0.62rem;font-weight:700;color:#64748b;white-space:nowrap;">3. Porch Pickup</div></div>'
            + '</div>'
            + '<div class="amt-voucher-actions" style="margin-top:4px;">'
            + '<button type="button" id="amtWaBtn" class="amt-btn-next amt-btn-confirm" style="width:100%;padding:9px 12px;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;box-shadow:0 4px 14px rgba(16,185,129,0.35);background:#10b981;color:#ffffff;border:none;cursor:pointer;"><div class="amt-wa-btn-title" style="display:inline-flex;align-items:center;justify-content:center;gap:7px;font-size:0.88rem;font-weight:800;letter-spacing:0.3px;width:100%;white-space:nowrap;"><i class="fa-brands fa-whatsapp" style="font-size:1.15rem;"></i> <span>OPEN WHATSAPP TO DISPATCH CAB</span></div><span id="amtWaBtnSubtext" style="font-size:0.64rem;font-weight:600;opacity:0.95;line-height:1.25;text-align:center;display:block;padding:0 4px;box-sizing:border-box;width:100%;">Send transfer details on WhatsApp to confirm driver & advance schedule</span></button>'
            + '<div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:4px;margin-top:5px;">'
            + '<button type="button" id="amtDownloadPdfBtn" class="amt-btn-back amt-btn-pdf" style="padding:6px 2px;border:1px solid #0891b2;background:#f0fdf4;color:#0e7490;border-radius:6px;font-weight:700;cursor:pointer;font-size:0.68rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><i class="fa-solid fa-file-arrow-down" style="color:#0891b2;font-size:0.80rem;"></i><span>PDF</span></button>'
            + '<button type="button" id="amtPrintBtn" class="amt-btn-back" style="padding:6px 2px;border:1px solid #cbd5e1;background:#ffffff;color:#334155;border-radius:6px;font-weight:700;cursor:pointer;font-size:0.68rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><i class="fa-solid fa-print" style="font-size:0.80rem;"></i><span>Print</span></button>'
            + '<a id="amtCallBtn" href="tel:+919922882044" style="padding:6px 2px;border:1px solid #0284c7;background:#f0f9ff;color:#0369a1;border-radius:6px;font-weight:700;text-decoration:none;font-size:0.68rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><i class="fa-solid fa-phone" style="font-size:0.80rem;"></i><span>Call</span></a>'
            + '<button type="button" id="amtShareFamilyBtn" class="amt-v-link-btn" style="padding:6px 2px;border:1px solid #cbd5e1;background:#ffffff;color:#10b981;border-radius:6px;font-size:0.68rem;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><i class="fa-solid fa-share-nodes" style="font-size:0.80rem;"></i><span>Share</span></button>'
            + '<button type="button" id="amtCalendarBtn" class="amt-btn-back" style="padding:6px 2px;border:1px solid #cbd5e1;background:#ffffff;color:#6366f1;border-radius:6px;font-size:0.68rem;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><i class="fa-regular fa-calendar-plus" style="font-size:0.80rem;color:#6366f1;"></i><span>Calendar</span></button>'
            + '</div>'
            + '<button type="button" id="amtEditTripBtn" class="amt-btn-back" style="width:100%;margin-top:5px;padding:5px;font-size:0.72rem;border:1px solid #cbd5e1;background:#f8fafc;color:#475569;border-radius:6px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;"><i class="fa-solid fa-arrow-left"></i> Change Tour Selection / Edit Trip</button>'
            + '</div>'
            + '</div>'

            + '</div>'
            + '</div>'
            + '</div>';

        document.body.insertAdjacentHTML('beforeend', html);
    }

    // ── 5. Bind Engine Interactivity ───────────────────────────────────

    function updateZoneNotice() {
        var pickupVal = (document.getElementById('amtPickup') || {}).value || '';
        var zoneNotice = document.getElementById('amtZoneNotice');
        var availBox = document.getElementById('amtAvailabilityBox');
        if (!zoneNotice || !availBox) return;

        var db = window.TOUR_DATABASE;
        var sType = bookingState.service || bookingState.serviceType;
        var isOutstation = (sType === 'outstation') || (bookingState.tourId && String(bookingState.tourId).toLowerCase().indexOf('out_') === 0);
        if (db && db.getTourById && bookingState.tourId) {
            var currT = db.getTourById(bookingState.tourId);
            if (currT && (currT.category === 'outstation' || currT.type === 'transfer')) {
                isOutstation = true;
            }
        }

        if (isOutstation) {
            zoneNotice.style.display = 'none';
            availBox.style.display = 'block';
            availBox.innerHTML = '<i class="fa-solid fa-route" style="color:#0284c7;"></i> <strong>Outstation Doorstep Pickup:</strong> Hotel porch pickup across Mahabaleshwar & Panchgani. Fuel advance link shared via WhatsApp.';
            availBox.style.background = '#f0f9ff';
            availBox.style.color = '#0369a1';
            availBox.style.border = '1px solid #bae6fd';
            return;
        }

        if (!db || !db.getPickupZone || !pickupVal.trim()) {
            zoneNotice.style.display = 'none';
            availBox.style.display = 'block';
            availBox.innerHTML = '<i class="fa-solid fa-info-circle"></i> <strong>Mahabaleshwar Town Standard Fare.</strong> Pickups outside town limits (Panchgani/villages) have an additional charge.';
            availBox.style.background = '#eff6ff';
            availBox.style.color = '#1e40af';
            availBox.style.border = '1px solid #bfdbfe';
            return;
        }

        var zone = db.getPickupZone(pickupVal);
        var isOutside = zone && !zone.isStandardTariffZone && (zone.id === 'PANCHGANI' || zone.id === 'TAPOLA_VALLEY' || zone.id === 'WAI');
        if (isOutside) {
            availBox.style.display = 'none';
            zoneNotice.style.display = 'block';
            zoneNotice.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>Outside Town Limits (' + escapeHtml(zone.name || 'Selected Location') + '):</strong> Standard sightseeing tariff applies + nominal distance charge confirmed by driver.';
        } else {
            zoneNotice.style.display = 'none';
            availBox.style.display = 'block';
            availBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>Mahabaleshwar Town Limits:</strong> Standard union sightseeing tariff applies.';
            availBox.style.background = '#f0fdf4';
            availBox.style.color = '#166534';
            availBox.style.border = '1px solid #bbf7d0';
        }
    }

    function getSmartTimeForTour(tourId, dateVal) {
        var db = window.TOUR_DATABASE;
        var t = db ? db.getTourById(tourId) : null;
        var pId = (tourId || '').toUpperCase();
        var pName = t ? (t.name || '').toLowerCase() : '';
        var isMonsoon = db && db.isMonsoonDate ? db.isMonsoonDate(dateVal) : false;

        if (pId === 'LOC_WILSON' || pName.indexOf('sunrise') !== -1) {
            return { time: '05:30', display: '05:30 AM', reason: 'Recommended start to catch sunrise at Wilson Point' };
        }
        if (pId === 'LOC_BOMBAY' || (pId === 'T2' && !isMonsoon && pName.indexOf('sunset') !== -1)) {
            return { time: '15:30', display: '03:30 PM', reason: 'Recommended afternoon start for sunset at Mumbai Point' };
        }
        if (pId === 'T5' || pName.indexOf('wai') !== -1) {
            return { time: '08:00', display: '08:00 AM', reason: 'Recommended 8:00 AM start to cover full 6-hr Wai circuit' };
        }
        if (pId === 'T7' || (t && t.category === 'combo')) {
            return { time: '08:30', display: '08:30 AM', reason: 'Recommended start for full day Mahabaleshwar + Panchgani tour' };
        }
        if (pId === 'T6' || pName.indexOf('tapola') !== -1) {
            return { time: '08:30', display: '08:30 AM', reason: 'Recommended morning start for 30km scenic drive & lake boating' };
        }
        if (isMonsoon) {
            return { time: '09:30', display: '09:30 AM', reason: 'Recommended start once heavy morning mountain mist clears' };
        }
        return { time: '09:00', display: '09:00 AM', reason: 'Recommended morning start for clear viewpoint visibility' };
    }

    function updateSmartTimeUI() {
        var tourEl = document.getElementById('amtTourSelect');
        var tourId = tourEl ? tourEl.value : (bookingState.tourId || 'T1');
        var dateEl = document.getElementById('amtDate');
        var dateVal = dateEl ? dateEl.value : (bookingState.date || '');
        var rec = getSmartTimeForTour(tourId, dateVal);

        var btn = document.getElementById('amtSmartTimeBtn');
        var reason = document.getElementById('amtSmartTimeReason');
        if (btn) {
            btn.textContent = rec.display;
            btn.setAttribute('data-time', rec.time);
        }
        if (reason) {
            reason.textContent = rec.reason;
        }
    }

    function updateTourInsight() {
        var insight = document.getElementById('amtTourInsight');
        if (!insight) return;
        insight.innerHTML = '';
        insight.style.display = 'none';
    }

    function parseTimeMinutes(timeStr) {
        var raw = (timeStr || bookingState.time || '09:00').trim();
        var isPM = /pm/i.test(raw);
        var isAM = /am/i.test(raw);
        var clean = raw.replace(/(am|pm)/gi, '').trim();
        var parts = clean.split(':');
        var h = parseInt(parts[0], 10);
        var m = parseInt(parts[1], 10);
        if (isNaN(h)) h = 9;
        if (isNaN(m)) m = 0;
        if (isPM && h < 12) h += 12;
        if (isAM && h === 12) h = 0;
        return h * 60 + m;
    }

    function formatMinutes(mins) {
        var rh = Math.floor(mins / 60) % 24;
        var rm = mins % 60;
        var ampm = rh >= 12 ? 'PM' : 'AM';
        var dH = rh % 12;
        dH = dH ? dH : 12;
        return (dH < 10 ? '0' + dH : '' + dH) + ':' + (rm < 10 ? '0' + rm : '' + rm) + ' ' + ampm;
    }

    function generateEstimatedTimeline(tours, startTime, isOutstation, isLocalDrop) {
        if (isOutstation || isLocalDrop || !tours || !tours.length) return '';
        var isTransfer = tours.some(function (t) { return t && (t.category === 'outstation' || t.category === 'local_drop' || t.type === 'transfer' || t.type === 'local'); });
        if (isTransfer) return '';

        var totalMin = tours.reduce(function (acc, t) {
            return acc + (t && t.duration_minutes ? t.duration_minutes : 210);
        }, 0);

        var startTotal = parseTimeMinutes(startTime);
        var endTotal = startTotal + totalMin;

        var startStr = formatMinutes(startTotal);
        var endStr = formatMinutes(endTotal);
        var durStr = tours.map(function (t) { return t.duration; }).join(' + ');

        return '<div class="amt-timeline-box" style="margin-top:8px;padding:8px 12px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;font-size:0.75rem;color:#334155;">'
            + '<div style="font-weight:700;color:#0f2b48;margin-bottom:3px;display:flex;align-items:center;gap:6px;">'
            + '<i class="fa-solid fa-clock" style="color:#0284c7;"></i> Approximate Sightseeing Window: <strong>' + startStr + ' &ndash; ' + endStr + '</strong> <span style="font-size:0.7rem;color:#64748b;font-weight:600;">(' + escapeHtml(durStr) + ')</span>'
            + '</div>'
            + '<span style="font-size:0.7rem;color:#64748b;line-height:1.35;display:block;">'
            + 'ℹ️ <em>Guidance estimate based on package duration. Actual timing and stops visited depend on mountain weather, road traffic, viewpoint halt times, and police regulations (100% itinerary completion cannot be guaranteed).</em>'
            + '</span>'
            + '</div>';
    }

    function generateVoucherAdvisory(tours, startTime, isOutstation, isLocalDrop, isCombo) {
        var aiAdv = getAIAdvisory(tours, isOutstation, isLocalDrop, isCombo);
        var timeHtml = '';
        if (!isOutstation && !isLocalDrop && tours && tours.length) {
            var totalMin = tours.reduce(function (acc, t) {
                return acc + (t && t.duration_minutes ? t.duration_minutes : 210);
            }, 0);
            var startTotal = parseTimeMinutes(startTime);
            var endTotal = startTotal + totalMin;
            var startStr = formatMinutes(startTotal);
            var endStr = formatMinutes(endTotal);
            var durStr = tours.map(function (t) { return t.duration; }).join(' + ');

            timeHtml = '<div style="font-weight:700;color:#0f2b48;margin-bottom:2px;display:flex;align-items:center;gap:6px;">'
                + '<i class="fa-solid fa-clock" style="color:#0284c7;"></i> Approximate Sightseeing Window: <strong>' + startStr + ' &ndash; ' + endStr + '</strong> <span style="font-size:0.7rem;color:#64748b;font-weight:600;">(' + escapeHtml(durStr) + ')</span>'
                + '</div>';
        }

        var badge = (aiAdv && typeof aiAdv === 'object') ? aiAdv.badge : 'AI Circuit Info';
        var text = (aiAdv && typeof aiAdv === 'object') ? aiAdv.text : (aiAdv || '');

        return '<div class="amt-v-ai-advisory">'
            + timeHtml
            + '<span class="amt-v-ai-badge"><i class="fa-solid fa-sparkles"></i> ' + escapeHtml(badge) + '</span>'
            + '<span class="amt-v-ai-text">' + text + '</span>'
            + '</div>';
    }

    function loadGuestProfile() {
        try {
            var raw = localStorage.getItem('amt_guest_profile');
            if (!raw) return;
            var prof = JSON.parse(raw);
            if (!prof) return;

            var nameEl = document.getElementById('amtName');
            var phoneEl = document.getElementById('amtPhone');
            var pickEl = document.getElementById('amtPickup');
            var restoredNote = document.getElementById('amtGuestRestored');

            var restored = false;
            if (nameEl && !nameEl.value && prof.name) {
                nameEl.value = prof.name;
                bookingState.name = prof.name;
                restored = true;
            }
            if (phoneEl && !phoneEl.value && prof.phone) {
                phoneEl.value = prof.phone;
                bookingState.phone = prof.phone;
                restored = true;
            }
            if (pickEl && !pickEl.value && prof.pickup) {
                pickEl.value = prof.pickup;
                bookingState.pickup = prof.pickup;
                if (typeof updateZoneNotice === 'function') updateZoneNotice();
                restored = true;
            }
            if (restoredNote && restored) {
                restoredNote.style.display = 'block';
            }
        } catch (e) { }
    }

    function saveInquiryToLedger(state) {
        try {
            if (!state) return;
            var list = [];
            try {
                list = JSON.parse(localStorage.getItem('amt_bookings') || '[]');
            } catch (err) {
                list = [];
            }
            var tourTitle = state.tourId;
            if (window.TOUR_DATABASE && window.TOUR_DATABASE.getTourById) {
                var t = window.TOUR_DATABASE.getTourById(state.tourId);
                if (t) tourTitle = t.name;
            }
            var calculatedFare = state.totalFare || state.fare || (t ? t.fare : 0);
            var entry = {
                id: state.bookingId || ('AMT-' + Date.now().toString().slice(-6)),
                bookingId: state.bookingId || ('AMT-' + Date.now().toString().slice(-6)),
                name: state.name || '',
                phone: state.phone || '',
                service: state.service || 'sightseeing',
                tour: tourTitle || 'Mahabaleshwar Sightseeing',
                fare: calculatedFare,
                pickup: state.pickup || '',
                date: state.date || '',
                time: state.time || '',
                pax: state.pax || '3-4',
                notes: state.notes || '',
                status: 'inquiry',
                createdAt: new Date().toISOString()
            };
            list.unshift(entry);
            if (list.length > 50) list = list.slice(0, 50);
            localStorage.setItem('amt_bookings', JSON.stringify(list));
            dispatchBookingRemote(entry);
        } catch (e) { }
    }

    function saveGuestProfile(name, phone, pickup) {
        try {
            if (name || phone) {
                localStorage.setItem('amt_guest_profile', JSON.stringify({
                    name: name || '',
                    phone: phone || '',
                    pickup: pickup || '',
                    time: new Date().toISOString()
                }));
            }
        } catch (e) { }
    }

    function pad2(n) { return (n < 10 ? '0' : '') + n; }

    var _amtEventsBound = false;
    function bindEngineEvents() {
        if (_amtEventsBound) return;
        var modal = document.getElementById('amtBookingModal');
        if (!modal) return;
        _amtEventsBound = true;

        var closeBtn = document.getElementById('amtCloseBtn');
        if (closeBtn) closeBtn.addEventListener('click', function () { window.closeBookingModal(); });
        if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) window.closeBookingModal(); });

        // Global Escape key listener to close modal
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                var bModal = document.getElementById('amtBookingModal');
                if (bModal && bModal.style.display !== 'none') {
                    window.closeBookingModal();
                }
            }
        });

        // Service Category Filter Buttons
        var serviceBtns = document.querySelectorAll('.amt-service-btn');
        serviceBtns.forEach(function (btn) {
            function activateService() {
                serviceBtns.forEach(function (b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-checked', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-checked', 'true');
                var s = btn.getAttribute('data-service');
                bookingState.service = s;
                populateTourDropdownByService(s);
            }
            btn.addEventListener('click', activateService);
            btn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
                    e.preventDefault();
                    activateService();
                }
            });
        });

        // Autocomplete on Pickup field & Clear Button
        var pickInput = document.getElementById('amtPickup');
        var autoList = document.getElementById('amtAutocompleteList') || document.getElementById('amtAutoList');
        var pickClear = document.getElementById('amtPickupClear');
        if (pickInput && autoList) {
            if (pickClear) {
                if (pickInput.value) pickClear.style.display = 'block';
                pickClear.addEventListener('click', function (e) {
                    e.stopPropagation();
                    pickInput.value = '';
                    bookingState.pickup = '';
                    pickClear.style.display = 'none';
                    autoList.style.display = 'none';
                    updateZoneNotice();
                    pickInput.focus();
                });
            }

            pickInput.addEventListener('input', function () {
                var val = pickInput.value.trim();
                if (pickClear) pickClear.style.display = val ? 'block' : 'none';
                var results = window.TOUR_DATABASE ? window.TOUR_DATABASE.searchLocations(val) : [];
                if (results.length > 0) {
                    autoList.innerHTML = results.map(function (loc) {
                        var lName = escapeHtml(loc.name);
                        var lArea = escapeHtml(loc.area);
                        return '<div class="amt-autocomplete-item" data-val="' + lName + '"><strong>' + lName + '</strong><span style="font-size:0.72rem;color:#64748b;">' + lArea + '</span></div>';
                    }).join('');
                    autoList.style.display = 'block';
                } else {
                    autoList.style.display = 'none';
                }
            });

            autoList.addEventListener('click', function (e) {
                var item = e.target.closest('.amt-autocomplete-item');
                if (item) {
                    pickInput.value = item.getAttribute('data-val');
                    bookingState.pickup = pickInput.value;
                    autoList.style.display = 'none';
                    if (pickClear) pickClear.style.display = 'block';
                    updateZoneNotice();
                }
            });

            document.addEventListener('click', function (e) {
                if (!pickInput.contains(e.target) && !autoList.contains(e.target)) {
                    autoList.style.display = 'none';
                }
            });
        }

        // Date Picker advisory & Constraints
        // Quick Time Chips Listener
        var timeChips = document.querySelectorAll('.amt-time-chip');
        timeChips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                var t = chip.getAttribute('data-time') || '09:00';
                var timeInput = document.getElementById('amtTime');
                if (timeInput) {
                    timeInput.value = t;
                    bookingState.time = t;
                }
                timeChips.forEach(function (c) { c.classList.remove('active'); });
                chip.classList.add('active');
            });
        });

        // Cab Selector Pills Listener
        // Only 4-seater cab available - all rates are for 4-seater only
        var cabPills = document.querySelectorAll('.amt-cab-pill');
        cabPills.forEach(function (pill) {
            pill.addEventListener('click', function () {
                cabPills.forEach(function (p) { p.classList.remove('active'); });
                pill.classList.add('active');
                bookingState.pax = '3-4';
                bookingState.taxiCount = 1;
                var paxSel = document.getElementById('amtPax');
                if (paxSel) paxSel.value = '3-4';
                renderReviewCard();
            });
        });

        // Preview Voucher Button Listener
        var prevVoucherBtn = document.getElementById('amtPreviewVoucherBtn');
        if (prevVoucherBtn) {
            prevVoucherBtn.addEventListener('click', function () {
                var pickInput = document.getElementById('amtPickup');
                var nameEl = document.getElementById('amtName');
                var phoneEl = document.getElementById('amtPhone');
                var notesEl = document.getElementById('amtNotes');

                bookingState.pickup = pickInput ? pickInput.value.trim() : '';
                bookingState.name = nameEl ? nameEl.value.trim() : '';
                bookingState.phone = phoneEl ? phoneEl.value.trim() : '';
                bookingState.notes = notesEl ? notesEl.value.trim() : '';

                if (!bookingState.pickup || bookingState.pickup.length < 3) {
                    alert('Please enter your pickup hotel, resort, or landmark in Mahabaleshwar / Panchgani.');
                    if (pickInput) pickInput.focus();
                    return;
                }
                if (!bookingState.name || bookingState.name.length < 2) {
                    alert('Please enter your full name (at least 2 characters).');
                    if (nameEl) nameEl.focus();
                    return;
                }
                var validatedPhone = validateIndianPhone(bookingState.phone);
                if (!validatedPhone) {
                    alert('Please enter a valid 10-digit mobile number for WhatsApp coordination (e.g. 9876543210).');
                    if (phoneEl) phoneEl.focus();
                    return;
                }
                bookingState.phone = validatedPhone;

                if (!bookingState.bookingId) bookingState.bookingId = generateBookingId();
                renderVoucherScreen();
                goToVoucher();
            });
        }

        var dateInput = document.getElementById('amtDate');
        if (dateInput) {
            var now = new Date();
            var yyyy = now.getFullYear();
            var mm = pad2(now.getMonth() + 1);
            var dd = pad2(now.getDate());
            var todayStr = yyyy + '-' + mm + '-' + dd;
            dateInput.min = todayStr;
            dateInput.max = (yyyy + 1) + '-' + mm + '-' + dd;
            if (!dateInput.value || dateInput.value < todayStr) {
                dateInput.value = todayStr;
            }
            dateInput.addEventListener('change', function () {
                updateAdvisory();
                updateSmartTimeUI();
            });
        }

        // Pax change listener for group booking
        var paxSel = document.getElementById('amtPax');
        var grpField = document.getElementById('amtGroupField');
        if (paxSel && grpField) {
            paxSel.addEventListener('change', function () {
                if (paxSel.value === '5+') {
                    grpField.style.display = 'block';
                    var tc = document.getElementById('amtTaxiCount');
                    bookingState.taxiCount = tc ? parseInt(tc.value, 10) : 2;
                } else {
                    grpField.style.display = 'none';
                    bookingState.taxiCount = 1;
                }
            });
        }
        var tcSel = document.getElementById('amtTaxiCount');
        if (tcSel) {
            tcSel.addEventListener('change', function () {
                bookingState.taxiCount = parseInt(tcSel.value, 10) || 2;
            });
        }

        // Pickup change listener for zone detection
        if (pickInput) {
            pickInput.addEventListener('change', updateZoneNotice);
            pickInput.addEventListener('blur', updateZoneNotice);
        }

        // Dynamic Tour 2 options updater (prevents selecting identical tour)
        var mainTourSel = document.getElementById('amtTourSelect');
        if (mainTourSel) {
            mainTourSel.addEventListener('change', function () {
                syncSelectedToursFromPrimary();
                if (typeof updateSelectedTourBanner === 'function') {
                    updateSelectedTourBanner(mainTourSel.value);
                }
                renderExtraTourRows();
                updateTourInsight();
                updateSmartTimeUI();
                renderReviewCard();
            });
        }

        var addTourBtn = document.getElementById('amtAddTourBtn');
        if (addTourBtn) {
            addTourBtn.addEventListener('click', function () {
                addExtraTour();
            });
        }

        var diffScheduleCb = document.getElementById('amtDiffScheduleCheckbox');
        if (diffScheduleCb) {
            diffScheduleCb.addEventListener('change', function () {
                bookingState.differentSchedule = !!diffScheduleCb.checked;
                renderMultiDayScheduleUI();
            });
        }

        // Time Input & Smart Time Suggestion Handlers
        var timeInputEl = document.getElementById('amtTime');
        if (timeInputEl) {
            timeInputEl.addEventListener('change', function () {
                bookingState.time = timeInputEl.value || '09:00';
            });
            timeInputEl.addEventListener('input', function () {
                bookingState.time = timeInputEl.value || '09:00';
            });
        }

        var stBtn = document.getElementById('amtSmartTimeBtn');
        if (stBtn) {
            stBtn.addEventListener('click', function () {
                var tVal = stBtn.getAttribute('data-time') || '09:00';
                var timeInput = document.getElementById('amtTime');
                if (timeInput) {
                    timeInput.value = tVal;
                    bookingState.time = tVal;
                    timeInput.style.borderColor = '#10b981';
                    setTimeout(function () { timeInput.style.borderColor = ''; }, 1000);
                }
            });
        }

        // Initial update for smart time and tour insight
        updateTourInsight();
        updateSmartTimeUI();

        // ── 3-Step Navigation & Working Action Buttons ──────────────────────
        var toStep2 = document.getElementById('amtToStep2');
        if (toStep2) {
            toStep2.addEventListener('click', function () {
                // Ensure tour selected
                var tourEl = document.getElementById('amtTourSelect');
                if (tourEl && tourEl.value) {
                    bookingState.tourId = tourEl.value;
                }
                if (!bookingState.tourId) {
                    alert('Please select a tour package to proceed.');
                    if (tourEl) tourEl.focus();
                    return;
                }

                // Validate Date & Time
                var dateEl = document.getElementById('amtDate');
                var timeEl = document.getElementById('amtTime');
                var dVal = dateEl ? dateEl.value : '';
                var tVal = timeEl ? timeEl.value : '09:00';

                var now = new Date();
                var yyyy = now.getFullYear();
                var mm = pad2(now.getMonth() + 1);
                var dd = pad2(now.getDate());
                var todayStr = yyyy + '-' + mm + '-' + dd;

                if (!dVal) {
                    alert('Please select your travel date.');
                    if (dateEl) dateEl.focus();
                    return;
                }
                if (dVal < todayStr) {
                    alert('Selected travel date has already passed. Please select today or a future date.');
                    if (dateEl) {
                        dateEl.value = todayStr;
                        dateEl.focus();
                    }
                    return;
                }

                bookingState.date = dVal;
                bookingState.time = tVal || '09:00';

                if (bookingState.differentSchedule) {
                    var hasInvalidDate = false;
                    (bookingState.selectedTours || []).forEach(function (st) {
                        if (!st.date || st.date < todayStr) {
                            hasInvalidDate = true;
                        }
                    });
                    if (hasInvalidDate) {
                        alert('One or more tours have an invalid or past date. Please verify all tour dates.');
                        return;
                    }
                } else {
                    syncSelectedToursFromPrimary();
                    (bookingState.selectedTours || []).forEach(function (st) {
                        st.date = dVal;
                        st.time = tVal || '09:00';
                    });
                }

                renderMultiDayScheduleUI();
                updateZoneNotice();
                loadGuestProfile();
                renderReviewCard();
                goToStep(2);
            });
        }

        var backTo1 = document.getElementById('amtBackTo1');
        if (backTo1) {
            backTo1.addEventListener('click', function () {
                goToStep(1);
            });
        }

        // Backward compatibility handlers for any static step 3/4 buttons
        var toStep3 = document.getElementById('amtToStep3');
        if (toStep3) {
            toStep3.addEventListener('click', function () { goToStep(2); });
        }
        var backTo2 = document.getElementById('amtBackTo2');
        if (backTo2) {
            backTo2.addEventListener('click', function () { goToStep(1); });
        }
        var toStep4 = document.getElementById('amtToStep4');
        if (toStep4) {
            toStep4.addEventListener('click', function () { goToStep(2); });
        }
        var backTo3 = document.getElementById('amtBackTo3');
        if (backTo3) {
            backTo3.addEventListener('click', function () { goToStep(1); });
        }

        // Confirm Booking (Step 2 -> Step 3 Voucher)
        var confirmBtn = document.getElementById('amtConfirmBtn');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function () {
                if (bookingState.submitting) return;

                var pickInput = document.getElementById('amtPickup');
                var nameEl = document.getElementById('amtName');
                var phoneEl = document.getElementById('amtPhone');
                var notesEl = document.getElementById('amtNotes');
                var paxSel = document.getElementById('amtPax');

                bookingState.pickup = pickInput ? pickInput.value.trim() : '';
                bookingState.name = nameEl ? nameEl.value.trim() : '';
                bookingState.phone = phoneEl ? phoneEl.value.trim() : '';
                bookingState.notes = notesEl ? notesEl.value.trim() : '';
                bookingState.pax = paxSel ? paxSel.value : '3-4';

                if (bookingState.pax === '5+') {
                    var tc = document.getElementById('amtTaxiCount');
                    bookingState.taxiCount = tc ? parseInt(tc.value, 10) : 2;
                } else {
                    bookingState.taxiCount = 1;
                }

                if (!bookingState.pickup || bookingState.pickup.length < 3) {
                    alert('Please enter your pickup hotel, resort, or landmark in Mahabaleshwar / Panchgani.');
                    if (pickInput) pickInput.focus();
                    return;
                }

                if (!bookingState.name || bookingState.name.length < 2) {
                    alert('Please enter your full name (at least 2 characters).');
                    if (nameEl) nameEl.focus();
                    return;
                }

                var validatedPhone = validateIndianPhone(bookingState.phone);
                if (!validatedPhone) {
                    alert('Please enter a valid 10-digit mobile number for WhatsApp coordination (e.g. 9876543210).');
                    if (phoneEl) {
                        phoneEl.focus();
                        phoneEl.style.borderColor = '#ef4444';
                        setTimeout(function () { phoneEl.style.borderColor = ''; }, 3000);
                    }
                    return;
                }
                bookingState.phone = validatedPhone;

                // Defensive validation for tour, date, time
                var tourEl = document.getElementById('amtTourSelect');
                if (tourEl && tourEl.value) {
                    bookingState.tourId = tourEl.value;
                    if (typeof syncSelectedToursFromPrimary === 'function') syncSelectedToursFromPrimary();
                } else if (!bookingState.tourId) {
                    alert('Please select a tour package.');
                    goToStep(1);
                    return;
                }

                var dateEl = document.getElementById('amtDate');
                var timeEl = document.getElementById('amtTime');
                if (dateEl) bookingState.date = dateEl.value;
                if (timeEl) bookingState.time = timeEl.value || '09:00';


                bookingState.submitting = true;
                confirmBtn.disabled = true;
                confirmBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> GENERATING OFFICIAL VOUCHER...';

                try {
                    bookingState.bookingId = generateBookingId();
                    saveGuestProfile(bookingState.name, bookingState.phone, bookingState.pickup);
                    try { saveInquiryToLedger(bookingState); } catch (eLedger) { }
                    if (typeof clearBookingDraft === 'function') clearBookingDraft();

                    renderVoucherScreen();
                    goToVoucher();
                } catch (e) {
                    console.error('Error generating voucher:', e);
                    try { renderVoucherScreen(); } catch (e2) { }
                    goToVoucher();
                } finally {
                    bookingState.submitting = false;
                    confirmBtn.disabled = false;
                    var isOut = bookingState.service === 'outstation';
                    var isDrop = bookingState.service === 'local_drop';
                    var subTxt = isOut
                        ? 'Review Confirmed Tariff &amp; Driver Schedule &bull; Nominal Fuel Advance'
                        : (isDrop ? 'Review Official Voucher &amp; Drop Details &bull; Pay Driver After Drop' : 'Review Official Voucher &amp; Tour Details &bull; Pay Driver After Trip');
                    confirmBtn.innerHTML = '<div style="display:flex;align-items:center;gap:6px;"><i class="fa-solid fa-file-invoice"></i> GENERATE BOOKING VOUCHER &amp; REVIEW <i class="fa-solid fa-arrow-right"></i></div>'
                        + '<span style="font-size:0.68rem;font-weight:600;opacity:0.95;">' + subTxt + '</span>';
                }
            });
        }

        // Book Another Cab listener
        var newBookingBtn = document.getElementById('amtNewBookingBtn');
        if (newBookingBtn) {
            newBookingBtn.addEventListener('click', function () {
                window.openBookingModal('');
            });
        }

        // ── WORKING ACTION BUTTONS ON STEP 3 VOUCHER ────────────────────────


        // ── Standalone Isolated Voucher Printing & PDF Generation ─────────
        function buildStandaloneVoucherHtml(innerContent) {
            return '<!DOCTYPE html>\n'
                + '<html lang="en">\n'
                + '<head>\n'
                + '  <meta charset="utf-8">\n'
                + '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
                + '  <title>Aryan Taxi Mahabaleshwar - Official Booking Voucher</title>\n'
                + '  <style>\n'
                + '    @page { size: A4 portrait; margin: 4mm 5mm; }\n'
                + '    * { box-sizing: border-box !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }\n'
                + '    body { margin: 0; padding: 6px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background: #ffffff !important; color: #0f172a !important; font-size: 11px; }\n'
                + '    .amt-v-card-streamlined { border: 1.5px solid #0f2b48 !important; border-radius: 8px !important; padding: 10px 12px !important; max-width: 760px; margin: 0 auto; background: #ffffff !important; color: #0f172a !important; display: flex; flex-direction: column; gap: 5px; box-sizing: border-box; }\n'
                + '    .amt-v-hdr { display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 4px; }\n'
                + '    .amt-v-hdr-left { display: flex; align-items: center; gap: 8px; }\n'
                + '    .amt-v-brand { font-size: 13px; font-weight: 800; color: #0f2b48; letter-spacing: 0.5px; }\n'
                + '    .amt-v-sub { font-size: 10px; color: #64748b; font-weight: 600; }\n'
                + '    .amt-v-hdr-right { display: flex; flex-direction: column; align-items: flex-end; text-align: right; gap: 2px; }\n'
                + '    .amt-v-badge { display: inline-block; padding: 2px 7px; border-radius: 12px; font-size: 9px; font-weight: 800; background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }\n'
                + '    .amt-v-ref-box { font-size: 10px; color: #334155; }\n'
                + '    .amt-v-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 7px; padding: 6px 9px; margin-bottom: 4px; font-size: 10.5px; }\n'
                + '    .amt-v-cell { display: flex; flex-direction: column; gap: 1.5px; }\n'
                + '    .amt-v-lbl { font-size: 8.5px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px; }\n'
                + '    .amt-v-val { font-size: 10.5px; font-weight: 700; color: #0f172a; }\n'
                + '    .amt-v-vehicle-cell { border-top: 1px dashed #e2e8f0; padding-top: 3px; grid-column: 1 / -1; }\n'
                + '    .amt-v-vehicle-wrap { display: flex; align-items: center; gap: 4px; font-size: 10px; color: #0f172a; }\n'
                + '    .amt-v-vehicle-lbl { font-size: 8.5px; font-weight: 700; color: #64748b; text-transform: uppercase; }\n'
                + '    .amt-v-vehicle-val { font-weight: 700; color: #0369a1; }\n'
                + '    .amt-v-tour-strip { border: 1px solid #bae6fd; background: #f0f9ff; border-radius: 7px; padding: 6px 9px; margin-bottom: 4px; }\n'
                + '    .amt-v-tour-hdr { display: flex; justify-content: space-between; align-items: center; font-weight: 800; font-size: 11px; color: #0369a1; border-bottom: 1px solid #bae6fd; padding-bottom: 3px; margin-bottom: 3px; }\n'
                + '    .amt-v-tour-dur { font-size: 9px; color: #0284c7; font-weight: 700; background: #e0f2fe; padding: 1.5px 6px; border-radius: 8px; }\n'
                + '    .amt-v-tour-meta { font-size: 9.5px; color: #0f2b48; margin-bottom: 3px; }\n'
                + '    .amt-v-points-box { margin-top: 3px; }\n'
                + '    .amt-v-points-head { font-size: 8.5px; font-weight: 800; color: #0369a1; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.2px; }\n'
                + '    .amt-v-chips-wrap { display: flex; flex-wrap: wrap; gap: 3px; }\n'
                + '    .amt-v-chip { display: inline-block; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 1px 5px; font-size: 8.5px; color: #334155; font-weight: 600; }\n'
                + '    .amt-v-route-strip { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; font-size: 9.5px; font-weight: 600; color: #1e293b; margin-top: 3px; }\n'
                + '    .amt-v-route-step { background: #ffffff; border: 1px solid #cbd5e1; padding: 1.5px 5px; border-radius: 3px; }\n'
                + '    .amt-v-route-arrow { color: #0284c7; font-weight: 800; }\n'
                + '    .amt-v-ai-advisory { background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%) !important; border: 1px solid #a7f3d0 !important; border-left: 3px solid #10b981 !important; border-radius: 5px !important; padding: 4px 7px !important; margin: 3px 0 !important; display: flex !important; align-items: center !important; gap: 6px !important; box-sizing: border-box !important; }\n'
                + '    .amt-v-ai-badge { display: inline-flex !important; align-items: center !important; gap: 3px !important; background: #dcfce7 !important; color: #047857 !important; border: 1px solid #86efac !important; font-size: 8px !important; font-weight: 800 !important; padding: 1.5px 5px !important; border-radius: 3px !important; text-transform: uppercase !important; letter-spacing: 0.3px !important; white-space: nowrap !important; flex-shrink: 0 !important; }\n'
                + '    .amt-v-ai-text { font-size: 9.5px !important; line-height: 1.35 !important; color: #065f46 !important; font-weight: 500 !important; }\n'
                + '    .amt-v-fare-bar { display: flex !important; justify-content: space-between !important; align-items: center !important; background: #f8fafc !important; border: 1.2px solid #cbd5e1 !important; border-radius: 6px !important; padding: 4px 8px !important; margin: 3px 0 !important; box-sizing: border-box !important; }\n'
                + '    .amt-v-fare-left { display: flex !important; flex-direction: column !important; }\n'
                + '    .amt-v-fare-lbl { font-size: 8px !important; color: #64748b !important; font-weight: 800 !important; text-transform: uppercase !important; letter-spacing: 0.3px !important; }\n'
                + '    .amt-v-fare-amt { font-size: 13.5px !important; font-weight: 900 !important; color: #0e7490 !important; line-height: 1.1 !important; }\n'
                + '    .amt-v-fare-breakdown { font-size: 7.5px !important; color: #64748b !important; }\n'
                + '    .amt-v-fare-right { text-align: right !important; display: flex !important; flex-direction: column !important; align-items: flex-end !important; }\n'
                + '    .amt-v-pay-badge { font-size: 8.5px !important; font-weight: 800 !important; color: #15803d !important; }\n'
                + '    .amt-v-pay-note { font-size: 7.5px !important; color: #64748b !important; }\n'
                + '    .amt-v-terms-compact { background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 5px 8px; font-size: 8.5px; margin-bottom: 2px; }\n'
                + '    .amt-v-terms-title { font-weight: 800; color: #92400e; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.2px; font-size: 8px; }\n'
                + '    .amt-v-terms-list { margin: 0; padding-left: 12px; color: #78350f; }\n'
                + '    .amt-v-terms-list li { margin-bottom: 1px; font-size: 8px; line-height: 1.3; }\n'
                + '    .amt-v-notes-chip { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 5px; padding: 3px 6px; font-size: 9px; color: #166534; margin-bottom: 3px; }\n'
                + '    .amt-v-print-slip { display: block !important; margin-top: 3px !important; border: 1px dashed #cbd5e1 !important; border-radius: 5px !important; padding: 4px 7px !important; background: #f8fafc !important; font-size: 8.5px !important; color: #475569 !important; }\n'
                + '    .amt-v-ftr { display: flex; justify-content: space-between; font-size: 8px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 3px; margin-top: 2px; }\n'
                + '    @media print { body { padding: 0 !important; } }\n'
                + '  </style>\n'
                + '</head>\n'
                + '<body>\n'
                + innerContent
                + '\n</body>\n'
                + '</html>';
        }

        function printVoucherDocument() {
            var voucherEl = document.getElementById('amtVoucherContent');
            if (!voucherEl || !voucherEl.innerHTML || voucherEl.innerHTML.trim() === '') {
                try { renderVoucherScreen(); } catch (e) { }
                voucherEl = document.getElementById('amtVoucherContent');
            }
            if (!voucherEl) return;

            var printContent = buildStandaloneVoucherHtml(voucherEl.innerHTML);

            var iframe = document.getElementById('amtVoucherPrintFrame');
            if (iframe) {
                try { document.body.removeChild(iframe); } catch (e) { }
            }
            iframe = document.createElement('iframe');
            iframe.id = 'amtVoucherPrintFrame';
            iframe.style.position = 'fixed';
            iframe.style.top = '-9999px';
            iframe.style.left = '-9999px';
            iframe.style.width = '1px';
            iframe.style.height = '1px';
            iframe.style.border = '0';
            document.body.appendChild(iframe);

            var frameDoc = iframe.contentWindow || iframe.contentDocument;
            if (frameDoc.document) frameDoc = frameDoc.document;

            frameDoc.open();
            frameDoc.write(printContent);
            frameDoc.close();

            setTimeout(function () {
                try {
                    iframe.contentWindow.focus();
                    iframe.contentWindow.print();
                } catch (err) {
                    var pWin = window.open('', '_blank', 'width=800,height=900');
                    if (pWin) {
                        pWin.document.open();
                        pWin.document.write(printContent);
                        pWin.document.close();
                        pWin.focus();
                        setTimeout(function () { pWin.print(); }, 400);
                    }
                }
            }, 350);
        }

        function downloadVoucherPdf() {
            var voucherEl = document.getElementById('amtVoucherContent');
            if (!voucherEl || !voucherEl.innerHTML || voucherEl.innerHTML.trim() === '') {
                try { renderVoucherScreen(); } catch (e) { }
                voucherEl = document.getElementById('amtVoucherContent');
            }
            if (!voucherEl) return;
            var bId = bookingState.bookingId || ('AMT-' + Date.now().toString().slice(-6));
            var btn = document.getElementById('amtDownloadPdfBtn');
            var origText = btn ? btn.innerHTML : '';
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="color:#0891b2;font-size:0.80rem;"></i><span>Saving PDF...</span>';
            }

            function resetBtn() {
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = origText;
                }
            }

            function fallbackDownloadHtml() {
                try {
                    var innerHtml = voucherEl.innerHTML;
                    var standaloneHtml = buildStandaloneVoucherHtml(innerHtml);
                    var blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8' });
                    var url = URL.createObjectURL(blob);
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = 'AryanTaxi-Voucher-' + bId + '.html';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    if (btn) btn.innerHTML = '<i class="fa-solid fa-check"></i> Voucher Saved!';
                    setTimeout(function () { resetBtn(); URL.revokeObjectURL(url); }, 3000);
                } catch (err) {
                    resetBtn();
                }
            }

            function executePdfGeneration() {
                try {
                    // Create an offscreen clone with all details sections expanded for full voucher capture
                    var clone = voucherEl.cloneNode(true);
                    var detailsList = clone.querySelectorAll('details');
                    detailsList.forEach(function (d) {
                        d.setAttribute('open', '');
                    });
                    clone.style.width = '700px';
                    clone.style.maxWidth = '700px';
                    clone.style.background = '#ffffff';
                    clone.style.padding = '12px';
                    clone.style.boxSizing = 'border-box';
                    clone.style.position = 'absolute';
                    clone.style.left = '-9999px';
                    clone.style.top = '0';
                    document.body.appendChild(clone);

                    var opt = {
                        margin: [6, 6, 6, 6],
                        filename: 'AryanTaxi-Voucher-' + bId + '.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true, logging: false },
                        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                    };

                    html2pdf().set(opt).from(clone).save().then(function () {
                        try { document.body.removeChild(clone); } catch (e) { }
                        if (btn) {
                            btn.innerHTML = '<i class="fa-solid fa-check"></i> PDF Saved!';
                            setTimeout(resetBtn, 3000);
                        }
                    }).catch(function (err) {
                        console.warn('html2pdf generation error, falling back:', err);
                        try { document.body.removeChild(clone); } catch (e) { }
                        fallbackDownloadHtml();
                    });
                } catch (ePdf) {
                    console.warn('PDF generation exception, falling back:', ePdf);
                    fallbackDownloadHtml();
                }
            }

            if (typeof html2pdf !== 'undefined') {
                executePdfGeneration();
            } else {
                var script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                script.onload = function () {
                    executePdfGeneration();
                };
                script.onerror = function () {
                    fallbackDownloadHtml();
                };
                document.head.appendChild(script);
            }
        }

        // 1. Print Voucher (Isolated 1-Page Iframe - Zero Background Bleed)
        var printBtn = document.getElementById('amtPrintBtn');
        if (printBtn) {
            printBtn.addEventListener('click', function () {
                printVoucherDocument();
            });
        }

        // 2. Download Voucher PDF (Clean Coordinate Capture & Safe Logo)
        var downloadPdfBtn = document.getElementById('amtDownloadPdfBtn');
        if (downloadPdfBtn) {
            downloadPdfBtn.addEventListener('click', function () {
                downloadVoucherPdf();
            });
        }

        // Edit Trip Details button on Voucher screen
        
        // Copy Pass ID
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('#amtCopyPassIdBtn');
            if (btn) {
                e.preventDefault();
                var pId = (bookingState.bookingId || 'AMT-REQ').trim();
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(pId);
                }
                var orig = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;"></i>';
                setTimeout(function () { btn.innerHTML = orig; }, 1800);
            }
        });

        // Calendar button
        var calBtn = document.getElementById('amtCalendarBtn');
        if (calBtn) {
            calBtn.addEventListener('click', function () {
                addBookingToGoogleCalendar();
            });
        }

        var editTripBtn = document.getElementById('amtEditTripBtn');
        if (editTripBtn) {
            editTripBtn.addEventListener('click', function () {
                goToStep(2);
            });
        }
        // 3. Email Voucher to Guest (Concise mailto + Clipboard copy fallback)
        var emailVoucherBtn = document.getElementById('amtEmailVoucherBtn');
        if (emailVoucherBtn) {
            emailVoucherBtn.addEventListener('click', function () {
                var b = bookingState;
                var db = window.TOUR_DATABASE;
                var t = (db && b.selectedTours && b.selectedTours[0]) ? db.getTourById(b.selectedTours[0].id) : null;
                var tourName = t ? t.name : (b.tourId || 'Mahabaleshwar Sightseeing');
                var fare = t ? t.fare.toLocaleString('en-IN') : '1,200';
                var bId = b.bookingId || 'AMT-BK';

                // Keep mailto URL strictly under 280 chars to ensure no browser drops it
                var subject = "Aryan Taxi Voucher [" + bId + "] - " + (b.name || 'Guest');
                var shortBody = "Aryan Taxi Voucher " + bId + "\n"
                    + "Guest: " + (b.name || 'Valued Guest') + " (+91 " + (b.phone || '9922882044') + ")\n"
                    + "Tour: " + tourName + " (INR " + fare + ")\n"
                    + "Schedule: " + (b.date || 'Scheduled') + " at " + (b.time || '09:00 AM') + "\n"
                    + "Pickup: " + (b.pickup || 'Mahabaleshwar') + "\n"
                    + "Helpline: +91 99228 82044";

                var isOut = (b.service === 'outstation' || (t && t.category === 'outstation'));
                var isDrop = (b.service === 'local_drop' || (t && t.category === 'local_drop'));
                var termLine = isOut ? "Nominal Fuel Advance • Balance to Driver" : (isDrop ? "Zero Advance • Pay driver after drop" : "Zero Advance • Pay driver after tour");
                var headerTerm = isOut ? "Standard Taxi Union Tariffs Accepted • Nominal Fuel Advance" : "Standard Taxi Union Tariffs Accepted • Zero Advance";

                // Full voucher details copied to clipboard for complete record
                var fullDetails = "OFFICIAL TOURIST TAXI BOOKING CONFIRMATION & VOUCHER\n"
                    + "Aryan Taxi Mahabaleshwar | Explore Sahyadri\n"
                    + headerTerm + "\n\n"
                    + "Booking Reference: " + bId + "\n"
                    + "Passenger Name: " + (b.name || 'Valued Guest') + "\n"
                    + "WhatsApp Mobile: +91 " + (b.phone || '9922882044') + "\n"
                    + "Date of Travel: " + (b.date || 'Scheduled') + "\n"
                    + "Pickup Time: " + (b.time || '09:00 AM') + "\n"
                    + "Pickup Hotel: " + (b.pickup || 'Mahabaleshwar') + "\n"
                    + "Tour Selected: " + tourName + "\n"
                    + "Total Tariff: INR " + fare + " (" + termLine + ")\n"
                    + "Helpline: +91 99228 82044";

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(fullDetails).catch(function () { });
                }

                // Trigger mailto
                window.location.href = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(shortBody);

                // User visual feedback
                var origText = emailVoucherBtn.innerHTML;
                emailVoucherBtn.innerHTML = '<i class="fa-solid fa-check"></i> Email Opened!';
                setTimeout(function () { emailVoucherBtn.innerHTML = origText; }, 2500);
            });
        }

        // 4. Share Trip with Family / Friends (Web Share API + direct WhatsApp + Clipboard)
        var shareFamilyBtn = document.getElementById('amtShareFamilyBtn');
        if (shareFamilyBtn) {
            shareFamilyBtn.addEventListener('click', function () {
                var b = bookingState;
                var db = window.TOUR_DATABASE;
                var t = (db && b.selectedTours && b.selectedTours[0]) ? db.getTourById(b.selectedTours[0].id) : null;
                var tourName = t ? t.name : (b.tourId || 'Mahabaleshwar Sightseeing Tour');
                var pointsList = (t && t.points && t.points.length > 0) ? t.points.join(' • ') : 'Standard Sightseeing Circuit';
                var bId = b.bookingId || 'AMT-BK';

                var shareMsg = "🏔️ *OUR MAHABALESHWAR TAXI ITINERARY*\n"
                    + "*Aryan Taxi Mahabaleshwar* (Voucher #" + bId + ")\n\n"
                    + "📅 *Date:* " + (b.date || 'Upcoming') + " at *" + (b.time || '09:00 AM') + "*\n"
                    + "🏨 *Pickup:* " + (b.pickup || 'Hotel Porch') + "\n"
                    + "🚗 *Tour:* " + tourName + "\n"
                    + "📍 *Viewpoints: *\n" + pointsList + "\n\n"
                    + "💰 *Total Fare:* ₹" + (t ? t.fare : '1,200') + ((b.service === 'outstation' || (t && t.category === 'outstation')) ? " (Nominal Fuel Advance • Balance to Driver)\n" : " (Zero Advance • Pay driver after trip)\n")
                    + "📞 Helpline: +91 99228 82044";

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(shareMsg).catch(function () { });
                }

                function showShareSuccess() {
                    var origText = shareFamilyBtn.innerHTML;
                    shareFamilyBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;font-size:0.80rem;"></i><span>Done!</span>';
                    setTimeout(function () { shareFamilyBtn.innerHTML = origText; }, 2500);
                }

                function fallbackWhatsApp() {
                    var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                    var waUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(shareMsg);
                    if (isMobile) {
                        window.location.href = "whatsapp://send?text=" + encodeURIComponent(shareMsg);
                        setTimeout(function () { window.location.href = waUrl; }, 600);
                    } else {
                        var win = window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(shareMsg), '_blank', 'noopener,noreferrer');
                        if (!win || win.closed || typeof win.closed === 'undefined') {
                            window.location.href = "https://api.whatsapp.com/send?text=" + encodeURIComponent(shareMsg);
                        }
                    }
                    showShareSuccess();
                }

                if (navigator.share) {
                    navigator.share({
                        title: 'Mahabaleshwar Taxi Voucher - ' + bId,
                        text: shareMsg
                    }).then(showShareSuccess).catch(function () {
                        fallbackWhatsApp();
                    });
                } else {
                    fallbackWhatsApp();
                }
            });
        }

        var _lastWaClick = 0;
        var waBtn = document.getElementById('amtWaBtn');
        if (waBtn) {
            waBtn.addEventListener('click', function () {
                var now = Date.now();
                if (now - _lastWaClick < 2500) return; // 2.5s debounce
                _lastWaClick = now;

                if (typeof clearBookingDraft === 'function') clearBookingDraft();

                var msg = buildConfirmedWhatsAppMessage(bookingState);
                var url = getWhatsAppUrl(encodeURIComponent(msg));
                var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (isMobile) {
                    window.location.href = url;
                } else {
                    var win = window.open(url, '_blank', 'noopener,noreferrer');
                    if (!win || win.closed || typeof win.closed === 'undefined') {
                        window.location.href = url;
                    }
                }
            });
        }

        // Initialize quick departure time pills & draft auto-save
        if (typeof initQuickTimePills === 'function') initQuickTimePills();
        if (typeof initDraftAutoSave === 'function') initDraftAutoSave();

        // Sync dropdown changes back to visual tour cards
        var tourSel = document.getElementById('amtTourSelect');
        if (tourSel) {
            tourSel.addEventListener('change', function () {
                var val = tourSel.value;
                var cards = document.querySelectorAll('.amt-vt-card');
                cards.forEach(function (c) {
                    c.classList.toggle('active', c.getAttribute('data-tour-id') === val);
                });
                if (typeof saveBookingDraft === 'function') saveBookingDraft();
            });
        }
    }

    // ── 4.5 Multi-Tour Selection & Dynamic Circuit Engine ─────────────
    function syncSelectedToursFromPrimary() {
        var sel = document.getElementById('amtTourSelect');
        var primaryId = sel ? sel.value : (bookingState.tourId || 'T1');
        if (!bookingState.selectedTours || bookingState.selectedTours.length === 0) {
            bookingState.selectedTours = [{ id: primaryId, date: bookingState.date, time: bookingState.time }];
        } else {
            bookingState.selectedTours[0].id = primaryId;
        }
        bookingState.tourId = primaryId;
        bookingState.tour2Id = bookingState.selectedTours[1] ? bookingState.selectedTours[1].id : '';
    }

    function getAvailableSightseeingTours(excludeTourId) {
        if (!window.TOUR_DATABASE) return [];
        var db = window.TOUR_DATABASE;
        var currentIds = (bookingState.selectedTours || []).map(function (st) { return st.id; });

        // Collect all conflicting tour IDs for currently selected tours (excluding the slot being edited)
        var conflictingIds = [];
        currentIds.forEach(function (cid) {
            if (cid !== excludeTourId && db.getConflictingTourIds) {
                var cList = db.getConflictingTourIds(cid);
                (cList || []).forEach(function (cfId) {
                    if (conflictingIds.indexOf(cfId) === -1) conflictingIds.push(cfId);
                });
            }
        });

        return db.tours.filter(function (t) {
            if (t.category !== 'sightseeing') return false;
            if (t.id === excludeTourId) return true;
            if (currentIds.indexOf(t.id) !== -1) return false;
            if (conflictingIds.indexOf(t.id) !== -1) return false;
            return true;
        });
    }

    function renderExtraTourRows() {
        var container = document.getElementById('amtExtraToursContainer');
        var addBtn = document.getElementById('amtAddTourBtn');
        if (!container) return;

        if (bookingState.service !== 'sightseeing') {
            container.innerHTML = '';
            if (addBtn) addBtn.style.display = 'none';
            updateMultiTourSummary();
            return;
        }

        if (addBtn) {
            var availableTours = getAvailableSightseeingTours('');
            addBtn.style.display = (bookingState.selectedTours.length < 4 && availableTours.length > 0) ? 'flex' : 'none';
        }

        var extraTours = bookingState.selectedTours.slice(1);
        var db = window.TOUR_DATABASE;
        var html = '';

        extraTours.forEach(function (st, idx) {
            var realIndex = idx + 1;
            var available = getAvailableSightseeingTours(st.id);
            // If current tour conflicts due to primary change, keep it visible with a warning badge
            var currentTourObj = db ? db.getTourById(st.id) : null;
            if (currentTourObj && !available.some(function (t) { return t.id === st.id; })) {
                available.unshift(currentTourObj);
            }

            var optHtml = '';
            available.forEach(function (t) {
                var selected = (t.id === st.id) ? ' selected' : '';
                var isSingle = (t.sub_category === 'single_tour' || t.id === 'M1' || t.id === 'M2' || t.id === 'M3');
                var optLabel = isSingle
                    ? (t.id + ': ' + (t.id === 'M1' ? 'Arthur Seat' : t.id === 'M2' ? "Kate's Point" : 'Wilson Point') + ' — ₹800')
                    : ((t.tour_no ? 'T' + t.tour_no : t.id) + ': ' + t.name.replace(/\s*\(Tour\s*\d+\)/i, '').replace(/\s*\(Single Tour\)/i, '').trim() + ' — ₹' + Number(t.fare).toLocaleString('en-IN'));
                var prefix = isSingle ? '⚡ ' : '⭐ ';
                optHtml += '<option value="' + t.id + '"' + selected + '>' + prefix + escapeHtml(optLabel) + '</option>';
            });

            var overlapWithPrimary = (db && db.checkTourOverlap && bookingState.selectedTours[0])
                ? db.checkTourOverlap([bookingState.selectedTours[0].id, st.id])
                : null;

            html += '<div class="amt-extra-tour-row" data-index="' + realIndex + '">'
                + '<div style="flex:1;min-width:0;">'
                + '<label class="amt-label" style="font-size:0.75rem;margin-bottom:3px;color:#0369a1;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:4px;">'
                + '<span><i class="fa-solid fa-plus-circle"></i> Additional Tour #' + (realIndex + 1) + ' (Multi-Tour Package)</span>'
                + (overlapWithPrimary ? '<span style="color:#b45309;font-weight:700;font-size:0.72rem;"><i class="fa-solid fa-triangle-exclamation"></i> Overlapping Viewpoints</span>' : '<span style="color:#16a34a;font-weight:700;font-size:0.72rem;"><i class="fa-solid fa-circle-check"></i> Unique Circuit</span>')
                + '</label>'
                + '<select class="amt-input amt-extra-tour-select" data-index="' + realIndex + '" style="font-size:16px;min-height:44px;font-weight:600;' + (overlapWithPrimary ? 'border:1.5px solid #f59e0b;background:#fffbeb;' : '') + '">'
                + optHtml
                + '</select>'
                + (overlapWithPrimary ? '<div style="font-size:0.72rem;color:#b45309;margin-top:3px;line-height:1.35;"><i class="fa-solid fa-triangle-exclamation"></i> ' + escapeHtml(overlapWithPrimary.reason) + '</div>' : '')
                + '</div>'
                + '<button type="button" class="amt-remove-tour-btn" data-index="' + realIndex + '" title="Remove this tour" aria-label="Remove tour">'
                + '<i class="fa-solid fa-trash-can"></i>'
                + '</button>'
                + '</div>';
        });

        if (extraTours.length > 0) {
            html += '<div style="font-size:0.72rem;color:#0369a1;margin:4px 0 10px;display:flex;align-items:center;gap:5px;background:#f0f9ff;padding:6px 10px;border-radius:6px;border:1px solid #bae6fd;">'
                + '<i class="fa-solid fa-shield-halved" style="color:#0284c7;"></i> <span><strong>Smart Route Protection:</strong> Redundant tour packages sharing the same viewpoints are automatically filtered out to save you money.</span>'
                + '</div>';
        }

        container.innerHTML = html;

        var selects = container.querySelectorAll('.amt-extra-tour-select');
        selects.forEach(function (sel) {
            sel.addEventListener('change', function () {
                var idx = parseInt(sel.getAttribute('data-index'), 10);
                if (bookingState.selectedTours[idx]) {
                    bookingState.selectedTours[idx].id = sel.value;
                    bookingState.tour2Id = bookingState.selectedTours[1] ? bookingState.selectedTours[1].id : '';
                    renderExtraTourRows();
                    updateTourInsight();
                    updateMultiTourSummary();
                }
            });
        });

        var removeBtns = container.querySelectorAll('.amt-remove-tour-btn');
        removeBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var idx = parseInt(btn.getAttribute('data-index'), 10);
                if (bookingState.selectedTours[idx]) {
                    bookingState.selectedTours.splice(idx, 1);
                    bookingState.tour2Id = bookingState.selectedTours[1] ? bookingState.selectedTours[1].id : '';
                    renderExtraTourRows();
                    updateTourInsight();
                    updateMultiTourSummary();
                }
            });
        });

        updateMultiTourSummary();
    }

    function addExtraTour() {
        var available = getAvailableSightseeingTours('');
        if (!available.length || bookingState.selectedTours.length >= 4) return;
        var nextTour = available[0];
        bookingState.selectedTours.push({
            id: nextTour.id,
            date: bookingState.date || '',
            time: bookingState.selectedTours.length === 1 ? '14:30' : '09:00'
        });
        bookingState.tour2Id = bookingState.selectedTours[1] ? bookingState.selectedTours[1].id : '';
        renderExtraTourRows();
        updateTourInsight();
        updateMultiTourSummary();
    }

    function updateMultiTourSummary() {
        var summaryEl = document.getElementById('amtMultiTourSummary');
        if (!summaryEl) return;

        var db = window.TOUR_DATABASE;
        if (!db) {
            summaryEl.style.display = 'none';
            return;
        }

        var tours = [];
        (bookingState.selectedTours || []).forEach(function (st) {
            var t = db.getTourById(st.id);
            if (t) tours.push(t);
        });

        if (tours.length <= 1) {
            summaryEl.style.display = 'none';
            return;
        }

        var totalFare = tours.reduce(function (sum, t) { return sum + t.fare; }, 0);
        var tourNames = tours.map(function (t) { return t.tour_no ? 'Tour ' + t.tour_no : t.name; }).join(' + ');

        var overlap = (db.checkTourOverlap) ? db.checkTourOverlap(bookingState.selectedTours) : null;

        var html = '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;flex-wrap:wrap;">'
            + '  <div><i class="fa-solid fa-layer-group" style="color:#0284c7;"></i> <strong>' + tours.length + ' Tours Selected:</strong> ' + escapeHtml(tourNames) + '</div>'
            + '  <div style="font-size:0.92rem;font-weight:900;color:#0e7490;">Combined: ₹' + totalFare + '</div>'
            + '</div>';

        if (overlap) {
            var recTour = db.getTourById(overlap.suggestedTourId);
            var recName = recTour ? (recTour.tour_no ? 'Tour ' + recTour.tour_no + ' (' + recTour.name + ')' : recTour.name) : 'Tour 2';
            html += '<div class="amt-tour-overlap-card" style="width:100%;margin-top:10px;padding:12px 14px;border-radius:10px;background:#fffbeb;border:1.5px solid #f59e0b;color:#92400e;box-sizing:border-box;">'
                + '  <div style="display:flex;align-items:center;gap:7px;font-weight:800;color:#b45309;font-size:0.86rem;margin-bottom:4px;">'
                + '    <i class="fa-solid fa-triangle-exclamation" style="color:#d97706;font-size:1.1rem;"></i>'
                + '    <span>Viewpoint Overlap Detected (Save Money & Time!)</span>'
                + '  </div>'
                + '  <div style="font-size:0.8rem;line-height:1.45;color:#78350f;margin-bottom:8px;">'
                + '    <strong>' + escapeHtml(overlap.tourA.name) + '</strong> and <strong>' + escapeHtml(overlap.tourB.name) + '</strong> share the same viewpoints! '
                + '    <br>' + escapeHtml(overlap.reason)
                + '  </div>'
                + '  <div style="background:#fef3c7;border-left:3px solid #d97706;padding:6px 10px;border-radius:6px;font-size:0.78rem;color:#78350f;margin-bottom:8px;">'
                + '    💡 <strong>Local Expert Recommendation:</strong> ' + escapeHtml(overlap.recText)
                + '  </div>'
                + '  <button type="button" class="amt-auto-resolve-overlap-btn" data-conflicting-idx="' + overlap.conflictingIndex + '" data-replacement-id="' + escapeHtml(overlap.suggestedTourId) + '" style="background:#d97706;color:#ffffff;border:none;padding:8px 14px;border-radius:8px;font-size:0.8rem;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">'
                + '    <i class="fa-solid fa-wand-magic-sparkles"></i> Switch to ' + escapeHtml(recName) + ' (Zero Duplicate Sights)'
                + '  </button>'
                + '</div>';
        } else {
            html += '<div style="width:100%;margin-top:8px;padding:6px 10px;border-radius:8px;background:#f0fdf4;border:1px solid #86efac;color:#166534;font-size:0.75rem;font-weight:700;display:flex;align-items:center;gap:6px;box-sizing:border-box;">'
                + '  <i class="fa-solid fa-circle-check" style="color:#16a34a;font-size:0.9rem;"></i>'
                + '  <span>Optimal Multi-Tour Circuit: 100% Unique Viewpoints &bull; No Duplicate Sights Selected</span>'
                + '</div>';
        }

        summaryEl.innerHTML = html;
        summaryEl.style.display = 'block';

        var resolveBtn = summaryEl.querySelector('.amt-auto-resolve-overlap-btn');
        if (resolveBtn) {
            resolveBtn.addEventListener('click', function () {
                var cIdx = parseInt(resolveBtn.getAttribute('data-conflicting-idx'), 10);
                var repId = resolveBtn.getAttribute('data-replacement-id');
                if (bookingState.selectedTours[cIdx]) {
                    bookingState.selectedTours[cIdx].id = repId;
                    renderExtraTourRows();
                    updateTourInsight();
                    updateMultiTourSummary();
                }
            });
        }
    }

    function renderMultiDayScheduleUI() {
        var toggleBox = document.getElementById('amtMultiDayToggleBox');
        var listContainer = document.getElementById('amtMultiDayList');
        var checkbox = document.getElementById('amtDiffScheduleCheckbox');
        if (!toggleBox || !listContainer) return;

        if (bookingState.selectedTours.length <= 1) {
            toggleBox.style.display = 'none';
            listContainer.style.display = 'none';
            bookingState.differentSchedule = false;
            return;
        }

        toggleBox.style.display = 'block';

        if (checkbox) {
            checkbox.checked = !!bookingState.differentSchedule;
        }

        if (!bookingState.differentSchedule) {
            listContainer.style.display = 'none';
            listContainer.innerHTML = '';
            return;
        }

        listContainer.style.display = 'flex';
        var db = window.TOUR_DATABASE;
        var html = '';

        var now = new Date();
        var yyyy = now.getFullYear();
        var mm = pad2(now.getMonth() + 1);
        var dd = pad2(now.getDate());
        var todayStr = yyyy + '-' + mm + '-' + dd;

        bookingState.selectedTours.forEach(function (st, idx) {
            var t = db ? db.getTourById(st.id) : null;
            var tName = t ? t.name : ('Tour #' + (idx + 1));
            var tDate = st.date || bookingState.date || todayStr;
            var tTime = st.time || (idx === 1 && !st.time ? '14:30' : (st.time || '09:00'));
            st.date = tDate;
            st.time = tTime;

            html += '<div class="amt-multi-day-row" data-index="' + idx + '" style="background:#ffffff;border:1px solid #cbd5e1;border-radius:8px;padding:8px 10px;margin-bottom:6px;">'
                + '<div style="grid-column:1/-1;font-size:0.78rem;font-weight:800;color:#0f2b48;display:flex;justify-content:space-between;">'
                + '<span>🚕 ' + escapeHtml(tName) + '</span>'
                + '<span style="color:#0284c7;font-size:0.74rem;">₹' + (t ? t.fare : '') + ' (' + (t ? escapeHtml(t.duration) : '') + ')</span>'
                + '</div>'
                + '<div>'
                + '<label class="amt-label" style="font-size:0.72rem;margin-bottom:2px;">Tour Date *</label>'
                + '<input type="date" class="amt-input amt-tour-date-input" data-index="' + idx + '" min="' + todayStr + '" value="' + tDate + '" style="font-size:16px;min-height:44px;" required>'
                + '</div>'
                + '<div>'
                + '<label class="amt-label" style="font-size:0.72rem;margin-bottom:2px;">Pickup Time *</label>'
                + '<input type="time" class="amt-input amt-tour-time-input" data-index="' + idx + '" value="' + tTime + '" style="font-size:16px;min-height:44px;" required>'
                + '</div>'
                + '</div>';
        });

        listContainer.innerHTML = html;

        var dateInputs = listContainer.querySelectorAll('.amt-tour-date-input');
        dateInputs.forEach(function (inp) {
            inp.addEventListener('change', function () {
                var idx = parseInt(inp.getAttribute('data-index'), 10);
                if (bookingState.selectedTours[idx]) {
                    bookingState.selectedTours[idx].date = inp.value;
                }
            });
        });

        var timeInputs = listContainer.querySelectorAll('.amt-tour-time-input');
        timeInputs.forEach(function (inp) {
            inp.addEventListener('change', function () {
                var idx = parseInt(inp.getAttribute('data-index'), 10);
                if (bookingState.selectedTours[idx]) {
                    bookingState.selectedTours[idx].time = inp.value;
                }
            });
        });
    }

    // ── 4.6 World-Class Booking Engine Upgrade Helpers ───────────────────
    function updateStepper(step) {
        var stepper = document.getElementById('amtStepper');
        if (!stepper) return;
        var items = stepper.querySelectorAll('.amt-step-item');
        var dividers = stepper.querySelectorAll('.amt-step-divider');
        var isVoucher = (step === 'voucher' || step === 5);
        items.forEach(function (item, idx) {
            var s = idx + 1;
            item.classList.remove('active', 'completed');
            if (isVoucher || s < step) {
                item.classList.add('completed');
            } else if (s === step) {
                item.classList.add('active');
            }
        });
        dividers.forEach(function (div, idx) {
            var s = idx + 1;
            if (isVoucher || s < step) {
                div.classList.add('completed');
            } else {
                div.classList.remove('completed');
            }
        });
    }

    function updateSelectedTourBanner(tourId) {
        var banner = document.getElementById('amtSelectedTourBanner');
        if (!banner) return;
        var db = window.TOUR_DATABASE;
        if (!db) return;
        var t = db.getTourById(tourId);
        if (!t) {
            banner.style.display = 'none';
            return;
        }

        var isSingle = (t.sub_category === 'single_tour' || t.id === 'M1' || t.id === 'M2' || t.id === 'M3');
        var isCombo = (t.category === 'combo' || t.id === 'T7');
        var isOutstation = (t.category === 'outstation');
        var isLocalDrop = (t.category === 'local_drop');

        var badgeText = '';
        var badgeClass = '';
        var fareTitle = '';
        var fareTerms = '';
        var durText = escapeHtml(t.duration || '');

        if (isSingle) {
            badgeText = '⚡ Express Single';
            badgeClass = 'amt-badge-express';
            fareTitle = '₹800 Flat';
            fareTerms = 'Pay After Trip';
        } else if (isCombo) {
            badgeText = '⭐ Full Day Combo';
            badgeClass = 'amt-badge-combo';
            fareTitle = '₹3,000';
            fareTerms = 'Union Tariff';
            durText = '8-9 Hrs.'; // Compact duration to prevent meta row wrapping
        } else if (isOutstation) {
            badgeText = '✈️ Outstation Route';
            badgeClass = 'amt-badge-outstation';
            fareTitle = '₹' + Number(t.fare).toLocaleString('en-IN');
            fareTerms = '+ Toll at actuals';
        } else if (isLocalDrop) {
            badgeText = '📍 Local Drop';
            badgeClass = 'amt-badge-local';
            fareTitle = '₹' + Number(t.fare).toLocaleString('en-IN');
            fareTerms = 'Fixed Drop Fare';
        } else {
            badgeText = '🛡️ Union Sightseeing';
            badgeClass = 'amt-badge-union';
            fareTitle = '₹' + Number(t.fare).toLocaleString('en-IN');
            fareTerms = 'Official Union Tariff';
        }

        var points = t.points || [];
        var pointsHtml = '';
        if (points.length > 0) {
            // For combo, highlight the marquee attractions cleanly
            var displayPts = isCombo
                ? ['Old Mahabaleshwar', 'Arthur Seat', 'Table Land']
                : points.slice(0, 3).map(function(p) { return p.replace(/\s*\([^)]*\)/g, ''); });
            var remaining = points.length - displayPts.length;
            pointsHtml = '<div class="amt-stb-points-wrap">' +
                '<span class="amt-stb-points-lbl"><i class="fa-solid fa-location-dot"></i> Points:</span> ' +
                displayPts.map(function (p) { return '<span class="amt-stb-point-chip">' + escapeHtml(p) + '</span>'; }).join('') +
                (remaining > 0 ? '<span class="amt-stb-point-chip amt-chip-more">+' + remaining + ' more</span>' : '') +
                '</div>';
        }

        banner.innerHTML = '<div class="amt-stb-card">' +
            '  <div class="amt-stb-top-row">' +
            '    <span class="amt-stb-badge ' + badgeClass + '">' + badgeText + '</span>' +
            '    <div class="amt-stb-fare-box">' +
            '      <span class="amt-stb-fare-val">' + fareTitle + '</span>' +
            '    </div>' +
            '  </div>' +
            '  <div class="amt-stb-meta-row">' +
            '    <span><i class="fa-solid fa-clock"></i> ' + durText + '</span>' +
            (points.length > 0 ? '    <span><i class="fa-solid fa-binoculars"></i> ' + points.length + ' Viewpoints</span>' : '') +
            '    <span><i class="fa-solid fa-receipt"></i> ' + fareTerms + '</span>' +
            (isOutstation ? '    <span><i class="fa-solid fa-gas-pump"></i> Fuel Advance Required</span>' : '    <span><i class="fa-solid fa-shield-halved"></i> Zero Advance</span>') +
            '  </div>' +
            pointsHtml +
            '</div>';
        banner.style.display = 'block';
    }

    function renderVisualTourCards(service, filtered) {
        var container = document.getElementById('amtVisualTourCards');
        if (container) container.style.display = 'none';
        var filterWrap = document.getElementById('amtSightseeingFilterWrap');
        if (filterWrap) filterWrap.style.display = 'none';
    }

    function initQuickTimePills() {
        var pills = document.querySelectorAll('.amt-time-pill');
        var timeInput = document.getElementById('amtTime');
        if (!pills || pills.length === 0 || !timeInput) return;

        pills.forEach(function (pill) {
            pill.addEventListener('click', function () {
                var timeVal = pill.getAttribute('data-time');
                timeInput.value = timeVal;
                bookingState.time = timeVal;
                pills.forEach(function (p) { p.classList.remove('active'); });
                pill.classList.add('active');
                if (typeof saveBookingDraft === 'function') saveBookingDraft();
            });
        });

        timeInput.addEventListener('change', function () {
            var cur = timeInput.value;
            bookingState.time = cur;
            pills.forEach(function (p) {
                p.classList.toggle('active', p.getAttribute('data-time') === cur);
            });
            if (typeof saveBookingDraft === 'function') saveBookingDraft();
        });
    }
    var DRAFT_STORAGE_KEY = 'amt_booking_draft_v1';

    function saveBookingDraft() {
        try {
            if (typeof localStorage === 'undefined') return;
            var nameInput = document.getElementById('amtName');
            var phoneInput = document.getElementById('amtPhone');
            var hotelInput = document.getElementById('amtPickup');
            var dateInput = document.getElementById('amtDate');
            var timeInput = document.getElementById('amtTime');
            var notesInput = document.getElementById('amtNotes');
            var activeServiceBtn = document.querySelector('.amt-service-btn.active');
            var sel = document.getElementById('amtTourSelect');

            var draft = {
                service: activeServiceBtn ? activeServiceBtn.getAttribute('data-service') : 'sightseeing',
                tourId: bookingState.tourId || (sel ? sel.value : ''),
                selectedTours: bookingState.selectedTours || [],
                date: dateInput ? dateInput.value : '',
                time: timeInput ? timeInput.value : '',
                pax: (document.getElementById('amtPax') ? document.getElementById('amtPax').value : '3-4'),
                hotel: hotelInput ? hotelInput.value : '',
                name: nameInput ? nameInput.value : '',
                phone: phoneInput ? phoneInput.value : '',
                notes: notesInput ? notesInput.value : '',
                savedAt: Date.now()
            };
            localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
        } catch (e) { }
    }

    function restoreBookingDraft() {
        try {
            if (typeof localStorage === 'undefined') return;
            var raw = localStorage.getItem(DRAFT_STORAGE_KEY);
            if (!raw) return;
            var draft = JSON.parse(raw);
            if (!draft || (Date.now() - draft.savedAt > 24 * 60 * 60 * 1000)) {
                localStorage.removeItem(DRAFT_STORAGE_KEY);
                return;
            }

            if (!draft.tourId && !draft.hotel && !draft.name) return;

            if (draft.service) {
                var serviceBtns = document.querySelectorAll('.amt-service-btn');
                serviceBtns.forEach(function (b) {
                    b.classList.toggle('active', b.getAttribute('data-service') === draft.service);
                });
                populateTourDropdownByService(draft.service);
            }

            if (draft.tourId) {
                var sel = document.getElementById('amtTourSelect');
                if (sel) {
                    sel.value = draft.tourId;
                    bookingState.tourId = draft.tourId;
                }
                if (draft.selectedTours && draft.selectedTours.length > 0) {
                    bookingState.selectedTours = draft.selectedTours;
                }
            }

            if (draft.date) {
                var dEl = document.getElementById('amtDate');
                if (dEl) dEl.value = draft.date;
                bookingState.date = draft.date;
            }
            if (draft.time) {
                var tEl = document.getElementById('amtTime');
                if (tEl) tEl.value = draft.time;
                bookingState.time = draft.time;
                var pills = document.querySelectorAll('.amt-time-pill');
                pills.forEach(function (p) {
                    p.classList.toggle('active', p.getAttribute('data-time') === draft.time);
                });
            }

            if (draft.pax) {
                var pEl = document.getElementById('amtPax');
                if (pEl) pEl.value = draft.pax;
            }

            if (draft.hotel) {
                var hEl = document.getElementById('amtPickup');
                if (hEl) hEl.value = draft.hotel;
                bookingState.pickup = draft.hotel;
            }

            if (draft.name) {
                var nEl = document.getElementById('amtName');
                if (nEl) nEl.value = draft.name;
                bookingState.name = draft.name;
            }
            if (draft.phone) {
                var phEl = document.getElementById('amtPhone');
                if (phEl) phEl.value = draft.phone;
                bookingState.phone = draft.phone;
            }
            if (draft.notes) {
                var noEl = document.getElementById('amtNotes');
                if (noEl) noEl.value = draft.notes;
                bookingState.notes = draft.notes;
            }

            var banner = document.getElementById('amtDraftBanner');
            if (banner) banner.style.display = 'flex';

            var activeSvc = draft.service || 'sightseeing';
            var db = window.TOUR_DATABASE;
            if (db) {
                var filtered = db.tours.filter(function (t) { return t.category === activeSvc; });
                renderVisualTourCards(activeSvc, filtered);
            }
        } catch (e) { }
    }

    function clearBookingDraft() {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(DRAFT_STORAGE_KEY);
            }
            var banner = document.getElementById('amtDraftBanner');
            if (banner) banner.style.display = 'none';
        } catch (e) { }
    }

    function initDraftAutoSave() {
        var inputIds = ['amtName', 'amtPhone', 'amtNotes', 'amtDate', 'amtTime', 'amtPax', 'amtPickup'];
        inputIds.forEach(function (id) {
            var el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', saveBookingDraft);
                el.addEventListener('change', saveBookingDraft);
            }
        });

        var clearBtn = document.getElementById('amtClearDraftBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                clearBookingDraft();
                var nameEl = document.getElementById('amtName'); if (nameEl) nameEl.value = '';
                var phoneEl = document.getElementById('amtPhone'); if (phoneEl) phoneEl.value = '';
                var notesEl = document.getElementById('amtNotes'); if (notesEl) notesEl.value = '';
                var pickupEl = document.getElementById('amtPickup'); if (pickupEl) pickupEl.value = '';
                bookingState.name = '';
                bookingState.phone = '';
                bookingState.notes = '';
                bookingState.pickup = '';
                var banner = document.getElementById('amtDraftBanner');
                if (banner) banner.style.display = 'none';
            });
        }
    }

    function populateTourDropdownByService(service) {
        var sel = document.getElementById('amtTourSelect');
        var addBtn = document.getElementById('amtAddTourBtn');
        var container = document.getElementById('amtExtraToursContainer');
        var summary = document.getElementById('amtMultiTourSummary');
        if (!sel || !window.TOUR_DATABASE) return;

        var db = window.TOUR_DATABASE;
        var labelEl = document.getElementById('amtTourSelectLabel') || document.querySelector('label[for="amtTourSelect"]');
        var countBadge = document.getElementById('amtTourCountBadge');

        // Update category button active classes across entire DOM
        var allServiceBtns = document.querySelectorAll('.amt-service-btn');
        allServiceBtns.forEach(function (btn) {
            var bService = btn.getAttribute('data-service');
            var isActive = (bService === service);
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });

        var filtered = [];
        var optHtml = '';
        var labelText = '';
        var countText = '';

        if (service === 'express') {
            filtered = db.tours.filter(function (t) { return (t.category === 'sightseeing' && t.sub_category === 'single_tour') || t.id === 'M1' || t.id === 'M2' || t.id === 'M3'; });
            labelText = 'Select Express Tour *';
            countText = filtered.length + ' Tours';
            optHtml = '<optgroup label="── ⚡ EXPRESS FLAT ₹800 ──">' +
                filtered.map(function (t) {
                    var cleanName = 'Arthur Seat';
                    if (t.id === 'M2') cleanName = "Kate's Point";
                    else if (t.id === 'M3') cleanName = 'Wilson Point';
                    return '<option value="' + t.id + '">' + t.id + ': ' + escapeHtml(cleanName) + ' — ₹800</option>';
                }).join('') +
                '</optgroup>';
        } else if (service === 'combo') {
            filtered = db.tours.filter(function (t) { return t.category === 'combo'; });
            labelText = 'Select Full Day Tour *';
            countText = 'Tour 7';
            optHtml = '<optgroup label="── ⭐ FULL DAY COMBO PASS ──">' +
                filtered.map(function (t) {
                    return '<option value="' + t.id + '">T7: Full Day — ₹3,000</option>';
                }).join('') +
                '</optgroup>';
        } else if (service === 'outstation') {
            filtered = db.tours.filter(function (t) { return t.category === 'outstation'; });
            labelText = 'Select Outstation Route *';
            countText = filtered.length + ' Routes';

            var aptTransfers = filtered.filter(function (t) {
                return t.id.indexOf('APT') !== -1 || t.id.indexOf('RLY') !== -1 || t.id.indexOf('BUS') !== -1 || t.id.indexOf('VASHI') !== -1;
            });
            var cityDrops = filtered.filter(function (t) {
                return t.id.indexOf('APT') === -1 && t.id.indexOf('RLY') === -1 && t.id.indexOf('BUS') === -1 && t.id.indexOf('VASHI') === -1;
            });

            function cleanOutstation(t) {
                var s = t.name.replace(/^Mahabaleshwar to /i, '').replace(/\s+Drop$/i, '').trim();
                s = s.replace(/ Railway Station/i, ' Railway');
                s = s.replace(/ Bus Stand/i, ' Bus Stand');
                s = s.replace(/\s*\(Valley of Flowers\)/i, '');
                s = s.replace(/\s*\(Return Trip\)/i, '');
                s = s.replace(/\s*\(Dasturi Naka\)/i, '');
                s = s.replace(/\s*\/\s*Khandala/i, '');
                s = s.replace(/Raigadh/i, 'Raigad');
                s = s.replace(/Matheran Drop/i, 'Matheran');
                if (t.id === 'TR_MUM_VASHI') s = 'Mumbai Vashi';
                return s.trim();
            }

            optHtml = '<optgroup label="── ✈️ AIRPORT & RAILWAY ──">' +
                aptTransfers.map(function (t) {
                    var cleanName = cleanOutstation(t);
                    var formattedFare = Number(t.fare).toLocaleString('en-IN');
                    return '<option value="' + t.id + '">' + escapeHtml(cleanName) + ' — ₹' + formattedFare + '</option>';
                }).join('') +
                '</optgroup>' +
                '<optgroup label="── 🏔️ INTERCITY DROPS ──">' +
                cityDrops.map(function (t) {
                    var cleanName = cleanOutstation(t);
                    var formattedFare = Number(t.fare).toLocaleString('en-IN');
                    return '<option value="' + t.id + '">' + escapeHtml(cleanName) + ' — ₹' + formattedFare + '</option>';
                }).join('') +
                '</optgroup>';
        } else if (service === 'local_drop') {
            filtered = db.tours.filter(function (t) { return t.category === 'local_drop'; });
            labelText = 'Select Local Drop *';
            countText = filtered.length + ' Drops';

            function cleanLocal(t) {
                if (t.id === 'LOC_2KM') return 'Local (Up to 2 km)';
                if (t.id === 'LOC_5KM') return 'Local (Up to 5 km)';
                if (t.id === 'LOC_MAPRO') return 'Mapro Garden';
                if (t.id === 'LOC_PANCHGANI') return 'Panchgani Drop';
                if (t.id === 'LOC_OLD_MAHA') return 'Old Mahabaleshwar';
                if (t.id === 'LOC_WILSON') return 'Wilson Sunrise';
                if (t.id === 'LOC_BOMBAY') return 'Bombay Sunset';
                if (t.id === 'LOC_WAI') return 'Wai Drop';
                var s = t.name.replace(/\s*\(From Taxi Union Rate Sheet\)/i, '').trim();
                return s.replace(/\s*\(Gureghar\)/i, '').replace(/ Drop/i, '').trim();
            }

            optHtml = '<optgroup label="── 📍 LOCAL POINT DROPS ──">' +
                filtered.map(function (t) {
                    var cleanName = cleanLocal(t);
                    var formattedFare = Number(t.fare).toLocaleString('en-IN');
                    return '<option value="' + t.id + '">' + escapeHtml(cleanName) + ' — ₹' + formattedFare + '</option>';
                }).join('') +
                '</optgroup>';
        } else {
            // Default: sightseeing
            filtered = db.tours.filter(function (t) { return t.category === 'sightseeing' && t.sub_category !== 'single_tour' && t.id !== 'M1' && t.id !== 'M2' && t.id !== 'M3'; });
            labelText = 'Select Sightseeing Tour *';
            countText = filtered.length + ' Tours';

            function cleanSightseeing(t) {
                if (t.id === 'T1') return 'T1: Arthur Seat';
                if (t.id === 'T2') return 'T2: Wilson Point';
                if (t.id === 'T3') return 'T3: Pratapgad';
                if (t.id === 'T4') return 'T4: Panchgani';
                if (t.id === 'T5') return 'T5: Wai Darshan';
                if (t.id === 'T6') return 'T6: Tapola Lake';
                var cleanName = t.name.replace(/\s*\(Tour\s*\d+\)/i, '').trim();
                var tourNum = t.tour_no || t.id.replace('T', '');
                return 'T' + tourNum + ': ' + cleanName;
            }

            optHtml = '<optgroup label="── 🛡️ UNION SIGHTSEEING ──">' +
                filtered.map(function (t) {
                    var title = cleanSightseeing(t);
                    var formattedFare = Number(t.fare).toLocaleString('en-IN');
                    return '<option value="' + t.id + '">' + escapeHtml(title) + ' — ₹' + formattedFare + '</option>';
                }).join('') +
                '</optgroup>';
        }

        if (labelEl) labelEl.textContent = labelText;
        if (countBadge) countBadge.textContent = countText;

        sel.innerHTML = optHtml;

        var targetId = (bookingState.tourId && filtered.some(function (t) { return t.id === bookingState.tourId; }))
            ? bookingState.tourId
            : (filtered[0] ? filtered[0].id : '');
        sel.value = targetId;
        bookingState.tourId = targetId;
        bookingState.tour2Id = '';
        bookingState.service = service;
        bookingState.selectedTours = [{ id: targetId, date: bookingState.date, time: bookingState.time }];

        var trustChip = document.getElementById('amtStep1TrustChip') || document.querySelector('.amt-trust-chip');
        if (trustChip) {
            if (service === 'outstation') {
                trustChip.innerHTML = '<i class="fa-solid fa-gas-pump"></i> Locked Tariff &bull; Fuel Advance';
            } else {
                trustChip.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Fixed Rates &bull; Zero Advance';
            }
        }

        if (typeof updateSelectedTourBanner === 'function') updateSelectedTourBanner(targetId);
        if (typeof updateTourInsight === 'function') updateTourInsight();
        if (typeof updateSmartTimeUI === 'function') updateSmartTimeUI();
    }

    function updateStepper(step) {
        var stepper = document.getElementById('amtStepper');
        if (!stepper) return;
        var items = stepper.querySelectorAll('.amt-step-item');
        var dividers = stepper.querySelectorAll('.amt-step-divider');
        var isVoucher = (step === 'voucher' || step === 3 || step === '3');
        items.forEach(function (item, idx) {
            var s = idx + 1;
            item.classList.remove('active', 'completed');
            if (isVoucher) {
                item.classList.add('completed');
            } else if (s < step) {
                item.classList.add('completed');
            } else if (s === step) {
                item.classList.add('active');
            }
        });
        dividers.forEach(function (div, idx) {
            var s = idx + 1;
            if (isVoucher || s < step) {
                div.classList.add('completed');
            } else {
                div.classList.remove('completed');
            }
        });
    }

    function goToStep(step) {
        if (step === 3) {
            goToVoucher();
            return;
        }
        currentStep = step;
        if (step === 2) { try { updateCabSelector(); renderReviewCard(); } catch(e){} }
        var s1 = document.getElementById('amtStep1'); if (s1) s1.style.display = step === 1 ? 'block' : 'none';
        var s2 = document.getElementById('amtStep2'); if (s2) s2.style.display = step === 2 ? 'block' : 'none';
        var s3 = document.getElementById('amtStep3'); if (s3) s3.style.display = 'none';
        var s4 = document.getElementById('amtStep4'); if (s4) s4.style.display = 'none';
        var sv = document.getElementById('amtStepVoucher'); if (sv) sv.style.display = step === 3 ? 'block' : 'none';
        var trustSec = document.querySelector('.portal-trust-section'); if (trustSec) trustSec.style.display = 'block';

        var pct = (step / totalSteps) * 100;
        var pFill = document.getElementById('amtProgressFill'); if (pFill) pFill.style.width = pct + '%';
        var sLbl = document.getElementById('amtStepLabel'); if (sLbl) sLbl.textContent = 'Step ' + step + ' of ' + totalSteps;
        var hdrTitle = document.querySelector('.amt-header-title');
        if (hdrTitle) {
            if (step === 1) hdrTitle.textContent = 'Select Tour & Departure';
            else if (step === 2) hdrTitle.textContent = 'Pickup Hotel & Guest Details';
        }
        if (typeof updateStepper === 'function') updateStepper(step);
        if (typeof saveBookingDraft === 'function') saveBookingDraft();
        try { if (window.history && window.history.pushState) window.history.pushState({ amtStep: step }, '', '#step' + step); } catch (e) { }

        // Reset scroll position on step transition so the top is always visible
        var modal = document.getElementById('amtBookingModal');
        if (modal) {
            modal.scrollTop = 0;
            var card = modal.querySelector('.amt-card');
            if (card) {
                card.scrollTop = 0;
                var cardBody = card.querySelector('.amt-card-body');
                if (cardBody) cardBody.scrollTop = 0;
            }
        }
        if (typeof window !== 'undefined' && window.scrollTo) {
            var isStandalone = document.body && document.body.classList.contains('booking-portal-page');
            if (isStandalone) {
                // Always scroll to top so hero strip stays visible on all steps
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }

    function goToVoucher() {
        currentStep = 3;
        var s1 = document.getElementById('amtStep1'); if (s1) s1.style.display = 'none';
        var s2 = document.getElementById('amtStep2'); if (s2) s2.style.display = 'none';
        var s3 = document.getElementById('amtStep3'); if (s3) s3.style.display = 'none';
        var s4 = document.getElementById('amtStep4'); if (s4) s4.style.display = 'none';
        var sv = document.getElementById('amtStepVoucher'); if (sv) sv.style.display = 'block';
        var trustSec = document.querySelector('.portal-trust-section'); if (trustSec) trustSec.style.display = 'none';

        var pFill = document.getElementById('amtProgressFill'); if (pFill) pFill.style.width = '100%';
        var sLbl = document.getElementById('amtStepLabel'); if (sLbl) sLbl.textContent = 'Booking Voucher (Step 3 of 3)';
        var hdrTitle = document.querySelector('.amt-header-title');
        if (hdrTitle) hdrTitle.textContent = 'Official Booking Voucher';
        if (typeof updateStepper === 'function') updateStepper(3);
        try { if (window.history && window.history.pushState) window.history.pushState({ amtStep: 3 }, '', '#voucher'); } catch (e) { }

        // Reset scroll position on voucher screen
        var modal = document.getElementById('amtBookingModal');
        if (modal) {
            modal.scrollTop = 0;
            var card = modal.querySelector('.amt-card');
            if (card) {
                card.scrollTop = 0;
                var cardBody = card.querySelector('.amt-card-body');
                if (cardBody) cardBody.scrollTop = 0;
            }
        }
        if (typeof window !== 'undefined' && window.scrollTo) {
            var isStandalone = document.body && document.body.classList.contains('booking-portal-page');
            if (isStandalone) {
                // Always scroll to top so hero strip stays visible
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Guarantee voucher content is rendered!
        var vEl = document.getElementById('amtVoucherContent');
        if (!vEl || !vEl.innerHTML || vEl.innerHTML.trim() === '') {
            try {
                renderVoucherScreen();
            } catch (err) {
                console.error('Error ensuring voucher in goToVoucher:', err);
            }
        }
    }

    function updateAdvisory() {
        var dateEl = document.getElementById('amtDate');
        var dateVal = dateEl ? dateEl.value : '';
        var box = document.getElementById('amtAdvisoryBox');
        if (!box || !window.TOUR_DATABASE) return;

        var db = window.TOUR_DATABASE;
        var isSeason = db.isSeasonDate(dateVal);
        var isMonsoon = db.isMonsoonDate(dateVal);

        if (isMonsoon) {
            box.innerHTML = '🌧️ <strong>Monsoon Advisory:</strong> Lingmala &amp; Bhilar waterfalls are at peak flow. Some cliff viewpoints may have dense mist.';
            box.style.background = '#eff6ff';
            box.style.color = '#1e40af';
            box.style.border = '1px solid #bfdbfe';
            box.style.display = 'block';
        } else if (isSeason) {
            box.innerHTML = '📌 <strong>Season / Weekend Period:</strong> High tourist rush. Minimum 2 tours or Full Day Combo recommended to cover all viewpoints comfortably.';
            box.style.background = '#fffbeb';
            box.style.color = '#92400e';
            box.style.border = '1px solid #fde68a';
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    }

    // ── 5.5 AI Dynamic Tour & Route Advisory Engine ─────────────────────
    function getAIAdvisory(tours, isOutstation, isLocalDrop, isCombo) {
        if (!tours || !tours.length) return { badge: 'AI Travel Insight', text: '' };
        var t1 = tours[0] || {};
        var pId = (t1.id || '').toUpperCase();
        var pName = (t1.name || '').toLowerCase();

        var badge = 'AI Circuit Insight';
        var text = '';

        if (isOutstation) {
            badge = 'Outstation Advisory';
            text = 'Direct descent via Pasarni/Wai Ghat to NH-48 Expressway. Dedicated tourist cab arranged with experienced ghat driver.';
        } else if (isLocalDrop) {
            badge = 'Point-to-Point Transit';
            text = 'Doorstep hotel porch pickup at locked union tariff. Direct transfer to ' + escapeHtml(t1.name || 'destination') + '.';
        } else if (isCombo || pId === 'T7') {
            badge = 'Full-Day Circuit Insight';
            text = 'Full-day Sahyadri circuit covering Mahabaleshwar viewpoints &amp; Panchgani plateau. Viewpoint sequence curated by driver for optimal mountain visibility.';
        } else if (pId === 'T1') {
            badge = 'Sightseeing Advisory';
            text = 'Morning departure recommended for clear visibility across Arthur\'s Seat and Echo Point before afternoon mountain mist.';
        } else if (pId === 'T2') {
            badge = 'Sunset &amp; Falls Insight';
            text = 'Afternoon departure recommended for peak waterfall flow at Lingmala and unhindered sunset view at Bombay Point.';
        } else if (pId === 'T3' || pName.indexOf('pratapgad') !== -1 || pName.indexOf('pratapgadh') !== -1) {
            badge = 'Heritage Fort Advisory';
            text = 'Approx 45-min mountain drive via Poladpur Ghat to Pratapgad base. Early departure advised to avoid climbing heat.';
        } else if (pId === 'T4') {
            badge = 'Plateau Tour Advisory';
            text = 'Scenic Panchgani plateau circuit covering Table Land and Parsi Point. Best enjoyed in gentle morning or pre-sunset lighting.';
        } else if (pId === 'T5' || pName.indexOf('wai') !== -1) {
            badge = 'Heritage Circuit Insight';
            text = 'Scenic route down to historic Wai Krishna river temples and Dhom Dam backwaters. Peaceful heritage excursion.';
        } else if (pId === 'T6' || pName.indexOf('tapola') !== -1) {
            badge = 'Backwaters Advisory';
            text = 'Scenic 28km mountain road to Tapola backwaters (Mini Kashmir). Boating available at Koyna lake.';
        } else if (pId === 'M1') {
            badge = 'Express Circuit Advisory';
            text = 'Focused 2.5-hour clifftop express tour covering Arthur\'s Seat and Echo Point. Best experienced in morning hours before mountain mist sets in.';
        } else if (pId === 'M2') {
            badge = 'Express Circuit Advisory';
            text = 'Direct 2.5-hour tour to Kate\'s Point, Elephant\'s Head needle-hole cliff &amp; fresh strawberry farm. Perfect scenic quick excursion.';
        } else if (pId === 'M3') {
            badge = 'Sunrise &amp; Falls Advisory';
            text = 'Early morning 2.5-hour tour for spectacular Wilson Point sunrise followed by fresh forest trail at Lingmala Waterfall.';
        } else {
            badge = 'Trip Advisory';
            text = 'Circuit route planned as per official Mahabaleshwar Taxi Union guidelines.';
        }

        return { badge: badge, text: text };
    }

    
    function updateCabSelector() {
        // Only 4-seater cab available - all updated rates apply to 4-seater cars only
        bookingState.pax = '3-4';
        bookingState.taxiCount = 1;

        var db = window.TOUR_DATABASE;
        var t = (bookingState.tourId && db && db.getTourById) ? db.getTourById(bookingState.tourId) : (db && db.tours ? db.tours[0] : null);
        var tours = t ? [{ tour: t, date: bookingState.date, time: bookingState.time }] : [];
        var sRules = getServiceRules(bookingState.service || bookingState.serviceType, tours, false, 1);
        var isOutstation = (sRules.key === 'outstation');
        var isLocalDrop = (sRules.key === 'local_drop');

        var wraps = document.querySelectorAll('.amt-cab-selector-wrap');
        wraps.forEach(function (wrap) {
            var pill4 = wrap.querySelector('.amt-cab-pill[data-cab="4-seater"]');
            var pill67 = wrap.querySelector('.amt-cab-pill[data-cab="6-7-seater"]');
            var label = wrap.querySelector('.amt-label');
            var subnote = wrap.querySelector('.amt-cab-subnote');

            if (pill67) {
                pill67.remove(); // Completely removed from DOM
            }
            if (pill4) {
                pill4.style.display = 'flex';
                pill4.style.width = '100%';
                pill4.style.boxSizing = 'border-box';
                pill4.style.cursor = 'default';
                pill4.classList.add('active');
                var p4 = pill4.querySelector('.amt-cab-pill-info');
                if (p4) {
                    p4.innerHTML = '<strong>🚖 4-Seater Dedicated Tourist Cab</strong>'
                        + '<span>1 to 4 Guests &bull; Official Union Tariff &bull; Private Cab</span>';
                }
            }
            if (label) {
                label.textContent = 'Cab Type';
            }
            if (subnote) {
                if (isOutstation) {
                    subnote.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#0284c7;"></i> Dedicated private cab &bull; Hotel porch pickup &bull; Direct highway transit';
                } else {
                    subnote.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Dedicated private cab &bull; Hotel porch pickup';
                }
                subnote.style.display = 'block';
            }
        });
        var paxSel = document.getElementById('amtPax');
        if (paxSel) paxSel.value = '3-4';

        // Update Step 2 Header Trust Chip
        var trustChips = document.querySelectorAll('#amtStep2 .amt-trust-chip');
        trustChips.forEach(function (chip) {
            if (isOutstation) {
                chip.innerHTML = '<i class="fa-solid fa-gas-pump"></i> Nominal Fuel Advance';
                chip.style.color = '#0284c7';
                chip.style.background = '#e0f2fe';
                chip.style.borderColor = '#bae6fd';
            } else if (isLocalDrop) {
                chip.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Pay Driver After Drop';
                chip.style.color = '#166534';
                chip.style.background = '#ecfdf5';
                chip.style.borderColor = '#a7f3d0';
            } else {
                chip.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Pay Driver After Tour';
                chip.style.color = '#166534';
                chip.style.background = '#ecfdf5';
                chip.style.borderColor = '#a7f3d0';
            }
        });

        // Update Step 2 Confirm Button Subtext
        var confirmBtn = document.getElementById('amtConfirmBtn');
        if (confirmBtn) {
            var btnSub = confirmBtn.querySelector('span');
            if (btnSub) {
                if (isOutstation) {
                    btnSub.innerHTML = 'Review Confirmed Tariff &amp; Driver Schedule &bull; Nominal Fuel Advance';
                } else if (isLocalDrop) {
                    btnSub.innerHTML = 'Review Official Voucher &amp; Drop Details &bull; Pay Driver After Drop';
                } else {
                    btnSub.innerHTML = 'Review Official Voucher &amp; Tour Details &bull; Pay Driver After Trip';
                }
            }
        }
    }

    function renderReviewCard() {
        var el = document.getElementById('amtReviewCard');
        if (!el || !window.TOUR_DATABASE) return;

        if (!bookingState.bookingId) {
            bookingState.bookingId = generateBookingId();
        }

        var db = window.TOUR_DATABASE;
        var t = (bookingState.tourId && db.getTourById(bookingState.tourId)) || db.tours[0];
        if (!t) return;

        var isLarge = false;
        var taxiCount = 1;
        var cabLabel = '4-Seater Dedicated Tourist Cab (1 Cab)';

        var selectedTours = bookingState.selectedTours || [];
        var totalFare = 0;
        if (selectedTours.length > 0) {
            selectedTours.forEach(function (st) {
                var tourObj = db.getTourById(st.id);
                if (tourObj) totalFare += (tourObj.fare || 0);
            });
        }
        if (totalFare === 0) {
            totalFare = t.fare || 0;
        }
        totalFare = totalFare * taxiCount;

        var fareDisplay = '₹' + Number(totalFare).toLocaleString('en-IN') + (taxiCount > 1 ? ' <small style="font-size:0.75rem;font-weight:600;opacity:0.85;">(2 Cabs)</small>' : '');
        var tourTitle = t.name;

        var dStr = formatSafeDisplayDate(bookingState.date || 'Scheduled');
        var tStr = formatPickupTime(bookingState.time);

        var tours = [{ tour: t, date: bookingState.date, time: bookingState.time }];
        var sRules = getServiceRules(bookingState.service || bookingState.serviceType, tours, false, 1);
        var isOutstation = (sRules.key === 'outstation');
        var isLocalDrop = (sRules.key === 'local_drop');

        var tourIcon = 'fa-mountain-sun';
        var payBadgeHtml = '<span class="amt-crb-zero"><i class="fa-solid fa-check"></i> Pay Driver After Tour</span>';

        if (isOutstation) {
            tourIcon = 'fa-route';
            payBadgeHtml = '<span class="amt-crb-zero" style="color:#b45309;font-weight:700;"><i class="fa-solid fa-gas-pump"></i> Nominal Fuel Advance • Balance to Driver</span>';
        } else if (isLocalDrop) {
            tourIcon = 'fa-location-dot';
            payBadgeHtml = '<span class="amt-crb-zero"><i class="fa-solid fa-check"></i> Pay Driver After Drop</span>';
        }

        var html = '<div class="amt-compact-review-box">'
            + '<div class="amt-crb-row">'
            + '  <div class="amt-crb-item"><i class="fa-solid ' + tourIcon + '" style="color:#0284c7;"></i> <strong>' + escapeHtml(tourTitle) + '</strong></div>'
            + '  <div class="amt-crb-fare">' + fareDisplay + '</div>'
            + '</div>'
            + '<div class="amt-crb-meta">'
            + '  <span>⏱️ ' + escapeHtml(t.duration) + '</span>'
            + '  <span>📅 ' + escapeHtml(dStr) + ' at ' + escapeHtml(tStr) + '</span>'
            + '  <span>🚕 ' + cabLabel + '</span>'
            + '  ' + payBadgeHtml
            + '</div>'
            + '</div>';

        el.innerHTML = html;
        var policyBox = document.getElementById('amtStep4PolicyBox');
        if (policyBox) policyBox.innerHTML = '';
    }

    function renderVoucherScreen() {
        var el = document.getElementById('amtVoucherContent');
        if (!el) return;
        var db = window.TOUR_DATABASE || (typeof TOUR_DATABASE !== 'undefined' ? TOUR_DATABASE : null);
        if (!db) return;

        try {
            if (!bookingState.bookingId) {
                bookingState.bookingId = generateBookingId();
            }

            var tours = [];
            (bookingState.selectedTours || []).forEach(function (st) {
                var t = db.getTourById(st.id);
                if (t) {
                    tours.push({
                        tour: t,
                        date: (bookingState.differentSchedule && st.date) ? st.date : bookingState.date,
                        time: (bookingState.differentSchedule && st.time) ? st.time : bookingState.time
                    });
                }
            });

            if (tours.length === 0 && db.tours && db.tours.length > 0) {
                var fb = (bookingState.tourId && db.getTourById(bookingState.tourId)) || db.tours[0];
                tours.push({ tour: fb, date: bookingState.date, time: bookingState.time });
                bookingState.selectedTours = [{ id: fb.id, date: bookingState.date, time: bookingState.time }];
            }

            var isMulti = tours.length > 1;
            var baseFare = tours.reduce(function (acc, item) { return acc + item.tour.fare; }, 0);
            var isLarge = false;
            var taxiCount = 1;
            var totalFare = baseFare;

            var sRules = getServiceRules(bookingState.service || bookingState.serviceType, tours, isLarge, taxiCount);

            var termsHtml = '<details class="amt-v-details" style="margin-top:6px;">'
                + '<summary class="amt-v-summary">'
                + '  <span><i class="fa-solid fa-shield-halved" style="color:#0284c7;"></i> ' + escapeHtml(sRules.termsTitle) + '</span>'
                + '  <span class="amt-v-toggle-pill">View Guidelines ▾</span>'
                + '</summary>'
                + '<div class="amt-v-terms-compact" style="padding:6px 8px;">'
                + '<ul class="amt-v-terms-list" style="margin:0;padding-left:16px;">'
                + sRules.terms.map(function (t) {
                    return '<li><strong>' + escapeHtml(t.title) + ':</strong> ' + escapeHtml(t.desc) + '</li>';
                }).join('')
                + '</ul>'
                + '</div>'
                + '</details>';

            var notesHtml = '';
            if (bookingState.notes && bookingState.notes.trim()) {
                notesHtml = '<div class="amt-v-notes-chip">📝 <strong>Special Request:</strong> ' + escapeHtml(bookingState.notes.trim()) + '</div>';
            }

            var itemizedToursHtml = '';
            tours.forEach(function (item, idx) {
                var t = item.tour;
                var dStr = formatSafeDisplayDate(item.date);
                var tStr = formatPickupTime(item.time);

                var tourPoints = t.points || [];
                var tourHiddenPts = t.hidden_points || [];

                var pointsHtml = '';
                if (sRules.key === 'sightseeing' || sRules.key === 'combo') {
                    if (tourPoints.length > 0) {
                        pointsHtml = '<details class="amt-v-details" style="margin-top:4px;">'
                            + '<summary class="amt-v-summary">'
                            + '  <span><i class="fa-solid fa-location-dot" style="color:#0284c7;"></i> Included Sightseeing (' + tourPoints.length + ' Viewpoints)</span>'
                            + '  <span class="amt-v-toggle-pill">View All ▾</span>'
                            + '</summary>'
                            + '<div class="amt-v-chips-wrap" style="padding:5px 6px;">'
                            + tourPoints.map(function (p) {
                                return '<span class="amt-v-chip"><i class="fa-solid fa-location-dot" style="font-size:0.55rem;color:#0284c7;"></i> ' + escapeHtml(p) + '</span>';
                            }).join('')
                            + '</div>'
                            + '</details>';
                    }
                    if (tourHiddenPts.length > 0) {
                        pointsHtml += '<details class="amt-v-details" style="margin-top:3px;">'
                            + '<summary class="amt-v-summary" style="background:#fffbeb;border-color:#fde68a;color:#92400e;">'
                            + '  <span><i class="fa-solid fa-triangle-exclamation" style="color:#d97706;"></i> Optional Points (' + tourHiddenPts.length + ' Extra Points)</span>'
                            + '  <span class="amt-v-toggle-pill" style="color:#b45309;">View ▾</span>'
                            + '</summary>'
                            + '<div class="amt-v-chips-wrap" style="padding:5px 6px;">'
                            + tourHiddenPts.map(function (p) {
                                return '<span class="amt-v-chip" style="border-color:#fde68a;background:#fffbeb;color:#92400e;"><i class="fa-solid fa-location-dot" style="font-size:0.55rem;color:#d97706;"></i> ' + escapeHtml(p) + '</span>';
                            }).join('')
                            + '</div>'
                            + '</details>';
                    }
                } else if (sRules.key === 'outstation') {
                    pointsHtml = '<div class="amt-v-route-strip">'
                        + '<i class="fa-solid fa-route" style="color:#0284c7;"></i> '
                        + '<span class="amt-v-route-step">Hotel Pickup</span>'
                        + '<span class="amt-v-route-arrow">→</span>'
                        + '<span class="amt-v-route-step">Pasarni / Wai Ghat</span>'
                        + '<span class="amt-v-route-arrow">→</span>'
                        + '<span class="amt-v-route-step">NH-48 Expressway</span>'
                        + '<span class="amt-v-route-arrow">→</span>'
                        + '<span class="amt-v-route-step">Destination Drop</span>'
                        + '</div>';
                } else if (sRules.key === 'local_drop') {
                    pointsHtml = '<div class="amt-v-route-strip">'
                        + '<i class="fa-solid fa-location-dot" style="color:#0284c7;"></i> '
                        + '<span class="amt-v-route-step">Hotel Porch</span>'
                        + '<span class="amt-v-route-arrow">→</span>'
                        + '<span class="amt-v-route-step">Direct Point-to-Point</span>'
                        + '<span class="amt-v-route-arrow">→</span>'
                        + '<span class="amt-v-route-step">' + escapeHtml(t.name || 'Destination') + '</span>'
                        + '</div>';
                }

                itemizedToursHtml += '<div class="amt-v-tour-strip" style="margin-bottom:6px;">'
                    + '<div class="amt-v-tour-hdr">'
                    + '<span class="amt-v-tour-name">🚕 ' + escapeHtml(formatTourDisplayName(t, idx, isMulti)) + '</span>'
                    + '<span class="amt-v-tour-dur">⏱️ ' + escapeHtml(t.duration) + ' &bull; ₹' + t.fare + '</span>'
                    + '</div>'
                    + (isMulti && bookingState.differentSchedule ? ('<div class="amt-v-tour-meta">'
                        + '<span>📅 <strong>Schedule:</strong> ' + escapeHtml(dStr) + ' at ' + escapeHtml(tStr) + '</span>'
                        + '<span class="amt-v-tour-rate">Locked Rate</span>'
                        + '</div>') : '')
                    + pointsHtml
                    + '</div>';
            });

            var isCombo = sRules.key === 'combo';
            var isOutstation = sRules.key === 'outstation';
            var isLocalDrop = sRules.key === 'local_drop';
            var aiObj = getAIAdvisory(tours.map(function (it) { return it.tour; }), isOutstation, isLocalDrop, isCombo);

            var dateSummaryStr = bookingState.differentSchedule
                ? '<strong>Multi-Day Tour</strong> (Itemized Below)'
                : '<strong>' + escapeHtml(formatSafeDisplayDate(bookingState.date || 'Scheduled')) + '</strong> at <strong>' + escapeHtml(formatPickupTime(bookingState.time)) + '</strong>';

            var html = '<div class="amt-v-card-streamlined">'
                + '<div class="amt-v-hdr">'
                + '  <div class="amt-v-hdr-left">'
                + '    <img src="' + ARYAN_LOGO_DATA_URI + '" alt="Aryan Taxi Logo" class="amt-v-logo" style="width:38px;height:38px;object-fit:contain;flex-shrink:0;">'
                + '    <div>'
                + '      <div class="amt-v-brand">ARYAN TAXI MAHABALESHWAR</div>'
                + '      <div class="amt-v-sub">' + escapeHtml(sRules.serviceTitle) + ' &bull; Explore Sahyadri</div>'
                + '    </div>'
                + '  </div>'
                + '  <div class="amt-v-hdr-right">'
                + '    <div class="amt-v-badge" style="background:' + sRules.badgeBg + ';color:' + sRules.badgeColor + ';border-color:' + sRules.badgeBorder + ';">' + sRules.badgeText + '</div>'
                + '    <div class="amt-v-ref-box"><span class="amt-v-ref-lbl">Pass ID:</span> <strong class="amt-v-ref-val" id="amtPassIdVal">' + escapeHtml(bookingState.bookingId || 'AMT-REQ') + '</strong><button type="button" class="amt-v-copy-btn" id="amtCopyPassIdBtn" title="Copy Pass ID" aria-label="Copy Pass ID"><i class="fa-regular fa-copy"></i></button></div>'
                + '  </div>'
                + '</div>'

                + '<div class="amt-v-grid">'
                + '  <div class="amt-v-cell">'
                + '    <span class="amt-v-lbl">Lead Passenger</span>'
                + '    <span class="amt-v-val"><strong style="text-transform:capitalize;">' + escapeHtml(formatSafeTitleCase(bookingState.name || 'Guest')) + '</strong>' + (bookingState.phone ? ' (' + escapeHtml(bookingState.phone) + ')' : '') + '</span>'
                + '  </div>'
                + '  <div class="amt-v-cell">'
                + '    <span class="amt-v-lbl">Travel Schedule</span>'
                + '    <span class="amt-v-val">' + dateSummaryStr + '</span>'
                + '  </div>'
                + '  <div class="amt-v-cell" style="grid-column:1/-1;">'
                + '    <span class="amt-v-lbl">Pickup Location</span>'
                + '    <span class="amt-v-val"><strong style="text-transform:capitalize;">' + escapeHtml(formatSafeTitleCase(bookingState.pickup || 'Mahabaleshwar')) + '</strong> (Doorstep Porch)</span>'
                + '  </div>'
                + '  <div class="amt-v-cell amt-v-vehicle-cell">'
                + '    <div class="amt-v-vehicle-wrap">'
                + '      <div class="amt-v-vehicle-left">'
                + '        <span class="amt-v-vehicle-lbl">🚕 Cab:</span>'
                + '        <strong class="amt-v-vehicle-val">' + escapeHtml(sRules.vehicleDesc.replace(/\s*\(Arranged as per availability\)/i, '')) + '</strong>'
                + '        <span class="amt-v-vehicle-sub">(As per availability)</span>'
                + '      </div>'
                + '      <span class="amt-v-fleet-tag"><i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Union Fleet</span>'
                + '    </div>'
                + '  </div>'
                + '</div>'

                + notesHtml

                + '<div style="margin-top:2px;">'
                + itemizedToursHtml
                + '</div>'

                + (aiObj && aiObj.text ? ('<div class="amt-v-ai-advisory">'
                    + '  <span class="amt-v-ai-badge"><i class="fa-solid fa-sparkles"></i> ' + escapeHtml(aiObj.badge) + '</span>'
                    + '  <span class="amt-v-ai-text">' + aiObj.text + '</span>'
                    + '</div>') : '')

                + '<div class="amt-v-fare-bar">'
                + '  <div class="amt-v-fare-left">'
                + '    <span class="amt-v-fare-lbl">' + escapeHtml(sRules.tariffLabel) + '</span>'
                + '    <span class="amt-v-fare-amt">₹' + totalFare + '</span>'
                + (isMulti ? '<span class="amt-v-fare-breakdown">(' + tours.map(function (it) { return '₹' + it.tour.fare; }).join(' + ') + ')' + (taxiCount > 1 ? ' &times; ' + taxiCount + ' Cabs' : '') + '</span>' : '')
                + '  </div>'
                + '  <div class="amt-v-fare-right">'
                + '    <span class="amt-v-pay-badge" style="color:' + sRules.paymentColor + ';">✓ ' + escapeHtml(sRules.paymentBadge) + '</span>'
                + '    <span class="amt-v-pay-note">Official Union Tariff Rate &bull; No Hidden Surcharges</span>'
                + '  </div>'
                + '</div>'

                + termsHtml

                + '<div class="amt-v-print-slip" style="display:block; margin-top:8px; padding:6px 10px; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:6px; font-size:10px; color:#475569;">'
                + '  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">'
                + '    <span><i class="fa-solid fa-file-signature"></i> <strong>Driver Dispatch Acknowledgment:</strong> Reporting at porch on schedule</span>'
                + '    <div style="display:flex; gap:16px;">'
                + '      <span>Driver Ack: ________________</span>'
                + '      <span>Guest Ack: ________________</span>'
                + '    </div>'
                + '  </div>'
                + '</div>'

                + '<div class="amt-v-ftr">'
                + '  <span><i class="fa-solid fa-shield-halved" style="color:#0284c7;"></i> Union Cab &bull; Computer Voucher</span>'
                + '  <span><i class="fa-solid fa-phone" style="color:#10b981;"></i> Helpline: +91 99228 82044</span>'
                + '</div>'
                + '</div>';

            el.innerHTML = html;

            // Render Desktop WhatsApp QR Code Box
            var qrContainer = document.getElementById('amtDesktopQrContainer');
            if (qrContainer) {
                var qrMsg = buildConfirmedWhatsAppMessage(bookingState);
                var qrWaUrl = getWhatsAppUrl(encodeURIComponent(qrMsg));
                var qrImgUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=4&data=' + encodeURIComponent(qrWaUrl);
                qrContainer.innerHTML = '<div class="amt-desktop-qr-card" id="amtDesktopQrCard">'
                    + '<div class="amt-dqr-left">'
                    + '  <img src="' + qrImgUrl + '" alt="WhatsApp QR Code" class="amt-dqr-img" width="48" height="48" loading="lazy">'
                    + '</div>'
                    + '<div class="amt-dqr-right">'
                    + '  <div class="amt-dqr-badge"><i class="fa-solid fa-qrcode"></i> Instant Mobile Sync</div>'
                    + '  <div class="amt-dqr-title">Booking from PC? Scan with Phone Camera!</div>'
                    + '  <div class="amt-dqr-desc">Scan to launch WhatsApp with pre-filled booking details.</div>'
                    + '</div>'
                    + '</div>';
            }

            var noticeSub = document.getElementById('amtVoucherNoticeSub');
            if (noticeSub) {
                noticeSub.textContent = sRules.dispatchNotice;
            }

            var waSub = document.getElementById('amtWaBtnSubtext');
            if (waSub) {
                if (sRules.key === 'outstation') {
                    waSub.textContent = 'Send transfer details on WhatsApp to confirm driver & advance schedule';
                } else if (sRules.key === 'local_drop') {
                    waSub.textContent = 'Send drop details on WhatsApp to confirm driver dispatch';
                } else {
                    waSub.textContent = 'Send tour details on WhatsApp to confirm driver dispatch & timing';
                }
            }
        } catch (err) {
            console.error('Error rendering voucher in renderVoucherScreen:', err);
            var bId = bookingState.bookingId || ('AMT-' + Date.now().toString().slice(-6));
            el.innerHTML = '<div class="amt-v-card-streamlined">'
                + '<div class="amt-v-hdr">'
                + '  <div class="amt-v-hdr-left">'
                + '    <div class="amt-v-brand">ARYAN TAXI MAHABALESHWAR</div>'
                + '    <div class="amt-v-sub">Official Booking Voucher</div>'
                + '  </div>'
                + '  <div class="amt-v-hdr-right">'
                + '    <div class="amt-v-badge" style="background:#fef3c7;color:#92400e;">CONFIRMED VOUCHER</div>'
                + '    <div class="amt-v-ref-box">Ref: ' + escapeHtml(bId) + '</div>'
                + '  </div>'
                + '</div>'
                + '<div class="amt-v-grid">'
                + '  <div class="amt-v-cell"><span class="amt-v-lbl">Lead Passenger</span><span class="amt-v-val">' + escapeHtml(bookingState.name || 'Guest') + ' (' + escapeHtml(bookingState.phone || '') + ')</span></div>'
                + '  <div class="amt-v-cell"><span class="amt-v-lbl">Pickup Location</span><span class="amt-v-val">' + escapeHtml(bookingState.pickup || 'Mahabaleshwar') + '</span></div>'
                + '  <div class="amt-v-cell"><span class="amt-v-lbl">Travel Schedule</span><span class="amt-v-val">' + escapeHtml(bookingState.date || 'Scheduled') + ' at ' + escapeHtml(bookingState.time || '09:00') + '</span></div>'
                + '  <div class="amt-v-cell"><span class="amt-v-lbl">Tour</span><span class="amt-v-val">' + escapeHtml(bookingState.tourId || 'Sightseeing Tour') + '</span></div>'
                + '</div>'
                + '<div class="amt-v-ftr"><span>Aryan Taxi Helpline: +91 99228 82044</span></div>'
                + '</div>';
        }
    }

    // ── 6. Global Public Methods & Bridges ─────────────────────────────
    window.buildConfirmedWhatsAppMessage = buildConfirmedWhatsAppMessage;
    window.getServiceRules = getServiceRules;
    window.populateTourDropdownByService = populateTourDropdownByService;
    window.updateSelectedTourBanner = updateSelectedTourBanner;
    window.goToStep = goToStep;
    window.renderReviewCard = renderReviewCard;
    window.getBookingState = function() { return bookingState; };

    window.closeBookingModal = function () {
        // Do not force redirect to index.html on portal pages; preserve current state
        if (document.body && document.body.classList.contains('booking-portal-page')) {
            return;
        }
        var modal = document.getElementById('amtBookingModal');
        if (modal) modal.style.display = 'none';
        if (typeof window.unlockModalBodyScroll === 'function') {
            window.unlockModalBodyScroll('amtBookingModal');
        }
    };

    window.openBookingModal = function (tourHint) {
        bindEngineEvents();
        var modal = document.getElementById('amtBookingModal');
        if (!modal) return;

        if (typeof window.lockModalBodyScroll === 'function') {
            window.lockModalBodyScroll('amtBookingModal');
        }

        modal.style.display = 'flex';

        // Reset scroll position on overlay and card
        modal.scrollTop = 0;
        var card = modal.querySelector('.amt-card');
        if (card) {
            card.scrollTop = 0;
            var cardBody = card.querySelector('.amt-card-body');
            if (cardBody) cardBody.scrollTop = 0;
        }

        // Reset state defaults
        bookingState.submitting = false;
        bookingState.tour2Id = '';
        bookingState.bookingId = '';
        bookingState.differentSchedule = false;
        bookingState.selectedTours = [];

        if (tourHint === '') {
            bookingState.notes = '';
            var notesInp = document.getElementById('amtNotes');
            if (notesInp) notesInp.value = '';
        }

        var db = window.TOUR_DATABASE;
        var targetTour = null;
        if (!tourHint && typeof restoreBookingDraft === 'function') {
            restoreBookingDraft();
        }
        if (tourHint && db) {
            targetTour = db.resolveTour(tourHint);
        } else if (bookingState.tourId && db) {
            targetTour = db.getTourById(bookingState.tourId);
        }
        if (!targetTour && db) {
            targetTour = db.tours[0];
        }

        if (targetTour) {
            var cat = targetTour.category || 'sightseeing';
            if ((targetTour.category === 'sightseeing' && targetTour.sub_category === 'single_tour') || targetTour.id === 'M1' || targetTour.id === 'M2' || targetTour.id === 'M3') {
                cat = 'express';
            }
            bookingState.service = cat;
            bookingState.tourId = targetTour.id;

            // Sync service tab buttons
            var serviceBtns = document.querySelectorAll('.amt-service-btn');
            serviceBtns.forEach(function (b) {
                b.classList.toggle('active', b.getAttribute('data-service') === cat);
            });

            // Populate options for this category
            populateTourDropdownByService(cat);

            // Select target tour
            var sel = document.getElementById('amtTourSelect');
            if (sel) {
                sel.value = targetTour.id;
            }
            if (typeof updateSelectedTourBanner === 'function') {
                updateSelectedTourBanner(targetTour.id);
            }
        } else {
            bookingState.service = 'sightseeing';
            populateTourDropdownByService('sightseeing');
        }

        // Set date constraints
        var dateInput = document.getElementById('amtDate');
        if (dateInput) {
            var now = new Date();
            var yyyy = now.getFullYear();
            var mm = pad2(now.getMonth() + 1);
            var dd = pad2(now.getDate());
            var todayStr = yyyy + '-' + mm + '-' + dd;
            dateInput.min = todayStr;
            dateInput.max = (yyyy + 1) + '-' + mm + '-' + dd;
            if (!dateInput.value || dateInput.value < todayStr) {
                dateInput.value = todayStr;
            }
        }

        goToStep(1);
    };

    window.bookWA = function (hint) { window.openBookingModal(hint || ''); };
    window.tourWA = function (hint) { window.openBookingModal(hint || ''); };
    window.destWA = function (hint) { window.openBookingModal(hint || ''); };

    // In-page Contact form bridge
    window.bridgeContactForm = function () {
        var name = (document.getElementById('c_name') || {}).value || '';
        var phone = (document.getElementById('c_phone') || {}).value || '';
        var date = (document.getElementById('c_date') || {}).value || '';
        var time = (document.getElementById('c_time') || {}).value || '09:00';
        var pickup = (document.getElementById('c_pickup') || {}).value || '';
        var tour = (document.getElementById('c_tour') || {}).value || '';

        if (!name || !date || !pickup) {
            alert('Please fill in your Name, Travel Date, and Pickup Location.');
            return;
        }

        var now = new Date();
        var yyyy = now.getFullYear();
        var mm = pad2(now.getMonth() + 1);
        var dd = pad2(now.getDate());
        var todayStr = yyyy + '-' + mm + '-' + dd;
        if (date < todayStr) {
            alert('Selected travel date has already passed. Please select today or a future date.');
            return;
        }

        window.openBookingModal(tour);
        setTimeout(function () {
            if (document.getElementById('amtName')) document.getElementById('amtName').value = name;
            if (document.getElementById('amtPhone')) document.getElementById('amtPhone').value = phone;
            if (document.getElementById('amtDate')) document.getElementById('amtDate').value = date;
            if (document.getElementById('amtTime')) document.getElementById('amtTime').value = time;
            if (document.getElementById('amtPickup')) document.getElementById('amtPickup').value = pickup;

            bookingState.name = name;
            bookingState.phone = phone;
            bookingState.date = date;
            bookingState.time = time;
            bookingState.pickup = pickup;

            updateZoneNotice();
            renderReviewCard();
            goToStep(4);
        }, 150);
    };

    // Homepage Hero Form bridge
    window.bridgeHomeForm = function () {
        var nameInput = document.getElementById('userName');
        var phoneInput = document.getElementById('userPhone');
        var dateInput = document.getElementById('travelDate');
        var timeInput = document.getElementById('pickupTime');
        var routeSelect = document.getElementById('routeSelect');

        var name = nameInput ? nameInput.value.trim() : '';
        var phone = phoneInput ? phoneInput.value.trim() : '';
        var date = dateInput ? dateInput.value : '';
        var time = timeInput ? timeInput.value : '09:00';
        var tour = routeSelect ? routeSelect.value : '';

        // Save draft in localStorage for instant synchronization
        try {
            if (typeof localStorage !== 'undefined') {
                var draft = {
                    name: name,
                    phone: phone,
                    date: date,
                    time: time,
                    tourId: tour,
                    service: 'sightseeing',
                    savedAt: Date.now()
                };
                if (window.TOUR_DATABASE && window.TOUR_DATABASE.resolveTour) {
                    var resolved = window.TOUR_DATABASE.resolveTour(tour);
                    if (resolved) {
                        draft.tourId = resolved.id;
                        draft.service = ((resolved.category === 'sightseeing' && resolved.sub_category === 'single_tour') || resolved.id === 'M1' || resolved.id === 'M2' || resolved.id === 'M3') ? 'express' : (resolved.category || 'sightseeing');
                    }
                }
                localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
            }
        } catch (e) { }

        // Redirect directly to the dedicated Booking Engine page
        var query = [];
        if (tour) query.push('tour=' + encodeURIComponent(tour));
        if (date) query.push('date=' + encodeURIComponent(date));
        if (time) query.push('time=' + encodeURIComponent(time));
        if (name) query.push('name=' + encodeURIComponent(name));
        if (phone) query.push('phone=' + encodeURIComponent(phone));

        var targetUrl = 'booking.html' + (query.length ? '?' + query.join('&') : '');
        window.location.href = targetUrl;
    };

    var _autoOpenFired = false;
    function checkAutoOpen() {
        if (_autoOpenFired) return;
        try {
            var hash = (window.location.hash || '').toLowerCase();
            var search = window.location.search || '';
            var hasBookParam = /[?&](book|booking)=/i.test(search) || hash === '#booking' || hash === '#book';
            var tourMatch = search.match(/[?&]tour=([^&#]*)/i);
            var tourHint = '';
            if (tourMatch) {
                try {
                    tourHint = decodeURIComponent(tourMatch[1].replace(/\+/g, ' '));
                } catch (e) {
                    tourHint = tourMatch[1];
                }
            }

            if (hasBookParam || tourHint) {
                _autoOpenFired = true;
                setTimeout(function () {
                    if (window.openBookingModal) {
                        window.openBookingModal(tourHint || '');
                var qParams = (typeof URLSearchParams !== 'undefined') ? new URLSearchParams(search) : null;
                var qDate = qParams ? (qParams.get('date') || '') : '';
                var qTime = qParams ? (qParams.get('time') || '') : '';
                var qName = qParams ? (qParams.get('name') || '') : '';
                var qPhone = qParams ? (qParams.get('phone') || '') : '';
                if (qDate) { var dEl = document.getElementById('amtDate'); if (dEl) dEl.value = qDate; bookingState.date = qDate; }
                if (qTime) { var tEl = document.getElementById('amtTime'); if (tEl) tEl.value = qTime; bookingState.time = qTime; }
                if (qName) { var nEl = document.getElementById('amtName'); if (nEl) nEl.value = qName; bookingState.name = qName; }
                if (qPhone) { var pEl = document.getElementById('amtPhone'); if (pEl) pEl.value = qPhone; bookingState.phone = qPhone; }
                    }
                }, 350);
            }
        } catch (e) {
            // Safe fallback
        }
    }

    function init() {
        injectStyles();
        injectEngineDOM();
        bindEngineEvents();
        if (document.body && document.body.classList.contains('booking-portal-page')) {
            var search = window.location.search || '';
            var hash = window.location.hash || '';
            var tourMatch = search.match(/[?&]tour=([^&#]*)/i);
            var tourHint = '';
            if (tourMatch) {
                try {
                    tourHint = decodeURIComponent(tourMatch[1].replace(/\+/g, ' '));
                } catch (e) {
                    tourHint = tourMatch[1];
                }
            }
            if (hash === '#voucher') {
                if (typeof restoreBookingDraft === 'function') restoreBookingDraft();
                goToVoucher();
            } else {
                window.openBookingModal(tourHint || '');
                var qParams = (typeof URLSearchParams !== 'undefined') ? new URLSearchParams(search) : null;
                var qDate = qParams ? (qParams.get('date') || '') : '';
                var qTime = qParams ? (qParams.get('time') || '') : '';
                var qName = qParams ? (qParams.get('name') || '') : '';
                var qPhone = qParams ? (qParams.get('phone') || '') : '';
                if (qDate) { var dEl = document.getElementById('amtDate'); if (dEl) dEl.value = qDate; bookingState.date = qDate; }
                if (qTime) { var tEl = document.getElementById('amtTime'); if (tEl) tEl.value = qTime; bookingState.time = qTime; }
                if (qName) { var nEl = document.getElementById('amtName'); if (nEl) nEl.value = qName; bookingState.name = qName; }
                if (qPhone) { var pEl = document.getElementById('amtPhone'); if (pEl) pEl.value = qPhone; bookingState.phone = qPhone; }
            }
        } else {
            checkAutoOpen();
            window.addEventListener('hashchange', checkAutoOpen);
        }

        // Step-aware browser & mobile hardware Back button handler
        window.addEventListener('popstate', function (e) {
            var modal = document.getElementById('amtBookingModal');
            var isModalVisible = modal && modal.style.display !== 'none';
            var isPortal = document.body && document.body.classList.contains('booking-portal-page');

            if (isModalVisible || isPortal) {
                var targetStep = (e && e.state && e.state.amtStep) ? e.state.amtStep : null;
                if (targetStep === 2) {
                    goToStep(2);
                } else if (targetStep === 1) {
                    goToStep(1);
                } else if (currentStep === 3) {
                    // Back from voucher goes to Step 2 (Edit Details)
                    goToStep(2);
                } else if (currentStep === 2) {
                    // Back from Step 2 goes to Step 1 (Change Tour)
                    goToStep(1);
                } else if (currentStep === 1) {
                    // Only close modal if on Step 1 of modal, NEVER redirect to home
                    if (isModalVisible && !isPortal) {
                        modal.style.display = 'none';
                        if (typeof window.unlockModalBodyScroll === 'function') {
                            window.unlockModalBodyScroll('amtBookingModal');
                        }
                    }
                }
            }
        });
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

})();
