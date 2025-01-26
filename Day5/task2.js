function getDayName(dateStr) {
  try {
      if (typeof dateStr !== "string" || dateStr.trim() === "") {
          throw new Error("Invalid input, please use a string");
      }

      var date = new Date(dateStr);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr) || isNaN(date.getTime())) {
          throw new Error("Use a valid date string like 'YYYY-MM-DD'.");
      }

      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var dayName = dayNames[date.getDay()];

      // Format date as "Thu Jan 20 2000"
      var formattedDate = date.toDateString();

      return `Your date of birth is: ${formattedDate} \n The day name is ${dayName} `;
  } catch (error) {
      return error.message;
  }
}

var dateInput = prompt("Enter a date (YYYY-MM-DD):");  
var result = getDayName(dateInput);
alert(`Result: ${result}`);  
