function filterRooms(instruction1, treasureroom) {

let destinationcount = [];
instruction1.forEach(([_, dest]) => {
    destinationcount[dest] = (destinationcount[dest] || 0) + 1
})
console.log('destinationcount', destinationcount)
 
 
const result = instruction1.filter((item) => {
    return item[0] !== item[1] && destinationcount && destinationcount[item[1]] > 1
})
const destinationcount2 = [];
result.forEach(([_, dest]) => {
    destinationcount2[dest] = (destinationcount2[dest] || 0) + 1
})
console.log('destinationcount2', destinationcount2);
 
let myresult = []
 
for(let key in destinationcount2) {
    if((destinationcount2[key]) > 1) myresult.push(key)
}

myresult = myresult.filter((item) => {
    return treasureroom.includes(item)
});
console.log('myresult', myresult);
}

const instruction1 = [
  ["jasmin", "tulip"],
  ["lily", "tulip"],
  ["tulip", "tulip"],
  ["daisy", "voilet"],
  ["iris", "voilet"],
  ["sunflower", "voilet"],
  ["voilet", "rose"],
  ["rose", "rose"]
];
const instruction2 = [
	["jasmin", "tulip"],
	["lily", "tulip"],
	["tulip", "violet"],
	["violet", "violet"]
];
const treasureroom1 = ["lily", "tulip", "voilet", "rose"]
const treasureroom2 = ["lily", "jasmin", "violet"] 
const treasureroom3 = ["violet"]

// filterRooms(instruction1, treasureroom1);
// filterRooms(instruction1, treasureroom2);
filterRooms(instruction2, treasureroom3);