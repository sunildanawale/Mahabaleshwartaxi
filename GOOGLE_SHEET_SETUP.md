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

### Step 1: Set Up Your Google Sheet

1. Go to [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. Name it: `Aryan Taxi Bookings`.
3. In **Row 1**, paste these exact column headers across Columns **A to L**:

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Timestamp** | **Booking ID** | **Customer Name** | **Customer Email** | **WhatsApp Phone** | **Travel Date** | **Pickup Time** | **Pickup Location** | **Selected Tour** | **Locked Fare** | **Special Notes** | **Status** |

---

### Step 2: Add the Apps Script Code

1. In your Google Sheet, click **Extensions** in the top menu -> **Apps Script**.
2. Erase all existing code inside `Code.gs` and paste the following complete script:

```javascript
/**
 * ARYAN TAXI MAHABALESHWAR — ZERO-COST BOOKING AUTOMATION & 1-CLICK APPROVAL ENGINE
 * Owner Email: aryansdtravels@gmail.com
 * Zero disclosure of personal names — branded as Aryan Taxi Mahabaleshwar
 * Free Quota: 100 emails/day on free @gmail.com accounts (1,500/day on Workspace)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    if (e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch(err) { data = e.parameter || {}; }
    } else {
      data = e.parameter || {};
    }
    
    // Check if request is an AI Trip Planner query
    if (data.action === "gemini_trip_planner" || data.prompt) {
      return handleGeminiAIRequest(data.prompt, data.lang || "en");
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var bookingId = data.bookingId || data.id || ('AMT-' + Date.now().toString().slice(-6));
    var name = data.name || 'Valued Guest';
    var email = data.email || '';
    var phone = data.phone || '';
    var date = data.date || '';
    var time = data.time || '09:00 AM';
    var pickup = data.pickup || '';
    var tour = data.tour || 'Sightseeing Tour';
    var fare = data.fare || '0';
    var notes = data.notes || 'None';
    var status = "Pending Approval";

    // Deduplication Lock: Prevent duplicate entries and duplicate emails
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
    var webAppUrl = ScriptApp.getService().getUrl();
    var approveUrl = webAppUrl + "?action=approve&id=" + encodeURIComponent(bookingId);
    
    var waUrl = "https://wa.me/91" + cleanPhone + "?text=" + encodeURIComponent(
      "Hello " + name + ", this is Aryan Taxi Mahabaleshwar regarding your booking request " + bookingId + " for " + tour + ". Your tariff is locked at ₹" + fare + ". Let us confirm your pickup schedule."
    );

    var ownerSubject = "🚖 NEW BOOKING REQUEST: " + bookingId + " - " + name + " (₹" + fare + ") [PENDING APPROVAL]";
    var ownerBody = 
      "<div style='font-family:Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:10px;padding:20px;background:#ffffff;'>" +
        "<div style='background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:12px;margin-bottom:15px;'>" +
          "<strong style='color:#92400e;font-size:15px;'>⏳ STATUS: PENDING OPERATOR AVAILABILITY APPROVAL</strong><br>" +
          "<span style='color:#b45309;font-size:13px;'>Check availability and click the green button below to confirm the booking and notify the guest.</span>" +
        "</div>" +
        
        "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px;text-align:center;margin-bottom:18px;'>" +
          "<a href='" + approveUrl + "' style='background:#16a34a;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;font-size:15px;'>✅ 1-CLICK APPROVE &amp; CONFIRM BOOKING</a>" +
          "<p style='margin:8px 0 0;font-size:12px;color:#15803d;'>Clicking this button automatically marks the booking as Confirmed in your Sheet and emails the guest their Confirmed Travel Voucher.</p>" +
        "</div>" +

        "<h3 style='color:#0f2b48;margin-top:0;'>Booking Details</h3>" +
        "<table style='width:100%;border-collapse:collapse;font-size:14px;'>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Pass Reference ID:</strong></td><td><strong>" + bookingId + "</strong></td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Guest Name:</strong></td><td>" + name + "</td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>WhatsApp Phone:</strong></td><td><a href='tel:+91" + cleanPhone + "'>" + phone + "</a></td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Email Address:</strong></td><td><a href='mailto:" + email + "'>" + email + "</a></td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Tour Package:</strong></td><td>" + tour + "</td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Travel Date & Time:</strong></td><td>" + date + " at " + time + "</td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Pickup Hotel / Landmark:</strong></td><td>" + pickup + "</td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Locked Union Fare:</strong></td><td style='color:#16a34a;font-size:16px;font-weight:bold;'>₹" + fare + " (Zero Advance / Pay After Trip)</td></tr>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Special Request:</strong></td><td>" + notes + "</td></tr>" +
        "</table>" +
        
        "<div style='margin-top:20px;padding-top:15px;border-top:1px solid #e2e8f0;display:flex;gap:10px;'>" +
          "<a href='" + waUrl + "' style='background:#10b981;color:#ffffff;padding:10px 18px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;margin-right:10px;'>💬 WhatsApp Customer</a>" +
          "<a href='tel:+91" + cleanPhone + "' style='background:#0284c7;color:#ffffff;padding:10px 18px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;'>📞 Call Customer</a>" +
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
        "<div style='font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #0891b2;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;letter-spacing:0.5px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#0891b2;font-size:13px;font-weight:bold;margin:4px 0 0;'>Direct Local Owner-Driver Cab Service &bull; Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 14px;margin:18px 0;'>" +
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
            "<tr><td style='padding:9px 12px;color:#64748b;'><strong>Locked Union Fare:</strong></td><td style='padding:9px 12px;font-size:16px;color:#16a34a;font-weight:bold;'>₹" + fare + " <span style='font-size:12px;color:#64748b;font-weight:normal;'>(Zero Advance &bull; Pay Driver After Trip)</span></td></tr>" +
          "</table>" +
          
          "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-top:16px;'>" +
            "<p style='margin:0;color:#166534;font-size:12.5px;line-height:1.4;'><strong>✓ Aryan Taxi Mountain Assurance:</strong> Dedicated private 4-seater tourist cab, licensed local hill drivers native to Sahyadri ghats, and fixed Taxi Union tariffs with zero hidden surcharges.</p>" +
          "</div>" +
          
          "<div style='text-align:center;margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>24/7 Operations Desk &bull; Aryan Taxi Mahabaleshwar</p>" +
            "<p style='font-size:13.5px;font-weight:bold;color:#0e2338;margin:6px 0 0;'>📞 Helpline: +91 99228 82044 &bull; ✉️ aryansdtravels@gmail.com</p>" +
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
 * Triggered when owner clicks [ ✅ 1-CLICK APPROVE & CONFIRM BOOKING ] in alert email
 */
function handleOneClickApproval(bookingId) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var foundRow = -1;
    var rowData = null;
    
    // Find row by Booking ID (Column B = index 1)
    for (var i = 1; i < data.length; i++) {
      if (data[i][1] && String(data[i][1]).trim() === String(bookingId).trim()) {
        foundRow = i + 1;
        rowData = data[i];
        break;
      }
    }
    
    if (foundRow === -1) {
      return HtmlService.createHtmlOutput(
        "<div style='font-family:Arial,sans-serif;text-align:center;padding:50px;'>" +
        "<h2 style='color:#ef4444;'>❌ Booking ID Not Found</h2>" +
        "<p>Could not locate reference: <strong>" + bookingId + "</strong> in the sheet.</p>" +
        "</div>"
      );
    }
    
    // Update status in Column L (column 12)
    sheet.getRange(foundRow, 12).setValue("CONFIRMED");
    
    var name = rowData[2] || "Valued Guest";
    var email = rowData[3] || "";
    var phone = rowData[4] || "";
    var date = rowData[5] || "";
    var time = rowData[6] || "";
    var pickup = rowData[7] || "";
    var tour = rowData[8] || "";
    var fare = rowData[9] || "";

    // Send Official Confirmation Email to Customer
    if (email && email.indexOf("@") !== -1) {
      var confirmSubject = "🎉 Booking Confirmed: Dedicated Tourist Cab Reserved - Pass #" + bookingId + " | Aryan Taxi Mahabaleshwar";
      var confirmBody = 
        "<div style='font-family:Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:12px;padding:24px;background:#ffffff;color:#1e293b;'>" +
          "<div style='text-align:center;padding-bottom:16px;border-bottom:2px solid #10b981;'>" +
            "<h2 style='color:#0e2338;margin:0;font-size:22px;'>ARYAN TAXI MAHABALESHWAR</h2>" +
            "<p style='color:#10b981;font-size:13px;font-weight:bold;margin:4px 0 0;'>Official Sightseeing &amp; Transfer Voucher &bull; Explore Sahyadri</p>" +
          "</div>" +
          
          "<div style='background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:14px;margin:18px 0;'>" +
            "<strong style='color:#065f46;font-size:15px;'>✅ YOUR BOOKING IS OFFICIALLY CONFIRMED!</strong>" +
            "<p style='margin:4px 0 0;font-size:13px;color:#047857;line-height:1.4;'>Your private tourist cab has been reserved. A licensed, mountain-experienced driver has been assigned for your doorstep porch pickup on schedule.</p>" +
          "</div>" +
          
          "<p style='font-size:14px;'>Dear <strong>" + name + "</strong>,</p>" +
          "<p style='font-size:13.5px;color:#475569;'>We are pleased to inform you that your cab reservation has been confirmed by the Aryan Taxi Dispatch Operations team. Here are your confirmed trip details:</p>" +
          
          "<table style='width:100%;border-collapse:collapse;margin:15px 0;background:#f8fafc;border-radius:8px;font-size:13.5px;border:1px solid #e2e8f0;'>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pass Reference ID:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#0284c7;font-weight:bold;'>" + bookingId + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Lead Passenger:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + name + "</strong> (" + phone + ")</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Confirmed Tour:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'><strong>" + tour + "</strong></td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Travel Schedule:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + date + " at " + time + "</td></tr>" +
            "<tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;'><strong>Pickup Location:</strong></td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0;'>" + pickup + " (Doorstep Hotel Porch)</td></tr>" +
            "<tr><td style='padding:9px 12px;color:#64748b;'><strong>Official Tariff:</strong></td><td style='padding:9px 12px;font-size:16px;color:#16a34a;font-weight:bold;'>" + fare + " <span style='font-size:12px;color:#64748b;font-weight:normal;'>(Zero Advance &bull; Pay Driver After Trip)</span></td></tr>" +
          "</table>" +
          
          "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-top:16px;'>" +
            "<p style='margin:0;color:#166534;font-size:12.5px;line-height:1.4;'><strong>🚖 Dispatch Reassurance:</strong> Your dedicated tourist cab will report directly to your hotel porch. The assigned driver will contact you via WhatsApp / phone prior to arrival.</p>" +
          "</div>" +
          
          "<div style='text-align:center;margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;'>" +
            "<p style='font-size:12px;color:#64748b;margin:0;'>24/7 Operations Desk &bull; Aryan Taxi Mahabaleshwar</p>" +
            "<p style='font-size:13.5px;font-weight:bold;color:#0e2338;margin:6px 0 0;'>📞 Helpline: +91 99228 82044 &bull; ✉️ aryansdtravels@gmail.com</p>" +
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
    
    // Return Clean Success Screen to the Owner
    return HtmlService.createHtmlOutput(
      "<div style='font-family:Arial,sans-serif;max-width:550px;margin:40px auto;border:1px solid #bbf7d0;border-radius:12px;padding:30px;text-align:center;background:#f0fdf4;box-shadow:0 10px 25px rgba(0,0,0,0.05);'>" +
        "<div style='font-size:48px;margin-bottom:10px;'>✅</div>" +
        "<h2 style='color:#166534;margin:0 0 10px;'>Booking Successfully Approved!</h2>" +
        "<p style='font-size:15px;color:#334155;line-height:1.5;'>Booking <strong>" + bookingId + "</strong> for <strong>" + name + "</strong> is now marked as <strong>CONFIRMED</strong> in your Google Sheet.</p>" +
        "<p style='font-size:14px;color:#15803d;background:#dcfce7;padding:10px;border-radius:6px;margin:15px 0;'>📧 Official Confirmation Email has been automatically sent to <strong>" + email + "</strong>.</p>" +
        "<p style='font-size:13px;color:#64748b;'>You can now safely close this window.</p>" +
      "</div>"
    );
  } catch (err) {
    return HtmlService.createHtmlOutput(
      "<div style='font-family:Arial,sans-serif;text-align:center;padding:50px;'>" +
      "<h2 style='color:#ef4444;'>Error Approving Booking</h2>" +
      "<p>" + err.toString() + "</p>" +
      "</div>"
    );
  }
}

function doGet(e) {
  var action = e && e.parameter && e.parameter.action;
  
  // 1-Click Approve Booking Link
  if (action === "approve" && e.parameter.id) {
    return handleOneClickApproval(e.parameter.id);
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
    var reply = json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts[0].text;
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", reply: reply || "I am ready to help plan your trip!" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
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
