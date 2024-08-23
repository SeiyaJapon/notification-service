// import IQueryHandler from "../../../../SharedContext/Application/queries/IQueryHandler";
// import GetNotificationsQueryResult from "./GetNotificationsQueryResult";
// import NotificationFinderService from "../../../Domain/Notification/Service/NotificationFinderService";
// import GetNotificationQuery from "./GetNotificationQuery";
const IQueryHandler = require("../../../../SharedContext/Application/queries/IQueryHandler");
const GetNotificationsQueryResult = require("./GetNotificationsQueryResult");
const NotificationFinderService = require("../../../Domain/Notification/Service/NotificationFinderService");
const GetNotificationQuery = require("./GetNotificationQuery");

class GetNotificationsQueryHandler extends IQueryHandler {
    constructor(notificationFinder) {
        super();
        if (!(notificationFinder instanceof NotificationFinderService)) {
            throw new Error('Invalid notification finder');
        }

        this.notificationFinder = notificationFinder;
    }

    async handle(query) {
        if (!(query instanceof GetNotificationQuery)) {
            throw new Error('Invalid query');
        }

        let result = await this.notificationFinder.find(query.getId());

        return this.ensureQueryResult(
            new GetNotificationsQueryResult(
                result.id,
                result.userId,
                result.message,
                result.timestamp
            )
        );
    }
}

module.exports = GetNotificationsQueryHandler;