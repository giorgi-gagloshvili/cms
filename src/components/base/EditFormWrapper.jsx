import StudentForm from "./../student/EditForm"
import LecturerForm from "./../lecturer/EditForm"
import { useSelector } from "react-redux"

const EditFormWrapper = ({ id, document, setOpen }) => {
  const { routeName } = useSelector((state) => state.pageInfo.pageInfo)
  switch (routeName) {
    case "students":
      return <StudentForm id={id} document={document} setOpen={setOpen} />
    case "lecturers":
      return <LecturerForm id={id} document={document} setOpen={setOpen} />
    default:
      null
  }
}

export default EditFormWrapper
