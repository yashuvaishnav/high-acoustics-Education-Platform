import { Box, Flex, Heading,Text,Grid } from '@chakra-ui/react'
import React from 'react'

function Review() {
  return (
    <Grid width={"80%"} templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'}} gap="7rem" margin={"auto"} justifyContent={"space-between"} mt={"5rem"} mb={"5rem"} pl={"5rem"}>
        <Flex justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading as={"h1"} size={"2xl"} fontWeight={"bold"}>4.5</Heading>
            <Text fontSize={".8rem"} display={"inline"}>80k Reviews</Text>
            </Box>
            <Box>
            <Flex border={"3px solid #faebd9"} height={"2.5rem"} width={"0px"} display={"inline"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} ml={"6.3rem"}></Flex>
            </Box>
        </Flex>
        <Flex  justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading as={"h1"} size={"2xl"} fontWeight={"bold"}>30M</Heading>
            <Text fontSize={".8rem"} display={"inline"}>Enrollments</Text>
            </Box>
            <Box>
            <Flex border={"3px solid #faebd9"} height={"2.5rem"} width={"0px"} display={"inline"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} ml={"6.3rem"}></Flex>
            </Box>
        </Flex>
        <Flex  justifyContent={"space-between"} align={"center"} >
            <Box>
            <Heading as={"h1"} size={"2xl"} fontWeight={"bold"}>2M+</Heading>
            <Text fontSize={".8rem"} display={"inline"}>Learners</Text>
            </Box>
            <Box>
            <Flex border={"3px solid #faebd9"} height={"2.5rem"} width={"0px"} display={"inline"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} ml={"6.3rem"}></Flex>
            </Box>
        </Flex>
        <Flex  justifyContent={"space-between"} align={"center"}  >
            <Box>
            <Heading as={"h1"} size={"2xl"} fontWeight={"bold"}>1K+</Heading>
            <Text fontSize={".8rem"} display={"inline"}>Popular Courses</Text>
            </Box>
        </Flex>
    </Grid>

  )
}

export default Review