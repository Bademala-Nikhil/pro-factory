import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import About from "../components/About";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import OurStorySection from "../components/OurStorySection";
import OurHistory from "../components/OurHistory";
import WhatWeDoSection from "../components/WhatWeDoSection";
import OurProcess from "../components/OurProcess";
import Team from "../components/Team";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutHero />   {/* 🔥 FIGMA HEADER SECTION */}
      <About />
      <ServicesSection />
      <OurStorySection />
      <OurHistory />
      <WhatWeDoSection />
      <OurProcess />
      <Team />
      <Footer />
    </>
  );
};

export default AboutPage;
