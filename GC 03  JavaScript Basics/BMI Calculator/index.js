function calculateBMI() {

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("result").innerText =
            "Please enter valid weight and height";
        return;
    }

    var bmi = weight / (height * height);
    bmi = Math.round(bmi * 10) / 10;

    var result;

    if (bmi <= 18.4) {
        result = "Underweight";
    } else if (bmi <= 24.9) {
        result = "Normal";
    } else if (bmi <= 29.9) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    document.getElementById("result").innerText =
        "BMI Result: " + result;
}
