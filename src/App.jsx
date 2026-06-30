import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Services from "./components/Services.jsx";
import Packages from "./components/Packages.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Guarantee from "./components/Guarantee.jsx";
import Results from "./components/Results.jsx";
import Comparison from "./components/Comparison.jsx";
import About from "./components/About.jsx";
import Team from "./components/Team.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Packages />
        <HowItWorks />
        <Guarantee />
        <Results />
        <Comparison />
        <About />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
