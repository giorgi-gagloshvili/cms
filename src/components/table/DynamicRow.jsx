import StudentRow from "./StudentRow"
import LecturerRow from "./LecturerRow"
import DegreeRow from "./DegreeRow"
import { useSelector } from "react-redux"

const DynamicRow = ({ data }) => {
  const { columns, routeName } = useSelector((state) => state.pageInfo.pageInfo)

  switch (routeName) {
    case "students":
      return <StudentRow data={data} columns={columns} />
    case "lecturers":
      return <LecturerRow data={data} columns={columns} />
    case "degrees":
      return <DegreeRow data={data} columns={columns} />
  }
}

export default DynamicRow
