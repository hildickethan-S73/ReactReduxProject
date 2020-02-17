import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCTS_LOAD, PRODUCT_SELECTED } from '../../constants/actionTypes';
import Product from './Product';

const mapStateToProps = (state) => ({
  ...state,
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  // action that loads the products from localStorage
  onLoad: () => dispatch({
    type: PRODUCTS_LOAD
  }),
  // action that sends the selected product to the Details
  selectProduct: (product) => dispatch({
    type: PRODUCT_SELECTED,
    payload: product
  })
})

class ProductList extends Component {
  // when the page is loaded it will dispatch the loading actin
  UNSAFE_componentWillMount() {
    this.props.onLoad()
  }
  render() {
    return (
      <div className='col-4 text-dark'>
        <h3 className='text-light text-center'>List</h3>
        {/* Presentational component for each product in the List
            we pass the products state and selectProduct function */}
        <Product products={this.props.products} selectProduct={this.props.selectProduct} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
