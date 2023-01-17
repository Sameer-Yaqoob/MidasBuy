import { Box, HStack, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Slide = ({image}) => {
  return (
    <HStack
      w="100%"
    
      h="300px"
      bg="header"
      alignContent="center"
      justifyContent="center"
    >
      <Image  src={image} boxSize="100%"  objectFit='cover' alt="img" />
    </HStack>
  );
};

const CustomiseCarousel = ({images})=> {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    nextArrow: <Image src="/images/arrow-right.png"/>,
    prevArrow: <Image src="/images/arrow-left.png" />
  };
  console.log('images', images);
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
              left: "300px",
              height:"40px",
              zIndex:1,
            //   _before: {
            //     content: '"◀"'
            //   }
            },
            ".slick-next": {
              right: "300px",
              height:"40px", 
              zIndex:1,
            //   _before: {
            //     content: '"▶"'
            //   }
            }
          }}
        >
          <Slider {...slickSettings}>
            {
               images.map((image)=> {
                  return (<Slide image={image} />)
                })
            }
          </Slider>
        </Box>
      </Box>
  );
}
export default CustomiseCarousel;
