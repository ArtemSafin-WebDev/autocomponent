import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

interface IUsePagesStorage {
  countPages: number | null | string,
  setCountPages: (payload: number | string) => void
}

export const usePagesStorage = create<IUsePagesStorage>()(immer((set) => ({
  countPages: "",
  setCountPages: (payload) => set((state) => void(state.countPages = Number(payload)))
})))