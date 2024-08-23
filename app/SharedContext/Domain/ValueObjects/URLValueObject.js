class URLValueObject {
    constructor(value) {
        try {
            new URL(value);
        } catch (_) {
            throw new Error('Invalid URL: must be a valid URL');
        }
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

module.exports = URLValueObject;
