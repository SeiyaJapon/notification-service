const express = require('express');
const GetNotificationController = require("../../Http/GetNotificationController");

const router = express.Router();

module.exports = (commandBus, queryBus) => {
    const getNotificationController = new GetNotificationController(queryBus);

    // POST /notifications

    // GET /notifications/:id
    router.get('/notifications/:id', (request, response) => {
        getNotificationController.invoke(request, response).catch(err => {
            console.error(err);
            response.status(500).send();
        });
    });

    router.get('/aux', (request, response) => {
        response.status(200).send('Aux');
    });

    return router;
}