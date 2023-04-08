const CheckField = ({ name, label, value, type, handleChange }) => {
  return (
    <div>
      <label
        htmlFor=""
        className="block text-sm text-slate-800 dark:text-slate-300"
      >
        {label}
      </label>
      <input type={type} name={name} checked={value} onChange={handleChange} />
    </div>
  )
}

export default CheckField
