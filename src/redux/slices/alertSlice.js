import { createSlice } from "@reduxjs/toolkit"

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alertMessage: {
      title: "",
      message: "",
      status: "",
      isAlert: false,
    },
  },
  reducers: {
    setAlert: (state, action) => {
      state.alertMessage = { ...action.payload }
    },
  },
})

export const { setAlert } = alertSlice.actions

export default alertSlice.reducer
