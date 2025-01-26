var userInput;
function isValid(input) {
    return input && input.trim() !== "" && isNaN(input);
}

do {
    userInput = prompt("Enter a word");
    if (!isValid(userInput)) {
        alert(" Please enter a valid string!");
    }
} while (!isValid(userInput));

 var caseSensitive = confirm("Do you want to consider case sensitivity? (OK for Yes, Cancel for No)");

 function isPalindrome(str, considerCase) {
    if (!considerCase) {
        str = str.toLowerCase(); 
    }
    var reversed = str.split("").reverse().join(""); 
    return str === reversed;
}

 if (isPalindrome(userInput, caseSensitive)) {
    alert(`"${userInput}" is a palindrome.`);
} else {
    alert(`"${userInput}" is not a palindrome.`);
}
