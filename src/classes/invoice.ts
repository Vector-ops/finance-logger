import { hasFormatter } from "../interfaces/hasFormatter";


export class Invoice implements hasFormatter {
    constructor(
        readonly invid: number,
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    
    format() {
        return `#${this.invid} ${this.client} owes ${this.amount} for ${this.details}`;
    }
}


