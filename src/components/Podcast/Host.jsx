import Badge from "../common/Badge";
import ButtonPurple from "../common/ButtonPurple";
import HeadingTwo from "../common/HeadingTwo";
import Icons from "../common/Icons";
import ParagraphOne from "../common/ParagraphOne";
import DanielImg from "../../assets/img/Podcast/webp/daniel.webp";

const Host = () => {
  return (
    <section className="min-h-fit px-4 w-full">
      <div className="container max-w-270.5 w-full mx-auto">
        <div className="row w-full lg:pt-37.5 md:pt-20 sm:pt-15 pt-10 flex items-center justify-between gap-7.5 lg:flex-row flex-col">
          <div className="left max-w-121.25 w-full flex flex-col items-center lg:items-start">
            <Badge className="p-0! max-w-29.25 w-full h-7.25 text-sm">
              Meet the Host
            </Badge>

            <HeadingTwo className="mt-3.25">
              Daniel <span className="text-purple29">J</span>
              <span className="text-purple30">o</span>
              <span className="text-purple10">n</span>
              <span className="text-purple31">e</span>
              <span className="text-purple2">s</span>
            </HeadingTwo>

            <div className="flex items-center gap-3.25 mt-3.25 text-nowrap">
              <h1 className="text-white xl:leading-6.25 leading-120 font-normal text-base md:text-[20px]">
                re:cinq - Head of Product
              </h1>

              <Badge className="w-29.5 h-5.75 p-0!">
                <a
                  target="_blank"
                  className="cursor-pointer flex items-center justify-center gap-1.5"
                  href="https://in.linkedin.com/"
                >
                  <Icons icon="linkedin" />

                  <p className="text-sm font-normal">Linkedin</p>

                  <Icons icon="diagnolArrow" />
                </a>
              </Badge>
            </div>

            <ParagraphOne className="opacity-80 mt-3.75 md:mt-6.25 lg:text-left text-center">
              Daniel Jones is a seasoned technology leader with over 20 years of
              experience in the industry ranging from working in regulated
              financial enterprises to founding startups. He brings deep
              expertise in software delivery, enterprise transformation, and
              cloud-native practices.
            </ParagraphOne>
            <ParagraphOne className="opacity-80 mt-3.75 md:mt-5 lg:text-left text-center">
              As the host of the Waves of Innovation podcast, Daniel engages
              with industry experts to explore cutting-edge topics that are
              shaping the future of technology.
            </ParagraphOne>

            <ButtonPurple className="max-w-54.75 w-full h-12.75 mt-3.75 md:mt-6.25">
              Browse His Episodes
            </ButtonPurple>
          </div>
          <div className="right max-w-130.25 w-full">
            <img
              width="521"
              height="539"
              className="xl:w-130.25 xl:h-134.75 object-cover"
              src={DanielImg}
              alt="daniel jones"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
