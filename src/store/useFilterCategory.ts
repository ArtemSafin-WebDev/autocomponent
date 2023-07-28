import {immer} from "zustand/middleware/immer";
import {create} from "zustand";

interface TUseFilterCategory {
  checked: string[],
  checkedSize?: number;
  setChecked: any;
  getSize?: any
}

export const useFilterCategory = create<TUseFilterCategory>()(immer((set) =>  ({
  checked: [],
  setChecked: (payload: string[]) => set((state) => void(state.checked = payload)),
  getSize: () => set((state) => void(state.checkedSize = state.checked?.length))
})))