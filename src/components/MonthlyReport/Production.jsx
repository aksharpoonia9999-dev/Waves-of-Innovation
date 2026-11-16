import ProductionBgImg from "../../assets/img/MonthlyReport/webp/production-bg.webp";
import chartImg from "../../assets/img/MonthlyReport/webp/chart.webp";
import Badge from "../common/Badge";
import ParagraphOne from "../common/ParagraphOne";
import ButtonPurple from "../common/ButtonPurple";

const Production = () => {
  return (
    <section className="xl:min-h-126 min-h-fit w-full px-4 xl:-mt-51.75 pb-10 sm:pb-15 md:pb-20 lg:pb-33">
      <div
        style={{ backgroundImage: `url(${ProductionBgImg})` }}
        className="container max-w-274.75 w-full mx-auto bg-center bg-cover bg-no-repeat rounded-20"
      >
        <div className="row w-full flex gap-[clamp(30px,3vw,51px)] flex-col md:flex-row py-3 items-center pr-3 md:pr-10.25 pl-3">
          <div className="left max-w-138.25 w-full">
            <img
              width="553"
              height="480"
              className="xl:w-138.25 xl:h-120 h-auto object-cover rounded-xl"
              src={chartImg}
              alt="chart"
            />
          </div>

          <div className="right flex flex-col items-center md:items-start">
            <Badge className="w-28.5 h-7.25 p-0! text-sm! font-normal">
              Latest Wave
            </Badge>

            <h1 className="text-[clamp(24px,3vw,40px)] mt-3 text-white font-normal tracking-[-2%] xl:leading-11 leading-120 md:text-left text-center">
              Week 11: 3 LLM Architecture Patterns for Production AI
            </h1>

            <ParagraphOne className="max-w-110.5 w-full opacity-80 md:mt-6.25 mt-3.75 md:text-left text-center">
              It seems that much of the public conversation around large
              language models remains focused on the single-turn assistant. You
              ask a question, you get an answer. It's a useful paradigm, but
              it's also a limiting one for anyone trying to build durable,
              valuable systems.
            </ParagraphOne>

            <ParagraphOne className="line-clamp-2 max-w-110.5 w-full opacity-80 md:mt-5 mt-3.75 md:text-left text-center">
              The most interesting work we're seeing isn't happening inside the
              prompt window. It's happening at the architectural level, where t
              <br />
              he LLM is treated not as a destination, but as a component within
              a larger system.
            </ParagraphOne>

            <ButtonPurple className="md:mt-5 mt-3.75 w-48.5 h-12.75 font-medium! text-base!">
              Read Full Article
            </ButtonPurple>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
