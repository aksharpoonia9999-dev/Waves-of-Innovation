import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import ParagraphOne from "../common/ParagraphOne";
import ManWomanImg from "../../assets/img/Podcast/webp/man-woman.webp";

const Intersection = () => {
  return (
    <section className="px-4 min-h-fit w-full">
      <div className="container mx-auto max-w-312 w-full">
        <div className="row w-full flex items-center justify-center gap-[clamp(30px,5.34vw,77px)] flex-col lg:flex-row lg:pb-37.25 md:pb-20 sm:pb-15 pb-10">
          <div className="left max-w-116.75 w-full flex flex-col justify-center lg:items-start items-center">
            <Badge className="p-0! w-40.5 h-7.25 flex items-center justify-center relative">
              What You Can Expect
            </Badge>
            <HeadingTwo className="mt-3.25 lg:text-left text-center">
              The Intersection of AI, Culture, and{" "}
              <span className="text-purple14">B</span>
              <span className="text-purple9">u</span>
              <span className="text-purple10">s</span>
              <span className="text-purple11">i</span>
              <span className="text-purple12">ne</span>
              <span className="text-purple13">ss</span>
            </HeadingTwo>

            <ParagraphOne className="opacity-80 mt-3.75 md:mt-6.25 lg:text-left text-center">
              We explore the AI transition through the lens of technology,
              culture, business, and behavior. We speak with leaders who have
              already taken the leap, analyzing real-world use cases to
              understand the impact.
            </ParagraphOne>
            <ParagraphOne className="opacity-80 mt-3.75 md:mt-5 lg:text-left text-center">
              Our goal is to learn from their experience, giving you a grounded,
              pragmatic approach to the future of AI that goes beyond the
              technical implementation.
            </ParagraphOne>
          </div>

          <div className="right max-w-176 w-full relative">
            <div className="size-[clamp(150px,20.83vw,300px)] rounded-full bg-primary-purple blur-[100px] top-[30%] left-[35%] absolute -z-10"></div>
            <img
              width="704"
              height="426"
              className="object-cover xl:w-176 xl:h-106.5 "
              src={ManWomanImg}
              alt="bald man and woman talking"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intersection;
