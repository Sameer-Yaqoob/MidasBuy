import requestRoutes from "./requestRoutes.json";
// import getInterceptors from "./getInterceptors";
import axios from "axios";

// getInterceptors();

const getToken = () => {
	const token = localStorage.getItem("token");
	const s = localStorage.getItem("social_token");
	if (!token) {
		return null;
	}
	// const tokens = JSON.parse(auth.tokens);
	const isAuthenticated = token ? true : false;
	return isAuthenticated ? token : null;
};

// const getXOwnerId = () => {
// 	const auth = JSON.parse(localStorage.getItem("persist:auth"));
// 	const user = JSON.parse(auth.user);

// 	if (!user) {
// 		return null;
// 	}

// 	const dashboard = JSON.parse(localStorage.getItem("persist:dashboard"));
// 	const businesses = JSON.parse(dashboard.businesses);
// 	const selectedBusiness = JSON.parse(dashboard.selectedBusiness);

// 	// Check if the business is selected
// 	const business = businesses.find((b) => b.businessID === selectedBusiness);
// 	return business?.ownerID ?? user.userID;
// };

const RequestHandler = (type, reqData, headers) => {
	const { url, data } = setupRequest(type, reqData, headers);
	return new Promise((resolve, reject) => {
		// fetch(url,data)
		// 	.then((response) => {
		// 		return response.json();
		// 	}).then((apiRes) => {
		// 		resolve(apiRes);
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 		reject(err);
		// 	});
		// });
			axios({
				method: data.method,
				url: url,
				data: data.body,
				headers: data.headers,
			}).then((apiRes) => {
					resolve(apiRes.data);
				})
				.catch((err) => {
					console.error(err);
					reject(err);
				});
	});
};

const setupRequest = (type, reqData, headers) => {
	const routeConfig = requestRoutes[type];
	const request = {
		url: process.env.NEXT_PUBLIC_SERVER_BASE_URL + routeConfig.route,
		data: {
			method: routeConfig.method,
			headers: {},
		},
	};

	// if (type === "login") {
	// 	request.data.headers["x-auth-token"] =
	// 		"1e4ecb50fcedcc13c57334a29d811720";
	// }

	if (routeConfig.isProtected) {
		const social_login = localStorage.getItem("social_login");
		if (social_login == "success") {
			request.data.headers = {
				...request.data.headers,
				Authorization: 'social ' + getToken(),
				// "x-owner-id": getXOwnerId(),
				...headers,
			};
		} else {
			request.data.headers = {
				...request.data.headers,
				Authorization: 'jwt ' + getToken(),
				// "x-owner-id": getXOwnerId(),
				...headers,
			};
		}
	}

	if (routeConfig.method === "GET" || routeConfig.method === "DELETE") {
		if (reqData && Object.keys(reqData).length) {
			request.url =
				request.url + "?" + new URLSearchParams(reqData).toString();
		}
	} else if (routeConfig.method === "POST" || routeConfig.method === "PUT") {
		if (reqData instanceof FormData) {
			request.data.body = reqData;
		} else {
			request.data.headers["Content-Type"] = "application/json";
			request.data.body = JSON.stringify(
				reqData && Object.keys(reqData).length ? reqData : {}
			);
		}
	}
	return request;
};

export default RequestHandler;
