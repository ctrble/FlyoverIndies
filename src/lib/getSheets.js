import { google } from 'googleapis';

// https://andreaskeller.name/blog/nextjs-google-sheets-cms
const getSheets = async () => {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes
    );

    // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'A2:F99',
    });

    const rows = response.data.values;

    // map rows to keys that can be more easily parsed later
    if (rows.length) {
      return rows.map((row) => ({
        name: row[0],
        pronouns: row[1],
        imagePath: row[2] || null,
        position: row[3],
        about: row[4],
        website: row[5] || null,
      }));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return [];
};

export default getSheets;
