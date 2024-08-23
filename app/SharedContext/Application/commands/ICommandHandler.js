class ICommandHandler {
    handler(command) {
        throw new Error('Method handle not implemented');
    }
}

module.exports = ICommandHandler;