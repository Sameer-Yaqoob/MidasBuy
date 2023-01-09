import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Box,Button,Flex,Image,Text } from "@chakra-ui/react";
// import Slide from "../ui/hotEventCard";
const HotEventCarousel= ()=> {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        arrows: false
      };
    return(
        <Box w="100%" >
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(-4em)",
              marginLeft: "400px",
              display: "flex",
              gap: "10px",
              // width: "200px"
              
            },
            "li": {
              // marginRight: "20px",
              // display: "flex",
              // gap: "10px",
            },
            ".slick-dots li button": {
                _before: {
                  transition: "0.1s",
                  content: "''",
                  width:"20px",
                  // display: "flex",
                  // gap: "10px",
                  height:"5px",
                  marginRight: "20px",
                  borderRadius: "none%",
                  background: "headerText"
                }
              },
          }}
        >
      <Flex h="150px">
			<Box w="50%" h="100%">
      <Slider {...slickSettings}>
          {/* <Slide image="/images/hot-event-1.png" text="Follow Midasbuy TikTok to win $9.99 UC!"/> 
          <Slide image="/images/hot-event-2.png" text="Buy Monthly Pass directly on Midasbuy!"/>
          <Slide image="/images/hot-event-3.png" text="Buy Monthly Pass directly on Midasbuy!"/> */}
          <Image src='/images/hot-event-1.png' alt="Dan Abramov" w="100%" h="150px" />
          <Image src='/images/hot-event-2.png' alt="Dan Abramov" w="100%" h="150px"  />
          </Slider>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				w="50%"
				bg="var(--bg-color-8,#1d2657)"
				h="100%"
			>
				<Text color="headerText" mt="1rem" ml="1rem">
					saqib ali wahla
				</Text>
				<Box display="flex" justifyContent="right" w="100%">
					<Button colorScheme="blue" borderRadius="none" right="0">
						JOIN NOW
					</Button>
				</Box>
			</Box>
		</Flex>
        
          
        </Box>
      </Box> 
    )
}
export default HotEventCarousel;
