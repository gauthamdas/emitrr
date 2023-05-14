import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { drawCard, restartGame } from '../features/game/gameSlice';
import catCard from '../assets/card-cat.png';
import explodingKittenCard from '../assets/card-exploding.png';
import defuseCard from '../assets/card-defuse.png';
import shuffleCard from '../assets/card-shuffle.png';
import cardBack from '../assets/card-back.png';

const cardImages = {
    cat: catCard,
    exploding: explodingKittenCard,
    defuse: defuseCard,
    shuffle: shuffleCard,
};

const GameArea = () => {
  const dispatch = useDispatch();
  const { deck, drawnCards, hasExploded, defuseCount, isShuffling, remark } = useSelector(
    (state) => state.game
  );
  const handleDrawCard = () => {

    if (!hasExploded && !isShuffling && deck.length > 0) {
      dispatch(drawCard());
    }
  };

  const handleRestartGame = () => {
    dispatch(restartGame());
  };
  console.log(deck);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1">
            Exploding Kittens
          </Typography>
          <hr />
          <div className='game-status-bar'>
          <div>Cards in the deck: {deck.length}</div>
          <div>Defuse Cards: {defuseCount}</div>
          </div>
      <div className="card-display" >
        <div className="cards-container">
        <div className="drawn-cards">
        {drawnCards.map((card, index) => (
          <div className="card" key={index}>
              <img src={cardImages[card]} alt={card} />
          </div>
        ))}
        </div>
        </div>
        <div className="cards-container">
        <div className="unrevealed-cards">
        {deck.map((card, index) => (
          <div className="card" key={index}>
              <img src={cardBack} alt="card-back" /> 
          </div>
        ))}
        </div>
        </div>
        <div className="game-remarks">
        <span>
            {remark}
          </span>
        </div>
      </div>
          
          
          
          {drawnCards.length === 5 || hasExploded ? (
            
              <Button variant="contained" onClick={handleRestartGame}>
                Restart Game
              </Button>
          ): <><Button variant="contained" onClick={handleDrawCard}>
          Draw a Card
        </Button></>}
        </CardContent>
      </Card>
    </div>
  );
};

export default GameArea;
