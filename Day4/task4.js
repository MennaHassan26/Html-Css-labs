function isValidName(username) {
    return username && isNaN(username) && username.trim() !== "";
}

function isValidPhoneNumber(phone) {
    return /^\d{8}$/.test(phone);  
}

function isValidMobileNumber(mobile) {
    return /^(010|011|012)\d{8}$/.test(mobile);  
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);  
}

var username, phone, mobile, email;

 do {
    username = prompt("Enter your name:");
    if (!isValidName(username)) {
        alert("Invalid name. Please enter a valid string.");
    }
} while (!isValidName(username));

 do {
    phone = prompt("Enter your phone number (8 digits):");
    if (!isValidPhoneNumber(phone)) {
        alert("Invalid phone number. Please enter exactly 8 digits.");
    }
} while (!isValidPhoneNumber(phone));

 do {
    mobile = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
    if (!isValidMobileNumber(mobile)) {
        alert(" Please ensure it is 11 digits and starts with 010, 011, or 012.");
    }
} while (!isValidMobileNumber(mobile));

 do {
    email = prompt("Enter your email address:");
    if (!isValidEmail(email)) {
        alert("Invalid email. Please enter a valid email address.");
    }
} while (!isValidEmail(email));

var count = 0;
for (var char of username) {
   if (char.toLowerCase() === 'e') {
       count++;
   }
}
 alert(`Welcome, ${username}! Here is your information:\n- Phone: ${phone}\n- Mobile: ${mobile}\n- Email: ${email}\n-------------------------\nThe number of 'e' in your name is: ${count}`);
 
