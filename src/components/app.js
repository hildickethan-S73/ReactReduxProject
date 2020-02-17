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
  // reset products action
  resetProducts: () => dispatch({
    type: PRODUCTS_RESET
  })
})

class App extends Component {
  // reset products function
  reset = () => {
    this.props.resetProducts();
  }

  render() {
    return (
      <div>
        {/* top row */}
        <div className='row'>
          {/* React-Router link to '/' */}
          <p><Link className='btn btn-info text-dark' to="/">List/Details</Link></p>
          {/* React Router link to '/create' */}
          <p><Link className='btn btn-success text-dark' to="/create">Create</Link></p>
          {/* Reset button */}
          <p><input type="button" className='btn btn-warning text-dark' value="Reset" onClick={this.reset} /></p>
        </div>

        {/* bottom row (below the buttons) */}
        <div>
          {/* React Router Switch that changes the context based on the route */}
          <Switch>
              {/* React Router Route that will load the ProductListView Component when the route is '/' */}
              <Route exact path="/" component={ProductListView}/>
              {/* React Router Route that will load the ProductCreate Component when the route is '/create' */}
              <Route path="/create" component={ProductCreate}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
