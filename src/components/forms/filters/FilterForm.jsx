import { useEffect, useState } from "react"
const { default: SelectField } = require("@/components/base/SelectField")
import SubmitButton from "@/components/base/SubmitButton"
import apiClient from "@/lib/apiClient"
import langs from "@/lib/locale"
import { useRouter } from "next/router"
import { getData } from "@/redux/slices/pageDataSlice"
import { useSelector, useDispatch } from "react-redux"
import { useLocaleContext } from "@/context/LocaleContext"

const FilterForm = ({ setOpen }) => {
  const router = useRouter()
  const { locale } = useLocaleContext()
  const data = useSelector((state) => state.relations.relations)
  const [filterData, setFilterData] = useState({})
  const [fields, setFields] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const dispatch = useDispatch()
  // console.log(data, "wonder how you can")
  useEffect(() => {
    const nodes = {}
    const fieldsArray = []
    for (let key in data) {
      nodes[key] = ""
      fieldsArray.push(data[key])
    }
    setFilterData(nodes)
    setFields(fieldsArray)
  }, [])

  const handleChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    let queryString = "?"
    for (let key in filterData) {
      queryString += key + "=" + filterData[key] + "&"
    }
    queryString = queryString.slice(0, queryString.length - 1)

    try {
      const response = await apiClient().get(`/lecturers/${queryString}`)
      console.log(response)
      setIsSubmitted(false)
      dispatch(getData(response.data))
      router.push(`lecturers/${queryString}`)
      setOpen(false)
    } catch (err) {
      setIsSubmitted(false)
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((item, index) =>
        item.type === "select" ? (
          <SelectField
            key={index}
            name={item.name}
            value={filterData[item.name]}
            handleChange={handleChange}
            label={item.name[0].toUpperCase() + item.name.slice(1)}
            data={item.options}
          />
        ) : (
          <input type="text" />
        )
      )}
      {/* {JSON.stringify(filterData)} */}
      <SubmitButton
        width="120px"
        isSubmitted={isSubmitted}
        buttonText={locale && langs[locale]["create"]}
        type="submit"
      />
    </form>
  )
}

export default FilterForm
