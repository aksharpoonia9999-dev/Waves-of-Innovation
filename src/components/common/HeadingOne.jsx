
const HeadingOne = ({children , className = ""}) => {
  return (
    <h1 className={`text-[clamp(32px,5vw,65px)] text-white  ${className}`}>
      {children}
    </h1>
  )
}

export default HeadingOne
