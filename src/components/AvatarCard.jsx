import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/DropDownMenu";
import { ROUTES_PATH } from "@/const";
import { logout } from "@/lib/auth/auth";
import { useUser } from "@/store/useStore";

export const AvatarIcon = () => {
	return (
		<svg
			className="w-[42px]"
			xmlns="http://www.w3.org/2000/svg"
			id="Layer_1"
			fill="#000"
			data-name="Layer 1"
			viewBox="0 0 128 128"
		>
			<g id="SVGRepo_iconCarrier">
				<defs />
				<circle cx="64" cy="64" r="60" style={{ fill: "#00adfe" }} />
				<circle
					cx="64"
					cy="64"
					r="48"
					style={{ fill: "#356cb6", opacity: 0.3 }}
				/>
				<path
					d="M64 124a59.8 59.8 0 0 0 41.54-16.72c-1-22.43-3.94-55.49-12.65-75.18C88.06 21.18 76.74 13.88 64 13.88c-12.74 0-24.65 7-28.89 18.22C27.58 51.93 24.35 85.33 23 107.76A59.74 59.74 0 0 0 64 124Z"
					className="cls-3"
				/>
				<path
					d="M84.13 36.13c-3.52-8.48-10.48-12.82-19.74-13h-.78c-9.26.22-16.22 4.56-19.74 13-3.63 8.71-4.83 21.77 0 39.19 4.69 17 10.54 20.49 19.74 20.67h.78c9.2-.18 15-3.72 19.74-20.67 4.87-17.42 3.63-30.48 0-39.19Z"
					style={{ fill: "#fff" }}
				/>
				<path d="M77.58 52.83h4.41" className="cls-5" />
				<path
					d="M68.5 88a30.85 30.85 0 0 1-9 0c-1.25-.33-2.5-1.12-2.5-2.5s1.2-2.13 2.5-2.5a20.4 20.4 0 0 1 9 0c1.21.31 2.5 1.12 2.5 2.5s-1.27 2.18-2.5 2.5Z"
					className="cls-3"
				/>
				<path d="M82.05 58.11a9.91 9.91 0 0 1-5.73-.37" className="cls-6" />
				<path
					d="M75.42 65A3.31 3.31 0 0 1 82 65c0 1.83-3.31 14.33-5.51 14.33-1.07-.04-1.07-12.54-1.07-14.33ZM75.37 45A3.31 3.31 0 0 0 82 45c0-1.82-2.59-9.92-4.41-9.92s-2.22 8.11-2.22 9.92Z"
					className="cls-7"
				/>
				<path d="M46.01 52.83h4.41" className="cls-5" />
				<path d="M51.68 57.76a10 10 0 0 1-5.91.29" className="cls-6" />
				<path
					d="M52.63 45A3.31 3.31 0 0 1 46 45c0-1.82 2.59-9.92 4.41-9.92s2.22 8.11 2.22 9.92ZM52.58 65A3.31 3.31 0 0 0 46 65c0 1.83 3.31 14.33 5.51 14.33 1.07-.04 1.07-12.54 1.07-14.33ZM68.41 90.32c0 1.22-2 2.21-4.41 2.21s-4.41-1-4.41-2.21c0-.62 2-.27 4.41-.27s4.41-.35 4.41.27Z"
					className="cls-7"
				/>
				<path
					d="M84.13 36.13a21.8 21.8 0 0 0-4.48-6.94c1.45 10.32.63 23.64-1.36 41.86-2.09 19.1-11.43 23.3-21 24a21.16 21.16 0 0 0 6.35.94h.78c9.2-.18 15-3.72 19.74-20.67 4.84-17.42 3.6-30.48-.03-39.19Z"
					style={{ opacity: 0.2, fill: "#393c54" }}
				/>
			</g>
		</svg>
	);
};

export const ArrowDown = () => {
	return (
		<svg
			className="w-[12px]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -4.5 20 20"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M.292.366c-.39.405-.39 1.06 0 1.464l8.264 8.563c.78.81 2.047.81 2.827 0l8.325-8.625c.385-.4.39-1.048.01-1.454a.976.976 0 0 0-1.425-.011l-7.617 7.893a.975.975 0 0 1-1.414 0L1.705.366a.974.974 0 0 0-1.413 0"
			></path>
		</svg>
	);
};

export const AvatarCard = () => {
	const user = useUser(state => state.user);

	const myScoresURL = ROUTES_PATH.SCORES.MY_SCORES.replace(
		"[user_id]",
		user?.user?.id
	);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className="min-w-72 mx-4 min-h-20 py-3 px-5 rounded-xl flex items-center gap-3 hover:bg-slate-600/15 cursor-pointer transition-all">
					<AvatarIcon />
					<div className=" flex flex-col gap-1">
						<h6 className="text-gray-300">{user?.user?.email}</h6>
						<p className="bg-blue-500 w-max px-3 text-sm font-semibold rounded-full">
              Pro
						</p>
					</div>
					<div className="ml-4">
						<ArrowDown />
					</div>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-72 p-3 border-gray-700/40 bg-[#161925]">
				<DropdownMenuLabel className="text-[1rem]">Mi cuenta</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className="hover:bg-[#282F3B] rounded-lg px-2 py-2 text-gray-300 cursor-pointer">
						<a href={ROUTES_PATH.USER}>Mi perfil</a>
						<DropdownMenuShortcut>⇧ + P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem className="hover:bg-[#282F3B] rounded-lg px-2 py-2 text-gray-300 cursor-pointer">
						<a href={myScoresURL}>Mis partituras</a>
						<DropdownMenuShortcut>⇧ + B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem className="hover:bg-[#282F3B] rounded-lg px-2 py-2 text-gray-300 cursor-pointer">
						<a href={ROUTES_PATH.SETTINGS}>Ajustes</a>
						<DropdownMenuShortcut>⇧ + S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem className="hover:bg-[#282F3B] rounded-lg px-2 py-2 text-gray-300 cursor-pointer">
						<span>Atajos de teclado</span>
						<DropdownMenuShortcut>⇧ + K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onSelect={logout}
					className="hover:bg-[#2C1D28] rounded-lg py-3 px-2 cursor-pointer flex items-center gap-1 text-red-500"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-5"
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
          Cerrar sesión
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
