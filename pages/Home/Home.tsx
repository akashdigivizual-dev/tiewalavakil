import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../components/CTAButton';
import Logo from '../../components/Logo';
import './Home.scss';
import LegalTraditionSection from '../../components/Legal Tradition/LegalTradition';
import OnlineConsultationSection from '../../components/Online Legal Consultation/OnlineConsultation';
import OurServices from '../../components/Our Services/Services';
import GallerySection from '../../components/Gallery Section/GallerySection';
import TestimonialsCarousel from '../../components/Clients reviews/ClientsSay';
import Newsletter from '../../components/Stay Updated/Latestupdates';
import FAQ from '../../components/Frequently Asked Questions/FAQ';
import PracticeAreasSection from '@/components/PracticeAreaSection/PracticeAreas';
import HomeHeroSection from '@/components/Home-HeroSection/HomeHeroSection';







const PracticeAreaCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="practice-area-card">
    <div className="icon-container">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to="/services" className="learn-more-link">Learn More &rarr;</Link>
  </div>
);

const WhyChooseUsItem: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="why-choose-us-item">
    <div className="icon-wrapper">
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// const Home: React.FC = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="owner-image">
//          <img src="/images/ownerji.png" alt="Owner-Image" />
//             <div className="experience-badge">
//                 <h2>33+</h2>
//                 <p>Years Experience</p>
//             </div>
//         </div>
//         <div 
//           className="hero-bg"
//           //style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}
//         ></div>
//         <div className="hero-content">

//           <h1>
//             Trusted Legal Services for Property Matters
//           </h1>
//           <p>
//             With over 75 years of heritage, we provide expert legal consultation, documentation, and registration services from our Hapur office.
//           </p>
//           <div className="cta-container">
//             <CTAButton />
//             <Link to="/about" className="secondary-cta">
//               Learn More About Us
//             </Link>
//           </div>
//         </div>
//       </section>/
const Home: React.FC = () => {
  return (
    <div className="home-container">
      
      {/* ...rest of your sections */}
      <HomeHeroSection />
      

      {/* Practice Areas Section
      <section className="practice-areas-section">
        <div className="section-content">
          <div className="section-header">
            <h2>Our Practice Areas</h2>
            <p>We offer a comprehensive range of legal services tailored to your needs.</p>
          </div>
          <div className="cards-grid">
            <PracticeAreaCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>}
              title="Legal Expertise"
              description="Over three generations of legal expertise in property law and consultation."
            />
            <PracticeAreaCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
              title="Client Focused"
              description="Personalized legal solutions tailored to your unique property needs."
            />
            <PracticeAreaCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>}
              title="Transparent Pricing"
              description="Clear and upfront consultation fees with no hidden charges."
            />
          </div>
        </div>
      </section> */}

      <PracticeAreasSection />

      <LegalTraditionSection />

      <OnlineConsultationSection />      

      <OurServices />

      <GallerySection />

      <TestimonialsCarousel />

      <FAQ />

      <Newsletter />

      
      

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="section-content">
          <div className="section-header">
            {/* <h2>Why Tiewala Vakil?</h2>
            <p>Our firm is built on a foundation of trust, excellence, and unwavering client advocacy.</p> */}
          </div>
          {/* <div className="items-grid">
            <WhyChooseUsItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Proven Track Record" 
              description="Decades of combined experience achieving successful outcomes for our clients."
            />
            <WhyChooseUsItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Client-Centric Approach"
              description="We listen to your needs and develop personalized legal strategies to meet your goals."
            />
            <WhyChooseUsItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Integrity & Professionalism"
              description="Upholding the highest ethical standards in every aspect of our practice."
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;