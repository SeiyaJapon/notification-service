class DateValueObject {
    constructor(value) {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            throw new Error('Invalid date: must be a valid Date object');
        }
        this.value = value;
    }

    toDate() {
        return this.value;
    }
}

module.exports = DateValueObject;
