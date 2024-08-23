class BooleanValueObject {
    constructor(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Invalid boolean: must be true or false');
        }
        this.value = value;
    }

    toBoolean() {
        return this.value;
    }
}

module.exports = BooleanValueObject;
