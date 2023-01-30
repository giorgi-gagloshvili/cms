import { useState } from "react"
import SubmitButton from "../base/SubmitButton"
import TextField from "../base/TextField"
import apiClient from "@/lib/apiClient"
import { useDispatch } from "react-redux"
import { addData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"

const Form = ({ setOpen }) => {
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    occupation: "",
    isEmployeed: false,
    score: "",
  })

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiClient().post("/students", fieldData)
      console.log(response)
      dispatch(addData(response.data))
      setOpen(false)
      setFieldData({
        name: "",
        email: "",
        dateOfBirth: "",
        occupation: "",
        isEmployeed: false,
        score: "",
      })
      dispatch(
        setAlert({
          status: "success",
          title: "Success",
          message: "Student was added successfuly",
          isAlert: true,
        })
      )
    } catch (err) {
      console.log(err, "Response data")
    }
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
      <SubmitButton buttonText="Create" type="submit" />
    </form>
  )
}

export default Form
