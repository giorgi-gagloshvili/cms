import { useState } from "react"
import SubmitButton from "../../base/SubmitButton"
import TextField from "../../base/TextField"
import apiClient from "@/lib/apiClient"
import { useDispatch } from "react-redux"
import { addData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"

const DegreesForm = ({ setOpen }) => {
  const { locale } = useLocaleContext()
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
  })

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await apiClient().post("/degrees", fieldData)
      console.log(response)
      dispatch(addData(response.data))
      setOpen(false)
      setFieldData({
        name: "",
      })
      dispatch(
        setAlert({
          status: "success",
          title: "Success",
          message: "Degree was added successfuly",
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

      <SubmitButton
        buttonText={locale && langs[locale]["create"]}
        type="submit"
      />
    </form>
  )
}

export default DegreesForm
