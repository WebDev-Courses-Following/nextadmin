/** @format */

import { MdSupervisedUserCircle } from 'react-icons/md';

import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.256</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
