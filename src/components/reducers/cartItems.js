import { ADD_TO_CART } from "../actions/actionsTypes/cartTypes";

const initialState = {
    cartItems: []
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, payload]
            };

        default:
            return state;
    }
}