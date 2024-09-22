import React from 'react'
import { ProfileBox } from '../ReusableComponent/ProfileBox'
import { Box } from '@mui/material'

export const FirstcolNoty = () => {
  return (
   <>
    <section className="space-y-2">
    <ProfileBox/>

    <Box className="first-col1 space-y-3">

<p>Manage your Notificatons</p>
<button className="view-btn">View Settings</button>
    </Box>
    </section>
   </>
  )
}
