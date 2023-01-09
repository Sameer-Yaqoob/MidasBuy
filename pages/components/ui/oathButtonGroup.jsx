import { useEffect } from "react";
import { Button, Stack, Box } from "@chakra-ui/react";
import FbLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {
	onSocialLoginRequest,
	getUserRequest,
} from "../../../data/redux/actions";
export const OAuthButtonGroup = ({ closeForm }) => {
	const dispatch = useDispatch();
	const responseFacebook = (response) => {
		const payload = {
			token: response.accessToken,
			backend: "facebook",
			grant_type: "convert_token",
			client_id: "EskNgrmzpMiUy1A1xN7LsfsKGRrwaNc1q2AJClfk",
			client_secret:
				"4RGuPrXDt6cRaeselXAlYJknla2P8L1w4IWoF8hhszmrfFfd75HwSlex0XVyo6p3px14k4cb9EztzEw9tNqAlQhdo23yhPGuAdRfMvcRhGpUknhfbL27DnMtYjizTOfq",
		};
		dispatch(onSocialLoginRequest(payload));
		const promise = new Promise(function (resolve, reject) {
			setTimeout(function () {
				const token = localStorage.getItem('token')
                resolve(token)
			}, 6000);
		})
		promise
			.then((token) => {
				token && closeForm();
			})
			.catch((err) => console.log(err));
	};
	const onSuccess = (response) => {
		const payload = {
			token: response.accessToken,
			backend: "google-oauth2",
			grant_type: "convert_token",
			client_id: "xqAvFXpcuwUlsHjq4UWRuQ4AFZKbi8hx9owr6yoj",
			client_secret:
				"Ind7uYqHXVTbP0iRf1pt2Qt9WQpz3UCc39UyoXApE9j862shomag7Ttnqh3BGbYcXBeLjdjJ0gpQwqEZ8l28K7Q3BId5CqVR1U6nGqesuOzmGUe7ZotHcUicAHZJls4B",
		};
		dispatch(onSocialLoginRequest(payload));
		const promise = new Promise(function (resolve, reject) {
			setTimeout(function () {
				const token = localStorage.getItem('token')
                resolve(token)
			}, 6000);
		});
		promise
			.then((token) => {
			token && closeForm();
			})
			.catch((err) => console.log(err));
	};
	const onFailure = (response) => {
		console.log(response);
	};
	useEffect(() => {
		const gapi = import("gapi-script").then((pack) => pack.gapi);
		const initClient = async () => {
			const d = await gapi;
			d.client.init({
				clientId:
					"1013869911144-tao24f4jek7ogvmmv6jqjroku4lf8ris.apps.googleusercontent.com",
				scope: "email",
				plugin_name: "chat",
			});
		};
		gapi.then((d) => d.load("client:auth2", initClient));
	}, []);
	return (
		<Box width="full" display="flex" flexDirection="column" gap="10px">
			<FbLogin
				appId="2120048268189442"
				fields="name,emai,picture"
				callback={responseFacebook}
				render={(props) => (
					<Stack mt="1rem">
						<Button
							display="flex"
							gap="3"
							width="full"
							colorScheme="blue"
							type="submit"
							onClick={props.onClick}
						>
							{<MdOutlineFacebook size="30" />} Sigin in with
							facebook
						</Button>
					</Stack>
				)}
			/>
			<GoogleLogin
				clientId="1013869911144-tao24f4jek7ogvmmv6jqjroku4lf8ris.apps.googleusercontent.com"
				render={(renderProps) => (
					<Button
						display="flex"
						gap="3"
						width="full"
						background="white"
						type="submit"
						onClick={renderProps.onClick}
						// disabled={renderProps.disabled}
					>
						{<FcGoogle size="30" />} Sigin in with Google
					</Button>
				)}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
			/>
		</Box>
	);
};
