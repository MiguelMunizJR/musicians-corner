import { ROUTES_PATH, URL_API } from "@/const";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();

	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (!email || !password) {
		return new Response("Email and password are required", { status: 400 });
	}

	const URL = `${URL_API}${ROUTES_PATH.SIGNUP}`;
	try {
		const res = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		
		if (!res.ok) {
			return new Response("Error in credentials", { status: 400 });
		}
		
		const data = await res.json();
		return new Response(data, { status: 201 });
	} catch (error) {
		console.error(error);
		return new Response("Error during registration", { status: 500 });
	}
};
