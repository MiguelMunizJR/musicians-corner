import { useState, useRef } from "react";
import { Button } from "./Button";
import { Slider } from "./Slider";

export const VolumeSilence = () => (
	<svg
		fill="currentColor"
		role="presentation"
		height="18"
		width="18"
		aria-hidden="true"
		aria-label="Volumen apagado"
		viewBox="0 0 16 16"
	>
		<path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
		<path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
	</svg>
);

export const Volume = () => (
	<svg
		fill="currentColor"
		role="presentation"
		height="18"
		width="18"
		aria-hidden="true"
		aria-label="Volumen alto"
		id="volume-icon"
		viewBox="0 0 16 16"
	>
		<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
		<path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
	</svg>
);

const Metronome = () => {
	const [bpmValue, setBpmValue] = useState(89);
	const [volume, setVolume] = useState(100);
	const previousVolumeRef = useRef(volume);
	const [isPlaying, setIsPlaying] = useState(false);

	const isVolumeSilenced = volume < 0.1;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBpmValue(Number(e.target.value));
	};

	const handleMinius = () => {
		if (bpmValue > 20) {
			setBpmValue((prevValue) => prevValue - 1);
		}
	};

	const handlePlus = () => {
		if (bpmValue < 260) {
			setBpmValue((prevValue) => prevValue + 1);
		}
	};

	const handleClickVolumen = () => {
		if (isVolumeSilenced) {
			setVolume(previousVolumeRef.current);
		} else {
			previousVolumeRef.current = volume;
			setVolume(0);
		}
	};

	const handleStart = () => {
		setIsPlaying((prevValue) => !prevValue);
	};

	return (
		<section className="w-10/12 min-h-max mt-12 mx-auto flex flex-col">
			<div className="self-end flex gap-x-2 text-white">
				<button
					className="opacity-70 hover:opacity-100 transition"
					onClick={handleClickVolumen}
				>
					{isVolumeSilenced ? <VolumeSilence /> : <Volume />}
				</button>
				<Slider
					max={100}
					min={0}
					value={[volume * 100]}
					className="w-32"
					onValueChange={(value) => {
						const [newVolume] = value;
						const volumeValue = newVolume / 100;
						setVolume(volumeValue);
					}}
				/>
			</div>
			<article className="w-full min-h-max flex flex-col justify-center items-center">
				<div className="w-44 h-44 rounded-full flex justify-center items-center bg-[#1e2231a2]">
					<h3 className="flex flex-col items-center">
						<span className="text-6xl text-white font-bold">{bpmValue}</span>
						<span className="text-gray-200/30 font-normal text-2xl">BPM</span>
					</h3>
				</div>
				<div className="w-[40rem] mt-8 flex justify-between gap-5 items-center">
					<Button
						handleClick={handleMinius}
						className="bg-[#1e2231] hover:bg-[#232838] transition-all text-xl py-1"
					>
            -
					</Button>

					<input
						id="default-range"
						type="range"
						min={20}
						max={260}
						value={bpmValue}
						onChange={handleChange}
						className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
					/>
					<Button
						handleClick={handlePlus}
						className="bg-[#1e2231] hover:bg-[#232838] transition-all text-xl py-1"
					>
            +
					</Button>
				</div>
				<div className="w-full flex justify-center items-center gap-8 mt-20">
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
				</div>
				<Button
					handleClick={handleStart}
					className={`mt-16 w-36 p-3 bg-[#26AB3B] hover:bg-[#35bd4a] transition-all text-lg font-medium transition-all ${
						isPlaying && "bg-[#f44336] hover:bg-[#f55d4e]"
					}`}
				>
					{isPlaying ? "Stop" : "Start"}
				</Button>
			</article>
		</section>
	);
};

export default Metronome;
