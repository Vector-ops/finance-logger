import { hasFormatter } from "../interfaces/hasFormatter";


export class Payments implements hasFormatter {
    constructor(
        public id: number,
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}
    
    format() {
        return `${this.id} ${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}

