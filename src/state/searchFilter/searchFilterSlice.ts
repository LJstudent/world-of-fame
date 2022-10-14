import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchFilterState {
  value: string
}

const initialState: SearchFilterState = {
  value: "",
}

export const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState,
  reducers: {
    clearField: (state) => {
      state.value = ""
    },
    searchFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { clearField, searchFilter } = searchFilterSlice.actions

export default searchFilterSlice.reducer