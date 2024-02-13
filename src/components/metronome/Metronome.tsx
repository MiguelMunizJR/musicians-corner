import { useRef, useState } from "react";
import { Button } from "../Button";
import { Slider } from "./Slider";
import { Volume, VolumeSilence } from "@/icons/player/VolumeIcons";

export const VolumeControl = () => {
	const [volume, setVolume] = useState(1);
	const previousVolumeRef = useRef(volume);

	const isVolumeSilenced = volume < 0.1;

	const handleClickVolumen = () => {
		if (isVolumeSilenced) {
			setVolume(previousVolumeRef.current);
		} else {
			previousVolumeRef.current = volume;
			setVolume(0);
		}

		console.log(volume);
	};

	return (
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
	);
};

export const Metronome = () => {

	const [bpm, setBpm] = useState(89);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBpm(Number(e?.target?.value));
	};

	const handleMinius = () => {
		if (bpm > 20) {
			setBpm((prevBpm) => prevBpm - 1);
		}
	};

	const handlePlus = () => {
		if (bpm < 260) {
			setBpm((prevBpm) => prevBpm + 1);
		}
	};

	const handleStart = () => {
		setIsPlaying((prev) => !prev);
	};

	return (
		<section className="w-10/12 min-h-max mt-4 mx-auto flex flex-col gap-8">
			<VolumeControl />
			<article className="w-full min-h-max flex flex-col justify-center items-center gap-3">
				<div className="w-52 h-52 rounded-full flex justify-center items-center bg-[#1e2231a2] ring ring-[#26ab3c]">
					<h3 className="flex flex-col items-center">
						<span className="text-7xl text-white font-bold">{bpm}</span>
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
						value={bpm}
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
