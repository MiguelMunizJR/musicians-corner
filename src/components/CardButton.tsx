interface Props {
  title: string;
  className: string;
  href: string;
  children: React.ReactNode;
  userId?: string;
}

const CardButton = ({ title, className, href, children, userId }: Props) => {
	const URL = userId ? href.replace("[user_id]", userId) : href;

	return (
		<article
			className={`w-32 h-32 md:w-36 md:h-36 flex justify-center items-center text-gray-200 rounded-lg relative transition-all ${className}`}
		>
			<a
				className="w-full min-h-max flex flex-col justify-center items-center"
				href={URL}
			>
				{children}
				<div>
					{title !== "" ? (
						<h3 className="pt-2 mx-auto text-balance">{title}</h3>
					) : null}
				</div>
			</a>
		</article>
	);
};

export default CardButton;
