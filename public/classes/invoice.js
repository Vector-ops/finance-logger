export class Invoice {
    constructor(id, client, details, amount) {
        this.id = id;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.id} ${this.client} owes ${this.amount} for ${this.details}`;
    }
}
