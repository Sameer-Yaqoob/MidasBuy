import { AnyAction } from "redux";
import { initialState } from "./gameReducerData";
import {SET_GAMES } from "../../../constatants";

const gamesReducer = (
	state = initialState,
	action = AnyAction
) => {
    
	switch (action.type) {
		case SET_GAMES:
			return {
				...state,
				games: action.payload,
            };
		default:
			return state;
	}
};

export default gamesReducer;