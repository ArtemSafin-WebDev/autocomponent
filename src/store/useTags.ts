import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

interface IUseTags {
  allTags: any[],
  setAllTags: (payload: [...string[] | [], ...string[]]) => void
}

export const useStoreTags = create<IUseTags>()(immer((set) => ({
  allTags: [],
  setAllTags: (payload) => set((state) => void(state.allTags = payload))
})))