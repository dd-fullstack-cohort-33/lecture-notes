console.log("hello world")

// Write two functions in javascript. Make sure that you put them in your GitHub Classroom account in the Snap Challenges project. Put them in a folder called "snap-01-functions"
//
// Function #1
// Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.) Which operation is your choice.
//
// 	Function #2
// Take two strings as arguments and return a value that has them concatenated.

const value = "This is constant and can NOT be changed. Use if possible."
let value2 = "This value can be changed"
var value3 = "This value can be changed. var will break the scope. Use as a last resort"

function areaOfRectangle(width, height) {
	return width * height;
}
console.log(areaOfRectangle(2,4))

const str1 = 'Hello';
const str2 = 'World';

const concatenate = function(string1, string2) {
	// return `${string1} ${string2}`
	return string1 + ' ' + string2
}
console.log(concatenate(str1, str2))

