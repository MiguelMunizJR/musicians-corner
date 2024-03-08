const DownloadIcon = ({ className }) => {
	return (
		<svg
			class={`${className} w-5 h-5`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="#26ab3c"
			viewBox="0 0 24 24"
		><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"
			></path>
		</svg>
	);
}; 

export default DownloadIcon;

