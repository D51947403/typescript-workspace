let sprortOne :string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let i = 0; i < sprortOne.length; i++) {
    console.log(sprortOne[i]);
}
//let's use the simplified for loop
for (let tempSport of sprortOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite!");
    } else {
        console.log(tempSport);
    }
}
