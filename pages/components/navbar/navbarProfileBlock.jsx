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
    Box,
    Text
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import Login from "../login";
  import Signup from "../signup";
  import { useSelector,useDispatch } from "react-redux";
  import {getUserState } from '../../../data/redux/selecters';
  import { getUserRequest, logOutRequest } from '../../../data/redux/actions';
  import {isEmpty} from 'lodash';


const NavbarProfile = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [status, setStatus] = useState('')
    const dispatch = useDispatch();
    const {user} = useSelector(getUserState)
    const token = localStorage.getItem('token')
    console.log('user object', user)
    useEffect(()=> {
    if (isEmpty(user) && token) {
     dispatch(getUserRequest())
    }
    },[user])
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
        <Menu borderColor="none" border="none">
        <MenuButton
            as={Button}
            transition="all 0.2s"
            bg="none"
            _hover={{bg:"var(--bg-color-8,#1d2657)"  }}
            _expanded={{ bg:"var(--bg-color-8,#1d2657)"}}
            _focus={{ bg:"none"}}
            rightIcon={<ChevronDownIcon />}
        >
            {user.email?user.email:"My account"}
        </MenuButton>
        <MenuList bg="var(--bg-color-8,#1d2657)" borderColor="var(--bg-color-8,#1d2657)" borderRadius="none" >
            <MenuGroup  bg="base.2" border="none" borderColor="none">
               { isEmpty(user) ? <><MenuItem bg="var(--bg-color-8,#1d2657)" ><Box textAlign="center" p="5px" w="100%" bg="base.4"  _hover="none" _focus={{bg:"base.3"}} onClick={handleClickSignIn}>Sign In</Box></MenuItem>
                <MenuItem bg="var(--bg-color-8,#1d2657)" ><Box Box textAlign="center" p="5px" bg="white"  w="100%" color="base.4"  _hover={{bg:"base.4", color:"white"}} _focus={{bg:"base.3"}} onClick={handleClickSignUp}>Create Account</Box> </MenuItem></>:
                <MenuItem bg="var(--bg-color-8,#1d2657)"><Text>My Account<br/>{user.email}</Text></MenuItem>
                }
            </MenuGroup>
            <MenuGroup  bg="var(--bg-color-8,#1d2657)">
                {/* <MenuItem bg="base.2">Docs</MenuItem> */}
               { !isEmpty(user) && <MenuItem bg="var(--bg-color-8,#1d2657)"onClick={onSignOut}>Sign out</MenuItem>}
            </MenuGroup>
        </MenuList>
        
    </Menu>
    {renderAuthenticationForms()}
    </Box>
    )
}
export default NavbarProfile;