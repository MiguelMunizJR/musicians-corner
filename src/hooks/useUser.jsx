import { useEffect, useState } from "react";
import { ROUTES_PATH, URL_API } from "../const";
const URL = `${URL_API}${ROUTES_PATH.USER}`;

const useUser = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [token, setToken] = useState("");

	const getUserInfo = async (token_session) => {
		setLoading(true);

		await fetch(URL, {
			method: "GET",
			headers: {
				Authorization: `JWT ${token_session}`,
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

	useEffect(() => {
		const tokenB = localStorage.getItem("token");
		setToken(tokenB);

		if (token) {
			return async () => {
				try {
					await fetch(URL, {
						method: "GET",
						headers: {
							Authorization: `JWT ${tokenB}`,
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
				} catch (e) {
					console.error(e);
				}
			};
		}
	}, [token]);

	return { user, loading, error, getUserInfo };
};

export default useUser;
