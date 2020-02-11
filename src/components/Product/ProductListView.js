import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const ProductListView = () => {
  return (
    <div className='row'>
        <ProductList />
        <ProductDetail />
    </div>
  );
};

export default ProductListView;
