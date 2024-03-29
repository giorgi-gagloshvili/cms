import AuthLayout from "../../components/layouts/AuthLayout"
import Form from "../../components/auth/Form"
const Login = () => {
  return (
    <>
      <Form />
    </>
  )
}

export default Login

Login.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export const getServerSideProps = async ({ req }) => {
  if (req.headers.cookie) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
