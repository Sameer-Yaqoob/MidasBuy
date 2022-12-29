import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Button } from "@chakra-ui/react";
import Slide from "../ui/hotEventCard";
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
              transform: "translateY(-4em)"
            },
            ".slick-dots li button": {
                _before: {
                  transition: "0.1s",
                  content: "''",
                  width:"10px",
                  height:"10px",
                  borderRadius: "100%",
                  background: "headerText"
                }
              },
          }}
        >
          <Slider {...slickSettings}>
          <Slide image="https://wallpaperaccess.com/full/825336.jpg" text="Follow Midasbuy TikTok to win $9.99 UC!"/> 
          <Slide image="https://wallpaperaccess.com/full/825336.jpg" text="Buy Monthly Pass directly on Midasbuy!"/>
          <Slide image="https://wallpaperaccess.com/full/825336.jpg" text="Buy Monthly Pass directly on Midasbuy!"/>
          </Slider>
          
        </Box>
      </Box> 
    )
}
export default HotEventCarousel;
