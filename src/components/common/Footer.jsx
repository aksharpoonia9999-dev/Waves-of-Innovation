import ButtonPurple from "../common/ButtonPurple";
import logo from "../../assets/img/svg/logo.svg";

const headingClass =
  "text-[clamp(1.125rem,1.04rem+0.4vw,1.25rem)] leading-tight font-medium break-words xl:whitespace-nowrap";
const textClass = "text-[clamp(0.875rem,0.84rem+0.18vw,1rem)]";

const linkClass =
  "relative w-fit max-w-full break-words text-white/80 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ppg after:transition-all after:duration-300 hover:after:w-full";

const quickLinks = ["Home", "Services", "Our Work", "About", "Blog", "Contact"];

const waveLinks = [
  "Hub",
  "Monthly Report",
  "Book",
  "Patterns",
  "Assessment",
  "Podcast",
];

const legalLinks = [
  "Partner & Referral Program",
  "Privacy Policy",
  "Terms & Conditions",
];

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <footer className="w-full overflow-x-clip bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-5.5 lg:pt-20 md:pt-15 pt-10">
        <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12 lg:gap-16 xl:gap-25.5">
          <div className="flex basis-full flex-col gap-5 md:gap-6 xl:basis-85.5 xl:shrink-0">
            <a href="">
              <img
                src={logo}
                alt="logo"
                className="h-[clamp(2rem,1.75rem+0.6vw,2.5rem)] w-fit max-w-full"
              />
            </a>
            <p
              className={`${textClass} leading-6 text-white/80 md:max-w-xl md:leading-6.25 xl:max-w-none`}
            >
              re:cinq is a tech consultancy helping medium and large
              organizations transition from Cloud Native to AI Native by
              building scalable AI platforms, improving software development
              with AI, and guiding teams through technical and organizational
              transformation.
            </p>
          </div>

          <div className="flex min-w-0 flex-1 basis-30 flex-col gap-4 md:gap-5 xl:flex-none xl:basis-auto">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className={`${textClass} flex flex-col gap-3`}>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-1 basis-30 flex-col gap-4 md:gap-5 xl:flex-none xl:basis-auto">
            <h3 className={headingClass}>Waves of innovation</h3>
            <ul className={`${textClass} flex flex-col gap-3`}>
              {waveLinks.map((item) => (
                <li key={item}>
                  <a href="#" className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 basis-full flex-col gap-4 md:max-w-100 md:gap-5 xl:max-w-89.5 xl:min-w-60 xl:grow xl:basis-60">
            <h3 className={headingClass}>Newsletter</h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 md:gap-6"
            >
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email"
                  className="h-12 w-full max-w-89.5 rounded-[9px] border border-white/12 bg-white/6 px-5 text-base text-white outline-none placeholder:text-white/80 focus:border-white/40 md:h-13.5 md:px-6"
                />
                <p
                  className={`${textClass} leading-6 text-white/80 md:leading-6.25`}
                >
                  Be The First One To Get Latest Updates And Stay Connected
                </p>
              </div>

              <ButtonPurple className="w-full sm:w-44.75">
                Subscribe Now
              </ButtonPurple>
            </form>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/12 md:mt-12 lg:mt-15" />

        <div
          className={`${textClass} flex flex-wrap items-center gap-x-12 gap-y-4 pt-6 md:pt-8`}
        >
          <p className="max-w-full">
            © 2024-{new Date().getFullYear()} re:cinq. All Rights Reserved.
          </p>

          <ul className="flex min-w-0 flex-1 basis-72 flex-wrap items-center gap-x-3 gap-y-2 justify-start min-[774px]:justify-end">
            {legalLinks.map((item, index) => (
              <li key={item} className="flex max-w-full items-center gap-3">
                {index !== 0 && (
                  <span className="size-0.75 shrink-0 rounded-full bg-white" />
                )}
                <a
                  href="#"
                  className="relative w-fit max-w-full wrap-break-word text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ppg after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
