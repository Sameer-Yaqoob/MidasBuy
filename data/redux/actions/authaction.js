import {
    SET_USER,
    SIGNUP_REQUEST,
    LOGIN_REQUEST,
    GET_USER,
    LOG_OUT_REQUEST,
    GET_SOCIAL_USER,
    SOCIAL_LOGIN_REQUEST
} from "../../constatants";

//sign up request
export const onSignupRequest = (payload, router) => ({
    type: SIGNUP_REQUEST,
    payload,
    router,
});
//login request
export const onLoginRequest = (payload, router) => ({
    type: LOGIN_REQUEST,
    payload,
    router,
});
//google login request
export const onSocialLoginRequest = (payload) => ({
    type: SOCIAL_LOGIN_REQUEST,
    payload,
});

// user request
export const logOutRequest = (payload) => ({
    type: LOG_OUT_REQUEST,
    payload,
});
export const getUserRequest = () => ({
    type: GET_USER,
});
export const setUserAction = (payload) => ({
    type: SET_USER,
    payload,
});
