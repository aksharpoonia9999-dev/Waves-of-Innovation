import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Hub from "./views/Hub";
import BackToTop from "./components/common/BackToTop";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/podcast" element={<div>Podcast Page</div>} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;
