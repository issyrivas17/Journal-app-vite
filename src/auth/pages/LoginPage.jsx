import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography} from "@mui/material" 
import {Google} from '@mui/icons-material' 


export const LoginPage = () => {
  return (
  
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
    <Link component= {RouterLink} color = 'inherit' to="/auth/register"> 
    Crear una cuenta 
    </Link>
   
    </Grid>

   </form>
   </Grid> 

  </Grid>
  )
}
