/*
    Assignment: Make Bill
    Requirements followed:
    - Take total number of items from user
    - Take each item as <item_name> <item_price>
    - Use only JavaScript
    - Do not modify index.html
    - Display output inside span
*/

// Get span element
const solution = document.getElementById("solution");

// Ask user for number of items
const itemCount = parseInt(prompt("Enter total number of items"));

// Add BILL heading (h1)
let output = "<h1>BILL</h1>";

let total = 0;

// Loop to take item inputs
for (let i = 0; i < itemCount; i++) {
    // Example input: Notebook 90
    const itemInput = prompt("Enter item name and price (e.g., Notebook 90)");

    const parts = itemInput.split(" ");
    const itemName = parts[0];
    const itemPrice = parseInt(parts[1]);

    // Display each item using h4
    output += `<h4>${itemName}: ${itemPrice}</h4>`;

    // Calculate total
    total += itemPrice;
}

// Separator
output += "<hr>";

// Display total using h3
output += `<h3>TOTAL: ${total}</h3>`;

// Show result
solution.innerHTML = output;
