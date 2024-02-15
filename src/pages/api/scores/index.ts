import { ROUTES_PATH, URL_API } from "@/const";
import { uploadStream } from "@/lib/cloudinary";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();

	const name = formData.get("name");
	const artist = formData.get("artist");
	const category = formData.get("category");
	const file = formData.get("file") as File;

	if (!name || !file) {
		return new Response("Missing data!", { status: 400 });
	}

	const arrayBuffer = await file.arrayBuffer();
	const unit8Array = new Uint8Array(arrayBuffer);

	const fileScore = await uploadStream(unit8Array);  

	if (!fileScore.url) {
		return new Response("Error uploading file in Cloudinary", { status: 400 });
	}

	try {
		const res = await fetch(`${URL_API}${ROUTES_PATH.SCORES.SCORES}`, {
			method: "POST",
			body: JSON.stringify({ name, artist, category }),
		});

		console.log(res);

		if (!res.ok) {
			return new Response("Error uploading file in DB", { status: 400 });
		}

		const resDB = await res.json();
		console.log(resDB);
		console.log({ name, artist, category, file });

		return new Response("ok", { status: 201 });
	} catch (e) {
		console.error(e);
		return new Response("Error uploading file", { status: 500 });
	}
};
