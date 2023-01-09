
import { AnyAction } from "redux";
import { initialState } from "./faqReducerData";
import {SET_QUESTION } from "../../../constatants";

const faqReducer = (
	state = initialState,
	action = AnyAction
) => {
    
	switch (action.type) {
		case SET_QUESTION:
			return {
				...state,
				question: action.payload,
			};
		default:
			return state;
	}
};

export default faqReducer;
