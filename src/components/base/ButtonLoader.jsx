const ButtonLoader = () => {
  return (
    <div className="flex gap-2 w-full h-full items-center justify-center">
      <div className="animate-loaderScaleOne opacity-75 w-[4px] h-[4px] bg-white rounded-full"></div>
      <div className="animate-loaderScaleTwo opacity-75 w-[4px] h-[4px] bg-white rounded-full"></div>
      <div className="animate-loaderScaleThree opacity-75 w-[4px] h-[4px] bg-white rounded-full"></div>
    </div>
  )
}

export default ButtonLoader
