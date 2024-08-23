const ICommandHandler = require("../../../../SharedContext/Application/commands/ICommandHandler");
const NotificationCreatorService = require("../../../Domain/Notification/Service/NotificationCreatorService");

class CreateNotificationCommandHandler extends ICommandHandler {
    constructor(notificationCreator) {
        super();
        if (!(notificationCreator instanceof NotificationCreatorService)) {
            throw new Error('Invalid notification creator');
        }

        this.notificationCreator = notificationCreator;
    }

    async handle(command) {
        if (!(command instanceof CreateNotificationCommand)) {
            throw new Error('Invalid command');
        }

        await this.notificationCreator.create(command);
    }
}

module.exports = CreateNotificationCommandHandler;