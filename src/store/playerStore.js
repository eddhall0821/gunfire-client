import create from "zustand";

export const usePlayerStore = create((set) => ({
  players: [],
  setPlayer: (value) => {
    set((state) => ({ players: value }));
  },
}));
