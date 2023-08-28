import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import OrderNow from './OrderNow'

function MobileApp() {
  return (
    <>
    <Box position="relative" top="9.2rem" zIndex={999} >
      <OrderNow/>
    </Box>
    
    <Box w="100%" background={"#ffebb8"} textAlign={"center"} pt={"16rem"} position="absolute">
        <Heading as={"h1"} size={"3xl"} fontWeight={"semibold"}>
            Try Learning Free
        </Heading>
        <Box display={"flex"} width={"30%"} m={"auto"} mt={"1rem"}>
            <Heading as={"h1"} size={"3xl"} fontWeight={"semibold"}>on</Heading><Button bg={"#ffc87c"} color={"#242124"} pt={"2.2rem"} pb={"2.8rem"} borderRadius={50} fontSize={55} ml={"5px"} border={"2px solid #242124"}><i>Mobile App</i></Button>
        </Box>
            <Flex justifyContent={"center"} mt={"1.8rem"} pb={"7.5rem"}>
                <Image src="https://www.pngmart.com/files/10/Google-Play-App-Store-PNG-Transparent-Image.png" w={"30%"} h={"70px"}/>
            </Flex>
            <Footer />
    </Box>
    </>
  )
}

export default MobileApp