import React from 'react'
import {Box} from "@chakra-ui/react"
import Header from './Header'
import Review from './Review'
import OnlineEducation from './OnlineEducation'
import SpecialFeature from './SpecialFeature'
import PopularCourses from './PopularCourses'
import Learning from './Learning'
import OrderNow from './OrderNow'
import MobileApp from './MobileApp'
function Main() {
  return (
    <Box>
        <Header />
        <Review />
        <OnlineEducation />
        <SpecialFeature />
        <PopularCourses />
        <Learning />
        {/* <OrderNow /> */} 
        <MobileApp />
    </Box>
  )
}

export default Main