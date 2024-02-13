import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
// import { ROUTES_PATH, URL_API } from "@/const";

export const POST: APIRoute = async ({ request, cookies }) => {
	const formData = await request.formData();

	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (!email || !password) {
		return new Response("Email and password are required", { status: 400 });
	}

	try {
		//TODO Autenticacion con db postgres
		// const response = await fetch(`${URL_API}${ROUTES_PATH.LOGIN}`, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ email, password }),
		// });

		// if (!response.ok) {
		// 	throw new Error(`Login failed with status: ${response.status}`);
		// }

		//TODO Autenticacion con supabase
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return new Response(error.message, { status: 500 });
		}

		const { access_token, refresh_token } = data.session;
		
		cookies.set("sb-access-token", access_token, {
			path: "/",
		});
		cookies.set("sb-refresh-token", refresh_token, {
			path: "/",
		});

		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		return new Response("Error during login", { status: 500 });
	}
};
