import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useDispatch } from 'react-redux';
import { showLeaderBoard } from '../features/leaderboard/leaderboardSlice';

const LeaderboardButton = () => {
  const dispatch = useDispatch();
  const handleToggleLeaderboard = () => {
        dispatch(showLeaderBoard())
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
          <Badge badgeContent={3} color="secondary">
            <LeaderboardIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      
    </Box>
  );
};

export default LeaderboardButton;
