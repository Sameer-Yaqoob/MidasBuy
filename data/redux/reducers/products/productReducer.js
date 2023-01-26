import { AnyAction } from "redux";
import { initialState } from "./productReducerData";
import {SET_PRODUCTS } from "../../../constatants";

const productReducer = (
	state = initialState,
	action = AnyAction
) => {
    
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
            };
		default:
			return state;
	}
};

export default productReducer;