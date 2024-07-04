/** @format */

import Link from 'next/link';
import Image from 'next/image';

import { Search } from '@/components/dashboard/search';

import styles from '@/components/dashboard/users/Users.module.css';
import { Pagination } from '@/components/dashboard/pagination';

function UsersPage() {
  const users = [
    {
      id: 1,
      username: 'John Doe',
      email: 'johndoe@me.com',
      img: '/noavatar.png',
      isAdmin: true,
      isActive: true,
      createdAt: '2023-04-01T00:00:00.000Z',
    },
  ];

  async function deleteUser() {
    'use server';
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...' />

        <Link href='/dashboard/users/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt=''
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type='hidden' name='id' value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={1} />
    </div>
  );
}

export default UsersPage;
