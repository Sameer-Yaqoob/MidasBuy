import { Box, HStack, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Slide = () => {
  return (
    <HStack
      w="100%"
    
      h="300px"
      bg="header"
      alignContent="center"
      justifyContent="center"
    >
      <Image  src="https://wallpaperaccess.com/full/825336.jpg" boxSize="100%"  objectFit='cover' alt="img" />
    </HStack>
  );
};

const Carousel = ()=> {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1
  };
  return (
      <Box >
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(-4em)"
            },
            ".slick-dots li button": {
                
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "headerText"
              }
            },
            ".slick-arrow": {
              _before: {
                transition: "0.2s"
              }
            },
            ".slick-prev": {
              left: "0px",
              zIndex:1,
            //   _before: {
            //     content: '"◀"'
            //   }
            },
            ".slick-next": {
              right: "0px", 
            //   _before: {
            //     content: '"▶"'
            //   }
            }
          }}
        >
          <Slider {...slickSettings}>
            <Slide />
            <Slide/>
            <Slide />
            <Slide />
            <Slide />
          </Slider>
        </Box>
      </Box>
  );
}
export default Carousel;
