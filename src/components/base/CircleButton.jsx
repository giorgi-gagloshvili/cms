const CircleButton = ({ children, position }) => {
  return (
    <button
      className={`
      ${position === "absolute" ? "top-2 z-10 absolute" : "relative z-10"}
      cursor-pointer 
      w-8 
      h-8 
      rounded-full
      bg-transparent
      flex 
      items-center 
      justify-center 
      overflow-hidden	
      before:transition-all
      before:duration-200
      before:content-[''] before:rounded-full before:-z-10 
      before:block	before:absolute before:top-0 before:left-0 
      before:w-full before:scale-0 before:h-full before:bg-gray-200 before:dark:bg-gray-700
      hover:before:scale-100`}
    >
      {children}
    </button>
  )
}

export default CircleButton
