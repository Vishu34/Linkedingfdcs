

import React, { createContext, useContext, useState } from 'react'

const AppContext= createContext(null);

 const Reuse = ({children}) => {

    const [showGrow, hideGrow]=useState(false);
    const [OpenProfile, CloseProfile]=useState(false);

  return (
   <AppContext.Provider
   value={{
    OpenProfile,
    CloseProfile,
showGrow, 
hideGrow

   }}>
    {children}
   </AppContext.Provider>
  )
}



const UseContextProvider=()=>useContext(AppContext);

export {  Reuse , UseContextProvider};