import { combineReducers } from 'redux';
import items from './items';
import cartItems from './cartItems';

export default combineReducers({ items, cartItems });