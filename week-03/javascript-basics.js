//Declaring Variables
var doNotUse = true
let value = "I am A string"
const callbackFunction = function (params) {
    return params + params
}

//How to write a function and use functions
function IamAFunction(parameter1, parameter2) {
    return parameter1 + parameter2
}
IamAFunction(2, 3)

// conditionals
if(doNotUse === true) {
    console.log("Var is bad mkay")
} else {
   console.log("var is not bad")
}

//arrays and loops
const array = ["I", "am", "an", "array"]
array[3]

for (let currentValue = 0; currentValue < array.length; currentValue = currentValue + 1) {
   console.log(array[currentValue])
}

array.forEach(function (currentValue) {
    console.log(currentValue)
})

// Extra Credit Objects
const object = {value: "I am a string", callbackFunction: callbackFunction, doNotUse: true}
object.doNotUse = false;
console.log(object.doNotUse)