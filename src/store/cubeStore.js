import create from "zustand";

export const useCubeStore = create((set) => ({
  cubes: [],
  setCube: (value) => {
    set((state) => ({ cubes: value }));
  },
  addCube: (x, y, z) =>
    set((state) => ({ cubes: [...state.cubes, [x, y, z]] })),
}));
