const IQueryBus = require('./Interface/IQueryBus.js');

class QueryBus extends IQueryBus {
    constructor() {
        super();
        this.queryHandlers = new Map();
    }

    registerHandler(queryName, handler) {
        this.queryHandlers.set(queryName, handler);
    }

    async ask(query) {
        const handler = this.queryHandlers.get(query.constructor.name);

        if (!handler) {
            throw new Error(`No handler registered for query: ${query.constructor.name}`);
        }

        return await handler.handle(query);
    }
}

module.exports = QueryBus;