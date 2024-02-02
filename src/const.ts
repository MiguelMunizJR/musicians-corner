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
  SCORES: {
    SCORES: string;
    MY_SCORES: string;
    MY_UPLOADS: string;
    MY_LIKED: string;
  }
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
		MY_SCORES: "/scores/[id]/scores",
		MY_UPLOADS: "/scores/[id]/uploads",
		MY_LIKED: "/scores/[id]/liked",
	},
	METRONOME: "/metronome",
	TUNER: "/tuner",
	SETTINGS: "/settings",
	NOT_FOUND: "*",
});
