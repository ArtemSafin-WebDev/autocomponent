interface Advantage {
  src: string;
  title: string;
  desc: string;
}

interface Office {
  id: number;
  phone: string;
  address: string;
}

interface FooterMenuItem {
  href: string;
  title: string;
}

interface FooterMenuCategory {
  title: string;
  href: string;
  items: FooterMenuItem[];
}

interface HeaderCatalogMenuItem {
  href: string;
  title: string;
}

interface HeaderCatalogMenuCategory {
  title: string;
  href: string;
  items: HeaderCatalogMenuItem[];
}

interface LayoutData {
  advantages: Advantage[];
  offices: Office[];
  footerMenuCategories: FooterMenuCategory[];
  headerCatalogCategories: HeaderCatalogMenuCategory[];
}

interface HomeData {
  homeLinks: HomeLink[];
  homeCatalogItems: HomeCatalogItem[];
  homeSlides: HomeSlide[];
  homeCards: HomeCard[];
  newsFeed: NewsFeedData;
}

interface HomeLink {
  id: number;
  href: string;
  title: string;
  desc: string;
}

interface HomeCatalogItem {
  id: number;
  href: string;
  icon: string;
  title: string;
}

interface HomeSlide {
  id: number;
  src: string;
  title: string;
  subtitle?: string;
  desc?: string;
}

interface HomeCard {
  id: number;
  title: string;
  src: string;
  href: string;
  linkText: string;
}

enum NewsFeedCategory {
  Promo = "Акция",
  New = "Новинка",
  News = "Новости",
}

interface NewsFeedCard {
  id: number;
  datetime: string;
  title: string;
  shortDesc: string;
  category?: NewsFeedCategory;
}

interface NewsFeedCategoryGroup {
  id: number;
  title: string;
  items: NewsFeedCard[];
}

interface NewsFeedData {
  categories: NewsFeedCategoryGroup[];
}

interface DashboardData {
  manager?: {
    photo: string;
    name: string;
    phone?: string;
    email?: string;
  };
  contracts?: {
    items: String[];
    file: string;
  };
  credentials: {
    login: string;
    password: string;
  };
}

enum DashboardHistoryCardItemStatus {
  Waiting = "Ожидает утверждения",
  Created = "Создан",
  Processed = "Обработан",
  Arrived = "В пункте выдачи",
  Received = "Выдан",
  Denied = "Отказ",
}

interface DashboardHistoryCardItem {
  id: number;
  title: string;
  brand: string;
  productCode: string;
  code: string;
  quantity: string;
  amount: string;
  status: DashboardHistoryCardItemStatus;
  date: string;
  delay?: string;
}

type CarCard = {
  title: string;
  image?: string;
  year?: string;
};

interface CarsCatalogData {
  title: string;
  items: Array<
    CarCard & {
      id: number;
    }
  >;
}

interface OtherBrand {
  id: number;
  title: string;
  href: string;
}

type ArticulSearchCard = {
  id: number;
  title: string;
  quantity: number;
  warehouse: string;
  delivery: number;
  amount: number;
  price1: number;
  price2?: number;
};

type ArticulTableItem = {
  id: number;
  articul: string;

  items: ArticulSearchCard[];
};

type ArticulTableBlock = {
  id: number;
  heading: string;
  items: ArticulTableItem[];
};

interface ArticulSearchData {
  otherBrands: OtherBrand[];
  blocks: ArticulTableBlock[];
}

interface CartTableCardItem {
  id: number;
  title: string;
  oem: number;
  code: number;
  manufacturer: string;
  warehouse: string;
  date: number;
  pricePerUnit: number;
  amount: number;
}

interface CartData {
  items: CartTableCardItem[];
}

type TItemsTypes = "tires" | "disks" | "accumulator" | "auto_lamps" | "brushes";

export { NewsFeedCategory, DashboardHistoryCardItemStatus };

interface PromoCard {
  id: number;
  href: string;
  src: string;
}

interface PromoData {
  cards: PromoCard[];
}

interface NewsCard {
  id: number;
  title: string;
  date: string;
  text: string;
  src: string;
  href: string;
}

interface NewsData {
  items: NewsCard[];
}

interface RecentCard {
  id: number;
  title: string;
  date: string;
  btnText: string;
  iconUrl: string;
  href: string;
}

interface RecentData {
  items: RecentCard[];
}

export type {
  CarsCatalogData,
  Advantage,
  Office,
  FooterMenuItem,
  FooterMenuCategory,
  LayoutData,
  HeaderCatalogMenuItem,
  HeaderCatalogMenuCategory,
  HomeLink,
  HomeData,
  HomeCatalogItem,
  HomeSlide,
  HomeCard,
  NewsFeedCard,
  NewsFeedData,
  DashboardData,
  DashboardHistoryCardItem,
  TItemsTypes,
  OtherBrand,
  ArticulSearchData,
  ArticulSearchCard,
  ArticulTableItem,
  ArticulTableBlock,
  CartTableCardItem,
  CartData,
  PromoData,
  PromoCard,
  NewsCard,
  NewsData,
  RecentCard,
  RecentData,
};
