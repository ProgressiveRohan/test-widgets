import { useEffect } from "react";

import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  useEffect(() => {
    // 1. Initialize the Nutsheller global function
    window.Nutsheller = window.Nutsheller || function() {
      (window.Nutsheller.q = window.Nutsheller.q || []).push(arguments);
    };

    // 2. Boot the instance with your specific credentials
    window.Nutsheller('boot', {
      instance: '384344',
      authToken: 'c41c3dn0IyYK2fP4FD6k1_K6TqHTMgsxtxciRxzrRBI.2',
      target: 'nutshell-boot-384344'
    });

    // 3. Create and inject the external module script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://growth.watobu.com/nutsheller-esm.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script if the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      
      {/* The Nutshell Widget Container */}
      <div id="nutshell-boot-384344"></div>
      
      <Footer />
    </main>
  );
};

export default App;