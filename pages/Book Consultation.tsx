import ImmediateHelp from "@/components/Book Consultation-Immediate Legal Help/ImmediateLegalHelp";
import LegalConsultation from "@/components/Book Consultation-LegalConsultation/LegalConsultation";
import ConsultationBooking from "@/components/Book Consultation-Payment by Razorpay/PaymentbyRazorpay";
import WhyBookWithUs from "@/components/Book Consultation-Why Book With Us/WhyBookWithUs";
import ConsultationSection from "@/components/Consultation Type-price/Price";
import Newsletter from "@/components/Stay Updated/Latestupdates";
// import ConsultationTypes from "@/components/Consultation Type-price/Price";

import React from "react";

const Book = () => {
  return (
    <div className="Book">
      {/* Legal Consultation Front page*/}
      
      <LegalConsultation />

      {/*Prices of the Consultation Type*/}
      <ConsultationSection />

      {/*Price with Razorpay*/}
      <ConsultationBooking/>

      {/*Why Book With Us*/}
      <WhyBookWithUs/>

      {/*Immediate Legal Help*/}
      <ImmediateHelp/>

      {/*Stay Updated with Legal Insights*/}
      <Newsletter/>
      
    </div>
  );
};

export default Book;
