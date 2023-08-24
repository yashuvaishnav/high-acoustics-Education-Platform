import React from 'react'
import {Box} from "@chakra-ui/react"
import Header from './Header'
import Review from './Review'
import OnlineEducation from './OnlineEducation'
import SpecialFeature from './SpecialFeature'

function Main() {
  return (
    <Box>
        <Header />
        <Review />
        <OnlineEducation />
        <SpecialFeature />
    </Box>
  )
}

export default Main