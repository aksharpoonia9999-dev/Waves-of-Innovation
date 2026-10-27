import { Routes, Route } from "react-router-dom";
import Hub from "./views/Hub";
import BackToTop from "./components/common/BackToTop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/podcast" element={<div>Podcast Page</div>} />
      </Routes>
      <BackToTop/>
    </>
  );
};

export default App;
