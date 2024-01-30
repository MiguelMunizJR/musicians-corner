interface ROUTES_PATH {
	HOME: string;
	LOGIN: string;
	SIGNUP: string;
	USER: string;
	DASHBOARD: string;
	NOT_FOUND: string;
}

export const URL_API = "https://musicians-corner-app.onrender.com/api/v1";

export const ROUTES_PATH = Object.freeze({
	HOME: "/",
	LOGIN: "/auth/login",
	SIGNUP: "/auth/signup",
	USER: "/users/me",
	DASHBOARD: "/dashboard",
	LIBRARY: "/library",
	NOT_FOUND: "*"
});

export const API_ROUTES = Object.freeze({
	LOGIN: "/api/auth/login",
	SIGNUP: "/api/auth/signup",
});