// 1. Using the foreach loop display this array of text to the DOM.
//
// 	`['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']`
//
// Hint: Each array element must appear in its own html tag in the browser.
// 	Extra Credit: use map or reduce.

const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

let target = document.getElementById('target')
console.log(target)

names.forEach(name => {
	let p = document.createElement("p")
	p.innerText = name
	target.appendChild(p)
})

const moreNames = ['Brody', 'Reid', 'Garfunkle', 'Barb']

moreNames.map(name => {
	const inner = '<p>' + name + '</p>'
	console.log(inner)
	target.innerHTML += inner
})
