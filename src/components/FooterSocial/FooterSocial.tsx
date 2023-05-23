import styles from "./footerSocial.module.scss";
import Image from "next/image";
import vkLogo from "@/assets/images/vk.svg";

interface FooterSocialProps {
  vk?: {
    link: string;
  };
}

export default function FooterSocial({ vk }: FooterSocialProps) {
  return (
    <div className={styles.footerSocial}>
      <ul className={styles.list}>
        {vk ? (
          <li className={styles.listItem}>
            <a href={vk.link} target="_blank" className={styles.link}>
              <Image src={vkLogo} alt="VK" fill className={styles.icon} />
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
