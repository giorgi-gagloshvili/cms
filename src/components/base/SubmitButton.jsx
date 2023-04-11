import ButtonLoader from "./ButtonLoader"
const SubmitButton = ({ buttonText, isSubmitted, type, width }) => {
  return (
    <button
      type={type}
      style={{ width }}
      className={`h-9 border outline-none bg-sky-600 hover:bg-sky-700 rounded text-sm text-white`}
    >
      {isSubmitted ? <ButtonLoader /> : buttonText || "Button"}
    </button>
  )
}

export default SubmitButton
