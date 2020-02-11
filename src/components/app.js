import React, { Component } from 'react';
import ProductCreate from './Product/ProductCreate';
import ProductListView from './Product/ProductListView';
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
          <div className='row'>
            <p><Link className='btn btn-info' to="/">List/Details</Link></p>
            <p><Link className='btn btn-info' to="/create">Create</Link></p>
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

export default App;
