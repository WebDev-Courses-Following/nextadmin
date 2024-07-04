/** @format */
import { SideBar } from '@/components/dashboard/sidebar';
import { NavBar } from '@/components/dashboard/navbar';

import styles from '@/components/dashboard/dashboard.module.css';

function DashboardLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
