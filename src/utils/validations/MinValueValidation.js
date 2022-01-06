export class MinValueValidation {
    #min;
    constructor(min) {
        this.#min = min;
    }

    validate(value, name) {
        const isValid = parseInt(value) >= this.#min;
        return {
            isValid,
            message: `${name} must be higher then ${this.#min}.`,
            correctedValue: this.#min.toString(),
        };
    }

    getValue() {
        return this.#min;
    }
}
