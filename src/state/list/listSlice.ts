import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IList } from '../../models/interfaces/IList';
import { itemData } from '../../data/examples/imagedata';

export interface IListState {
  list: IList[];
  newRecord: boolean;
}

const initialState: IListState = {
  list: itemData,
  newRecord: false
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IList>) => {
      state.list.push(action.payload)
      state.newRecord = false;
    },
    newRecord: (state) => {
      state.newRecord = true;
    },
    cancelRecord: (state) => {
      state.newRecord = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, newRecord, cancelRecord } = listSlice.actions

export default listSlice.reducer