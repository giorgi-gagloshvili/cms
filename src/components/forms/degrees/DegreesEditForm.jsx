import { useState, useEffect } from "react"
import SubmitButton from "../../base/SubmitButton"
import TextField from "../../base/TextField"
import apiClient from "@/lib/apiClient"
import { useDispatch } from "react-redux"
import { editData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"

const DegreesEditForm = ({ setOpen, id, document }) => {
  const { locale } = useLocaleContext()
  const dispatch = useDispatch()
  const [fieldData, setFieldData] = useState({
    name: "",
  })

  useEffect(() => {
    setFieldData(document)
  }, [document])

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await apiClient().put(`/degrees/${id}`, fieldData)
      console.log(response)
      dispatch(editData(response.data))
      setOpen(false)
      setFieldData({
        name: "",
      })
      dispatch(
        setAlert({
          status: "success",
          title: "Success",
          message: "Degree was updated successfuly",
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
        buttonText={locale && langs[locale]["edit"]}
        type="submit"
      />
    </form>
  )
}

export default DegreesEditForm
