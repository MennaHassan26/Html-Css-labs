var input;  
var sum = 0; 
do {
     input = prompt("Enter a number:");

    if (!isNaN(input)) {
         input = Number(input);

         if (input !== 0) {
            sum += input;
        }

         alert(`sum: ${sum}`);
    } else {
        alert("Invalid input! Please enter a numeric value.");
    }

} while (input !== 0 && sum <= 100);  

alert(`Final sum: ${sum}`);