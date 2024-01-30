import type { APIRoute } from "astro";
// import { supabase } from "@/lib/supabase";
import { ROUTES_PATH, URL_API } from "@/const";

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (!email || !password) {
		return new Response("Email and password are required", { status: 400 });
	}

	try {
		//* Registramos en nuestra db postgres
		const response = await fetch(`${URL_API}${ROUTES_PATH.SIGNUP}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			throw new Error(`Database registration failed with status: ${response.status}`);
		}

		//TODO Registramos en nuestra auth supabase
		// const { error } = await supabase.auth.signUp({ email, password });

		// if (error) {
		// 	return new Response("Error during registration", { status: 500 });
		// }

		return new Response("Registration successful", { status: 201 });
	} catch (error) {
		console.error(error);
		return new Response("Error during registration", { status: 500 });
	}
};
