import { Box } from '@mui/material'
import React from 'react'
import { FirstcolJobs } from '../Components/Jobs/FirstcolJobs'
import { SecondcolJobs } from '../Components/Jobs/SecondcolJobs'
import { ThirdcolJobs } from '../Components/Jobs/ThirdcolJobs'

export const Jobs = () => {
  return (
    <>
      <Box className="  w-[90%] md:w-[75%]  md:mx-auto  mt-4 mb-4">
        <Box className="flex-none space-y-2 sm:flex items-start  gap-5 w-[100%]">
          <div className="w-[100%]  sm:w-[30%] md:w-[25%]">
            <FirstcolJobs />
          </div>
          <div className="w-[100%] sm:w-[70%] md:w-[50%]">
            <SecondcolJobs />
          </div>
          <div className="md:w-[25%]">
            <ThirdcolJobs/>
          </div>
        </Box>
      </Box>
    </>
  )
}
