import { Button, ButtonGroup, Stack,Box } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './providerIcons'
import FbLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookLogin from '../login/facebookLoging'

import { MdOutlineFacebook } from "react-icons/md";
const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon boxSize="5" />,
  },
  {
    name: 'GitHub',
    icon: <GitHubIcon boxSize="5" />,
  },
]

export const OAuthButtonGroup = () =>{
const responseFacebook = (response)=> {
    debugger
    console.log(response)
    FacebookLogin(response.accessToken)
}
return (
  <Box  width="full">
    {/* {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))} */}
    <FbLogin 
    appId='2120048268189442'
    fields='name,emai,picture'
    callback={responseFacebook}
    render={(props)=><Stack mt="1rem">
    <Button
        display="flex"
        gap="3"
        width="full"
        colorScheme="blue"
        type="submit"
        onClick={props.onClick}
    >
     {<MdOutlineFacebook size="30" />} Sigin in with facebook
    </Button>
</Stack>
}
    // render={(props)=><a onClick={props.onClick}>facebook</a>}
    />
  </Box>
)
}