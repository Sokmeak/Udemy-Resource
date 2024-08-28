function bmiCalculator(wight, hight) {
  var result = Math.round(wight / (hight * hight));
  return result;
}

var bmi = bmiCalculator(65, 1.8);

console.log("Your bmi: ", bmi);
