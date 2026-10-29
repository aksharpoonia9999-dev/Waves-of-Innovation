import StarImg from "../../assets/img/svg/top-star.svg";
import BookImg from "../../assets/img/webp/book.webp";
import Badge from "../common/Badge";
import ButtonHover from "../common/ButtonHover";
import ButtonPurple from "../common/ButtonPurple";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";

const Foundation = () => {
  return (
    <section className="min-h-fit xl:min-h-148 px-4 w-full relative">
      <div className="container max-w-334.5 w-full mx-auto">
        <div className="row w-full">
          <div className="stars absolute max-w-116.75 w-full  right-5">
            <img
              width="467"
              height="157"
              src={StarImg}
              className="animate-twinkle h-auto sm:h-39.25 lg:h-39.25 lg:w-119.5"
              alt="star img top"
            />
          </div>
          <div className="content flex lg:flex-row flex-col gap-[clamp(30px,6vw,84px)] lg:pt-13.25 md:pt-7.5 pt-5 items-center lg:pb-34.75 md:pb-20 sm:pb-15 pb-10">
            <div
              data-aos="fade-right"
              data-aos-duration="1100"
              className="left max-w-xl w-full"
            >
              <img
                src={BookImg}
                width="575"
                height="539"
                className="animate-float-slow object-cover lg:h-134.75 lg:w-143.75"
                alt="book img"
              />
            </div>
            <div className="right flex flex-col lg:items-start items-center justify-center max-w-126 w-full xl:h-101 h-auto">
              <Badge
                data-aos="fade-left"
                className="sm:px-0! sm:py-0! px-2! sm:text-base text-sm  text-wrap sm:text-nowrap h-auto xl:h-7.5! flex items-center justify-center max-w-110.75 w-full"
              >
                From Cloud Native to AI Native: Catching the next wave of
                innovation
              </Badge>
              <HeadingTwo
                data-aos="fade-left"
                data-aos-delay="100"
                className="mt-3.25 w-full lg:text-left text-center"
              >
                The Foundation of Our Community
              </HeadingTwo>
              <ParagraphOne
                data-aos="fade-left"
                data-aos-delay="200"
                className="text-white/80 mt-[clamp(15px,3vw,25px)] lg:text-left text-center"
              >
                Our book is the intellectual core that unifies this entire
                community. It provides the foundational frameworks and shared
                language that connect our podcast insights, transformation
                patterns, and strategic assessments into a single, cohesive
                system for mastering the AI Native wave. We recommend every
                leader start here.
              </ParagraphOne>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="buttons flex items-center justify-center gap-4 flex-wrap mt-[clamp(20px,4vw,40px)] max-w-105.75 w-full"
              >
                <ButtonPurple className="max-w-50.25 w-full items-center justify-center flex h-12.75 font-medium">
                  Explore the Book
                </ButtonPurple>
                <ButtonHover className="font-normal max-w-51.5 w-full h-12.75">
                  Explore the Patterns
                </ButtonHover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
