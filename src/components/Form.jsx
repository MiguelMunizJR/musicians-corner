import { useState } from "react";
import PasswordIcon from "@/icons/auth/Password.jsx";
import EmailIcon from "@/icons/auth/Email.jsx";
import submitForm from "@/api/submitForm";
import { ROUTES_PATH } from "@/const";
import { navigate } from "astro/virtual-modules/transitions-router.js";

const inputStyle =
  "w-[22rem] h-[2.7rem] pl-12 rounded-lg bg-gray-600/20 border-gray-700 font-medium outline-none text-[#aaa] transition-all hover:bg-gray-500/20";

const Form = ({ URL }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	// Manejar cambios en los campos de entrada
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//* Validaciones
		if (formData.email === "" || formData.password === "") {
			console.log("Please enter your email and password");
			return;
		}

		//* Submit form
		if (URL === ROUTES_PATH.LOGIN) {
			submitForm(formData, URL)
				.then(() => {
					
				})
				.catch((err) => console.error(err.message));

			setFormData({ email: "", password: "" });
		} else {
			submitForm(formData, URL)
				.then(() => {
					navigate(ROUTES_PATH.LOGIN);
				})
				.catch((err) => console.error(err.message));
		}

		setFormData({ email: "", password: "" });
	};

	return (
		<form
			className="flex flex-col justify-center relative"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col gap-8">
				<div className="relative">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="musicapp@gmail.com"
						value={formData.email}
						onChange={handleChange}
						className={`${inputStyle} placeholder:text-[#777]`}
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
						value={formData.password}
						onChange={handleChange}
						className={`${inputStyle} placeholder:text-[#777]`}
						required
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
          Recover or change your password
				</p>
			) : null}
			<button className="mt-12 bg-[#26AB3C] rounded-lg p-[10px] border-none font-semibold transition duration-200 hover:bg-[#40b954]">
				{URL.includes("/login") ? "Inicia sesión" : "Crear cuenta"}
			</button>
			<p className="mx-auto py-2 text-gray-300">- O -</p>
			<button className="px-4 py-2 border flex justify-center items-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-500 hover:text-slate-300 hover:shadow transition duration-150">
				<img
					className="w-6 h-6"
					src="https://www.svgrepo.com/show/475656/google-color.svg"
					alt="google logo"
					loading="lazy"
				/>
				<span>
					{URL.includes("/login")
						? "Inicia sesión con Google"
						: "Crear cuenta con Google"}
				</span>
			</button>
		</form>
	);
};

export default Form;
