import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { FiArrowUpRight } from "react-icons/fi";

function Header() {
  return (
    <Box bg={"#ffc87c"}>
      <Navbar />
      
      <Flex justifyContent={"space-around"}>
        <Box>
        <Text fontSize={"80px"} lineHeight="1.1" fontWeight={"semibold"}>Improve your</Text>
          <Flex align={"center"}>
          <Button  bg={"blackAlpha.800"} color={"#ffc87c"} pt={"40px"} pb={"50px"} borderRadius={50} fontSize={80} fontStyle="italic" fontWeight={"semibold"} mr={"12px"}>Skills</Button>
          <Text fontSize={"80px"} fontWeight={"semibold"}>Faster</Text>
          </Flex>
        </Box>
          
        
        <Text
          w="400px"
          mt="2%"
          lineHeight="28px"
          fontSize="20px"
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
            mt="30px"
            fontSize="20px"
            p='30px 40px'
            mb={"80px"}
          >
            Enroll Now <FiArrowUpRight style={{ marginLeft: "5px" }} />
          </Button>
        </Text>
      </Flex>
      <Image
        src="https://webstockreview.net/images/clipart-computer-computer-programming-6.png"
        width={"626px"}
        height={"400px"}
        margin={"auto"}
      />
    </Box>
  );
}

export default Header;
