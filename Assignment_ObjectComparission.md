

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log("_____")
var elements=0;
if(Object.keys(obj1).length==Object.keys(obj2).length){    // first compares the objects lengths, if the objectes lengths are not same then directly returns false
    for(let i in obj1){                                    
        if(i in obj2){
        
        }
  else if (!(i in obj2)){console.log("objects are not equal");break}
    }
console.log("objects are equal")
}
else{console.log("objects are not equal")
}
