import { Html, Head, Main, NextScript } from "next/document"
import { useSelector } from "react-redux"

export default function Document() {
  // const dispatch = useDispatch()
  // const darkMode = useSelector((state) => state.theme.dark)
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
