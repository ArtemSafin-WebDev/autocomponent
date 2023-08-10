import {immer} from "zustand/middleware/immer";
import {create} from "zustand";
import {devtools} from "zustand/middleware";


interface TUseFilterManuf {
  checkedManufValues: string[] | []
  setCheckedManufValues: (payload: string[]) => void
}

export const useFilterManuf = create<TUseFilterManuf>()(immer(devtools((set) =>  ({
  checkedManufValues: [],
  setCheckedManufValues: (payload: string[]) => set((state) => void(state.checkedManufValues = payload))
}))))