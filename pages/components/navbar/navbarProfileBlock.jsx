import  React, {useState,useEffect} from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button,
    useDisclosure,
    Box
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import Login from "../login";
  import Signup from "../signup";
  import { useSelector,useDispatch } from "react-redux";
  import {getUserState } from '../../../data/redux/selecters';
  import { getSocialUser, getUserRequest, logOutRequest } from '../../../data/redux/actions';
  import useDispatchOnMount from '../hooks/useDispatchOnMount'
  import {isEmpty} from 'lodash'


const NavbarProfile = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [status, setStatus] = useState('')
    const dispatch = useDispatch();
    const {user} = useSelector(getUserState)
    const socialLogin = localStorage.getItem('social_login')
    if(socialLogin == 'success') {
        useDispatchOnMount(getSocialUser, isEmpty(user));
    }else {
        useDispatchOnMount(getUserRequest, isEmpty(user));
    }

    // useEffect(()=> {
    //   dispatch(getUserRequest())
    // },[])
    const renderAuthenticationForms = ()=> {
        switch (status) {
            case "signin":
                return(
                    <Login isOpen={isOpen} onClose={onClose}/>
                )
            case "signup" :
                return(
                    <Signup isOpen={isOpen} onClose={onClose}/>
                )   
            default :
            return <></>     
        }

    }
    const onSignOut = ()=>{
        dispatch(logOutRequest({}))
    }
    const handleClickSignIn = ()=> {
        onOpen();
        setStatus("signin")
    }
    const handleClickSignUp = ()=> {
        onOpen();
        setStatus("signup")
    }
    return(
        <Box>
        <Menu>
        <MenuButton
            as={Button}
            transition="all 0.2s"
            borderRadius="md"
            bg="none"
            _hover={{ bg: "base.3" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
            rightIcon={<ChevronDownIcon />}
        >
            {user.email?user.email:"My account"}
        </MenuButton>
        <MenuList bg="base.2">
            <MenuGroup title="My account" bg="base.2">
                <MenuItem bg="base.2" ><Box textAlign="center" p="5px" w="100%" bg="base.4"  _hover="none" _focus={{bg:"base.3"}} onClick={handleClickSignIn}>Sign In</Box></MenuItem>
                <MenuItem bg="base.2"><Box Box textAlign="center" p="5px" bg="white"  w="100%" color="base.4"  _hover={{bg:"base.4", color:"white"}} _focus={{bg:"base.3"}} onClick={handleClickSignUp}>Create Account</Box> </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help" bg="base.2">
                <MenuItem bg="base.2">Docs</MenuItem>
                <MenuDivider />
                <MenuItem bg="base.2" onClick={onSignOut}>Sign out</MenuItem>
            </MenuGroup>
        </MenuList>
        
    </Menu>
    {renderAuthenticationForms()}
    </Box>
    )
}
export default NavbarProfile;