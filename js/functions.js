function calculate(op) {
    val1 = document.getElementById('num1').value;
    val1 = parseInt(val1);
    val2 = document.getElementById('num2').value;
    val2 = parseInt(val2);


    switch (op) {
        case "Add":
            result = val1 + val2;
            break;
        case "Subtract":
            result = val1 - val2;
            break;
        case "Multiply":
            result = val1 * val2;
            break;
        case "Divide":
            result = val1 / val2;
            break;
        default:
            console.log("Unknown Operation!")
            break;
    }
    console.log (op + "(" + val1 + "," + val2 + "): " + result);
    document.getElementById('output').innerHTML = result;
}

function clearFields() {
    console.log('Clear pressed')
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('output').innerHTML = '';
}