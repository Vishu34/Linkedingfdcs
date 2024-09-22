

import { Box } from '@mui/material'
import React from 'react'

export const ProfileBox = () => {

   
  return (
    <>
    {/* ? profile view and banner box */}
      


    
    
    <Box className="first-col relative">
    
    <div className='banner'>
        <img src="5.jpg" alt='image' className='object-top object-cover h-20 w-[100%]'/>
    
    </div>
    
    <div className="profile ">
        <img src="vishu.jpg" alt='image' className=''/>
    </div>
    
    <div className="first-col1 mt-8">
        <h3 className='head'>Vishu Jsr</h3>
        <p>Mern stack dvelolp , consosals, usfasf, 
        asfsa  asdfkas ......
        </p>
        <p className='text-slate-400'>Raipur , Chhatiisgadh</p>
    </div>
    </Box>

    </>
  )
}
