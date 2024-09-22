import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { UseContextProvider } from "../ContextApi/Reuse";
import { FaLinkedin } from "react-icons/fa";

export const RightNet = () => {

  const {showGrow, hideGrow}=UseContextProvider();

  return (
    <>
      <section>
      <Box className="first-col  ">
        <ul className="flex gap-4">
          <li className={` head1 ${showGrow ?  "showGrow" : "showGrow1"}`}
          onClick={()=>hideGrow(false)}>Grow
            
          </li>
          
          
          <li className={` head1 ${!showGrow ?  "hideGrow" : "hideGrow1"}`}
          onClick={()=>hideGrow(true)}>Catch UP
          
          </li>

        </ul>
      </Box>

      {/* grow box  */}

      {
        showGrow ? (
          <>
          <Box className="first-col mt-4">
        <div className="">
          <ul className="flex justify-between p-5">
            <li>invitation</li>
            <li>See all 73</li>
          </ul>
          <hr className="horizontal-line" />

          <div className="mt-2">
            <Box className="flex justify-between first-col1 items-start">
              <ul className="flex gap-3 items-start">
                <li>
                  <img src="vishu.jpg" alt="image" className="image-circle" />
                </li>
                <li>
                  <div className="">
                    <h3 className="head">Aditya Kumar Sharma</h3>
                    <p>Student at csvtu .....</p>
                    <p> Bhupendra Rathore and 30 others </p>
                  </div>
                </li>
              </ul>

              <ul className="flex justify-between gap-5 items-center">
                <li>ignore</li>
                <li>
                  <button className="accept-btn"> Accept</button>
                </li>
              </ul>
            </Box>
          </div>
        </div>
      </Box>

          </>
        ):(
          <>
            
      {/* catch up box   */}

      <Box className="first-col1 mt-4">
        <ul className="flex gap-3 items-start p-2">
          <li className="catchu all">All</li>
          <li className="catchup-list">Job changes</li>
          <li className="catchup-list">Birthdays</li>
          <li className="catchup-list">Work anniversary</li>
        </ul>

        <hr className="horizontal-line" />

        <Box>
          <div className="mt-2">
            <Box className="flex justify-between first-col1 items-start">
              <ul className="flex gap-3 items-start">
                <li>
                  <img src="vishu.jpg" alt="image" className="image-circle" />
                </li>
                <li>
                  <div className="">
                    <h3 className="head">Aditya Kumar Sharma</h3>
                    <p>Student at csvtu .....</p>
                    <p> Bhupendra Rathore and 30 others </p>
                  </div>
                </li>
              </ul>

             <ul className="flex justify-between gap-5 items-center">
                <li>ignore</li>
                <li>
                  <button className="accept-btn"> Accept</button>
                </li>
              </ul>
            </Box> 
          </div>
        </Box>
        </Box>
          </>
        )
      }
    





      </section>
    
    </>
  );
};
