# 📊 Complete Zero-Cost Booking Automation & Google Sheets Setup Guide
## Aryan Taxi Mahabaleshwar — 100% Free Automated Booking Engine

This guide walks you through connecting your website (`Mahabaleshwartaxi`) to **Google Sheets** and **Google Apps Script** to achieve **100% free, automated dual-email dispatch and booking records** with zero monthly fees, zero subscriptions, and zero paid API costs.

---

### What This System Does Automatically:
1. **Instant Dual-Email Dispatch (100% Free):**
   - **To Customer:** Sends an official, branded Booking Request Voucher with Pass ID, tour details, pickup hotel, locked Union tariff, and clear status (*"Booking Request Received — Pending Manual Availability Approval"*).
   - **To Owner (`aryansdtravels@gmail.com`):** Sends an instant lead alert with customer name, email, phone number, locked fare, 1-click WhatsApp chat link, and 1-click phone call button.
2. **Real-Time Google Sheets Record Keeping:** Saves every booking with timestamp, Pass ID, name, email, phone, pickup, tour, and fare.
3. **Pending Status Policy:** Adheres strictly to the business rule: *Taxi dispatch is subject to operator availability confirmation.*
4. **Secure Multilingual AI Trip Planner (Gemini API Free Tier):** Uses Google Apps Script as a secure serverless proxy so your Gemini API key is stored safely inside Google Cloud and **never exposed in public GitHub files**.

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
2. Erase any code inside `Code.gs` and paste the following complete script:

```javascript
/**
 * ARYAN TAXI MAHABALESHWAR — ZERO-COST BOOKING AUTOMATION & DUAL EMAIL ENGINE
 * Owner Email: aryansdtravels@gmail.com
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

    // 2. Email 1: Instant Alert to Owner (aryansdtravels@gmail.com)
    var ownerEmail = "aryansdtravels@gmail.com";
    var cleanPhone = phone.replace(/[^0-9]/g, '');
    var waUrl = "https://wa.me/91" + cleanPhone + "?text=" + encodeURIComponent(
      "Hello " + name + ", this is Sunil from Aryan Taxi Mahabaleshwar regarding your booking request " + bookingId + " for " + tour + ". Your tariff is locked at ₹" + fare + ". Let us confirm your pickup schedule."
    );

    var ownerSubject = "🚖 NEW BOOKING REQUEST: " + bookingId + " - " + name + " (₹" + fare + ") [PENDING APPROVAL]";
    var ownerBody = 
      "<div style='font-family:Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #cbd5e1;border-radius:10px;padding:20px;background:#ffffff;'>" +
        "<div style='background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:10px;margin-bottom:15px;'>" +
          "<strong style='color:#92400e;font-size:15px;'>⏳ STATUS: PENDING OPERATOR AVAILABILITY APPROVAL</strong><br>" +
          "<span style='color:#b45309;font-size:13px;'>Action required: Check cab availability and contact guest to confirm driver dispatch.</span>" +
        "</div>" +
        "<h3 style='color:#0f2b48;margin-top:0;'>New Booking Details</h3>" +
        "<table style='width:100%;border-collapse:collapse;font-size:14px;'>" +
          "<tr><td style='padding:6px 0;color:#64748b;'><strong>Pass ID:</strong></td><td><strong>" + bookingId + "</strong></td></tr>" +
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
      htmlBody: ownerBody
    });

    // 3. Email 2: Send Branded Digital Voucher to Customer
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
            "<p style='margin:4px 0 0;font-size:12.5px;color:#b45309;line-height:1.4;'>Your official Union tariff is locked. Please note that vehicle dispatch and driver assignment are subject to manual availability approval by our local operator. We will contact you via WhatsApp / phone shortly to reconfirm your cab.</p>" +
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
            "<p style='font-size:12px;color:#64748b;margin:0;'>Need immediate confirmation or custom trip planning? Reach us 24/7:</p>" +
            "<p style='font-size:13.5px;font-weight:bold;color:#0e2338;margin:6px 0 0;'>📞 Helpline: +91 99228 82044 &bull; ✉️ aryansdtravels@gmail.com</p>" +
          "</div>" +
        "</div>";

      MailApp.sendEmail({
        to: email,
        subject: customerSubject,
        htmlBody: customerBody
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
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  var action = e && e.parameter && e.parameter.action;
  if (action === "gemini_trip_planner" && e.parameter.prompt) {
    return handleGeminiAIRequest(e.parameter.prompt, e.parameter.lang || "en");
  }
  return ContentService.createTextOutput(JSON.stringify({ status: "online", service: "Aryan Taxi Booking Webhook" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

### Step 3: Deploy as a Web App

1. In Apps Script, click the blue **Deploy** button (top right) -> **New deployment**.
2. Click the **gear icon** next to "Select type" -> choose **Web app**.
3. Configure the deployment:
   - **Description**: `Aryan Taxi Booking Automation & Dual Email Webhook`
   - **Execute as**: `Me (your Google email)`
   - **Who has access**: `Anyone` *(Crucial so customers on GitHub Pages can post booking requests without logging into Google)*
4. Click **Deploy**.
5. When prompted for authorization:
   - Click **Authorize access** -> select your Google account.
   - Click **Advanced** -> click **Go to Untitled project (unsafe)** -> click **Allow**.
6. Copy the generated **Web app URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Configure Web App URL in Your Website

1. Open your admin dashboard: [`admin.html`](https://sunildanawale.github.io/Mahabaleshwartaxi/admin.html).
2. Go to the **Settings & Security** tab.
3. Paste your Web App URL into the **Google Apps Script Webhook URL** input field.
4. Click **Save Webhook URL**.

---

### Step 5 (Optional): Free Multilingual Gemini AI Configuration

To enable the free Gemini AI trip planner without exposing any private keys on GitHub:
1. Get a 100% free API key from [Google AI Studio](https://aistudio.google.com/) (zero cost, no credit card required).
2. In your Google Apps Script, click **Project Settings** (gear icon on the left sidebar).
3. Scroll down to **Script Properties** -> click **Add script property**.
4. Set Property: `GEMINI_API_KEY`
5. Set Value: *Paste your Google AI Studio API key*.
6. Click **Save script properties**.

> [!NOTE]
> By storing your Gemini API key in **Script Properties**, it stays completely protected inside Google Cloud. It is never exposed in GitHub or visible in browser source code.

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
