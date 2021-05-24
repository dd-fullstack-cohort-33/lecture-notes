import React from "react";

export function PropsSnapChallenge (props){

	const {gibberish, number, todos} = props

	return(
		<>
			<h1>gibberish {gibberish}</h1>
			<h1>Number {number}</h1>
			{todos.map(todo=> <p key={todo.id}>{todo.title}</p>)}
		</>
	)
}