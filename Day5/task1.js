var numbers = [];
for (var i = 0; i < 5; i++) {
  var num;
  while (true) {
    num = prompt(`Enter number ${i + 1}:`);

     if (!isNaN(num) && num.trim() !== "") {
      num = parseInt(num);  
      break;
    } else {
      alert("Please enter a valid number!");
    }
  }
  numbers.push(num);
}

console.log("Original Array:", numbers);

var ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);

var descending = [...numbers].sort((a, b) => b - a);
console.log("Descending Order:", descending);

document.body.innerHTML = `
  <h2>Array Operations</h2>
  <p><strong>Original Array:</strong> ${numbers.join(", ")}</p>
  <p><strong>Ascending Order:</strong> ${ascending.join(", ")}</p>
  <p><strong>Descending Order:</strong> ${descending.join(", ")}</p>
`;
