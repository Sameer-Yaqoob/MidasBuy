
import { AnyAction } from "redux";
import { initialState } from "./authReducerData";
import {SET_USER } from "../../../constatants";

const authReducer = (
	state = initialState,
	action = AnyAction
) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload,
			};
		// case SET_ONBOARDING_EMAIL:
		// 	return {
		// 		...state,
		// 		onboarding: {
		// 			...state.onboarding,
		// 			email: action.payload,
		// 		},
		// 	};
		// case TRUTIFY_ONBOARDING_COMPLETED:
		// 	return {
		// 		...state,
		// 		onboarding: {
		// 			...state.onboarding,
		// 			isCompleted: true,
		// 		},
		// 	};
		// case ON_SET_ACCESS_TOKEN:
		// 	return {
		// 		...state,
		// 		user: {
		// 			...state.user,
		// 			jwt: action.token,
		// 		},
		// 	};
		// case SET_VERIFY_EMAIL_LOADING:
		// 	return {
		// 		...state,
		// 		verifyEmail: { ...state.verifyEmail, loading: action.payload },
		// 	};
		// case SET_VERIFY_EMAIL_STATUS:
		// 	return {
		// 		...state,
		// 		verifyEmail: { ...state.verifyEmail, status: action.payload },
		// 	};
		default:
			return state;
	}
};

export default authReducer;
