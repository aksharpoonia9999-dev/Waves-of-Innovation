import { useState } from "react";
import Logo1 from "../../assets/webp/larsen.webp";
import Logo2 from "../../assets/webp/seabo.webp";
import Logo3 from "../../assets/webp/vandebron.webp";
import Logo4 from "../../assets/webp/skanda.webp";
import Logo5 from "../../assets/webp/fonix.webp";
import Logo6 from "../../assets/webp/odevo.webp";

const logos = [
  { src: Logo1, alt: "Ole Larsen", w: 218, h: 78 },
  { src: Logo2, alt: "Seabo", w: 78, h: 78 },
  { src: Logo3, alt: "Vandebron", w: 135, h: 74 },
  { src: Logo4, alt: "Skanda Energiindustri", w: 200, h: 52 },
  { src: Logo5, alt: "Fønix Invest", w: 200, h: 57 },
  { src: Logo6, alt: "Odevo", w: 200, h: 48 },
];

const LogoGroup = ({ hidden = false, onEnter, onLeave }) => (
  <div
    aria-hidden={hidden}
    className="flex shrink-0 items-center gap-[clamp(40px,7vw,100px)] pr-[clamp(40px,7vw,100px)]"
  >
    {logos.map(({ src, alt, w, h }) => (
      <img
        key={alt}
        src={src}
        alt={hidden ? "" : alt}
        width={w}
        height={h}
        draggable={false}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          width: `clamp(${Math.round(w * 0.5)}px, ${(w / 14.4).toFixed(2)}vw, ${w}px)`,
        }}
        className="h-auto max-w-none shrink-0 cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100"
      />
    ))}
  </div>
);

const HubSectionFour = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="min-h-fit xl:min-h-45 w-full bg-black">
      <div className="container max-w-382.75 w-full mx-auto">
        <div className="row w-full lg:pt-37.25 lg:pb-40.25 md:py-20 sm:py-15 py-10">
          <div className="content flex flex-col items-center justify-center">
            <h2
              data-aos="fade-up"
              className="w-full px-4 text-center text-white opacity-80 tracking-[-0.02em] text-[clamp(16px,2vw,24px)]"
            >
              Trusted by hundreds of technology leaders from companies like
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1100"
              className="inf-slider mt-[clamp(20px,4vw,40px)] w-full overflow-hidden
                         mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
                         [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            >
              <div
                className="animate-marquee flex w-max items-center motion-reduce:animate-none"
                style={{ animationPlayState: paused ? "paused" : "running" }}
              >
                <LogoGroup
                  onEnter={() => setPaused(true)}
                  onLeave={() => setPaused(false)}
                />
                <LogoGroup
                  hidden
                  onEnter={() => setPaused(true)}
                  onLeave={() => setPaused(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSectionFour;
