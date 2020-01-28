var obj = { name: 'Apple', cost: 1.99, count: 2 }
console.log(obj);
console.log(obj.name);
console.log(obj.cost);

for ( var key in obj ) {
    console.log(key + ' ' + obj[key]);
}
var array = ['A', 'B', 'C']
for ( key in array) {
  console.log(key + ' ' + array[key]);
}