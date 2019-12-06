// Exempel 1
let numberArray = [50, 23, 5, 6, 47];
let newArray = numberArray.map(timesFive)

function timesFive(numbers) {
    return numbers * 5;
}

function getExempel1() {
    document.getElementById("1").innerHTML = newArray;
}

// Exempel currentValue
let currentValueArray = [5, 3, 4, 9, 6];
let callCurrentValue = currentValueArray.map(writeValue)

function writeValue (values) {
    return values;
}

function getExempel2() {
    document.getElementById("2").innerHTML = callCurrentValue;
}

// Exempel index
let indexArray = [1, 2, 3, 4, 5];
let filteredArray = indexArray.map(filter)

function filter (num, index) {
    if(index < 3) {
        return num;
    }
}

function getExempel3() {
    document.getElementById("3").innerHTML = filteredArray;
}