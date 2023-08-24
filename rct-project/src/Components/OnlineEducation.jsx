import { Box, Flex, Heading, Text, Image, Button} from '@chakra-ui/react'
import React from 'react'

function OnlineEducation() {
  return (
    <Flex bg={"#fdf5e6"} justifyContent={"space-around"} p={"100px"} mb={"100px"}>
        <Box>
            <Image src="https://www.pinclipart.com/picdir/big/520-5208775_education-learning-png-clipart-student-writing-png-transparent.png" width={"550px"} height={"350px"} />
        </Box>
        <Box>
            <Text fontSize='5xl' lineHeight={1} mb={"80px"}>
                We Provide <br />
                <Button bg={"#ffc87c"} color={"black.700"} height={"58px"} width={"150px"} borderRadius={50} fontSize={45} ml={-37} mt={3} border={"1px solid black"}><i>Smart</i></Button>Smart <br />Education
            </Text>
            <Text width={"300px"} lineHeight={1.2}>
                Our Courses Come With Assigned Project, Direct Interactions With Mentors, Relevant Resourses, And Tools That Help You Dive Into In-Depth Learning From Anywhere.
            </Text >
        </Box>
    </Flex>
  )
}

export default OnlineEducation