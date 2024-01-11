'use client';
import React from 'react';

export default function AddToCart() {
  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => console.log('Added to cart')}
      >
        Add to Cart
      </button>
    </div>
  );
}
