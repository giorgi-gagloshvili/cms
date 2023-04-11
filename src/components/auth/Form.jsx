import TextField from "../base/TextField"
import SubmitButton from "../base/SubmitButton"
import { useState } from "react"
import apiClient from "../../lib/apiClient"
import { useRouter } from "next/router"
import Link from "next/link"
import { useAuthContext } from "../../context/AuthContext"
import langs from "@/lib/locale"
import { useLocaleContext } from "@/context/LocaleContext"

const Form = () => {
  const router = useRouter()
  const { locale } = useLocaleContext()
  const { token, handleAuth } = useAuthContext()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fieldData, setFieldData] = useState({
    email: "",
    password: "",
  })

  const handleChange = async (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)

    try {
      const response = await apiClient().post("/login", fieldData)
      console.log(response)
      handleAuth(response.data)
      setIsSubmitted(false)
      router.push("/")
    } catch (err) {
      setIsSubmitted(false)
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
      <div className="flex items-center justify-between">
        <SubmitButton
          buttonText={locale && langs[locale]["login"]}
          type="submit"
          width="120px"
          isSubmitted={isSubmitted}
        />
        <Link
          href="/register"
          className="text-sm text-slate-800 dark:text-slate-200"
        >
          Sign up
        </Link>
      </div>{" "}
    </form>
  )
}

export default Form
