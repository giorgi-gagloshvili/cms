import StudentForm from "./../student/Form"
import LecturerForm from "./../lecturer/Form"
import DegreesForm from "./../forms/degrees/DegreesForm"

const CreateForm = ({ routeName, setOpen }) => {
  switch (routeName) {
    case "students":
      return <StudentForm setOpen={setOpen} />
    case "lecturers":
      return <LecturerForm setOpen={setOpen} />
    case "degrees":
      return <DegreesForm setOpen={setOpen} />
    default:
      null
  }
}

export default CreateForm
