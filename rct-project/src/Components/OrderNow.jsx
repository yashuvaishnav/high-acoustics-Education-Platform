import { Box, Flex, Heading, Text,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

function OrderNow() {
  return (
    <>
    
    <Box display={{base:"block",sm:"block",lg:"flex"}} background={"#ffc87c"} w={"80%"} m={"auto"} borderRadius={"2.5rem"}>
        <Box>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/female-teacher-1792777-1519332.png" h={"100%"}/>
        </Box>
        <Box mr={"50px"}>
            <Heading as={"h1"} size={"2xl"} pt={"6.2rem"} mb={"3.1rem"} fontWeight={"semibold"}>
                Get <i>Ready</i> to Started
            </Heading>
            <Text fontSize={"1.2rem"} >
                After A Good Dinner One Can Forgive Anybody, <br />
                Even One's Own Relations.
            </Text>
            <Button mt={"1.9rem"} bg={"#242124"} color={"#ffc87c"} borderRadius={"1.9rem"} padding={"1.5rem"} height={"3.8rem"} fontSize={"1.2rem"}>Order Now<FiArrowUpRight style={{marginLeft:"3px"}}/></Button>    
        </Box>
    </Box>
  
    </>
  )
}

export default OrderNow