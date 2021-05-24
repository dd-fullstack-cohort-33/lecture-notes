import React from "react"

import {PropsSnapChallenge} from "./PropsSnapChallenge";

export function App() {
	return(
		<>

			<PropsSnapChallenge gibberish='baba booie baba booie' number={19}
			todos={[
				{"userId": 1,
					"id": 5,
					"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
					"completed": false},
				{"userId": 1,
					"id": 6,
					"title": "qui ullam ratione quibusdam voluptatem quia omnis",
					"completed": true},
				{"userId": 1,
					"id": 7,
					"title": "illo expedita consequatur quia in",
					"completed": false}
			]}
			/>

		</>
	)

}