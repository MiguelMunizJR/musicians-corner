import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const Greeting = ({ className = "" }: Props) => {
	const [greeting, setGreeting] = useState("");

	const currentTime = new Date();
	const currentHour = currentTime.getHours();

	useEffect(() => {
		let newGreeting = "";

		if (currentHour >= 7 && currentHour < 12) {
			newGreeting = "Buenos días";
		} else if (currentHour >= 12 && currentHour < 20) {
			newGreeting = "Buenas tardes";
		} else {
			newGreeting = "Buenas noches";
		}

		setGreeting(newGreeting);
	}, [currentHour]);

	return <h1 className={`${className} text-4xl font-bold`}>{greeting}</h1>;
};

export default Greeting;
