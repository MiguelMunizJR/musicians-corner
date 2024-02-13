import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./DropDownMenu";

const NotificationCard = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild> 
				<button className="h-9 w-9 rounded-full relative flex justify-center items-center bg-transparent text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400 transition-all">
					<svg
						className="w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 14 20"
					>
						<path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"></path>
					</svg>
					<div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-4 dark:border-gray-900"></div>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mt-2 w-[20rem] min-h-80 bg-[#161925] py-3 px-2 border-gray-700/40">
				<DropdownMenuLabel className="font-medium text-[17px]">Notificaciones</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className="hover:bg-[#282F3B] rounded-[5px] px-3 py-5 text-gray-300 cursor-pointer">
						<a href={""}>Notificación de prueba</a>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default NotificationCard;
