const SubmitButton = ({ buttonText, type }) => {
  return (
    <button
      type={type}
      className="h-8 px-8 border outline-none bg-sky-600 hover:bg-sky-700 rounded text-white"
    >
      {buttonText || "Button"}
    </button>
  )
}

export default SubmitButton
