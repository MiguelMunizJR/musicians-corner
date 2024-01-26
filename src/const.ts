interface ROUTES_PATH {
	HOME: string;
	LOGIN: string;
	REGISTER: string;
	USER: string;
	DASHBOARD: string;
	NOT_FOUND: string;
}

export const URL_API = "https://musicians-corner-app.onrender.com/api/v1";

export const ROUTES_PATH = Object.freeze({
	HOME: "/",
	LOGIN: "/auth/login",
	REGISTER: "/auth/register",
	USER: "/users/me",
	DASHBOARD: "/dashboard",
	NOT_FOUND: "*"
});