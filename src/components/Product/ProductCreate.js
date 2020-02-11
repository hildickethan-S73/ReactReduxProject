import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_CHANGED, PRODUCT_CREATE } from "../../constants/actionTypes";

const mapStateToProps = (state) => {
  // check because i dont want the activeProduct from Details to pass here

  // (page refresh) if doesnt exist then create object
  if (state.products.activeProduct === undefined) {
    return ({
      activeProduct: {}
    })
  }

  // (remove data from Details) if id exists it means the state is from Details
  if (state.products.activeProduct.id !== undefined) {
    return ({
      activeProduct: {}
    })
  }

  // normal state logic to return
  return ({
    ...state,
    activeProduct: state.products.activeProduct
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeProduct: update => dispatch({
    type: PRODUCT_CHANGED,
    payload: update
  }),
  createProduct: newlist => {
    dispatch({
      type: PRODUCT_CREATE,
      payload: newlist
    })
  }
})

class ProductDetail extends Component {
  change = (event) => {
    const target = event.target;
    
    this.props.changeProduct({
      activeProduct: this.props.activeProduct,
      target: target
    });
  }

  calcID = () => {
    let local = JSON.parse(localStorage.getItem('products'));
    return local.length+1;
  }

  create = () => {
    let newproduct = {
      "name": this.props.activeProduct.name,
      "description": this.props.activeProduct.description,
      "id": this.calcID()
    };
    
    this.props.createProduct(newproduct);
  }


  render() {
    return (
      <div className="product-detail">
        <h3 className="product-detail__header">New Product</h3>
        <form>
          <div>Name: <input type="text" name="name" value={this.props.activeProduct.name} onChange={this.change}></input></div>
          <div>Description: <input type="text" name="description" value={this.props.activeProduct.description} onChange={this.change}></input></div>
          <div className="row">
            <input type="button" value="Create" className='btn btn-success text-dark' onClick={this.create} />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
