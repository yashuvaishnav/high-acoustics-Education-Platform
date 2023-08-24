import { Box, Flex, Grid, Text,GridItem,Button } from '@chakra-ui/react'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

function SpecialFeature() {
  return (
    
    <Grid h='550px' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap={9} width={"80%"}margin={"auto"}>
    
  <GridItem rowSpan={1} colSpan={2} bg='#242124' borderRadius={"17px"}>
    <Text pl={"0px"} m={"0px"} fontSize='4xl' color={"#fff"}>Our <Text color={"#ffe5b4"} display={"inline"}><i>Features</i></Text></Text>
    <Text fontSize='4xl' color={"#fff"}>Special For you</Text><br /><br /><Button bg={"#ffc87c"} borderRadius={"30px"} padding={"19px"} height={"43px"}>See All Features<FiArrowUpRight style={{marginLeft:"3px"}}/></Button>    
    </GridItem>
  <GridItem colSpan={1} bg='papayawhip'></GridItem>
  <GridItem colSpan={1} bg='papayawhip'></GridItem>
  <GridItem colSpan={1} bg='tomato'></GridItem>
  <GridItem colSpan={1} bg='gray'></GridItem>
</Grid>
  )
}


export default SpecialFeature





