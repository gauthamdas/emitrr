import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const generateDeck = () => {
  const deck = ['cat','cat','cat','cat', 'defuse', 'exploding', 'shuffle'];
  // create a deck with 5 cards random cards and return it
  var newDeck = [];
  for (var i = 0; i < 5; i++) {
    var index = Math.floor(Math.random() * deck.length);
    newDeck.push(deck[index]);
  }
  return newDeck;
};

const initialState = {
  // deck: generateDeck(),
  deck: ['defuse','defuse','exploding','exploding','cat'],
  drawnCards: [],
  defuseCount: 0,
  isShuffling: false,
  remark: 'Click on the Draw A Card'
};



const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    drawCard(state) {
      const index = 0;
      const card = state.deck[index];

      state.deck.splice(index, 1);

      switch (card) {
        case 'cat':
          state.remark = 'You drew a Cat card';
          break;
        case 'defuse':
          state.defuseCount++;
          state.remark = 'You got a Defuse card';
          break;
        case 'exploding':
          if (state.defuseCount > 0) {
            state.defuseCount--;
            state.remark = 'You defused the bomb';
            break;
          }
          state.remark = 'You drew an Exploding Kitten  card. Game Over';
          state.hasExploded = true;
          break
        case 'shuffle':
          state.isShuffling = true;
          break;
        default:
          break;
      }
      
      state.drawnCards.push(card);
      if(state.isShuffling){
        state.deck = generateDeck();
        state.drawnCards = [];
        state.defuseCount = 0;
        state.hasExploded = false;
        state.isShuffling = false;
        state.remark = 'You got a shuffle card. Deck is shuffled';
        return;
      }
      
      if (state.hasExploded) {
        return;
      }
      

      if (state.deck.length === 0) {
        state.remark = 'You drew all the cards. Well done!';
        axios.post(import.meta.env.VITE_APP_API_URL+'/api/users/pointsUpdate', {
          username: localStorage.getItem('username')
      })
        return;
      }
    },
    restartGame(state) {
      state.deck = generateDeck();
      state.drawnCards = [];
      state.defuseCount = 0;
      state.hasExploded = false;
      state.isShuffling = false;
      state.remark = 'Click on the Draw A Card';
    },
    endShuffle(state) {
      state.isShuffling = false;
    },
  },
});

export const { drawCard, restartGame, endShuffle } = gameSlice.actions;

export default gameSlice.reducer;