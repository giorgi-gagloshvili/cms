import { MdOutlineDeleteOutline } from "react-icons/md"
import { RiFileEditLine } from "react-icons/ri"
import CircleButton from "../base/CircleButton"
import DynamicRow from "./DynamicRow"

const TableRow = ({ data, handler }) => {
  return (
    <tr className="text-slate-800 dark:text-slate-300 bg-white dark:bg-slate-800">
      <DynamicRow data={data} />
      <td className="p-2 border border-slate-300 flex justify-center gap-2">
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
    </tr>
  )
}

export default TableRow
