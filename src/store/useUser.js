import { create } from "zustand";

export const useUser = create((set) => ({
	user: { session: [], data: [] },
	setUser: (user) => set({ user }),
}));
