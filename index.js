document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('billInput');
    const tipInput = document.getElementById('tipInput');
    const submitBtn = document.getElementById('submitBtn');
    const totalResult = document.getElementById('totalResult');

    submitBtn.addEventListener('click', () => {
        const bill = parseFloat(billInput.value);
        const tipPercentage = parseFloat(tipInput.value);

        if (!isNaN(bill) && !isNaN(tipPercentage)) {
            const tipAmount = (bill * tipPercentage) / 100;
            const total = bill + tipAmount;
            totalResult.textContent = `$${total.toFixed(2)}`;
        } else {
            totalResult.textContent = 'Invalid input';
        }
    });
});
