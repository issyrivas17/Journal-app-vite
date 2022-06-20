
import { Button, Grid, Link, TextField, Typography} from "@mui/material" 
import {Google} from '@mui/icons-material' 


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
      fullWidth
      
      /> 
    </Grid>

    <Grid item xs={12} sx={{mt:2}}>
      <TextField
      label="contraseña" 
      type ="Password"
      placeholder= 'contraseña'
      fullWidth
      /> 
    </Grid>

    <Grid container spacing={2} sx={{mb:2, mt:1 }}>
      <Grid item xs={12} sm={6}>
      <Button variant="contained" fullWidth> 
      Login 
      </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
      <Button variant="contained" fullWidth > 
      <Google/> 
      <Typography> Google </Typography>
      </Button>

      </Grid>


    </Grid>
    
    
    </Grid>

    <Grid container direction='row' justifyContent= 'end'> 
    <Link color = 'inherit' to="/auth/registrer"> 
    Crear una cuenta 
    </Link>
   
    </Grid>

   </form>
   </Grid> 

  </Grid>
  )
}
