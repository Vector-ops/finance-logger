export class Payments {
    constructor(id, recipient, details, amount) {
        this.id = id;
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.id} ${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
