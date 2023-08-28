import { Box, Button, Flex, Heading, Text,Image } from '@chakra-ui/react'
import React from 'react'
import { VscVerified } from "react-icons/vsc"
 
function Learning() {
  return (
    <Box display={{base:"block",sm:"block",lg:"flex"}} justifyContent={"space-between"} w={"95%"} m={"auto"} pt="8%" pl="8%" pr="8%">
        <Box >
            <Heading as={"h1"} size={"3xl"} mb={"1.2rem"}>Its easy to start</Heading>
            <Button bg={"#ffc87c"} color={"#242124"} h={"5rem"} w={"16rem"} borderRadius={50} fontSize={55} pb={".5rem"} ml={".4rem"} border={"2px solid #242124"}><i>Learning</i></Button><br /><br />
            <Text color={"gray.600"} ml={".6rem"} fontSize={"1.2rem"} mb={"3.1rem"}>Our Sing-In Process Lets You Start Your Learning Journey <br /> Without Much Hassle. Our Air Is To Create A Great Learning <br /> Experience For You.</Text>
            <Flex p={".4rem"} mb={".5rem"}>
            <VscVerified style={{color:'#ffc87c', width:"1.9rem", height:"1.9rem"}} />
            <Text pl=".6rem" fontSize={"1.2rem"}><b>Create Account</b></Text>
            </Flex>
            <Flex p={".4rem"} mb={".5rem"}>
            <VscVerified style={{color:'#ffc87c', width:"1.9rem", height:"1.9rem"}} />
            <Text pl=".6rem" fontSize={"1.2rem"}><b>Create Account</b></Text>
            </Flex>
            <Flex p={".4rem"} mb={".5rem"}>
            <VscVerified style={{color:'#ffc87c', width:"1.9rem", height:"1.9rem"}} />
            <Text pl=".6" fontSize={"1.2rem"}><b>Create Account</b></Text>
            </Flex>
        </Box>
        <Box>
       <Image src='https://cdni.iconscout.com/illustration/premium/thumb/online-dating-service-online-chatting-concept-2549116-2139478.png' h={"90%"} w={"100%"}/>
    </Box>
    </Box>
  )
}

export default Learning