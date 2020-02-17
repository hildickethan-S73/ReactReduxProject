import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

// Presentational Component for the List/Details
const ProductListView = () => {
  return (
    // we wrap everything with a React Context declared below
    // it is simply a string that we will use to pass the classes to the DELETE button
    <DeleteButton.Provider value="btn btn-danger text-dark">
      <div className='row'>
          <ProductList />
          <ProductDetail />
      </div>
    </DeleteButton.Provider>
  );
};
export default ProductListView;

// the React Context mentioned above, exported to be used in the necessary component (ProductDetail)
export const DeleteButton = React.createContext();
