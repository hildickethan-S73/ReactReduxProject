import React from 'react';
// import PropTypes to restrict types
import PropTypes from 'prop-types';

// Presentational component for each product in ProductList
const Product = props => {
  let productList = props.products.list;
  let active = props.products.activeProduct;
  
  // return Loading... while the product list action takes effect
  if (!productList || productList === {}) {
    return (
      <div>Loading...</div>
      );
  }
  
  return (
    <ul className="list-group product-list">
      {/* display each product in the list as a <li> element via .map */}
      {
        productList.map((product,index) => {
          let classes = 'list-group-item list-group-item-action';
          // add active class to the selected product
          if (active === product) {
            classes += ' active';
          }
          return (
            <li 
              key={index} 
              className={classes}
              // function to select the product in ProductDetail
              onClick={() => props.selectProduct(product)}
              >
              {product.name}
            </li>
          )
        })
      }
    </ul>
  );
};

// https://redux.js.org/basics/usage-with-react/
Product.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired
}

export default Product;
