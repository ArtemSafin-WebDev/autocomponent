import ContactsTabs from "@/components/ContactsTabs/ContactsTabs";
import styles from "./contacts.module.scss";

export const metadata = {
  title: "Автокомпонент - Контакты",
  description: "",
};

export default async function Contacts() {
  return (
    <div className={styles.contacts}>
      <h1 className={styles.contactsHeading}>Контакты</h1>
      <ContactsTabs />
    </div>
  );
}
