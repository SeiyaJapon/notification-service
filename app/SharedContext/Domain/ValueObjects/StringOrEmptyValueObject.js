class StringOrEmptyValueObject {
    constructor(value) {
        if (value !== null && typeof value !== 'string') {
            throw new Error('Invalid value: must be a string or null');
        }

        this.value = value;
    }

    toString() {
        return this.value;
    }
}

module.exports = StringOrEmptyValueObject;