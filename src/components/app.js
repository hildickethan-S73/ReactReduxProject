import React, { Component } from 'react';
import ProductCreate from './Product/ProductCreate';
import ProductListView from './Product/ProductListView';
import { Switch, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { PRODUCTS_RESET } from '../constants/actionTypes';

const mapStateToProps = (state) => ({
  ...state,
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  resetProducts: () => dispatch({
    type: PRODUCTS_RESET
  })
})

class App extends Component {
  reset = () => {
    this.props.resetProducts();
  }

  render() {
    return (
      <div>
          <div className='row'>
            <p><Link className='btn btn-info text-dark' to="/">List/Details</Link></p>
            <p><Link className='btn btn-success text-dark' to="/create">Create</Link></p>
            <p><input type="button" className='btn btn-warning text-dark' value="Reset" onClick={this.reset} /></p>
          </div>
        <div>
          <Switch>
              <Route exact path="/" component={ProductListView}/>
              <Route path="/create" component={ProductCreate}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
