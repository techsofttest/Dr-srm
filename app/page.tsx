import Header from "@/components/global/Header";
import Hero from "@/components/home/Hero";
import EmergencyBanner from "@/components/home/EmergencyBanner";
import WhyChoose from "@/components/home/WhyChoose";
import AboutAndProcedures from "@/components/home/AboutAndProcedures";
import ConditionsTreated from "@/components/home/ConditionsTreated";
import SpecialisedProcedures from "@/components/home/SpecialisedProcedures";
import Experience from '@/components/home/Experience';
import Education from '@/components/home/Education';
import AcademicInsights from '@/components/home/AcademicInsights';
import Testimonials from '@/components/home/Testimonials';
import PatientEducation from "@/components/home/PatientEducation";
import FAQ from "@/components/home/FAQ";
import ReferringDoctors from "@/components/home/ReferringDoctors";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-white">
      {/* Fixed Navigation Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* High-Contrast Emergency Stroke Banner */}
      <EmergencyBanner />

      {/* Why Choose Dr. Malla Grid */}
      <WhyChoose />

      {/* About Dr. Malla & Procedural Stats Grid */}
      <AboutAndProcedures />

      {/* Conditions Treated Category List */}
      <ConditionsTreated />

      {/* Specialised Procedures Clinical Listing */}
      <SpecialisedProcedures />

      {/* Hospital Appointments and Career Details */}
      <Experience />

      {/* Observerships & Professional Memberships */}
      <Education />

      {/* Research Publications & Presentations Tabs */}
      <AcademicInsights />

      {/* Patient Stories & Verified Google Reviews Slider */}
      <Testimonials />

      {/* Patient Education Centre Infographics & LinkedIn */}
      <PatientEducation />

      {/* Accordion Clinical FAQ Section */}
      <FAQ />

      {/* Referring Doctors Portal & Referral Line */}
      <ReferringDoctors />

      {/* Locations, Timings, & Appointments Contact Grid */}
      <Contact />
    </main>
  );
}