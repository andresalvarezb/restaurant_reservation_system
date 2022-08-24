const express = require('express');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
const routesAPI = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
routesAPI(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => console.log(`[Run Server]  http://localhost:${port}`));
