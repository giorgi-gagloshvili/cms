const StudentRow = ({ data, columns }) => {
  return (
    <>
      {columns.map((th, index) =>
        th === "isEmployee" ? (
          <td className="p-2 border text-sm  border-slate-300" key={index}>
            {data[th] === true ? "Yes" : "No"}
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

export default StudentRow
