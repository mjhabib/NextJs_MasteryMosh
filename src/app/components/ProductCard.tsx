import React from 'react';
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';

export default function ProductCard() {
  return (
    // <div className={styles.card}>
    // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
    <div>
      <AddToCart />
    </div>
  );
}
