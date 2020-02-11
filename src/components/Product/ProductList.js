import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCTS_LOAD, PRODUCTS_UNLOAD, PRODUCT_SELECTED, PRODUCTS_RESET } from '../../constants/actionTypes';
import Product from './Product';

const mapStateToProps = (state) => ({
  ...state,
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({
    type: PRODUCTS_LOAD
  }),
  onUnload: () => dispatch({ 
    type: PRODUCTS_UNLOAD 
  }),
  selectProduct: (product) => dispatch({
    type: PRODUCT_SELECTED,
    payload: product
  }),
  resetProducts: () => dispatch({
    type: PRODUCTS_RESET
  })
})

class ProductList extends Component {
  UNSAFE_componentWillMount() {
    this.props.onLoad()
  }

  reset = () => {
    this.props.resetProducts();
  }

  render() {
    return (
      <div className='col-4 text-dark'>
        <input type="button" className='btn btn-warning text-dark' value="Reset" onClick={this.reset} />
        <Product products={this.props.products} selectProduct={this.props.selectProduct} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
