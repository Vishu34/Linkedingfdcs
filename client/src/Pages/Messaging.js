import { Box } from '@mui/material'
import React from 'react'
import { FirstcolMessage } from '../Components/Messaging/FirstcolMessage'
import { SecondcolMessage } from '../Components/Messaging/SecondcolMessage'

export const Messaging = () => {
  return (
   <>

<section>

  <Box className=" w-[90%] md:w-[75%]  mx-auto  mt-4 mb-4">

  <Box className="flex-none space-y-2  sm:flex items-start  gap-5 w-[100%]">
          <div className="w-[100%]  sm:w-[70%] md:w-[70%]">
            <FirstcolMessage/>
          </div>
          <div className="w-[100%] sm:w-[30%] md:w-[30%]">
            <SecondcolMessage/>
          </div>
         
        </Box>



  </Box>
</section>


   </>
  )
}
