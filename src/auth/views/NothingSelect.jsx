import { Grid } from '@mui/material'
import {StarOutline} from '@mui/icons-material' 


export const NothingSelect = () => {
  return (
    <Grid
    container
    spacing={0} 
    direction = "column"
    alignItems = "center" 
    justifyContent="center" 
    sx= {{ minHeight: 'calc (100vh -110px)', backgroundColor:'primary.main'}}
   > 
   <Grid item xs={12}>
    <StarOutline/> 

   </Grid>

   </Grid> 
   
  





  ) 
}
