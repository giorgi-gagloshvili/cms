import AuthLayout from "../../components/layouts/AuthLayout"
import RegisterForm from "../../components/auth/RegisterForm"
const Register = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

export default Register

Register.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

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
