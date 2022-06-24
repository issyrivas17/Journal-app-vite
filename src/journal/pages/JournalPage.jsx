
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { NoteView } from '../../auth/views/NoteView.jsx'

import { JournalLayout } from '../layout/JournalLayout.jsx'




export const JournalPage = () => {
  return (
    <JournalLayout> 
   
{/*   <NothingSelect/>  */}
    <NoteView/> 

    <IconButton
    sx={{
    color:'white',
    background: 'error.main',
    ':hover':{backgroundColor:'error.main',opacity:0.9},
    position:'fixed', 
    right:50,
    botton:50
  }}
    >
    <AddOutlined sx={{fontSize:30}}/> 
    </IconButton>
    </JournalLayout>
  )
}
 