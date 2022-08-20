const express = require('express');
const routesAPI = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
routesAPI(app);

app.listen(port, () => console.log(`[Run Server]  http://localhost:${port}`));
