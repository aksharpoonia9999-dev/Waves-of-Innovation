import { useState, useEffect } from "react";
import LogoImg from "../../assets/img/svg/logo.svg";
import Icons from "./Icons";

const NAVDATA = [
  { title: "Home", url: "#" },
  { title: "Services", url: "#" },
  { title: "Our Works", url: "#" },
  { title: "About", url: "#" },
  { title: "Blog", url: "#" },
];

const INNOVATIONDATA = [
  { title: "Hub", url: "#" },
  { title: "Podcast", url: "#" },
  { title: "Services", url: "#" },
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
  const [isInnovationOpen, setIsInnovationOpen] = useState(false);
  const [isMobileInnovationOpen, setIsMobileInnovationOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileInnovationOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1072) {
        setIsOpen(false);
        setIsMobileInnovationOpen(false);
      } else {
        setIsInnovationOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-2.5 md:top-5.5 z-30 box-border w-full max-w-full px-4 xl:px-0">
      <nav className="relative mx-auto flex h-12.75 w-full min-w-0 max-w-7xl items-center justify-between rounded-90 border border-solid border-white28 bg-white-tp py-[11.5px] pl-5 pr-3 backdrop-blur-3xl min-[1072px]:pr-1.5 before:absolute before:-inset-px before:-z-10 before:rounded-90 before:bg-white-tp">
        {/* LOGO */}
        <div className="logo shrink-0">
          <a href="#" aria-label="Home">
            <img
              width="104"
              height="28"
              className="block h-7 w-26 max-w-full"
              src={LogoImg}
              alt="Logo"
            />
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="middle-part hidden min-w-0 flex-1 items-center justify-center gap-7.5 min-[1072px]:flex">
          <ul className="flex shrink-0 items-center justify-center gap-6">
            {NAVDATA.map((obj) => (
              <li
                key={obj.title}
                className="whitespace-nowrap text-base font-normal leading-5.5 text-white"
              >
                <a
                  href={obj.url}
                  className="group relative isolate inline-block py-2 transition-all duration-500 hover:text-lav hover:[text-shadow:0_0_12px_rgba(180,100,255,0.5)] before:pointer-events-none before:absolute before:-inset-x-3 before:inset-y-0 before:-z-10 before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,rgba(142,46,224,0.22)_0%,rgba(142,46,224,0.08)_45%,transparent_75%)] before:opacity-0 before:blur-md before:transition-opacity before:duration-500 before:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-[calc(100%+16px)] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,transparent_0%,#7024B8_12%,#A855F7_32%,#E9D5FF_50%,#A855F7_68%,#7024B8_88%,transparent_100%)] after:shadow-[0_0_6px_rgba(168,85,247,0.8),0_0_18px_rgba(142,46,224,0.45)] after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:before:opacity-100 hover:after:scale-x-100"
                >
                  {obj.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4.5 w-px shrink-0 bg-gray-gradient"></div>

          {/* INNOVATION DROPDOWN */}
          <div className="relative shrink-0">
            <button
              type="button"
              aria-expanded={isInnovationOpen}
              aria-haspopup="true"
              onClick={() => setIsInnovationOpen((prev) => !prev)}
              className="group flex items-center justify-center relative isolate gap-1.5 py-2 transition-all duration-500 hover:text-lav hover:[text-shadow:0_0_12px_rgba(180,100,255,0.5)] before:pointer-events-none before:absolute before:-inset-x-3 before:inset-y-0 before:-z-10 before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,rgba(142,46,224,0.22)_0%,rgba(142,46,224,0.08)_45%,transparent_75%)] before:opacity-0 before:blur-md before:transition-opacity before:duration-500 before:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-[calc(100%+16px)] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,transparent_0%,#7024B8_12%,#A855F7_32%,#E9D5FF_50%,#A855F7_68%,#7024B8_88%,transparent_100%)] after:shadow-[0_0_6px_rgba(168,85,247,0.8),0_0_18px_rgba(142,46,224,0.45)] after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:before:opacity-100 hover:after:scale-x-100"
            >
              <span className="text-white">
                Waves of inno
                <span className="text-pruple5">vation</span>
              </span>

              <span
                className={`shrink-0 transition-transform duration-300 ${
                  isInnovationOpen ? "rotate-180" : ""
                }`}
              >
                <Icons icon="downArrow" />
              </span>
            </button>

            <div
              className={`absolute right-0 top-full z-50 mt-5 w-60 max-w-[calc(100vw-2rem)] origin-top-right rounded-2xl border border-white/10 bg-[#0d0d12]/95 p-2 shadow-2xl backdrop-blur-2xl transition-[opacity,transform,visibility] duration-300 ${
                isInnovationOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
              }`}
            >
              {INNOVATIONDATA.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={() => setIsInnovationOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-pruple5"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP CTA */}
        <div className="right-part hidden shrink-0 min-[1072px]:block">
          <div className="h-9.75 w-[288px] max-w-full rounded-60 p-[0.5px]">
            <button
              type="button"
              className="group relative flex h-9.75 w-full cursor-pointer items-center justify-center overflow-hidden rounded-60 border border-solid border-border28 bg-black/40"
            >
              <span className="absolute inset-0 translate-y-full bg-ppg transition-transform duration-500 ease-out group-hover:translate-y-0"></span>

              <span className="relative z-10 whitespace-nowrap text-base font-medium leading-100 text-white">
                Take Our Free Online AI Assessment.
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="shrink-0 cursor-pointer text-white min-[1072px]:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>

      {/* MOBILE BACKDROP */}
      <div
        aria-hidden="true"
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/60 transition-[opacity,visibility] duration-300 min-[1072px]:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* MOBILE SIDEBAR */}

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 box-border flex w-72 max-w-[85vw] flex-col gap-8 overflow-x-hidden overflow-y-auto border-l border-solid border-white28 bg-[#0d0d12] p-6 transition-[transform,visibility] duration-300 ease-out min-[1072px]:hidden ${
          isOpen ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex shrink-0 items-center justify-between gap-3">
          <a href="#" onClick={closeMobileMenu} aria-label="Home">
            <img
              width="104"
              height="28"
              className="block h-7 w-26 max-w-full"
              src={LogoImg}
              alt="Logo"
            />
          </a>

          <button
            type="button"
            aria-label="Close navigation menu"
            className="shrink-0 cursor-pointer text-white"
            onClick={closeSidebar}
          >
            <CloseIcon />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex shrink-0 flex-col gap-5">
          {NAVDATA.map((obj) => (
            <li key={obj.title} className="text-lg leading-5.5 text-white">
              <a
                className="block py-1 transition-colors hover:text-pruple5"
                href={obj.url}
                onClick={closeMobileMenu}
              >
                {obj.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-px w-full shrink-0 bg-gray-gradient"></div>

        {/* MOBILE INNOVATION DROPDOWN */}
        <div className="flex min-w-0 shrink-0 flex-col gap-3">
          <button
            type="button"
            aria-expanded={isMobileInnovationOpen}
            aria-controls="mobile-innovation-links"
            onClick={() => setIsMobileInnovationOpen((prev) => !prev)}
            className="flex min-w-0 items-center gap-1.5 text-left leading-5.5"
          >
            <span className="text-white">
              Waves of inno
              <span className="text-pruple5">vation</span>
            </span>

            <span
              className={`shrink-0 transition-transform duration-300 ${
                isMobileInnovationOpen ? "rotate-180" : ""
              }`}
            >
              <Icons icon="downArrow" />
            </span>
          </button>

          <div
            id="mobile-innovation-links"
            className={`grid transition-[grid-template-rows,opacity] duration-300 ${
              isMobileInnovationOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
                {INNOVATIONDATA.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={closeMobileMenu}
                    tabIndex={isMobileInnovationOpen ? 0 : -1}
                    className="py-2 text-sm text-white/70 transition-colors hover:text-pruple5"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE CTA */}
        <div className="mt-auto w-full shrink-0 rounded-60 bg-border-gradient p-[0.5px]">
          <button
            type="button"
            onClick={closeSidebar}
            className="group relative flex h-9.75 w-full cursor-pointer items-center justify-center overflow-hidden rounded-60 bg-black/40"
          >
            <span className="absolute inset-0 translate-y-full bg-ppg transition-transform duration-500 ease-out group-hover:translate-y-0"></span>

            <span className="relative z-10 whitespace-nowrap text-xs min-[425px]:text-sm font-medium leading-100 text-white">
              Take Our Free Online AI Assessment.
            </span>
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Header;
