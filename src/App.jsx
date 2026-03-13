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
    // 1. Initialize the global function
    window.Nutsheller = window.Nutsheller || function() {
      (window.Nutsheller.q = window.Nutsheller.q || []).push(arguments);
    };

    // 2. Load the first script (Growth/Watobu)
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://growth.watobu.com/nutsheller-esm.js';
    script1.async = true;
    script1.onload = () => {
      window.Nutsheller('boot', {
        instance: '384344',
        authToken: 'c41c3dn0IyYK2fP4FD6k1_K6TqHTMgsxtxciRxzrRBI.2',
        target: 'nutshell-boot-384344'
      });
    };
    document.body.appendChild(script1);

    // 3. Load the second script (Nutshell Loader)
    const script2 = document.createElement('script');
    script2.type = 'module';
    script2.src = 'https://loader.nutshell.com/nutsheller-esm.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup: Remove both scripts if the component unmounts
    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
      {/* The Target Div */}
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