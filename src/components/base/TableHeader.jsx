import { useState } from "react"
import SubmitButton from "./SubmitButton"
import CreateForm from "./CreateForm"
import Modal from "./Modal"
const TableHeader = ({ searchString, setSearchString, routeName }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between mb-2">
      <button
        className="bg-blue-500 px-8 h-[36px] rounded text-white hover:bg-blue-600"
        onClick={() => setOpen(true)}
      >
        Create
      </button>
      <input
        type="text"
        className="border border-slate-400 h-[36px] pl-3 rounded w-1/4 outline-none text-sm"
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
