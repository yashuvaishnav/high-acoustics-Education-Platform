import { Box, Flex, Text, Image, Button,Heading} from '@chakra-ui/react'
import React from 'react'

function OnlineEducation() {
  return (
    <Flex bg={"#ffebb8"} justifyContent={"space-around"} p={"100px"} >
        <Box>
            <Image src="https://www.pinclipart.com/picdir/big/520-5208775_education-learning-png-clipart-student-writing-png-transparent.png" width={"550px"} height={"350px"} />
        </Box>
        <Box>
            <Heading as={"h1"} size={'3xl'} lineHeight={1} mb={"15px"} fontWeight={"semibold"}>We Provide</Heading>
                <Flex align={"center"}><Button bg={"#ffc87c"} color={"black.700"} pt={"30px"} pb={"40px"} borderRadius={50} fontSize={60} border={"1px solid black"} mr={"10px"}><i>Smart</i></Button><Heading as={"h1"} size={'3xl'} fontWeight={"semibold"}>Online</Heading></Flex>
                <Heading as={"h1"} size={'3xl'} fontWeight={"semibold"}>Education</Heading>
            
            <Text fontSize={"19px"} width={"360px"} mt={"30px"} color={'#657165'}>
                Our Courses Come With Assigned Project, Direct Interactions With Mentors, Relevant Resourses, And Tools That Help You Dive Into In-Depth Learning From Anywhere.
            </Text >
        </Box>
    </Flex>
  )
}

export default OnlineEducation