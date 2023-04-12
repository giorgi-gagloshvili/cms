import StudentRow from "./StudentRow"
import TableRow from "@/components/table/TableRow"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteData } from "@/redux/slices/pageDataSlice"
import apiClient from "@/lib/apiClient"
import Modal from "../base/Modal"
import TableHeader from "@/components/base/TableHeader"
import EditFormWrapper from "@/components/base/EditFormWrapper"
import { setAlert } from "@/redux/slices/alertSlice"
import ButtonLoader from "../base/ButtonLoader"
// import { MdPersonSearch } from "react-icons/md"
import { MdPersonSearch } from "react-icons/md"
import langs from "@/lib/locale"
import { useLocaleContext } from "@/context/LocaleContext"

const Table = () => {
  const dispatch = useDispatch()
  const { locale } = useLocaleContext()
  const [open, setOpen] = useState(false)
  const [searchString, setSearchString] = useState("")
  const [action, setAction] = useState("")
  const [document, setDocument] = useState({})
  const [id, setId] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const students = useSelector((state) => state.pageData.data)
  const { routeName, columns } = useSelector((state) => state.pageInfo.pageInfo)

  const handleDelete = async (id) => {
    setIsSubmitted(true)
    try {
      const response = await apiClient().delete(`/${routeName}/${id}`)
      console.log(response)
      dispatch(deleteData(id))
      dispatch(
        setAlert({
          status: "success",
          title: "Success",
          message: "Data was deleted Successfuly",
          isAlert: true,
        })
      )
      setIsSubmitted(false)
      setOpen(false)
    } catch (err) {
      setIsSubmitted(false)
      console.log(err)
    }
  }

  const hadnleFilteredData = () => {
    const filtered = searchString
      ? students.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        )
      : students
    return filtered
  }

  const handleModal = (id, actionType) => {
    setId(id)
    setAction(actionType)
    setOpen(true)
    const doc = students.find((item) => item._id === id)
    setDocument(doc)
  }

  return (
    <>
      <TableHeader
        routeName={routeName}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      {students.length > 0 ? (
        <div className="w-full overflow-x-auto shadow-md">
          <table className="w-full border border-collapse">
            <thead>
              <tr className="rounded">
                {columns?.map((item, index) => (
                  <th
                    className="p-2 text-left bg-gray-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border text-sm border-slate-300"
                    key={index}
                  >
                    {item[0].toUpperCase() + "" + item.slice(1)}
                  </th>
                ))}
                <th className="p-2 text-left bg-gray-100 w-[120px] dark:bg-slate-700 text-slate-800 dark:text-slate-200 border text-sm border-slate-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {hadnleFilteredData()?.map((item) => (
                <TableRow
                  key={item._id}
                  data={item}
                  routeName={routeName}
                  handler={handleModal}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh_-_124px)] flex gap-2 justify-center items-center">
          <span>
            <MdPersonSearch size={30} color="#0284c7" />
          </span>
          <h3 class="text-3xl">{locale && langs[locale]["no_data"]}</h3>
        </div>
      )}
      <Modal
        open={open}
        setOpen={setOpen}
        title={action === "delete" ? "Delete Student" : "Edit Student"}
        size="sm"
      >
        {action === "delete" ? (
          <div className="flex gap-2 justify-center">
            <button
              className="bg-red-600 hover:bg-red-700 rounded w-[90px] text-white py-1"
              onClick={() => handleDelete(id)}
            >
              {isSubmitted ? <ButtonLoader /> : "Delete"}
            </button>
            <button
              className="bg-white hover:bg-slate-100 border w-[90px] rounded py-1 text-slate-800"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <EditFormWrapper id={id} document={document} setOpen={setOpen} />
        )}
      </Modal>
    </>
  )
}

export default Table
