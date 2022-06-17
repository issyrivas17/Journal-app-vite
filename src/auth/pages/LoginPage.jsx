
import { Button, Grid, TextField, Typography } from "@mui/material"


export const LoginPage = () => {
  return (
  <Grid 
 container
 spacing={0} 
 direction = "column"
 alignItems = "center" 
 justifyContent="center" 
 sx= {{ minHeight: '100vh', backgroundColor:'primary.main', padding: 4}}
 >
   <Grid item 
   className='box-shadow'
   xs= {3} 
   sx= {{backgroundColor : 'white', padding: 3, borderRadius:2}}>  

   <Typography variant='h5' sx={{mb:1}}>Login</Typography> 

   <form>
    <Grid container > 

    <Grid item xs={12} sx={{mt:2}}>
      <TextField
      label="Correo" 
      type ="email"
      placeholder= 'correo@google.com'
      
      /> 
    </Grid>

    <Grid item xs={12} sx={{mt:2}}>
      <TextField
      label="contraseña" 
      type ="Password"
      placeholder= 'contraseña'
      /> 
    </Grid>

    <Grid container spacing={2} sx={{mb:2}}>
      <Grid item xs={12}>
      <Button variant="contained" > 
      Login 
      </Button>

      </Grid>
    </Grid>
    
    
    </Grid>



   </form>
   </Grid> 

  </Grid>
  )
}
