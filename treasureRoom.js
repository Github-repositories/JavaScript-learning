const instruction1 = [
  ["jasmin", "tulip"],
  ["lily", "tulip"],
  ["tulip", "tulip"],
  ["daisy", "voilet"],
  ["iris", "voilet"],
  ["sunflower", "voilet"],
  ["voilet", "rose"],
  ["rose", "rose"]
]
const treasureroom = ["lily", "tulip", "voilet", "rose"]
 
const destinationcount = {}
instruction1.forEach(([_, dest]) => {
    destinationcount[dest] = (destinationcount[dest] || 0) + 1
})
console.log('destinationcount', destinationcount)
 
 
const result = instruction1.filter((item) => {
    return item[0] !== item[1] && destinationcount && destinationcount[item[1]] > 1
})
const destinationcount2 = {}
result.forEach(([_, dest]) => {
    destinationcount2[dest] = (destinationcount2[dest] || 0) + 1
})
 
const myresult = []
 
for(let key in destinationcount2) {
    if((destinationcount2[key]) > 1) myresult.push(key)
}
 
 
console.log('result', myresult)