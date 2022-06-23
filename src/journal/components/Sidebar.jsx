import { Toolbar, Typography } from "@mui/material"


export const Sidebar = ({drawerWidth = 240 }) => {
  return (
    <Box 
    component= 'nav' 
    sx={{width: {sm:drawerWidth},flexShrink:{sm:0}}} 
    > 
    
    <Drawer 
    variant='permant'
    open
    sx={{
        display: {xs:'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box',width: drawerWidth}
    }}
    >
        <Toolbar>
            <Typography variant= 'h6' noWrap component= 'div'>
             Ismenia Rivas 
            </Typography>
        </Toolbar> 
        <Divider/> 



    </Drawer>
    
    
    
    
    </Box>
  )
}
