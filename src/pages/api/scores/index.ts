import { ROUTES_PATH, URL_API } from "@/const";
import { uploadStream } from "@/lib/cloudinary";
import type { APIRoute } from "astro";
import axios from "axios";

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();

	const name = formData.get("name");
	const artist = formData.get("artist");
	const category = formData.get("category");
	const file = formData.get("file") as File;
	const userId = formData.get("user");
	const token = formData.get("token");

	if (!name || !file) {
		return new Response("Missing data!", { status: 400 });
	}

	const arrayBuffer = await file.arrayBuffer();
	const unit8Array = new Uint8Array(arrayBuffer);

	const fileScore = await uploadStream(unit8Array);
	const { secure_url } = fileScore;
	const url_image = secure_url.replace(".pdf", ".jpg");

	
	if (!fileScore.url) {
		return new Response("Error uploading file in Cloudinary", { status: 400 });
	}
	
	const URL = `${URL_API}${ROUTES_PATH.SCORES.SCORES}`;
	
	const data = {
		name,
		artist,
		url_score: secure_url,
		url_image,
		category,
		userId: userId,
	};
	
	const headers = {
		headers: {
			"Authorization": `Bearer ${token}`,
		}
	};

	console.log(fileScore);

	const response = await axios.post(URL, data, headers);
	return new Response(response.data, { status: 200 });
};