import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    value: {}
  },
  reducers: {
    setView: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setView } = gameSlice.actions

export default gameSlice.reducer