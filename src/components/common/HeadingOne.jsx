const HeadingOne = ({ children, className = "", ...rest }) => {
  return (
    <h1
      {...rest}
      className={`text-[clamp(32px,5vw,65px)] text-white  ${className}`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
