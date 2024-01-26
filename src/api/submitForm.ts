import { URL_API, ROUTES_PATH } from "@/const";
import type { formData } from "@/types/form";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import axios from "axios";

const submitForm = async (data: formData, URL: string): Promise<void> => {
	
	if (URL === ROUTES_PATH.LOGIN) {
		const URL_BASE = `${URL_API}${ROUTES_PATH.LOGIN}`;

		await axios
			.post(URL_BASE, data)
			.then((res) => {
				const token = res?.data.token;
				localStorage.setItem("token", token);
				console.log("You are logged in");
				navigate(ROUTES_PATH.DASHBOARD);
			})
			.catch((err) => {
				if (err.response?.status === 401) {
					console.error("Incorrect email or password");
					return;
				}
				console.error(err.message);
			});
	} else {
		const URL_BASE = `${URL_API}${ROUTES_PATH.REGISTER}`;

		await axios
			.post(URL_BASE, data)
			.then((res) => {
				const token = res?.data.token;
				localStorage.setItem("token", token);
				console.log("You are registered");
			})
			.catch((err) => {
				console.error(err.message);
			});
	}
};

export default submitForm;
