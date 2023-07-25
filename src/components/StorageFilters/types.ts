import {TItemsTypes} from "@/types/api";

export type TFilterBtn = {
  id: number;
  icon: HTMLImageElement;
  text: string;
  isActive?: boolean;
  type?: TItemsTypes
}
