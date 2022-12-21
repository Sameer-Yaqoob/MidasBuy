
import { toast } from "react-toastify";
import { all, takeLatest, put, call, select } from "redux-saga/effects";
import { setUserAction } from "../actions";
import { AuthModel } from "../../models";
import {LOGIN_REQUEST, SIGNUP_REQUEST,GET_USER, LOG_OUT_REQUEST, GET_SOCIAL_USER} from '../../constatants'

//
//LOGIN SAGAS
//
function* watchLoginRequest({
	payload,
	router,
}) {
	try { 
		const res = yield call(
			AuthModel.login,
			payload
		);
		if (res.message !== "success") {
			toast.error(res.message);
			return;
		}
		 toast.success(res.message);
         JSON.stringify(localStorage.setItem("token", res.jwt));    
	} catch (e) {
		toast.error("Server side error occured. Kindly check your internet.");
	} finally {
		// yield put(setAuthIsFormLoading(false));
	}
}

//logout

function* watchLogoutRequest({
	payload,
}) {
	try { 
		const res = yield call(
			AuthModel.logout,
			payload
		);
		if (res.message !== "success") {
			toast.error(res.message);
			return;
		}
        localStorage.clear()
         yield put(setUserAction({}));
         toast.success(res.message);
           
	} catch (e) {
		toast.error("Server side error occured. Kindly check your internet.");
	} finally {
		// yield put(setAuthIsFormLoading(false));
	}
}
//
// SIGNUP SAGAS
//
function* watchSignupRequest({
	payload,
	router,
}) {
	try {
		const res = yield call(
			AuthModel.signUp,
			payload
		);
		if (!res.status.success) {
			toast.error(res.response.message);
			return;
		}
		router.push('/')
	} catch (e) {
		toast.error("Server side error occured. Kindly check your internet.");
	}
}
function* watchGetUserRequest(){
    try {
		const res = yield call(
			AuthModel.getUser
		);
		if (res.message !== 'success') {
			toast.error(res.message);
			return;
		}  
        yield put(setUserAction(res.data));
        toast.success(res.message);
	} catch (e) {
		toast.error("Server side error occured. Kindly check your internet.");
	}
}
function* watchGetSocialUserRequest(){
    try {
		const res = yield call(
			AuthModel.getSocialUser
		);
		if (res.message !== 'success') {
			toast.error(res.message);
			return;
		}  
        yield put(setUserAction(res.data));
        toast.success(res.message);
	} catch (e) {
		toast.error("Server side error occured. Kindly check your internet.");
	}
}

export function* watchAuthSagas() {
	yield all([
		// takeLatest(FIREBASE_LOGIN, watchFirebaseLogin),
		takeLatest(SIGNUP_REQUEST, watchSignupRequest),
        takeLatest(LOGIN_REQUEST, watchLoginRequest),
        takeLatest(GET_USER, watchGetUserRequest),
        takeLatest(LOG_OUT_REQUEST, watchLogoutRequest),
        takeLatest(GET_SOCIAL_USER,watchGetSocialUserRequest)
	]);
}
