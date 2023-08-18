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
