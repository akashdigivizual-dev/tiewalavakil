import React from "react";
import "./LegalServices.scss";
interface IconComponentProps {
  children: React.ReactNode;
  className?: string;
}

// Temporary SVG components
const IconComponent: React.FC<IconComponentProps> = ({
  children,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

interface IconProps {
  className?: string;
}

const FileTextIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </IconComponent>
);

const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </IconComponent>
);

const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </IconComponent>
);

const ScaleIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="M12 20v-8" />
    <path d="M4 12h16" />
    <path d="m8 16-4-4 4-4" />
    <path d="m16 16 4-4-4-4" />
  </IconComponent>
);

const CircleCheckIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconComponent>
);

const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconComponent>
);

const BuildingIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </IconComponent>
);

const AwardIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </IconComponent>
);

const GavelIcon: React.FC<IconProps> = ({ className }) => (
  <IconComponent className={className}>
    <path d="m20 15-5-5 5-5" />
    <path d="m4 15 5-5-5-5" />
    <line x1="12" y1="22" x2="12" y2="13" />
  </IconComponent>
);

const services = [
  {
    icon: <FileTextIcon />,
    title: "विक्रय पत्र (Sale Deed)",
    description:
      "We help you prepare and register a legally valid Sale Deed for transferring property ownership in Hapur.",
    features: [
      "Professionally drafted Sale Deeds with accurate property and party details",
      "Stamp duty and registration fee calculation",
      "Complete support at the Sub-Registrar Office",
      "Ensures legal ownership transfer and title clarity",
    ],
  },
  {
    icon: <HeartIcon />,
    title: "दान पत्र (Gift Deed)",
    description:
      "Transfer property to your loved ones through a legally valid Gift Deed.",
    features: [
      "Drafting of Gift Deeds for property without exchange of money",
      "Guidance on stamp duty exemptions (if applicable)",
      "Verification of relationship between donor and donee",
      "Registered under the local Sub-Registrar authority in Hapur",
    ],
  },
  {
    icon: <ShieldIcon />,
    title: "बंधक पत्र (Mortgage Deed)",
    description:
      "Secure your loan or credit using your property with a well-drafted Mortgage Deed.",
    features: [
      "Detailed mortgage agreements for lenders and borrowers",
      "Inclusion of interest rate, repayment terms, and conditions",
      "Legal protection against default or disputes",
      "Registration support for mortgage documentation in Hapur",
    ],
  },
  {
    icon: <ScaleIcon />,
    title: "इकरारनामा (Agreement to Sale)",
    description:
      "An Agreement to Sale defines the intent and conditions before executing the final Sale Deed.",
    features: [
      "Drafting agreements with or without immediate possession",
      "Clearly defined payment terms, possession timelines, and penalties",
      "Legal verification of property ownership",
      "Optional registration for extra legal security",
    ],
  },
  {
    icon: <UsersIcon />,
    title: "विनिमय विलेख (Exchange Deed)",
    description:
      "Exchange of property must be documented properly to avoid disputes.",
    features: [
      "Drafting of Exchange Deeds between parties swapping properties",
      "Assessment of fair value of properties",
      "Stamp duty calculations specific to exchange transactions",
      "Legal support for registration in Hapur",
    ],
  },
  {
    icon: <BuildingIcon />,
    title: "पट्टा विलेख (Lease Deed)",
    description:
      "Whether for residential, commercial, or agricultural use—leasing needs clear documentation.",
    features: [
      "Lease Deeds customized for monthly/annual rentals",
      "Terms including security, rent escalation, and renewal clauses",
      "Drafts for shops, houses, land, and warehouses",
      "Notarization and optional registration support",
    ],
  },
  {
    icon: <AwardIcon />,
    title: "वसीयतनामा (Will)",
    description:
      "A Will ensures your assets are distributed as per your wishes.",
    features: [
      "Legally valid Will drafting under Indian succession laws",
      "Guidance on executors, legal heirs, and distribution",
      "Secrecy and confidentiality guaranteed",
      "Assistance in registration and safe custody",
    ],
  },
  {
    icon: <GavelIcon />,
    title: "मुख्तयारनामा (Power of Attorney)",
    description:
      "POAs are essential when you need someone else to act legally on your behalf.",
    features: [
      "General and Special POA drafting",
      "Includes rights for property, finance, or legal representation",
      "Suitable for NRIs, elderly citizens, or business owners",
      "Proper registration in Hapur for enforceability",
    ],
  },
];

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <CircleCheckIcon className="feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const LegalServices = () => {
  return (
    <section className="legal-services">
      <div className="container">
        <h2 className="heading">Our Core Legal Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalServices;
