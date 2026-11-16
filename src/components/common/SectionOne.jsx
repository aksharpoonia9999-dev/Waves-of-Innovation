import BgImg from "../../assets/img/Hub/webp/bg-1.webp";
const SectionOne = ({ children , className = "" }) => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className={`w-full px-4 bg-center bg-cover bg-no-repeat xl:min-h-231 min-h-fit ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionOne;
