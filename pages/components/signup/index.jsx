import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { SignupForm } from './signupForm'

  const Signup = ({isOpen,onClose})=> {
    return(
        <>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <SignupForm/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Signup;