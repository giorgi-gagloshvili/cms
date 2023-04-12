import { useEffect } from "react"
import {
  MdLanguage,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "react-icons/md"
import { useLocaleContext } from "@/context/LocaleContext"
import { useAuthContext } from "@/context/AuthContext"
import langs from "@/lib/locale"
import { useSelector, useDispatch } from "react-redux"
import { setTheme, getTheme } from "@/redux/slices/themeSlice"

const Header = ({ shrink }) => {
  const { locale, handleLocale } = useLocaleContext()
  const { handleLogout } = useAuthContext()
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.dark)
  useEffect(() => {
    dispatch(getTheme())
  }, [])
  return (
    <header
      className={`
      ${shrink ? "ml-20" : "ml-20 lg:ml-48"}
      "
      transition-all
      duration-300
      flex 
      justify-between 
      sticky 
      bg-white
      border-b
      dark:border-slate-700
      top-0 
      border-slate-300 shadow
      dark:bg-gray-800
      z-20	 
      h-16 
      px-8 
      items-center 
      shadow-sm"
  `}
    >
      <ul className="ml-auto flex gap-4">
        <li className="flex items-center" onClick={() => dispatch(setTheme())}>
          {darkMode ? (
            <MdOutlineDarkMode
              size={22}
              className="text-slate-500 cursor-pointer"
            />
          ) : (
            <MdOutlineLightMode
              size={22}
              className="text-slate-500 cursor-pointer"
            />
          )}
        </li>
        <li
          className="text-blue-600 cursor-pointer flex gap-2 items-center"
          onClick={() => handleLocale()}
        >
          <MdLanguage
            size={22}
            className="text-slate-500 dark:text-slate-500"
          />
          <span className="uppercase text-slate-500 dark:text-slate-500 text-sm">
            {locale}
          </span>
        </li>
        <li
          className="cursor-pointer text-slate-600 border py-[6px] px-4 rounded-full shadow text-sm dark:text-slate-400"
          onClick={handleLogout}
        >
          {locale && langs[locale]["logout"]}
        </li>
      </ul>
    </header>
  )
}

export default Header
