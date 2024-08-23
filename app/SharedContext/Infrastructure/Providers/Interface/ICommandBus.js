class ICommandBus {
    registerHandler(commandName, handler) {
        throw new Error('RegisterHandler method not implemented');
    }

    async handle(command) {
        throw new Error('Handle method not implemented');
    }
}

module.exports = ICommandBus;
