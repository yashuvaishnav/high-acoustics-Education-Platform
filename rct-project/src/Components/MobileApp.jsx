import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'

function MobileApp() {
  return (
    <Box background={"#ffebb8"} textAlign={"center"} pt={"120px"}>
        <Heading as={"h1"} size={"3xl"} fontWeight={"semibold"}>
            Try Learning Free
        </Heading>
        <Box display={"flex"} width={"30%"} m={"auto"} mt={"15px"}>
            <Heading as={"h1"} size={"3xl"} fontWeight={"semibold"}>on</Heading><Button bg={"#ffc87c"} color={"#242124"} pt={"35px"} pb={"45px"} borderRadius={50} fontSize={55} ml={"5px"} border={"2px solid #242124"}><i>Mobile App</i></Button>
        </Box>
            <Flex justifyContent={"center"} mt={"30px"} pb={"120px"}>
                <Image src="https://www.pngmart.com/files/10/Google-Play-App-Store-PNG-Transparent-Image.png" w={"400px"} h={"70px"}/>
            </Flex>
            <Footer />
    </Box>
  )
}

export default MobileApp