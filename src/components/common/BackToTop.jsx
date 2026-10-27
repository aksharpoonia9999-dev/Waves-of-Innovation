import { useState, useEffect } from "react";
import Icons from "./Icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group fixed bottom-5 right-5 sm:bottom-7.5 sm:right-7.5 z-50 isolate flex size-[clamp(30px,5vw,50px)] cursor-pointer rotate-270 items-center justify-center overflow-hidden rounded-full border border-solid border-white28 bg-white3 text-white transition-all duration-300 ease-out hover:scale-110 hover:border-white/60 hover:shadow-[0_0_12px_#8e2ee055,0_0_32px_#8e2ee033] active:scale-95"
        >
          <span className="absolute inset-0 -z-10 translate-y-full rounded-full bg-ppg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

          <span className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_100%,#8e2ee044,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="relative z-10 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-90">
            <Icons icon="upward" />
          </span>
        </button>
      )}
    </>
  );
};

export default BackToTop;
