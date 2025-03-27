/* TEST JS */
/*
    1. Problem 1 - (A)
    Create an Object with a "hello" method that writes "Hello <name> in the console"
*/

const objectName = {
    hello: (name) => console.log(`Hello ${name}\n`)
}

console.log("Problem 1 - (A):");
objectName.hello("Alicia");

/*
    2. Problem 1 - (B)
    How would you make name inmutable?
    (Can write or just describe)
*/

// 1. To make name inmutable I will declare name as constant, 
// so that it cannot be changed after it is declared
// 2. Another way to do it is like in other languages,
//  where we use getters and setters with the Object.defineProperty 
// method to define our property as a kind of read-only property.

console.log("Problem 1 - (B):");
const name = "Jorge"
//name = "Bruno"
objectName.hello(name);

/*
    3. Problem 2
    Write a funtion that logs the 5 cities that occur the most in the array below in
    order from the most number of occurrences to least.
*/

const citiesList = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
]

function mostOcurrences(list){
    let result = {}
    for(item of list){
        if(result[item]){
            continue
        }
        for(item2 of list){
            if(item === item2){
                if(result[item]){
                    result[item]++
                }else{
                    result[item] = 1
                }
            }
        }
    }

    const frequencyArray = Object.entries(result);
    frequencyArray.sort((a, b) => b[1] - a[1]); 
    
    frequencyArray.slice(0, 5).forEach(([element, count]) => {
        console.log(`${element}: ${count}`);
      });
}

console.log("Problem 2:");
mostOcurrences(citiesList);