import React ,{useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
// import Slide from "../ui/hotEventCard";
const HotEventCarousel = ({ data }) => {
	const [event, setEvent] = useState(data[0]);
	const slickSettings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		arrows: false,
		afterChange: (current,next) =>
        setEvent(data[current]),
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 993,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
				dots: false
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			  }
			}
		  ]
	};
	return (
		<Box w="100%">
			<Box 
				sx={{
					".slick-dots": {
						transform: "translateY(-4em)",
						marginLeft: "400px",
						display: "flex",
						gap: "10px",
					},
					".slick-dots li button": {
						_before: {
							transition: "0.1s",
							content: "''",
							width: "20px",
							height: "5px",
							marginRight: "20px",
							borderRadius: "none%",
							background: "headerText",
						},
					},
					
				}}
			>
				<Flex h="150px">
					<Box  w={{lg:"50%", md:"100%", sm:"100%"}} h="100%">
						<Slider {...slickSettings}>
							{data.map((slide) => {
								return (
									<React.Fragment>
										<Image
											src={slide.image}
											alt="Dan Abramov"
											w="100%"
											h="150px"
										/>
									</React.Fragment>
								);
							})}
						</Slider>
					</Box>
					<Box
						display={{lg:"flex",md:"none",sm:"none"}}
						flexDirection="column"
						justifyContent="space-between"
						w={{lg:"50%", md:"100%", sm:"100%"}}
						bg="var(--bg-color-8,#1d2657)"
						h="100%"
					>
						<Text color="headerText" mt="1rem" ml="1rem" fontSize="14px">
							{event?.title}
						</Text>
						<Box display="flex" justifyContent="right" w="100%">
							<Button
								colorScheme="blue"
								borderRadius="none"
								right="0"
							>
								JOIN NOW
							</Button>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};
export default HotEventCarousel;
