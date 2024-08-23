const NotificationModel = require('../../domain/Notification/NotificationModel');
const { v4: uuidv4 } = require('uuid');

class NotificationRepository {
    async create(notificationEntity) {
        return await NotificationModel.create({
            id: uuidv4(),
            userId: notificationEntity.userId,
            message: notificationEntity.message,
            timestamp: notificationEntity.timestamp,
        });
    }

    async findById(id) {
        return await NotificationModel.findByPk(id);
    }

    async findAll() {
        return await NotificationModel.findAll();
    }
}

module.exports = NotificationRepository;
