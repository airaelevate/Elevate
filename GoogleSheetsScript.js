/* eslint-disable */
/**
 * Google Apps Script to receive Student Enquiry submissions and write them to a Google Sheet.
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1577HznCUg2Hd5qtkDp4gHQjqm0xrzYo3FzOZsRFkg7s/edit
 * 2. Click "Extensions" > "Apps Script" in the top menu.
 * 3. Delete any code in the editor and paste this code.
 * 4. Click Save (floppy disk icon) or press Ctrl+S.
 * 5. Click "Deploy" > "Manage deployments".
 * 6. Click the pencil icon (Edit) on the active deployment, change the version to "New version", and click "Deploy".
 *    (Or click "New deployment", choose "Web app", set Execute as "Me", Access to "Anyone", and Deploy).
 * 7. Copy the new Web App URL (must end with /exec).
 * 8. Update your .env file with the new URL and restart your dev server.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Enquiry Date", "Name", "Email", "Course", "Message"]);
    }
    
    var data;
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter || {};
    }
    
    // Append the enquiry row with the current timestamp
    var timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.course || "",
      data.message || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Enquiry submitted successfully"
    }))
    .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
