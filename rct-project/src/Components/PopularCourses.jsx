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

function PopularCourses() {
  return (
    <Box bg={"#242124"} p={"100px"} >
      <Flex justifyContent={"center"}>
      <Heading as={"h2"} size="3xl" fontWeight={"semibold"} color={"white"} mb={"60px"} alignItems={"center"}
      mr={"10px"}>
        Popular
      </Heading>
      <Button bg={"#242124"} pt={"30px"} pb={"40px"} pl={"5px"} pr={'5px'} color={"#ffc87c"} borderRadius={50} fontSize="55px" border={"2px solid #ffc87c"} fontWeight={"semibold"}>
          <i>Courses</i>
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={12}>
        {popular.map((item) => (
          <GridItem w="100%" p={"40px"} bg={"white"} borderRadius="20px">
            <Image src={item.image} w={"300px"} h={"250px"} margin={"auto"} />
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
                    height: "30px",
                    width: "30px",
                    marginRight: "5px",
                  }}
                />
                <Text mr={"5px"}>{item.rating}</Text>
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
              borderRadius="50px"
              p={"25px"}
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
