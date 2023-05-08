import { hasFormatter } from "../interfaces/hasFormatter";


export class Invoice implements hasFormatter {
    constructor(
        public id: number,
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    
    format() {
        return `${this.id} ${this.client} owes ${this.amount} for ${this.details}`;
    }
}


