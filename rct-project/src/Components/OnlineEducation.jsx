import { Box, Flex, Text, Image, Button,Heading} from '@chakra-ui/react'
import React from 'react'

function OnlineEducation() {
  return (
    <Box bg={"#ffebb8"} justifyContent={"space-between"} p={"6.2rem"} display={{base:"block",sm:"block",lg:"flex"}}>
        <Box width={"45%"}>
            <Image src="https://www.pinclipart.com/picdir/big/520-5208775_education-learning-png-clipart-student-writing-png-transparent.png" width={"100%"} />
        </Box>
        <Box width={"45%"}>
            <Heading as={"h1"} size={'3xl'} lineHeight={1} mb={"1rem"} fontWeight={"semibold"}>We Provide</Heading>
                <Flex align={"center"}><Button bg={"#ffc87c"} color={"black.700"} pt={"2rem"} pb={"2.5rem"} borderRadius={50} fontSize={60} border={"1px solid black"} mr={".6rem"}><i>Smart</i></Button><Heading as={"h1"} size={'3xl'} fontWeight={"semibold"}>Online</Heading></Flex>
                <Heading as={"h1"} size={'3xl'} fontWeight={"semibold"}>Education</Heading>
            
            <Text fontSize={"1.2rem"} width={"80%"} mt={"2rem"} color={'#657165'}>
                Our Courses Come With Assigned Project, Direct Interactions With Mentors, Relevant Resourses, And Tools That Help You Dive Into In-Depth Learning From Anywhere.
            </Text >
        </Box>
    </Box>
  )
}

export default OnlineEducation