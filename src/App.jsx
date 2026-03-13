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
    // 1. Define the global function
    window.Nutsheller = window.Nutsheller || function() {
      (window.Nutsheller.q = window.Nutsheller.q || []).push(arguments);
    };

    // 2. Create the script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://growth.watobu.com/nutsheller-esm.js';
    script.async = true;

    // 3. Only boot once the script has actually loaded
    script.onload = () => {
      if (window.Nutsheller) {
        window.Nutsheller('boot', {
          instance: '384344',
          authToken: 'c41c3dn0IyYK2fP4FD6k1_K6TqHTMgsxtxciRxzrRBI.2',
          target: 'nutshell-boot-384344'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
    
      {/* Ensure this ID matches exactly what is in the 'target' above */}
      <div id="nutshell-boot-384344" style={{ minHeight: '1px' }}></div>
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      
      <Footer />
    </main>
  );
};

export default App;