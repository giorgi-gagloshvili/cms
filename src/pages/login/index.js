import AuthLayout from "../../components/layouts/AuthLayout"
import Form from "./../../components/login/Form"
import Head from "next/head"
const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Form />
    </>
  )
}

export default Login

Login.getLayout = (page) => <AuthLayout>{page}</AuthLayout>
