import { useState } from "react";
import Icons from "../common/Icons";
import HeadingTwo from "../common/HeadingTwo";
import { TESTIMONIALS_DATA } from "../../utils/helper";
import Badge from "../common/Badge";

const DEFAULT_ACTIVE = 1;

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(DEFAULT_ACTIVE);

  return (
    <section className="w-full overflow-x-clip bg-black px-4 text-white pb-5.25">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:gap-12 lg:gap-15">
        <div className="flex flex-col items-center gap-3.25 text-center relative">
          <Badge className="p-0! w-26.5 h-7.25">Testimonials</Badge>

          <HeadingTwo className="tracking-[-0.02em]">
            See What Other Readers Are{" "}
            <span className="text-pruple5">Saying</span>
          </HeadingTwo>

          <div className="absolute bottom-[-50%] left-[5%]">
            <Icons icon="singleStar" />
          </div>
        </div>

        <div
          onMouseLeave={() => setActiveIdx(DEFAULT_ACTIVE)}
          className="mx-auto grid w-full max-w-120 grid-cols-1 gap-x-5 gap-y-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS_DATA.map((obj, idx) => {
            const isActive = idx === activeIdx;

            return (
              <figure
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`relative isolate flex min-h-59.5 min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl border border-solid bg-white/2 p-6 transition-[border-color,box-shadow] duration-500 ${
                  isActive
                    ? "border-white/20 shadow-[0_0_12px_#8e2ee033,0_0_32px_#8e2ee022]"
                    : "border-white/10"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_82%_96%_at_100%_0%,rgba(192,148,248,0.95)_0%,rgba(142,46,224,0.62)_30%,rgba(100,30,170,0.3)_60%,transparent_86%)] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <Icons icon="stars" />

                <blockquote className="text-[clamp(0.9375rem,0.9rem+0.15vw,1rem)] leading-relaxed tracking-[-0.002em] wrap-break-word text-white/70">
                  {obj.quote}
                </blockquote>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
