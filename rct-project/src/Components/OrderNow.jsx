import { Box, Flex, Heading, Text,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

function OrderNow() {
  return (
    <Flex background={"#ffc87c"} w={"80%"} m={"auto"} borderRadius={"40px"}>
        <Box>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/female-teacher-1792777-1519332.png" h={"400px"}/>
        </Box>
        <Box mr={"50px"}>
            <Heading as={"h1"} size={"2xl"} pt={"100px"} mb={"50px"} fontWeight={"semibold"}>
                Get <i>Ready</i> to Started
            </Heading>
            <Text fontSize={"19px"} >
                After A Good Dinner One Can Forgive Anybody, <br />
                Even One's Own Relations.
            </Text><br /><br />
            <Button bg={"#242124"} color={"#ffc87c"} borderRadius={"30px"} padding={"24px"} height={"60px"} fontSize={"20px"}>Order Now<FiArrowUpRight style={{marginLeft:"3px"}}/></Button>    
        </Box>
    </Flex>
  )
}

export default OrderNow