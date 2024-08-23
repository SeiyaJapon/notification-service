// import IQuery from "../../../../SharedContext/Application/queries/IQuery";
const IQuery = require("../../../../SharedContext/Application/queries/IQuery");

class GetNotificationQuery extends IQuery {
    constructor(id) {
        super();
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

module.exports = GetNotificationQuery