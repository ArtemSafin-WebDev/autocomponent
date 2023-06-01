import { DashboardData } from "@/types/api";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./dashboard.module.scss";
import DashboardTabs from "../DashboardTabs/DashboardTabs";

interface DashboardProps extends DashboardData {}

export default function Dashboard({
  manager,
  credentials,
  contracts,
}: DashboardProps) {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.heading}>Личный кабинет</h1>
      <UserInfo
        manager={manager}
        credentials={credentials}
        contracts={contracts}
      />
      <DashboardTabs />
    </div>
  );
}
