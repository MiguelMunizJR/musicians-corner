import { useEffect, useState } from "react";
import { ROUTES_PATH, URL_API } from "../const";

const useUser = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [token, setToken] = useState("");

	const getUserInfo = async () => {
		setLoading(true);
		const URL = `${URL_API}${ROUTES_PATH.USER}`;

		const res = await fetch(URL, {
			method: "GET",
			headers: {
				"authorization": `JWT ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});

		console.log(await res.JSON());
	};

	useEffect(() => {
		const tokenB = localStorage.getItem("token");
		setToken(tokenB);


		if (token) {
			getUserInfo();
		} else {
			setLoading(false);
		}
	}, [token]);

	return { user, loading, error, getUserInfo };
};

export default useUser;
