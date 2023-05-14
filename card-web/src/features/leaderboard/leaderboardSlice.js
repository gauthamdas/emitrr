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
        data: []
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