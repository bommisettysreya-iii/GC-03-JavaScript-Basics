function calculateTax() {

    // Get income from user
    var income = parseFloat(document.getElementById("income").value);
    var tax = 0;

    // Tax calculation rules
    if (income < 250000) {
        tax = 0;
    } else if (income >= 250000 && income <= 500000) {
        tax = income * 0.05;
    } else if (income > 500000 && income <= 1000000) {
        tax = income * 0.10;
    } else {
        tax = income * 0.20;
    }

    // Display results
    document.getElementById("totalIncome").innerText =
        "Total Income: ₹" + income;

    document.getElementById("taxAmount").innerText =
        "Tax to be Paid: ₹" + tax;
}
