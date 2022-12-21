import axios from 'axios'
const FacebookLogin = (accessToken)=> {
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/auth/convert-token`,{
        token:accessToken,
        backend:'facebook',
        grant_type: 'convert_token',
        client_id: 'EskNgrmzpMiUy1A1xN7LsfsKGRrwaNc1q2AJClfk',
        client_secret: '4RGuPrXDt6cRaeselXAlYJknla2P8L1w4IWoF8hhszmrfFfd75HwSlex0XVyo6p3px14k4cb9EztzEw9tNqAlQhdo23yhPGuAdRfMvcRhGpUknhfbL27DnMtYjizTOfq',

    }).then((res)=> {
        console.log('response do dthesf',res)
        localStorage.setItem('token', res.data.access_token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
        localStorage.setItem('social_login', 'success')
    }).catch((err)=> console.log(err))
};
export default FacebookLogin;