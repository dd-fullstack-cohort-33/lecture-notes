const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// Define our router from Express prebuilt Router object
const indexRoute = express.Router()

const middleware1 = function (request, response, nextFunction){
	console.log("hello world")
	nextFunction()
}

const middleware2 = function (request, response){
	return response.json({status:200, data: null, message:'party time'})
}

// setup the router to respond to the /apis path and call middleware function(s)
indexRoute.route("/apis").get(middleware1, middleware2)

// Register this router to be used by our express server
app.use(indexRoute)

app.listen(4200, () => {console.log("Express has Started")})