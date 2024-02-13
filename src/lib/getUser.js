import { API_ROUTES } from "@/const";
import { supabase } from "./supabase";
import Cookies from "js-cookie";

export const getUser = async () => {

	const accessToken = Cookies.get("sb-access-token");
	const refreshToken = Cookies.get("sb-refresh-token");

	const { data, error } = await supabase.auth.setSession({
		refresh_token: refreshToken || "",
		access_token: accessToken || "",
	});

	if (error) {
		try {
			await fetch(API_ROUTES.LOGOUT, {
				method: "POST",
			});
		} catch (e) {
			console.error(e.message);
		}
		return null;
	}

	return data;
};
