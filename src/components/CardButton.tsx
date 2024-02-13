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
			className={`w-36 h-36 flex justify-center items-center rounded-lg relative transition-all ${className}`}
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
