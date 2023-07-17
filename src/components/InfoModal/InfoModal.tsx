import styles from "./infoModal.module.scss";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { AnimatePresence, motion } from "framer-motion";
import cross from "@/assets/images/cross.svg";
import { createPortal } from "react-dom";
import Image from "next/image";
import brandsItems from "./brandItems";

interface ApplicableBrand {
  id: string;
  title: string;
  items: ApplicableModel[];
}

interface ApplicableModel {
  id: string;
  brand: string;
  title: string;
  year: number;
  engine: string;
  power: string;
  volume: string;
  body: string;
}

interface InfoModalProps {
  closeHandler: () => void;
  open: boolean;
}

export default function InfoModal({ closeHandler, open }: InfoModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => closeHandler(), []);
  useOnClickOutside(innerModalRef, outsideClickHandler);

  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.modalOpen);
    } else {
      document.body.classList.remove(styles.modalOpen);
    }
    return () => {
      document.body.classList.remove(styles.modalOpen);
    };
  }, [open]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeBrand, setActiveBrand] = useState<ApplicableBrand>();

  useEffect(() => {
    if (!activeBrand && brandsItems?.length) {
      setActiveBrand(brandsItems[0]);
    }
  }, [brandsItems]);

  const SHOW_PER_PAGE = 24;
  const [page, setPage] = useState(1);

  const pagesCount = Math.ceil(brandsItems.length / SHOW_PER_PAGE);

  const paginatedBrandsItems = useMemo(() => {
    const start = SHOW_PER_PAGE * (page - 1);
    const end = start + SHOW_PER_PAGE;
    return brandsItems.slice(start, end);
  }, [brandsItems, page]);

  return (
    <>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className={styles.modal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={ref}
              >
                <div className={styles.modalInner} ref={innerModalRef}>
                  <button
                    className={styles.modalCloseBtn}
                    onClick={() => closeHandler()}
                  >
                    <EmbedSVG src={cross.src} />
                  </button>
                  <h2 className={styles.heading}>Информация о запчасти</h2>
                  <div className={styles.row}>
                    <div className={styles.imageWrapper}>
                      <div className={styles.imageWrapperInner}>
                        <Image
                          src="/applicable.webp"
                          alt=""
                          fill
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.specs}>
                      <h2 className={styles.specsHeading}>
                        Фильтр FILTRON OP526
                      </h2>
                      <div className={styles.specsTable}>
                        <table>
                          <tbody>
                            <tr>
                              <th>Высота, мм</th>
                              <td>120</td>
                            </tr>
                            <tr>
                              <th>Размер резьбы</th>
                              <td>UNF 3/4"-16</td>
                            </tr>
                            <tr>
                              <th>Наружный диаметр, мм</th>
                              <td>120</td>
                            </tr>
                            <tr>
                              <th>Тип клапана</th>
                              <td>Клапан ограничения давления</td>
                            </tr>
                            <tr>
                              <th>Исполнение фильтра</th>
                              <td>Накручиваемый фильтр</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className={styles.applicable}>
                      <h2 className={styles.applicableHeading}>Применимость</h2>
                      <ul className={styles.applicableList}>
                        <AnimatePresence mode="popLayout">
                          {paginatedBrandsItems.map((item) => (
                            <motion.li
                              className={styles.applicableListItem}
                              key={item.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <button
                                className={`${styles.applicableBtn} ${
                                  activeBrand && activeBrand.id === item.id
                                    ? styles.active
                                    : ""
                                }`}
                                onClick={() => setActiveBrand(item)}
                              >
                                {item.title}
                              </button>
                            </motion.li>
                          ))}
                        </AnimatePresence>
                      </ul>
                      <motion.div className={styles.pagination} layout>
                        {brandsItems.length > SHOW_PER_PAGE
                          ? Array.from(Array(pagesCount), (_, i) => {
                              return (
                                <button
                                  className={`${styles.paginationBtn} ${
                                    i + 1 === page ? styles.current : ""
                                  }`}
                                  onClick={() => setPage(i + 1)}
                                >
                                  {i + 1}
                                </button>
                              );
                            })
                          : null}
                      </motion.div>
                    </div>
                  </div>
                  <div className={styles.table}>
                    <div className={styles.tableHeader}>
                      <div className={styles.tableHeaderCell}>Марка</div>
                      <div className={styles.tableHeaderCell}>Модель</div>
                      <div className={styles.tableHeaderCell}>Год</div>
                      <div className={styles.tableHeaderCell}>Двигатель</div>
                      <div className={styles.tableHeaderCell}>Мощность</div>
                      <div className={styles.tableHeaderCell}>Объем</div>
                      <div className={styles.tableHeaderCell}>Кузов</div>
                    </div>
                    <div className={styles.tableBody}>
                      <div className={styles.scrollWrapper}>
                        {activeBrand &&
                          activeBrand.items.map((item) => (
                            <div className={styles.tableRow} key={item.id}>
                              <div className={styles.tableCell}>
                                {item.brand}
                              </div>
                              <div className={styles.tableCell}>
                                {item.title}
                              </div>
                              <div className={styles.tableCell}>
                                {item.year}
                              </div>
                              <div className={styles.tableCell}>
                                {item.engine}
                              </div>
                              <div className={styles.tableCell}>
                                {item.power}
                              </div>
                              <div className={styles.tableCell}>
                                {item.volume}
                              </div>
                              <div className={styles.tableCell}>
                                {item.body}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export type { ApplicableBrand, ApplicableModel };
