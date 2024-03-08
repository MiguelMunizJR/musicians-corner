export const prerender = false;

import { ROUTES_PATH } from "@/const";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
	cookies.delete("sb-access-token", { path: "/" });
	cookies.delete("sb-refresh-token", { path: "/" });
	cookies.delete("sb-user", { path: "/" });
	cookies.delete("db-user", { path: "/" });
	return redirect(ROUTES_PATH.HOME);
};