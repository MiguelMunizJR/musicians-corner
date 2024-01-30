import { useState } from "react";
import { Pause, Play } from "../../icons/player/PlayerIcons";
// import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ size = "small" }) {
	const [isPlaying, setIsPlaying] = useState(false);
	// const {
	// 	currentMusic,
	// 	isPlaying,
	// 	setIsPlaying,
	// 	setCurrentMusic
	// } = usePlayerStore(state => state);

	// const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

	const handleClick = () => {
		setIsPlaying(!isPlaying);
	};

	// fetch(`/api/get-info-playlist.json?id=${id}`)
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		const { songs, playlist } = data;

	// 		setIsPlaying(true);
	// 		setCurrentMusic({ songs, playlist, song: songs[0] });
	// 	});

	const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

	return (
		<button
			onClick={handleClick}
			className="card-play-button rounded-full bg-green-600/50 p-4 hover:scale-105 transition hover:bg-[#26ab3c]"
		>
			{isPlaying ? (
				<Pause className={iconClassName} />
			) : (
				<Play className={iconClassName} />
			)}
		</button>
	);
}
