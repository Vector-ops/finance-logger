import { Invoice } from './classes/invoice.js';
import { Payments } from './classes/payments.js';
let iid = 0;
let pid = 0;
let invoices = [];
let payments = [];
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    if (type.value === 'payment') {
        pid++;
        payments.push(new Payments(pid, toFrom.value, details.value, amount.valueAsNumber));
        console.log(payments[pid - 1].format());
    }
    else {
        iid++;
        invoices.push(new Invoice(iid, toFrom.value, details.value, amount.valueAsNumber));
        console.log(invoices[iid - 1].format());
    }
});
