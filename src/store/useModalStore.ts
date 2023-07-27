import {immer} from "zustand/middleware/immer";
import {create} from "zustand";
import {devtools} from "zustand/middleware";

interface TUseModalStore {
  isFilterActive: boolean;
  changeFilterState: (payload: boolean) => void;
}

export const useModalStore = create<TUseModalStore>()(immer(devtools((set) => ({
  isFilterActive: false,
  changeFilterState: (payload): void => {
    set((state: any) => void(state.isFilterActive = payload))
  }
}))))