import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Badge from "../common/Badge";
import ButtonPurple from "../common/ButtonPurple";
import HeadingTwo from "../common/HeadingTwo";
import Icons from "../common/Icons";
import ParagraphOne from "../common/ParagraphOne";
import { EPISODES_DATA } from "../../utils/helper";
import { Link } from "react-router-dom";

const useIsLoop = () => {
  const query = "(min-width: 641px)";
  const [isLoop, setIsLoop] = useState(
    typeof window !== "undefined" ? window.matchMedia(query).matches : true,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setIsLoop(e.matches);
    setIsLoop(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isLoop;
};

const Episodes = () => {
  const swiperRef = useRef(null);
  const isLoop = useIsLoop();
  const [edges, setEdges] = useState({ isBeginning: true, isEnd: false });

  const slides = isLoop ? [...EPISODES_DATA, ...EPISODES_DATA] : EPISODES_DATA;

  const syncEdges = (s) =>
    setEdges({ isBeginning: s.isBeginning, isEnd: s.isEnd });

  const prevDisabled = !isLoop && edges.isBeginning;
  const nextDisabled = !isLoop && edges.isEnd;

  return (
    <section className="min-h-fit w-full px-4 overflow-hidden">
      <div className="container max-w-319.75 w-full mx-auto">
        <div className="row w-full">
          <div className="top-part flex items-center justify-between gap-7.5 min-[993px]:flex-row flex-col">
            <div className="left max-w-135 w-full flex flex-col items-center min-[993px]:items-start">
              <Badge className="p-0! max-w-41 w-full h-7.25 text-sm font-normal">
                Recent Conversations
              </Badge>
              <HeadingTwo className="mt-3.25">
                Latest E<span className="text-purple18">p</span>
                <span className="text-purple19">i</span>
                <span className="text-purple16">s</span>
                <span className="text-purple20">o</span>
                <span className="text-purple21">d</span>
                <span className="text-purple22">e</span>
                <span className="text-purple23">s</span>
              </HeadingTwo>
              <ParagraphOne className="opacity-80 max-w-122 w-full mt-3.25 md:mt-6.25 min-[993px]:text-left text-center">
                Explore our most recent conversations with the architects and
                founders building the AI Native future.
              </ParagraphOne>
            </div>

            <div className="right mt-auto max-w-79.75 w-full flex items-center justify-center gap-[clamp(8px,2vw,12px)]">
              <ButtonPurple className="flex-1 min-w-0 max-w-47.75 p-0! h-[clamp(44px,9vw,51px)] text-[clamp(14px,3.8vw,16px)]">
                View All Episodes
              </ButtonPurple>

              <button
                type="button"
                aria-label="Previous episode"
                disabled={prevDisabled}
                onClick={() => swiperRef.current?.slidePrev()}
                className="shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Badge className="p-0! rounded-full! w-[clamp(40px,10vw,52px)] h-[clamp(40px,10vw,52px)] cursor-pointer">
                  <Icons icon="arrowLeft" />
                </Badge>
              </button>

              <button
                type="button"
                aria-label="Next episode"
                disabled={nextDisabled}
                onClick={() => swiperRef.current?.slideNext()}
                className="shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Badge className="p-0! rounded-full! w-[clamp(40px,10vw,52px)] h-[clamp(40px,10vw,52px)] cursor-pointer">
                  <Icons icon="arrowRight" />
                </Badge>
              </button>
            </div>
          </div>

          <div className="bottom mt-[clamp(30px,5vw,60px)] w-full">
            <Swiper
              key={isLoop ? "loop" : "static"}
              className="card-container-swiper w-full px-3! py-4! -mx-3 -my-4"
              style={{ width: "calc(100% + 1.5rem)" }}
              loop={isLoop}
              speed={600}
              grabCursor
              watchOverflow
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                641: { slidesPerView: 2, spaceBetween: 20 },
                1100: { slidesPerView: 3, spaceBetween: 20 },
              }}
              onSwiper={(s) => {
                swiperRef.current = s;
                syncEdges(s);
              }}
              onSlideChange={syncEdges}
              onResize={syncEdges}
              onBreakpoint={syncEdges}
            >
              {slides.map((obj, idx) => (
                <SwiperSlide key={idx} className="h-auto!">
                  <Link
                    to={`/episodes/${obj.slug}`}
                    className="card ep-card group relative block h-full cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out"
                  >
                    {/* <span className="ep-backdrop"/> */}

                    <div className="relative h-full overflow-hidden border border-solid border-white12 bg-white3 p-[clamp(10px,1vw,12px)] pb-[clamp(16px,1.6vw,20px)] rounded-20 transition-colors duration-500 ease-in-out group-hover:bg-white-tp group-hover:border-transparent">
                      <div className="ep-glow" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <img
                        width="389"
                        height="221"
                        className="relative z-10 w-full h-auto aspect-389/221 object-cover"
                        src={obj.img}
                        alt="podcast-img"
                      />

                      <div className="card-content relative z-10 mt-[clamp(14px,1.6vw,20px)] mx-[clamp(4px,0.6vw,8px)]">
                        <p className="text-white/80 uppercase font-normal text-[clamp(12px,3.4vw,14px)] leading-120">
                          Oct 28,2025
                        </p>
                        <h1 className="text-left whitespace-pre-line mt-1.5 text-white text-[clamp(18px,5.4vw,24px)] tracking-[-2%] leading-[1.3] line-clamp-2">
                          {obj.Heading}
                        </h1>
                        <p className="line-clamp-3 whitespace-pre-line text-left text-[clamp(14px,3.9vw,16px)] text-white/80 mt-3 leading-[1.4]">
                          {obj.Para}
                        </p>
                        <div className="flex flex-wrap items-center justify-start gap-[clamp(8px,2vw,12px)] w-full mt-4 md:mt-6.25">
                          <Badge
                            style={{ minWidth: obj.BadgeOneWidth }}
                            className="px-4! cursor-pointer h-7.25 font-normal text-[clamp(12px,3.4vw,14px)]! text-nowrap flex items-center justify-center"
                          >
                            {obj.BadgeOne}
                          </Badge>
                          <Badge
                            style={{ minWidth: obj.BadgeTwoWidth }}
                            className="px-4! cursor-pointer h-7.25 font-normal text-[clamp(12px,3.4vw,14px)]! text-nowrap flex items-center justify-center"
                          >
                            {obj.BadgeTwo}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <span className="ep-ring" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
