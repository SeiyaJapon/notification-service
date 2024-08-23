const INotificationRepository = require('../../../../NotificationContext/Domain/Notification/Repository/INotificationRepository');
const NotificationModel = require('../Models/Notification/NotificationModel');

class MySqlNotificationRepository extends INotificationRepository {
    async save(notification) {
        return await NotificationModel.create({
            id: notification.id,
            userId: notification.userId,
            message: notification.message,
            timestamp: notification.timestamp,
        });
    }

    async findByUserId(userId) {
        return await NotificationModel.findOne({
            where: {
                userId: userId,
            },
        });
    }
}

module.exports = MySqlNotificationRepository;