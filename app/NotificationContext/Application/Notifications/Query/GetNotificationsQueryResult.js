const IQueryResult = require("../../../../SharedContext/Application/queries/IQueryResult");

class GetNotificationsQueryResult extends IQueryResult {
    constructor(id, userId, message, timestamp) {
        super();
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.timestamp = timestamp;
    }

    result() {
        return [this.id, this.userId, this.message, this.timestamp];
    }
}

module.exports = GetNotificationsQueryResult;