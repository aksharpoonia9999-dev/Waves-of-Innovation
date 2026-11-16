import ClearInsights from "../components/MonthlyReport/ClearInsights";
import Production from "../components/MonthlyReport/Production";
import PreviousWaves from "../components/MonthlyReport/PreviousWaves";
import Testimonials from "../components/MonthlyReport/Testimonials";
import NativeInsight from "../components/MonthlyReport/NativeInsight";
import Footer from "../components/common/Footer"

const MonthlyReport = () => {
  return (
    <>
      <ClearInsights />
      <Production />
      <PreviousWaves />
      <Testimonials />
      <NativeInsight />
      <Footer />
    </>
  );
};

export default MonthlyReport;
