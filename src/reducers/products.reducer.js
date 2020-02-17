import {
  PRODUCTS_LOAD,
  PRODUCTS_UNLOAD,
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
    case PRODUCTS_RESET: // load product list //// {products: {list:[]}}
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

    case PRODUCTS_UNLOAD: // delete product state
      return {};
    
    case PRODUCT_SELECTED: // select product //// {products: {activeProduct:{}}}
      return {
        ...state,
        activeProduct: action.payload
      };

    case PRODUCT_CHANGED: // change active product values //// {products: {activeProduct:{}}}
      // console.log(action.payload);
      
      return {
        ...state,
        activeProduct: {
          ...action.payload.activeProduct,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    
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
      
    case PRODUCT_CREATE:
      let local = localStorage.getItem('products');
      (local !== null) ? list = JSON.parse(local) : list = [];
      list.push(action.payload);
      localStorage.setItem('products',JSON.stringify(list));
      return {
        state
      };

    case PRODUCT_DELETE:
      list = state.list;
      list.splice(list.indexOf(action.payload),1);
      return {
        ...state,
        list: list,
        activeProduct: null
      }

    case PRODUCTS_LOAD:
      list = JSON.parse(localStorage.getItem('products'));
      return {
        ...state,
        list: list
      }

    case PRODUCT_CREATE_DISABLE:
      return {
        ...state,
        disabled: action.payload
      }

      default:
        return state;
    }



  
}
  