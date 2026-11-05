import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Cover, Distance, Dogs, Drainage, Poultry } from "@/data/plan";

type ProgressState = {
  steps: Record<string, boolean>;
  cuts: Record<string, boolean>;
  boxes: number;
  dogs: Dogs;
  poultry: Poultry;
  cover: Cover;
  drainage: Drainage;
  distance: Distance;
  toggleStep: (id: string) => void;
  toggleCut: (id: string) => void;
  setBoxes: (n: number) => void;
  setDogs: (v: Dogs) => void;
  setPoultry: (v: Poultry) => void;
  setCover: (v: Cover) => void;
  setDrainage: (v: Drainage) => void;
  setDistance: (v: Distance) => void;
  reset: () => void;
};

const initial = {
  steps: {} as Record<string, boolean>,
  cuts: {} as Record<string, boolean>,
  boxes: 1,
  dogs: "no" as Dogs,
  poultry: "no" as Poultry,
  cover: "shrubs" as Cover,
  drainage: "drains" as Drainage,
  distance: "either" as Distance,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      ...initial,
      toggleStep: (id) =>
        set((s) => ({ steps: { ...s.steps, [id]: !s.steps[id] } })),
      toggleCut: (id) => set((s) => ({ cuts: { ...s.cuts, [id]: !s.cuts[id] } })),
      setBoxes: (n) => set({ boxes: Math.min(4, Math.max(1, n)) }),
      setDogs: (dogs) => set({ dogs }),
      setPoultry: (poultry) => set({ poultry }),
      setCover: (cover) => set({ cover }),
      setDrainage: (drainage) => set({ drainage }),
      setDistance: (distance) => set({ distance }),
      reset: () => set({ ...initial, steps: {}, cuts: {} }),
    }),
    { name: "hollow-home-v1", skipHydration: true },
  ),
);
