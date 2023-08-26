import { Box, GridItem, Heading,Grid,Text,Flex,Image } from '@chakra-ui/react'
import React from 'react'
import { blogData } from '../constent'

function Blog() {
  return (
  
    <Box pt={"50px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} w={"80%"} m={"auto"}>
        {
          blogData.map((item)=>(
            <GridItem w="100%" bg={"white"} borderRadius="20px" boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}>
              <Flex>
              <Image src={item.avatar} w={"100%"} borderTopRightRadius={"20px"} borderTopLeftRadius={"20px"} mb={"25px"}/>
              
              </Flex>
              <Text p={"15px"} color={"gray.500"} fontWeight={"semibold"}>{item.text}</Text>
              <Heading pl={"15px"} pb={"15px"} pr={"15px"}  as={"h3"} size={"lg"}>
                {item.description}
              </Heading>

              <Text pl={"15px"} pb={"15px"} pr={"15px"}>{item.paragraph}</Text>
              <Text pl={"15px"} pb={"15px"} pr={"15px"} color={"gray.500"}>jun 30, 2023 - 3 min read</Text>
            </GridItem>
          ))
        }
      </Grid>
    </Box>
  )
}

export  { Blog }