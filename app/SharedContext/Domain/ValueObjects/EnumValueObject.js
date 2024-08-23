class EnumValueObject {
    constructor(value, validValues) {
        if (!validValues.includes(value)) {
            throw new Error(`Invalid value: must be one of ${validValues.join(', ')}`);
        }
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

module.exports = EnumValueObject;
