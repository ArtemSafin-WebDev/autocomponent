import Advantages from "@/components/Advantages/Advantages";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-white.svg";
import { Advantage, FooterMenuCategory, Office } from "@/types/api";
import FooterOffices from "../FooterOffices/FooterOffices";
import FooterSocial from "../FooterSocial/FooterSocial";
import FooterNav from "../FooterNav/FooterNav";

interface FooterProps {
  offices?: Office[];
  advantages?: Advantage[];
  footerMenuCategories?: FooterMenuCategory[];
}
export default function Footer({
  offices,
  advantages,
  footerMenuCategories,
}: FooterProps) {
  return (
    <footer className={styles.pageFooter}>
      <div className="container">
        <Advantages advantages={advantages} />
        <div className={styles.row}>
          <div className={styles.infoCol}>
            <Link href="/" className={styles.homeLink}>
              <Image src={logo} alt="Лого" className={styles.logo} priority />
            </Link>
            <FooterOffices offices={offices} />
            <FooterSocial
              vk={{
                link: "https://vk.com",
              }}
            />
          </div>
          <FooterNav footerMenuCategories={footerMenuCategories} />
        </div>
        <div className={styles.copyright}>© ООО «Автосервис»</div>
      </div>
    </footer>
  );
}
