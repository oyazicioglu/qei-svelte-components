export class MinLengthValidation {
    #minLength;
    constructor(minLength) {
        this.#minLength = minLength;
    }

    validate(value, name) {
        const isValid = value.length >= this.#minLength;
        return {
            isValid,
            message: `${name} must be at least ${this.#minLength} characters long.`,
        };
    }

    getLength() {
        return this.#minLength;
    }
}
