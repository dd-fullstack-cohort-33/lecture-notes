// const doSomeTask = () => {
// 	console.log("ya I did some task")
// }
//
// const doSomeTaskThreeTimes = (someTask) => {
// 	for(let i = 0; i < 3; i++) {
// 		someTask()
// 	}
// }
//
// doSomeTaskThreeTimes(doSomeTask)



const createSomeTask = () => {
	const doSomeTask = () => {
		console.log("ya I did some task")
	}
	return doSomeTask
}

const someTask = createSomeTask()
someTask()