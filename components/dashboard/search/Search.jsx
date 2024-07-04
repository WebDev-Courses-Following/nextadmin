/** @format */

'use client';
import { MdSearch } from 'react-icons/md';

import styles from './Search.module.css';

function Search({ placeholder }) {
  function handleSearch() {}

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
