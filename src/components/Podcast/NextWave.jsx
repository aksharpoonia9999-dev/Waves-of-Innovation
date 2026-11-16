import BgImg from "../../assets/img/Hub/webp/purple-bg.webp";
import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";

const NextWave = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="min-h-fit xl:min-h-161 px-4 w-full bg-center bg-cover bg-no-repeat max-w-7xl mx-auto flex items-center justify-center rounded-20"
    >
      <div className="content flex flex-col items-center justify-center max-w-222 w-full lg:pt-60.25 lg:pb-5 md:pb-25 md:pt-25 sm:pt-15 sm:pb-15 pt-10 pb-10">
        <Badge className="p-0! flex items-center justify-center text-nowrap w-31.75 h-7.25 text-sm">
          The Community
        </Badge>
        <HeadingTwo className="text-center max-w-126 w-full mt-3.25 leading-120 xl:leading-16.25 font-normal!">
          Stay in Tune With <span className="text-purple32">t</span>
          <span className="text-purple24">h</span>
          <span className="text-purple33">e</span> Next Wave
        </HeadingTwo>

        <ParagraphOne className="w-full max-w-177.25 text-white/80 text-center mt-4 sm:mt-5">
          The conversation doesn't end when the episode does. Join the Waves of
          Innovation community to get our monthly report, access our strategic
          frameworks, and connect with other technology leaders.
        </ParagraphOne>

        <div className="mt-[clamp(15px,3vw,30px)]">
          <button className="animate-glow-pulse group cursor-pointer relative isolate overflow-hidden bg-white-tp border border-solid border-white rounded-114 w-42.5 h-12.75 font-normal text-base leading-100 text-white transition-colors duration-500 hover:border-transparent">
            <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ppg transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
            <span className="relative z-10">Explore Our Book</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextWave;
