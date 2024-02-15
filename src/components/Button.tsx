interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  handleClick?: () => void;
}

export const Button = ({ children, type = "button", disabled, className = "", handleClick }: Props) => {
	return (
		<button
			type={type}
			className={`min-w-32 min-h-max rounded-md flex justify-center items-center transition-all gap-3 cursor-pointer ${className}`}
			onClick={handleClick}
			disabled={disabled}
		>
			<div className="flex justify-center items-center">{children}</div>
		</button>
	);
};
