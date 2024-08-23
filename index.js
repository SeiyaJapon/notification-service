const express = require('express');
const CommandBus = require('./app/SharedContext/Infrastructure/Providers/CommandBus.js');
const QueryBus = require('./app/SharedContext/Infrastructure/Providers/QueryBus.js');
const NotificationFinderService = require('./app/NotificationContext/Domain/Notification/Service/NotificationFinderService.js');
const NotificationCreatorService = require('./app/NotificationContext/Domain/Notification/Service/NotificationCreatorService.js');
const MySqlNotificationRepository = require('./app/SharedContext/Infrastructure/Persistence/Repository/MySqlNotificationRepository.js');
const CreateNotificationHandler = require('./app/NotificationContext/Application/Notifications/Command/CreateNotificationCommandHandler.js');
const GetNotificationsHandler = require('./app/NotificationContext/Application/Notifications/Query/GetNotificationsQueryHandler.js');
const routes = require('./app/NotificationContext/Infrastructure/source/routes/routes.js');

const commandBus = new CommandBus();
const queryBus = new QueryBus();

const notificationRepository = new MySqlNotificationRepository();
const notificationFinderService = new NotificationFinderService(notificationRepository);
const notificationCreatorService = new NotificationCreatorService(notificationRepository);

commandBus.registerHandler('CreateNotificationCommand', new CreateNotificationHandler(notificationCreatorService));
queryBus.registerHandler('GetNotificationsQuery', new GetNotificationsHandler(notificationFinderService));

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', routes(commandBus, queryBus));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});