import { useState, useRef, useEffect } from "react"
import SubmitButton from "../base/SubmitButton"
import TextField from "../base/TextField"
import SelectField from "../base/SelectField"
import DateField from "../base/DateField"
import apiClient from "@/lib/apiClient"
import { useSelector, useDispatch } from "react-redux"
import { addData } from "@/redux/slices/pageDataSlice"
import { setAlert } from "@/redux/slices/alertSlice"
import { getRelations } from "@/redux/slices/relationSlice"
import { useLocaleContext } from "@/context/LocaleContext"
import langs from "@/lib/locale"
import axios from "axios"
import { MdClose } from "react-icons/md"
import { dateFactory } from "@/lib/helpers/dateFactory"

const Form = ({ setOpen }) => {
  const { locale } = useLocaleContext()
  const dispatch = useDispatch()
  const { degrees } = useSelector((state) => state.relations.relations)
  const [previewImage, setPreviewImage] = useState(null)
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    position: "",
    degree: "",
    score: "",
    image: "",
  })

  const imageRef = useRef(null)

  // useEffect(() => {
  //   console.log(degrees)
  // }, [])

  useEffect(() => {
    if (fieldData.image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(fieldData.image)
    }
  }, [fieldData.image])

  const handleChange = async (e) => {
    if (e.target.type === "file") {
      setFieldData({ ...fieldData, [e.target.name]: e.target.files[0] })
    } else {
      setFieldData({ ...fieldData, [e.target.name]: e.target.value })
    }
  }

  const handleDate = (date, name) => {
    setFieldData({ ...fieldData, [name]: date })
  }

  const handleImage = () => {
    imageRef.current.click()
  }

  const removePreviewImage = (e) => {
    e.stopPropagation()
    setFieldData({ ...fieldData, image: "" })
    setPreviewImage(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dateOfBirth = dateFactory(fieldData.dateOfBirth)
    const fd = new FormData()
    fd.append("file", fieldData.image)
    fd.append("upload_preset", "uploads")
    const imageResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/drlsbuyui/image/upload",
      fd
    )

    try {
      const response = await apiClient().post("/lecturers", {
        ...fieldData,
        dateOfBirth,
        image: imageResponse.data.url,
      })
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
      setPreviewImage(null)
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
      <DateField
        handler={handleDate}
        value={fieldData.dateOfBirth}
        label="Date of Birth"
        name="dateOfBirth"
        placeholder="Date of Birth"
      />

      <TextField
        type="text"
        placeholder="position"
        name="position"
        value={fieldData.position}
        handleChange={handleChange}
        label="position"
      />
      <SelectField
        name="degree"
        value={fieldData.degree}
        handleChange={handleChange}
        label="degree"
        data={degrees}
      />
      <TextField
        type="text"
        placeholder="score"
        name="score"
        value={fieldData.score}
        handleChange={handleChange}
        label="Score"
      />
      <div className="mb-2">
        <div
          onClick={handleImage}
          className="bg-blue-500 w-12 h-12 flex items-center relative text-slate-700 justify-center shadow-md rounded-full cursor-pointer"
        >
          {previewImage ? (
            <img
              src={previewImage}
              alt="preview-image"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            "U"
          )}

          <span
            onClick={removePreviewImage}
            className={`${
              previewImage ? "scale-100" : ""
            } scale-0 absolute border top-0 transition-all duration-200 right-0 shadow-sm flex items-center justify-center bg-white rounded-full w-4 h-4`}
          >
            <MdClose size={10} />
          </span>
        </div>
        <input
          type="file"
          name="image"
          ref={imageRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
      <SubmitButton
        buttonText={locale && langs[locale]["create"]}
        type="submit"
      />
    </form>
  )
}

export default Form
