import { Box, Heading,Button,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from "./Navbar";
import {FiArrowUpRight} from "react-icons/fi"

function Header() {
  return (
    <Box bg={"#ffc87c"}>
        <Navbar />
        <br /><br /><br />
        <Flex justifyContent={"space-around"}>
          <Heading as='h2' size='2xl'>
            Improve your
            <br />
            <Button bg={"blackAlpha.800"} color={"#ffc87c"} height={"58px"} width={"130px"} borderRadius={50} fontSize={45} ml={-37} mt={3}><i>Skills</i></Button>Faster
          </Heading>
          <Text width={300} lineHeight={1.1} mb={20}>Speed Up The Skill Acquisition Process By Finding Unlimited Courses That Matches Your Niche. <br /> <Button bg={"#ffc87c"} border={"2px solid black"} borderRadius={50} ml={0}>Enroll Now <FiArrowUpRight style={{marginLeft:"5px"}}/></Button></Text>
        </Flex>
          <Image src="https://webstockreview.net/images/clipart-computer-computer-programming-6.png" width={"626px"} height={"400px"} margin={"auto"}/>
    </Box>
  )
}

export default Header