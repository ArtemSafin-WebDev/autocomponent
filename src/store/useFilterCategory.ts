import {immer} from "zustand/middleware/immer";
import {create} from "zustand";

interface TUseFilterCategory {
  inputValue: string;
  checked: string[],
  checkedSize?: number;
  setChecked: any;
  getSize?: any;
  getInputValue: any;
  removeCheckItem: (payload: string) => void
}

export const useFilterCategory = create<TUseFilterCategory>()(immer((set) =>  ({
  checked: [],
  inputValue: "",
  setChecked: (payload: string[]) =>
    set((state) => void(state.checked = payload)),
  getInputValue: (payload: string) => {
    set((state) => void(state.inputValue = payload))
  },
  removeCheckItem: (payload) => {
    console.log(payload)
  }
})))