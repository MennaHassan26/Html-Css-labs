var numbers = [];

 for (var i = 0; i < 3; i++) {
    var input;
    do {
        input = prompt(`Enter number ${i + 1}:`);
        if (isNaN(input) || input.trim() === "") {
            alert("Please enter a valid number.");
        }
    } while (isNaN(input) || input.trim() === "");
    numbers.push(parseint(input));  
}

 var sum = 0, product = 1, division = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
    if (i > 0) {  
        division /= numbers[i];
    }
}
 
 
document.write(`
    <h1>Adding -- Multiplying -- and Dividing 3 Values</h1>
    <p><strong>Sum of the 3 values:</strong> ${numbers.join(" + ")} = ${sum}</p>
    <p><strong>Multiplication of the 3 values:</strong> ${numbers.join(" * ")} = ${product}</p>
    <p><strong>Division of the 3 values:</strong> ${numbers.join(" / ")} = ${division}</p>
`);