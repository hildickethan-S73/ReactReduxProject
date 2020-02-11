import React from 'react';

const Product = props => {
  let productList = props.products.list;
  let active = props.products.activeProduct;
  // console.log(productList);
  
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

export default Product;
