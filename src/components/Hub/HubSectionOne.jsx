import Badge from "../common/Badge";
import ButtonHover from "../common/ButtonHover";
import ButtonPurple from "../common/ButtonPurple";
import Header from "../common/Header";
import HeadingOne from "../common/HeadingOne";
import ParagraphOne from "../common/ParagraphOne";
import SectionOne from "../common/SectionOne";

const HubSectionOne = () => {
  return (
    <>
      <SectionOne>
        <Header />

        <div className="container max-w-167.5 w-full mx-auto">
          <div className="row w-full pt-20 lg:pt-40.75 lg:pb-42 md:pb-20 sm:pb-15 pb-10">
            <div className="content pt-7 w-full flex items-center justify-center flex-col">
              <Badge
                data-aos="fade-down"
                className="text-sm leading-100 h-7.25 w-47.75 text-nowrap font-normal flex items-center justify-center"
              >
                Waves of Innovation{" "}
                <div className="bg-ppg2 w-10.25 h-4.5 flex items-center text-xs leading-120 justify-center px-2 rounded-60 ">
                  HUB
                </div>
              </Badge>
              <HeadingOne
                data-aos="fade-up"
                data-aos-delay="150"
                className="w-full text-center font-normal xl:leading-20.5 leading-none mt-3.5 relative"
              >
                The Community for the AI Native Era{" "}
                <div className="animate-glow-drift absolute size w-29.5 h-28.25 rounded-full bg-primary-purple bottom-[-4%] right-[14%] blur-[72px]"></div>
              </HeadingOne>
              <ParagraphOne
                data-aos="fade-up"
                data-aos-delay="300"
                className="max-w-148.5 w-full text-center mt-4 sm:mt-4.5"
              >
                Join leaders navigating the shift from Cloud Native to AI
                Native. Access the shared language, historical context, and
                patterns to lead with certainty.
              </ParagraphOne>
              <div
                data-aos="fade-up"
                data-aos-delay="450"
                className="w-full flex gap-4 mt-7.25 justify-center flex-wrap"
              >
                <ButtonPurple className="max-w-50.25 w-full">
                  Explore the Book
                </ButtonPurple>

                <ButtonHover className="max-w-52.25 w-full">
                  Explore the Patterns
                </ButtonHover>
              </div>
            </div>
          </div>
        </div>
      </SectionOne>
    </>
  );
};

export default HubSectionOne;
