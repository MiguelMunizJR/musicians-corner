import { ROUTES_PATH, URL_API } from "@/const";
import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
	const formData = await request.formData();

	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (!email || !password) {
		return new Response("Email and password are required", { status: 400 });
	}

	const URL = `${URL_API}${ROUTES_PATH.LOGIN}`;
	try {
		const data = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (!data.ok) {
			return new Response("Error in credentials", { status: 400 });
		}

		const user = await data.json();
		const { access_token, refresh_token } = user.session;

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

		return new Response(JSON.stringify(user), { status: 200 });
	} catch (error) {
		return new Response("Error during login", { status: 500 });
	}
};
