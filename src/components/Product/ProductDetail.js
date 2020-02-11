import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_CHANGED, PRODUCT_UPDATE, PRODUCT_DELETE } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state,
  activeProduct: state.products.activeProduct
})

const mapDispatchToProps = (dispatch) => ({
  changeProduct: update => dispatch({
    type: PRODUCT_CHANGED,
    payload: update
  }),
  updateProduct: newproduct => dispatch({
    type: PRODUCT_UPDATE,
    payload: newproduct
  }),
  deleteProduct: (product) => dispatch({
    type: PRODUCT_DELETE,
    payload: product
  })
})

class ProductDetail extends Component {
  change = (event) => {
    const target = event.target;
    this.props.changeProduct({
      activeProduct: this.props.activeProduct,
      target: target
    });
  }

  update = () => {
    let newproduct = this.props.activeProduct;
    this.props.updateProduct(newproduct)
  }

  delete = () => {
    let product = this.props.activeProduct;

    this.props.deleteProduct(product);
  }

  render() {
    if (!this.props.activeProduct) {
      return (
        <div className="col-8 product-detail">
          <h3 className='text-light text-center'>Details</h3>
          <h3 className="product-detail__header">Select a product to get started!</h3>
        </div>
      );
    }

    return (
      <div className="col-8 product-detail">
        <h3 className='text-light text-center'>Details</h3>
        <h3 className="product-detail__header">{this.props.activeProduct.name}</h3>
        <div>ID: <input type="text" name="id"  value={this.props.activeProduct.id} readOnly></input></div>
        <div>Name: <input type="text" name="name"  value={this.props.activeProduct.name} onChange={this.change}></input></div>
        <div>Description: <input type="text" name="description" value={this.props.activeProduct.description} onChange={this.change}></input></div>
        <div className="row">
          <input type="button" value="Update" className='btn btn-primary text-dark' onClick={this.update} />
          <input type="button" value="Delete" className='btn btn-danger text-dark' onClick={this.delete} /> 
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
