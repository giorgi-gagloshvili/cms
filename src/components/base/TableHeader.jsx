import { useState } from "react"
import CreateForm from "./CreateForm"
import Modal from "./Modal"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"

const TableHeader = ({ searchString, setSearchString, routeName }) => {
  const { locale } = useLocaleContext()
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
      <button
        className="bg-blue-500 px-8 h-[36px] rounded text-white hover:bg-blue-600 w-full sm:w-auto"
        onClick={() => setOpen(true)}
      >
        {locale && langs[locale]["create"]}
      </button>
      <input
        type="text"
        className="border border-slate-400 h-[36px] dark:bg-slate-700 dark:text-slate-200 pl-3 rounded mt-2 sm:mt-0 w-full  sm:w-1/4 outline-none text-sm"
        placeholder="Search..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Modal open={open} setOpen={setOpen} title="Add Lecturer">
        <CreateForm routeName={routeName} setOpen={setOpen} />
      </Modal>
    </div>
  )
}

export default TableHeader
