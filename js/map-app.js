// Aryan Taxi Mahabaleshwar — Interactive Sightseeing Map & Route Planner
// High-Reliability GIS Stack: Leaflet + Esri World Street Map (Zero API key watermark, 100% reliable)

let map;
let markersMap = {};
let markerLayer;
let itinerary = new Set();
let activeRoutePolyline = null;
let userMarker = null;

// Category design system
const CATEGORY_CONFIG = {
    viewpoint: { color: '#0284c7', icon: 'fa-mountain-sun', label: 'Viewpoint' },
    waterfall: { color: '#059669', icon: 'fa-water', label: 'Waterfall' },
    lake:      { color: '#ea580c', icon: 'fa-sailboat', label: 'Lake & Boating' },
    fort:      { color: '#b45309', icon: 'fa-chess-rook', label: 'Fort & Citadel' },
    heritage:  { color: '#7c3aed', icon: 'fa-gopuram', label: 'Temple & Heritage' },
    garden:    { color: '#db2777', icon: 'fa-seedling', label: 'Agro & Adventure' },
    hub:       { color: '#0f172a', icon: 'fa-taxi', label: 'Taxi Stand' }
};

document.addEventListener('DOMContentLoaded', () => {
    if (typeof L === 'undefined') {
        const mapEl = document.getElementById('map');
        if (mapEl) {
            mapEl.innerHTML = '<div style="padding:40px; text-align:center; color:#ef4444; font-family:sans-serif;"><h3>Map service is currently unavailable</h3><p>Please verify your internet connection.</p></div>';
        }
        initSidebar();
        initFilters();
        initSearch();
        initAiPlanner();
        return;
    }

    initMap();
    initSidebar();
    initFilters();
    initSearch();
    initNearby();
    initAiPlanner();
    initMobileDrawer();
    initBookButton();
    loadItinerary();
});

// --- MAP INITIALIZATION ---
function initMap() {
    const defaultCenter = [17.9250, 73.6800]; // Central Mahabaleshwar Plateau

    map = L.map('map', {
        center: defaultCenter,
        zoom: 12,
        zoomControl: false,
        maxZoom: 16,
        minZoom: 9
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    // High-Resolution Esri World Street Map (Native tiles up to zoom 16 across Western Ghats)
    const streetLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 16,
        maxNativeZoom: 16,
        minZoom: 9,
        attribution: 'Tiles &copy; Esri &mdash; Sources: Esri, USGS, NOAA'
    });

    // High-Resolution Esri World Imagery (Satellite view with detailed terrain & forest canopy)
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 16,
        maxNativeZoom: 16,
        minZoom: 9,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics'
    });

    streetLayer.addTo(map);

    // Layer switcher: Street Map and Satellite View
    L.control.layers({
        '🗺️ Street Map': streetLayer,
        '🛰️ Satellite View': satelliteLayer
    }, null, { position: 'topright', collapsed: true }).addTo(map);

    // Initialize markers (No cluster blobs hiding pins!)
    renderMarkers(window.PLACES_DATA);
}

// --- CREATE & UPDATE MARKERS ---
function renderMarkers(placesToDisplay) {
    if (markerLayer) {
        map.removeLayer(markerLayer);
        markerLayer.clearLayers();
    }

    // Direct FeatureGroup: EVERY pin is visible with its icon!
    markerLayer = L.featureGroup();
    markersMap = {};
    const bounds = [];

    placesToDisplay.forEach(place => {
        if (!place.lat || !place.lng) return;

        const isAdded = itinerary.has(place.id);
        const icon = createCustomIcon(place, isAdded);
        const marker = L.marker([place.lat, place.lng], { icon: icon });

        // Bind popup
        marker.bindPopup(buildPopupHtml(place), {
            maxWidth: 240,
            className: 'custom-map-popup'
        });

        // Hover tooltip
        marker.bindTooltip(`<b>${place.name}</b><br><small style="color:#0284c7;font-weight:600;">${place.tour}</small>`, {
            direction: 'top',
            offset: [0, -36],
            opacity: 0.95
        });

        marker.on('click', () => {
            highlightSidebarCard(place.id);
        });

        markersMap[place.id] = { marker, data: place };
        markerLayer.addLayer(marker);
        bounds.push([place.lat, place.lng]);
    });

    map.addLayer(markerLayer);

    // Auto-fit bounds to displayed markers
    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }
}

function createCustomIcon(place, isAdded) {
    const cfg = CATEGORY_CONFIG[place.category] || { color: '#0284c7', icon: 'fa-location-dot' };
    const pinColor = isAdded ? '#16a34a' : cfg.color;
    const pinIcon = isAdded ? 'fa-check' : cfg.icon;

    return L.divIcon({
        className: 'map-marker-pin-wrap',
        html: `
            <div class="map-pin ${isAdded ? 'is-added' : ''}" style="background-color: ${pinColor};">
                <i class="fa-solid ${pinIcon}"></i>
            </div>
            <div class="map-pin-shadow"></div>
        `,
        iconSize: [36, 42],
        iconAnchor: [18, 40],
        popupAnchor: [0, -38]
    });
}

function updateMarkerIcon(placeId) {
    if (markersMap[placeId]) {
        const { marker, data } = markersMap[placeId];
        const isAdded = itinerary.has(placeId);
        marker.setIcon(createCustomIcon(data, isAdded));
        if (marker.isPopupOpen()) {
            marker.setPopupContent(buildPopupHtml(data));
        }
    }
}

function buildPopupHtml(place) {
    const isAdded = itinerary.has(place.id);
    return `
        <div class="map-popup-inner">
            <img src="${place.img}" alt="${place.name}" loading="lazy" onerror="this.src='images/mahabaleshwar.jpg'" class="popup-img">
            <div class="popup-body">
                <div style="font-size:0.72rem; font-weight:700; color:#0284c7; text-transform:uppercase; margin-bottom:2px;">${place.tour}</div>
                <h4 class="popup-title">${place.name}</h4>
                <p style="font-size:0.8rem; line-height:1.4; color:#64748b; margin:0 0 10px 0;">${place.desc}</p>
                <button onclick="window.toggleItinerary('${place.id}')" class="btn" style="width:100%; padding:8px 12px; font-size:0.82rem; font-weight:700; border-radius:6px; cursor:pointer; background:${isAdded ? '#16a34a' : '#0891b2'}; color:#ffffff; border:none; display:flex; align-items:center; justify-content:center; gap:6px; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                    <i class="fa-solid ${isAdded ? 'fa-check' : 'fa-plus'}"></i> ${isAdded ? 'Added in Route' : 'Add to Plan'}
                </button>
            </div>
        </div>
    `;
}

// --- SIDEBAR MANAGEMENT ---
function initSidebar() {
    renderSidebarList(window.PLACES_DATA);
}

function renderSidebarList(places) {
    const container = document.getElementById('locationsList');
    if (!container) return;
    container.innerHTML = '';

    if (places.length === 0) {
        container.innerHTML = `
            <div style="padding:30px 15px; text-align:center; color:#94a3b8;">
                <i class="fa-solid fa-map-location-dot" style="font-size:2rem; margin-bottom:10px; color:#cbd5e1;"></i>
                <p style="margin:0; font-weight:600;">No attractions match your filter.</p>
                <button onclick="resetAllFilters()" style="margin-top:10px; background:none; border:1px solid #0891b2; color:#0891b2; border-radius:20px; padding:4px 12px; font-size:0.75rem; cursor:pointer;">Reset Filters</button>
            </div>
        `;
        return;
    }

    places.forEach(place => {
        const isAdded = itinerary.has(place.id);
        const distanceStr = place.dist && place.dist < 999999 ?
            `<div style="font-size:0.75rem; color:#0891b2; font-weight:700; margin-bottom:4px;">
                <i class="fa-solid fa-route"></i> ${(place.dist / 1000).toFixed(1)} km away
            </div>` : '';

        const card = document.createElement('div');
        card.className = `location-card ${isAdded ? 'card-added' : ''}`;
        card.id = 'card-' + place.id;
        card.innerHTML = `
            <img src="${place.img}" alt="${place.name}" loading="lazy" onerror="this.src='images/mahabaleshwar.jpg'">
            <div class="loc-details">
                <span class="badge ${place.badge || 'b-tour1'}">${place.tour}</span>
                ${distanceStr}
                <h3>${place.name}</h3>
                <p>${place.desc}</p>
            </div>
            <button class="add-to-plan ${isAdded ? 'added' : ''}" onclick="window.toggleItinerary('${place.id}', event)" title="${isAdded ? 'Remove from plan' : 'Add to route'}">
                <i class="fa-solid ${isAdded ? 'fa-check' : 'fa-plus'}"></i> ${isAdded ? 'Added' : 'Add'}
            </button>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-plan')) return;
            focusPlaceOnMap(place.id);
        });

        container.appendChild(card);
    });
}

function focusPlaceOnMap(placeId) {
    highlightSidebarCard(placeId);

    if (markersMap[placeId]) {
        const { marker } = markersMap[placeId];
        const latLng = marker.getLatLng();

        map.setView(latLng, 15);
        marker.openPopup();

        // On mobile, close sidebar drawer so map is visible
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth <= 968 && sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            const mobileBtn = document.getElementById('mobileMapBtn');
            if (mobileBtn) mobileBtn.innerHTML = '<i class="fa-solid fa-list"></i> Show List';
        }
    }
}

function highlightSidebarCard(placeId) {
    document.querySelectorAll('.location-card').forEach(c => c.classList.remove('active'));
    const card = document.getElementById('card-' + placeId);
    if (card) {
        card.classList.add('active');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// --- FILTERS & SEARCH SYNCHRONIZATION ---
function initFilters() {
    const tourFilter = document.getElementById('tourFilter');
    const catButtons = document.querySelectorAll('.category-filters .badge');

    if (tourFilter) {
        tourFilter.addEventListener('change', () => {
            applyFilters();
        });
    }

    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => {
                b.style.background = 'white';
                b.style.color = '#475569';
            });

            const cat = btn.dataset.cat;
            btn.style.background = cat === 'all' ? 'var(--primary, #0891b2)' : (btn.style.borderColor || '#0891b2');
            btn.style.color = 'white';

            const filtersContainer = document.getElementById('categoryFilters');
            if (filtersContainer) {
                filtersContainer.dataset.active = cat;
            }
            applyFilters();
        });
    });
}

function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            applyFilters();
        }, 200);
    });
}

function applyFilters() {
    const filtered = getFilteredPlaces();
    renderSidebarList(filtered);
    renderMarkers(filtered);
}

function getFilteredPlaces() {
    const tourEl = document.getElementById('tourFilter');
    const tour = tourEl ? tourEl.value : 'all';

    const catEl = document.getElementById('categoryFilters');
    const cat = catEl && catEl.dataset.active ? catEl.dataset.active : 'all';

    const searchEl = document.getElementById('searchInput');
    const query = (searchEl ? searchEl.value : '').trim().toLowerCase();

    return window.PLACES_DATA.filter(p => {
        const matchTour = tour === 'all' || p.tour === tour;
        const matchCat = cat === 'all' || p.category === cat;
        const matchQuery = !query ||
            p.name.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query) ||
            p.tour.toLowerCase().includes(query);

        return matchTour && matchCat && matchQuery;
    });
}

window.resetAllFilters = function() {
    const tourEl = document.getElementById('tourFilter');
    if (tourEl) tourEl.value = 'all';

    const catEl = document.getElementById('categoryFilters');
    if (catEl) catEl.dataset.active = 'all';

    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.value = '';

    const catButtons = document.querySelectorAll('.category-filters .badge');
    catButtons.forEach(b => {
        if (b.dataset.cat === 'all') {
            b.style.background = 'var(--primary, #0891b2)';
            b.style.color = 'white';
        } else {
            b.style.background = 'white';
            b.style.color = '#475569';
        }
    });

    applyFilters();
};

// --- NEARBY ME (GEOLOCATION) ---
function initNearby() {
    const btn = document.getElementById('btnNearby');
    if (!btn) return;

    btn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
            return;
        }

        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Locating...';

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const userLoc = L.latLng(pos.coords.latitude, pos.coords.longitude);

                if (userMarker) {
                    map.removeLayer(userMarker);
                }

                userMarker = L.circleMarker(userLoc, {
                    radius: 8,
                    fillColor: '#2563eb',
                    color: '#ffffff',
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.9
                }).addTo(map).bindTooltip("<b>You Are Here</b>", { permanent: true, direction: 'top', offset: [0, -10] });

                map.setView(userLoc, 13);

                // Compute distances
                window.PLACES_DATA.forEach(p => {
                    if (p.lat && p.lng) {
                        p.dist = map.distance(userLoc, L.latLng(p.lat, p.lng));
                    } else {
                        p.dist = 999999;
                    }
                });

                window.PLACES_DATA.sort((a, b) => a.dist - b.dist);

                const tourEl = document.getElementById('tourFilter');
                if (tourEl) tourEl.value = 'all';

                const catEl = document.getElementById('categoryFilters');
                if (catEl) catEl.dataset.active = 'all';

                const searchEl = document.getElementById('searchInput');
                if (searchEl) searchEl.value = '';

                renderSidebarList(window.PLACES_DATA);
                renderMarkers(window.PLACES_DATA);

                btn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Nearby Me';
            },
            () => {
                alert('Could not access your location. Please check browser location permissions.');
                btn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Nearby Me';
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    });
}

// --- ITINERARY & CUSTOM ROUTE PLANNER ---
window.toggleItinerary = function(placeId, event) {
    if (event && event.stopPropagation) {
        event.stopPropagation();
    }

    if (itinerary.has(placeId)) {
        itinerary.delete(placeId);
    } else {
        itinerary.add(placeId);
    }

    saveItinerary();
    updateItineraryUI();
    updateMarkerIcon(placeId);

    // Update sidebar card button
    const card = document.getElementById('card-' + placeId);
    if (card) {
        const btn = card.querySelector('.add-to-plan');
        const isAdded = itinerary.has(placeId);
        if (btn) {
            btn.className = `add-to-plan ${isAdded ? 'added' : ''}`;
            btn.innerHTML = isAdded ? '<i class="fa-solid fa-check"></i> Added' : '<i class="fa-solid fa-plus"></i> Add';
        }
        if (isAdded) {
            card.classList.add('card-added');
        } else {
            card.classList.remove('card-added');
        }
    }
};

function saveItinerary() {
    try {
        localStorage.setItem('mahabaleshwar_custom_itinerary_v3', JSON.stringify(Array.from(itinerary)));
    } catch (e) {
        // Storage restricted
    }
}

function loadItinerary() {
    try {
        const saved = localStorage.getItem('mahabaleshwar_custom_itinerary_v3') || localStorage.getItem('mahabaleshwar_itinerary_v2');
        if (saved) {
            const arr = JSON.parse(saved);
            if (Array.isArray(arr)) {
                itinerary = new Set(arr);
                updateItineraryUI();
            }
        }
    } catch (e) {
        // Safe fallback
    }
}

function updateItineraryUI() {
    const drawer = document.getElementById('itineraryDrawer');
    const badge = document.getElementById('itBadge');
    const list = document.getElementById('itStopsList');

    if (!drawer || !badge || !list) return;

    if (itinerary.size === 0) {
        drawer.classList.remove('active');
        if (activeRoutePolyline) {
            map.removeLayer(activeRoutePolyline);
            activeRoutePolyline = null;
        }
        const distEl = document.getElementById('itDist');
        const timeEl = document.getElementById('itTime');
        if (distEl) distEl.innerText = '0 km';
        if (timeEl) timeEl.innerText = '0 mins';
        return;
    }

    drawer.classList.add('active');
    badge.innerText = `${itinerary.size} Stop${itinerary.size > 1 ? 's' : ''}`;
    list.innerHTML = '';

    const waypoints = [];
    const orderedIds = Array.from(itinerary);

    orderedIds.forEach((id, index) => {
        const place = window.PLACES_DATA.find(p => p.id === id);
        if (!place) return;

        const stopEl = document.createElement('div');
        stopEl.className = 'it-stop-item';
        stopEl.innerHTML = `
            <span style="display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:#0891b2; color:white; font-size:0.7rem; font-weight:700;">${index + 1}</span>
            <span style="flex:1; font-weight:600; font-size:0.85rem; color:#1e293b; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${place.name}</span>
            <button onclick="window.toggleItinerary('${id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; padding:4px;" title="Remove stop">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        list.appendChild(stopEl);

        if (place.lat && place.lng) {
            waypoints.push({ lat: place.lat, lng: place.lng, name: place.name });
        }
    });

    drawRoute(waypoints);
}

// Resilient Route Calculation (Offline/Ghat aware with OSRM fallback)
function drawRoute(waypoints) {
    if (activeRoutePolyline) {
        map.removeLayer(activeRoutePolyline);
        activeRoutePolyline = null;
    }

    const distEl = document.getElementById('itDist');
    const timeEl = document.getElementById('itTime');

    if (waypoints.length < 2) {
        if (distEl) distEl.innerText = '0 km';
        if (timeEl) timeEl.innerText = '0 mins';
        return;
    }

    // Always compute accurate baseline distance via Haversine + Mountain Winding Factor
    let straightKm = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
        straightKm += haversineDistance(
            waypoints[i].lat, waypoints[i].lng,
            waypoints[i + 1].lat, waypoints[i + 1].lng
        );
    }

    // Western Ghats mountain road winding factor (real road distance is ~1.42x straight line)
    const estimatedRoadKm = Math.round(straightKm * 1.42 * 10) / 10;
    // Average mountain driving speed: 25 km/h + 15 mins sightseeing buffer per stop
    const drivingMins = Math.round((estimatedRoadKm / 25) * 60) + ((waypoints.length - 1) * 15);

    // Immediately display estimated metrics so user never waits with 0 km
    if (distEl) distEl.innerText = `${estimatedRoadKm} km`;
    if (timeEl) timeEl.innerText = `${drivingMins} mins`;

    // Try fetching driving polyline from OSRM
    const coordsStr = waypoints.map(w => `${w.lng},${w.lat}`).join(';');
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${coordsStr}?overview=full&geometries=geojson`;

    fetch(osrmUrl)
        .then(res => {
            if (!res.ok) throw new Error('OSM router unavailable');
            return res.json();
        })
        .then(data => {
            if (data.routes && data.routes.length > 0) {
                const route = data.routes[0];
                const realDistKm = (route.distance / 1000).toFixed(1);
                const realTimeMins = Math.round(route.duration / 60);

                if (distEl) distEl.innerText = `${realDistKm} km`;
                if (timeEl) timeEl.innerText = `${realTimeMins} mins`;

                const latLngs = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
                activeRoutePolyline = L.polyline(latLngs, {
                    color: '#0284c7',
                    weight: 6,
                    opacity: 0.85,
                    lineJoin: 'round'
                }).addTo(map);

                map.fitBounds(activeRoutePolyline.getBounds(), { padding: [50, 50], maxZoom: 14 });
            } else {
                drawDirectPolyline(waypoints);
            }
        })
        .catch(() => {
            // Instant smooth polyline fallback if OSRM is rate-limited or offline
            drawDirectPolyline(waypoints);
        });
}

function drawDirectPolyline(waypoints) {
    const latLngs = waypoints.map(w => [w.lat, w.lng]);
    activeRoutePolyline = L.polyline(latLngs, {
        color: '#0891b2',
        weight: 5,
        opacity: 0.8,
        dashArray: '8, 8',
        lineJoin: 'round'
    }).addTo(map);

    map.fitBounds(activeRoutePolyline.getBounds(), { padding: [50, 50], maxZoom: 14 });
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(val) {
    return (val * Math.PI) / 180;
}

// --- BOOK ITINERARY (WHATSAPP INTEGRATION) ---
function initBookButton() {
    const bookBtn = document.getElementById('bookItineraryBtn');
    if (!bookBtn) return;

    bookBtn.addEventListener('click', () => {
        const orderedIds = Array.from(itinerary);
        if (orderedIds.length === 0) {
            alert('Please add at least one sightseeing point to your route first!');
            return;
        }

        const routeNames = [];
        orderedIds.forEach((id, index) => {
            const place = window.PLACES_DATA.find(p => p.id === id);
            if (place) {
                routeNames.push(`${index + 1}. ${place.name} (${place.tour})`);
            }
        });

        const distEl = document.getElementById('itDist');
        const timeEl = document.getElementById('itTime');
        const dist = distEl ? distEl.innerText : 'Calculated on request';
        const time = timeEl ? timeEl.innerText : 'Calculated on request';

        const msg =
            `Hello Aryan Taxi Mahabaleshwar! 🚖\n\n` +
            `I planned a custom sightseeing route on your interactive map:\n\n` +
            `🗺️ *My Selected Route:*\n${routeNames.join('\n')}\n\n` +
            `📏 *Estimated Distance:* ${dist}\n` +
            `⏱️ *Estimated Tour Time:* ${time}\n\n` +
            `✅ Official Union Rate accepted. Pay driver directly after trip.\n` +
            `👉 Please share the taxi fare and confirm cab availability!`;

        window.open(`https://wa.me/919922882044?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

// --- MOBILE DRAWER TRIGGER ---
function initMobileDrawer() {
    const mobileBtn = document.getElementById('mobileMapBtn');
    const sidebar = document.getElementById('sidebar');
    const dragHandle = document.getElementById('mobileDragHandle');

    if (!mobileBtn || !sidebar) return;

    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        const isOpen = sidebar.classList.contains('open');
        mobileBtn.innerHTML = isOpen ?
            '<i class="fa-solid fa-map"></i> View Map' :
            '<i class="fa-solid fa-list"></i> Show List';
    });

    if (dragHandle) {
        dragHandle.addEventListener('click', () => {
            sidebar.classList.remove('open');
            mobileBtn.innerHTML = '<i class="fa-solid fa-list"></i> Show List';
        });
    }
}

// --- AI PLANNER INTEGRATION ---
function initAiPlanner() {
    const btnOpen = document.getElementById('btnAiPlan');
    const drawer = document.getElementById('aiDrawer');
    const btnClose = document.getElementById('closeAiBtn');
    const btnSubmit = document.getElementById('submitAiBtn');

    if (!btnOpen || !drawer) return;

    btnOpen.addEventListener('click', () => {
        drawer.style.display = 'block';
    });

    if (btnClose) {
        btnClose.addEventListener('click', () => {
            drawer.style.display = 'none';
        });
    }

    if (btnSubmit) {
        btnSubmit.addEventListener('click', async () => {
            const promptEl = document.getElementById('aiPrompt');
            const prompt = promptEl ? promptEl.value.trim() : '';
            if (!prompt) return;

            const loadingEl = document.getElementById('aiLoading');
            const responseEl = document.getElementById('aiResponse');

            if (loadingEl) loadingEl.style.display = 'block';
            if (responseEl) responseEl.innerHTML = '';
            btnSubmit.disabled = true;

            try {
                const response = await generateAiPlan(prompt);
                if (responseEl) {
                    responseEl.innerHTML = `<strong style="color:#16a34a;"><i class="fa-solid fa-circle-check"></i> Custom Route Ready!</strong><br><span style="font-size:0.8rem; color:#475569;">${response.reasoning}</span>`;
                }

                itinerary.clear();
                response.itineraryIds.forEach(id => itinerary.add(id));
                saveItinerary();
                updateItineraryUI();
                applyFilters();
            } catch (e) {
                if (responseEl) {
                    responseEl.innerHTML = '<span style="color:#ef4444;">Could not connect to AI engine. Loaded popular default points instead.</span>';
                }
                itinerary.clear();
                itinerary.add('p1');  // Arthur's Seat
                itinerary.add('p9');  // Lingmala Waterfall
                itinerary.add('p10'); // Venna Lake
                itinerary.add('p12'); // Bombay Point Sunset
                saveItinerary();
                updateItineraryUI();
                applyFilters();
            } finally {
                if (loadingEl) loadingEl.style.display = 'none';
                btnSubmit.disabled = false;
            }
        });
    }
}

async function generateAiPlan(prompt) {
    return new Promise(resolve => {
        setTimeout(() => {
            const p = prompt.toLowerCase();
            let ids = [];
            let reason = '';

            if (p.includes('waterfall') || p.includes('monsoon')) {
                ids = ['p9', 'p10', 'p19']; // Lingmala, Venna, Mapro
                reason = "Built a scenic nature trail: Lingmala Waterfall early in the morning, boat ride at Venna Lake, and fresh strawberry refreshments at Mapro Garden.";
            } else if (p.includes('sunset') || p.includes('sunrise') || p.includes('evening')) {
                ids = ['p11', 'p10', 'p12']; // Wilson Point, Venna Lake, Bombay Point
                reason = "Golden hours itinerary: Sunrise at Wilson Point, midday stroll by Venna Lake, and closing the day with a spectacular sunset at Bombay Point.";
            } else if (p.includes('pratapgad') || p.includes('fort') || p.includes('history')) {
                ids = ['p13', 'p14', 'p15']; // Pratapgad, Bhavani Temple, Par Mandir
                reason = "Historical heritage circuit: Shivaji Maharaj's majestic Pratapgad mountain fort, Bhavani Mata temple, and historic Par village.";
            } else if (p.includes('panchgani') || p.includes('table land')) {
                ids = ['p16', 'p17', 'p18', 'p19']; // Table Land, Parsi Point, Sydney Point, Mapro
                reason = "Complete Panchgani circuit: Asia's 2nd largest Table Land plateau, Parsi Point valley views, Sydney Point, and Mapro Garden.";
            } else {
                ids = ['p1', 'p2', 'p3', 'p4', 'p10']; // Arthur's, Elephant's Head, Kate's, Panchganga, Venna
                reason = "Classic Mahabaleshwar Darshan: High valley viewpoints at Arthur's Seat & Kate's Point, ancient 5-river Panchganga Temple, and Venna Lake.";
            }

            resolve({ itineraryIds: ids, reasoning: reason });
        }, 800);
    });
}
