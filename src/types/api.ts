import { FiltersCategory } from "@/components/GoodsFilters/GoodsFilters";

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
  href?: string;
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

interface NameSearchItem {
  id: number;
  title: string;
  articul: string;
  brand: string;
  inStock: boolean;
  quantity: number;
  price1: string;
  price2: string;
  warehouse: string;
  amount: string;
  category: string;
}

interface NameSearchData {
  items: NameSearchItem[];
}

interface CompanySidebarBlock {
  id: number | string;
  title?: string;
  links: Array<{
    id: number | string;
    title: string;
    href: string;
  }>;
}

interface CompanySidebarData {
  items: CompanySidebarBlock[];
}

interface Certificate {
  id: number;
  src: string;
  wide?: boolean;
}

interface CertificatesData {
  items: Certificate[];
}

interface CatalogPartsData {
  categories: Array<{
    id: string | number;
    title: string;
    src: string;
    href: string;
  }>;
}

interface CatalogPartsCategory {
  id: string | number;
  title: string;
  items?: CatalogPartsCategory[];
}

interface CatalogPartsCategoriesData {
  items: CatalogPartsCategory[];
}

interface PartInCategory {
  id: string | number;
  title: string;
  href: "/";
  brand: string;
  articul: string;
  original?: boolean;
}

interface PartsInCategoryData {
  items: PartInCategory[];
}

interface GoodsData {
  items: GoodsItem[];
}

interface GoodsItem {
  id: number | string;
  title: string;
  oem: string;
  code: number | string;
  manufacturer: string;
}

interface FiltersCardItem {
  id: string | number;
  title: string;
  oem?: string;
  code?: string;
  brand?: string;
  date?: string;
  inStock?: boolean;
  amount: string;
  price: number;
  margin: number;
  quantity?: number;
  categories?: FiltersCategory[];
}

interface FetchGoodsData {
  items: FiltersCardItem[];
  total: number;
}

interface FetchGoodsParams {
  priceFrom?: number;
  priceTo?: number;
  marginFrom?: number;
  marginTo?: number;
  categories?: FiltersCategory[];
  brands?: string[];
  page?: number;
  showPerPage?: number;
  sort?: "name" | "oem" | "brand" | "price" | "";
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
  NameSearchItem,
  NameSearchData,
  CompanySidebarBlock,
  CompanySidebarData,
  Certificate,
  CertificatesData,
  CatalogPartsData,
  CatalogPartsCategoriesData,
  CatalogPartsCategory,
  PartsInCategoryData,
  PartInCategory,
  FiltersCardItem,
  FetchGoodsData,
  FetchGoodsParams,
};
