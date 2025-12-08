import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CTAButton from "@/components/CTAButton";
import ownerji from "@/assets/ownerji.png";
const HomeHeroSection: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          color: 0x1a365d, // blue lines
          backgroundColor: 0xfafafa, // light bg
          points: 12.0,
          maxDistance: 25.0,
          spacing: 18.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-24 min-h-[90vh] text-gray-800"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center lg:text-left max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          Trusted Legal Services for Property Matters
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mb-6 text-gray-600"
        >
          With over 75 years of heritage, we provide expert legal consultation,
          specializing in property, civil, and corporate law matters with
          integrity and excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <CTAButton />
          <Link
            to="/about"
            className="border border-gray-800 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="z-10 mt-10 lg:mt-0"
      >
        <img
          src= "/images/ownerji.png"
          alt="Law Firm Hero"
          className="w-[300px] sm:w-[400px] lg:w-[500px] drop-shadow-2xl rounded-2xl"
        />
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-blue-300 to-transparent rounded-full blur-[100px] animate-pulse opacity-70"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full blur-[100px] animate-pulse opacity-60"></div>
    </section>
  );
};

export default HomeHeroSection;
