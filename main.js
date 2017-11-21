

var homies = ["Jeff", "Adelaida", "Graham", "Bennie", "Michelle", "Mateer", "Ryan", "Watson", "Annie", "Logan"];
var loopLength = homies.length / 2;
var name1 = 0;
var name2 = 0;

for (var i = 1; i <= loopLength; i++) {
  var num = Math.floor(Math.random() * homies.length);
  name1 = homies.splice(num, 1);
  num = Math.floor(Math.random() * homies.length);
  name2 = homies.splice(num, 1);
  console.log(name1 + ' + ' + name2);
}
