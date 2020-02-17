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
  // action to change the value of the text boxes
  changeProduct: update => dispatch({
    type: PRODUCT_CHANGED,
    payload: update
  }),
  // action to create a new product
  createProduct: newlist => {
    dispatch({
      type: PRODUCT_CREATE,
      payload: newlist
    })
  },
  // action to disable the create button
  disableCreate: (bool) => {
    dispatch({
      type: PRODUCT_CREATE_DISABLE,
      payload: bool
    })
  }
})

class ProductCreate extends Component {
  // onchange function to change the value of text boxes
  change = (event) => {
    const target = event.target;
    
    // promise
    Promise.resolve(
      // change the text value
      this.props.changeProduct({
        activeProduct: this.props.activeProduct,
        target: target
      })).then( () => {
        // then if the value is empty disable the create button and change bg-color to red
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

  // function to get the id of the next product
  calcID = () => {
    let local = JSON.parse(localStorage.getItem('products'));
    return local.length+1;
  }

  // function to create the product
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
        {/* form */}
        <form>
          {/* name */}
          <div>Name: <input type="text" name="name" value={this.props.activeProduct.name || ''} onChange={this.change}></input></div>
          {/* description */}
          <div>Description: <input type="text" name="description" value={this.props.activeProduct.description || ''} onChange={this.change}></input></div>
          <div className="row">
            {/* link to return to List/Details when you create */}
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
