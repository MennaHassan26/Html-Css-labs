var username;

 while (true) {
    username = prompt("Enter yout name:");
    
     if (username && isNaN(username)) {
        break;  
    } else {
        alert("please enter a valid name!.");
    }
}

for (var i = 1; i <= 6; i++) {
    document.write(`<h${i}>${username}</h${i}>`);
}