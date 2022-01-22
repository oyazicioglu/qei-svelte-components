export class MaxLengthValidation {
    #maxLength;
    constructor(maxLength) {
        this.#maxLength = maxLength;
    }

    validate(value, name) {
        const isValid = value.toString().length <= this.#maxLength;
        return {
            isValid,
            message: `${name} must be less then ${this.#maxLength} characters long.`,
        };
    }

    getLength() {
        return this.#maxLength;
    }
}
