function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let type = document.getElementById("conversionType").value;
    let resultText = "";

    if (isNaN(value)) {
    resultText = "Please enter a number.";
    } else {
    switch(type) {
        case "km-miles":
        resultText = (value * 0.621371).toFixed(3) + " miles";
        break;
        case "miles-km":
        resultText = (value / 0.621371).toFixed(3) + " km";
        break;
        case "kg-lbs":
        resultText = (value * 2.20462).toFixed(3) + " lbs";
        break;
        case "lbs-kg":
        resultText = (value / 2.20462).toFixed(3) + " kg";
        break;
        case "c-f":
        resultText = ((value * 9/5) + 32).toFixed(2) + " °F";
        break;
        case "f-c":
        resultText = ((value - 32) * 5/9).toFixed(2) + " °C";
        break;
    }
    }
    document.getElementById("result").textContent = resultText;
}