import {
  Box,
  Heading,
  Button,
  Image,
  Flex,
  Text,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { popular } from "../constent";
import { BsStarFill } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function PopularCourses() {

  const navigate = useNavigate()

  const handleViewCourses = () => {
    navigate("/courses")
  }

  return (
    <Box bg={"#242124"} p={"6.2rem"} >
      <Flex justifyContent={"center"}>
      <Heading as={"h2"} size="3xl" fontWeight={"semibold"} color={"white"} mb={"3.8rem"} alignItems={"center"}
      mr={".6rem"}>
        Popular
      </Heading>
      <Button bg={"#242124"} pt={"2rem"} pb={"2.5rem"} pl={"5px"} pr={'5px'} color={"#ffc87c"} borderRadius="3rem" fontSize="3.5rem" border={"2px solid #ffc87c"} fontWeight={"semibold"}>
          <i>Courses</i>
        </Button>
      </Flex>

      <Grid templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap={12}>
        {popular.map((item) => (
          <GridItem w="100%" p={"2.5rem"} bg={"white"} borderRadius="1.2rem">
            <Image src={item.image} w={"18.8rem"} h={"16rem"} />
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              alignContent={"center"}
            >
              <Box display="flex" alignItems={"center"}>
                <BsStarFill
                  style={{
                    color: "#f9ea2e",
                    display: "inline",
                    height: "2%",
                  }}
                />
                <Text mr={"5px"} ml={"5px"}>{item.rating}</Text>
                <Text color={"#5c685c"}>{item.review}</Text>
              </Box>
              <Box display="flex" alignItems={"center"}>
                <TfiTimer style={{ display: "inline", marginRight: "5px" }} />
                <Text color={"#5c685c"}>02:33:55</Text>
              </Box>
            </Flex>
            <br />
            <Text fontSize={"2xl"}>
              <b>{item.heading}</b>
            </Text>
            <br />
            <Button
              colorScheme="black"
              variant="outline"
              color="black"
              borderRadius="3rem"
              p={"1.5rem"} onClick={handleViewCourses}
            >
              {item.btnText}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default PopularCourses;
