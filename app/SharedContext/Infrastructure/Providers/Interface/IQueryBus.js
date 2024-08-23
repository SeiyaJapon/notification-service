class IQueryBus {
    registerHandler(queryName, handler) {
        throw new Error('RegisterHandler method not implemented');
    }

    async ask(query) {
        throw new Error('Ask method not implemented');
    }
}

module.exports = IQueryBus;