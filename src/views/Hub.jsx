import Footer from "../components/common/Footer";
import BottomSection from "../components/Hub/BottomSection";
import HubSectionFive from "../components/Hub/HubSectionFive";
import HubSectionFour from "../components/Hub/HubSectionFour";
import HubSectionOne from "../components/Hub/HubSectionOne";
import HubSectionSix from "../components/Hub/HubSectionSix";
import HubSectionThree from "../components/Hub/HubSectionThree";
import HubSectionTwo from "../components/Hub/HubSectionTwo";
const Hub = () => {
  return (
    <>
      <HubSectionOne />
      <HubSectionTwo />
      <HubSectionThree />
      <HubSectionFour />
      <HubSectionFive />
      <HubSectionSix />
      <BottomSection />
      <Footer />
    </>
  );
};

export default Hub;
