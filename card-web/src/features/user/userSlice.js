import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem('username')
  },
  reducers: {
    setUserName: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserName } = userSlice.actions

export default userSlice.reducer