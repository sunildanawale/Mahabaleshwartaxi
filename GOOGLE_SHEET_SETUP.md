# 📊 Google Sheets Setup Guide — Automatic Lead Capture & Live Booking Sync

Follow these 4 quick steps to connect your website (`Mahabaleshwartaxi`) to Google Sheets.  
Once configured, **every website inquiry and booking will instantly save to your Google Sheet in real-time** — even if the customer closes their browser before pressing send on WhatsApp!

---

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.new) and create a blank spreadsheet.
2. Name it: `Mahabaleshwar Taxi Bookings`.
3. In **Row 1**, enter the following column headers:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| **Timestamp** | **Booking ID** | **Customer Name** | **Phone Number** | **Travel Date** | **Pickup Location** | **Selected Tour** | **Fare (₹)** | **Status** |

---

### Step 2: Add Apps Script Code

1. In your Google Sheet, click **Extensions** in the top menu -> select **Apps Script**.
2. Erase any code inside `Code.gs` and paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.bookingId || '',
      data.name || '',
      data.phone || '',
      data.date || '',
      data.pickup || '',
      data.tour || '',
      data.fare || '',
      data.status || 'pending'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy as Web App

1. In Apps Script, click **Deploy** (top right) -> **New deployment**.
2. Click the gear icon next to "Select type" -> select **Web app**.
3. Fill in the deployment details:
   - **Description**: `Mahabaleshwar Taxi Booking Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial so the website can post leads without requiring login)*
4. Click **Deploy**.
5. Grant permissions if prompted (Click *Advanced* -> *Go to Mahabaleshwar Taxi Webhook (unsafe)* -> *Allow*).
6. Copy the **Web App URL** (it looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Paste Web App URL into Your Website Admin Dashboard

1. Open your website Admin Panel: [`admin.html`](https://sunildanawale.github.io/Mahabaleshwartaxi/admin.html).
2. Go to **Settings & Security** tab.
3. Paste your Web App URL into the **Google Apps Script Webhook URL** input box.
4. Click **Save Webhook URL**.

---

### ✅ Done!
Now, whenever any user on mobile or desktop fills in the booking form on your website, **their inquiry is automatically saved directly into your Google Sheet instantly!**
