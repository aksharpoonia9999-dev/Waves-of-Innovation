import { Fragment } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getEpisodeBySlug, cleanText } from "../../utils/helper";
import BgImg from "../../assets/img/Podcast/webp/singleEPbg.webp";
import starsImg from "../../assets/img/Podcast/svg/middle-stars.svg";
import Header from "../common/Header";
import Badge from "../common/Badge";
import Icons from "../common/Icons";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";
import Footer from "../common/Footer";

const TITLE_SHADES = [
  "text-purple18",
  "text-purple19",
  "text-purple16",
  "text-purple20",
  "text-purple21",
  "text-purple22",
  "text-purple23",
];

const GradientTitle = ({ text }) => {
  const words = text.split(" ");
  const last = words.pop();

  return (
    <>
      {words.join(" ")}{" "}
      <span className="whitespace-nowrap">
        {[...last].map((char, i) => (
          <span
            key={i}
            className={TITLE_SHADES[Math.min(i, TITLE_SHADES.length - 1)]}
          >
            {char}
          </span>
        ))}
      </span>
    </>
  );
};

const Pill = ({ children, textClass = "text-white", className = "" }) => (
  <Badge type="button" tabIndex={-1} className="p-0! h-7.25 cursor-default">
    <span
      className={`inline-flex items-center gap-1.5 px-4 text-sm leading-none font-normal tracking-normal whitespace-nowrap ${textClass} ${className}`}
    >
      {children}
    </span>
  </Badge>
);

const SingleEpisode = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const episode = getEpisodeBySlug(slug);

  if (!episode) return <Navigate to="/podcast" replace />;

  const handleBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate("/podcast");
  };

  const title = cleanText(episode.Heading);
  const date = episode.date;
  const tags =
    episode.tags ?? [episode.BadgeOne, episode.BadgeTwo].filter(Boolean);
  const description = episode.description ?? cleanText(episode.Para);
  const highlights = episode.highlights ?? [];

  const meta = [
    episode.host && {
      label: "Hosted by",
      node: <Pill className="px-5.75!">{episode.host}</Pill>,
    },
    episode.guest && {
      label: "Featuring",
      node: <Pill>{episode.guest}</Pill>,
    },
    episode.guestTitle && {
      label: "Guest’s Job Title",
      node: <Pill>{episode.guestTitle}</Pill>,
    },
    episode.linkedin && {
      label: "Guest's Socials",
      node: (
        <a
          href={episode.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex size-7 items-center justify-center rounded-md bg-white transition-transform duration-300 active:scale-90"
        >
          <span className="invert flex [&_svg]:size-5">
            <Icons icon="linkedin" />
          </span>
        </a>
      ),
    },
  ].filter(Boolean);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${BgImg})` }}
        className="min-h-fit bg-center bg-no-repeat bg-cover pb-8.5"
      >
        <div className="top-part w-full bg-ppg px-4">
          <div className="container max-w-166.75 w-full mx-auto">
            <div className="row pb-3 pt-3.5 w-full flex items-center justify-center gap-2.5">
              <p className="font-medium! text-[clamp(12px,2vw,16px)] leading-120 xl:leading-6.25 text-white">
                Happening on:{" "}
                <span className="italic font-bold leading-120 xl:leading-6.25 text-[clamp(12px,2vw,16px)]">
                  Feb 28,2025
                </span>{" "}
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-[clamp(12px,2vw,16px)] text-white tracking-[-2%] font-normal leading-120">
                  Join Our Live Webinar: Building AI-Native Systems at Scale
                </p>

                <a
                  className="underline text-white text-[clamp(12px,2vw,16px)] font-bold leading-120"
                  href="#"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <Header className="min-[426px]:top-22.5! top-20! absolute!"></Header>

        <div className="navigation-info w-full pt-29.75 px-4">
          <div className="container max-w-7xl w-full mx-auto flex items-center gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="h-9.25 w-9 shrink-0 cursor-pointer active:scale-80 hover:bg-white/10 transition-all duration-200 ease-in-out flex items-center justify-center rounded-md border border-solid border-gray-border bg-gray60"
            >
              <Icons icon="leftArrowNav" />
            </button>

            <div className="flex flex-wrap items-center gap-2.5">
              <Pill>Podcast</Pill>
              {date && (
                <Pill>
                  <Icons icon="calender" />
                  {date}
                </Pill>
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-7 px-4">
          <div className="container max-w-7xl w-full mx-auto">
            <img
              src={episode.epImg}
              alt={title}
              className="block w-full aspect-video sm:aspect-1323/575 xl:aspect-auto xl:h-143.75 rounded-20 min-[1440px]:w-330.75 min-[1440px]:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-16 md:pb-32 xl:pb-61.75">
        <div className="container max-w-7xl w-full mx-auto relative">
          <span className="pointer-events-none sm:absolute left-12.5 top-77.5 -z-10 h-95.25 max-w-199 w-full rounded-full bg-primary-purple/30 blur-[100px]" />
          <div className="max-w-219.75 w-full flex flex-col gap-6">
            <HeadingTwo className="xl:leading-16.25! tracking-[-0.02em] wrap-break-word">
              <GradientTitle text={title} />
            </HeadingTwo>

            {tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {tags.map((tag) => (
                  <Pill
                    key={tag}
                    textClass="text-neutral-400 opacity-85 capitalize"
                  >
                    {tag}
                  </Pill>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-6">
              <ParagraphOne className="text-light-gray! xl:leading-7.25!">
                {description}
              </ParagraphOne>

              {meta.length > 0 && (
                <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-x-6 gap-y-5 md:flex md:items-center md:gap-10">
                  {meta.map((item, i) => (
                    <Fragment key={item.label}>
                      {i > 0 && (
                        <span className="hidden md:block w-px h-12.25 shrink-0 bg-linear-to-b from-white/0 via-white/40 to-white/0" />
                      )}
                      <div className="flex min-w-0 flex-col items-start gap-2.5">
                        <p className="text-sm leading-5 text-white/70 whitespace-nowrap">
                          {item.label}
                        </p>
                        {item.node}
                      </div>
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>

          {highlights.length > 0 && (
            <div className="relative mt-10 max-w-219.75 w-full rounded-xl border border-solid border-white/20 bg-black/10 p-5 sm:p-6">
              <img
                src={starsImg}
                className="absolute top-0 right-0 h-39.25"
                alt="stars"
              />

              <h2 className="text-xl sm:text-2xl leading-8 font-bold text-purple24">
                Episode Highlights
              </h2>

              <ul className="mt-6 list-disc ps-6 space-y-3 text-base leading-6 text-white/75">
                {highlights.map((point, i) => (
                  <li className="whitespace-pre-line" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleEpisode;
