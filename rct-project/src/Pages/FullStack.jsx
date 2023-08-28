
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Grid,
    GridItem,
  } from "@chakra-ui/react";
  import React from "react";
//   import Navbar from "../Components/Navbar"
  import Footer from "../Components/Footer"
  import { MdComputer } from "react-icons/md";
  import { LiaCalendarTimesSolid,LiaInternetExplorer } from "react-icons/lia";
  import { MdAccessTime } from "react-icons/md";
  import { BsPersonVideo2,BsFillPersonFill,BsPersonVcardFill,BsPersonCheckFill } from "react-icons/bs"
  import  { GiSkills }  from "react-icons/gi"
  import { TbScoreboard } from "react-icons/tb"
  import { LuVerified } from "react-icons/lu"
  import { BiVideo } from "react-icons/bi"

function FullStack() {
    return (
        <Box>
         {/* <Navbar /> */}
          <Box bg={"#ffe4b5"}>
          <Box textAlign={"center"} pt={"20px"}>
            <Heading pt={"30px"} pb={"10px"}>
              Become a Full Stack Development
            </Heading>
            <Flex
              align={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={"15px"}
            >
              <Heading color={"teal"} fontWeight={"semibold"} as={"h3"} size={"lg"}>
                {"("} Fast Track Learning Course {")"}
              </Heading>
              <Button
                borderRadius={"50px"}
                ml={"10px"}
                pt={"10px"}
                pb={"10px"}
                pl={"5px"}
                pr={"5px"}
                bg={"white"}
                size="xs"
              >
                PART TIME
              </Button>
            </Flex>
            <Text w={"34%"} m={"auto"} fontSize={"18px"} >
              Become a job-ready Full Stack Development in 35 weeks. Learn at ₹0 upfront fee.
              pay after placement.
            </Text>
          </Box>
    
          <Box mt={"50px"} mb={"40px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            w={"70%"}
            margin={"auto"}
            
          >
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex align={"center"}>
                <MdComputer style={{ width: "25", height: "35px",color:"teal" }} />
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"}>
                  Batch Starting
                </Heading>
              </Flex>
              <Text fontSize={"15px"} ml={"35px"}>Addmission starting soon</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"}>
              <Flex align={"center"}>
                <LiaCalendarTimesSolid style={{ width: "25", height: "35px",color:"teal" }} />
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"}>
                  Duration
                </Heading>
              </Flex>
              <Text fontSize={"15px"}  ml={"35px"}>
                35 weeks {"("} 8 months {")"}
              </Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"}>
              <Flex align={"center"}>
                <MdAccessTime style={{ width: "25", height: "35px",color:"teal" }} />
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"}>
                  Timings
                </Heading>
              </Flex>
              <Text fontSize={"15px"}  ml={"35px"}>
                11 am - 11 pm {"("} Mon - Fri {")"}
              </Text>
              
            </GridItem>
          </Grid>
          </Box>
          <Box width={"40%"} margin={"auto"} pb={"30px"}>
          <Heading textAlign={"center"} p={"10px"}>Minimum Criteria</Heading>
          <Text textAlign={"center"} mb={"20px"} pb={"0px"}>You Should meet the following requirements to be eligible for this course.</Text>
          </Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            w={"70%"}
            margin={"auto"}
          >
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <BsPersonVideo2 style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"} textAlign={"center"} pb={"10px"}>
                  Qualification
                </Heading>
              <Text fontSize={"15px"} textAlign={"center"}>Final Year Students pr Worling Professionals</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <BsFillPersonFill style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"} textAlign={"center"} pb={"10px"}>
                  Age
                </Heading>
              <Text fontSize={"15px"} textAlign={"center"}>Upto 18 years</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <BsPersonVcardFill style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"} textAlign={"center"} pb={"10px"}>
                  ID
                </Heading>
              <Text fontSize={"15px"} textAlign={"center"}>Valid Aadhaar Card</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <LiaInternetExplorer style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"} textAlign={"center"} pb={"10px"}>
                  Internet
                </Heading>
              <Text fontSize={"15px"} textAlign={"center"}>A Desktop or laptop with an uninterrupted service connection.</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <GiSkills style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"} textAlign={"center"} pb={"10px"}>
                  Communication Skill
                </Heading>
              <Text fontSize={"15px"} textAlign={"center"}>Basic English - speaking reading and writing</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <TbScoreboard style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
                <Heading fontSize={"24px"} ml={"10px"} color={"teal"} textAlign={"center"} pb={"10px"}>
                  CIBIL Score
                </Heading>
              <Text fontSize={"15px"} textAlign={"center"}>650+</Text>
            </GridItem>
          </Grid>
          <Box m={"70px"}>
            <Heading textAlign={"center"}>Addmission Process</Heading>
          </Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={5} w={"70%"} margin={"auto"} pb="70px" >
          <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <BsPersonCheckFill style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
              <Text fontSize={"15px"} textAlign={"center"}>Apply for the</Text>
              <Text fontSize={"15px"} textAlign={"center"}>Program</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <MdComputer style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
              <Text fontSize={"15px"} textAlign={"center"}>Crack the Admission</Text>
              <Text fontSize={"15px"} textAlign={"center"}>Test</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <LuVerified style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
              <Text fontSize={"15px"} textAlign={"center"}>Complete KYC</Text>
            </GridItem>
            <GridItem p={"15px"} bg={"#ffffe6"} borderRadius={"20px"} >
              <Flex display="flex" alignItems="center" justifyContent="center" >
                <BiVideo style={{ width: "25", height: "35px",color:"teal"}} />
              </Flex>
              <Text fontSize={"15px"} textAlign={"center"}>You are ready to join</Text>
              <Text fontSize={"15px"} textAlign={"center"}>the batch</Text>
            </GridItem>
          </Grid>
          <Footer />
          </Box>
        </Box>
      );
}

export default FullStack