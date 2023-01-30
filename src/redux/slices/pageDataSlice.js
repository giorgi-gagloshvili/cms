import { createSlice } from "@reduxjs/toolkit"

const pageDataSlice = createSlice({
  name: "pageData",
  initialState: {
    data: [],
  },
  reducers: {
    getData: (state, action) => {
      state.data = [...action.payload]
    },
    addData: (state, action) => {
      state.data.push(action.payload)
    },
    deleteData: (state, action) => {
      const filteredArray = state.data.filter(
        (item) => item._id !== action.payload
      )
      state.data = [...filteredArray]
    },
    editData: (state, action) => {
      const copy = [...state.data]
      console.log(action.payload, state, "asdasdasdasdasd")
      const documentIndex = state.data.findIndex(
        (item) => item._id === action.payload._id
      )
      console.log(documentIndex, "My index")
      state.data.splice(documentIndex, 1, action.payload)
    },
  },
})

export const { getData, deleteData, addData, editData } = pageDataSlice.actions

export default pageDataSlice.reducer
