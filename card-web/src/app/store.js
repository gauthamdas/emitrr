import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import viewSlice from '../features/view/viewSlice'
import leaderboardSlice from '../features/leaderboard/leaderboardSlice'
import gameSlice from '../features/game/gameSlice'
export default configureStore({
  reducer: {
    user: userSlice,
    view: viewSlice,
    leaderboard: leaderboardSlice,
    game: gameSlice
  }
})