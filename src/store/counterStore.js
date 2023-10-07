import { create } from "zustand";

// type CounterStore = {
//   count: Number,
//   increment: () => void,
//   decrement: () => void,
// };

export const useCounterStore = create((set) => ({
  count: 0,
  increment: (value) => set((state) => ({ count: state.count + value })),
  decrement: (value) => set((state) => ({ count: state.count - value })),
  reset: (value) => set((state) => ({ count: (value = 0) })),
}));
