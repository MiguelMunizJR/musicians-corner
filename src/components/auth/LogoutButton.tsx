import { logout } from "@/lib/auth/auth";

interface Props {
  className?: string;
}

export const LogoutIcon = ({ className }: Props) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g fill="currentColor">
				<path
					opacity=".5"
					d="M9.052 4.5C9 5.078 9 5.804 9 6.722v10.556c0 .918 0 1.644.052 2.222H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5h1.052Z"
				></path>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062Zm3.043 8.545c0-.434-.336-.785-.75-.785s-.75.351-.75.784v2.094c0 .433.336.784.75.784s.75-.351.75-.784v-2.094Z"
				></path>
			</g>
		</svg>
	);
};

export const LogoutButton = ({ className }: Props) => {
	return (
		<form onSubmit={logout}>
			<button
				className={`w-full flex items-center text-red-500 hover:text-red-500 hover:ring-red-700 hover:bg-red-500/10 hover:ring-1 rounded-md gap-4 py-3 px-4 transition duration-150 ${className}`}
			>
				<LogoutIcon className="w-6" />
        Cerrar sesión
			</button>
		</form>
	);
};
