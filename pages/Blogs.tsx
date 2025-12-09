import React from "react";
import BlogSection from '@/components/Blog-BlogSection/BlogSection';
import Newsletter from "@/components/Stay Updated/Latestupdates";
import NeedLegalConsultant from "@/components/Blogs-Need-legal-consultant/NeedLegalConsultant";

const Blogs: React.FC = () => {
  React.useEffect(() => {
    // Update page title
    document.title = 'Legal Blogs - TiewalaVakil';
  }, []);

  return (
    <div>
      {/* Top Image */}
      <img 
        src="/images/Blog/Blog1.png" 
        alt="Expert Legal Solutions Banner" 
        className="w-full h-auto object-contain"
      />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        <BlogSection />

        <section id="newsletter">
          <Newsletter />
        </section>

        <NeedLegalConsultant/>
      </main>
    </div>
  );
};

export default Blogs;
