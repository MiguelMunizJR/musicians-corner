import { LoadingButton } from "./UI/ButtonUI";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  handleClick?: () => void;
}

export const Button = ({
	children,
	type = "button",
	loading,
	className = "",
	handleClick,
}: Props) => {
	return (
		<LoadingButton
			type={type}
			className={`min-w-32 rounded-md flex justify-center items-center transition-all cursor-pointer ${className}`}
			loading={loading}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center">{children}</div>
		</LoadingButton>
	);
};
