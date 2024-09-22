import { Box } from '@mui/material'
import React from 'react'
import { FirstcolNoty } from '../Components/Notification/FirstcolNoty'
import { SecondcolNoty } from '../Components/Notification/SecondcolNoty'
import { ThirdcolNoty } from '../Components/Notification/ThirdcolNoty'

export const Notificationn = () => {
  return (
  <>
    <Box className="  w-[90%] md:w-[75%]  md:mx-auto  mt-4 mb-4">
        <Box className="flex-none space-y-2 sm:flex items-start  gap-5 w-[100%]">
          <div className="w-[100%] sm:w-[30%] md:w-[25%]">
            <FirstcolNoty/>
          </div>
          <div className="w-[100%] sm:w-[70%] md:w-[50%]">
            <SecondcolNoty />
          </div>
          <div className="md:w-[25%]">
            <ThirdcolNoty/>
          </div>
        </Box>
      </Box>
  </>
  )
}
