import React, { useState,useEffect } from "react";
import CustomiseCarousel from "./components/customizeCarousel";
import Layout from "./components/layout";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Image,
  Heading,
  Stack,
  InputGroup,
  Input,
  Button,
  Tooltip,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { MdHelpOutline } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
export default function BubgBuy() {
  const [paymentHover, setPaymentHover] = useState(false);
  const [active, setActive] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    // if (backgroundTransparacyVar < 1) {
    //   let paddingVar = 30 - backgroundTransparacyVar * 20;
    //   let boxShadowVar = backgroundTransparacyVar * 0.1;
    //   setBackgroundTransparacy(backgroundTransparacyVar);
    //   setPadding(paddingVar);
    //   setBoxShadow(boxShadowVar);
    // }
  }, [clientWindowHeight]);
  const images = [
    "/images/pubg-banner-1.jpg",
    "/images/pubg-banner2.png",
    "/images/pubg-banner3.png",
    "/images/pubg-skin.jpg",
    "/images/pubg-pack.png",
    "/images/pubg-fb-banner.jpg",
    "/images/pubg-tiktok.jpg",
    "/images/pubg-uc.png",
  ];
  const onMouseEnterHandler = () => {
    setPaymentHover(true);
  };
  const onMouseLeaveHandler = () => {
    setPaymentHover(false);
  };
  const onClickBox = () => {
    setActive(true);
  };
  return (
    <Layout>
      <CustomiseCarousel images={images} />
      <Box
        w="100%"
        backgroundImage="linear-gradient(180deg,rgba(17,23,51,0),var(--bg-color-2,#111733))"
        position="absolute"
        mt="-80px"
        height="80px"
        zIndex="100"
      >
        <Container maxW="container.xl">
          <Flex gap="40px">
            <Box>
              {" "}
              <Link
                height="80px"
                background="url(/images/bg-yellow.png) no-repeat 50%"
                backgroundSize="100px 80px"
                bottom={0}
                display="flex"
                alignItems="center"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  color="#ffe500"
                  letterSpacing="1px"
                  textShadow="0 2px 4px rgb(0 0 0 / 20%)"
                  lineHeight="68px"
                >
                  Purchase
                </Text>
              </Link>
            </Box>

            <Link
              height="80px"
              bottom={0}
              display="flex"
              alignItems="center"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text
                fontSize="20px"
                fontWeight="bold"
                color="text.gray"
                letterSpacing="1px"
                textShadow="0 2px 4px rgb(0 0 0 / 20%)"
                lineHeight="68px"
              >
                Redeem
              </Text>
            </Link>
            <Link
              height="80px"
              bottom={0}
              display="flex"
              alignItems="center"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text
                fontSize="20px"
                fontWeight="bold"
                color="text.gray"
                letterSpacing="1px"
                textShadow="0 2px 4px rgb(0 0 0 / 20%)"
                lineHeight="68px"
              >
                Shop
              </Text>
            </Link>
            <Link
              height="80px"
              bottom={0}
              display="flex"
              alignItems="center"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text
                fontSize="20px"
                fontWeight="bold"
                color="text.gray"
                letterSpacing="1px"
                textShadow="0 2px 4px rgb(0 0 0 / 20%)"
                lineHeight="68px"
              >
                Promotions
              </Text>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box mt="48px" mb="48px" w="100%" h="auto">
        <Container maxW="container.xl">
          <Flex
            bgImage="url(/images/bg-purchase-header.webp)"
            cursor="pointer"
            h="60px"
            bgColor="var(--bg-color-3,#141b3d)"
            bgRepeat="no-repeat"
            // boxSize="border-box"
            bgSize="100% 100%"
            mb="50px"
            borderRadius="4px"
            alignItems="center"
          >
            <Image
              position="absolute"
              mt="-10px"
              ml="27px"
              backgroundSize="contain"
              overflow="clip"
              aspectRatio="auto 78 / 78"
              src="/images/pubg-girl.webp"
              w="78px"
              h="78px"
            />
            <Text
              // flexShrink="0"
              ml="200px"
              mr="16px"
              fontSize="14px"
              fontWeight="bold"
              lineHeight="22px"
              letterSpacing={2}
              color="hsla(0,0%,100%,.7490196078431373)"
            >
              Season Purchase bonus
            </Text>
            <Text
              mr="16px"
              fontSize="14px"
              fontWeight="bold"
              lineHeight="22px"
              letterSpacing={2}
              color="white"
            >
              Season Purchase bonus
            </Text>
            <Box
              p="3px 8px"
              display="inline-block"
              borderRadius="100px"
              opacity={1}
              color="white"
              fontSize="12px"
              lineHeight="16px"
              background="linear-gradient(135deg, rgb(240, 170, 99) 0%, rgb(235, 124, 84) 100%)"
            >
              <Text lineHeight="16px">Go</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" mb="20px">
            <Heading as="h3" size="sm" color="white" mr="14px">
              Player ID Verification
            </Heading>
            <Box color="text.gray">
              {" "}
              <MdHelpOutline size="25" />
            </Box>
          </Flex>
          `{" "}
          <Stack direction="row" spacing={0} w="50%" mb="70px">
            <InputGroup borderRadius="none" alignSelf="center">
              <Input
                type="tel"
                placeholder="Please enter Player ID"
                fontSize="14px"
                borderRight="none"
                textColor="headerText"
                bg="var(--bg-color-5,#192045)"
                borderRadius="none"
                boxSizing="border-box"
                _hover={{
                  border: "1px solid hsla(0,0%,100%,.1)",
                }}
                _focus={{
                  border: "1px solid hsla(0,0%,100%,.1)",
                }}
                h="50px"
                variant="filled"
                outline="1px solid hsla(0,0%,100%,.1)"
              />
            </InputGroup>
            <Button
              color="white"
              h="50px"
              bg="var(--btn-color-2,#3a7bfc)"
              borderRadius="none"
            >
              Submit
            </Button>
          </Stack>
          `
          <Heading as="h3" size="sm" color="white" mb="20px">
            Payment Method
          </Heading>
          <Flex gap="16px" mb="70px">
            <Box w="50%" cursor="pointer" position="relative">
              <Box
                w="100%"
                h="80px"
                bg="var(--bg-color-5,#192045)"
                position="relative"
                display="flex"
                alignItems="center"
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  opacity="1"
                  color="#fff"
                  fontSize="12px"
                  position="absolute"
                  gap="5px"
                  h="18px"
                  borderRadius="0 0 0 4px"
                  bg="linear-gradient(135deg,#f2b818,#f26c3d)"
                  p="7px"
                  lineHeight="18px"
                  right={0}
                  top={0}
                >
                  <AiFillLike size="10" /> <Text>Recommend</Text>
                </Box>
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                />
                <Image
                  src="/images/credit-card.png"
                  h="40px"
                  ml="35px"
                  mr="35px"
                />
                <Box>
                  <Text
                    lineHeight="16px"
                    fontSize="14px"
                    color="#fff"
                    opacity="1"
                  >
                    Credit / Debit / Prepaid Card
                  </Text>
                  <Text
                    mt="8px"
                    lineHeight="16px"
                    fontSize="12px"
                    color="#fad457"
                    opacity="1"
                    display="flex"
                  >
                    <Image
                      src="/images/fire-icon.png"
                      w="9px"
                      h="12px"
                      mr="7px"
                    />
                    Credit / Debit / Prepaid Card
                  </Text>
                </Box>
              </Box>
              {paymentHover && (
                <Box
                  display="flex"
                  gap="16px"
                  alignItems="center"
                  bg="var(--bg-color-5,#192045)"
                  h="80px"
                  pl="35px"
                  cursor="pointer"
                  position="absolute"
                  w="100%"
                >
                  <Image src="/images/visa-icon.png" w="50px" h="30px" />
                  <Image src="/images/master-icon.png" w="50px" h="30px" />
                  <Image src="/images/amex-icon.png" w="50px" h="30px" />
                  <Image src="/images/union-icon.png" w="50px" h="30px" />
                  <Image src="/images/diner-icon.png" w="50px" h="30px" />
                  <Image src="/images/discover-icon.png" w="50px" h="30px" />
                  <Image src="/images/jcb-icon.png" w="50px" h="30px" />
                </Box>
              )}
            </Box>
            <Box
              w="50%"
              h="80px"
              bg="var(--bg-color-5,#192045)"
              position="relative"
              display="flex"
              alignItems="center"
            >
              <Image
                position="absolute"
                left={0}
                top={0}
                src="/images/corner-tick.svg"
              />
              <Image
                src="/images/razer-gold-icon.png"
                h="40px"
                ml="35px"
                mr="35px"
              />
              <Box>
                <Text
                  lineHeight="16px"
                  fontSize="14px"
                  color="#fff"
                  opacity="1"
                >
                  Razer Gold
                </Text>
              </Box>
            </Box>
          </Flex>
          <Heading as="h3" size="sm" color="white" mb="20px" mt="20px">
            Select Product
          </Heading>
          <Flex
            h="38px"
            gap="16px"
            lineHeight="38px"
            backgroundImage="linear-gradient(180deg,rgba(201,140,101,.15),rgba(176,103,69,.15))"
            font-size="12px"
            color="#f3b583"
            letterSpacing="0"
            overflow="hidden"
            alignItems="center"
            mb="20px"
          >
            <Image src="images/vip-icon.png" w="47px" ml="16px" h="19px" />
            <Text>
              You can become VIP immediatly after finishing this payment.
            </Text>
            <Text textDecoration="underline">Win VIP Lucky Draw Prizes</Text>
          </Flex>
          <Grid
            gap={3}
            w="100%"
            templateColumns={{
              lg: "repeat(4, 1fr)",
              md: "repeat(3, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
            position="relative"
          >
            <GridItem w="100%">
              <Flex
                direction="column"
                position="relative"
                p="44px 16px 14px"
                h="326px"
                boxSizing="border-box"
                bg="var(--bg-color-6,#19214b)"
                border={active && "1px solid #1986fe"}
                onClick = {()=> setActive(true)}
              >
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                  display={active ? 'block': 'none'}
                />
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/uc-icon.png" w="24px" h="24px" />
                  <Text
                    fontSize="24px"
                    color="#fff"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    7
                  </Text>
                  <Text
                    fontSize="24px"
                    color="#ebbe4a"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    +7
                  </Text>
                </Flex>

                <Flex
                  p="16px"
                  h="180px"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image
                    position="absolute"
                    src="/images/uc-main.png"
                    w="70%"
                    maxW="100%"
                    zIndex="100"
                  />
                  <Image
                    position="absolute"
                    src="/images/bg-highlight.png"
                    w="100%"
                    maxW="100%"
                    display={active ? 'block': 'none'}
                  />
                </Flex>
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/yellow-star.png" w="12px" h="12px" />
                
                  <Text
                    fontSize="12px"
                    color="#ebbe4a"
                    display="inline-block"
                    pl="5px"
                    fontWeight="bold"
                  >
                    One Purchase Only
                  </Text>
                </Flex>
                <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
                    <Text
                    ontSize="20px"
                    color= "#fff"
                    fontWeight="bold"
                    letterSpacing= "-.67px"
                    >
                     0.49 USD
                    </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                direction="column"
                position="relative"
                p="44px 16px 14px"
                h="326px"
                boxSizing="border-box"
                bg="var(--bg-color-6,#19214b)"
                border={active && "1px solid #1986fe"}
                onClick = {()=> setActive(true)}
              >
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                  display={active ? 'block': 'none'}
                />
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/uc-icon.png" w="24px" h="24px" />
                  <Text
                    fontSize="24px"
                    color="#fff"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    7
                  </Text>
                  <Text
                    fontSize="24px"
                    color="#ebbe4a"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    +7
                  </Text>
                </Flex>

                <Flex
                  p="16px"
                  h="180px"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image
                    position="absolute"
                    src="/images/uc-main.png"
                    w="70%"
                    maxW="100%"
                    zIndex="100"
                  />
                  <Image
                    position="absolute"
                    src="/images/bg-highlight.png"
                    w="100%"
                    maxW="100%"
                    display={active ? 'block': 'none'}
                  />
                </Flex>
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/yellow-star.png" w="12px" h="12px" />
                
                  <Text
                    fontSize="12px"
                    color="#ebbe4a"
                    display="inline-block"
                    pl="5px"
                    fontWeight="bold"
                  >
                    One Purchase Only
                  </Text>
                </Flex>
                <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
                    <Text
                    ontSize="20px"
                    color= "#fff"
                    fontWeight="bold"
                    letterSpacing= "-.67px"
                    >
                     0.49 USD
                    </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                direction="column"
                position="relative"
                p="44px 16px 14px"
                h="326px"
                boxSizing="border-box"
                bg="var(--bg-color-6,#19214b)"
                border={active && "1px solid #1986fe"}
                onClick = {()=> setActive(true)}
              >
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                  display={active ? 'block': 'none'}
                />
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/uc-icon.png" w="24px" h="24px" />
                  <Text
                    fontSize="24px"
                    color="#fff"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    7
                  </Text>
                  <Text
                    fontSize="24px"
                    color="#ebbe4a"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    +7
                  </Text>
                </Flex>

                <Flex
                  p="16px"
                  h="180px"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image
                    position="absolute"
                    src="/images/uc-main.png"
                    w="70%"
                    maxW="100%"
                    zIndex="100"
                  />
                  <Image
                    position="absolute"
                    src="/images/bg-highlight.png"
                    w="100%"
                    maxW="100%"
                    display={active ? 'block': 'none'}
                  />
                </Flex>
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/yellow-star.png" w="12px" h="12px" />
                
                  <Text
                    fontSize="12px"
                    color="#ebbe4a"
                    display="inline-block"
                    pl="5px"
                    fontWeight="bold"
                  >
                    One Purchase Only
                  </Text>
                </Flex>
                <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
                    <Text
                    ontSize="20px"
                    color= "#fff"
                    fontWeight="bold"
                    letterSpacing= "-.67px"
                    >
                     0.49 USD
                    </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                direction="column"
                position="relative"
                p="44px 16px 14px"
                h="326px"
                boxSizing="border-box"
                bg="var(--bg-color-6,#19214b)"
                border={active && "1px solid #1986fe"}
                onClick = {()=> setActive(true)}
              >
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                  display={active ? 'block': 'none'}
                />
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/uc-icon.png" w="24px" h="24px" />
                  <Text
                    fontSize="24px"
                    color="#fff"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    7
                  </Text>
                  <Text
                    fontSize="24px"
                    color="#ebbe4a"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    +7
                  </Text>
                </Flex>

                <Flex
                  p="16px"
                  h="180px"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image
                    position="absolute"
                    src="/images/uc-main.png"
                    w="70%"
                    maxW="100%"
                    zIndex="100"
                  />
                  <Image
                    position="absolute"
                    src="/images/bg-highlight.png"
                    w="100%"
                    maxW="100%"
                    display={active ? 'block': 'none'}
                  />
                </Flex>
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/yellow-star.png" w="12px" h="12px" />
                
                  <Text
                    fontSize="12px"
                    color="#ebbe4a"
                    display="inline-block"
                    pl="5px"
                    fontWeight="bold"
                  >
                    One Purchase Only
                  </Text>
                </Flex>
                <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
                    <Text
                    ontSize="20px"
                    color= "#fff"
                    fontWeight="bold"
                    letterSpacing= "-.67px"
                    >
                     0.49 USD
                    </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                direction="column"
                position="relative"
                p="44px 16px 14px"
                h="326px"
                boxSizing="border-box"
                bg="var(--bg-color-6,#19214b)"
                border={active && "1px solid #1986fe"}
                onClick = {()=> setActive(true)}
              >
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                  display={active ? 'block': 'none'}
                />
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/uc-icon.png" w="24px" h="24px" />
                  <Text
                    fontSize="24px"
                    color="#fff"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    7
                  </Text>
                  <Text
                    fontSize="24px"
                    color="#ebbe4a"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    +7
                  </Text>
                </Flex>

                <Flex
                  p="16px"
                  h="180px"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image
                    position="absolute"
                    src="/images/uc-main.png"
                    w="70%"
                    maxW="100%"
                    zIndex="100"
                  />
                  <Image
                    position="absolute"
                    src="/images/bg-highlight.png"
                    w="100%"
                    maxW="100%"
                    display={active ? 'block': 'none'}
                  />
                </Flex>
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/yellow-star.png" w="12px" h="12px" />
                
                  <Text
                    fontSize="12px"
                    color="#ebbe4a"
                    display="inline-block"
                    pl="5px"
                    fontWeight="bold"
                  >
                    One Purchase Only
                  </Text>
                </Flex>
                <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
                    <Text
                    ontSize="20px"
                    color= "#fff"
                    fontWeight="bold"
                    letterSpacing= "-.67px"
                    >
                     0.49 USD
                    </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                direction="column"
                position="relative"
                p="44px 16px 14px"
                h="326px"
                boxSizing="border-box"
                bg="var(--bg-color-6,#19214b)"
                border={active && "1px solid #1986fe"}
                onClick = {()=> setActive(true)}
              >
                <Image
                  position="absolute"
                  left={0}
                  top={0}
                  src="/images/corner-tick.svg"
                  display={active ? 'block': 'none'}
                />
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/uc-icon.png" w="24px" h="24px" />
                  <Text
                    fontSize="24px"
                    color="#fff"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    7
                  </Text>
                  <Text
                    fontSize="24px"
                    color="#ebbe4a"
                    display="inline-block"
                    position="relative"
                    pl="5px"
                    fontWeight="bold"
                  >
                    +7
                  </Text>
                </Flex>

                <Flex
                  p="16px"
                  h="180px"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <Image
                    position="absolute"
                    src="/images/uc-main.png"
                    w="70%"
                    maxW="100%"
                    zIndex="100"
                  />
                  <Image
                    position="absolute"
                    src="/images/bg-highlight.png"
                    w="100%"
                    maxW="100%"
                    display={active ? 'block': 'none'}
                  />
                </Flex>
                <Flex h="24px" justifyContent="center" alignItems="center">
                  <Image src="/images/yellow-star.png" w="12px" h="12px" />
                
                  <Text
                    fontSize="12px"
                    color="#ebbe4a"
                    display="inline-block"
                    pl="5px"
                    fontWeight="bold"
                  >
                    One Purchase Only
                  </Text>
                </Flex>
                <Flex alignItems="center" bg="var(--bg-color-9,#1e2d5f);" justifyContent="center" w="100%" h="42px">
                    <Text
                    ontSize="20px"
                    color= "#fff"
                    fontWeight="bold"
                    letterSpacing= "-.67px"
                    >
                     0.49 USD
                    </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem w="100%"></GridItem>
            <GridItem w="100%"></GridItem>
          </Grid>
          <Flex
          width= "100%"
          background= "var(--bg-color-1,#0b1339)"
          padding= "17px 0"
          position= {'fixed'}
          left= {0}
          bottom= {0}
          zIndex= "500"
          h="70px"
          >
         <Flex
         position="relative"
         justifyContent="flex-end"
         >
       <Box>
        <Flex>
            <Text fontSize="14px"
            color="#fff"
            mr="8px"
            > Total:</Text>
            <Text></Text>
        </Flex>
        <Flex>
            <Text></Text>
        </Flex>
        </Box>                                        
         </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
