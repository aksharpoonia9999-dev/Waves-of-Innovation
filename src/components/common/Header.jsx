import { useState, useEffect } from "react";
import LogoImg from "../../assets/svg/logo.svg";
import Icons from "./Icons";

const NAVDATA = [
  { title: "Home", url: "#" },
  { title: "Services", url: "#" },
  { title: "Our Works", url: "#" },
  { title: "About", url: "#" },
  { title: "Blog", url: "#" },
];

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1072) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-2.5 md:top-5.5 left-0 z-30 w-full h-12.75 px-4 xl:px-0">
      <nav className="relative before:content-[''] before:absolute before:-inset-px before:-z-10 before:rounded-90 before:bg-white-tp backdrop-blur-3xl border border-solid bg-white-tp border-white28 max-w-7xl w-full h-12.75 mx-auto py-[11.5px] pl-5 pr-3 min-[1072px]:pr-1.5 rounded-90 flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <img
              width="104"
              height="28"
              className="w-26 h-7"
              src={LogoImg}
              alt="logo"
            />
          </a>
        </div>

        <div className="middle-part hidden min-[1072px]:flex items-center justify-center gap-7.5">
          <ul className="flex items-center justify-center gap-6">
            {NAVDATA.map((obj, idx) => (
              <li
                key={idx}
                className="text-white font-normal text-base leading-5.5"
              >
                <a
                  className="relative leading-5.5 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3.5 after:w-19.5 after:h-px after:bg-[linear-gradient(90deg,rgba(142,46,224,0)_0%,#8E2EE0_52.4%,rgba(142,46,224,0)_100%)] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                  href={obj.url}
                >
                  {obj.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="line h-4.5 bg-gray-gradient w-px"></div>

          <a
            className="relative flex items-center justify-center gap-1.5 leading-5.5 after:content-[''] after:absolute after:left-0 after:-bottom-3.5 after:w-full after:h-px after:bg-purple-gradient after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            href="#"
          >
            <p className="text-white">
              Waves of inno<span className="text-[#DABAF5]">vation</span>
            </p>
            <span>
              <Icons icon="downArrow" />
            </span>
          </a>
        </div>

        <div className="right-part hidden min-[1072px]:block">
          <div className="p-[0.5px] w-[288px] bg-border-gradient h-9.75 rounded-60">
            <button className="relative overflow-hidden group bg-black/40 max-w-[288px] w-full rounded-60 h-9.75 flex items-center justify-center cursor-pointer">
              <span className="absolute inset-0 bg-ppg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 text-white text-base leading-100 font-medium">
                Take Our Free Online AI Assessment.
              </span>
            </button>
          </div>
        </div>

        <button
          type="button"
          className="min-[1072px]:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>

      <div
        onClick={closeSidebar}
        className={`min-[1072px]:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      <aside
        className={`min-[1072px]:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85%] bg-[#0d0d12] border-l border-solid border-white28 p-6 flex flex-col gap-8 overflow-y-auto transition-[transform,visibility] duration-300 ease-out ${
          isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <div className="flex items-center justify-between">
          <img
            width="104"
            height="28"
            className="w-26 h-7"
            src={LogoImg}
            alt="logo"
          />
          <button
            type="button"
            className="text-white cursor-pointer"
            onClick={closeSidebar}
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="flex flex-col gap-5">
          {NAVDATA.map((obj, idx) => (
            <li key={idx} className="text-white text-lg leading-5.5">
              <a
                className="block py-1 hover:text-[#DABAF5] transition-colors"
                href={obj.url}
                onClick={closeSidebar}
              >
                {obj.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-gradient"></div>

        <a
          className="flex items-center gap-1.5 leading-5.5"
          href="#"
          onClick={closeSidebar}
        >
          <p className="text-white">
            Waves of inno<span className="text-[#DABAF5]">vation</span>
          </p>
          <span>
            <Icons icon="downArrow" />
          </span>
        </a>

        <div className="mt-auto p-[0.5px] w-full bg-border-gradient h-9.75 rounded-60">
          <button
            onClick={closeSidebar}
            className="relative overflow-hidden group bg-black/40 w-full rounded-60 h-9.75 flex items-center justify-center cursor-pointer"
          >
            <span className="absolute inset-0 bg-ppg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 text-white text-sm leading-100 font-medium">
              Take Our Free Online AI Assessment.
            </span>
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Header;
