class PositiveIntValueObject {
    constructor(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Invalid positive integer: must be a positive integer');
        }
        this.value = value;
    }

    toInt() {
        return this.value;
    }
}

module.exports = PositiveIntValueObject;
