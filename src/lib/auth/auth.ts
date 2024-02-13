import { API_ROUTES, ROUTES_PATH } from "@/const";
import { navigate } from "astro/virtual-modules/transitions-router.js";

export const logout = async () => {
	try {
		await fetch(API_ROUTES.LOGOUT, {
			method: "GET",
		});
		navigate(ROUTES_PATH.HOME);
	} catch (error) {
		console.error(error);
	}
	return;
};