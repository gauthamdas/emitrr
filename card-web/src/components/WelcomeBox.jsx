import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setView } from '../features/view/viewSlice';
import { GAME_VIEW } from '../app/types';

const WelcomeBox = (props) => {
    const dispatch = useDispatch();
  const handleStartGame = () => {
    // handle the logic for starting the game
    dispatch(setView(GAME_VIEW))
  };

  return (
    <Box sx={{ 
      bgcolor: 'secondary.main', 
      color: 'primary.contrastText', 
      p: 5,
      borderRadius: 2,
      boxShadow: 4,
      maxWidth: 500,
      mx: 'auto',
      textAlign: 'center',
    }}>
      <h2>Welcome <i>{props.user}</i></h2>
      <p>Get ready for the 😸 Exploding Kitten </p>
      <Button variant="contained" onClick={handleStartGame}>Start Game</Button>
    </Box>
  );
};

export default WelcomeBox;

WelcomeBox.propTypes = {
    user: PropTypes.string
}