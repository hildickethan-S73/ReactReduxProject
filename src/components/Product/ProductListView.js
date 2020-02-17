import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const ProductListView = () => {
  return (
    <DeleteButton.Provider value="btn btn-danger text-dark">
      <div className='row'>
          <ProductList />
          <ProductDetail />
      </div>
    </DeleteButton.Provider>
  );
};

export default ProductListView;

export const DeleteButton = React.createContext();
