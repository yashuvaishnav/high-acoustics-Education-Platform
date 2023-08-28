import { Box, Flex, Grid, Text,GridItem,Button,Heading } from '@chakra-ui/react'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"
import { PiCertificateBold } from "react-icons/pi"
import { GiTeacher } from "react-icons/gi"
import { FcOnlineSupport } from "react-icons/fc"
import { MdOndemandVideo } from "react-icons/md"

function SpecialFeature() {
  return (
    <Box bg={"#fffffa"} pt={"9.7rem"} pb={"9.7rem"}>
      <Grid templateRows={{base:'repeat(3, 1fr)',sm:'repeat(3, 1fr)',lg:'repeat(2, 1fr)'}} templateColumns={{base:'repeat(2, 1fr)',sm:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={12} width={"80%"}margin={"auto"} >
    
    <GridItem rowSpan={1} colSpan={2} bg='#242124' borderRadius={"19px"} border={"1px solid black"} p="3rem" >
      <Flex lineHeight="1" align={"center"}>
      <Text pr={"15px"} fontWeight={"semibold"} fontSize='6xl' color={"#fff"}>Our</Text>
      <Text fontSize='5xl' fontWeight={"semibold"} color={"#ffe5b4"} display={"inline"}><i>Features</i></Text>
      </Flex>
      <Text fontSize='5xl' fontWeight={"semibold"} color={"#fff"} mb={"50px"}>Special For you</Text><Button bg={"#ffc87c"} borderRadius={"30px"} p={"30px"}  height={"43px"} fontWeight={"semibold"} fontSize={"20"}>See All Features<FiArrowUpRight style={{marginLeft:"3px"}}/></Button>    
      </GridItem>
      
    <GridItem colSpan={1} p={"40px"} borderRadius={"13px"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} bg={"white"}>
      <PiCertificateBold style={{height:"80px",width:"80px",marginBottom:"35px"}} />
      <Heading as='h2' size='lg' mb={"20px"}>Get Certificate</Heading>
      <Text fontSize={"18px"}>Add Value To Your Certificates And <br /> Increase Your Chances Of Getting <br /> Hired In Your Dream Job.</Text>
    </GridItem>
    <GridItem colSpan={1} bg={"white"} p={"40px"} borderRadius={"13px"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}><GiTeacher style={{height:"80px",width:"80px",marginBottom:"35px"}} />
    <Heading as='h3' size='lg' mb={"20px"}>Amazing Instructor</Heading>
      <Text fontSize={"18px"}>Our Amazing Instructor Bring <br /> Experience, Knowledge And Fun <br /> On The Table</Text>
      </GridItem>
  
    <GridItem colSpan={1} bg='white' p={"40px"} borderRadius={"13px"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}>
      <FcOnlineSupport style={{height:"80px",width:"80px",marginBottom:"35px"}}/>
      <Heading as='h3' size='lg' mb={"20px"}>Life Time Support</Heading>
      <Text fontSize={"18px"}>You Will Have Life Times Access <br /> Of The Courses & Resources. Also <br /> Contacting Instructors Any Time!</Text>
      </GridItem>
    <GridItem colSpan={1} bg='white' borderRadius={"13px"} p={"40px"}boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}>
      <MdOndemandVideo style={{height:"80px",width:"80px",marginBottom:"35px"}} />
      <Heading as='h3' size='lg' mb={"20px"}>Video Lesson</Heading>
      <Text fontSize={"18px"}>Recorded Version Of Lectures <br /> From Professional Instrutions <br /> To Boost Your Growth.</Text>
    </GridItem>
  </Grid>
    </Box>
  )
}


export default SpecialFeature





