import { useState, useEffect } from "react"
import Head from "next/head"
import Layout from "@/components/layouts/Layout"
import Modal from "@/components/base/Modal"
import Form from "@/components/lecturer/Form"
import Table from "@/components/base/Table"
import { useDispatch } from "react-redux"
import { getData } from "@/redux/slices/pageDataSlice"
import { getInfo } from "@/redux/slices/pageInfoSlice"

const Lecturer = ({ lecturers }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData(lecturers))
    dispatch(
      getInfo({
        routeName: "lecturers",
        modalTitle: "Lecturer",
      })
    )
  }, [])
  return (
    <>
      <Head>
        <title>Lecturer</title>
      </Head>

      <Table
        columns={[
          "name",
          "email",
          "dateOfBirth",
          "position",
          "degree",
          "score",
          "action",
        ]}
      />
    </>
  )
}

export default Lecturer

Lecturer.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/lecturers")
  const result = await response.json()

  return {
    props: {
      lecturers: result,
    },
  }
}
