import React, { useState, useRef } from "react";
import CallToAction from "@/components/Call To Action/CallToAction";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const form = useRef<HTMLFormElement>(null);

  const clearError = (fieldName: string) => {
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    const name = formData.get("name") as string;
    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    const email = formData.get("email") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but if provided, should be valid)
    const phone = formData.get("phone") as string;
    if (phone && phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Message validation
    const message = formData.get("message") as string;
    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);

    if (!validateForm(formData)) {
      setFormStatus("❌ Please correct the errors above and try again.");
      return;
    }

    setFormStatus("Sending...");

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials not found in environment variables");
      setFormStatus("❌ Configuration error. Please contact support.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setFormStatus("✅ Thank you! Your message has been sent successfully.");
        form.current?.reset();
        setErrors({});
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setFormStatus("❌ Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-secondary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Get in touch with our legal experts for property law consultation
            and documentation services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold font-serif text-brand-primary mb-6">
                Send us a Message
              </h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    className={`block w-full shadow-sm py-3 px-4 border rounded-md focus:ring-brand-accent focus:border-brand-accent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Full Name"
                    onChange={() => clearError("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    className={`block w-full shadow-sm py-3 px-4 border rounded-md focus:ring-brand-accent focus:border-brand-accent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Email Address"
                    onChange={() => clearError("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    className={`block w-full shadow-sm py-3 px-4 border rounded-md focus:ring-brand-accent focus:border-brand-accent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Phone Number (Optional)"
                    onChange={() => clearError("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className={`block w-full shadow-sm py-3 px-4 border rounded-md focus:ring-brand-accent focus:border-brand-accent ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                    onChange={() => clearError("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
              {formStatus && (
                <p
                  className={`mt-4 text-center ${
                    formStatus.includes("✅")
                      ? "text-green-600"
                      : formStatus.includes("❌")
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-serif text-brand-primary">
                  Contact Information
                </h3>
                <div className="mt-4 space-y-4 text-lg text-gray-600">
                  <p className="flex items-start">
                    <span className="mt-1 mr-4 h-5 w-5 text-brand-accent">
                      📍
                    </span>
                    <span>
                      Chamber no. 4, Tehsil Compound
                      <br />
                      Hapur - 245101, Uttar Pradesh
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-4 h-5 w-5 text-brand-accent">📞</span>
                    <a
                      href="tel:+91-7037455191"
                      className="hover:text-brand-accent"
                    >
                      +91-7037455191
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-4 h-5 w-5 text-brand-accent">✉️</span>
                    <a
                      href="mailto:contact@tiewalavakil.in"
                      className="hover:text-brand-accent"
                    >
                      tiewalavakil@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-brand-primary">
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2 text-lg text-gray-600">
                  <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                  {/* <p>Saturday: 10:00 AM - 2:00 PM</p> */}
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Contact;
