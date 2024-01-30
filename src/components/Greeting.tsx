import { useEffect, useState } from "react";

const Greeting = ({ className }) => {
	const [greeting, setGreeting] = useState("Buenos días");

	useEffect(() => {
		const currentTime = new Date();
		const currentHour = currentTime.getHours();

		let greeting = "";

		if (currentHour < 12) {
			greeting = "Buenos días";
		} else if (currentHour < 18) {
			greeting = "Buenas tardes";
		} else {
			greeting = "Buenas noches";
		}

		setGreeting(greeting);
	}, []);

	return <h1 className={`${className} text-4xl font-bold`}>{greeting}</h1>;
};

export default Greeting;
