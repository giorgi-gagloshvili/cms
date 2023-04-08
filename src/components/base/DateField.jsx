import DatePicker from "react-datepicker"

const DateField = ({ handler, name, label, value, placeholder }) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block text-sm text-slate-800 dark:text-slate-300"
      >
        {label}
      </label>
      <DatePicker
        className="border border-slate-300 h-[36px] pl-4 text-sm rounded dark:bg-slate-700 dark:text-slate-200 w-full outline-none focus:shadow"
        selected={value}
        placeholderText={placeholder}
        onChange={(date) => handler(date, name)}
      />
    </div>
  )
}

export default DateField
