import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { MdCheck, MdClose } from "react-icons/md"
import { setAlert } from "@/redux/slices/alertSlice"

const AlertMessage = () => {
  const dispatch = useDispatch()
  const { status, title, message, isAlert } = useSelector(
    (state) => state.alertMessage.alertMessage
  )
  useEffect(() => {
    let timeInterval = setTimeout(() => {
      dispatch(
        setAlert({
          status: "",
          title: "",
          message: "",
          isAlert: false,
        })
      )
    }, 3000)
    return () => {
      clearTimeout(timeInterval)
    }
  }, [isAlert])

  return (
    <div
      className={`${
        isAlert ? "animate-alert" : "translate-x-[-200%]"
      } fixed bottom-4 left-4 bg-gray-800 dark:bg-gray-200 text-white 
        dark:text-slate-700 px-4 py-4 rounded
          w-1/4 flex items-center gap-4`}
    >
      <div
        className={`${
          status === "success" ? "bg-green-500" : "bg-red-500"
        } rounded-full w-10 h-10 flex items-center justify-center`}
      >
        {status === "success" ? (
          <MdCheck color="#fff" size={20} />
        ) : status === "error" ? (
          <MdClose color="#fff" size={20} />
        ) : (
          <MdClose color="#fff" size={20} />
        )}
      </div>
      <div>
        <h4 className="font-bold tracking-wider">{title}</h4>
        <p className="text-sm tracking-wider">{message}</p>
      </div>
    </div>
  )

  // return null
}

export default AlertMessage
