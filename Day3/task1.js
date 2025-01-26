alert("Welcome to my website!");

 const userName = prompt("Please enter your name:");

 const Choice = prompt("Choose a color( red, green, or blue)").toLowerCase();

var message = `Welcome, ${userName}!`;
var color;

switch (Choice) {
    case 'red':
        color = 'red';
        break;
    case 'green':
        color = 'green';
        break;
    case 'blue':
        color = 'blue';
        break;
    default:
        color = 'black';  
        message = `Welcome, ${userName}!`;
}

document.write(`<h1 style="color: ${color};">${message}</h1>`);