import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";
import GlobeImg from "../../assets/webp/globe.webp";

const HubSectionTwo = () => {
  return (
    <section className="min-h-fit px-4 w-full xl:-mt-37.5">
      <div className="container max-w-291.5 w-full mx-auto">
        <div className="row w-full flex items-center justify-center gap-[clamp(30px,7vw,98px)] lg:flex-row flex-col lg:pb-37.5 md:pb-20 sm:pb-15 pb-10">
          <div className="left max-w-116.75 w-full flex flex-col lg:items-start items-center justify-center">
            <Badge
              data-aos="fade-right"
              className="h-7.25 max-w-51 w-full text-nowrap p-0! text-sm leading-100 font-normal"
            >
              What Is Waves of Innovation?
            </Badge>
            <HeadingTwo
              data-aos="fade-right"
              data-aos-delay="100"
              className="mt-3.25 relative lg:text-left text-center"
            >
              Don't Predict the Future. Map It With Patt
              <span className="text-[#D9B8F5]">erns.</span>
            </HeadingTwo>
            <ParagraphOne
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-full text-white/80 mt-[clamp(16px,3vw,25px)] lg:text-left text-center"
            >
              Waves of Innovation is a living system of insights, rooted in
              historical evidence, built to help leaders understand how
              technology, human behavior, and organizational change evolve
              together.
            </ParagraphOne>
            <ParagraphOne
              data-aos="fade-right"
              data-aos-delay="300"
              className="mt-[clamp(16px,2.5vw,20px)] text-white/80 w-full lg:text-left text-center"
            >
              Each Wave captures patterns, disruptions, and opportunities—
              <br className="xl:block hidden" />
              giving you the clarity needed to plan, adapt, and make informed
              decisions in an environment that never stops moving.
            </ParagraphOne>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="right w-full max-w-150"
          >
            <img
              width="600"
              height="480"
              src={GlobeImg}
              alt="globe"
              className="animate-float-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSectionTwo;
