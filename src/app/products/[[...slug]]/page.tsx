import React from 'react';

// our slug is an array of strings because we're accepting an array number of segments [...slug]
interface ProductProps {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

export default function ProductPage({ params, searchParams }: ProductProps) {
  return (
    <div>
      ProductPage {params.slug} {searchParams.sortOrder}
    </div>
  );
}

// Note: to make our segments optional we can use this syntax [[...slug]] instead of this [...slug], because if we don't mark it as optional and visit the 'products' page, we get a 404 error.
