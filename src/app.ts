
import { Invoice } from './classes/invoice.js';
import { Payments } from './classes/payments.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

let iid: number = 0;
let pid: number = 0;
let invoices: hasFormatter[] = [];
let payments: hasFormatter[] = [];

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(type.value);
    
    if(type.value === 'payment') {
        pid++;
        payments.push(new Payments(pid, toFrom.value, details.value, amount.valueAsNumber));
        console.log(payments[pid-1].format());
    } else {
        iid++;
        invoices.push(new Invoice(iid, toFrom.value, details.value, amount.valueAsNumber));
        console.log(invoices[iid-1].format());
    }
});
