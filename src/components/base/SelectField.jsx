const SelectField = ({ name, label, data, value, handleChange }) => {
  return (
    <div>
      <label
        className="block text-sm text-slate-800 dark:text-slate-300"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className="border border-slate-300 h-[36px] pl-4 text-sm rounded dark:bg-slate-700 dark:text-slate-200 w-full outline-none focus:shadow"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        <option value="" key="asda">
          Choose item...
        </option>
        {data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
