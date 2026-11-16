import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import Icons from "../common/Icons";
import { THEMES_DATA } from "../../utils/helper";

const EveryEpisode = () => {
  return (
    <section className="min-h-fit w-full px-4">
      <div className="container max-w-320.25 w-full mx-auto">
        <div className="row w-full flex flex-col items-center justify-center lg:pt-37.5 md:pt-20 sm:pt-15 pt-10">
          <Badge className="p-0! max-w-38 w-full h-7.25 text-sm">
            Themes We Explore
          </Badge>
          <HeadingTwo className="mt-3.25">
            Inside Every <span className="text-purple16">E</span>
            <span className="text-purple24">p</span>
            <span className="text-purple25">i</span>
            <span className="text-purple12">s</span>
            <span className="text-purple26">ode</span>
          </HeadingTwo>

          <div className="mt-[clamp(30px,5vw,60px)] grid w-full grid-cols-1 gap-x-5.25 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
            {THEMES_DATA.map(({ icon, num, heading, para, paraMaxW }) => (
              <article
                key={num}
                className="ep-card cursor-pointer relative flex min-h-[324.05px] flex-col justify-between rounded-20 border border-white12 bg-white3 p-6 transition-colors duration-500 sm:p-8 hover:border-transparent hover:bg-white-tp"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px overflow-hidden rounded-20"
                >
                  <span className="ep-backdrop" />
                  <div className="ep-glow">
                    {Array.from({ length: 7 }, (_, i) => (
                      <span key={i} />
                    ))}
                  </div>
                  <span className="ep-ring" />
                </div>

                <div className="relative z-10 flex w-full items-center justify-between gap-4">
                  <Icons icon={icon} />
                  <span
                    aria-hidden="true"
                    className="ep-num shrink-0 select-none whitespace-nowrap text-[80px] leading-[normal] tracking-[-0.02em] [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]"
                  >
                    {num}
                  </span>
                </div>

                <div className="relative z-10 mt-10 flex w-full flex-col gap-4 text-white [word-break:break-word]">
                  <h3 className="text-[22px] leading-[normal] tracking-[-0.02em] sm:text-custom-2xl">
                    {heading}
                  </h3>
                  <p
                    className={`w-full text-[16px] leading-144 opacity-70 ${paraMaxW}`}
                  >
                    {para}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryEpisode;
