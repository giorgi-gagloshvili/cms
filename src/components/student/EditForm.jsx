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
    occupation: "",
    isEmployeed: false,
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
    const response = await apiClient().put(`/students/${id}`, fieldData)
    dispatch(editData(response.data))
    dispatch(
      setAlert({
        status: "success",
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
        placeholder="Occupation"
        name="occupation"
        value={fieldData.occupation}
        handleChange={handleChange}
        label="Occupation"
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
