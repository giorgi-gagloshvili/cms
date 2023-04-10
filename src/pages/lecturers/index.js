import { useEffect } from "react"
import Layout from "@/components/layouts/Layout"
import Table from "@/components/table/Table"
import { useDispatch } from "react-redux"
import { getData } from "@/redux/slices/pageDataSlice"
import { getRelations } from "@/redux/slices/relationSlice"
import { getInfo } from "@/redux/slices/pageInfoSlice"
// import { redirect } from "next/dist/server/api-utils"

const Lecturer = ({ lecturers, degrees }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (Array.isArray(lecturers)) {
      dispatch(getData(lecturers))
      dispatch(getRelations({ degrees }))
    } else {
      dispatch(getData([]))
    }
    dispatch(
      getInfo({
        routeName: "lecturers",
        modalTitle: "Lecturer",
        columns: [
          "name",
          "image",
          "email",
          "dateOfBirth",
          "position",
          "degrees",
          "score",
        ],
      })
    )
  }, [])
  return (
    <>
      <Table />
    </>
  )
}

export default Lecturer

Lecturer.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps = async (context) => {
  // console.log(context.req.headers.cookie)
  if (!context.req.headers.cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URI + "/lecturers",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const result = await response.json()

  const degreesResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URI + "/degrees",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  const degreesResult = await degreesResponse.json()

  return {
    props: {
      lecturers: result,
      degrees: { name: "degrees", options: degreesResult, type: "select" },
    },
  }
}
