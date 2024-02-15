export const prerender = false;

import { ROUTES_PATH } from "@/const";
import { navigate } from "astro/virtual-modules/transitions-router.js";

export const logout = async () => {
	try {
		await fetch("/api/auth/logout", {
			method: "GET",
		});

		navigate(ROUTES_PATH.HOME);
		localStorage.removeItem("token");
	} catch (error) {
		console.error(error);
	}

	return;
};