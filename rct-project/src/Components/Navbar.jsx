import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";

function Navbar() {

  return (
    <Flex
      justifyContent={"space-around"}
      height={"50px"}
      alignItems={"center"}
      pt={70}
      pb={110}
    >
      <Flex width={200} justifyContent={"space-around"} fontWeight="500" fontSize="18px">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="courses">Courses</Link>
      </Flex>
      <Flex alignItems={"center"}>
        <MdSchool
          style={{ width: "100px", height: "50px", display: "inline" }}
        />
        <Text fontWeight="bold" fontSize="25px" style={{ display: "inline" }}>YÄSĦU</Text>
      </Flex>
      <Flex width={200} justifyContent={"space-around"} alignItems={"center"} fontWeight="500" fontSize="18px">
        <Link to="login">Log In</Link>
        <Button borderRadius={50} background={"blackAlpha.800"} color={"white"} alignItems={"center"}>
          Sign Up
        </Button>
      </Flex>
      
    </Flex>
  );
}

export default Navbar;
