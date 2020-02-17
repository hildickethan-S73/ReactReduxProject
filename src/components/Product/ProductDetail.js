import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_CHANGED, PRODUCT_UPDATE, PRODUCT_DELETE } from "../../constants/actionTypes";
// the React Context button we will use for the DeleteButton classes
import { DeleteButton } from "./ProductListView";

const mapStateToProps = (state) => ({
  ...state,
  activeProduct: state.products.activeProduct
})

const mapDispatchToProps = (dispatch) => ({
  // action to change the value of the text boxes
  changeProduct: update => dispatch({
    type: PRODUCT_CHANGED,
    payload: update
  }),
  // action to update the product
  updateProduct: newproduct => dispatch({
    type: PRODUCT_UPDATE,
    payload: newproduct
  }),
  // action to delete the product
  deleteProduct: (product) => dispatch({
    type: PRODUCT_DELETE,
    payload: product
  })
})

class ProductDetail extends Component {
  // onchange function to change the value of text boxes
  change = (event) => {
    const target = event.target;
    this.props.changeProduct({
      activeProduct: this.props.activeProduct,
      target: target
    });
  }

  // onclick function to update the product
  update = () => {
    let newproduct = this.props.activeProduct;
    this.props.updateProduct(newproduct)
  }

  // onclick function to delete the product
  delete = () => {
    let product = this.props.activeProduct;
    this.props.deleteProduct(product);
  }

  render() {
    // if theres no product selected it will show a different text 
    if (!this.props.activeProduct) {
      return (
        <div className="col-8 product-detail">
          <h3 className='text-light text-center'>Details</h3>
          <h3 className="product-detail__header">Select a product to get started!</h3>
        </div>
      );
    }

    // if selected return Details
    return (
      <div className="col-8 product-detail">
        <h3 className='text-light text-center'>Details</h3>
        <h3 className="product-detail__header">{this.props.activeProduct.name}</h3>
        {/* id is readOnly */}
        <div>ID: <input type="text" name="id"  value={this.props.activeProduct.id} readOnly></input></div>
        {/* name  */}
        <div>Name: <input type="text" name="name"  value={this.props.activeProduct.name} onChange={this.change}></input></div>
        {/* description */}
        <div>Description: <input type="text" name="description" value={this.props.activeProduct.description} onChange={this.change}></input></div>
        {/* buttons */}
        <div className="row">
          {/* update button */}
          <input type="button" value="Update" className='btn btn-primary text-dark' onClick={this.update} />
          {/* delete button, here we use the React Context to pass the class string */}
          <DeleteButton.Consumer>
            { (value) => ( <input type="button" value="Delete" className={value} onClick={this.delete} /> )}
          </DeleteButton.Consumer>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
