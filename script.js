function sortNumbers( numbers ){
 numbers.sort((a, b) => a - b);
}

function requestNumbers(a, b, c){
 const numbers = prompt("Enter three numbers separated by commas: ");
 numbers.split(",").map(num => parseFloat(num));
}

function  printResults(numbers){
 console.log("Sorted numbers: " + numbers.join(", "));
}

