function getBaconIpsum () {

	const targetElement =document.getElementById('target')

	fetch('https://baconipsum.com/api/?type=meat-and-filler')
		.then(response => response.json())
		.then(data => {

			data.map(paragraph => {
				let p = document.createElement("p")
				p.innerText = paragraph
				targetElement.appendChild(p)
			})
		});

}