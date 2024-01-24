const Player = () => {
    
	const VolumeControl = () => {
		const volume = usePlayerStore((state) => state.volume);
		const setVolume = usePlayerStore((state) => state.setVolume);
		const previousVolumeRef = useRef(volume);

		const isVolumeSilenced = volume < 0.1;

		const handleClickVolumen = () => {
			if (isVolumeSilenced) {
				setVolume(previousVolumeRef.current);
			} else {
				previousVolumeRef.current = volume;
				setVolume(0);
			}
		};
	};

	return (
		<div className="flex flex-row justify-between w-full px-1 z-50">
			<div className="w-[200px]">
				<CurrentSong {...currentMusic.song} />
			</div>

			<div className="grid place-content-center gap-4 flex-1">
				<div className="flex justify-center flex-col items-center">
					<button className="bg-white rounded-full p-2" onClick={handleClick}>
						{isPlaying ? <Pause /> : <Play />}
					</button>
					<SongControl audio={audioRef} />
					<audio ref={audioRef} />
				</div>
			</div>

			<div className="grid place-content-center">
				<VolumeControl />
			</div>
		</div>
	);
};

export default Player;
