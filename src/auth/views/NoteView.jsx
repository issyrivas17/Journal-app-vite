import { Button, Grid, TextField, Typography } from "@mui/material"
import {SaveOutline} from '@mui/icons-material'


export const NoteView = () => {
  return (
    <Grid container direction = 'row' justifyContent='space-between' alignItems= 'center' sx={{mb:1}}> 
    <Grid item>
        <Typography fontSize={39} fontWeight='light'> 25 de junio, 2022</Typography>
    </Grid>
    
   <Grid item>
    <Button color='primary' sx={{padding:2}}> 
    
   <SaveOutline sx={{fontSize:30,Mr:1}} /> 
   Guardar.
  </Button>
   </Grid> 

   <Grid container>
    <TextField
    type= "text" 
    variant="filled"
    fullWidth
    placeholder="Ingrese un título"
    label= 'Título'
    sx={{border:'none',mb:1}} 
    /> 
    
   </Grid>
    
    
    </Grid>
    
  )
}
