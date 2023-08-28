import {
  Box,
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { VscVerified } from "react-icons/vsc";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";



function Courses() {
  const navigate = useNavigate()
  const handleView = () => {
    navigate("/fullStack")
  }
  const handleViewCourse=() => {
    navigate("/dataAnalyst")
    
  };
  return (
    <Box>
      <Heading textAlign={"center"} mt={"20px"} as={"h2"} size={"2xl"}>
        Our Courses
      </Heading>
      <Text textAlign={"center"} fontSize={"18px"} color={"gray.500"} mt={"10px"} mb={"50px"}>
        Become a Software Developer or Data Analyst at ZERO upfront fees. </Text>
      <Flex w={"55%"} m="auto" justifyContent={"space-between"} mb={"70px"}>
      <Card maxW="sm" boxShadow={"2xl"}>
        <CardBody p={"0px"}>
          <Image src="https://www.masaischool.com/images/new-homepage/software-course-card.svg" />
          <Box p={"20px"}>
            <Text fontWeight={"bold"} fontSize={"22px"}>
              Software Development
            </Text>
            <Text fontSize={"18px"} mb={"10px"}>
              Become job-ready in 30-35 weeks
            </Text>
            <Divider p={"0px"} m={"0px"} />
          </Box>

          <Box p={"20px"} mt={"-20px"}>
            <Flex align={"center"}>
              <VscVerified
                style={{
                  color: "lightgreen",
                  width: "25px",
                  height: "25px",
                  paddingRight: "5px",
                }}
              />
              <Text>Full Stack Developer & Backend Developer.</Text>
            </Flex>
            <Flex align={"center"}>
              <VscVerified
                style={{
                  color: "lightgreen",
                  width: "25px",
                  height: "25px",
                  paddingRight: "5px",
                }}
              />
              <Text>100% live learning with instructors.</Text>
            </Flex>
            <Flex align={"center"}>
              <VscVerified
                style={{
                  color: "lightgreen",
                  width: "25px",
                  height: "25px",
                  paddingRight: "5px",
                }}
              />
              <Text>Pay After Placement</Text>
            </Flex>
          </Box>
        </CardBody>
        <Box p={"20px"}>
          {" "}
          <Button width={"100%"} variant="solid" colorScheme="blue" onClick={handleView}>
            View Details
          </Button>
        </Box>
      </Card>
      <Card maxW="sm" boxShadow={"2xl"} >
        <CardBody p={"0px"}>
          <Image src="https://www.masaischool.com/images/new-homepage/data-analytics-card.svg" />
          <Box p={"20px"}>
            <Text fontWeight={"bold"} fontSize={"22px"}>
              Data Analytics
            </Text>
            <Text fontSize={"18px"} mb={"10px"}>
              Become job-ready in 30 weeks
            </Text>
            <Divider p={"0px"} m={"0px"} />
          </Box>

          <Box p={"20px"} mt={"-20px"}>
            <Flex align={"center"}>
              <VscVerified
                style={{
                  color: "lightgreen",
                  width: "25px",
                  height: "25px",
                  paddingRight: "5px",
                }}
              />
              <Text>Full Stack Developer & Backend Developer.</Text>
            </Flex>
            <Flex align={"center"}>
              <VscVerified
                style={{
                  color: "lightgreen",
                  width: "25px",
                  height: "25px",
                  paddingRight: "5px",
                }}
              />
              <Text>100% live learning with instructors.</Text>
            </Flex>
            <Flex align={"center"}>
              <VscVerified
                style={{
                  color: "lightgreen",
                  width: "25px",
                  height: "25px",
                  paddingRight: "5px",
                }}
              />
              <Text>Pay After Placement</Text>
            </Flex>
          </Box>
        </CardBody>
        <Box p={"20px"}>
          {" "}
          <Button width={"100%"} variant="solid" colorScheme="blue" onClick={handleViewCourse}>
            View Details
          </Button>
        </Box>
      </Card>
      </Flex>
      <Footer />
    </Box>
  );
}

export { Courses };

// https://www.masaischool.com/images/new-homepage/data-analytics-card.svg
