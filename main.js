
  var haloFam = ["Dad", "Dusty", "Mom", "Monkey", "Squall"];
  var loopLength = haloFam.length / 2;
  var name1 = 0;
  var name2 = 0;

  for (var i = 1; i <= loopLength; i++) {
    var num = Math.floor(Math.random() * haloFam.length);
    name1 = haloFam.splice(num, 1);
    num = Math.floor(Math.random() * haloFam.length);
    name2 = haloFam.splice(num, 1);
    console.log(name1 + ' VS ' + name2);
  }
  if (haloFam.length == 1) {
    console.log(haloFam + ' Has to sit out first game, REEEEEEE');
  }
