import Episodes from "../components/Podcast/Episodes";
import EveryEpisode from "../components/Podcast/EveryEpisode";
import Host from "../components/Podcast/Host";
import Intersection from "../components/Podcast/Intersection";
import NativePodcast from "../components/Podcast/NativePodcast";
import NextWave from "../components/Podcast/NextWave";
import Platform from "../components/Podcast/Platform";
import Footer from "../components/common/Footer";

const Podcast = () => {
  return (
    <>
      <NativePodcast />
      <Intersection />
      <Platform />
      <Episodes />
      <EveryEpisode />
      <Host />
      <NextWave />
      <Footer />
    </>
  );
};

export default Podcast;
