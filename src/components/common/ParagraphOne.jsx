const ParagraphOne = ({ children, className = "", ...rest }) => {
  return (
    <p
      {...rest}
      className={`font-normal xl:leading-6.25 leading-120 text-white text-base ${className}`}
    >
      {children}
    </p>
  );
};

export default ParagraphOne;
