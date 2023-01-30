const TextField = ({ type, name, handleChange, value, label, placeholder }) => {
  return (
    <div className="mb-2">
      <label
        className="block text-sm text-slate-800 dark:text-slate-300"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="border border-slate-300 h-[36px] pl-4 text-sm rounded dark:bg-slate-700 dark:text-slate-200 w-full outline-none focus:shadow"
        type={type}
        name={name}
        value={value}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default TextField
