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

export { NewsFeedCategory };

export type {
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
};
