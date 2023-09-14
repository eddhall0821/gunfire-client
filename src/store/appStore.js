import create from "zustand";

export const useAppStore = create((set) => ({
  isRunning: false,
  toggleRunning: () => {
    set((state) => {
      console.log(!state.isRunning);
      state.isRunning = !state.isRunning;
    });
  },

  setNotRunning: () => {
    set((state) => {
      state.isRunning = false;
    });
  },

  setRunning: () => {
    set((state) => {
      state.isRunning = true;
    });
  },
}));
