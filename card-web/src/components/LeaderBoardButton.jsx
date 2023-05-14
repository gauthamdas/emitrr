import axios from 'axios';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useDispatch, useSelector } from 'react-redux';
import { showLeaderBoard, updateLeaderBoard } from '../features/leaderboard/leaderboardSlice';

const LeaderboardButton = () => {
  const leaderboad = useSelector(state => state.leaderboard.value)
  const dispatch = useDispatch();
  const handleToggleLeaderboard = () => {
        dispatch(showLeaderBoard())
        axios.get(import.meta.env.VITE_APP_API_URL+'/api/leaderboard')
        .then((response)=>{
          dispatch(updateLeaderBoard(response.data))
        })
        .catch(()=>{
          console.log(import.meta.env.VITE_APP_API_URL)
        })
  };

  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      m: 2,
    }}>
      <Tooltip title="Leaderboard">
        <IconButton sx={{
            bgcolor: 'white'
        }} color='secondary' onClick={handleToggleLeaderboard}>
          <Badge badgeContent={leaderboad?.data?.length} color="secondary">
            <LeaderboardIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      
    </Box>
  );
};

export default LeaderboardButton;
