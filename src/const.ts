interface IApiRoutes {
  LOGIN: string;
  LOGOUT: string;
  SIGNUP: string;
}

interface IRoutesPath {
  HOME: string;
  LOGIN: string;
  SIGNUP: string;
  DASHBOARD: string;
  LIBRARY: string;
  USER: string;
  SCORES: { [key: string]: string };
  SCORES_CATEGORY: { [key: string]: string };
  METRONOME: string;
  TUNER: string;
  SETTINGS: string;
  NOT_FOUND: string;
}

export const URL_API: string =
  "https://musicians-corner-app.onrender.com/api/v1";

export const API_ROUTES: IApiRoutes = Object.freeze({
	LOGIN: "/api/auth/login",
	LOGOUT: "/api/auth/logout",
	SIGNUP: "/api/auth/signup",
});

export const ROUTES_PATH: IRoutesPath = Object.freeze({
	HOME: "/",
	LOGIN: "/auth/login",
	SIGNUP: "/auth/signup",
	DASHBOARD: "/dashboard",
	LIBRARY: "/library",
	USER: "/users/me",
	SCORES: {
		SCORES: "/scores",
		MY_ALBUMS: "/scores/[user_id]/my-albums",
		MY_SCORES: "/scores/[user_id]/my-scores",
		MY_UPLOADS: "/scores/[user_id]/my-uploads",
		MY_LIKED: "/scores/[user_id]/my-liked",
	},
	SCORES_CATEGORY: {
		BANDA: "/scores/category/banda",
		MARIACHI: "/scores/category/mariachi",
		SONORA: "/scores/category/sonora",
	},
	METRONOME: "/metronome",
	TUNER: "/tuner",
	SETTINGS: "/settings",
	NOT_FOUND: "*",
});
