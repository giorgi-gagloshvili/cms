import { useEffect } from "react"
import Layout from "@/components/layouts/Layout"
import Table from "@/components/table/Table"
import { useDispatch } from "react-redux"
import { getData } from "@/redux/slices/pageDataSlice"
import { getInfo } from "@/redux/slices/pageInfoSlice"

const Students = ({ students }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (Array.isArray(students)) {
      dispatch(getData(students))
    } else {
      dispatch(getData([]))
    }
    dispatch(
      getInfo({
        routeName: "students",
        modalTitle: "Student",
        columns: [
          "name",
          "email",
          "dateOfBirth",
          "score",
          "isEmployee",
          "occupation",
        ],
      })
    )
  }, [])
  return (
    <>
      <Table />
      {/* <Modal open={open} setOpen={setOpen} title="Add Student ">
        <Form setOpen={setOpen} />
      </Modal> */}
    </>
  )
}

export default Students

Students.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps = async (context) => {
  if (!context.req.headers.cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URI + "/students", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await response.json()
  // store.dispatch(getData(result))
  return {
    props: {
      students: result,
    },
  }
}
