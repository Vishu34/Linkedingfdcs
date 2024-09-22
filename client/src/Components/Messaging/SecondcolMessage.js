import React from 'react'
import { AdsBox } from '../ReusableComponent/AdsBox'
import { Box } from '@mui/material'

export const SecondcolMessage = () => {
    const Adboxdata2={
        para1:"sfasfsfsfs",
        profileImage:"vishu.jpg",
        linkImage:"linkshort.jpeg",
        para2:"sfdasfa",
        btnName:"Try for free"
    }

  return (
   <>
    <section>
    <Box className="">
        <AdsBox 
Adboxdata={Adboxdata2}
        />
      </Box>
    </section>
   </>
  )
}