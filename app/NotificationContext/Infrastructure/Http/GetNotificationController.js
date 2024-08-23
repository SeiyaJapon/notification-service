const IQueryBus = require("../../../SharedContext/Infrastructure/Providers/Interface/IQueryBus");
const GetNotificationQuery = require("../../Application/Notifications/Query/GetNotificationQuery");

class GetNotificationController {
    constructor(queryBus) {
        if (!(queryBus instanceof IQueryBus)) {
            throw new Error('Invalid query bus');
        }
        this.queryBus = queryBus;
    }

    async invoke(request, response) {
        const query = new GetNotificationQuery(request.params.id);
        const notification = await this.queryBus.ask(query);

        if (!notification) {
            return response.status(404).json({ message: 'Notification not found' });
        }

        response.status(200).json(notification);
    }
}

module.exports = GetNotificationController;