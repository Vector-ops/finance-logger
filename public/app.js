import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Payments } from './classes/payments.js';
let pid = 0;
let invoices = [];
let payments = [];
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const inv = document.querySelector('.inv');
const pmt = document.querySelector('.pmt');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const invid = document.querySelector('#invid');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    if (type.value === 'payment') {
        if (invid) {
            pid = invid.valueAsNumber;
        }
        else {
            pid++;
        }
        const doc = new Payments(pid, toFrom.value, details.value, amount.valueAsNumber);
        payments.push(doc);
        //list.render(doc, type.value, 'end');
    }
    else {
        const doc = new Invoice(invid.valueAsNumber, toFrom.value, details.value, amount.valueAsNumber);
        invoices.push(doc);
    }
});
inv.addEventListener('click', (e) => {
    e.preventDefault();
    ul.replaceChildren();
    invoices.forEach((invoice) => {
        list.render(invoice, "Invoice", 'end');
    });
});
pmt.addEventListener('click', (e) => {
    e.preventDefault();
    ul.replaceChildren();
    payments.forEach((pay) => {
        list.render(pay, "Payment", 'end');
    });
});
document.addEventListener('click', (e) => {
    console.log(e.srcElement);
});
