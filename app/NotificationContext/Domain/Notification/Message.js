import StringOrEmptyValueObject from "../../../SharedContext/Domain/ValueObjects/StringOrEmptyValueObject";

class NotificationMessage extends StringOrEmptyValueObject {
    constructor(value) {
        super(value);
    }
}

export default NotificationMessage;