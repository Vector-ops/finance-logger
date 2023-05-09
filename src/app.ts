import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Payments } from './classes/payments.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

let pid: number = 0;
let invoices: hasFormatter[] = [];
let payments: hasFormatter[] = [];

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul)!;

const inv = document.querySelector('.inv') as HTMLButtonElement;
const pmt = document.querySelector('.pmt') as HTMLButtonElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const invid = document.querySelector('#invid') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(type.value);
    
    if(type.value === 'payment') {
        if(invid) {
            pid = invid.valueAsNumber;
        } else {
            pid++;
        }
        const doc = new Payments(pid, toFrom.value, details.value, amount.valueAsNumber);
        payments.push(doc);
        //list.render(doc, type.value, 'end');
    } else {
        const doc = new Invoice(invid.valueAsNumber, toFrom.value, details.value, amount.valueAsNumber);
        invoices.push(doc);
    }
});

inv.addEventListener('click', (e: Event)=>{
    e.preventDefault();
    ul.replaceChildren();
    invoices.forEach((invoice)=>{
        list.render(invoice, "Invoice", 'end');
    });
    
});
pmt.addEventListener('click', (e: Event)=>{
    e.preventDefault();
    ul.replaceChildren();
    payments.forEach((pay)=>{
        list.render(pay, "Payment", 'end');
    });
});

document.addEventListener('click', (e: Event) => {
    console.log(e.srcElement);
    
})