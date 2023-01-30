import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"

const Context = createContext()

const AuthContext = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  const handleAuth = (data) => {
    console.log(data)
    setUser(data)
    localStorage.setItem("token", "s98asd98zsdsdf")

    // localStorage.removeItem("token")
  }
  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken("")
    router.push("/login")
  }
  return (
    <Context.Provider value={{ user, token, handleAuth, handleLogout }}>
      {children}
    </Context.Provider>
  )
}

export default AuthContext

export const useAuthContext = () => {
  return useContext(Context)
}
