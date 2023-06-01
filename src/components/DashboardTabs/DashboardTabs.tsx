"use client";

import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./dashboardTabs.module.scss";
import history from "@/assets/images/history.svg";
import margin from "@/assets/images/margin.svg";
import returns from "@/assets/images/returns.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DashboardHistory from "../DashboardHistory/DashboardHistory";
import DashboardPrices from "../DashboardPrices/DashboardPrices";
import DashboardReturns from "../DashboardReturns/DashboardReturns";

enum Tabs {
  History = "HISTORY",
  Margin = "MARGIN",
  Returns = "RETURNS",
}

export default function DashboardTabs() {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.History);

  return (
    <div className={styles.dashboardTabs}>
      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={() => setSelectedTab(Tabs.History)}
        >
          {selectedTab === Tabs.History ? (
            <motion.span
              className={styles.underline}
              layoutId="underline"
            ></motion.span>
          ) : null}
          <span className={styles.navBtnContent}>
            <EmbedSVG src={history.src} />
            История заказов
          </span>
        </button>
        <button
          className={styles.navBtn}
          onClick={() => setSelectedTab(Tabs.Margin)}
        >
          {selectedTab === Tabs.Margin ? (
            <motion.span
              className={styles.underline}
              layoutId="underline"
            ></motion.span>
          ) : null}
          <span className={styles.navBtnContent}>
            <EmbedSVG src={margin.src} />
            Наценки для клиента
          </span>
        </button>
        <button
          className={styles.navBtn}
          onClick={() => setSelectedTab(Tabs.Returns)}
        >
          {selectedTab === Tabs.Returns ? (
            <motion.span
              className={styles.underline}
              layoutId="underline"
            ></motion.span>
          ) : null}
          <span className={styles.navBtnContent}>
            <EmbedSVG src={returns.src} />
            Возвраты
          </span>
        </button>
      </div>
      <motion.div className={styles.tabsContainer}>
        <AnimatePresence initial={false} mode="wait">
          {selectedTab === Tabs.History && (
            <motion.div
              key="history"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.tabItem}
            >
              <DashboardHistory />
            </motion.div>
          )}
          {selectedTab === Tabs.Margin && (
            <motion.div
              key="margin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.tabItem}
            >
              <DashboardPrices />
            </motion.div>
          )}
          {selectedTab === Tabs.Returns && (
            <motion.div
              key="returns"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.tabItem}
            >
              <DashboardReturns />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
