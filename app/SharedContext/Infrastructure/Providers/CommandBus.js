const ICommandBus = require("./Interface/ICommandBus.js");

class CommandBus extends ICommandBus {
    constructor() {
        super();
        this.handlers = new Map();
    }

    registerHandler(commandName, handler) {
        this.handlers.set(commandName, handler);
    }

    async handle(command) {
        const handler = this.handlers.get(command.constructor.name);
        if (!handler) {
            throw new Error(`No handler registered for command: ${command.constructor.name}`);
        }
        await handler.handle(command);
    }
}

module.exports = CommandBus;
