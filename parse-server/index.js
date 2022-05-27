const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const {
  APP_ID,
  MASTER_KEY,
  DATABASE_URI,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  // GCM_SENDER_ID,
  // GCM_API_KEY,
  // PFX_PATH_DEV,
  // PFX_PASS_DEV,
  // PFX_PATH_PROD,
  // PFX_PASS_PROD,
  // APP_BUNDLE_ID,
  // IS_PRODUCTION
} = process.env;

const api = new ParseServer({
  databaseURI: DATABASE_URI || `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@mongo/todo_db`, // Connection string for your MongoDB database
  appId: APP_ID,
  masterKey: MASTER_KEY,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  fileKey: 'optionalFileKey',
  serverURL: 'http://parse:1337/parse', // Don't forget to change to https if needed
  appName: 'Todo',
  
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, () => {
  console.log('parse-server running on port 1337.');
});