class StringValueObject {
    constructor(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('Invalid string: must be a non-empty string');
        }
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

module.exports = StringValueObject;
