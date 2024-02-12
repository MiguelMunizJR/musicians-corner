import { useState, useRef } from "react";
import { Button } from "../Button";
import { Slider } from "./Slider";
import { Volume, VolumeSilence } from "@/icons/player/VolumeIcons";

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
		<section className="w-10/12 min-h-max mt-4 mx-auto flex flex-col gap-8">
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
			<article className="w-full min-h-max flex flex-col justify-center items-center gap-3">
				<div className="w-52 h-52 rounded-full flex justify-center items-center bg-[#1e2231a2] ring ring-[#26ab3c]">
					<h3 className="flex flex-col items-center">
						<span className="text-7xl text-white font-bold">{bpmValue}</span>
						<span className="text-gray-100/40 font-normal text-3xl">BPM</span>
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
				<div className="w-full flex justify-center items-center gap-8 mt-14">
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
					<div className="ring ring-[#374151] w-5 h-5 rounded-full bg-transparent"></div>
				</div>
				<Button
					handleClick={handleStart}
					className={`mt-12 w-36 p-3 bg-[#26AB3B] hover:bg-[#35bd4a] transition-all text-lg font-medium ${
						isPlaying && "bg-[#EF4444] hover:bg-[#f34848]"
					}`}
				>
					{isPlaying ? "Stop" : "Start"}
				</Button>
			</article>
		</section>
	);
};

export default Metronome;
