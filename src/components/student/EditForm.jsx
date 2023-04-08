import { useEffect, useState } from "react"
import SubmitButton from "../base/SubmitButton"
import TextField from "../base/TextField"
import apiClient from "@/lib/apiClient"
import DateField from "../base/DateField"
import { useDispatch } from "react-redux"
import { editData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"
import CheckField from "../base/CheckField"
import { dateFactory } from "@/lib/helpers/dateFactory"

const EditForm = ({ document, id, setOpen }) => {
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    occupation: "",
    isEmployee: false,
    score: "",
  })

  useEffect(() => {
    const dateOfBirth = document.dateOfBirth
      ? new Date(document.dateOfBirth.split("-").reverse().join("-"))
      : null
    console.log(document.dateOfBirth, dateOfBirth)
    setFieldData({ ...document, dateOfBirth })
  }, [document])

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setFieldData({ ...fieldData, [e.target.name]: true })
      } else {
        setFieldData({ ...fieldData, [e.target.name]: false })
      }
    } else {
      setFieldData({ ...fieldData, [e.target.name]: e.target.value })
    }
  }

  const handleDate = (date, name) => {
    setFieldData({ ...fieldData, [name]: date })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dateOfBirth = dateFactory(fieldData.dateOfBirth)
    const response = await apiClient().put(`/students/${id}`, {
      ...fieldData,
      dateOfBirth,
    })
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

      <DateField
        placeholder="Enter date of birth"
        name="dateOfBirth"
        value={fieldData.dateOfBirth}
        handler={handleDate}
        label="Date of birth"
      />
      <CheckField
        type="checkbox"
        label="employee"
        handleChange={handleChange}
        name="isEmployee"
        value={fieldData.isEmployee}
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
