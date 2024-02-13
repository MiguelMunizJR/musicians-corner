import { getUser } from "@/lib/getUser";
import { create } from "zustand";

export const useUser = create((set) => ({
	user:  {},
	getUser: async () => {
		const user = await getUser();
		set({ user });
	}
}));
