import { useSelector } from "react-redux"

const LecturerRow = ({ data, columns }) => {
  const { degrees } = useSelector((state) => state.relations.relations)

  return (
    <>
      {columns.map((th, index) =>
        th === "image" ? (
          <td className="w-[65px] border border-slate-300 relative" key={index}>
            <img
              src={data[th]}
              className="w-full h-full p-1 absolute top-0 left-0 object-cover"
              alt="image/png"
            />
          </td>
        ) : th === "degrees" ? (
          <td className="p-2 border text-sm border-slate-300" key={index}>
            {degrees.options.filter((item) => item._id === data[th])[0].name}
            {/* {JSON.stringify(degrees)} */}
          </td>
        ) : (
          <td className="p-2 border text-sm border-slate-300" key={index}>
            {data[th]}
          </td>
        )
      )}
    </>
  )
}

export default LecturerRow
