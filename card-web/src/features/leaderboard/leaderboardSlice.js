import { createSlice } from '@reduxjs/toolkit'

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    value: null
  },
  reducers: {
    showLeaderBoard: state => {
      state.value = {
        loading: true,
        data: [{
          rank:1,
          username: 'test1',
          points: 100
        },{
          rank:2,
          username: 'test2',
          points: 90
        },{
          rank:3,
          username: 'test3',
          points: 80}]
      }
    },
    hideLeaderBoard: state => {
      state.value = null
    },
    updateLeaderBoard: (state,action) =>{
      state.value = {
        loading: false,
        data: action.payload
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { showLeaderBoard, hideLeaderBoard, updateLeaderBoard } = leaderboardSlice.actions

export default leaderboardSlice.reducer