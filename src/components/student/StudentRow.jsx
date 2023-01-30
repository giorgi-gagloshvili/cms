import { MdOutlineDeleteOutline } from "react-icons/md"
import { RiFileEditLine } from "react-icons/ri"
import CircleButton from "../base/CircleButton"
const StudentRow = ({ data, columns, handler }) => {
  return (
    <tr className="text-slate-800 dark:text-slate-300 bg-white dark:bg-slate-800">
      {columns.map((th, index) =>
        th === "isEmployee" ? (
          <td className="p-2 border text-sm  border-slate-300" key={index}>
            yes
          </td>
        ) : th === "action" ? (
          <td
            className="p-2 border border-slate-300 flex justify-center gap-2"
            key={index}
          >
            <span
              onClick={() => handler(data._id, "delete")}
              className="flex justify-center"
            >
              <CircleButton position="static">
                <MdOutlineDeleteOutline />
              </CircleButton>
            </span>
            <span
              className="flex justify-center"
              onClick={() => handler(data._id, "edit")}
            >
              <CircleButton position="static">
                <RiFileEditLine />
              </CircleButton>
            </span>
          </td>
        ) : (
          <td className="p-2 border text-sm border-slate-300" key={index}>
            {data[th]}
          </td>
        )
      )}
    </tr>
  )
}

export default StudentRow
