import CityWidget from "../CityWidget/CityWidget";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import CatalogWidget from "../CatalogWidget/CatalogWidget";
import { HeaderCatalogMenuCategory } from "@/types/api";
import AuthWidget from "../AuthWidget/AuthWidget";
import CartWidget from "../CartWidget/CartWidget";
import Search from "../Search/Search";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderItems from "../HeaderItems/HeaderItems";

interface HeaderProps {
  headerCatalogCategories?: HeaderCatalogMenuCategory[];
}

export default function Header({ headerCatalogCategories }: HeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topRow}>
            <CityWidget />
            <HeaderItems />
            <HeaderContacts />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomRow}>
            <Link href="/" className={styles.logoLink}>
              <Image src={logo} alt="Лого" className={styles.logo} />
            </Link>
            <CatalogWidget headerCatalogCategories={headerCatalogCategories} />
            <Search />
            <AuthWidget />
            <CartWidget />
          </div>
        </div>
      </div>
    </header>
  );
}
