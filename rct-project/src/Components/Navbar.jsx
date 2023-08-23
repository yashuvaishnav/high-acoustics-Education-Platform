import React from "react";
import { Link } from "react-router-dom";
import { Center, Flex } from "@chakra-ui/react"
 
const links = [
  { to: "/", title: "Home" },
  { to: "/blog", title: "Blog" },
  { to: "/courses", title: "Courses" },
  { to: "/login", title: "Login" },
  { to: "/signup", title: "Singup" }
];
function Navbar() {
  return <Flex justifyContent={"space-around"} background={"gray"} color={"white"} height={"50px"} align={"center"}>
    {
        links.map((item)=>(
            <Link key={item.to} to={item.to}>{item.title}</Link>
        ))
    }
  </Flex>;
}

export default Navbar;
console.log("yash")
