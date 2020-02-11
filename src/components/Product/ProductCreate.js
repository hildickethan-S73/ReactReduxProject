import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_CHANGED, PRODUCT_CREATE } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state,
  activeProduct: {}
})

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

  create = () => {
    let newproduct = {
      "name": "productCREATE",
      "description": "descCREATE",
      "id": 11
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
            <input type="button" value="Create" className='btn btn-success text-dark' onClick={this.update} />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
