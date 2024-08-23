import TimestampValueObject from "../../../SharedContext/Domain/ValueObjects/TimestampValueObject";

class NotificationTimestamp extends TimestampValueObject {
    constructor(timestamp) {
        super(timestamp);
    }
}

export default NotificationTimestamp;