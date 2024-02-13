import { supabase } from "./supabase";

export const getUser = async (access_token , refresh_token) => {
	const { data, error } = await supabase.auth.setSession({
		refresh_token,
		access_token,
	});

	if (error) {
		console.log(error.message);
		return null;
	}

	return data;
};
