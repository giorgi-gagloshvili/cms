import { useContext, createContext, useState, useEffect } from "react"

const Context = createContext()

const LocaleContext = ({ children }) => {
  const [locale, setLocale] = useState("en")
  useEffect(() => {
    if (localStorage.getItem("locale") !== null) {
      setLocale(localStorage.getItem("locale"))
    }
  }, [])
  const handleLocale = () => {
    if (locale === "en") {
      setLocale("ge")
      localStorage.setItem("locale", "ge")
      document.documentElement.classList.remove("font-poppins")
      document.documentElement.classList.add("font-firago")
    } else {
      setLocale("en")
      localStorage.setItem("locale", "en")
      document.documentElement.classList.remove("font-firago")
      document.documentElement.classList.add("font-poppins")
    }
  }
  return (
    <Context.Provider value={{ locale, handleLocale }}>
      {children}
    </Context.Provider>
  )
}

export default LocaleContext

export const useLocaleContext = () => {
  return useContext(Context)
}
