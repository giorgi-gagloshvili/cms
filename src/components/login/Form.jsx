import TextField from "./../base/TextField"
import SubmitButton from "./../base/SubmitButton"
import { useState } from "react"
import apiClient from "./../../lib/apiClient"
import { useRouter } from "next/router"
import { useAuthContext } from "../../context/AuthContext"

const Form = () => {
  const router = useRouter()
  const { token, handleAuth } = useAuthContext()
  const [fieldData, setFieldData] = useState({
    email: "",
    password: "",
  })

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiClient().post("/login", fieldData)
      console.log(response)
      handleAuth(response.data)
      router.push("/")
    } catch (err) {
      console.log(err.response.data, "Response data")
    }
  }
  return (
    <form
      className="border border-slate-300 shadow dark:border-slate-500 p-4 w-full bg-white dark:bg-gray-800 md:w-96 rounded"
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        placeholder="Enter email"
        name="email"
        value={fieldData.email}
        handleChange={handleChange}
        label="Email"
      />
      <TextField
        type="password"
        placeholder="Enter password"
        name="password"
        value={fieldData.password}
        handleChange={handleChange}
        label="Password"
      />
      <SubmitButton buttonText={"Login"} type="submit" />
    </form>
  )
}

export default Form
