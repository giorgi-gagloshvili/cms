import StudentForm from "./../student/Form"
import LecturerForm from "./../lecturer/Form"

const CreateForm = ({ routeName, setOpen }) => {
  switch (routeName) {
    case "students":
      return <StudentForm setOpen={setOpen} />
    case "lecturers":
      return <LecturerForm setOpen={setOpen} />
    default:
      null
  }
}

export default CreateForm
