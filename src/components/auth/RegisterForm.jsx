import TextField from "../base/TextField"
import SubmitButton from "../base/SubmitButton"
import Link from "next/link"
import { useState } from "react"
import apiClient from "../../lib/apiClient"
import { useRouter } from "next/router"
import { useAuthContext } from "../../context/AuthContext"

const RegisterForm = () => {
  const router = useRouter()
  const { token, handleAuth } = useAuthContext()
  const [fieldData, setFieldData] = useState({
    email: "",
    password: "",
    confirm: "",
    firstName: "",
    lastName: "",
  })

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiClient().post("/register", fieldData)
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
        placeholder="Enter First Name"
        name="firstName"
        value={fieldData.firstName}
        handleChange={handleChange}
        label="First Name"
      />
      <TextField
        type="text"
        placeholder="Enter last name"
        name="lastName"
        value={fieldData.lastName}
        handleChange={handleChange}
        label="Last Name"
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
        type="password"
        placeholder="Enter password"
        name="password"
        value={fieldData.password}
        handleChange={handleChange}
        label="Password"
      />
      <TextField
        type="password"
        placeholder="Confirm password"
        name="confirm"
        value={fieldData.confirm}
        handleChange={handleChange}
        label="cornfirm"
      />
      <div className="flex items-center justify-between">
        <SubmitButton buttonText={"Register"} type="submit" />
        <Link
          href="/login"
          className="text-sm text-slate-800 dark:text-slate-200"
        >
          Sign in
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
