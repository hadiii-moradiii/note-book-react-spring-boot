import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CounterStore {
  counter: number;
  increase: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

if (process.env.NODE_ENV !== "production") {
  mountStoreDevtool("counter store", useCounterStore);
}

export default useCounterStore;
