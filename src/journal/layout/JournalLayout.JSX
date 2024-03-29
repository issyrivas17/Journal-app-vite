import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar } from '../components';
import { Sidebar } from '../components/Sidebar';

const drawerWidth= 240;  

export const JournalLayout = ({children}) => {
  return (
 <Box sx={{display:'flex'}}>

<NavBar drawerWidth={drawerWidth}/> 

  <Sidebar drawerWidth={drawerWidth}/> 

  <Box component='main'
  sx ={{flexGrow: 1, p:3}} 
  
  > 
  <Toolbar/> 

  {children} 

  </Box>


 </Box>
  )
}
