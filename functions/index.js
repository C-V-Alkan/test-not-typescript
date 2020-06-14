const functions = require("firebase-functions");

exports.responseInput = functions.https.onRequest((request, response) => {
  const input = request.query.input;
  response.send("input is: " + input);
});
