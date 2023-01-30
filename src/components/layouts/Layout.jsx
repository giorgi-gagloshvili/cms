import { useState } from "react"
import AlertMessage from "../base/AlertMessage"
import Header from "../Header"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  const [shrink, setShrink] = useState(false)

  return (
    <>
      <Sidebar shrink={shrink} setShrink={setShrink} />
      <Header shrink={shrink} />
      <div
        className={`${
          shrink ? "ml-20" : "ml-20 lg:ml-48"
        } transition-all px-4 pt-4 duration-300`}
      >
        {children}
        <AlertMessage />
      </div>
    </>
  )
}

export default Layout
