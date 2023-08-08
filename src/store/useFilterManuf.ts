import {immer} from "zustand/middleware/immer";
import {create} from "zustand";

interface TUseFilterManuf {
  manuf: any[],
  manufVal: any[],
  crnArr: any[],
  filterManuf: (payload: any) => void;
  getManufValues: () => void
}

export const useFilterManuf = create<TUseFilterManuf>()(immer((set) =>  ({
  manuf: [],
  manufVal: [],
  crnArr: [],
  getManufValues: () => {
    set((state) => state.manuf.forEach((checkbox: any) => {
      if(checkbox.checked) {
        state.manuf = checkbox.text
      }
    }))
  },
  filterManuf: (payload) => {
    set((state) => {
      void (state.manuf = payload);
      void (state.manufVal = state.manuf.filter((checkbox: any) => checkbox.checked).map((checkbox: any) => checkbox.text)
      )
    })
  },
})))