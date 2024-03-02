import { ROUTES_PATH, URL_API } from "@/const";
import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
	const URL = `${URL_API}${ROUTES_PATH.USER}`;
	const formData = await request.formData();

	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (!email || !password) {
		return new Response("Email and password are required", { status: 400 });
	}

	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return new Response("Error in credentials", { status: 400 });
		}

		const { access_token, refresh_token } = data.session;

		cookies.set("sb-access-token", access_token, {
			path: "/",
		});
		cookies.set("sb-refresh-token", refresh_token, {
			path: "/",
		});

		await supabase.auth.setSession({
			refresh_token,
			access_token,
		});

		//! LIB
		const res = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const responseData = await res.json();

		return new Response(JSON.stringify(responseData), { status: 200 });
	} catch (error) {
		return new Response("Error during login", { status: 500 });
	}
};
