import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BiCopyright } from "react-icons/bi"
import { MdSchool } from "react-icons/md"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Box background={"#242124"} width={"85%"} m={"auto"} p={"2.5rem"} color={"white"} borderTopRightRadius={"50px"} borderTopLeftRadius={"3.1rem"}>
      <Flex  justifyContent={"space-between"} mb={"3.8rem"}>
        <Box>
        <Flex alignItems={"center"}><MdSchool style={{width:"6.2rem",height:"3.1rem",display:"inline"}}/><Text display={"inline"}>AcademiaIQ</Text></Flex><br />
        <Text>Speed up the skill acquisite process by <br />finding unlimited courses that matches your <br />niche.</Text>
        </Box>
        <Box display={{base:"block",sm:"block",lg:"flex"}} width={"50%"} justifyContent={"space-between"} >
        <Box fontSize={"19px"}>
            <Text mb={"1.5rem"}><b>Company</b></Text>
            <Text mb={"1rem"}>About Us</Text>
            <Text mb={"1rem"}>Careers</Text>
            <Text mb={"1rem"}>Press Kit</Text>
        </Box>
        <Box fontSize={"19px"}>
            <Text mb={"1.5rem"}><b>Resources</b></Text>
            <Text mb={"1rem"}><Link to={"/blog"}>Blog</Link></Text>
            <Text mb={"1rem"}>Help Center</Text>
            <Text mb={"1rem"}>Ux Research Guide</Text>
        </Box>
        <Box fontSize={"19px"}>
            <Text mb={"1.5rem"}><b>Product</b></Text>
            <Text mb={"1rem"}>Pricing</Text>
            <Text mb={"1rem"}>Enterprise</Text>
            <Text mb={"1rem"}>Integrate</Text>
        </Box>
        </Box>
    </Flex>
    <Flex justifyContent={"space-between"}>
      <Flex justifyContent={"center"} alignItems={"center"}><BiCopyright /><Text ml={"5px"}>Musemind  2023  | All right reserved</Text></Flex>
      <Text>Term & Privarcy Policy</Text>
    </Flex>
    </Box>
  )
}

export default Footer
