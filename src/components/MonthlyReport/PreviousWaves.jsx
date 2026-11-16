import { useState } from "react";
import Icons from "../common/Icons";
import HeadingTwo from "../common/HeadingTwo";
import { PREVIOUS_WAVES_DATA } from "../../utils/helper";
import Stars from "../../assets/img/MonthlyReport/svg/star.svg"

const DEFAULT_ACTIVE = 0;

const RIM =
  "conic-gradient(from 0deg,rgba(255,255,255,0.4) 0deg,rgba(255,255,255,0.45) 30deg,rgba(255,255,255,0.32) 58deg,rgba(255,255,255,0.12) 70deg,rgba(255,255,255,0) 78deg,rgba(255,255,255,0) 86deg,rgba(255,255,255,0.2) 94deg,rgba(255,255,255,0.45) 108deg,rgba(255,255,255,0.5) 125deg,rgba(255,255,255,0.45) 180deg,rgba(255,255,255,0.4) 225deg,rgba(255,255,255,0.2) 246deg,rgba(255,255,255,0) 254deg,rgba(255,255,255,0) 262deg,rgba(255,255,255,0.3) 270deg,rgba(255,255,255,0.65) 282deg,rgba(255,255,255,0.7) 290deg,rgba(255,255,255,0.6) 305deg,rgba(255,255,255,0.5) 330deg,rgba(255,255,255,0.4) 360deg)";

const ReadButton = ({ children, isActive }) => (
  <button
    type="button"
    className="group/btn relative flex h-13 w-full cursor-pointer overflow-hidden rounded-114 p-px transition-transform duration-300 active:scale-[0.98]"
  >
    <span
      aria-hidden="true"
      style={{ backgroundImage: RIM }}
      className={`absolute inset-0 rounded-114 transition-opacity duration-500 group-hover/btn:opacity-0 ${
        isActive ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      aria-hidden="true"
      className="absolute inset-px rounded-114 bg-black"
    />
    <span
      aria-hidden="true"
      className={`absolute inset-0 rounded-114 bg-ppg transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0 ${
        isActive ? "translate-y-0" : "translate-y-full"
      }`}
    />
    <span className="relative z-10 flex w-full items-center justify-center text-base font-medium leading-100 text-white">
      {children}
    </span>
  </button>
);

const PreviousWaves = () => {
  const [activeIdx, setActiveIdx] = useState(DEFAULT_ACTIVE);

  return (
    <section className="w-full overflow-x-clip bg-black px-4 text-white lg:pb-30 md:pb-20 sm:pb-15 pb-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:gap-10 lg:gap-13">
        <HeadingTwo style={{ backgroundImage: `url(${Stars})` }} className="text-center tracking-[-0.02em] w-full bg-no-repeat bg-cover">
          Previous Wa<span className="text-pruple5">ves</span>
        </HeadingTwo>

        <div
          onMouseLeave={() => setActiveIdx(DEFAULT_ACTIVE)}
          className="mx-auto grid w-full max-w-180 grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2"
        >
          {PREVIOUS_WAVES_DATA.map((obj, idx) => {
            const isActive = idx === activeIdx;

            return (
              <article
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                className={`@container relative cursor-pointer isolate flex h-full min-w-0 flex-col overflow-hidden rounded-20 border border-solid bg-white/3 p-3.75 transition-[border-color,box-shadow] duration-500 ${
                  isActive
                    ? "border-white/20 shadow-[0_0_12px_#8e2ee033,0_0_32px_#8e2ee022]"
                    : "border-white/12"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_58%_at_62%_20%,rgba(142,46,224,0.52)_0%,rgba(142,46,224,0.24)_48%,transparent_100%)] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_46%_34%_at_0%_0%,rgba(205,172,255,0.95)_0%,rgba(175,126,244,0.6)_26%,rgba(142,46,224,0.22)_60%,transparent_100%)] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="flex flex-1 flex-col gap-3.75 @[440px]:flex-row">
                  <div className="flex h-[clamp(7.5rem,42cqw,13.6875rem)] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-solid border-white/10 bg-neutral-900/60 @[440px]:h-auto @[440px]:min-h-54.75 @[440px]:w-[41.9%] @[440px]:max-w-62.5">
                    <Icons icon={obj.icon} />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-3.75">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center justify-center gap-1.5 rounded-114 bg-black/40 py-1.5 pl-3 pr-4 text-sm leading-normal whitespace-nowrap text-white">
                        <Icons icon="calendarSm" />
                        {obj.date}
                      </span>
                      <span className="inline-flex items-center justify-center gap-1.5 rounded-114 bg-black/40 py-1.5 pl-3 pr-4 text-sm leading-normal whitespace-nowrap text-white">
                        <Icons icon="clockSm" />
                        {obj.readTime}
                      </span>
                    </div>

                    <h3 className="text-[clamp(1.125rem,1.03rem+0.5vw,1.25rem)] leading-[1.35] font-normal tracking-[-0.02em] wrap-break-word text-white">
                      {obj.title}
                    </h3>

                    <ul className="flex flex-col gap-1.5 text-[clamp(0.875rem,0.84rem+0.18vw,1rem)] text-white/70">
                      {obj.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="ms-6 list-disc leading-[1.4375]"
                        >
                          <span className="line-clamp-2 wrap-break-word">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-solid border-white/6 bg-white/2 p-4">
                  <p className="line-clamp-3 text-center text-[clamp(1rem,0.9rem+0.5vw,1.25rem)] leading-[1.3] font-medium wrap-break-word text-white">
                    {obj.summary}
                  </p>
                </div>

                <div className="mt-5">
                  <ReadButton isActive={isActive}>{obj.btn}</ReadButton>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreviousWaves;
