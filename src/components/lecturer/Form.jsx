import { useState } from "react"
import SubmitButton from "../base/SubmitButton"
import TextField from "../base/TextField"
import apiClient from "@/lib/apiClient"
import { useDispatch } from "react-redux"
import { addData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"

const Form = ({ setOpen }) => {
  const { locale } = useLocaleContext()
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    position: "",
    degree: "",
    score: "",
  })

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiClient().post("/lecturers", fieldData)
      console.log(response)
      dispatch(addData(response.data))
      dispatch(
        setAlert({
          status: "success",
          title: "Success",
          message: "Lecturer was added successfuly",
          isAlert: true,
        })
      )
      setOpen(false)
      setFieldData({
        name: "",
        email: "",
        dateOfBirth: "",
        position: "",
        degree: "",
        score: "",
      })
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
      <SubmitButton
        buttonText={locale && langs[locale]["create"]}
        type="submit"
      />
    </form>
  )
}

export default Form
