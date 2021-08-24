import axios from 'axios';

import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,

    GET_SEARCH
} from './actionsTypes/cartTypes';

export const fetchItems = () => async (dispatch) => {
    const res = await axios.get('https://www.mocky.io/v2/5e3940013200005e00ddf87e')
    dispatch({ type: GET_ITEMS, payload: res.data});
}
//remove item action
export const searchItem = () => {
    return {
        type: GET_SEARCH,
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART, 
        payload: id, Type, Name, Color, Size
    }
}

//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}