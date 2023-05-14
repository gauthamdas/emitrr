import Container from '@mui/material/Container'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import FormDialog from './components/FormDialog'
import './App.css'
import WelcomeBox from './components/WelcomeBox'
import { GAME_VIEW } from './app/types'
import LeaderboardButton from './components/LeaderBoardButton'
import LeaderBoardPopup from './components/LeaderBoardPopup'
import GameArea from './components/GameArea'

function App() {
  const user = useSelector(state => state.user.value)
  const view = useSelector(state => state.view.value)
  return (
    <>  
        <LeaderboardButton />
        <LeaderBoardPopup />
        {view===GAME_VIEW? <><GameArea /></> : (!user?
          <> <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <FormDialog 
             buttonTitle="Enter Game"
            />
          </Box>
        </Container> </>: <> <WelcomeBox user={user}/> </>)
       }
    </>
  )
}

export default App
