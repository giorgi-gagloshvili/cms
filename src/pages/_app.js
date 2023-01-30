import AuthContext from "@/context/AuthContext"
import LocaleContext from "@/context/LocaleContext"
import "@/styles/globals.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { wrapper } from "@/redux/store"
import { Provider } from "react-redux"
import { store } from "./../redux/store"

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      router.push("/login")
    }
  }, [])

  return (
    <Provider store={store}>
      <AuthContext>
        <LocaleContext>{getLayout(<Component {...pageProps} />)}</LocaleContext>
      </AuthContext>
    </Provider>
  )
}

export default App
