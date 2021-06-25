var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]

  for(a of obj){
for(i in a){
    console.log(i+':'+a[i])
}
console.log("*******")
}

/// for each loop 

obj.forEach(element => {for (a in element){console.log(a+":"+element[a])}
    
});


difference between for in and for each loop 


for in loop : it can be used on iterable objects, when used it returs keys present in the object, When used on arrays it returns index values of the elements

for of loop : it can be used on iterable objects, when used it return values present in the objects, when used on arrays it returns values present in the arrays 


foreach : A function has to be given as an argument to the foreach(), The foreach method applies the function to the every element in the array
