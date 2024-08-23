const INotificationRepository = require('../Repository/INotificationRepository');

class NotificationCreatorService {
    constructor(notificationRepository) {
        if (!(notificationRepository instanceof INotificationRepository)) {
            throw new Error('Invalid notification repository');
        }

        this.notificationRepository = notificationRepository;
    }

    async create(notification) {
        if (!(notification instanceof Notification)) {
            throw new Error('Invalid notification');
        }

        return await this.notificationRepository.save(notification);
    }
}

module.exports = NotificationCreatorService;