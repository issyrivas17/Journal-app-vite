import { TextFields } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import moduleName from '';

export const LoginPage = () => {
  return (
  <Grid 
 container
 spacing={0} 
 direction = "column"
 alignItems = "center" 
 justifyContent="center" 
 sx= {{ minHeight : '100vh', backgroundColor:'primary.main', padding: 4}}
 >
   <Grid item 
   className='box-shadow'
   xs= {3} 
   sx= {{backgroundColor : 'white', padding: 3, borderRadius:2}}>  

   <Typography variant="h5" sx={{mb:1}}>Login</Typography> 

   <form>
    <Grid container > 
    <Grid item>
      <TextFields 
      label="Correo" 
      type ="email"
      placeholder= 'correo@google.com'
      fullwidth
      /> 
    </Grid>

    <Grid item>
      <TextFields 
      label="contraseña" 
      type ="Password"
      placeholder= 'contraseña'
      fullwidth
      
      /> 
    </Grid>
    
    
    </Grid>



   </form>
   </Grid> 

  </Grid>
  )
}
