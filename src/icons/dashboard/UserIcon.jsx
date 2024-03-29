const UserIcon = ({ className }) => {
	return (
		<svg
			class={`w-5 h-5 ${className}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="#26ab3c"
			viewBox="0 0 24 24"
		>
			<g fill="#26ab3c">
				<circle cx="12" cy="6" r="4"></circle>
				<path d="M20 17.5c0 2.4853 0 4.5-8 4.5s-8-2.0147-8-4.5S7.5817 13 12 13s8 2.0147 8 4.5Z"></path>
			</g>
		</svg>
	);
};

export default UserIcon;
