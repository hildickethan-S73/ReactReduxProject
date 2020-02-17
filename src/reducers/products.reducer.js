// constants
import {
  PRODUCTS_LOAD,
  PRODUCT_SELECTED,
  PRODUCT_CHANGED,
  PRODUCT_UPDATE,
  PRODUCT_CREATE,
  PRODUCT_DELETE,
  PRODUCTS_RESET,
  PRODUCT_CREATE_DISABLE
} from '../constants/actionTypes';

export default (state = {}, action) => {
  let list;
  switch(action.type) {
    // return the selected product
    case PRODUCT_SELECTED:
      return {
        ...state,
        activeProduct: action.payload
      };

    // return the changed text box in Details or Create
    case PRODUCT_CHANGED:
      return {
        ...state,
        activeProduct: {
          ...action.payload.activeProduct,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    
    // return an updated products list with the updated product
    case PRODUCT_UPDATE:
      list = state.list;
      let filtered = list.filter((element) => element.id === action.payload.id);
      let index = list.indexOf(filtered[0]);
      list[index] = action.payload;
      
      return {
        ...state,
        list: list,
        activeProduct: action.payload
      };

    // set localstorage with the new product, since this will return to products_load after
    case PRODUCT_CREATE:
      let local = localStorage.getItem('products');
      (local !== null) ? list = JSON.parse(local) : list = [];
      list.push(action.payload);
      localStorage.setItem('products',JSON.stringify(list));
      return {
        state
      };

    // return an updated products list without the deleted product and nothing in Details
    case PRODUCT_DELETE:
      list = state.list;
      list.splice(list.indexOf(action.payload),1);
      return {
        ...state,
        list: list,
        activeProduct: null
      }

    // return the products in localStorage
    case PRODUCTS_LOAD:
      list = JSON.parse(localStorage.getItem('products'));
      return {
        ...state,
        list: list
      }

    // update the disabled property for the create button
    case PRODUCT_CREATE_DISABLE:
      return {
        ...state,
        disabled: action.payload
      }

    // return the JSON we Reset to when you click reset or load for the first time
    case PRODUCTS_RESET: 
      return {
        list: [
          {
            "id": 1,
            "name": "product1",
            "description": "description1"
          },
          {
            "id": 2,
            "name": "product2",
            "description": "description2"
          },
          {
            "id": 3,
            "name": "product3",
            "description": "description3"
          },
          {
            "id": 4,
            "name": "product4",
            "description": "description4"
          },
          {
            "id": 5,
            "name": "product5",
            "description": "description5"
          },
          {
            "id": 6,
            "name": "product6",
            "description": "description6"
          },
          {
            "id": 7,
            "name": "product7",
            "description": "description7"
          },
          {
            "id": 8,
            "name": "product8",
            "description": "description8"
          },
          {
            "id": 9,
            "name": "product9",
            "description": "description9"
          },
          {
            "id": 10,
            "name": "product10",
            "description": "description10"
          }
        ]
      }

      default:
        return state;
    }



  
}
  