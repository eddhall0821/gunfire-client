import create from "zustand";

export const useAppStore = create((set) => ({
  isRunning: false,
  toggleRunning: () => {
    set((state) => {
      state.isRunning = !state.isRunning;
    });
  },
}));
