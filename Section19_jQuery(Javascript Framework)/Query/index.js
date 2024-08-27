$("h1").css("color", "red");
$("button").html("<em>Hello</em>");

$(document).keypress(function (event) {
  var newLetter = event.key;
  console.log(newLetter);
  $("h1").text(newLetter);
});
// jquery for manipulate the text in html