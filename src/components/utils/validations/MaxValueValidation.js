export class MaxValueValidation {
    #max;
    constructor(max) {
        this.#max = max;
    }

    validate(value, name) {
        const isValid = parseInt(value) <= this.#max;
        return {
            isValid,
            message: `${name} must be less then ${this.#max}.`,
            correctedValue: this.#max.toString(),
        };
    }

    getValue() {
        return this.#max;
    }
}
