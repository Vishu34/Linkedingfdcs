import React from "react";
import { FirstCol } from "../Components/HomeColumn/FirstCol";
import { SecondCol } from "../Components/HomeColumn/SecondCol";
import { ThirdCol } from "../Components/HomeColumn/ThirdCol";
import { Box } from "@mui/material";
import { Mebox } from "../Components/Allz-indexbox/Mebox";
import { Postbox } from "../Components/Allz-indexbox/Postbox";

export const Home = () => {
  return (
    <>
      <section>
      <Box className="  w-[90%] md:w-[75%]  mx-auto  mt-4 mb-4">
        <Box className="flex-none space-y-2 sm:space-y-0 sm:flex items-start  gap-5 w-[100%]">
          <div className="w-[100%] sm:w-[30%] md:w-[25%]">
            <FirstCol />
          </div>
          <div className="w-[100%] sm:w-[70%] md:w-[50%]">
            <SecondCol />
          </div>
          <div className="w-[100%] md:w-[25%]">
            <ThirdCol/>
          </div>
        </Box>




      </Box>

      {/*  post box which you eant to post */}

<Postbox/>
      
      </section>
    </>
  );
};
