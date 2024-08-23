const IdValueObject = require("../../../SharedContext/Domain/ValueObjects/IdValueObject");


class NotificationId extends IdValueObject {
    constructor(value) {
        super(value);
    }
}

module.exports = NotificationId;