import { MdClose } from "react-icons/md"
import CircleButton from "./CircleButton"

const Modal = ({ children, open, setOpen, title, size }) => {
  const handleCloseModal = (e) => {
    if (e.target.dataset.name === "modal") {
      setOpen(false)
    }
  }
  return (
    <div
      data-name="modal"
      onClick={(e) => handleCloseModal(e)}
      className={`
      ${open ? "visible opacity-100" : "invisible opacity-0"}
      w-full 
      transition-all
      duration-200
      flex
      h-screen 
      fixed 
      px-2
      top-0 
      left-0 
      bg-gray-400/50 
      dark:bg-gray-800/50
      z-20
      justify-center 
      items-center`}
    >
      <div
        className={`${open && "animate-bounced"} ${
          size === "sm" ? "w-full md:w-1/3" : "w-full md:w-3/4 lg:w-1/2"
        } overflow-y-auto my-2 rounded relative z-10 border dark:border-slate-600 bg-white dark:bg-gray-800 p-4`}
      >
        <CircleButton position="absolute">
          <MdClose
            onClick={() => setOpen(false)}
            className="transition-all text-gray-900 dark:text-white duration-200 hover:rotate-90"
          />
        </CircleButton>
        <div className="border-b text-xl text-center dark:text-slate-300 pb-2 mb-3">
          {title}
        </div>
        {children}
        <footer className="flex justify-center"></footer>
      </div>
    </div>
  )
}

export default Modal
