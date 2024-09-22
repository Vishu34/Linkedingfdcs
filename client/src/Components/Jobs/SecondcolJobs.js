import { Box } from "@mui/material";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

export const SecondcolJobs = () => {
  return (
    <>
      <section>
        <Box className="first-col1 ">
        <div className="">
            <h3 className="head">Jobs picks For you</h3>
            <p>based on your profile and search history</p>
          </div>
         <Box className="mt-4">
         

          <Box>
            <ul className="flex gap-3 items-start justify-between ">
              <li>
                <ul className="flex gap-3 items-start">
                  <li>
                    <img src="vishu.jpg" atl="image" className="image-sqaure" />
                  </li>
                  <li>
                    <ul>
                      <li>
                        <h3 className="head">React.js Developer</h3>
                        <h2>CareerPaths</h2>
                        <p>India (Remote) </p>
                        <p>500k /yr- 2.7/yr</p>
                        <p>2days ago</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>


              <li>
                <FaTimes />
              </li>
            </ul>
          </Box>
         </Box>
        </Box>
      </section>
    </>
  );
};
