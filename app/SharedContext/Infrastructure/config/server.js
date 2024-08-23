const express = require('express');
const bodyParser = require('body-parser');

const createServer = (commandBus, queryBus) => {
    const app = express();
    app.use(bodyParser.json());

    const notificationRoutes = require('../../../NotificationContext/Infrastructure/source/routes/routes')(commandBus, queryBus);
    app.use('/api', notificationRoutes);

    return app;
};

module.exports = createServer;
