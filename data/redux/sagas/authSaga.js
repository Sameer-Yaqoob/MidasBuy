
import { toast } from "react-toastify";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { setUserAction,getUserRequest } from "../actions";
import { AuthModel } from "../../models";
import {LOGIN_REQUEST, SIGNUP_REQUEST,GET_USER, LOG_OUT_REQUEST,SOCIAL_LOGIN_REQUEST} from '../../constatants'

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
			toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
			return;
		}
		yield put(getUserRequest());    
		toast('Login successfully', { hideProgressBar: true, autoClose: 1000, type: 'success', position:'top-center',className:"toast-message" })
         JSON.stringify(localStorage.setItem("token", res.jwt));  
		 yield put(getUserRequest());   
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
	} finally {
	}
}
//social login saga
function* watchSocialLoginRequest({
	payload,
}) {
	try { 
		const res = yield call(
			AuthModel.socialLogin,
			payload
		);
		if (!res.access_token) {
			toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
			return;
		}
		localStorage.setItem('token', res.access_token)
        localStorage.setItem('refresh_token', res.refresh_token)
        localStorage.setItem('social_login', 'success') 
		yield put(getUserRequest());    
		toast('Login successfully', { hideProgressBar: true, autoClose: 1000, type: 'success', position:'top-center',className:"toast-message" })
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
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
		toast('Logout successfully', { hideProgressBar: true, autoClose: 1000, type: 'success', position:'top-center',className:"toast-message" })
         yield put(setUserAction({}));    
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
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
		if (res.message !=='success') {
			toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
			return;
		}
		router.push('/')
		toast('Account created successfully. Login to continue.', { hideProgressBar: true, autoClose: 1000, type: 'success', position:'top-center',className:"toast-message" })
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
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
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
	}
}

export function* watchAuthSagas() {
	yield all([
		// takeLatest(FIREBASE_LOGIN, watchFirebaseLogin),
		takeLatest(SIGNUP_REQUEST, watchSignupRequest),
        takeLatest(LOGIN_REQUEST, watchLoginRequest),
		takeLatest(SOCIAL_LOGIN_REQUEST, watchSocialLoginRequest),
        takeLatest(GET_USER, watchGetUserRequest),
        takeLatest(LOG_OUT_REQUEST, watchLogoutRequest)
	]);
}
