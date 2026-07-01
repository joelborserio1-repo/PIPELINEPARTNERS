import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ServiceLanding from "./components/ServiceLanding.jsx";

// Scroll to top on route change, or to the hash target if there is one.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      // jump instantly to the top on page change (no smooth slide)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leadgen" element={<ServiceLanding slug="leadgen" />} />
        <Route path="/seo" element={<ServiceLanding slug="seo" />} />
        <Route path="/webdev" element={<ServiceLanding slug="webdev" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
