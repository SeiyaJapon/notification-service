class NullableIntValueObject {
    constructor(value) {
        if (value !== null && typeof value !== 'number') {
            throw new Error('Invalid value: must be a number or null');
        }

        this.value = value;
    }

    toInt() {
        return this.value;
    }
}

module.exports = NullableIntValueObject;