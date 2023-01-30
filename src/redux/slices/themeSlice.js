import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    setTheme: (state) => {
      state.dark = !state.dark
      localStorage.setItem("theme", state.dark)
      if (state.dark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },
    getTheme: (state) => {
      if (localStorage.getItem("theme")) {
        state.dark = JSON.parse(localStorage.getItem("theme"))
        if (state.dark) {
          document.documentElement.classList.add("dark")
        }
      }
    },
  },
})

export const { setTheme, getTheme } = themeSlice.actions

export default themeSlice.reducer
