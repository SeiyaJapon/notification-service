class NonEmptyArrayValueObject {
    constructor(value) {
        if (!Array.isArray(value) || value.length === 0) {
            throw new Error('Invalid array: must be a non-empty array');
        }
        this.value = value;
    }

    toArray() {
        return this.value;
    }
}

module.exports = NonEmptyArrayValueObject;
