import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Blog } from '../Pages/Blog'
import { About } from '../Pages/About'
import { Courses } from "../Pages/Courses"
import Login  from "../Pages/Login"
import { Box } from "@chakra-ui/react"
import Singup  from '../Pages/Singup'
import FullStack from '../Pages/FullStack'
import DataAnalyst from "../Pages/DataAnalyst"

function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/singup' element={<Singup/>} />
        <Route path='/fullStack' element={<FullStack />} />
        <Route path='/dataAnalyst' element={<DataAnalyst />}/>
      </Routes>
    </Box>
  )
}

export default AllRoutes