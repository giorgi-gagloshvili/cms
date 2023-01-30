import { createSlice } from "@reduxjs/toolkit"

const pageInfoSlice = createSlice({
  name: "pageInfo",
  initialState: {
    pageInfo: {
      modalTitle: "",
      routeName: "",
    },
  },
  reducers: {
    getInfo: (state, action) => {
      state.pageInfo = { ...action.payload }
    },
  },
})

export const { getInfo } = pageInfoSlice.actions

export default pageInfoSlice.reducer
