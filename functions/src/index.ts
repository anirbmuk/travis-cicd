import * as functions from 'firebase-functions';
const cors = require('cors')({origin: true});

export const autocicd = functions.https.onRequest((request, response) => {
 cors(request, response, () => {
  response.status(200).send({ message: 'Response from autocicd function' });
 });
});
