import PasswordIcon from "@/icons/auth/Password.jsx";
import EmailIcon from "@/icons/auth/Email.jsx";
import { useState } from "react";

const inputStyle =
  "w-[22rem] h-[2.7rem] pl-12 rounded-lg bg-[#222] bg-opacity-20 border-gray-700 font-medium outline-none text-[#aaa]";

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

		if (URL === "/login") {
			console.log("Iniciar sesion", formData);
			setFormData({ email: "", password: "" });
			//! Hacer POST a API
		} else if (URL === "/register") {
			console.log("Crear Usuario", formData);
			setFormData({ email: "", password: "" });
			//! Hacer POST a API
		} else {
			console.error("Ha ocurrido un error inesperado.");
		}
	};

	return (
		<form
			className="mt-10 flex flex-col justify-center"
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
				{URL === "/login" ? "Login" : "Sign up"}
			</button>
		</form>
	);
};

export default Form;
