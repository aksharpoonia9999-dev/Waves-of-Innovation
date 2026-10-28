import StarsImg from "../../assets/svg/bg-stars.svg";
import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import { HUB_CARD_DATA } from "../../utils/helper";
import Icons from "../common/Icons";
import ButtonHover from "../common/ButtonHover";

const HubSectionThree = () => {
  return (
    <section className="px-4 min-h-fit w-full">
      <div className="container max-w-320.25 w-full mx-auto">
        <div className="row w-full flex items-center justify-center flex-col">
          <div
            className="top max-w-286.75 w-full mx-auto bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${StarsImg})` }}
          >
            <div className="top-content max-w-151.25 w-full mx-auto flex items-center justify-center flex-col">
              <Badge
                data-aos="fade-down"
                className="w-37.5 p-0! h-7.25 text-nowrap items-center justify-center"
              >
                Waves of Innovation
              </Badge>
              <HeadingTwo
                data-aos="fade-up"
                data-aos-delay="100"
                className="max-w-151.25 w-full text-center mt-3.25"
              >
                Explore the Waves of Innovation Ecosy
                <span className="text-[#E3CBF7]">stem</span>{" "}
              </HeadingTwo>
            </div>
          </div>

          <div className="bottom-cards w-full grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,1.75vw,21px)] gap-y-[clamp(12px,1.75vw,20px)] mt-[clamp(30px,5vw,60px)]">
            {HUB_CARD_DATA.map((obj, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 120}
                className="h-full"
              >
                <div className="card group relative isolate overflow-hidden flex flex-col justify-between w-full h-full min-w-0 cursor-pointer bg-white3 border border-solid border-white12 rounded-[clamp(14px,1.8vw,20px)] px-[clamp(16px,2vw,20px)] pb-[clamp(16px,2vw,20px)] pt-[clamp(16px,2vw,32px)] transition-[background-color,border-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:bg-white-tp hover:border-white28 hover:shadow-[0_0_60px_-20px_rgba(142,46,224,0.55)]">
                  <span
                    aria-hidden="true"
                    className="card-glow pointer-events-none absolute inset-0 -z-10"
                  >
                    <span className="glow-far" />
                    <span className="glow-wash" />
                    <span className="glow-body" />
                    <span className="glow-bright" />
                    <span className="glow-hot" />
                    <span className="glow-core" />
                  </span>

                  <span
                    aria-hidden="true"
                    className="card-ring pointer-events-none absolute inset-0 -z-10"
                  />

                  <div className="card-top max-w-87.25 w-full pl-0 lg:pl-3">
                    <div className="card-icon [&_svg]:size-[clamp(40px,6vw,80px)]">
                      <Icons icon={obj.icon} />
                    </div>

                    <h2 className="mt-[clamp(14px,3vw,38px)] text-[clamp(18px,2.5vw,28px)] leading-[1.21] text-white wrap-break-word">
                      {obj.heading.trim()}
                    </h2>

                    <p className="mt-[clamp(10px,1.2vw,16px)] text-[clamp(13px,1.1vw,15px)] leading-[1.4] xl:leading-[1.45] text-white/70">
                      {obj.para}
                    </p>
                  </div>

                  <div className="card-bottom mt-[clamp(16px,3vw,25px)]">
                    <ButtonHover className="w-full max-w-full p-0! h-[clamp(44px,4.5vw,52px)] text-[clamp(13px,1.3vw,16px)] flex items-center justify-center text-center">
                      {obj.btn}
                    </ButtonHover>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSectionThree;
