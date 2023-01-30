import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import themeSlice from "./slices/themeSlice"
import pageDataSlice from "./slices/pageDataSlice"
import pageInfoSlice from "./slices/pageInfoSlice"
import alertSlice from "./slices/alertSlice"

const combineReducer = combineReducers({
  theme: themeSlice,
  pageData: pageDataSlice,
  pageInfo: pageInfoSlice,
  alertMessage: alertSlice,
})

export const makeStore = () => {
  return configureStore({
    reducer: combineReducer,
  })
}

// export default store
export const wrapper = createWrapper(makeStore)
