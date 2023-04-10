import { useState } from "react"
import CreateForm from "./CreateForm"
import Modal from "./Modal"
import FilterForm from "../forms/filters/FilterForm"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"
import { MdOutlineTune } from "react-icons/md"

const TableHeader = ({ searchString, setSearchString, routeName }) => {
  const { locale } = useLocaleContext()
  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState("")

  const handleModal = (type) => {
    setOpen(true)
    setModalType(type)
  }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
      <div className="flex gap-2">
        <button
          className="bg-sky-600 px-8 h-[36px] text-sm rounded text-white hover:bg-sky-700 w-full sm:w-auto"
          onClick={() => handleModal("create")}
        >
          {locale && langs[locale]["create"]}
        </button>
        <button
          className="bg-sky-600 px-8 h-[36px] text-sm flex items-center gap-1 rounded text-white hover:bg-sky-700 w-full sm:w-auto"
          onClick={() => handleModal("filter")}
        >
          <MdOutlineTune />
          {locale && langs[locale]["filter"]}
        </button>
      </div>

      <input
        type="text"
        className="border border-slate-400 h-[36px] dark:bg-slate-700 dark:text-slate-200 pl-3 rounded mt-2 sm:mt-0 w-full  sm:w-1/4 outline-none text-sm"
        placeholder="Search..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Modal open={open} setOpen={setOpen} title="Add Lecturer">
        {modalType === "create" && (
          <CreateForm routeName={routeName} setOpen={setOpen} />
        )}
        {modalType === "filter" && (
          <FilterForm routeName={routeName} setOpen={setOpen} />
        )}
      </Modal>
    </div>
  )
}

export default TableHeader
