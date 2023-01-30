import StudentRow from "../student/StudentRow"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteData } from "@/redux/slices/pageDataSlice"
import apiClient from "@/lib/apiClient"
import Modal from "./Modal"
import TableHeader from "@/components/base/TableHeader"
import EditFormWrapper from "@/components/base/EditFormWrapper"
import { setAlert } from "@/redux/slices/alertSlice"

const Table = ({ columns }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [searchString, setSearchString] = useState("")
  const [action, setAction] = useState("")
  const [document, setDocument] = useState({})
  const [id, setId] = useState(null)
  const students = useSelector((state) => state.pageData.data)
  const { routeName } = useSelector((state) => state.pageInfo.pageInfo)
  const handleDelete = async (id) => {
    try {
      const response = await apiClient().delete(`/${routeName}/${id}`)
      console.log(response)
      dispatch(deleteData(id))
      dispatch(
        setAlert({
          status: "Error",
          title: "Success",
          message: "Data was deleted Successfuly",
          isAlert: true,
        })
      )
      setOpen(false)
    } catch (err) {
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
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="">
              {columns?.map((item, index) => (
                <th
                  className="p-2 text-left bg-gray-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border text-sm border-slate-300"
                  key={index}
                >
                  {item[0].toUpperCase() + "" + item.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hadnleFilteredData()?.map((item) => (
              <StudentRow
                data={item}
                handler={handleModal}
                columns={columns}
                key={item._id}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={action === "delete" ? "Delete Student" : "Edit Student"}
        size="sm"
      >
        {action === "delete" ? (
          <div className="flex gap-2 justify-center">
            <button
              className="bg-red-600 hover:bg-red-700 px-4 rounded text-white py-1"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button
              className="bg-white hover:bg-slate-100 border rounded px-4 py-1 text-slate-800"
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
