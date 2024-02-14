import { ROUTES_PATH, URL_API } from "@/const";

export const getMyUser = async (token) => {
	const URL = `${URL_API}${ROUTES_PATH.USER}`;

	try {
		const res = await fetch(URL, {
			method: "GET",
			headers: {
				Authorization: `JWT ${token}`,
			},
		});
		const userData = await res.json();
		return userData;
	} catch (e) {
		console.error(e.message);
	}
};
