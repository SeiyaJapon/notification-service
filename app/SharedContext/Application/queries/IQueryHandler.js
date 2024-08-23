const IQueryResult = require('./IQueryResult');

class IQueryHandler {
    handle(query) {
        throw new Error("Method handle not implemented");
    }

    ensureQueryResult(result) {
        if (!(result instanceof IQueryResult)) {
            throw new Error('Query handler must return an instance of IQueryResult');
        }
        return result;
    }
}

module.exports = IQueryHandler;