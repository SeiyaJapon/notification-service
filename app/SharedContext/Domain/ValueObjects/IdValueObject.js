class IdValueObject {
    constructor(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('Invalid ID: must be a non-empty string');
        }
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

module.exports = IdValueObject;
