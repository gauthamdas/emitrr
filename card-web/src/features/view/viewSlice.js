import { createSlice } from '@reduxjs/toolkit'
import { HOME_VIEW } from '../../app/types'

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: HOME_VIEW
  },
  reducers: {
    setView: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setView } = viewSlice.actions

export default viewSlice.reducer