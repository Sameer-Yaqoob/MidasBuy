import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { LoginForm } from './loginForm'

  const Login = ({isOpen,onClose})=> {
    return(
        <>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <LoginForm/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Login;