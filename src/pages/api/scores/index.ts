import { ROUTES_PATH, URL_API } from "@/const";
import { deleteFile, uploadStream } from "@/lib/cloudinary";
import { updateUrlScore, deleteScore } from "@/lib/scores";
import type { APIRoute } from "astro";
import axios from "axios";

export const POST: APIRoute = async ({ request }) => {
	const URL = `${URL_API}${ROUTES_PATH.SCORES.SCORES}`;
	const formData = await request.formData();

	const name = formData.get("name") as string;
	const artist = formData.get("artist") as string;
	const category = formData.get("category") as string;
	const file = formData.get("file") as File;
	const userId = formData.get("user") as string;
	const token = formData.get("token") as string;

	const data = {
		name,
		artist,
		category,
		userId,
	};

	//* Upload score to API
	const dataDB = await axios.post(URL, data, {
		headers: {
			Authorization: `JWT ${token}`,
		},
	});

	const dataScore = dataDB?.data;

	//* Transform file to Uint8Array and upload to Cloudinary
	const arrayBuffer = await file.arrayBuffer();
	const unit8Array = new Uint8Array(arrayBuffer);
	const fileScore = await uploadStream(unit8Array);

	if (!fileScore.url) {
		await deleteScore(dataScore.id, token);
		await deleteFile(fileScore.public_id);
		return new Response("Error uploading file in Cloudinary", { status: 400 });
	}

	//* Update urls in API
	const updateStatus = await updateUrlScore(dataScore.id, fileScore, token);
	
	if (updateStatus !== 200) {
		await deleteScore(dataScore.id, token);
		await deleteFile(fileScore.public_id);
		return new Response("Error updating file in API", { status: 400 });
	}

	return new Response("ok", { status: 201 });
};
