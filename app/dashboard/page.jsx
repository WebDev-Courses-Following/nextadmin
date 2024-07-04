/** @format */

import { Card } from '@/components/dashboard/card';
import { Transactions } from '@/components/dashboard/transactions';
import { Chart } from '@/components/dashboard/chart';
import { RightBar } from '@/components/dashboard/rightbar';

import styles from '@/components/dashboard/dashboard.module.css';

function DashboardPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />

        <Chart />
      </div>

      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}

export default DashboardPage;
