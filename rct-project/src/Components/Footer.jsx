import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BiCopyright } from "react-icons/bi"
import { MdSchool } from "react-icons/md"

function Footer() {
  return (
    <Box background={"#242124"} width={"85%"} m={"auto"} p={"40px"} color={"white"} borderTopRightRadius={"50px"} borderTopLeftRadius={"50px"}>
      <Flex  justifyContent={"space-between"} mb={"60px"}>
        <Box>
        <Flex alignItems={"center"}><MdSchool style={{width:"100px",height:"50px",display:"inline"}}/><Text display={"inline"}>YÄSĦU</Text></Flex><br />
        <Text>Speed up the skill acquisite process by <br />finding unlimited courses that matches your <br />niche.</Text>
        </Box>
        <Flex width={"50%"} justifyContent={"space-between"}>
        <Box fontSize={"19px"}>
            <Text mb={"25px"}><b>Company</b></Text>
            <Text mb={"15px"}>About Us</Text>
            <Text mb={"15px"}>Careers</Text>
            <Text mb={"15px"}>Press Kit</Text>
        </Box>
        <Box fontSize={"19px"}>
            <Text mb={"25px"}><b>Resources</b></Text>
            <Text mb={"15px"}>Blog</Text>
            <Text mb={"15px"}>Help Center</Text>
            <Text mb={"15px"}>Ux Research Guide</Text>
        </Box>
        <Box fontSize={"19px"}>
            <Text mb={"25px"}><b>Product</b></Text>
            <Text mb={"15px"}>Pricing</Text>
            <Text mb={"15px"}>Enterprise</Text>
            <Text mb={"15px"}>Integrate</Text>
        </Box>
        </Flex>
    </Flex>
    <Flex justifyContent={"space-between"}>
      <Flex justifyContent={"center"} alignItems={"center"}><BiCopyright /><Text ml={"5px"}>Musemind  2023  | All right reserved</Text></Flex>
      <Text>Term & Privarcy Policy</Text>
    </Flex>
    </Box>
  )
}

export default Footer