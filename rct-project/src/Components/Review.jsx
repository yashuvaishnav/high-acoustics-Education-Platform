import { Box, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'

function Review() {
  return (
    <Flex width={"80%"} margin={"auto"} justifyContent={"space-between"} mt={"80px"} mb={"80px"} pl={"120px"}>
        <Flex width={"16%"} justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading>4.5</Heading>
            <Text fontSize={"12px"} display={"inline"}>80k Reviews</Text>
            </Box>
            <Box>
            <Flex border={"3px solid #faebd9"} height={"40px"} width={"0px"} display={"inline"} alignItems={"center"} justifyContent={"center"} alignContent={"center"}></Flex>
            </Box>
        </Flex>
        <Flex width={"16%"} justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading>30M</Heading>
            <Text fontSize={"12px"} display={"inline"}>Enrollments</Text>
            </Box>
            <Box>
            <Flex border={"3px solid #faebd9"} height={"40px"} width={"0px"} display={"inline"} alignItems={"center"} justifyContent={"center"} alignContent={"center"}></Flex>
            </Box>
        </Flex>
        <Flex width={"16%"} justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading>2M+</Heading>
            <Text fontSize={"12px"} display={"inline"}>Learners</Text>
            </Box>
            <Box>
            <Flex border={"3px solid #faebd9"} height={"40px"} width={"0px"} display={"inline"} alignItems={"center"} justifyContent={"center"} alignContent={"center"}></Flex>
            </Box>
        </Flex>
        <Flex width={"16%"} justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading>1K+</Heading>
            <Text fontSize={"12px"} display={"inline"}>Popular Courses</Text>
            </Box>
        </Flex>
    </Flex>

  )
}

export default Review