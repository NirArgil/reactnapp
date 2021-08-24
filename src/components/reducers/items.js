import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING, GET_ITEMS
} from '../actions/actionsTypes/cartTypes'


const initialState = {
    items: [],
    loading: false,

}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_ITEMS:
        return {
          ...state,
          items: payload,
          loading: false,
        };
        
      default: 
        return state;
    }
}