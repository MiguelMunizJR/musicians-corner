import { create } from "zustand";

export const usePlayer = create((set) => ({
	isPlaying: false,
	volume: 1,
	tempo: 89,
	setVolume: (volume) => set({ volume }),
	setTempo: (tempo) => set({ tempo }),
	setIsPlaying: (isPlaying) => set({ isPlaying }),
}));
