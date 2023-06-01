import { DashboardData } from "@/types/api";
import styles from "./userInfo.module.scss";
import Image from "next/image";
import Link from "next/link";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import downloadIcon from "@/assets/images/download.svg";

export default function UserInfo({
  credentials,
  manager,
  contracts,
}: Partial<DashboardData>) {
  return (
    <div className={styles.userInfo}>
      <div className={styles.row}>
        {manager && (
          <div className={styles.manager}>
            <div className={styles.managerRow}>
              {manager?.photo && (
                <div className={styles.managerPhotoContainer}>
                  <Image
                    src={manager?.photo}
                    alt=""
                    className={styles.managerPhoto}
                    fill
                  />
                </div>
              )}
              <div className={styles.managerContent}>
                <h2 className={styles.managerHeading}>
                  Ваш персональный менеджер
                </h2>
                <div className={styles.managerName}>{manager?.name}</div>
                {manager.phone && (
                  <a
                    className={styles.managerPhone}
                    href={`tel:${manager.phone.replace(/\D+/g, "")}`}
                  >
                    {manager.phone}
                  </a>
                )}
                {manager.email && (
                  <a
                    href={`mailto:${manager.email}`}
                    className={styles.managerEmail}
                  >
                    {manager.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        {contracts && (
          <div className={styles.contracts}>
            <h2 className={styles.contractsTitle}>Договоры</h2>
            <ul className={styles.contractsItems}>
              {contracts.items.map((item, itemIndex) => (
                <li className={styles.contractsItem} key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={contracts.file}
              className={styles.contractsDownload}
              download
            >
              <EmbedSVG src={downloadIcon.src} />
              Скачать договор оферты
            </a>
          </div>
        )}
        {credentials && (
          <div className={styles.credentials}>
            <h2 className={styles.credentialsTitle}>Ваши данные для входа</h2>
            <ul className={styles.credentialsItems}>
              <li className={styles.credentialsItem}>
                <span className={styles.key}>Логин:</span>
                <span className={styles.value}>{credentials.login}</span>
              </li>
              <li className={styles.credentialsItem}>
                <span className={styles.key}>Пароль:</span>
                <span className={styles.value}>{credentials.password}</span>
              </li>
            </ul>
            <Link className={styles.changePassword} href="/">
              Сменить пароль
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
