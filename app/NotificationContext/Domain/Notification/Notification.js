import NotificationId from "./NotificationId";
import NotificationMessage from "./Message";
import UserId from "./UserId";
import NotificationTimestamp from "./NotificationTimestamp";

class Notification {
    /**
     * Notification
     * @param {NotificationId} id
     * @param {UserId} userId
     * @param {NotificationMessage} message
     * @param {TimestampValueObject} timestamp
     */
    constructor(id, userId, message, timestamp) {
        this.dataValidation(id, userId, message, timestamp);

        this.id = id;
        this.userId = userId;
        this.message = message;
        this.timestamp = timestamp;
    }

    updateMessage(newMessage) {
        if (!(newMessage instanceof NotificationMessage)) {
            throw new Error('Invalid message: must be a NotificationMessage object');
        }

        this.message = newMessage;
    }

    updateTimestamp(newTimestamp) {
        if (!(newTimestamp instanceof NotificationTimestamp)) {
            throw new Error('Invalid timestamp: must be a NotificationTimestamp object');
        }

        this.timestamp = newTimestamp;
    }

    dataValidation(id, userId, message, timestamp) {
        if (!(id instanceof NotificationId)) {
            throw new Error('Invalid id: must be a NotificationId object');
        }
        if (!(userId instanceof UserId)) {
            throw new Error('Invalid userId: must be a UserId object');
        }
        if (!(message instanceof NotificationMessage)) {
            throw new Error('Invalid message: must be a NotificationMessage object');
        }
        if (!(timestamp instanceof NotificationTimestamp)) {
            throw new Error('Invalid timestamp: must be a NotificationTimestamp object');
        }
    }
}

export default Notification;