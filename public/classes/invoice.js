export class Invoice {
    constructor(invid, client, details, amount) {
        this.invid = invid;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `#${this.invid} ${this.client} owes ${this.amount} for ${this.details}`;
    }
}
