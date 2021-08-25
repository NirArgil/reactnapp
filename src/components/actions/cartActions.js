import axios from 'axios';

import {
    ADD_TO_CART,
    GET_ITEMS
} from './actionsTypes/cartTypes';

export const fetchItems = () => async (dispatch) => {
    const res = await axios.get('https://www.mocky.io/v2/5e3940013200005e00ddf87e')
    dispatch({ type: GET_ITEMS, payload: res.data });
}

export const addToCart = (item, data) => (dispatch) => {
    console.log('test');
    dispatch({ type: ADD_TO_CART, payload: item, data })
}