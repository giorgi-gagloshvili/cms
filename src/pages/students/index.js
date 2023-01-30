import { useState, useEffect } from "react"
import Head from "next/head"
import Layout from "@/components/layouts/Layout"
import Modal from "@/components/base/Modal"
import Form from "@/components/student/Form"
import Table from "@/components/base/Table"
import { useDispatch } from "react-redux"
import { getData } from "@/redux/slices/pageDataSlice"
import { getInfo } from "@/redux/slices/pageInfoSlice"

const Students = ({ students }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  // const students = useSelector((state) => state.pageData.data)
  useEffect(() => {
    dispatch(getData(students))
    dispatch(
      getInfo({
        routeName: "students",
        modalTitle: "Student",
      })
    )
  }, [])
  return (
    <>
      <Head>
        <title>Students</title>
      </Head>
      <Table
        columns={[
          "name",
          "email",
          "dateOfBirth",
          "score",
          "isEmployee",
          "occupation",
          "action",
        ]}
      />
      {/* <Modal open={open} setOpen={setOpen} title="Add Student ">
        <Form setOpen={setOpen} />
      </Modal> */}
    </>
  )
}

export default Students

Students.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/students")
  const result = await response.json()
  // store.dispatch(getData(result))
  return {
    props: {
      students: result,
    },
  }
}
