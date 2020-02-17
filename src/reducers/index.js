import { combineReducers } from 'redux';
import products from './products.reducer';

// combine reducers into one
// would be relevant if we had multiple reducers
const rootReducer = combineReducers({
  products
});

export default rootReducer;
