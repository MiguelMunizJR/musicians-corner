import { useEffect, useState } from "react";
import { ROUTES_PATH, URL_API } from "../const";

const useUser = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [token, setToken] = useState("");

	useEffect(() => {
		const tokenB = localStorage.getItem("token");
		setToken(tokenB);

		const getUserInfo = async () => {
			setLoading(true);
			const URL = `${URL_API}${ROUTES_PATH.USER}`;

			await fetch(URL, {
				method: "GET",
				headers: {
					authorization: `JWT ${token}`,
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
		};

		if (token) {
			getUserInfo();
		} else {
			setLoading(false);
		}
	}, [token]);

	return { user, loading, error };
};

export default useUser;
