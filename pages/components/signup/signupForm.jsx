import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    FormErrorMessage,
    useDisclosure,
    InputGroup,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import * as Yup from "yup";
import React, { useState } from "react";
import { Logo } from "../ui/logo";
import { OAuthButtonGroup } from "../ui/oathButtonGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { onSignupRequest } from "../../../data/redux/actions";

const schema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
});

export const SignupForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef(null);
    const onClickReveal = () => {
        onToggle();
        if (inputRef.current) {
            inputRef.current.focus({
                preventScroll: true,
            });
        }
    };

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const onSubmit = (values) => {
        values.name = values.username;
        dispatch(onSignupRequest(values, router));
    };
    return (
        <Stack spacing="2" mt="1rem" mb="1rem">
            <Stack spacing="6">
                <Logo color="white" />
                <Stack
                    spacing={{
                        base: "2",
                        md: "3",
                    }}
                    textAlign="center"
                >
                    <Heading
                        color="white"
                        size={useBreakpointValue({
                            base: "xs",
                            md: "sm",
                        })}
                    >
                        Create your account
                    </Heading>
                    <HStack spacing="1" justify="center">
                        <Text color="white">Already have an account?</Text>
                        <Button variant="link" colorScheme="blue">
                            Log in
                        </Button>
                    </HStack>
                </Stack>
            </Stack>
            <Box
                py={{
                    base: "0",
                    sm: "8",
                }}
                px={{
                    base: "4",
                    sm: "10",
                }}
                bg={useBreakpointValue({
                    base: "transparent",
                    sm: "bg-surface",
                })}
                borderRadius={{
                    base: "none",
                    sm: "xl",
                }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl
                                mt="1rem"
                                isInvalid={!!errors?.username?.message}
                                errortext={errors?.username?.message}
                                isRequired
                            >
                                <FormLabel htmlFor="name" color="white">
                                    Username
                                </FormLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    color="white"
                                    placeholder="Enter your name"
                                    {...register("username")}
                                />
                                <FormErrorMessage>
                                    {errors?.username?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl
                                mt="1rem"
                                isInvalid={!!errors?.email?.message}
                                errortext={errors?.email?.message}
                                isRequired
                            >
                                <FormLabel htmlFor="email" color="white">
                                    Email
                                </FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    color="white"
                                    placeholder="Enter your email"
                                    {...register("email")}
                                    required
                                />
                                <FormErrorMessage>
                                    {errors?.email?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl
                                mt="1rem"
                                isInvalid={!!errors?.password?.message}
                                errortext={errors?.password?.message}
                                isRequired
                            >
                                <FormLabel htmlFor="password" color="white">
                                    Password
                                </FormLabel>
                                <InputGroup>
                                    <InputRightElement>
                                        <IconButton
                                            variant="link"
                                            aria-label={
                                                isOpen
                                                    ? "Mask password"
                                                    : "Reveal password"
                                            }
                                            icon={
                                                isOpen ? (
                                                    <HiEyeOff />
                                                ) : (
                                                    <HiEye />
                                                )
                                            }
                                            onClick={onClickReveal}
                                        />
                                    </InputRightElement>
                                    <Input
                                        id="password"
                                        {...register("password")}
                                        name="password"
                                        color="white"
                                        type={isOpen ? "text" : "password"}
                                        placeholder="Enter password"
                                        autoComplete="current-password"
                                    />
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors?.password?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Stack mt="1rem">
                                <Button
                                    colorScheme="blue"
                                    type="submit"
                                    disabled={
                                        !!errors?.email || !!errors?.password
                                    }
                                >
                                    Create account
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                    <Stack spacing="6">
                        {/* <Button colorScheme="blue">Create account</Button> */}
                        <HStack>
                            <Divider />
                            <Text
                                fontSize="sm"
                                whiteSpace="nowrap"
                                color="white"
                            >
                                or continue with
                            </Text>
                            <Divider />
                        </HStack>
                        <OAuthButtonGroup />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
};
