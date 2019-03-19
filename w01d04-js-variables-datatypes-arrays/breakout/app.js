
var names = ["Rahul", "Vijay", "Deep", "Akshay", "Ravi"];
var ages = [10, 233, 2, 67, 11];

console.log(names);
console.log(ages);

var i = 0;
for(i=0; i <= ages.length; i++){
  // Printing all people with age less than 15
 //  if(ages[i] < 15){
    // console.log(names[i]);
  // }
}

console.log("\n\n\n");

// Printing all people with age less than 15
for(x in names){
  //if(ages[x] < 15)
    //console.log(names[x]);
}


console.log("\n\n\n");



// Printing all names with age less than 15
for(x, y of names){
//  console.log(x, y);

  // ages["Vijay"] < 15
  //if(ages[x] < 15)
    //console.log(x);
}

/*

Rahul
Vijay
Deep
Akshay
Ravi

*/


