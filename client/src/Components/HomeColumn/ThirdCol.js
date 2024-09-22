import { Box } from '@mui/material';
import React, { useState } from 'react'
import { TbAlertSquareFilled } from "react-icons/tb";
import { AdsBox } from '../ReusableComponent/AdsBox';



export const ThirdCol = () => {

   



    const Adboxdata1={
        para1:"sfasfsfsfs",
        profileImage:"vishu.jpg",
        linkImage:"linkshort.jpeg",
        para2:"sfdasfa",
        btnName:"Try for free"
    }


   


  return (
    <>

<Box className="space-y-2">
<Box className="third-col1">

<div className="flex items-center justify-between p-5">
    <h3 className='head'>Likedin News</h3>
    <p><TbAlertSquareFilled className='icon'/></p>
</div>

<h2 className="head1 pl-5"> Top Stories</h2>

<ul className="space-y-3">
    <li className="third-list">
        <h2 className='head1'> Black Box to hire 400 people</h2>
        <p> 6h ago * 19,64 readers</p>
    </li>
    <li className="third-list">
        <h2 className='head1'> Black Box to hire 400 people</h2>
        <p> 6h ago * 19,64 readers</p>
    </li>
    <li className="third-list">
        <h2 className='head1'> Black Box to hire 400 people</h2>
        <p> 6h ago * 19,64 readers</p>
    </li>
    <li className="third-list">
        <h2 className='head1'> Black Box to hire 400 people</h2>
        <p> 6h ago * 19,64 readers</p>
    </li>
    <li className="third-list">
        <h2 className='head1'> Black Box to hire 400 people</h2>
        <p> 6h ago * 19,64 readers</p>
    </li>
</ul>

<h2 className="head1 pl-5"> Today's games</h2>


<ul>
    <li className=" third-list flex gap-3 pl-5 items-center ">
        <img src="5.jpg" alt="image-circle" className="w-10 h-10 rounded-md"/>
        <div className="">
            <h2 className='head1'>Queen</h2>
            <p>Crown each region</p>
        </div>
    </li>
    <li className=" third-list flex gap-3 pl-5 items-center">
        <img src="5.jpg" alt="image-circle" className="w-10 h-10 rounded-md"/>
        <div className="">
            <h2 className='head1'>Queen</h2>
            <p>Crown each region</p>
        </div>
    </li>
    <li className=" third-list flex gap-3 pl-5 items-center">
        <img src="5.jpg" alt="image-circle" className="w-10 h-10 rounded-md"/>
        <div className="">
            <h2 className='head1'>Queen</h2>
            <p>Crown each region</p>
        </div>
    </li>
</ul>
</Box>


{/* Third column ads and reach  */}

<AdsBox
Adboxdata={Adboxdata1}
/>

</Box>
    </>
  )
}
