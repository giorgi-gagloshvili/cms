import Head from "next/head"
import { getTheme } from "@/redux/slices/themeSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const AuthLayout = ({ title, children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTheme())
  }, [])
  return (
    <>
      <Head>
        <title>{title ? title : "Cms"}</title>
      </Head>
      <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
        {children}
      </div>
    </>
  )
}

export default AuthLayout
