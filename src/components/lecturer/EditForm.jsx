import { useEffect, useState } from "react"
import SubmitButton from "../base/SubmitButton"
import TextField from "../base/TextField"
import apiClient from "@/lib/apiClient"
import { useDispatch } from "react-redux"
import { editData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"

const EditForm = ({ document, id, setOpen }) => {
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    position: "",
    degree: "",
    score: "",
  })

  useEffect(() => {
    setFieldData(document)
  }, [document])

  const handleChange = (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("handle this fuckin submit")
    const response = await apiClient().put(`/lecturers/${id}`, fieldData)
    console.log(response, "My Fucking response")
    dispatch(editData(response.data))
    dispatch(
      setAlert({
        status: "Success",
        title: "Success",
        message: "Student was updated successfuly",
        isAlert: true,
      })
    )
    setOpen(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Enter name"
        name="name"
        value={fieldData.name}
        handleChange={handleChange}
        label="Name"
      />
      <TextField
        type="text"
        placeholder="Enter email"
        name="email"
        value={fieldData.email}
        handleChange={handleChange}
        label="Email"
      />
      <TextField
        type="text"
        placeholder="Enter date of birth"
        name="dateOfBirth"
        value={fieldData.dateOfBirth}
        handleChange={handleChange}
        label="Date of birth"
      />

      <TextField
        type="text"
        placeholder="position"
        name="position"
        value={fieldData.position}
        handleChange={handleChange}
        label="position"
      />
      <TextField
        type="text"
        placeholder="degree"
        name="degree"
        value={fieldData.degree}
        handleChange={handleChange}
        label="degree"
      />
      <TextField
        type="text"
        placeholder="score"
        name="score"
        value={fieldData.score}
        handleChange={handleChange}
        label="Score"
      />
      <SubmitButton buttonText="Edit" type="submit" />
    </form>
  )
}

export default EditForm
