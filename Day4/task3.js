 
 while(true){
 
 var radius = prompt("Enter the radius of the circle:");

if (!isNaN(radius) && radius.trim() !== "") {
    radius = parseFloat(radius);
    if (radius > 0) {
        break;

    } else {
        alert("The radius must be a positive.");
    }
} else {
    alert("Please enter a valid number.");
}
}
var area = Math.PI * Math.pow(radius, 2);  
        alert(`The area of the circle with radius ${radius} is: ${area}`);
    
    while(true){
 var value = prompt("Enter a number to calculate the square root:");

if (!isNaN(value) && value.trim() !== "") {
    value = parseFloat(value);
    if (value >= 0) {
       break;
    } else {
        alert("enter positive number");
    }
} else {
    alert(" Please enter a valid number.");
}
        
}
var squareRoot = Math.sqrt(value);  
alert(`The square root of ${value} is: ${squareRoot.toFixed(2)}`);