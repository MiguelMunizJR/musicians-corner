import { create } from "zustand";

export const usePlayer = create((set) => ({
	currentMusic: { playlist: null, song: null, songs: [] },
	isPlaying: false,
	volume: 1,
	tempo: 89,
	setCurrentMusic: (currentMusic) => set({ currentMusic }),
	setVolume: (volume) => set({ volume }),
	setTempo: (tempo) => set({ tempo }),
	setIsPlaying: (isPlaying) => set({ isPlaying }),
}));

export const useUser = create((set) => ({
	user: [],
	session: [],
	setUser: (user) => set({ user }),
	setSession: (session) => set({ session })
}));
