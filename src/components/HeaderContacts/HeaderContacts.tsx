import styles from "./headerContacts.module.scss";

export default function HeaderContacts() {
  return (
    <div className={styles.headerContacts}>
      <a href="tel:88127187557" className={styles.phone}>
        8 (812) 718-75-57
      </a>
      <div className={styles.schedule}>пн-пт с 9:00 до 17:30</div>
    </div>
  );
}
