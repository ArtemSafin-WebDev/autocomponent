export type TItem = {
  id: number;
  balance: number;
  title: string;
  oem: string;
  code: string;
  manufacturer: string;
  warehouse: string;
  inStock?: boolean;
  date?: string;
  pricePerUnit: string;
  quantity: number;
  total: string;
  category?: string;
}

export interface IItemsTable {
  id?: number;
  item: TItem;
  setCardNoticeArray?: any;
  lastId: any;
}