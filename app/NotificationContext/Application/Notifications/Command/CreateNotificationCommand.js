import ICommand from "../../../../SharedContext/Application/commands/ICommand";

class CreateNotificationCommand extends ICommand {
    constructor(id, title, message, userId) {
        super();
        this._id = id;
        this._title = title;
        this._message = message;
        this._userId = userId;
    }

    getId() {
        return this._id;
    }

    getTitle() {
        return this._title;
    }

    getMessage() {
        return this._message;
    }

    getUserId() {
        return this._userId;
    }
}

export default CreateNotificationCommand;