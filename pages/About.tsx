
import CallToAction from '@/components/Call To Action/CallToAction';
import LegalHeritage from '@/components/Legal Heritage/LegalHeritage';
import StatsSection from '@/components/Scores/StatsSection';
import WhyChoose from '@/components/Why Choose/WhyChooseTiewalaVakil';
import React from 'react';

const TeamMemberCard: React.FC<{ imageUrl: string; name: string; title: string; }> = ({ imageUrl, name, title }) => (
    <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-4">
            <img className="rounded-full object-cover w-full h-full shadow-lg" src={imageUrl} alt={name} />
        </div>
        <h3 className="text-xl font-bold font-serif text-brand-primary">{name}</h3>
        <p className="text-brand-accent font-medium">{title}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-brand-secondary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold">About Tiewala Vakil</h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Three generations of legal excellence serving property law needs with dedication, expertise, and unwavering commitment to our clients across Hapur and beyond.</p>
                </div>
            </section>

            {/* Our Story Section
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary">Our Story</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Founded on the principles of justice, integrity, and unparalleled client service, Tiewala Vakil has grown from a modest practice into a leading law firm in the region. Our journey is one of passion for the law and a deep-seated commitment to the communities we serve.
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                We believe that every client deserves personalized attention and a strategy tailored to their unique circumstances. Our attorneys bring a wealth of knowledge and a diversity of experience, allowing us to tackle complex legal issues with confidence and creativity.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img src="https://picsum.photos/600/400?image=1074" alt="Law firm office" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Meet Our Team Section */}


            <StatsSection />

            <LegalHeritage />

            <WhyChoose />

            <CallToAction />


            {/* <section className="py-16 sm:py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary">Meet Our Team</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">The dedicated professionals behind our success.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?image=836" name="Aarav Sharma" title="Founder & Senior Partner" />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?image=1027" name="Priya Singh" title="Managing Partner, Corporate Law" />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?image=823" name="Rohan Mehta" title="Senior Associate, Litigation" />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?image=64" name="Ananya Gupta" title="Associate, Family Law" />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default About;
