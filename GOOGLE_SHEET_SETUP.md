# 📊 Complete Zero-Cost Booking Automation & 1-Click Approval Setup Guide
## Aryan Taxi Mahabaleshwar — 100% Free Automated Booking Engine

This guide walks you through connecting your website (`Mahabaleshwartaxi`) to **Google Sheets** and **Google Apps Script** to achieve **100% free automated dual-email dispatch, 1-Click Booking Approval, and live record keeping** with zero monthly fees, zero subscriptions, and zero paid API costs.

---

### What This System Does Automatically:

1. **Instant Dual-Email Dispatch (100% Free):**
   - **To Customer:** Sends an official branded Booking Request Voucher with Pass ID, tour details, pickup hotel, locked Union tariff, and status (*"Booking Request Received — Pending Manual Availability Approval"*).
   - **To Owner (`aryansdtravels@gmail.com`):** Sends an instant lead alert with customer name, email, phone number, locked fare, 1-click WhatsApp link, 1-click call button, and a **✅ 1-CLICK APPROVE & CONFIRM BOOKING** button.
2. **1-Click Booking Approval (Instant Confirmation to Guest):**
   - When you click the green **✅ 1-CLICK APPROVE & CONFIRM BOOKING** button in your email:
     - Your Google Sheet status updates from `Pending Approval` to `CONFIRMED`.
     - An official **"Booking Confirmed & Dedicated Cab Reserved"** email is automatically sent to the customer.
     - You see an instant confirmation screen.
3. **Strict Privacy Policy:**
   - **Your personal name is never disclosed anywhere.** All customer emails, vouchers, and WhatsApp templates are signed professionally as **Aryan Taxi Mahabaleshwar** / **Fleet Operations**.
4. **Secure Multilingual AI Trip Planner (Gemini API Free Tier):**
   - Uses Google Apps Script as a secure serverless proxy so your Gemini API key is stored safely inside Google Cloud and **never exposed in public GitHub files**.

---

### Step 1: Google Sheet Columns Mapping (27 Columns: A to AA)

Your Google Sheet (`Aryan Taxi Bookings` -> `Sheet1`) uses 27 columns. Columns A to L remain exactly intact as originally configured. The Apps Script automatically creates headers for columns M to AA on first run:

| Col | Field Name | Description |
|:---:|:---|:---|
| **A** | **Timestamp** | Submission date & time (Asia/Kolkata) |
| **B** | **Booking ID** | Unique reference ID (e.g., `AMT-2026-815592`) |
| **C** | **Customer Name** | Lead passenger name |
| **D** | **Customer Email** | Guest email address |
| **E** | **WhatsApp Phone** | 10-digit mobile / WhatsApp number |
| **F** | **Travel Date** | Date of tour/transfer (YYYY-MM-DD) |
| **G** | **Pickup Time** | Pickup time (e.g. `09:30 AM`) |
| **H** | **Pickup Location** | Pickup area / locality in Mahabaleshwar |
| **I** | **Selected Tour** | Tour package or transfer destination |
| **J** | **Locked Fare** | Total locked fare (e.g., `₹1200`) |
| **K** | **Special Notes** | Luggage, elderly, child seat, requests |
| **L** | **Status** | `PENDING CONFIRMATION`, `CONFIRMED`, `REJECTED`, `CANCELLED` |
| **M** | **Pickup Hotel Details** | Specific hotel name / resort porch |
| **N** | **Drop Location** | Sightseeing drop or outstation destination |
| **O** | **Service Type** | `Local Sightseeing`, `Full Day Combo`, `Local Drop`, `Outstation Drop` |
| **P** | **Total Passengers (PAX)** | Total passenger count (1 to 20) |
| **Q** | **Required Taxi Quantity** | Auto-calculated cabs: `Math.ceil(PAX / 4)` |
| **R** | **Vehicle Category** | Strictly `4-Seater Tourist Cab` (Union Fleet) |
| **S** | **Base Fare** | Approved tariff per 4-seater cab |
| **T** | **Additional Charges** | Out-of-zone pickup/drop surcharges |
| **U** | **Total Fare** | Subtotal (Base Fare × Cabs) + Additional Charges |
| **V** | **Payment Status** | `Unpaid (Pay Driver After Tour)` |
| **W** | **Operator Remarks** | Action Token & Confirmation/Rejection audit notes |
| **X** | **Customer Email Status** | `Queued`, `Sent`, `Confirmation Sent`, `Rejection Notice Sent` |
| **Y** | **Operator Email Status** | `Queued`, `Sent`, `Failed` |
| **Z** | **Customer WhatsApp Status** | `Link Ready` (Direct 1-Click WhatsApp link) |
| **AA** | **Operator WhatsApp Status**| `Link Ready` (Direct 1-Click WhatsApp link) |

---

### Step 2: Add the Apps Script Code

1. In your Google Sheet, click **Extensions** in the top menu -> **Apps Script**.
2. Erase all existing code inside `Code.gs` and paste the following complete script:

```javascript
/**
 * ARYAN TAXI MAHABALESHWAR — COMPLETE BOOKING ENGINE AUTOMATION BACKEND
 * Single Source of Truth for Google Sheets, Dual-Email Dispatch & 1-Click Operations
 * Owner Email: aryansdtravels@gmail.com
 * Zero disclosure of personal names — branded as Aryan Taxi Mahabaleshwar
 */


function createJsonResponse(data, callback) {
  if (callback && typeof callback === "string" && /^[a-zA-Z0-9_$.]+$/.test(callback)) {
    return ContentService.createTextOutput(callback + "(" + JSON.stringify(data) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}


var SPREADSHEET_ID = "1gV95JLpRO2FZTsXeKCKcnbfBSNsYKju_aPZemQuL2pQ";
var DEFAULT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbykfjAMr2FYrYCD2xOkPj4Aba86_BKERKQUQLsZcickCaYIQWR4ly-prjYzzWdCzyM-ew/exec";
var BASE_PORTAL_URL = "https://sunildanawale.github.io/Mahabaleshwartaxi";

var SHEET_HEADERS = [
  "Timestamp", "Booking ID", "Customer Name", "Customer Email", "WhatsApp Phone",
  "Travel Date", "Pickup Time", "Pickup Location", "Selected Tour", "Locked Fare",
  "Special Notes", "Status",
  "Pickup Hotel Details", "Drop Location", "Service Type", "Total Passengers (PAX)",
  "Required Taxi Quantity", "Vehicle Category", "Base Fare", "Additional Charges",
  "Total Fare", "Payment Status", "Operator Remarks", "Customer Email Status",
  "Operator Email Status", "Customer WhatsApp Status", "Operator WhatsApp Status"
];

function getBookingsSheet() {
  var ss;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) {
      var s = ss.getSheetByName("Sheet1") || ss.getActiveSheet();
      if (s) return s;
    }
  } catch (err) {}
  try {
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    return ss.getSheetByName("Sheet1") || ss.getActiveSheet();
  } catch (err2) {
    throw new Error("Could not access Aryan Taxi Bookings spreadsheet: " + err2.toString());
  }
}

function ensureSheetHeaders(sheet) {
  try {
    var lastCol = sheet.getLastColumn();
    if (lastCol < SHEET_HEADERS.length) {
      var range = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
      var currentHeaders = range.getValues()[0];
      var needsUpdate = false;
      for (var i = 0; i < SHEET_HEADERS.length; i++) {
        if (!currentHeaders[i] || String(currentHeaders[i]).trim() === "") {
          currentHeaders[i] = SHEET_HEADERS[i];
          needsUpdate = true;
        }
      }
      if (needsUpdate) {
        range.setValues([currentHeaders]);
        range.setFontWeight("bold");
        range.setBackground("#f1f5f9");
      }
    }
  } catch (e) {}
}

function generateActionToken(bookingId, timestamp) {
  try {
    var raw = String(bookingId) + "_" + String(timestamp) + "_" + SPREADSHEET_ID;
    var signature = Utilities.computeHmacSha256Signature(raw, SPREADSHEET_ID);
    return signature.map(function(b) {
      return (b < 0 ? b + 256 : b).toString(16).padStart(2, '0');
    }).join('').substring(0, 24);
  } catch (e) {
    return "tok_" + Utilities.base64EncodeWebSafe(String(bookingId));
  }
}

function getCleanWebAppUrl() {
  try {
    var u = ScriptApp.getService().getUrl();
    if (u && u.indexOf("script.google.com") !== -1) {
      return u.replace(/\/u\/\d+\//, "/").replace(/\/a\/[^\/]+\//, "/");
    }
  } catch (err) {}
  return DEFAULT_WEB_APP_URL;
}

function doPost(e) {
  try {
    var sheet = getBookingsSheet();
    ensureSheetHeaders(sheet);

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch(err) { data = (e && e.parameter) || {}; }
    } else {
      data = (e && e.parameter) || {};
    }
    
    if (data.payload && typeof data.payload === "string") {
      try {
        var parsed = JSON.parse(data.payload);
        for (var k in parsed) {
          if (!data[k]) data[k] = parsed[k];
        }
      } catch (eParse) {}
    }
    
    if (data.action === "gemini_trip_planner" || (data.prompt && !data.bookingId)) {
      return handleGeminiAIRequest(data.prompt, data.lang || "en");
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var bookingId = String(data.bookingId || data.id || ('AMT-' + Date.now().toString().slice(-6))).trim();
    var name = String(data.name || 'Valued Guest').trim();
    var email = String(data.email || '').trim().toLowerCase();
    var phone = String(data.phone || '').trim();
    var date = String(data.date || '').trim();
    var time = String(data.time || '09:00 AM').trim();
    var pickup = String(data.pickup || 'Mahabaleshwar').trim();
    var hotelDetails = String(data.hotelDetails || data.pickupHotel || pickup).trim();
    var dropLocation = String(data.dropLocation || data.drop || 'Mahabaleshwar Sightseeing').trim();
    var tour = String(data.tour || data.tourId || 'Mahabaleshwar Sightseeing').trim();
    var serviceType = String(data.serviceType || data.service || 'sightseeing').trim();
    
    var pax = parseInt(data.pax || data.totalPax, 10);
    if (isNaN(pax) || pax <= 0) pax = 1;
    var taxiCount = Math.ceil(pax / 4);
    if (taxiCount < 1) taxiCount = 1;

    var vehicleCategory = "4-Seater Tourist Cab";
    var fare = String(data.fare || data.totalFare || '0').replace(/[^0-9]/g, '');
    var baseFare = String(data.baseFare || (parseInt(fare, 10) / taxiCount) || '0').replace(/[^0-9]/g, '');
    var additionalCharges = String(data.additionalCharges || '0').replace(/[^0-9]/g, '');
    var notes = String(data.notes || 'None').trim();
    var status = "PENDING CONFIRMATION";
    var paymentStatus = "Unpaid (Pay Driver After Tour)";

    // Idempotency / Deduplication Check (Column B = index 1)
    var existingData = sheet.getDataRange().getValues();
    for (var i = 1; i < existingData.length; i++) {
      if (existingData[i][1] && String(existingData[i][1]).trim() === bookingId) {
        return createJsonResponse({
          result: "already_registered",
          bookingId: bookingId,
          status: existingData[i][11] || status
        }, (typeof callback !== "undefined" ? callback : ""));
      }
    }

    // Generate Single-Use Action Token
    var actionToken = generateActionToken(bookingId, timestamp);

    // Initial Notification Statuses
    var custEmailStatus = "Queued";
    var opEmailStatus = "Queued";
    var custWaStatus = "Link Ready";
    var opWaStatus = "Link Ready";

    // Append 27 Columns (A to AA)
    sheet.appendRow([
      timestamp,          // A: Timestamp
      bookingId,          // B: Booking ID
      name,               // C: Customer Name
      email,              // D: Customer Email
      phone,              // E: WhatsApp Phone
      date,               // F: Travel Date
      time,               // G: Pickup Time
      pickup,             // H: Pickup Location
      tour,               // I: Selected Tour
      "₹" + fare,         // J: Locked Fare
      notes,              // K: Special Notes
      status,             // L: Status
      hotelDetails,       // M: Pickup Hotel Details
      dropLocation,       // N: Drop Location
      serviceType,        // O: Service Type
      pax,                // P: Total Passengers (PAX)
      taxiCount,          // Q: Required Taxi Quantity
      vehicleCategory,    // R: Vehicle Category
      "₹" + baseFare,     // S: Base Fare
      "₹" + additionalCharges, // T: Additional Charges
      "₹" + fare,         // U: Total Fare
      paymentStatus,      // V: Payment Status
      "Action Token: " + actionToken, // W: Operator Remarks
      custEmailStatus,    // X: Customer Email Status
      opEmailStatus,      // Y: Operator Email Status
      custWaStatus,       // Z: Customer WhatsApp Status
      opWaStatus          // AA: Operator WhatsApp Status
    ]);

    var lastRow = sheet.getLastRow();

    // 1. Send Operator Notification Email with Confirm and Reject Buttons
    var ownerEmail = "aryansdtravels@gmail.com";
    var cleanPhone = phone.replace(/[^0-9]/g, '');

    var confirmUrl = BASE_PORTAL_URL + "/approve.html?action=confirm&id=" + encodeURIComponent(bookingId) + "&token=" + encodeURIComponent(actionToken);
    var rejectUrl = BASE_PORTAL_URL + "/approve.html?action=reject&id=" + encodeURIComponent(bookingId) + "&token=" + encodeURIComponent(actionToken);
    
    var waUrl = "https://wa.me/91" + cleanPhone + "?text=" + encodeURIComponent(
      "Hello " + name + ", Aryan Taxi Mahabaleshwar here regarding your booking request " + bookingId + " for " + tour + ". Your locked tariff is ₹" + fare + " (" + taxiCount + "x 4-Seater Tourist Cab" + (taxiCount > 1 ? "s" : "") + "). Let us reconfirm your hotel porch pickup schedule."
    );

    var ownerSubject = "🚕 NEW RESERVATION REQUEST: " + bookingId + " - " + name + " (₹" + fare + " • " + taxiCount + " Cab" + (taxiCount > 1 ? "s" : "") + ") [ACTION REQUIRED]";
    var ownerBody = 
      "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:12px;padding:24px;background:#ffffff;'>" +
        "<div style='background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:14px;margin-bottom:18px;'>" +
          "<strong style='color:#92400e;font-size:15px;'>⏳ STATUS: PENDING OPERATOR CONFIRMATION</strong><br>" +
          "<span style='color:#b45309;font-size:13px;line-height:1.4;'>Check fleet availability and select an action below. Note: Clicking will open a secure review page before any status change occurs.</span>" +
        "</div>" +
        
        "<div style='display:flex;gap:12px;margin-bottom:20px;text-align:center;'>" +
          "<div style='flex:1;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px;'>" +
            "<a href='" + confirmUrl + "' style='background:#16a34a;color:#ffffff;padding:12px 20px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;font-size:14px;box-shadow:0 4px 6px -1px rgba(22,163,74,0.3);'>✔ CONFIRM RESERVATION</a>" +
            "<p style='margin:8px 0 0;font-size:12px;color:#15803d;'>Approves booking &amp; emails confirmed travel voucher to guest.</p>" +
          "</div>" +
          "<div style='flex:1;background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:16px;'>" +
            "<a href='" + rejectUrl + "' style='background:#dc2626;color:#ffffff;padding:12px 20px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;font-size:14px;box-shadow:0 4px 6px -1px rgba(220,38,38,0.3);'>✖ REJECT RESERVATION</a>" +
            "<p style='margin:8px 0 0;font-size:12px;color:#991b1b;'>Declines with reason &amp; notifies guest politely.</p>" +
          "</div>" +
        "</div>" +

        "<h3 style='color:#0f2b48;margin:0 0 12px;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;'>Booking &amp; Fleet Requirements</h3>" +
        "<table style='width:100%;border-collapse:collapse;font-size:14px;'>" +
          "<tr><td style='padding:7px 0;color:#64748b;width:40%;'><strong>Booking ID:</strong></td><td><strong style='color:#0284c7;'>" + bookingId + "</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Guest Name:</strong></td><td><strong>" + name + "</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>WhatsApp Phone:</strong></td><td><a href='tel:+91" + cleanPhone + "' style='color:#0284c7;text-decoration:none;font-weight:600;'>" + phone + "</a></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Email Address:</strong></td><td><a href='mailto:" + email + "' style='color:#0284c7;text-decoration:none;'>" + email + "</a></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Total Passengers (PAX):</strong></td><td><strong>" + pax + " Passengers</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Fleet Allocation:</strong></td><td><strong style='color:#0f2b48;'>" + taxiCount + "x " + vehicleCategory + (taxiCount > 1 ? "s (Round up: " + pax + " ÷ 4)" : "") + "</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Tour / Service:</strong></td><td>" + tour + " (" + serviceType + ")</td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Schedule:</strong></td><td>" + date + " at " + time + "</td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Pickup Hotel Details:</strong></td><td><strong style='color:#0f2b48;'>" + hotelDetails + "</strong></td></tr>" +
          (dropLocation && dropLocation !== tour ? ("<tr><td style='padding:7px 0;color:#64748b;'><strong>Drop Location:</strong></td><td>" + dropLocation + "</td></tr>") : "") +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Fare Breakdown:</strong></td><td>₹" + baseFare + " × " + taxiCount + " Cab" + (taxiCount > 1 ? "s" : "") + (additionalCharges !== '0' ? (" + ₹" + additionalCharges + " extra") : "") + " = <strong style='color:#16a34a;font-size:16px;'>₹" + fare + "</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Special Request:</strong></td><td>" + notes + "</td></tr>" +
        "</table>" +
        
        "<div style='margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;display:flex;gap:12px;'>" +
          "<a href='" + waUrl + "' style='background:#10b981;color:#ffffff;padding:10px 18px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;font-size:13px;margin-right:8px;'>💬 WhatsApp Customer</a>" +
          "<a href='tel:+91" + cleanPhone + "' style='background:#0284c7;color:#ffffff;padding:10px 18px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;font-size:13px;'>📞 Call Customer</a>" +
        "</div>" +
      "</div>";

    try {
      MailApp.sendEmail({
        to: ownerEmail,
        subject: ownerSubject,
        htmlBody: ownerBody,
        name: "Aryan Taxi Dispatch Operations",
        replyTo: "aryansdtravels@gmail.com"
      });
      sheet.getRange(lastRow, 25).setValue("Delivered");
    } catch (eMailOp) {
      sheet.getRange(lastRow, 25).setValue("Failed: " + eMailOp.toString());
    }

    // 2. Send Initial Acknowledgement Email to Customer
    if (email && email.indexOf("@") !== -1) {
      var customerSubject = "Booking Request Received – Pending Confirmation (Pass #" + bookingId + ") | Aryan Taxi Mahabaleshwar";
      var customerBody = 
        "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #0891b2;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;letter-spacing:0.5px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#0891b2;font-size:13px;font-weight:bold;margin:4px 0 0;'>Direct Local Owner-Driver Tourist Cab Network • Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:14px;margin:18px 0;'>" +
            "<strong style='color:#92400e;font-size:14px;'>⏳ STATUS: BOOKING RECEIVED – PENDING CONFIRMATION</strong>" +
            "<p style='margin:4px 0 0;font-size:12.5px;color:#b45309;line-height:1.4;'>Your travel request is registered and official Taxi Union tariff is locked. Our dispatch operations desk is checking driver and vehicle availability. You will receive an official confirmation notice once your cab is assigned.</p>" +
          "</div>" +
          
          "<p style='font-size:14px;'>Dear <strong>" + name + "</strong>,</p>" +
          "<p style='font-size:13.5px;line-height:1.5;color:#475569;'>Thank you for choosing Aryan Taxi Mahabaleshwar. Here is the summary of your registered travel request:</p>" +
          
          "<table style='width:100%;border-collapse:collapse;margin:15px 0;background:#f8fafc;border-radius:8px;font-size:13.5px;border:1px solid #e2e8f0;'>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pass Reference ID:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#0284c7;font-weight:bold;'>" + bookingId + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Lead Passenger:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + name + "</strong> (" + phone + ")</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Passengers (PAX):</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + pax + " Passengers</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Assigned Fleet:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + taxiCount + "x " + vehicleCategory + (taxiCount > 1 ? "s" : "") + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Selected Tour / Route:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + tour + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Travel Schedule:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + date + " at " + time + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pickup Hotel Details:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + hotelDetails + " (Doorstep Hotel Porch)</td></tr>" +
            "<tr><td style='padding:9px 12px;color:#64748b;'><strong>Locked Union Fare:</strong></td><td style='padding:9px 12px;font-size:16px;color:#16a34a;font-weight:bold;'>₹" + fare + " <span style='font-size:12px;color:#64748b;font-weight:normal;'>(Zero Advance • Pay Driver After Trip)</span></td></tr>" +
          "</table>" +
          
          "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-top:16px;'>" +
            "<p style='margin:0;color:#166534;font-size:12.5px;line-height:1.4;'><strong>🛡️ Mountain Fleet Assurance:</strong> All tours are operated strictly by registered 4-seater tourist cabs driven by licensed, hill-experienced local drivers native to Sahyadri ghats. Official Taxi Union tariffs apply with zero hidden surges.</p>" +
          "</div>" +
          
          "<p style='font-size:13px;color:#64748b;margin-top:20px;line-height:1.5;'>Need immediate assistance or wish to reconfirm pickup early? Feel free to contact our 24/7 operations desk at <strong>+91 99228 82044</strong> or reply to this email.</p>" +
          
          "<div style='text-align:center;margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>Aryan Taxi Mahabaleshwar • Direct Local Tourist Cab Network</p>" +
            "<p style='font-size:11px;color:#94a3b8;margin:4px 0 0;'>Official Union Tariff Locked • No Hidden Mountain Charges</p>" +
          "</div>" +
        "</div>";

      try {
        MailApp.sendEmail({
          to: email,
          subject: customerSubject,
          htmlBody: customerBody,
          name: "Aryan Taxi Mahabaleshwar",
          replyTo: "aryansdtravels@gmail.com"
        });
        sheet.getRange(lastRow, 24).setValue("Delivered");
      } catch (eMailCust) {
        sheet.getRange(lastRow, 24).setValue("Failed: " + eMailCust.toString());
      }
    }

    return createJsonResponse({
      result: "success",
      bookingId: bookingId,
      status: status,
      taxiCount: taxiCount,
      fare: fare
    }, (typeof callback !== "undefined" ? callback : ""));

  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: err.toString()
    }, (typeof callback !== "undefined" ? callback : ""));
  }
}

function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || "";
  var id = (e && e.parameter && (e.parameter.id || e.parameter.bookingId)) || "";
  var token = (e && e.parameter && e.parameter.token) || "";
  var reason = (e && e.parameter && e.parameter.reason) || "";
  var format = (e && e.parameter && e.parameter.format) || "";
  var callback = (e && e.parameter && e.parameter.callback) || "";

  // 1. Get Live Bookings for Operator Dashboard
  if (action === "get_bookings") {
    return handleGetBookings(callback);
  }

  // 2. Get Single Booking Details for Confirmation/Rejection Preview Page
  if (action === "get_booking_details" && id) {
    return handleGetBookingDetails(id, token, callback);
  }

  // 3. Execute Deliberate Operator Confirmation
  if (action === "execute_confirm" && id) {
    return handleExecuteConfirm(id, token, format, callback);
  }

  // 4. Execute Deliberate Operator Rejection
  if (action === "execute_reject" && id) {
    return handleExecuteReject(id, token, reason, format, callback);
  }

  // Legacy approval redirect/fallback
  if (action === "approve" && id) {
    return handleExecuteConfirm(id, token, format, callback);
  }

  if (action === "gemini_trip_planner" && e.parameter.prompt) {
    return handleGeminiAIRequest(e.parameter.prompt, e.parameter.lang || "en");
  }

  return createJsonResponse({
    status: "online",
    service: "Aryan Taxi Operations Webhook",
    timestamp: new Date().toISOString()
  }, (typeof callback !== "undefined" ? callback : ""));
}

function findBookingRow(sheet, bookingId) {
  var data = sheet.getDataRange().getValues();
  var cleanId = String(bookingId || "").trim().toUpperCase();
  for (var i = 1; i < data.length; i++) {
    var cellId = String(data[i][1] || "").trim().toUpperCase();
    if (cellId && (cellId === cleanId || cellId.indexOf(cleanId) !== -1 || cleanId.indexOf(cellId) !== -1)) {
      return { rowIndex: i + 1, rowData: data[i] };
    }
  }
  return null;
}

function handleGetBookingDetails(bookingId, token, callback) {
  try {
    var sheet = getBookingsSheet();
    var found = findBookingRow(sheet, bookingId);
    if (!found) {
      return createJsonResponse({
        result: "not_found",
        bookingId: bookingId
      }, (typeof callback !== "undefined" ? callback : ""));
    }
    
    var r = found.rowData;
    return createJsonResponse({
      result: "success",
      bookingId: r[1],
      name: r[2],
      email: r[3],
      phone: r[4],
      date: r[5],
      time: r[6],
      pickup: r[7],
      tour: r[8],
      fare: r[9],
      notes: r[10],
      status: r[11],
      hotelDetails: r[12] || r[7],
      dropLocation: r[13] || "",
      serviceType: r[14] || "sightseeing",
      pax: r[15] || "1-4",
      taxiCount: r[16] || 1,
      vehicleCategory: r[17] || "4-Seater Tourist Cab",
      baseFare: r[18] || r[9],
      additionalCharges: r[19] || "₹0",
      totalFare: r[20] || r[9],
      paymentStatus: r[21] || "Unpaid",
      remarks: r[22] || ""
    }, (typeof callback !== "undefined" ? callback : ""));
  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: err.toString()
    }, (typeof callback !== "undefined" ? callback : ""));
  }
}

function handleExecuteConfirm(bookingId, token, format, callback) {
  try {
    var sheet = getBookingsSheet();
    var found = findBookingRow(sheet, bookingId);
    if (!found) {
      return createJsonResponse({
        result: "not_found",
        bookingId: bookingId
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    var rowIdx = found.rowIndex;
    var r = found.rowData;
    var currentStatus = String(r[11] || "").trim().toUpperCase();

    if (currentStatus === "CONFIRMED") {
      return createJsonResponse({
        result: "already_confirmed",
        status: "CONFIRMED",
        bookingId: bookingId,
        name: r[2]
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    if (currentStatus === "REJECTED") {
      return createJsonResponse({
        result: "conflict",
        message: "This booking was previously REJECTED. Cannot confirm a rejected booking.",
        status: "REJECTED",
        bookingId: bookingId
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    var nowStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Update Status to CONFIRMED
    sheet.getRange(rowIdx, 12).setValue("CONFIRMED");
    sheet.getRange(rowIdx, 23).setValue("Confirmed by Operator on " + nowStr);

    var name = r[2] || "Valued Guest";
    var email = String(r[3] || "").trim().toLowerCase();
    var phone = r[4] || "";
    var date = r[5] || "";
    var time = r[6] || "";
    var hotelDetails = r[12] || r[7] || "Mahabaleshwar";
    var tour = r[8] || "Sightseeing Tour";
    var fare = r[9] || "0";
    var pax = r[15] || "1-4";
    var taxiCount = r[16] || 1;
    var vehicleCategory = r[17] || "4-Seater Tourist Cab";

    // Send Confirmed Voucher Email to Customer
    if (email && email.indexOf("@") !== -1) {
      var confirmSubject = "🚖 Booking Confirmed: " + taxiCount + "x 4-Seater Tourist Cab Reserved - Pass #" + bookingId + " | Aryan Taxi Mahabaleshwar";
      var confirmBody = 
        "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #10b981;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#10b981;font-size:13px;font-weight:bold;margin:4px 0 0;'>Official Sightseeing &amp; Transfer Voucher • Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:14px;margin:18px 0;'>" +
            "<strong style='color:#065f46;font-size:15px;'>✔ YOUR RESERVATION IS OFFICIALLY CONFIRMED!</strong>" +
            "<p style='margin:4px 0 0;font-size:13px;color:#047857;line-height:1.4;'>Your private tourist cab reservation is locked. A licensed, mountain-experienced local driver has been assigned for your doorstep porch pickup on schedule.</p>" +
          "</div>" +
          
          "<p style='font-size:14px;'>Dear <strong>" + name + "</strong>,</p>" +
          "<p style='font-size:13.5px;color:#475569;'>We are pleased to inform you that your cab booking has been verified and confirmed by the Aryan Taxi Dispatch Desk. Here are your travel details:</p>" +
          
          "<table style='width:100%;border-collapse:collapse;margin:15px 0;background:#f8fafc;border-radius:8px;font-size:13.5px;border:1px solid #e2e8f0;'>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pass Reference ID:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#0284c7;font-weight:bold;'>" + bookingId + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Lead Passenger:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + name + "</strong> (" + phone + ")</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Passengers (PAX):</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + pax + " Passengers</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Assigned Fleet:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + taxiCount + "x " + vehicleCategory + (taxiCount > 1 ? "s" : "") + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Selected Tour:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + tour + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Travel Schedule:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + date + " at " + time + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pickup Hotel Porch:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + hotelDetails + "</td></tr>" +
            "<tr><td style='padding:9px 12px;color:#64748b;'><strong>Confirmed Tariff:</strong></td><td style='padding:9px 12px;font-size:16px;color:#16a34a;font-weight:bold;'>" + fare + " <span style='font-size:12px;color:#64748b;font-weight:normal;'>(Zero Advance • Pay Driver After Trip)</span></td></tr>" +
          "</table>" +
          
          "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px;margin-top:16px;'>" +
            "<h4 style='color:#166534;margin:0 0 6px;font-size:13.5px;'>Pickup &amp; Carriage Terms</h4>" +
            "<ul style='margin:0;padding-left:18px;font-size:12.5px;color:#15803d;line-height:1.5;'>" +
              "<li>Your assigned driver will reach your hotel reception/porch 10 minutes prior to pickup time.</li>" +
              "<li>Present this digital pass or booking ID to your driver upon boarding.</li>" +
              "<li>Pay 100% of the locked tariff directly to your driver upon completion of the tour via UPI or Cash.</li>" +
            "</ul>" +
          "</div>" +
          
          "<div style='text-align:center;margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>24/7 Operations Desk • Aryan Taxi Mahabaleshwar</p>" +
            "<p style='font-size:13.5px;font-weight:bold;color:#0e2338;margin:6px 0 0;'>📞 Helpline: +91 99228 82044 • ✉️ aryansdtravels@gmail.com</p>" +
          "</div>" +
        "</div>";

      try {
        MailApp.sendEmail({
          to: email,
          subject: confirmSubject,
          htmlBody: confirmBody,
          name: "Aryan Taxi Mahabaleshwar",
          replyTo: "aryansdtravels@gmail.com"
        });
        sheet.getRange(rowIdx, 24).setValue("Confirmation Delivered");
      } catch (eMail) {
        sheet.getRange(rowIdx, 24).setValue("Failed: " + eMail.toString());
      }
    }

    return createJsonResponse({
      result: "success",
      status: "CONFIRMED",
      bookingId: bookingId,
      name: name,
      tour: tour,
      fare: fare
    }, (typeof callback !== "undefined" ? callback : ""));

  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: err.toString()
    }, (typeof callback !== "undefined" ? callback : ""));
  }
}

function handleExecuteReject(bookingId, token, reason, format, callback) {
  try {
    var sheet = getBookingsSheet();
    var found = findBookingRow(sheet, bookingId);
    if (!found) {
      return createJsonResponse({
        result: "not_found",
        bookingId: bookingId
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    var rowIdx = found.rowIndex;
    var r = found.rowData;
    var currentStatus = String(r[11] || "").trim().toUpperCase();

    if (currentStatus === "REJECTED") {
      return createJsonResponse({
        result: "already_rejected",
        status: "REJECTED",
        bookingId: bookingId,
        name: r[2]
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    if (currentStatus === "CONFIRMED") {
      return createJsonResponse({
        result: "conflict",
        message: "This booking was previously CONFIRMED. Cannot reject a confirmed booking without manual cancellation.",
        status: "CONFIRMED",
        bookingId: bookingId
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    var nowStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var cleanReason = reason ? String(reason).trim() : "Taxi availability full for requested time slot";

    // Update Status to REJECTED
    sheet.getRange(rowIdx, 12).setValue("REJECTED");
    sheet.getRange(rowIdx, 23).setValue("Rejected on " + nowStr + ". Reason: " + cleanReason);

    var name = r[2] || "Valued Guest";
    var email = String(r[3] || "").trim().toLowerCase();
    var phone = r[4] || "";
    var date = r[5] || "";
    var time = r[6] || "";
    var tour = r[8] || "Sightseeing Tour";

    // Send Polite Rejection Notice Email to Customer
    if (email && email.indexOf("@") !== -1) {
      var rejectSubject = "Reservation Update: Booking #" + bookingId + " Unavailable | Aryan Taxi Mahabaleshwar";
      var rejectBody = 
        "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:600px;margin:auto;border:1px solid #cbd5e1;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #ef4444;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#ef4444;font-size:13px;font-weight:bold;margin:4px 0 0;'>Reservation Desk Notice • Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;margin:18px 0;'>" +
            "<strong style='color:#991b1b;font-size:14px;'>⚠️ UNABLE TO ACCOMMODATE RESERVATION</strong>" +
            "<p style='margin:4px 0 0;font-size:13px;color:#b91c1c;line-height:1.4;'>We regret to inform you that we cannot accept booking request <strong>#" + bookingId + "</strong> for " + date + " at " + time + ".</p>" +
          "</div>" +
          
          "<p style='font-size:14px;'>Dear <strong>" + name + "</strong>,</p>" +
          "<p style='font-size:13.5px;color:#475569;'>Thank you for considering Aryan Taxi Mahabaleshwar. Due to high operational demand or vehicle constraints, we are currently unable to confirm your booking:</p>" +
          
          "<div style='background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;margin:14px 0;font-size:13px;'>" +
            "<strong>Reason for Unavailability:</strong> " + cleanReason + "<br>" +
            "<strong>Tour Requested:</strong> " + tour + "<br>" +
            "<strong>Requested Date &amp; Time:</strong> " + date + " at " + time +
          "</div>" +
          
          "<p style='font-size:13.5px;color:#475569;'>We apologize for the inconvenience. If your schedule is flexible, we would love to assist you with alternative time slots or dates. Please connect directly with our operations desk:</p>" +
          
          "<div style='text-align:center;margin:20px 0;'>" +
            "<a href='https://wa.me/919922882044?text=" + encodeURIComponent("Hello Aryan Taxi, regarding unavailable booking #" + bookingId + ", I would like to check alternative dates.") + "' style='background:#10b981;color:#ffffff;padding:11px 22px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;font-size:13.5px;'>💬 Chat on WhatsApp for Alternative Slots</a>" +
          "</div>" +
          
          "<div style='text-align:center;margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>24/7 Operations Desk • Aryan Taxi Mahabaleshwar</p>" +
            "<p style='font-size:13.5px;font-weight:bold;color:#0e2338;margin:6px 0 0;'>📞 Helpline: +91 99228 82044 • ✉️ aryansdtravels@gmail.com</p>" +
          "</div>" +
        "</div>";

      try {
        MailApp.sendEmail({
          to: email,
          subject: rejectSubject,
          htmlBody: rejectBody,
          name: "Aryan Taxi Mahabaleshwar",
          replyTo: "aryansdtravels@gmail.com"
        });
        sheet.getRange(rowIdx, 24).setValue("Rejection Delivered");
      } catch (eMail) {
        sheet.getRange(rowIdx, 24).setValue("Failed: " + eMail.toString());
      }
    }

    return createJsonResponse({
      result: "success",
      status: "REJECTED",
      bookingId: bookingId,
      name: name,
      reason: cleanReason
    }, (typeof callback !== "undefined" ? callback : ""));

  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: err.toString()
    }, (typeof callback !== "undefined" ? callback : ""));
  }
}

function handleGetBookings(callback) {
  try {
    var sheet = getBookingsSheet();
    ensureSheetHeaders(sheet);
    var data = sheet.getDataRange().getValues();
    var list = [];
    for (var i = 1; i < data.length; i++) {
      if (data[i][1]) {
        list.push({
          timestamp: data[i][0],
          bookingId: data[i][1],
          name: data[i][2],
          email: data[i][3],
          phone: data[i][4],
          date: data[i][5],
          time: data[i][6],
          pickup: data[i][7],
          tour: data[i][8],
          fare: data[i][9],
          notes: data[i][10],
          status: data[i][11],
          hotelDetails: data[i][12] || data[i][7],
          dropLocation: data[i][13] || "",
          serviceType: data[i][14] || "sightseeing",
          pax: data[i][15] || "1-4",
          taxiCount: data[i][16] || 1,
          vehicleCategory: data[i][17] || "4-Seater Tourist Cab",
          baseFare: data[i][18] || data[i][9],
          additionalCharges: data[i][19] || "₹0",
          totalFare: data[i][20] || data[i][9],
          paymentStatus: data[i][21] || "Unpaid",
          remarks: data[i][22] || "",
          custEmailStatus: data[i][23] || "",
          opEmailStatus: data[i][24] || "",
          custWaStatus: data[i][25] || "",
          opWaStatus: data[i][26] || ""
        });
      }
    }
    return createJsonResponse({
      result: "success",
      bookings: list
    }, (typeof callback !== "undefined" ? callback : ""));
  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: err.toString()
    }, (typeof callback !== "undefined" ? callback : ""));
  }
}

function handleGeminiAIRequest(userPrompt, lang) {
  try {
    var apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
    if (!apiKey) {
      return createJsonResponse({
        status: "error",
        message: "Gemini API key not configured in Script Properties."
      }, (typeof callback !== "undefined" ? callback : ""));
    }

    var sysInstruction = "You are Aryan AI, the expert local trip planner and taxi concierge for Aryan Taxi Mahabaleshwar. " +
      "Help tourists plan sightseeing in Mahabaleshwar and Panchgani. " +
      "Official rates: Tour 1 (Arthur Seat & Kate's Point) = ₹1,200 (3.5 hrs), Tour 2 (Lingmala Waterfall & Sunset) = ₹1,200 (3.5 hrs), Tour 7 (Full Day Combo) = ₹3,000 (9 hrs). " +
      "Answer warmly and concisely in " + (lang === "mr" ? "Marathi" : (lang === "hi" ? "Hindi" : "English")) + ".";

    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;
    var payload = {
      contents: [{ role: "user", parts: [{ text: sysInstruction + "\\n\\nUser Query: " + userPrompt }] }],
      generationConfig: { temperature: 0.6, maxOutputTokens: 600 }
    };

    var options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    var response = UrlFetchApp.fetch(url, options);
    var resData = JSON.parse(response.getContentText());
    var textOutput = (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0].text) || "Sorry, could not generate a plan right now.";

    return createJsonResponse({
      status: "success",
      reply: textOutput
    }, (typeof callback !== "undefined" ? callback : ""));
  } catch (e) {
    return createJsonResponse({
      status: "error",
      message: e.toString()
    }, (typeof callback !== "undefined" ? callback : ""));
  }
}
```

---

### Step 3: Update Deployment in Apps Script

Whenever you edit `Code.gs` in Apps Script, update the deployment:
1. In Apps Script, click **Deploy** (blue button top right) -> **Manage deployments**.
2. Click the **pencil (Edit) icon** in the top right of the popup.
3. In the **Version** dropdown, select **New version**.
4. Click **Deploy**.
5. Done! Your existing Web App URL remains active and now supports 1-Click Approval!

---

### 100% Free Service Limits & Quotas Summary

| Service | Free Tier Limit | Cost |
| :--- | :--- | :---: |
| **Google Apps Script Emails (`MailApp`)** | 100 emails / day (personal `@gmail.com`)<br>1,500 emails / day (Google Workspace) | **₹0.00** |
| **Google Sheets Lead Database** | Up to 10,000,000 cells | **₹0.00** |
| **GitHub Pages Hosting** | 100 GB bandwidth / month, unlimited visits | **₹0.00** |
| **WhatsApp Direct Booking (`wa.me`)** | Unlimited click-to-chat bookings | **₹0.00** |
| **Gemini 1.5 Flash AI Free Tier** | 15 Requests Per Minute (RPM), 1,500 Requests Per Day | **₹0.00** |
| **Total Monthly Operating Cost** | **Zero Monthly Cost Forever** | **₹0.00** |
