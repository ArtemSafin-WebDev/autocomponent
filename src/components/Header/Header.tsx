"use client";

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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
  headerCatalogCategories?: HeaderCatalogMenuCategory[];
}

export default function Header({ headerCatalogCategories }: HeaderProps) {
  const header = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector) {
        const elements = self.selector(".fixed-part") as HTMLElement[];

        elements.forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            start: "top top",
            end: 99999999,
            pin: true,
            pinSpacing: false,
          });
        });
      }
    }, header);
    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.pageHeader} ref={header}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topRow}>
            <CityWidget />
            <HeaderItems />
            <HeaderContacts />
          </div>
        </div>
      </div>

      <div className={`${styles.bottom} fixed-part`}>
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
