function leapYear(year) {
  var message;

  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        message = "Yes";
      } else {
        message = "No";
      }
    } else {
      message = "Yes";
    }
  } else {
    message = "No";
  }

  return message;
}

var test = leapYear(2024);

console.log("2024 is leapyear? : " + test);
