import BgImg from "../../assets/img/MonthlyReport/webp/purple-bg.webp";
import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";

const NativeInsight = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="min-h-fit xl:min-h-161 px-4 w-full bg-center bg-cover bg-no-repeat max-w-7xl mx-auto flex items-center justify-center rounded-20"
    >
      <div className="content flex flex-col items-center justify-center max-w-222 w-full lg:pt-60.25 lg:pb-7.5 md:pb-25 md:pt-25 sm:pt-15 sm:pb-15 pt-10 pb-10">
        <Badge className="p-0! text-sm! flex items-center justify-center text-nowrap w-32.75 h-7.25">
          Monthly Reports
        </Badge>
        <HeadingTwo className="text-center w-full mt-3.25 leading-120 xl:leading-16.25 font-normal! tracking-[-2%] max-w-142.5">
          AI Native Insights, Deli<span className="text-purple17">verd</span>{" "}
          Monthly.
        </HeadingTwo>

        <ParagraphOne className="w-full text-white/80 text-center mt-4 sm:mt-5 max-w-162.75">
          Get the distilled insights, strategic frameworks, and real-world case
          studies our experts use to guide the world's leading companies.
          Straight to your inbox.
        </ParagraphOne>

        <div className="mt-[clamp(15px,3vw,30px)]">
          <button className="animate-glow-pulse group cursor-pointer relative isolate overflow-hidden bg-white-tp border border-solid border-white rounded-114 w-45.25 h-12.75 font-normal text-base leading-100 text-white transition-colors duration-500 hover:border-transparent">
            <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ppg transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
            <span className="relative z-10">Explore Our Book</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NativeInsight;
