import React, { useEffect } from "react";
import HeroSection from "@/components/hero section/HeroSection";
import AdditionalLegalServices from "@/components/Services-Additional Legal Services/AdditionalLegalServices";
import ExpertLegalServices from "@/components/Services-Expert Legal Services/ExpertLegalServices";
import LegalServices from "@/components/Services-LegalServices/LegalServices";
import Newsletter from "@/components/Stay Updated/Latestupdates";
import CallToAction from "@/components/Call To Action/CallToAction";

const Services: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "Our Legal Services - TiewalaVakil";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Legal Services Section */}
      <section id="legal-services">
        <LegalServices />
      </section>

      {/* Additional Legal Services */}
      <section id="additional-services">
        <AdditionalLegalServices />
      </section>

      {/* Expert Legal Services */}
      <section id="expert-services">
        <ExpertLegalServices />
      </section>

      <CallToAction />
      {/* Newsletter Section */}
      <section id="newsletter">
        <Newsletter />
      </section>
    </main>
  );
};

export default Services;
