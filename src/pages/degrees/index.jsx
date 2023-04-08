import Table from "@/components/table/Table"
import Layout from "@/components/layouts/Layout"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getData } from "@/redux/slices/pageDataSlice"
import { getInfo } from "@/redux/slices/pageInfoSlice"

const Degrees = ({ degrees }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (Array.isArray(degrees)) {
      dispatch(getData(degrees))
    } else {
      dispatch(getData([]))
    }
    dispatch(
      getInfo({
        routeName: "degrees",
        modalTitle: "Academic Degree",
        columns: ["name"],
      })
    )
  }, [])
  return <Table />
}

Degrees.getLayout = (page) => <Layout>{page}</Layout>

export default Degrees

export const getServerSideProps = async (context) => {
  if (!context.req.headers.cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URI + "/degrees", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await response.json()

  return {
    props: {
      degrees: result,
    },
  }
}
