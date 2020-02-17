import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_CHANGED, PRODUCT_CREATE, PRODUCT_CREATE_DISABLE } from "../../constants/actionTypes";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  // check because i dont want the activeProduct from Details to pass here

  // (page refresh) if doesnt exist then create object
  if (state.products.activeProduct === undefined || state.products.activeProduct === null) {
    return ({
      activeProduct: {
        name: "defaultname",
        description: "defaultdesc"
      }
    })
  }

  // (remove data from Details) if id exists it means the state is from Details
  if (state.products.activeProduct.id !== undefined) {
    return ({
      activeProduct: {
        name: "defaultname",
        description: "defaultdesc"
      }
    })
  }

  // normal state logic to return
  return ({
    ...state,
    activeProduct: state.products.activeProduct,
    disabled: state.products.disabled
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
  },
  disableCreate: (bool) => {
    dispatch({
      type: PRODUCT_CREATE_DISABLE,
      payload: bool
    })
  }
})

class ProductCreate extends Component {
  change = (event) => {
    const target = event.target;
    
    Promise.resolve(this.props.changeProduct({
      activeProduct: this.props.activeProduct,
      target: target
    })).then( () => {
        if (target.value === "") {
          target.style.background = 'red';
          this.props.disableCreate(true);
        } else {
          target.style.background = 'white';
          if (this.props.disabled === true) {
            this.props.disableCreate(false);
          }
        }
      }
    )
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
          <div>Name: <input type="text" name="name" value={this.props.activeProduct.name || ''} onChange={this.change}></input></div>
          <div>Description: <input type="text" name="description" value={this.props.activeProduct.description || ''} onChange={this.change}></input></div>
          <div className="row">
            <Link to="/">
              <input type="button" value="Create" className='btn btn-success text-dark' onClick={this.create} disabled={this.props.disabled || false} />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);
