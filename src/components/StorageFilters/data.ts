import filterIcon from "@/assets/images/filterIcon.svg";
import tires from "@/assets/images/tires.svg";
import disks from "@/assets/images/disks.svg";

import {TFilterBtn} from "@/components/StorageFilters/types";

export const filterBtns: TFilterBtn[] = [
  {id: 1, icon: filterIcon, text: "Фильтр", isActive: true},
  {id: 2, icon: tires, text: "Шины", type: "tires"},
  {id: 3, icon: disks, text: "Диски", type: "disks"},
  {id: 4, icon: disks, text: "Аккумуляторы", type: "accumulator"},
  {id: 5, icon: disks, text: "Автолампы", type: "auto_lamps"},
  {id: 6, icon: disks, text: "Щётки", type: "brushes"},
]