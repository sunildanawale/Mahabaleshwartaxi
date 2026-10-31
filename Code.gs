/**
 * ARYAN TAXI MAHABALESHWAR — ZERO-COST BOOKING AUTOMATION & 1-CLICK APPROVAL ENGINE
 * Owner Email: aryansdtravels@gmail.com
 * Zero disclosure of personal names — branded as Aryan Taxi Mahabaleshwar
 * Free Quota: 100 emails/day on free @gmail.com accounts (1,500/day on Workspace)
 */

var SPREADSHEET_ID = "1gV95JLpRO2FZTsXeKCKcnbfBSNsYKju_aPZemQuL2pQ";
var DEFAULT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbykfjAMr2FYrYCD2xOkPj4Aba86_BKERKQUQLsZcickCaYIQWR4ly-prjYzzWdCzyM-ew/exec";

function getBookingsSheet() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) {
      var s = ss.getSheetByName("Sheet1") || ss.getActiveSheet();
      if (s) return s;
    }
  } catch (err) {}
  try {
    var ss2 = SpreadsheetApp.openById(SPREADSHEET_ID);
    return ss2.getSheetByName("Sheet1") || ss2.getActiveSheet();
  } catch (err2) {
    throw new Error("Could not access Aryan Taxi Bookings spreadsheet: " + err2.toString());
  }
}

function getCleanWebAppUrl() {
  try {
    var u = ScriptApp.getService().getUrl();
    if (u && u.indexOf("script.google.com") !== -1) {
      // Strip account-specific path prefixes (/u/0/, /a/domain/) that trigger Google Drive errors on mobile
      return u.replace(/\/u\/\d+\//, "/").replace(/\/a\/[^\/]+\//, "/");
    }
  } catch (err) {}
  return DEFAULT_WEB_APP_URL;
}

function doPost(e) {
  try {
    var sheet = getBookingsSheet();
    var data = {};
    if (e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch(err) { data = e.parameter || {}; }
    } else {
      data = e.parameter || {};
    }
    
    // If incoming request has nested payload field
    if (data.payload && typeof data.payload === "string") {
      try {
        var parsed = JSON.parse(data.payload);
        for (var k in parsed) {
          if (!data[k]) data[k] = parsed[k];
        }
      } catch (eParse) {}
    }
    
    // Check if request is an AI Trip Planner query
    if (data.action === "gemini_trip_planner" || (data.prompt && !data.bookingId)) {
      return handleGeminiAIRequest(data.prompt, data.lang || "en");
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var bookingId = data.bookingId || data.id || ('AMT-' + Date.now().toString().slice(-6));
    var name = data.name || 'Valued Guest';
    var email = (data.email || '').trim().toLowerCase();
    var phone = data.phone || '';
    var date = data.date || '';
    var time = data.time || '09:00 AM';
    var pickup = data.pickup || '';
    var tour = data.tour || 'Sightseeing Tour';
    var fare = data.fare || '0';
    var notes = data.notes || 'None';
    var status = "Pending Approval";

    // Deduplication Lock: Check Column B (Booking ID)
    var existingData = sheet.getDataRange().getValues();
    for (var i = 1; i < existingData.length; i++) {
      if (existingData[i][1] && String(existingData[i][1]).trim() === String(bookingId).trim()) {
        // Already recorded! Return success immediately without duplicate row or duplicate emails
        return ContentService.createTextOutput(JSON.stringify({ result: "already_registered", bookingId: bookingId }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // 1. Log Booking into Google Sheet
    sheet.appendRow([
      timestamp,
      bookingId,
      name,
      email,
      phone,
      date,
      time,
      pickup,
      tour,
      "₹" + fare,
      notes,
      status
    ]);

    // 2. Email 1: Instant Alert to Owner with 1-Click Approval Link
    var ownerEmail = "aryansdtravels@gmail.com";
    var cleanPhone = phone.replace(/[^0-9]/g, '');
    
    // Dynamic 1-Click Approval Link
    var webAppUrl = getCleanWebAppUrl();
    // 1-Click Approval Link (Hosted on website to eliminate Android Gmail multi-account Drive errors)
    var approveUrl = "https://sunildanawale.github.io/Mahabaleshwartaxi/approve.html?id=" + encodeURIComponent(bookingId) + "&name=" + encodeURIComponent(name) + "&fare=" + encodeURIComponent(fare) + "&tour=" + encodeURIComponent(tour);
    
    var waUrl = "https://wa.me/91" + cleanPhone + "?text=" + encodeURIComponent(
      "Hello " + name + ", this is Aryan Taxi Mahabaleshwar regarding your booking request " + bookingId + " for " + tour + ". Your tariff is locked at ₹" + fare + ". Let us confirm your pickup schedule."
    );

    var ownerSubject = "🚕 NEW BOOKING REQUEST: " + bookingId + " - " + name + " (₹" + fare + ") [PENDING APPROVAL]";
    var ownerBody = 
      "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:12px;padding:24px;background:#ffffff;'>" +
        "<div style='background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:14px;margin-bottom:18px;'>" +
          "<strong style='color:#92400e;font-size:15px;'>⏳ STATUS: PENDING OPERATOR AVAILABILITY APPROVAL</strong><br>" +
          "<span style='color:#b45309;font-size:13px;line-height:1.4;'>Check vehicle availability and click the green button below to confirm the cab and notify the guest.</span>" +
        "</div>" +
        
        "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:18px;text-align:center;margin-bottom:20px;'>" +
          "<a href='" + approveUrl + "' style='background:#16a34a;color:#ffffff;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;font-size:16px;box-shadow:0 4px 6px -1px rgba(22,163,74,0.3);'>✔ 1-CLICK APPROVE &amp; CONFIRM BOOKING</a>" +
          "<p style='margin:10px 0 0;font-size:12.5px;color:#15803d;line-height:1.4;'>Clicking this button automatically marks the booking as <strong>CONFIRMED</strong> in your Sheet and emails the guest their Confirmed Travel Voucher.</p>" +
        "</div>" +

        "<h3 style='color:#0f2b48;margin:0 0 12px;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;'>Booking Details</h3>" +
        "<table style='width:100%;border-collapse:collapse;font-size:14px;'>" +
          "<tr><td style='padding:7px 0;color:#64748b;width:40%;'><strong>Pass Reference ID:</strong></td><td><strong style='color:#0284c7;'>" + bookingId + "</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Guest Name:</strong></td><td><strong>" + name + "</strong></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>WhatsApp Phone:</strong></td><td><a href='tel:+91" + cleanPhone + "' style='color:#0284c7;text-decoration:none;font-weight:600;'>" + phone + "</a></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Email Address:</strong></td><td><a href='mailto:" + email + "' style='color:#0284c7;text-decoration:none;'>" + email + "</a></td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Tour Package:</strong></td><td>" + tour + "</td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Travel Date & Time:</strong></td><td>" + date + " at " + time + "</td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Pickup Hotel / Landmark:</strong></td><td>" + pickup + "</td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Locked Union Fare:</strong></td><td style='color:#16a34a;font-size:16px;font-weight:bold;'>₹" + fare + " (Zero Advance / Pay After Trip)</td></tr>" +
          "<tr><td style='padding:7px 0;color:#64748b;'><strong>Special Request:</strong></td><td>" + notes + "</td></tr>" +
        "</table>" +
        
        "<div style='margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;display:flex;gap:12px;'>" +
          "<a href='" + waUrl + "' style='background:#10b981;color:#ffffff;padding:10px 18px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;font-size:13px;margin-right:8px;'>💬 WhatsApp Customer</a>" +
          "<a href='tel:+91" + cleanPhone + "' style='background:#0284c7;color:#ffffff;padding:10px 18px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;font-size:13px;'>📞 Call Customer</a>" +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: ownerEmail,
      subject: ownerSubject,
      htmlBody: ownerBody,
      name: "Aryan Taxi Dispatch Portal",
      replyTo: "aryansdtravels@gmail.com"
    });

    // 3. Email 2: Send Initial Booking Request Voucher to Customer (Pending Status)
    if (email && email.indexOf("@") !== -1) {
      var customerSubject = "Booking Request Received (Pending Approval) - Pass #" + bookingId + " | Aryan Taxi Mahabaleshwar";
      var customerBody = 
        "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #0891b2;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;letter-spacing:0.5px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#0891b2;font-size:13px;font-weight:bold;margin:4px 0 0;'>Direct Local Owner-Driver Cab Service • Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:14px;margin:18px 0;'>" +
            "<strong style='color:#92400e;font-size:14px;'>⏳ STATUS: BOOKING REQUEST REGISTERED (PENDING AVAILABILITY CONFIRMATION)</strong>" +
            "<p style='margin:4px 0 0;font-size:12.5px;color:#b45309;line-height:1.4;'>Your official Union tariff is locked. Please note that vehicle dispatch and driver assignment are subject to availability approval by our operations desk. We will confirm your ride shortly.</p>" +
          "</div>" +
          
          "<p style='font-size:14px;'>Dear <strong>" + name + "</strong>,</p>" +
          "<p style='font-size:13.5px;line-height:1.5;color:#475569;'>Thank you for submitting your travel request with Aryan Taxi Mahabaleshwar. Here is your official booking voucher summary:</p>" +
          
          "<table style='width:100%;border-collapse:collapse;margin:15px 0;background:#f8fafc;border-radius:8px;font-size:13.5px;border:1px solid #e2e8f0;'>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pass Reference ID:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#0284c7;font-weight:bold;'>" + bookingId + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Lead Passenger:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + name + "</strong> (" + phone + ")</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Selected Tour:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + tour + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Travel Schedule:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + date + " at " + time + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pickup Location:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + pickup + " (Doorstep Hotel Porch)</td></tr>" +
            "<tr><td style='padding:9px 12px;color:#64748b;'><strong>Locked Union Fare:</strong></td><td style='padding:9px 12px;font-size:16px;color:#16a34a;font-weight:bold;'>₹" + fare + " <span style='font-size:12px;color:#64748b;font-weight:normal;'>(Zero Advance • Pay Driver After Trip)</span></td></tr>" +
          "</table>" +
          
          "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-top:16px;'>" +
            "<p style='margin:0;color:#166534;font-size:12.5px;line-height:1.4;'><strong>🛡️ Aryan Taxi Mountain Assurance:</strong> Dedicated private 4-seater tourist cab, licensed local hill drivers native to Sahyadri ghats, and fixed Taxi Union tariffs with zero hidden surcharges.</p>" +
          "</div>" +
          
          "<p style='font-size:13px;color:#64748b;margin-top:20px;line-height:1.5;'>Need immediate assistance or wish to reconfirm pickup early? Feel free to contact our 24/7 operations desk at <strong>+91 99228 82044</strong> or reply to this email.</p>" +
          
          "<div style='text-align:center;margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>Aryan Taxi Mahabaleshwar • Direct Local Tourist Cab Network</p>" +
            "<p style='font-size:11px;color:#94a3b8;margin:4px 0 0;'>Official Union Tariff Locked • No Hidden Mountain Charges</p>" +
          "</div>" +
        "</div>";

      MailApp.sendEmail({
        to: email,
        subject: customerSubject,
        htmlBody: customerBody,
        name: "Aryan Taxi Mahabaleshwar",
        replyTo: "aryansdtravels@gmail.com"
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ result: "success", bookingId: bookingId }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 1-CLICK APPROVAL HANDLER
 * Triggered when owner clicks [ ✔ 1-CLICK APPROVE & CONFIRM BOOKING ] in alert email
 */
function handleOneClickApproval(bookingId, format) {
  try {
    var sheet = getBookingsSheet();
    var data = sheet.getDataRange().getValues();
    var foundRow = -1;
    var rowData = null;
    
    // Flexible case-insensitive search by Booking ID (Column B = index 1)
    var cleanSearchId = String(bookingId || "").trim().toUpperCase();
    for (var i = 1; i < data.length; i++) {
      var cellVal = String(data[i][1] || "").trim().toUpperCase();
      if (cellVal && (cellVal === cleanSearchId || cellVal.indexOf(cleanSearchId) !== -1 || cleanSearchId.indexOf(cellVal) !== -1)) {
        foundRow = i + 1;
        rowData = data[i];
        break;
      }
    }
    
    if (foundRow === -1) {
      if (format === "json") {
        return ContentService.createTextOutput(JSON.stringify({ result: "not_found", bookingId: bookingId }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      return HtmlService.createHtmlOutput(
        "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'>" +
        "<title>Booking Not Found | Aryan Taxi</title>" +
        "<style>body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;margin:0;padding:20px;background:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:90vh;}" +
        ".card{max-width:500px;width:100%;background:#ffffff;border:1px solid #fecaca;border-radius:14px;padding:32px 24px;text-align:center;box-shadow:0 10px 25px -5px rgba(0,0,0,0.08);}" +
        "h2{color:#b91c1c;margin:0 0 10px;font-size:22px;}" +
        "p{color:#475569;font-size:14px;line-height:1.5;margin:8px 0;}" +
        "</style></head><body>" +
        "<div class='card'>" +
        "<div style='font-size:48px;line-height:1;margin-bottom:12px;'>⚠️</div>" +
        "<h2>Booking ID Not Found</h2>" +
        "<p>Could not locate reference ID: <strong>" + bookingId + "</strong> in your Google Sheet.</p>" +
        "<p style='font-size:12px;color:#94a3b8;margin-top:20px;'>Aryan Taxi Mahabaleshwar • 24/7 Operations Desk</p>" +
        "</div></body></html>"
      ).setTitle("Booking Not Found - Aryan Taxi Mahabaleshwar")
       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
       .addMetaTag("viewport", "width=device-width, initial-scale=1");
    }
    
    var name = rowData[2] || "Valued Guest";
    var email = (rowData[3] || "").trim().toLowerCase();
    var phone = rowData[4] || "";
    var date = rowData[5] || "";
    var time = rowData[6] || "";
    var pickup = rowData[7] || "";
    var tour = rowData[8] || "";
    var fare = rowData[9] || "";
    var currentStatus = rowData[11] || "";

    // If already confirmed, don't duplicate customer email
    if (String(currentStatus).toUpperCase() === "CONFIRMED") {
      if (format === "json") {
        return ContentService.createTextOutput(JSON.stringify({ result: "already_confirmed", status: "CONFIRMED", bookingId: bookingId, name: name }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      return HtmlService.createHtmlOutput(
        "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'>" +
        "<title>Already Confirmed | Aryan Taxi</title>" +
        "<style>body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;margin:0;padding:20px;background:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:90vh;}" +
        ".card{max-width:500px;width:100%;background:#ffffff;border:1px solid #bae6fd;border-radius:14px;padding:32px 24px;text-align:center;box-shadow:0 10px 25px -5px rgba(0,0,0,0.08);}" +
        ".badge{display:inline-block;background:#e0f2fe;color:#0369a1;padding:6px 14px;border-radius:20px;font-weight:700;font-size:13px;margin-bottom:16px;}" +
        "h2{color:#0c4a6e;margin:0 0 10px;font-size:22px;}" +
        "p{color:#475569;font-size:14px;line-height:1.5;margin:8px 0;}" +
        "</style></head><body>" +
        "<div class='card'>" +
        "<div style='font-size:48px;line-height:1;margin-bottom:12px;'>ℹ️</div>" +
        "<div class='badge'>ALREADY CONFIRMED</div>" +
        "<h2>Booking Already Approved</h2>" +
        "<p>Pass ID <strong>" + bookingId + "</strong> for <strong>" + name + "</strong> is already marked as <strong>CONFIRMED</strong> in your Sheet.</p>" +
        "<p style='font-size:13px;color:#0284c7;'>The customer has already received their official confirmation voucher.</p>" +
        "<p style='font-size:12px;color:#94a3b8;margin-top:20px;'>Aryan Taxi Mahabaleshwar • 24/7 Operations Desk</p>" +
        "</div></body></html>"
      ).setTitle("Already Confirmed - Aryan Taxi Mahabaleshwar")
       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
       .addMetaTag("viewport", "width=device-width, initial-scale=1");
    }

    // Update status in Column L (column 12)
    sheet.getRange(foundRow, 12).setValue("CONFIRMED");

    // Send Official Confirmation Email to Customer
    if (email && email.indexOf("@") !== -1) {
      var confirmSubject = "🚖 Booking Confirmed: Dedicated Tourist Cab Reserved - Pass #" + bookingId + " | Aryan Taxi Mahabaleshwar";
      var confirmBody = 
        "<div style='font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #10b981;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#10b981;font-size:13px;font-weight:bold;margin:4px 0 0;'>Official Sightseeing &amp; Transfer Voucher • Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:14px;margin:18px 0;'>" +
            "<strong style='color:#065f46;font-size:15px;'>✔ YOUR BOOKING IS OFFICIALLY CONFIRMED!</strong>" +
            "<p style='margin:4px 0 0;font-size:13px;color:#047857;line-height:1.4;'>Your private tourist cab has been reserved. A licensed, mountain-experienced driver has been assigned for your doorstep porch pickup on schedule.</p>" +
          "</div>" +
          
          "<p style='font-size:14px;'>Dear <strong>" + name + "</strong>,</p>" +
          "<p style='font-size:13.5px;color:#475569;'>We are pleased to inform you that your cab reservation has been confirmed by the Aryan Taxi Dispatch Operations team. Here are your confirmed trip details:</p>" +
          
          "<table style='width:100%;border-collapse:collapse;margin:15px 0;background:#f8fafc;border-radius:8px;font-size:13.5px;border:1px solid #e2e8f0;'>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pass Reference ID:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#0284c7;font-weight:bold;'>" + bookingId + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Lead Passenger:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + name + "</strong> (" + phone + ")</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Selected Tour:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + tour + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Travel Schedule:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + date + " at " + time + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pickup Location:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + pickup + " (Doorstep Hotel Porch)</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Assigned Vehicle:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>Dedicated 4-Seater Tourist Cab (Clean &amp; Sanitized)</td></tr>" +
            "<tr><td style='padding:9px 12px;color:#64748b;'><strong>Confirmed Tariff:</strong></td><td style='padding:9px 12px;font-size:16px;color:#16a34a;font-weight:bold;'>" + fare + " <span style='font-size:12px;color:#64748b;font-weight:normal;'>(Zero Advance • Pay Driver After Trip)</span></td></tr>" +
          "</table>" +
          
          "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px;margin-top:16px;'>" +
            "<h4 style='color:#166534;margin:0 0 6px;font-size:13.5px;'>Pickup &amp; Tour Guidelines</h4>" +
            "<ul style='margin:0;padding-left:18px;font-size:12.5px;color:#15803d;line-height:1.5;'>" +
              "<li>Your assigned driver will reach your hotel reception/porch 10 minutes prior to pickup time.</li>" +
              "<li>Show this pass or voucher to your driver at the time of boarding.</li>" +
              "<li>Pay 100% of the locked tariff directly to your driver upon completion of the tour.</li>" +
            "</ul>" +
          "</div>" +
          
          "<div style='text-align:center;margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>24/7 Operations Desk • Aryan Taxi Mahabaleshwar</p>" +
            "<p style='font-size:13.5px;font-weight:bold;color:#0e2338;margin:6px 0 0;'>📞 Helpline: +91 99228 82044 • ✉️ aryansdtravels@gmail.com</p>" +
          "</div>" +
        "</div>";

      MailApp.sendEmail({
        to: email,
        subject: confirmSubject,
        htmlBody: confirmBody,
        name: "Aryan Taxi Mahabaleshwar",
        replyTo: "aryansdtravels@gmail.com"
      });
    }
    
    if (format === "json") {
      return ContentService.createTextOutput(JSON.stringify({
        result: "success",
        status: "CONFIRMED",
        bookingId: bookingId,
        name: name,
        tour: tour,
        fare: fare
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Return Clean Success Screen to the Owner
    return HtmlService.createHtmlOutput(
      "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'>" +
      "<title>Booking Confirmed | Aryan Taxi</title>" +
      "<style>body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;margin:0;padding:20px;background:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:90vh;}" +
      ".card{max-width:500px;width:100%;background:#ffffff;border:1px solid #bbf7d0;border-radius:14px;padding:32px 24px;text-align:center;box-shadow:0 10px 25px -5px rgba(0,0,0,0.08);}" +
      ".badge{display:inline-block;background:#dcfce7;color:#15803d;padding:6px 14px;border-radius:20px;font-weight:700;font-size:13px;margin-bottom:16px;}" +
      "h2{color:#14532d;margin:0 0 10px;font-size:22px;}" +
      "p{color:#475569;font-size:14px;line-height:1.5;margin:8px 0;}" +
      ".info-box{background:#f0fdf4;border:1px solid #dcfce7;border-radius:8px;padding:12px;margin:18px 0;text-align:left;font-size:13px;color:#166534;}" +
      "</style></head><body>" +
      "<div class='card'>" +
      "<div style='font-size:48px;line-height:1;margin-bottom:12px;'>✅</div>" +
      "<div class='badge'>BOOKING CONFIRMED & CAB RESERVED</div>" +
      "<h2>Booking Successfully Approved!</h2>" +
      "<p>Booking <strong>" + bookingId + "</strong> for <strong>" + name + "</strong> is now marked as <strong>CONFIRMED</strong> in your Google Sheet.</p>" +
      "<div class='info-box'>" +
      "<strong>📧 Guest Notified:</strong> Official Confirmation Voucher has been automatically emailed to <strong>" + (email || 'the guest') + "</strong>." +
      "</div>" +
      "<p style='font-size:12px;color:#94a3b8;margin-top:20px;'>Aryan Taxi Mahabaleshwar • 24/7 Operations Desk<br>You can now safely close this window.</p>" +
      "</div></body></html>"
    ).setTitle("Booking Confirmed - Aryan Taxi Mahabaleshwar")
     .addMetaTag("viewport", "width=device-width, initial-scale=1");
  } catch (err) {
    return HtmlService.createHtmlOutput(
      "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'>" +
      "<title>Error | Aryan Taxi</title>" +
      "<style>body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Roboto,sans-serif;margin:0;padding:20px;background:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:90vh;}" +
      ".card{max-width:500px;width:100%;background:#ffffff;border:1px solid #fecaca;border-radius:14px;padding:32px 24px;text-align:center;}" +
      "h2{color:#b91c1c;margin:0 0 10px;font-size:22px;}" +
      "p{color:#475569;font-size:14px;line-height:1.5;margin:8px 0;}" +
      "</style></head><body>" +
      "<div class='card'>" +
      "<div style='font-size:48px;line-height:1;margin-bottom:12px;'>❌</div>" +
      "<h2>Error Approving Booking</h2>" +
      "<p>" + err.toString() + "</p>" +
      "</div></body></html>"
    ).setTitle("Error Approving Booking - Aryan Taxi Mahabaleshwar")
     .addMetaTag("viewport", "width=device-width, initial-scale=1");
  }
}

function handleGetBookings() {
  try {
    var sheet = getBookingsSheet();
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
          status: data[i][11]
        });
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ result: "success", bookings: list }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  var action = e && e.parameter && e.parameter.action;
  var format = e && e.parameter && e.parameter.format;
  
  // 1-Click Approve Booking Link
  if (action === "approve" && e.parameter.id) {
    return handleOneClickApproval(e.parameter.id, format);
  }
  
  // Live Bookings Fetch for Operator Dashboard
  if (action === "get_bookings") {
    return handleGetBookings();
  }
  
  if (action === "gemini_trip_planner" && e.parameter.prompt) {
    return handleGeminiAIRequest(e.parameter.prompt, e.parameter.lang || "en");
  }
  
  return ContentService.createTextOutput(JSON.stringify({ status: "online", service: "Aryan Taxi Booking Webhook" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * OPTIONAL: Free Multilingual AI Trip Planner (Gemini 1.5 Flash Free Tier)
 * API Key is stored safely in Script Properties (Never in GitHub code!)
 */
function handleGeminiAIRequest(userPrompt, lang) {
  try {
    var apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
    if (!apiKey) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Gemini API key not configured in Script Properties."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var sysInstruction = "You are Aryan AI, the expert local trip planner and taxi concierge for Aryan Taxi Mahabaleshwar. " +
      "Help tourists plan sightseeing in Mahabaleshwar and Panchgani. " +
      "Official rates: Tour 1 (Arthur Seat & Kate's Point) = ₹1,200 (3.5 hrs), Tour 2 (Lingmala Waterfall & Sunset) = ₹1,200 (3.5 hrs), Tour 7 (Full Day Combo) = ₹3,000 (9 hrs). " +
      "Answer warmly and concisely in " + (lang === "mr" ? "Marathi" : (lang === "hi" ? "Hindi" : "English")) + ".";

    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;
    var payload = {
      contents: [
        { role: "user", parts: [{ text: sysInstruction + "\n\nUser Question: " + userPrompt }] }
      ]
    };

    var response = UrlFetchApp.fetch(url, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });

    var json = JSON.parse(response.getContentText());
    var reply = (json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts && json.candidates[0].content.parts[0].text) 
      ? json.candidates[0].content.parts[0].text 
      : "I am happy to assist you with Mahabaleshwar sightseeing. Please contact our 24/7 helpline at +91 99228 82044.";

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      reply: reply
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}