import React, { useState, ChangeEvent, FormEvent } from "react";
import "./PaymentbyRazorpay.scss";

interface FormData {
  name: string;
  phone: string;
  email: string;
  consultationType: string;
  message: string;
}

const ConsultationBooking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    consultationType: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Payment gateway integration will go here!");
  };

  return (
    <section className="consultation-section">
      <div className="container">
        <div className="form-card">
          <h2 className="form-title">Book Your Consultation</h2>

          <div className="secure-payment">
            <div className="secure-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M6 3h12"></path>
                <path d="M6 8h12"></path>
                <path d="m6 13 8.5 8"></path>
                <path d="M6 13h3"></path>
                <path d="M9 13c6.667 0 6.667-10 0-10"></path>
              </svg>
              <span>Secure Payment with Razorpay</span>
            </div>
            <p>
              Pay securely using UPI, Cards, NetBanking or Wallets. Your
              consultation request will be processed immediately after payment.
            </p>
          </div>

          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="consultationType">Consultation Type *</label>
              <select
                id="consultationType"
                name="consultationType"
                required
                value={formData.consultationType}
                onChange={handleChange}
              >
                <option value="">Select consultation type</option>
                <option value="phone">Phone Consultation - ₹500</option>
                <option value="video">Video Consultation - ₹800</option>
                <option value="whatsapp">WhatsApp Consultation - ₹300</option>
                <option value="document">Document Review - ₹1500</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Describe Your Legal Issue</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Please describe your legal issue in detail..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M6 3h12"></path>
                <path d="M6 8h12"></path>
                <path d="m6 13 8.5 8"></path>
                <path d="M6 13h3"></path>
                <path d="M9 13c6.667 0 6.667-10 0-10"></path>
              </svg>
              Pay Now & Book Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
