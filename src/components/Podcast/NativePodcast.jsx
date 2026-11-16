import PodcastBgImg from "../../assets/img/Podcast/webp/podcast-bg.webp";
import Header from "../common/Header";
import Badge from "../common/Badge";
import HeadingOne from "../common/HeadingOne";
import ParagraphOne from "../common/ParagraphOne";
import ButtonPurple from "../common/ButtonPurple";
import ButtonHover from "../common/ButtonHover";

const NativePodcast = () => {
  return (
    <section
      style={{ backgroundImage: `url(${PodcastBgImg})` }}
      className="lg:min-h-167 min-h-fit bg-no-repeat bg-center bg-cover px-4"
    >
      <Header />

      <div className="container max-w-211 w-full mx-auto">
        <div className="row w-full pt-20 sm:pt-25 lg:pt-39 sm:pb-17.25 pb-12.5">
          <div className="content flex items-center justify-center flex-col lg:py-18.5 md:py-15 py-10">
            <Badge className="p-0! h-7.25 w-55.5 flex items-center justify-center gap-2.5">
              Waves of Innovation
              <div className="bg-ppg2 h-4.5 w-18 flex items-center justify-center rounded-60 text-xs uppercase leading-100 font-medium">
                Podcast
              </div>
            </Badge>
            <HeadingOne className="lg:leading-20.5 w-full text-center md:mt-5.75 mt-4 leading-normal">
              The AI Native Podc<span className="text-purple6">a</span>
              <span className="text-purple7">s</span>
              <span className="text-purple8">t</span>
            </HeadingOne>
            <ParagraphOne className="text-center text-base max-w-170.75 w-full font-normal mt-4 sm:mt-4.5">
              Our bi-weekly podcast hosted by Daniel Jones. Each episode
              features a new guest sharing practical strategies and
              architectural patterns for building AI.
            </ParagraphOne>

            <div className="flex items-center justify-center gap-4 flex-wrap w-full mt-5 md:mt-10">
              <ButtonPurple className="max-w-59.5 w-full flex items-center justify-center h-12.75 text-base font-medium">
                Subscribe to the Podcast
              </ButtonPurple>
              <ButtonHover className="max-w-50 w-full h-12.75">
                Browse the Archive
              </ButtonHover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NativePodcast;
