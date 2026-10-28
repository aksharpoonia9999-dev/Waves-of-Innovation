import BgImg from "../../assets/webp/purple-bg.webp";
import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";

const BottomSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="min-h-fit xl:min-h-161 px-4 w-full bg-center bg-cover bg-no-repeat max-w-7xl mx-auto flex items-center justify-center rounded-20"
    >
      <div className="content flex flex-col items-center justify-center max-w-222 w-full lg:pt-60.25 lg:pb-0 md:pb-25 md:pt-25 sm:pt-15 sm:pb-15 pt-10 pb-10">
        <Badge
          data-aos="zoom-in"
          className="p-0! flex items-center justify-center text-nowrap w-27.75 h-7.25"
        >
          How It Works
        </Badge>
        <HeadingTwo
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center w-full mt-3.25 leading-120 xl:leading-16.25 font-normal!"
        >
          Ready to Navigate the Next W<span className="text-[#DBBCF5]">a</span>
          <span className="text-[#D1ABF3]">ve?</span>
        </HeadingTwo>

        <ParagraphOne
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full text-white/80 text-center mt-4 sm:mt-5"
        >
          Join a community built for technology leaders by hands-on
          practitioners. Get direct access to our expert insights, monthly
          reports, podcast, and the strategic tools we use to guide the world’s
          leading companies.
        </ParagraphOne>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="350"
          className="mt-[clamp(15px,3vw,30px)]"
        >
          <button className="animate-glow-pulse group cursor-pointer relative isolate overflow-hidden bg-white-tp border border-solid border-white rounded-114 w-51 h-12.75 font-normal text-base leading-100 text-white transition-colors duration-500 hover:border-transparent">
            <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ppg transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
            <span className="relative z-10">Join the Community</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
