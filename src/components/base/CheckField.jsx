const CheckField = ({ name, label, value, type, handleChange }) => {
  return (
    <div>
      <div className="text-sm text-slate-800 dark:text-slate-300 mb-1">
        {label}
      </div>
      <label htmlFor={name} className="">
        <input
          className="opacity-0 absolute"
          type={type}
          id={name}
          name={name}
          checked={value}
          onChange={handleChange}
        />
        <div className="w-12 inline-block h-7 rounded-full transition-all duration-200 border-2 border-sky-600 p-[2px]">
          <div className="w-[51%] h-[100%] transition-all duration-200 bg-sky-600 rounded-full border border-sky-600"></div>
        </div>
      </label>
    </div>
  )
}

export default CheckField
