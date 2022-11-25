function execute() {

	let description = document.getElementById("bg-title")
	
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);



	const req = new XMLHttpRequest();
	req.open("GET", `https://www.thecolorapi.com/id?rgb=${r},${g},${b}&format=json`);
	req.onload = () => {
		if (req.readyState === req.DONE) {
			if (req.status === 200) {
				

				let data = JSON.parse(req.responseText);

				let name = data.name.value;
				let color = data.name.closest_named_hex;
			
				document.body.style.backgroundColor = color;

				description.style.backgroundColor = `rgba(${r},${g},${b}, 0.4)`;
				description.innerHTML = "Background Color: " + name;
			}
		}
	};
	req.send();
}