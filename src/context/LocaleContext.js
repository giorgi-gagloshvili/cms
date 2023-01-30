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
    } else {
      setLocale("en")
      localStorage.setItem("locale", "en")
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
