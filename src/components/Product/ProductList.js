import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCTS_LOAD, PRODUCTS_UNLOAD, PRODUCT_SELECTED } from '../../constants/actionTypes';
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
  })
})

class ProductList extends Component {
  UNSAFE_componentWillMount() {
    this.props.onLoad()
  }
  render() {
    return (
      <div className='col-4 text-dark'>
        <h3 className='text-light text-center'>List</h3>
        <Product products={this.props.products} selectProduct={this.props.selectProduct} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
