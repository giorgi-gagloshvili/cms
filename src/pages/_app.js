import { useState } from "react"
import AuthContext from "@/context/AuthContext"
import LocaleContext from "@/context/LocaleContext"
import { Provider } from "react-redux"
import { store } from "./../redux/store"
import Router from "next/router"
import Loader from "@/components/base/Loader"
import "@/styles/globals.css"
import "react-datepicker/dist/react-datepicker.css"

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      <AuthContext>
        <LocaleContext>{getLayout(<Component {...pageProps} />)}</LocaleContext>
      </AuthContext>
    </Provider>
  )
}

export default App
