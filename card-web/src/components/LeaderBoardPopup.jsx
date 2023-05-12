import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import { hideLeaderBoard } from '../features/leaderboard/leaderboardSlice';

const LeaderBoardPopup = () => {
  
  const leaderboard = useSelector(state => state.leaderboard.value)
  const dispatch = useDispatch();

  console.log(leaderboard)
  
  const handleClose = () => {
    dispatch(hideLeaderBoard())
  };

  

  return (
    <>
      
      <Dialog open={Boolean(leaderboard)} onClose={handleClose}>
        <DialogTitle>Leaderboard</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboard?.data.map((row) => (
                <TableRow key={row.rank}>
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LeaderBoardPopup;

