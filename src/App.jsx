import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./components/About";
import Amenities from "./components/Amenities";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Partner from "./components/Partner";

function App() {
  useEffect(() => {
    AOS.init({
    duration : 1000,
    });
  }, []);
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Amenities />
      <Partner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
