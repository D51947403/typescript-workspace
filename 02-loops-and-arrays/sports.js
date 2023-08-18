var sprortOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sprortOne.length; i++) {
    console.log(sprortOne[i]);
}
//let's use the simplified for loop
for (var _i = 0, sprortOne_1 = sprortOne; _i < sprortOne_1.length; _i++) {
    var tempSport = sprortOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
// growable arrays
console.log("Growable Arrays");
var sportsTwo = ["Golf", "Cricket", "Tennis", "Swimming"];
sportsTwo.push("Baseball");
sportsTwo.push("Football");
sportsTwo.push("Basketball");
for (var _a = 0, sportsTwo_1 = sportsTwo; _a < sportsTwo_1.length; _a++) {
    var tempSport = sportsTwo_1[_a];
    console.log(tempSport);
}
