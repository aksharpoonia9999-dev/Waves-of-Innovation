const HeadingTwo = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-[clamp(28px,5vw,50px)] text-white xl:leading-15 leading-100 font-normal ${className}`}
    >
      {children}
    </h1>
  );
};

export default HeadingTwo;
