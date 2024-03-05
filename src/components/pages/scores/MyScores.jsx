import CardScore from "@/components/CardScore.astro";
import { getMyUser } from "@/lib/users/getMyUser";
import { useEffect, useState } from "react";

const MyScores = () => {
	// const [user, setUser] = useState();
  
	useEffect(() => {
		const token = localStorage.getItem("token");
		console.log(token);
      
		// const data = await getMyUser();
		// console.log(data);
		// setUser(data);
	}, []);

	// console.log("hola", user);

	return (
		<section className="w-full mt-10 flex flex-col">
			<h2 className="text-2xl font-medium py-3">Mis partituras</h2>
			<article>
				<div
					className="w-full min-h-max mt-8 mb-24 grid grid-cols-4 gap-x-8 gap-y-12"
				>
					{/* {
						scores?.scores?.map((score: { name: any; artist: any; url_image: any; }) => {
							return (
								<CardScore title={score.name} author={score.artist} user={scores?.email} downloads="4" scoreImage={score.url_image} />
							);
						})
					} */}
				</div>
			</article>
		</section>
	);
};

export default MyScores;
