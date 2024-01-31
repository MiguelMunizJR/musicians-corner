interface Props {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button = ({ children, className = "", handleClick }: Props) => {
	return (
		<button
			className={`w-32 rounded-md flex justify-center items-center transition-all gap-3 cursor-pointer ${className}`}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center">{children}</div>
		</button>
	);
};
