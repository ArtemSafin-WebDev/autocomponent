import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {devtools} from "zustand/middleware";

export const useCheckboxFilter = create(immer(devtools(((set) =>  ({
  manufCheckbox: [],
  updateCkeckedStatus: (crtIdx: number) => set((state: any) => {
      state.manufCheckbox = state.manufCheckbox.map((checkbox: any, idx: number) => crtIdx === checkbox.id ?
        {...checkbox, checked: !checkbox.checked} : checkbox
      )
    }),
  setManufCheckbox: (payload: any) => set((state: any) => {
        state.manufCheckbox = payload
      }
    )

})))))
