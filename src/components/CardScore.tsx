import DownloadIcon from "@/icons/dashboard/DownloadIcon.jsx";
import MenuScore from "@/icons/dashboard/MenuScore.jsx";
import UserIcon from "@/icons/dashboard/UserIcon.jsx";

interface Props {
  className?: string;
  title?: string;
  author?: string;
  user?: string;
  downloads?: string;
  scoreImage?: string;
}

export const MusicCategoryIcon = ({ className } : { className: string }) => {
	return (
		<svg
			className={`w-5 h-5 ${className}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<g
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2.5"
				clip-path="url(#a)"
			>
				<circle cx="12" cy="12" r="2"></circle>
				<circle cx="18" cy="9" r="2"></circle>
				<path d="M15.318 3.631a9 9 0 1 0 5.368 10.736M20 9V2l2 2"></path>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="currentColor" d="M0 0h24v24H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
};

export const CardScore = ({
	className,
	title,
	author,
	user,
	downloads,
	scoreImage,
}: Props) => {
	const src = !scoreImage?.includes("waiting for cloudinary url...")
		? scoreImage
		: "/images/score.jpg";

	return (
		<article
			className={`w-[15rem] h-[26rem] bg-[#1a1e2c] shadow-sm rounded-xl  ${className}`}
		>
			<div className="w-full h-[17rem] relative">
				<img
					src={src}
					alt="score-img"
					className="w-full h-full p-1 object-contain"
					loading="lazy"
				/>
				<div className="p-2 absolute top-2 right-5 bg-[#1a1e2c] hover:bg-[#2e3342] transition-all rounded-full cursor-pointer">
					<MenuScore className="w-4 h-4" />
				</div>
			</div>
			<div className="p-3">
				<div className="w-full flex flex-col px-2">
					<h3 className="text-balance text-lg h-[3rem] text-gray-300">{title}</h3>
					<div className="w-full flex justify-between items-center">
						<div className="flex gap-1 items-center">
							<MusicCategoryIcon className="w-4 h-4 text-[#26ab3c]" />
							<p className="text-sm text-gray-300/60">{author}</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<DownloadIcon className="w-6 h-6" />
							<span className="text-[#26ab3c] text-sm">{downloads}</span>
						</div>
					</div>
					<div className="flex gap-1 items-center">
						<UserIcon className="w-4 h-4" />
						<p className="text-sm text-gray-300/60">{user}</p>
					</div>
				</div>
			</div>
		</article>
	);
};
