"use client";

import { useState } from "react";
import styles from "./contactsTabs.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ContactsMap from "../ContactsMap/ContactsMap";
import Download from "@/icons/Download";

type Modes = "central" | "shops" | "arch";

export default function ContactsTabs() {
  const [mode, setMode] = useState<Modes>("central");
  return (
    <div className={styles.contactsTabs}>
      <div className={styles.contactsTabsNav}>
        <button
          className={styles.contactsTabsNavBtn}
          onClick={() => setMode("central")}
        >
          {mode === "central" ? (
            <motion.span
              className={styles.contactsTabsNavBtnBg}
              layoutId="underline"
            ></motion.span>
          ) : null}
          Центральный офис
        </button>
        <button
          className={styles.contactsTabsNavBtn}
          onClick={() => setMode("shops")}
        >
          {mode === "shops" ? (
            <motion.span
              className={styles.contactsTabsNavBtnBg}
              layoutId="underline"
            ></motion.span>
          ) : null}
          Наши магазины
        </button>
        <button
          className={styles.contactsTabsNavBtn}
          onClick={() => setMode("arch")}
        >
          {mode === "arch" ? (
            <motion.span
              className={styles.contactsTabsNavBtnBg}
              layoutId="underline"
            ></motion.span>
          ) : null}
          Филиал в Архангельске
        </button>
      </div>
      <motion.div className={styles.contactsTabsItems}>
        <AnimatePresence initial={false} mode="wait">
          {mode === "central" && (
            <motion.div
              key="central"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.contactsTabsItem}
            >
              <div className={styles.central}>
                <div className={styles.centralRow}>
                  <div className={styles.centralLeftCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Адрес</h4>
                      <div className={styles.contactsItemText}>
                        г. Санкт-Петербург, п. Шушары, Московское шоссе, 177
                        лит. А
                      </div>
                    </div>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Время работы</h4>
                      <div className={styles.contactsItemText}>
                        с 9.00 до 17.30
                      </div>
                      <div className={styles.contactsItemText}>
                        Отгрузка с 10.00 до 17.30
                      </div>
                    </div>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Координаты</h4>
                      <div className={styles.contactsItemText}>
                        59.809754, 30.294269
                      </div>
                    </div>
                  </div>
                  <div className={styles.centralRightCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Телефоны</h4>
                      <div className={styles.contactsItemText}>
                        Отдел продаж: 8 (812) 718-75-57, 704-19-96, 704-19-97
                      </div>
                      <div className={styles.contactsItemText}>
                        Отдел снабжения: 8 (812) 704-19-94, 704-19-95
                      </div>
                      <div className={styles.contactsItemText}>
                        Секретарь: 8 (812) 704-52-95
                      </div>
                    </div>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>E-mail</h4>
                      <a href="#" className={styles.contactsItemLink}>
                        info@td-auto.ru
                      </a>
                    </div>
                  </div>
                </div>
                <ContactsMap center={[59.809754, 30.294269]} zoom={14} />
                <a href="#" className={styles.downloadBtn}>
                  <Download />
                  СОУТ (специализированная оценка условий труда)
                </a>
              </div>
            </motion.div>
          )}
          {mode === "shops" && (
            <motion.div
              key="shops"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.contactsTabsItem}
            >
              <div className={styles.shops}>
                <div className={styles.shopsRow}>
                  <div className={styles.shopsCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Адрес</h4>
                      <div className={styles.contactsItemText}>
                        г. Санкт-Петербург, ул. Фучика, д.17
                      </div>
                    </div>
                  </div>
                  <div className={styles.shopsCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>
                        Магазин-павильон 141
                      </h4>
                      <div className={styles.contactsItemText}>
                        Телефон: +79213192978 Ромащенко Сергей
                      </div>
                      <div className={styles.contactsItemText}>
                        Время работы: с 9.30 до 18.00 понедельник - выходной
                      </div>
                    </div>
                  </div>
                  <div className={styles.shopsCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>
                        Магазин-павильон 291
                      </h4>
                      <div className={styles.contactsItemText}>
                        Телефон: +79119186826 Волков Александр
                      </div>
                      <div className={styles.contactsItemText}>
                        Время работы: с 9.30 до 18.00 воскресенье - выходной
                      </div>
                    </div>
                  </div>
                </div>
                <ContactsMap center={[59.809754, 30.294269]} zoom={14} />
                <a href="#" className={styles.downloadBtn}>
                  <Download />
                  СОУТ (специализированная оценка условий труда)
                </a>
              </div>
            </motion.div>
          )}
          {mode === "arch" && (
            <motion.div
              key="arch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.contactsTabsItem}
            >
              <div className={styles.central}>
                <div className={styles.innerHeadingBlock}>
                  <h3 className={styles.innerHeading}>
                    ООО «Компания Авто-Регион 29»
                  </h3>
                  <div className={styles.innerLabel}>
                    Только оптовая торговля
                  </div>
                </div>

                <div className={styles.centralRow}>
                  <div className={styles.centralLeftCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Адрес</h4>
                      <div className={styles.contactsItemText}>
                        г. Архангельск, Талажское шоссе, д.1 корп.1 стр.1
                      </div>
                    </div>

                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Координаты</h4>
                      <div className={styles.contactsItemText}>
                        64.567368, 40.553088
                      </div>
                    </div>
                  </div>
                  <div className={styles.centralRightCol}>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>Телефоны</h4>
                      <div className={styles.contactsItemText}>
                        тел./факс: 8 (8182) 24-34-66, 8 (8182) 27-66-58
                      </div>
                    </div>
                    <div className={styles.contactsItem}>
                      <h4 className={styles.contactsItemTitle}>E-mail</h4>
                      <a
                        href="mailto:info@td-auto.ru"
                        className={styles.contactsItemLink}
                      >
                        info@td-auto.ru
                      </a>
                    </div>
                  </div>
                </div>
                <ContactsMap center={[64.567368, 40.553088]} zoom={14} />
                <a href="#" className={styles.downloadBtn}>
                  <Download />
                  СОУТ (специализированная оценка условий труда)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
