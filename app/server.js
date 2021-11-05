const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();
const csrfMiddleware = csurf();

const YAMl = require('yamljs');

const appRoutes = require('./action-module/routes');
const utilRoutes = require('./action-module/utils-routes');

const route = process.env.ROUTE_PATH || '/api';

const fileOwner = 'server.js';

app.use(helmet());

const server = app.listen(process.env.PORT || 5001, () => {
    const host = server.address().address;
    const { port } = server.address();
    console.log(`App Listening at http://${host}: ${port}`);
})

module.exports = server;