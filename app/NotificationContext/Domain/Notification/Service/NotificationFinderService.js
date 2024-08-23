const INotificationRepository = require("../Repository/INotificationRepository.js");
const NotificationId = require("../NotificationId.js");

class NotificationFinderService {
    constructor(notificationRepository) {
        if (!(notificationRepository instanceof INotificationRepository)) {
            throw new Error('Invalid notification repository');
        }

        this.notificationRepository = notificationRepository;
    }

    async find(id) {
        if (!(id instanceof NotificationId)) {
            throw new Error('Invalid notification id');
        }

        return await this.notificationRepository.find(id);
    }
}

module.exports = NotificationFinderService;