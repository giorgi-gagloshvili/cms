import { useState } from "react"
import Head from "next/head"
import AlertMessage from "../base/AlertMessage"
import Header from "../Header"
import Sidebar from "../Sidebar"
import Router from "next/router"
import Loader from "../base/Loader"
import { useSelector } from "react-redux"

const Layout = ({ children }) => {
  const [shrink, setShrink] = useState(false)
  const [loading, setLoading] = useState(false)
  const title = useSelector((state) => state.pageInfo.pageInfo.routeName)

  Router.events.on("routeChangeStart", () => {
    setLoading(true)
  })

  Router.events.on("routeChangeComplete", () => {
    setLoading(false)
  })

  return (
    <>
      <Head>
        <title>{title ? title : "Cms"}</title>
      </Head>
      <Sidebar shrink={shrink} setShrink={setShrink} />
      <Header shrink={shrink} />

      <div
        className={`${
          shrink ? "ml-20" : "ml-20 lg:ml-48"
        } transition-all px-4 pt-4 duration-300 relative`}
      >
        <div
          className={`${
            loading ? "opacity-1 visible" : "opacity-0 invisible"
          } ${
            shrink ? "w-[calc(100%_-_64px)]" : "w-[calc(100%_-_200px)]"
          } h-[calc(100vh_-_64px)] flex bg-white z-20 transition-all duration-200
            fixed top-20 left-45 `}
        >
          <Loader />
        </div>
        {children}
        <AlertMessage />
      </div>
    </>
  )
}

export default Layout
