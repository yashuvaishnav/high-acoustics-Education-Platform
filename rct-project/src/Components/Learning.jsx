import { Box, Button, Flex, Heading, Text,Image } from '@chakra-ui/react'
import React from 'react'
import { VscVerified } from "react-icons/vsc"
 
function Learning() {
  return (
    <Flex justifyContent={"space-between"} w={"95%"} m={"auto"} p="120px">
        <Box >
            <Heading as={"h1"} size={"3xl"} mb={"20px"}>Its easy to start</Heading>
            <Button bg={"#ffc87c"} color={"#242124"} h={"80px"} w={"250px"} borderRadius={50} fontSize={55} pb={"7px"} ml={"5px"} border={"2px solid #242124"}><i>Learning</i></Button><br /><br />
            <Text color={"gray.600"} ml={"10px"} fontSize={"18px"} mb={"50px"}>Our Sing-In Process Lets You Start Your Learning Journey <br /> Without Much Hassle. Our Air Is To Create A Great Learning <br /> Experience For You.</Text>
            <Flex p={"5px"} mb={"8px"}>
            <VscVerified style={{color:'#ffc87c', width:"30px", height:"30px"}} />
            <Text pl="10px" fontSize={"20px"}><b>Create Account</b></Text>
            </Flex>
            <Flex p={"5px"} mb={"8px"}>
            <VscVerified style={{color:'#ffc87c', width:"30px", height:"30px"}} />
            <Text pl="10px" fontSize={"20px"}><b>Create Account</b></Text>
            </Flex>
            <Flex p={"5px"} mb={"8px"}>
            <VscVerified style={{color:'#ffc87c', width:"30px", height:"30px"}} />
            <Text pl="10px" fontSize={"20px"}><b>Create Account</b></Text>
            </Flex>
        </Box>
        <Box>
       <Image src='https://cdni.iconscout.com/illustration/premium/thumb/online-dating-service-online-chatting-concept-2549116-2139478.png' h={"450px"} w={"600px"}/>
    </Box>
    </Flex>
  )
}

export default Learning