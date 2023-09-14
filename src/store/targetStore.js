import create from "zustand";

const generateRandomPosition = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const targetStore = create((set) => ({
  score: 0,
  targets: [
    {
      id: 0,
      position: [
        generateRandomPosition(-8, 8),
        generateRandomPosition(2, 8),
        generateRandomPosition(-3, -8),
      ],
    },
  ],
  destroyTarget: (id) => {
    set((state) => {
      state.targets = state.targets.filter((target) => target.id !== id);
      state.score += 1;
      state.createTarget(state.score);
    });
  },
  createTarget: (id) => {
    set((state) =>
      state.targets.push({
        id,
        position: [
          generateRandomPosition(-8, 8),
          generateRandomPosition(2, 8),
          generateRandomPosition(-3, -8),
        ],
      })
    );
  },
}));
