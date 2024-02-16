import { ROUTES_PATH, URL_API } from "@/const";
import axios from "axios";

//* Update urls in API
export const updateUrlScore = async (scoreId, data, token) => {
	const updateUrl = `${URL_API}${ROUTES_PATH.SCORES.SCORES}/${scoreId}`;

	const { secure_url } = data;
	const url_image = secure_url.slice(0, -4) + ".webp";

	const updateDB = await axios.patch(
		updateUrl,
		{
			url_score: secure_url,
			url_image,
		},
		{
			headers: {
				Authorization: `JWT ${token}`,
			},
		}
	);

	if (updateDB.status !== 200) {
		console.error("Error updating url in API");
	}

	return updateDB?.status;
};

//* Delete score from API
export const deleteScore = async (scoreId, token) => {
	const deleteUrl = `${URL_API}${ROUTES_PATH.SCORES.SCORES}/${scoreId}`;

	const deleteDB = await axios.delete(deleteUrl, {
		headers: {
			Authorization: `JWT ${token}`,
		},
	});

	if (deleteDB.status !== 200) {
		console.log("Error deleting file from API");
	}

	return deleteDB?.status;
};
