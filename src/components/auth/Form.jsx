import { API_ROUTES, ROUTES_PATH } from "@/const";
import EmailIcon from "@/icons/auth/Email.jsx";
import PasswordIcon from "@/icons/auth/Password.jsx";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { Button } from "../Button";
import { useState } from "react";

const Form = ({ URL }) => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(e.target);
		const URL_BASE =
      URL !== ROUTES_PATH.LOGIN ? API_ROUTES.SIGNUP : API_ROUTES.LOGIN;

		try {
			const res = await fetch(URL_BASE, {
				method: "POST",
				body: formData,
			});

			//? signup
			if (res.status === 201) {
				navigate(ROUTES_PATH.LOGIN);
			}

			//? login
			if (res.status === 200) {
				const data = await res.json();
				localStorage.setItem("token", data.token_session);
				sessionStorage.setItem("user", data.user.id);
				navigate(ROUTES_PATH.DASHBOARD);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<article className="w-full flex flex-col items-center">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center items-center relative"
			>
				<div className="flex flex-col gap-8">
					<div className="relative">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="musicapp@gmail.com"
							className="w-[22rem] h-[3.4rem] md:h-[2.7rem] pl-12 rounded-lg bg-gray-600/20 border-gray-700 font-medium outline-none text-[#aaa] transition-all hover:bg-gray-500/20 placeholder:text-[#777]"
							required
						/>
						<div
							className="absolute inset-y-0 left-0 pl-3
      flex items-center
      pointer-events-none"
						>
							<EmailIcon color="#666" />
						</div>
					</div>

					<div className="relative">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="************"
							className="w-[22rem] h-[3.4rem] md:h-[2.7rem] pl-12 rounded-lg bg-gray-600/20 border-gray-700 font-medium outline-none text-[#aaa] transition-all hover:bg-gray-500/20 placeholder:text-[#777]"
							required
							autoComplete="true"
						/>
						<div
							className="absolute inset-y-0 left-0 pl-3
      flex items-center
      pointer-events-none"
						>
							<PasswordIcon color="#666" />
						</div>
					</div>
				</div>
				{URL === "/login" ? (
					<p className="my-2 text-right text-sm text-[#26AB3C] opacity-85 cursor-pointer hover:text-[rgb(82,185,100)] transition duration-200">
            ¿Has olvidado tu contraseña?
					</p>
				) : null}
				<Button
					loading={loading}
					type="submit"
					className="w-full h-[3rem] mt-14 md:mt-12 bg-[#26AB3C] rounded-lg p-[10px] border-none font-normal transition duration-200 hover:bg-[#3fb452]"
				>
					{URL.includes("/login") ? "Inicia sesión" : "Crear cuenta"}
				</Button>
				<p className="mx-auto py-2 text-gray-300">- O -</p>
			</form>
			<div className="w-full">
				<button className="w-full px-4 py-3 md:py-2 border flex justify-center items-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-500 hover:text-slate-300 hover:shadow transition duration-150">
					<img
						className="w-6 h-6"
						src="https://www.svgrepo.com/show/475656/google-color.svg"
						alt="google-logo"
						loading="lazy"
						decoding="async"
					/>
          Inicia sesión con Google
				</button>
			</div>
		</article>
	);
};

export default Form;
