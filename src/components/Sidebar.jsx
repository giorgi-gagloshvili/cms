import { links } from "@/lib/constansts/links"
import { useLocaleContext } from "@/context/LocaleContext"
import { useState } from "react"
import Link from "next/link"
import langs from "@/lib/locale"
import { MdChevronLeft } from "react-icons/md"

const Sidebar = ({ shrink, setShrink }) => {
  const { locale } = useLocaleContext()
  const [activeIndex, setActiveIndex] = useState(false)
  return (
    <aside
      className={`border-r border-slate-300 dark:border-slate-600 h-screen fixed transition-all bg-white
      dark:bg-gray-800 duration-300 left-0 top-0 ${
        shrink ? "w-20" : "w-20 lg:w-48"
      }`}
    >
      <div className="h-16 border-b border-slate-300 shadow dark:border-slate-600 relative flex items-center justify-center w-full">
        <h1
          className={`${
            shrink ? "hidden" : "block"
          } text-slate-800 dark:text-slate-500 font-poppins`}
        >
          <Link href="/">Logo</Link>
        </h1>
        <MdChevronLeft
          size={22}
          onClick={() => setShrink(!shrink)}
          className={`${
            shrink ? "rotate-180 right-7" : "rotate-0 right-2"
          } transition-all text-slate=800 dark:text-slate-500 duration-300 absolute top-6 cursor-pointer`}
        />
      </div>
      <ul className="pt-2">
        {links.map((item, index) => (
          <li
            key={item.id}
            onClick={() => setActiveIndex(item.id)}
            className={`
            ${item.id === activeIndex ? "bg-gray-200 dark:bg-gray-700" : ""}
            cursor-pointer 
            border-b
            border-b-slate-300
            text-slate-800 dark:text-slate-300 
            hover:bg-gray-200 hover:dark:bg-gray-700`}
          >
            <Link
              className={`${
                shrink ? "px-8" : "px-4"
              } transition-all duration-300 flex gap-2 items-center h-[40px]  py-2 inline-block w-full`}
              href={item.url}
            >
              <span className="transition-all duration-300">{item.icon}</span>
              <span className={`${shrink ? "hidden" : ""}`}>
                {locale && langs[locale][item.name]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
