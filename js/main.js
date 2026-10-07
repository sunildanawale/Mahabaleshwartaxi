(function(){function purgeStale(){var bad=document.querySelectorAll('.mobile-sticky-bar,[class*="mobile-bar"],[aria-label*="Driver"],[href*="Driver"]');for(var i=0;i<bad.length;i++){bad[i].remove();}}purgeStale();if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',purgeStale);}window.addEventListener('load',purgeStale);})();
/* ============================================================
   MAHABALESHWAR SIGHTSEEING TAXI — Core JavaScript
   Version: 3.0 | 2026
   Zero dependencies — pure vanilla JS
   ============================================================ */

(function () {
    'use strict';
    /* ============================================================
       1. DARK MODE
       ============================================================ */
    const ThemeManager = {
        init() {
            const saved = localStorage.getItem('theme') || localStorage.getItem('mahabaleshwar_theme');
            if (saved) {
                document.documentElement.setAttribute('data-theme', saved);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
            this.bindToggle();
        },

        bindToggle() {
            document.querySelectorAll('.theme-toggle').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const current = document.documentElement.getAttribute('data-theme');
                    const next = current === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('theme', next);
                    localStorage.setItem('mahabaleshwar_theme', next);
                });
            });
        }
    };

    /* ============================================================
       1.5 ACTIVE NAV MANAGER
       ============================================================ */
    const ActiveNavManager = {
        init() {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.navbar__link').forEach(link => {
                const href = link.getAttribute('href');
                if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
                    link.classList.add('navbar__link--active');
                } else if (!link.classList.contains('navbar__link--cta')) {
                    link.classList.remove('navbar__link--active');
                }
            });
        }
    };

    /* ============================================================
       2. MOBILE NAVIGATION
       ============================================================ */
    const MobileNav = {
        init() {
            this.toggle = document.querySelector('.navbar__toggle');
            this.menu = document.querySelector('.navbar__menu');
            this.overlay = document.querySelector('.nav-overlay');

            if (!this.toggle || !this.menu) return;

            this.toggle.addEventListener('click', () => this.toggleMenu());

            if (this.overlay) {
                this.overlay.addEventListener('click', () => this.closeMenu());
            }

            // Close on link click
            this.menu.querySelectorAll('.navbar__link').forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });

            // Close on ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeMenu();
            });
        },

        toggleMenu() {
            this.toggle.classList.toggle('active');
            this.menu.classList.toggle('active');
            if (this.overlay) this.overlay.classList.toggle('active');
            document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
        },

        closeMenu() {
            this.toggle.classList.remove('active');
            this.menu.classList.remove('active');
            if (this.overlay) this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    /* ============================================================
       3. NAVBAR SCROLL EFFECT
       ============================================================ */
    const NavbarScroll = {
        init() {
            this.navbar = document.querySelector('.navbar');
        },
        handleScroll(current) {
            if (!this.navbar) return;
            if (current > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }
    };



    
    /* ============================================================
       13. HERO ANIMATED TRUST ROTATOR
       ============================================================ */
    const HeroTrustRotator = {
        init() {
            const el = document.getElementById('heroTrustRotator');
            if (!el || el.dataset.rotatorActive) return;
            el.dataset.rotatorActive = 'true';

            const items = [
                '<i class="fa-solid fa-shield-check" style="color: #4ade80;"></i> Safe &amp; Reliable Cabs',
                '<i class="fa-solid fa-circle-check" style="color: #38bdf8;"></i> Union-Approved Fares',
                '<i class="fa-solid fa-hand-holding-dollar" style="color: #fbbf24;"></i> Zero Advance Booking',
                '<i class="fa-solid fa-taxi" style="color: #f43f5e;"></i> Official Tourist Taxi',
                '<i class="fa-solid fa-mountain-sun" style="color: #34d399;"></i> Expert Local Drivers'
            ];
            let currentIndex = 0;

            setInterval(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(-8px)';

                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % items.length;
                    el.innerHTML = items[currentIndex];
                    el.style.transform = 'translateY(8px)';
                    void el.offsetHeight;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 280);
            }, 2600);
        }
    };


    /* ============================================================
       4. SCROLL REVEAL (IntersectionObserver)
       ============================================================ */
    const ScrollReveal = {
        init() {
            const reveals = document.querySelectorAll('.reveal');
            if (!reveals.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px'
            });

            reveals.forEach(el => {
                el.classList.add('reveal--ready');
                observer.observe(el);
            });
        }
    };

    /* ============================================================
       5. SCROLL SPY (Navigation Highlighting)
       ============================================================ */
    const ScrollSpy = {
        init() {
            this.sections = document.querySelectorAll('section[id], footer[id]');
            this.navLinks = document.querySelectorAll('.navbar__link[href^="#"]');
            if (!this.sections.length || !this.navLinks.length) return;

            this.update();
        },

        update() {
            let current = '';
            this.sections.forEach(section => {
                const top = section.offsetTop - 150;
                if (window.scrollY >= top) {
                    current = section.getAttribute('id');
                }
            });

            this.navLinks.forEach(link => {
                link.classList.remove('navbar__link--active');
                const href = link.getAttribute('href');
                if (href && href.includes(current) && current) {
                    link.classList.add('navbar__link--active');
                }
            });
        }
    };

    /* ============================================================
       6. TOUR CARD TOGGLE
       ============================================================ */
    const TourCards = {
        init() {
            // Event delegation for tour headers to handle clicks dynamically
            document.addEventListener('click', (e) => {
                // If clicked inside tour-details on a button or link, don't close/toggle
                if (e.target.closest('.tour-details') && (e.target.closest('button') || e.target.closest('a') || e.target.closest('input'))) {
                    return;
                }
                const header = e.target.closest('.tour-header') || (e.target.closest('.tour-card') && !e.target.closest('.tour-details') ? e.target.closest('.tour-card').querySelector('.tour-header') : null);
                if (header) {
                    this.toggle(header);
                }
            });

            // Keep keydown for accessibility
            document.querySelectorAll('.tour-header').forEach(header => {
                header.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.toggle(header);
                    }
                });
            });

            // Expose globally as fallback
            window.toggleTour = (header) => this.toggle(header);
        },

        toggle(header) {
            const targetId = header.getAttribute('aria-controls');
            if (!targetId) return;
            const target = document.getElementById(targetId);
            if (!target) return;
            const card = header.closest('.tour-card');

            const isActive = target.classList.contains('active');

            // Close all
            document.querySelectorAll('.tour-details').forEach(d => {
                d.classList.remove('active');
                d.setAttribute('aria-hidden', 'true');
            });
            document.querySelectorAll('.tour-header').forEach(h => {
                h.setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.tour-card').forEach(c => {
                c.classList.remove('active');
            });

            // Open if was closed
            if (!isActive) {
                target.classList.add('active');
                target.setAttribute('aria-hidden', 'false');
                header.setAttribute('aria-expanded', 'true');
                if (card) card.classList.add('active');
            }
        }
    };

    /* ============================================================
       7. UNIVERSAL VIEWPORT MODALS & WHATSAPP BOOKING
       ============================================================ */
    // Universal Modal Body Scroll Lock Manager (Zero Jump)
    if (typeof window.lockModalBodyScroll !== 'function') {
        let _modalScrollY = 0;
        const _openModals = {};
        window.lockModalBodyScroll = function (id) {
            id = id || 'modal';
            const count = Object.keys(_openModals).length;
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
            id = id || 'modal';
            delete _openModals[id];
            if (Object.keys(_openModals).length === 0) {
                const scrollY = _modalScrollY;
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

    // Universal Escape key listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.keyCode === 27) {
            if (typeof window.closeBookingModal === 'function') {
                const bModal = document.getElementById('amtBookingModal');
                if (bModal && bModal.style.display !== 'none') window.closeBookingModal();
            }
            if (typeof window.closeTourPackagesModal === 'function') {
                const tModal = document.getElementById('tourPackagesModal');
                if (tModal && tModal.style.display !== 'none') window.closeTourPackagesModal();
            }
            if (typeof window.closeRateCardModal === 'function') {
                const rModal = document.getElementById('rateCardModal');
                if (rModal && rModal.style.display !== 'none') window.closeRateCardModal();
            }
        }
    });

    /* Helper: open booking modal with pre-filled context */
    function openBookingModal(tourName) {
        if (typeof window.openBookingModal === 'function') {
            window.openBookingModal(tourName || '');
            return;
        }
        const amtModal = document.getElementById('amtBookingModal');
        if (amtModal) {
            if (typeof window.lockModalBodyScroll === 'function') window.lockModalBodyScroll('amtBookingModal');
            amtModal.style.display = 'flex';
            amtModal.scrollTop = 0;
            return;
        }
        // FallbackWA
        const text = tourName
            ? `Hello! I want to book a taxi for *${tourName}*. Please share availability and fare.`
            : "Hello! I want to book a taxi. Please share availability.";
        window.open(`https://wa.me/919922882044?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    }

    window.bookWA = function () {
        const routeEl = document.getElementById('routeSelect');
        const route = routeEl ? routeEl.value : '';

        if (!route) {
            if (routeEl) {
                routeEl.style.borderColor = '#ef4444';
                routeEl.focus();
                setTimeout(() => { routeEl.style.borderColor = ''; }, 2000);
            }
            return;
        }

        // Pre-fill name/date into modal
        const nameEl = document.getElementById('userName');
        const dateEl = document.getElementById('travelDate');
        const modalName = document.getElementById('amtName');
        const modalDate = document.getElementById('amtDate');
        if (nameEl && modalName) modalName.value = nameEl.value.trim();
        if (dateEl && modalDate) modalDate.value = dateEl.value;

        if (window.openBookingModal) {
            window.openBookingModal(route);
        } else {
            openBookingModal(route);
        }
    };

    /* Quick WhatsApp for tours - routes through modal */
    window.tourWA = function (tourName) {
        if (typeof window.openBookingModal === 'function') {
            window.openBookingModal(tourName || '');
        } else {
            openBookingModal(tourName);
        }
    };

    /* Quick WhatsApp for destinations - routes through modal */
    window.destWA = function (destination) {
        if (typeof window.openBookingModal === 'function') {
            window.openBookingModal(destination || '');
        } else {
            openBookingModal(destination);
        }
    };

    /* Fixed union tariff booking - opens modal */
    window.offerRateWA = function () {
        if (typeof window.openBookingModal === 'function') {
            window.openBookingModal('');
        } else {
            openBookingModal('');
        }
    };

    /* ============================================================
       7.5 UNIVERSAL VIEWPORT MODALS (Tour Packages & Rate Card)
       ============================================================ */
    window.openTourPackagesModal = function (tourId) {
        let modal = document.getElementById('tourPackagesModal');
        if (!modal) {
            // Build modal DOM
            const db = window.TOUR_DATABASE;
            let toursList = '';
            if (db && db.tours) {
                toursList = db.tours.map(t => {
                    const pointsHtml = t.points && t.points.length ? `<div style="font-size: 0.8rem; color: var(--text-secondary, #64748b); margin: 6px 0 10px; line-height: 1.4;"><strong>Points:</strong> ${t.points.slice(0, 6).join(', ')}${t.points.length > 6 ? '...' : ''}</div>` : '';
                    return `
                    <div id="tp-card-${t.id}" style="background: var(--bg-secondary, #f8fafc); border: 1.5px solid var(--border-color, #e2e8f0); border-radius: 14px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                                <h4 style="margin: 0; font-size: 1rem; font-weight: 800; color: var(--text-primary, #0f172a);">${t.name}</h4>
                                <span style="background: #0891b2; color: #ffffff; font-weight: 800; font-size: 0.85rem; padding: 3px 8px; border-radius: 6px; white-space: nowrap;">₹${t.fare}</span>
                            </div>
                            <div style="font-size: 0.75rem; color: #0891b2; font-weight: 700; margin-top: 2px;">Duration: ${t.duration}</div>
                            ${pointsHtml}
                        </div>
                        <button type="button" onclick="window.closeTourPackagesModal(); if(window.openBookingModal){window.openBookingModal('${t.name}');}" class="btn btn--primary" style="width: 100%; padding: 9px 12px; font-size: 0.85rem; font-weight: 700; border-radius: 8px; margin-top: 8px;">
                            <i class="fa-solid fa-taxi"></i> Book This Tour (₹${t.fare})
                        </button>
                    </div>`;
                }).join('');
            } else {
                toursList = `
                <div style="text-align: center; padding: 20px;">
                    <button type="button" onclick="window.closeTourPackagesModal(); if(window.openBookingModal){window.openBookingModal('');}" class="btn btn--primary">
                        Open Instant Booking Engine
                    </button>
                </div>`;
            }

            const modalHtml = `
            <div id="tourPackagesModal" class="amt-modal-overlay" onclick="if(event.target===this) window.closeTourPackagesModal();">
                <div class="tour-packages-modal-card">
                    <div class="tour-packages-header">
                        <button class="modal-close-btn" onclick="window.closeTourPackagesModal();" aria-label="Close">&times;</button>
                        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #fbbf24; font-weight: 700;">Aryan Taxi Mahabaleshwar</div>
                        <div style="font-size: 1.25rem; font-weight: 800;">Official Taxi Tour Packages</div>
                        <p style="margin: 4px 0 0; font-size: 0.8rem; color: rgba(255,255,255,0.9);">100% Fixed Mahabaleshwar Taxi Union Tariffs • 4-Seater Mountain Cabs</p>
                    </div>
                    <div class="tour-packages-body">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
                            ${toursList}
                        </div>
                        <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary, #f8fafc); border-radius: 12px; text-align: center; border: 1px solid var(--border-color, #e2e8f0); font-size: 0.8rem; color: var(--text-secondary, #64748b);">
                            <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <strong>Zero Advance Required</strong> for Mahabaleshwar pickups. Pay driver directly after your tour.
                        </div>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            modal = document.getElementById('tourPackagesModal');
        }

        if (typeof window.lockModalBodyScroll === 'function') {
            window.lockModalBodyScroll('tourPackagesModal');
        }

        modal.style.display = 'flex';
        modal.scrollTop = 0;
        const card = modal.querySelector('.tour-packages-modal-card');
        if (card) card.scrollTop = 0;

        if (tourId) {
            setTimeout(() => {
                const targetCard = document.getElementById('tp-card-' + tourId);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetCard.style.outline = '2px solid #0891b2';
                    setTimeout(() => { targetCard.style.outline = ''; }, 2000);
                }
            }, 100);
        }
    };

    window.closeTourPackagesModal = function () {
        const modal = document.getElementById('tourPackagesModal');
        if (modal) modal.style.display = 'none';
        if (typeof window.unlockModalBodyScroll === 'function') {
            window.unlockModalBodyScroll('tourPackagesModal');
        }
    };

    window.openRateCardModal = function () {
        const modal = document.getElementById('rateCardModal');
        if (!modal) return;
        if (typeof window.lockModalBodyScroll === 'function') {
            window.lockModalBodyScroll('rateCardModal');
        }
        modal.style.display = 'flex';
        modal.scrollTop = 0;
        const inner = modal.firstElementChild;
        if (inner) inner.scrollTop = 0;
    };

    window.closeRateCardModal = function () {
        const modal = document.getElementById('rateCardModal');
        if (!modal) return;
        modal.style.display = 'none';
        if (typeof window.unlockModalBodyScroll === 'function') {
            window.unlockModalBodyScroll('rateCardModal');
        }
    };

    /* Rate Card Fullscreen Lightbox & Interactive Zoom Controller */
    let _rateCardZoom = 1;
    window.openRateCardLightbox = function () {
        const lb = document.getElementById('rateCardLightboxModal');
        if (!lb) return;
        if (typeof window.lockModalBodyScroll === 'function') {
            window.lockModalBodyScroll('rateCardLightboxModal');
        }
        lb.style.display = 'flex';
        window.resetRateCardZoom();
    };

    window.closeRateCardLightbox = function () {
        const lb = document.getElementById('rateCardLightboxModal');
        if (!lb) return;
        lb.style.display = 'none';
        if (typeof window.unlockModalBodyScroll === 'function') {
            window.unlockModalBodyScroll('rateCardLightboxModal');
        }
    };

    window.zoomRateCard = function (delta) {
        _rateCardZoom = Math.min(Math.max(_rateCardZoom + delta, 0.7), 2.5);
        const img = document.getElementById('rateCardLightboxImg');
        const levelText = document.getElementById('rateCardZoomLevel');
        if (img) {
            img.style.transform = `scale(${_rateCardZoom})`;
            img.style.transformOrigin = 'top center';
        }
        if (levelText) {
            levelText.textContent = Math.round(_rateCardZoom * 100) + '%';
        }
    };

    window.resetRateCardZoom = function () {
        _rateCardZoom = 1;
        const img = document.getElementById('rateCardLightboxImg');
        const levelText = document.getElementById('rateCardZoomLevel');
        if (img) {
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'top center';
        }
        if (levelText) {
            levelText.textContent = '100%';
        }
        const container = document.getElementById('rateCardLightboxContainer');
        if (container) {
            container.scrollTop = 0;
            container.scrollLeft = 0;
        }
    };

    // Global key listener for Rate Card Lightbox
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            const lb = document.getElementById('rateCardLightboxModal');
            if (lb && lb.style.display !== 'none') {
                window.closeRateCardLightbox();
            }
            const rc = document.getElementById('rateCardModal');
            if (rc && rc.style.display !== 'none') {
                window.closeRateCardModal();
            }
        }
    });

    /* Set route in booking form */
    window.setRoute = function (routeName) {
        const select = document.getElementById('routeSelect');
        if (!select) return;

        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text.includes(routeName) || select.options[i].value.includes(routeName)) {
                select.selectedIndex = i;
                select.style.borderColor = 'var(--primary)';
                select.style.background = 'var(--primary-50)';
                setTimeout(() => {
                    select.style.borderColor = '';
                    select.style.background = '';
                }, 1500);
                return;
            }
        }
    };

    /* ============================================================
       8. BACK TO TOP
       ============================================================ */
    const BackToTop = {
        init() {
            this.btn = document.querySelector('.back-to-top');
            if (!this.btn) return;

            this.btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },
        handleScroll(scrollY) {
            if (!this.btn) return;
            if (scrollY > 500) {
                this.btn.classList.add('visible');
            } else {
                this.btn.classList.remove('visible');
            }
        }
    };

    /* ============================================================
       9. CONTACT FORM (WhatsApp redirect)
       ============================================================ */
    window.submitInquiry = function (e) {
        if (e) e.preventDefault();

        const form = document.getElementById('inquiryForm');
        if (!form) return;

        const data = new FormData(form);
        const name = data.get('name') || '';
        const phone = data.get('phone') || '';
        const date = data.get('date') || '';
        const trip = data.get('trip') || '';
        const message = data.get('message') || '';

        let text = "Hello! I'd like to book a taxi.\n\n";
        if (name) text += `*Name:* ${name}\n`;
        if (phone) text += `*Phone:* ${phone}\n`;
        if (date) text += `*Date:* ${date}\n`;
        if (trip) text += `*Trip:* ${trip}\n`;
        if (message) text += `*Message:* ${message}\n`;
        text += "\nPlease confirm availability.";

        try {
            const webhookUrl = window.AMT_LEAD_WEBHOOK_URL || (typeof localStorage !== 'undefined' ? localStorage.getItem('amt_lead_webhook_url') : '') || 'https://script.google.com/macros/s/AKfycbyqsWM2u-X-dqLIkac9REiWQoA3KWyMnteZtHjlI3sNEQgdQk8JeT5-p7CW0T_TLA2s/exec';
            if (webhookUrl && typeof fetch !== 'undefined') {
                const payload = JSON.stringify({
                    bookingId: 'AMT-INQ-' + Date.now().toString().slice(-6),
                    name: name || 'Guest',
                    phone: phone || '',
                    date: date || '',
                    pickup: 'Website Inquiry',
                    tour: trip || 'General Inquiry',
                    notes: message || '',
                    status: 'pending',
                    timestamp: new Date().toISOString()
                });
                fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
                    body: payload
                }).catch(() => {});
            }
        } catch (err) {}

        const waUrl = `https://api.whatsapp.com/send?phone=919922882044&text=${encodeURIComponent(text)}`;
        const win = window.open(waUrl, '_blank', 'noopener');
        if (!win || win.closed || typeof win.closed === 'undefined') {
            window.location.href = waUrl;
        }
    };

    /* ============================================================
       10. LAZY LOAD IMAGES (Native + Fallback)
       ============================================================ */
    const LazyLoad = {
        init() {
            if ('loading' in HTMLImageElement.prototype) return; // Browser supports native lazy

            const images = document.querySelectorAll('img[loading="lazy"]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => observer.observe(img));
        }
    };

    /* ============================================================
       11. SET MINIMUM DATE ON DATE INPUTS
       ============================================================ */
    const DateInputs = {
        init() {
            const now = new Date();
            const yyyy = now.getFullYear();
            const mm = String(now.getMonth() + 1).padStart(2, '0');
            const dd = String(now.getDate()).padStart(2, '0');
            const today = `${yyyy}-${mm}-${dd}`;
            document.querySelectorAll('input[type="date"]').forEach(input => {
                if (!input.min) input.min = today;
                if (!input.value) input.value = today;
            });
        }
    };

    /* ============================================================
       12. GLOBAL SCROLL MANAGER
       ============================================================ */
    const ScrollManager = {
        init() {
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrollY = window.scrollY;
                        NavbarScroll.handleScroll(scrollY);
                        ScrollSpy.update();
                        BackToTop.handleScroll(scrollY);
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        }
    };

    /* ============================================================
       INITIALIZE ALL MODULES
       ============================================================ */
    function initAll() {
        ThemeManager.init();
        ActiveNavManager.init();
        MobileNav.init();
        NavbarScroll.init();
        ScrollReveal.init();
        ScrollSpy.init();
        TourCards.init();
        BackToTop.init();
        LazyLoad.init();
        DateInputs.init();
        ScrollManager.init();
        HeroTrustRotator.init();

        // Register Low-Signal Offline Service Worker
        if ('serviceWorker' in navigator && window.location.protocol.indexOf('http') === 0) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('sw.js').catch(function () {});
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

})();

