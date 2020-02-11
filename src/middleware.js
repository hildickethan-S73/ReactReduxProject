import { PRODUCTS_RESET } from "./constants/actionTypes";

const middleware = store => next => action => {
    // if no localstorage (first visit)
    // create localstorage and then RESET the data to fill it
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products',JSON.stringify([]));
        store.dispatch({type: PRODUCTS_RESET});
    }
    
    // do action
    next(action);

    // set localstorage after any action
    if (store.getState().products.list) {
        localStorage.setItem('products',JSON.stringify(store.getState().products.list));
    }
}

export default middleware;