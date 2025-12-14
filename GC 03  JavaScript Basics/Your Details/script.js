function showDetails() {

    // Get user inputs
    var name = document.getElementById("inputName").value;
    var dob = document.getElementById("inputDob").value;
    var email = document.getElementById("inputEmail").value;
    var phone = document.getElementById("inputPhone").value;
    var address = document.getElementById("inputAddress").value;

    // Display details on screen
    document.getElementById("name").innerText = "Name: " + name;
    document.getElementById("dob").innerText = "DOB: " + dob;
    document.getElementById("email").innerText = "Email: " + email;
    document.getElementById("phone").innerText = "Phone Number: " + phone;
    document.getElementById("address").innerText = "Address: " + address;
}
