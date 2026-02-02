// src/pages/Home.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import OurStorySection from "../components/OurStorySection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import OurWork from "../components/OurWork";
import OurProcess from "../components/OurProcess";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About /> {/* ✅ About section on HOME */}
      <ServicesSection />
      <OurStorySection />
      <WhatWeDoSection />
      <OurWork />
      <OurProcess />
      <Pricing />
      <Blog />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
