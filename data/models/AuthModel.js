import RequestHandler from "../RequestHandler";
import React from 'react';

class AuthModel extends React.Component {
	static signUp = async (payload) => {
		return await RequestHandler("signUp", payload);
	};
    static login = async (payload) => {
		return await RequestHandler("login", payload);
	};
    static socialLogin = async (payload)=> {
        return await RequestHandler("sociallogin",payload);
    }
    static logout = async (payload) => {
        return await RequestHandler("logout",payload)
    }
    static getUser = async () => {
        return await RequestHandler("getUser")
    }
    static getSocialUser = async () => {
        return await RequestHandler("getSocialUser")
    }
}
export default AuthModel;
