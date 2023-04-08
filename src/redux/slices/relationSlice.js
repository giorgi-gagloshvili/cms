import { createSlice } from "@reduxjs/toolkit"

const relationSlice = createSlice({
  name: "relations",
  initialState: {
    relations: {},
  },
  reducers: {
    getRelations: (state, action) => {
      state.relations = { ...action.payload }
    },
  },
})

export const { getRelations } = relationSlice.actions

export default relationSlice.reducer
