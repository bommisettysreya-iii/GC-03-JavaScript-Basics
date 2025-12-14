function splitName() {

    // Get full name from user
    var fullName = document.getElementById("fullName").value;

    // Remove extra spaces at beginning and end
    fullName = fullName.trim();

    // Split name into parts
    var parts = fullName.split(" ");

    var firstName = parts[0];
    var lastName = parts[1];

    // Capitalize first letter of firstName
    firstName =
        firstName.charAt(0).toUpperCase() +
        firstName.slice(1).toLowerCase();

    // Capitalize first letter of lastName
    lastName =
        lastName.charAt(0).toUpperCase() +
        lastName.slice(1).toLowerCase();

    // Display output
    document.getElementById("firstName").innerText =
        "First Name: " + firstName;

    document.getElementById("lastName").innerText =
        "Last Name: " + lastName;
}
