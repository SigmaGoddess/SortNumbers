/**
         * Ordena un array de números de forma ascendente.
         * @param {number[]} numbers - El array de números a ordenar.
         */
function sortNumbers(numbers) {
    // Usa el método sort con una función de comparación para ordenar numéricamente
    numbers.sort((a, b) => a - b);
}

/**
 * Solicita al usuario una cadena de números separados por comas y los convierte a un array de números.
 * Se devuelve un array vacío si la entrada no es válida.
 * @returns {number[]} 
 */
function requestNumbers() {
    // El mensaje pide la entrada en formato "num1,num2,num3"
    const input = prompt("Escribe tres números dividios por comas (ej. 5,1,9):");

    // Si el usuario cancela o no ingresa nada, devolvemos un array vacío.
    if (!input) {
        return [];
    }

    // 1. numbers.split(",") divide la cadena en un array de cadenas.
    // 2. .map(num => parseFloat(num)) convierte cada cadena a un número (puede dar NaN si no es un número).
    // 3. .filter(num => !isNaN(num)) elimina cualquier elemento que no sea un número válido (NaN).
    return input.split(",").map(num => parseFloat(num)).filter(num => !isNaN(num));
}

/**
 * Muestra los números ordenados en la consola y en el elemento con ID 'results'.
 * @param {number[]} numbers - El array de números a mostrar.
 */
function printResults(numbers) {
    const resultsDiv = document.getElementById("results");

    if (numbers.length > 0) {
        const sortedString = numbers.join(", ");
        console.log("Sorted numbers: " + sortedString);
        resultsDiv.innerHTML = "Números ordenados: <strong>" + sortedString + "</strong>";
    } else {
        console.log("Números no válidos.");
        resultsDiv.innerHTML = "No se ingresaron números.";
    }
}

/**
 * Función principal para ejecutar el flujo de trabajo: solicitar, ordenar y mostrar.
 */
function mainFunction() {
    // Solicita y parsea los números
    const myNumbers = requestNumbers();

    // Ordena los números (la función sortNumbers modifica el array in-place)
    if (myNumbers.length > 0) {
        sortNumbers(myNumbers);
    }

    printResults(myNumbers);
}