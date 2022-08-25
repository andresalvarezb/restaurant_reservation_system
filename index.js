const express = require('express');
const {
    logErrors,
    errorHandler,
    boomErrorHandler,
} = require('./middlewares/error.handler');
const routesAPI = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
routesAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`[Run Server]  http://localhost:${port}`));
