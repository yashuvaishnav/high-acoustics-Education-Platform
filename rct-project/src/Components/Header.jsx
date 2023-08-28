import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function Header() {
  const navigate = useNavigate()
  const handleEnrollNow = () => {
    navigate("/login")
  }
  return (
    <Box bg={"#ffc87c"} pt={"3.8rem"}>
      <Box display={{base:"block", sm:"block", lg:"flex"}} justifyContent={"space-around"} >
        <Box>
        <Text fontSize={"5rem"} lineHeight="1.1" fontWeight={"semibold"} >Improve your</Text>
          <Flex align={"center"}>
          <Button  bg={"blackAlpha.800"} color={"#ffc87c"} pt={{base:'1.5rem',sm:"2rem",lg:"2.7rem"}} pb={"50px"} borderRadius={50} fontSize="5rem" fontStyle="italic" fontWeight={"semibold"} mr={".8rem"}>Skills</Button>
          <Text fontSize={"5rem"} fontWeight={"semibold"}>Faster</Text>
          </Flex>
        </Box>
        <Text
          w="27%"
          mt="2%"
          lineHeight="1.7rem"
          fontSize="1.3rem"
          fontWeight="450"
          fontFamily="sans-serif"
        >
          Speed Up The Skill Acquisition Process By Finding Unlimited Courses
          That Matches Your Niche. <br />{" "}
          <Button
            bg={"#ffc87c"}
            border={"2px solid black"}
            borderRadius={50}
            fontWeight="bold"
            mt="1.9rem"
            fontSize="1.2rem"
            p='1.9rem 2.5rem'
            mb={"5rem"}
            onClick={handleEnrollNow}
          >
            Enroll Now <FiArrowUpRight style={{ marginLeft: "5px" }} />
          </Button>
        </Text>
      </Box>
      <Image
        src="https://webstockreview.net/images/clipart-computer-computer-programming-6.png"
        width={"50%"}
        height={"40%"}
        margin={"auto"}
      />
    </Box>
  );
}

export default Header;
