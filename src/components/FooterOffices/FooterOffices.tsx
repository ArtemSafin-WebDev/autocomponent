import { Office } from "@/types/api";
import styles from "./footerOffices.module.scss";

interface OfficesProps {
  offices?: Office[];
}

export default function FooterOffices({ offices }: OfficesProps) {
  if (!(offices && offices.length)) return null;
  return (
    <div className={styles.offices}>
      <ul className={styles.list}>
        {offices.map((office) => (
          <li className={styles.listItem} key={office.id}>
            <div className={styles.card}>
              <a
                href={`tel:${office.phone.replace(/\D+/g, "")}`}
                className={styles.phone}
              >
                {office.phone}
              </a>
              <div
                className={styles.address}
                dangerouslySetInnerHTML={{
                  __html: office.address,
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
