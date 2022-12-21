// import fetchIntercept from "fetch-intercept";
// import jwtDecode from "jwt-decode";
// import requestRoutes from "./requestRoutes.json";
// import { store } from "../redux/store";
// import { onSetAccessToken } from "../../data/redux/actions";

// const fetchRefreshToken = (userID, refreshToken) =>
// 	fetch(
// 		process.env.REACT_APP_SERVER_BASE_URL +
// 			requestRoutes.refreshAuthToken.route,
// 		{
// 			method: requestRoutes.refreshAuthToken.method,
// 			headers: {
// 				Authorization: `refreshToken ${refreshToken}`,
// 				["Content-Type"]: "application/json",
// 			},
// 			body: JSON.stringify({ userID }),
// 		}
// 	)
// 		.then((res) => res.json())
// 		.then((apiRes) => {
// 			store.dispatch(onSetAccessToken(apiRes.response.data.jwtToken));
// 			return apiRes.response.data.jwtToken;
// 		})
// 		.catch((err) => {
// 			return err;
// 		});

// const getInterceptors = () =>
// 	fetchIntercept.register({
// 		request: async function (url, config) {
// 			const authorization = config.headers["Authorization"];

// 			if (authorization && store.getState().auth.user) {
// 				const { userID } = store.getState().auth.user;
// 				const { refreshToken } = store.getState().auth.tokens;

// 				try {
// 					const accessToken = jwtDecode(authorization.split(" ")[1]);
// 					const isTokenExpired = accessToken.exp < new Date() / 1000;

// 					if (isTokenExpired) {
// 						const jwt = await fetchRefreshToken(
// 							userID,
// 							refreshToken
// 						);
// 						config.headers["Authorization"] = `bearer ${jwt}`;
// 					}
// 				} catch (e) {
// 					console.error("Interceptor error: ", e);
// 				}
// 			}

// 			return [url, config];
// 		},

// 		requestError: function (error) {
// 			// Called when an error occured during another 'request' interceptor call
// 			return Promise.reject(error);
// 		},
// 	});

// export default getInterceptors;
