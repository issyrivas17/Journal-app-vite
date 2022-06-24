
import { NoteView } from '../../auth/views/NoteView.jsx'
import { NothingSelect } from '../../auth/views/NothingSelect.jsx'
import { JournalLayout } from '../layout/JournalLayout.jsx'




export const JournalPage = () => {
  return (
    <JournalLayout> 
   
{/*   <NothingSelect/>  */}
    
    <NoteView/> 
    </JournalLayout>
  )
}
 