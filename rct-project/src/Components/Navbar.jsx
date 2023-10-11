import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";
import { useAuth } from "../AuthContext/AuthContextProvider";

function Navbar() {
const {user,logout,userLoggedIn} = useAuth()
console.log(user)
const handleLogout = () => {
  logout()
}
  
  return (
    <Flex justifyContent={"space-around"} height={"3.1rem"} alignItems={"center"} pt={50} pb={50} bg={"#ffc87c"} position={"sticky"} width={"100%"} zIndex={999}  top={"0px"}>
      <Flex width={200} justifyContent={"space-around"} fontWeight="500" fontSize="1.1rem">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="courses">Courses</Link>
      </Flex>
      <Flex alignItems={"center"} >
        <Link to={"/"}><MdSchool
          style={{ width: "6.3rem", height: "3.1rem", display: "inline" }}
        /></Link>
        <Text fontWeight="bold" fontSize="1.6rem" style={{ display: "inline" }}><Link to={"/"}>AcademiaIQ</Link></Text>
      </Flex>
      {userLoggedIn ? <Button onClick={handleLogout} colorScheme="red">Logout</Button>:
       <Flex width="20%" justifyContent={"space-around"} alignItems={"center"} fontWeight="500" fontSize="1.1rem">
       <Link to="login">Log In</Link>
       <Button borderRadius={50} background={"blackAlpha.800"} color={"white"} alignItems={"center"} p={"1.6rem"} fontSize={"1.1rem"} _hover={"none"}>
         <Link to={"/singup"}>Sing Up</Link>
       </Button>
     </Flex>
      }
     
      
    </Flex>
  );
}

export default Navbar;
