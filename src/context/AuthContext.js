import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import apiClient from "@/lib/apiClient"

const Context = createContext()

const AuthContext = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setToken(JSON.parse(localStorage.getItem("user")))
    }
  }, [])

  const handleAuth = (data) => {
    console.log(data)
    setUser(data)
    localStorage.setItem("user", JSON.stringify(data))

    // localStorage.removeItem("token")
  }
  const handleLogout = async () => {
    try {
      const response = await apiClient().get("/logout")
      localStorage.removeItem("user")
      router.push("/login")
    } catch (err) {
      console.log(err)
    }
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
