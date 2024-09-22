import { Box } from '@mui/material'
import React from 'react'
import {  RightNet } from '../Components/MyNetwork/RightNet'
import { LeftNet } from '../Components/MyNetwork/LeftNet'

export const Network = () => {
  return (
   <>
    
    <Box className="  w-[90%] md:w-[75%]  mx-auto  mt-4 mb-4">
        <Box className="flex-none space-y-2 sm:flex items-start  gap-5 w-[100%]">
          <div className="w-[100%]  sm:w-[30%] md:w-[25%]">  
          
          <LeftNet/>
          

          </div>
          <div className="w-[100%] sm:w-[70%] md:w-[75%]"> 

              <RightNet/>

          </div>
          
        </Box>
      </Box>
   
   </>
  )
}
