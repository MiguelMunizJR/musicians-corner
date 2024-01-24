import PasswordIcon from "@/icons/auth/Password.jsx";
import EmailIcon from "@/icons/auth/Email.jsx";

const Form = ({ URL }) => {
	return (
		<form className="mt-10 flex flex-col justify-center">
			<div className="flex flex-col gap-8">
				<div className="relative">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="musicapp@gmail.com"
						className="placeholder:text-[#777]"
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
						className="placeholder:text-[#777]"
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
				<p className="my-2 text-right text-sm text-[#26AB3C] opacity-85 cursor-pointer hover:text-[#52b964] transition duration-200">
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
