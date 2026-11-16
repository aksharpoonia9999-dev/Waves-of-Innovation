import MiddleStarsImg from "../../assets/img/Podcast/svg/middle-stars.svg";
import { PLATFORM_DATA } from "../../utils/helper";
import Badge from "../common/Badge";
import HeadingTwo from "../common/HeadingTwo";
import Icons from "../common/Icons";
import ParagraphOne from "../common/ParagraphOne";

const Platform = () => {
  return (
    <section className="xl:min-h-146 min-h-fit px-4 w-full">
      <div className="container w-full mx-auto max-w-319.75">
        <div className="row w-full lg:pb-37.5 md:pb-20 sm:pb-15 pb-10">
          <div
            style={{ backgroundImage: `url(${MiddleStarsImg})` }}
            className="top-part w-full xl:min-h-40.5n-h-fit bg-center bg-no-repeat flex items-center justify-between lg:flex-row flex-col gap-7.5"
          >
            <div className="left max-w-119 w-full flex lg:items-start flex-col items-center">
              <Badge className="p-0! text-sm! max-w-22.5 w-full h-7.25">
                Listen On
              </Badge>

              <HeadingTwo className="mt-3.25 w-full lg:text-left text-center">
                Find the Podcast on Your Favorite Plat
                <span className="text-purple15">f</span>
                <span className="text-purple16">o</span>
                <span className="text-purple17">rm</span>
              </HeadingTwo>
            </div>
            <div className="right max-w-123.25 w-full mt-auto">
              <ParagraphOne className="opacity-80 lg:text-left text-center">
                Listen to Waves of Innovation anywhere you prefer — from Spotify
                and Apple Podcasts to YouTube Podcasts and Amazon Music. Choose
                a platform below to start listening.
              </ParagraphOne>
            </div>
          </div>

          <div className="bottom w-full mt-[clamp(30px,5vw,60px)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 w-full max-w-312 mx-auto">
              {PLATFORM_DATA.map((obj, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden w-full min-w-0 h-32 sm:h-40.5 flex items-center justify-center flex-col bg-white3 border border-solid border-white12 rounded-2xl cursor-pointer"
                >
                  <div
                    className="card-glow pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  >
                    <span className="glow-far" />
                    <span className="glow-wash" />
                    <span className="glow-body" />
                    <span className="glow-bright" />
                    <span className="glow-hot" />
                    <span className="glow-core" />
                  </div>

                  <span
                    className="card-ring pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="card-icon relative z-10 scale-75 sm:scale-100">
                    <Icons icon={obj.icon} />
                  </div>

                  <h1 className="relative z-10 mt-2 sm:mt-4 text-base sm:text-xl md:text-2xl leading-100 font-normal text-white tracking-[-2%] text-center px-2 truncate max-w-full">
                    {obj.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
