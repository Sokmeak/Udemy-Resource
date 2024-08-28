var myString = "john";
var firstCharacter = myString.slice(0, 1).toUpperCase();
// get the rest of the string!
var stringRemain = myString.slice(1, myString.length);

var newString = firstCharacter.concat(stringRemain.toLocaleLowerCase());

console.log("Hello " + newString);

var herName = "Srey Pin";
console.log(herName.toLowerCase());
