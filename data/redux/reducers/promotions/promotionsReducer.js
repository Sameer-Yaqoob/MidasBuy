import { AnyAction } from "redux";
import { initialState } from "./promotionsReducerData";
import {SET_PROMOTIONS } from "../../../constatants";

const promotionsReducer = (
	state = initialState,
	action = AnyAction
) => {
    
	switch (action.type) {
		case SET_PROMOTIONS:
			return {
				...state,
				promotions: action.payload,
            };
		default:
			return state;
	}
};

export default promotionsReducer;