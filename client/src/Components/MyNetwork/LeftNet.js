import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import React from "react";
import { AdsBox } from "../ReusableComponent/AdsBox";
import { MdExpandMore } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";

import { RiPagesLine } from "react-icons/ri";
import { UseContextProvider } from "../ContextApi/Reuse";
import { FaLinkedin } from "react-icons/fa";

export const LeftNet = () => {


    const{showGrow , hideGrow} =UseContextProvider();

    const Adboxdata1={
        para1:"sfasfsfsfs",
        profileImage:"vishu.jpg",
        linkImage:"linkshort.jpeg",
        para2:"sfdasfa",
        btnName:"Try for free"
    }

    const Adboxdata2={
        para1:"sfasfsfsfs",
        profileImage:"vishu.jpg",
        linkImage:"linkshort.jpeg",
        para2:"sfdasfa",
        btnName:"Discover Now"
    }

  return (
    <>
   <section>
   <Box>
        <Accordion className="bg-red-500 p-1.5"
        sx={{
            backgroundColor:"#1b1f23",
            color:"white"
        }}>
          <AccordionSummary
            expandIcon={<MdExpandMore className="text-white icon" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Manage my Network
          </AccordionSummary>

          <Box>
           <ul className="space-y-3 p-3">
          <li>
          <ul className="flex items-center justify-between">
              <li>
                <ul>
                  <li className="flex items-center gap-3">
                    <FaUserGroup className="icon"/>
                    <p>Connection</p>
                  </li>
                </ul>
              </li>
              <li>579</li>
            </ul>
          </li>

            <li><ul>
              <li className="flex items-center gap-3">
                <IoPersonSharp className="icon"/>
                <p> Following & followers</p>
              </li>
            </ul></li>

           <li> <ul className="flex items-center justify-between">
              <li>
                <ul>
                  <li className="flex items-center gap-3">
                    <HiUserGroup className="icon"/>
                    <p>Groups</p>
                  </li>
                </ul>
              </li>
              <li>5</li>
            </ul></li>

           <li> <ul>
              <li className="flex items-center gap-3">
                <IoPersonSharp className="icon"/>
                <p> Following & followers</p>
              </li>
            </ul></li>

            <li><ul className="flex items-center justify-between">
              <li>
                <ul>
                  <li className="flex items-center gap-3">
                    <RiPagesLine className="icon"/>
                    <p>Pages</p>
                  </li>
                </ul>
              </li>
              <li>5</li>
            </ul></li>

            <li><ul className="flex items-center  justify-between">
              <li>
                <ul>
                  <li className="flex items-center gap-3">
                    <BsCalendarEventFill className="icon"/>
                    <p>Newsletters</p>
                  </li>
                </ul>
              </li>
              <li>5</li>
            </ul></li>

            <li><ul>
              <li className="flex items-center gap-3">
                <FaHashtag className="icon"/>
                <p> Hashtags</p>
              </li>
            </ul></li>
           </ul>
          </Box>
        </Accordion>
      </Box>
      {/*  ads and reach box and net work column */}


     {
        showGrow ? (
            <>
            <Box className="mt-4">
        <AdsBox 
Adboxdata={Adboxdata1}
        />
      </Box>
            </>
        ):
        (
            <>
            <Box className="mt-4">
        <AdsBox 
Adboxdata={Adboxdata2}
        />
      </Box>

      
            </>
        )
     }


     


   </section>
     
    </>
  );
};
