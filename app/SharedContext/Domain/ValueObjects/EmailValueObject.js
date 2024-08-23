class EmailValueObject {
    constructor(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            throw new Error('Invalid email: must be a valid email address');
        }
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

module.exports = EmailValueObject;
