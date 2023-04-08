const LecturerRow = ({ data, columns }) => {
  return (
    <>
      {columns.map((th, index) =>
        th === "image" ? (
          <td className="w-[65px] p-1 relative">
            <img
              src={data[th]}
              className="w-full h-full absolute top-0 left-0 object-cover"
              alt="image/png"
            />
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
