/** @format */

import Image from 'next/image';

import styles from './Transactions.module.css';

const transactions = [
  {
    id: 'f6d7f638-6cb9-54eb-bedf-40da7c43d3fb',
    name: 'Jeffrey Poole',
    status: 'pending',
    date: '10.02.2024',
    amount: '4.250€',
  },
  {
    id: '3da1d783-5f52-56d8-a3f4-679c7dedc2b9',
    name: 'James May',
    status: 'done',
    date: '18.06.2023',
    amount: '1.980€',
  },
  {
    id: '266a6179-79a7-5106-aa84-3b141106a718',
    name: 'Carrie Morrison',
    status: 'cancelled',
    date: '04.04.2024',
    amount: '3.040€',
  },
  {
    id: '0e3099c9-4b9c-55df-92f4-fd534c664b1e',
    name: 'Caleb Lindsey',
    status: 'pending',
    date: '25.05.2024',
    amount: '865€',
  },
];

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src='/noavatar.png'
                    alt=''
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {transaction.name}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles[transaction.status]}`}>
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
