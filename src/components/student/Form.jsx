import { useState } from "react"
import SubmitButton from "../base/SubmitButton"
import TextField from "../base/TextField"
import DateField from "../base/DateField"
import CheckField from "../base/CheckField"
import apiClient from "@/lib/apiClient"
import { useDispatch } from "react-redux"
import { addData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"
import { dateFactory } from "@/lib/helpers/dateFactory"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"

const Form = ({ setOpen }) => {
  const { locale } = useLocaleContext()
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    occupation: "",
    isEmployee: false,
    score: "",
  })

  const handleChange = async (e) => {
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

    try {
      const response = await apiClient().post("/students", {
        ...fieldData,
        dateOfBirth,
      })
      console.log(response)
      dispatch(addData(response.data))
      setOpen(false)
      setFieldData({
        name: "",
        email: "",
        dateOfBirth: "",
        occupation: "",
        isEmployee: false,
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
      <SubmitButton
        buttonText={locale && langs[locale]["create"]}
        type="submit"
      />
    </form>
  )
}

export default Form
