import {
    invoices, payments
} from "../data/data";
const p = document.getElementById('error')!;

function validatePay(r: string, d: string, a: number): boolean {
    if(!r || !d || !a) {
        p.innerText = "Please fill all the input fields";
        return false;
    }
    return true;
}

function validateInv(i: number, r: string, d: string, a: number): boolean {
    if(!i || !r || !d || !a) {
        p.innerText = "Please fill all the input fields";
        return false;
    }
    return true;
}

export {
    validateInv, validatePay
};

