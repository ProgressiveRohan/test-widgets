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
    // 1. Check if the script already exists to avoid duplicates
    if (!document.getElementById('front-chat-script')) {
      const script = document.createElement('script');
      script.id = 'front-chat-script';
      script.src = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';
      script.async = true;
      
      script.onload = () => {
        // 2. Initialize once the script is loaded
        if (window.FrontChat) {
          window.FrontChat('init', {
            chatId: '3b6aff8c2e63a079928577feb604dcd4',
            useDefaultLauncher: true
          });
        }
      };

      document.body.appendChild(script);
    }
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
      <Footer />
    </main>
  );
};

export default App;
