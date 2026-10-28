import BgStarsImg from "../../assets/webp/writer-stars.webp";
import WriterImgOne from "../../assets/svg/writer-1.svg";
import WriterImgTwo from "../../assets/svg/writer-2.svg";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";
import Line from "../../assets/svg/line.svg";

const HubSectionSix = () => {
  return (
    <section className="min-h-fit xl:min-h-113 w-full px-4 xl:-mb-7.5">
      <div
        style={{ backgroundImage: `url(${BgStarsImg})` }}
        className="container min-h-fit xl:min-h-113 bg-center bg-no-repeat bg-cover max-w-304 w-full mx-auto"
      >
        <div className="row w-full">
          <div className="content w-full flex flex-col items-center justify-center pt-1.5 sm:pt-3 md:pt-6 lg:pt-9">
            <div
              data-aos="zoom-in"
              className="writers max-w-64.25 w-full flex items-center justify-center gap-5 sm:gap-7"
            >
              <img
                width="114"
                height="163"
                className="animate-float-slow object-cover"
                src={WriterImgOne}
                alt="writer"
              />
              <img
                width="114"
                height="163"
                className="animate-float-slow-alt object-cover"
                src={WriterImgTwo}
                alt="writer"
              />
            </div>
            <HeadingTwo
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-1.5 text-center"
            >
              A Note From The W<span className="text-[#E7D3F9]">r</span>
              <span className="text-[#DEC2F6]">iters</span>
            </HeadingTwo>
            <ParagraphOne
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-167 w-full text-center text-white/80 mt-[clamp(15px,3vw,25px)]"
            >
              “Having navigated the Cloud Native wave, the shift to AI Native
              feels familiar. We have seen firsthand the predictable patterns
              that lead to costly mistakes and stalled projects.{" "}
              <br className="hidden min-[425px]:block" /> We created this
              ecosystem to share those hard-won lessons. Whether you are reading
              the book, using the patterns, or taking the assessment, our goal
              is to give you a pragmatic playbook to make the right
              architectural decisions.”
            </ParagraphOne>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="names flex items-center justify-center mt-2 gap-2 max-w-48 w-full"
            >
              <p className="italic font-medium text-base leading-120 text-white xl:leading-6.25  text-nowrap">
                Pini Reznik
              </p>
              <div className="line h-5.25 w-px! shrink-0">
                <img width="1" height="21" src={Line} alt="" />
              </div>
              <p className="italic font-medium text-base leading-120 text-white xl:leading-6.25  text-nowrap">
                Michael Müller
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSectionSix;
