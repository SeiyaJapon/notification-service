import INotificationRepository from "../../../Domain/Notification/Repository/INotificationRepository";

class MySqlNotificationRepository extends INotificationRepository {
    constructor() {
        super();
        this.db = new MySqlDatabase();
    }

    async save(notification) {
        const query = `INSERT INTO notifications (id, message, timestamp) VALUES (?, ?, ?)`;
        const values = [notification.id, notification.message, notification.timestamp];
        await this.db.query(query, values);
    }

    async search(id) {
        const query = `SELECT * FROM notifications WHERE id = ?`;
        const values = [id];
        const result = await this.db.query(query, values);
        return result[0];
    }
}