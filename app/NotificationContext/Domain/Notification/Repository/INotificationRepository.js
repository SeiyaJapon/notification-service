class INotificationRepository {
    async save(notification) {
        throw new Error('Method save not implemented');
    }

    async findByUserId(userId) {
        throw new Error('Method findByUserId not implemented');
    }
}

module.exports = INotificationRepository;