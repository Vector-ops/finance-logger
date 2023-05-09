import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Payments } from './classes/payments.js';
import { invoices, payments } from './data/data.js';
import { validateInv, validatePay } from './validators/inputValidator.js';
let pid;
// let invoices: hasFormatter[] = [];
// let payments: hasFormatter[] = [];
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const inv = document.querySelector('.inv');
const pmt = document.querySelector('.pmt');
const error = document.querySelector('#error');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const invid = document.querySelector('#invid');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value === 'payment') {
        if (validatePay(toFrom.value, details.value, amount.valueAsNumber)) {
            error.innerText = '';
            if (invid.valueAsNumber) {
                pid = invid.valueAsNumber;
            }
            else {
                pid = Math.floor(Math.random() * 100);
            }
            const doc = new Payments(pid, toFrom.value, details.value, amount.valueAsNumber);
            payments.push(doc);
        }
    }
    else {
        if (validateInv(invid.valueAsNumber, toFrom.value, details.value, amount.valueAsNumber)) {
            error.innerText = '';
            const doc = new Invoice(invid.valueAsNumber, toFrom.value, details.value, amount.valueAsNumber);
            invoices.push(doc);
        }
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
