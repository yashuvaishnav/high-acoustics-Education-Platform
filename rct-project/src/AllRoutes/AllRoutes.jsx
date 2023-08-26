import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Blog } from '../Pages/Blog'
import { About } from '../Pages/About'
import { Courses } from "../Pages/Courses"
import { Login } from "../Pages/Login"
import { Box } from "@chakra-ui/react"

function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Box>
  )
}

export default AllRoutes