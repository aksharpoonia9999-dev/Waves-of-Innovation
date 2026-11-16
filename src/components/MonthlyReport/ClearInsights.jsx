import BgImg from "../../assets/img/MonthlyReport/webp/bgimg.webp";
import Header from "../common/Header";
import Badge from "../common/Badge";
import HeadingOne from "../common/HeadingOne";
import ParagraphOne from "../common/ParagraphOne";
import ButtonPurple from "../common/ButtonPurple";
import ButtonHover from "../common/ButtonHover";

const ClearInsights = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="xl:min-h-231 w-full min-h-fit px-4 bg-center bg-cover bg-no-repeat pb-15 md:pb-20 lg:pb-37.75"
    >
      <Header />

      <div className="container max-w-211 w-full mx-auto">
        <div className="row w-full flex flex-col items-center justify-center pt-47.5">
          <Badge className="w-68 p-0! h-7.25 flex items-center justify-center gap-2.5! text-sm! font-normal">
            Waves of Innovation
            <div className="w-30.5 h-4.5 uppercase text-xs font-normal flex items-center justify-center rounded-60 bg-ppg2 ">
              MONTHLY Report
            </div>
          </Badge>

          <HeadingOne className="text-center mt-3.75 leading-120 tracking-[-2%] xl:leading-20.5">
            Clear Insights for a World That Won’t Slow Down
          </HeadingOne>

          <ParagraphOne className="text-center mt-4">
            A curated digest of our entire ecosystem. Once a month, we distill
            our latest articles, podcasts, and patterns into one easy-to-read
            report, combining our internal research with the critical industry
            news you need to know.
          </ParagraphOne>

          <div className="flex items-center justify-center gap-4 mt-5 md:mt-10 flex-wrap">
            <ButtonPurple className="w-60.5 h-12.75">
              Read the Latest Report
            </ButtonPurple>
            <ButtonHover className="w-55.75 h-12.75">
              Subscribe for Updates
            </ButtonHover>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearInsights;
