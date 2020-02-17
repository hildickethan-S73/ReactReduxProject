import React from 'react';
import PropTypes from 'prop-types';

const Product = props => {
  let productList = props.products.list;
  let active = props.products.activeProduct;
  
  if (!productList || productList === {}) {
    return (
      <div>Loading...</div>
      );
  }
  
  return (
    <ul className="list-group product-list">
      {
        productList.map((product,index) => {
          let classes = 'list-group-item list-group-item-action';
          if (active === product) {
            classes += ' active';
          }
          return (
            <li 
              key={index} 
              className={classes}
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
