const p = document.getElementById('error');
function validatePay(r, d, a) {
    if (!r || !d || !a) {
        p.innerText = "Please fill all the input fields";
        return false;
    }
    return true;
}
function validateInv(i, r, d, a) {
    if (!i || !r || !d || !a) {
        p.innerText = "Please fill all the input fields";
        return false;
    }
    return true;
}
export { validateInv, validatePay };
