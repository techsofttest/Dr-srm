import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import EmergencyBanner from "@/components/home/EmergencyBanner";
import WhyChoose from "@/components/home/WhyChoose";
import AboutAndProcedures from "@/components/home/AboutAndProcedures";
import ConditionsTreated from "@/components/home/ConditionsTreated";
import SpecialisedProcedures from "@/components/home/SpecialisedProcedures";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import AcademicInsights from "@/components/home/AcademicInsights";
import Testimonials from "@/components/home/Testimonials";
import PatientEducation from "@/components/home/PatientEducation";
import FAQ from "@/components/home/FAQ";
import ReferringDoctors from "@/components/home/ReferringDoctors";
import Contact from "@/components/home/Contact";
type IconName = | "Brain"| "Heart"| "Layers"| "ShieldCheck" | "Microscope";
interface StatData {
    number: number;
    suffix: string;
    label: string;
}
interface Procedure {
  title: string;
  description: string;
  icon: IconName;
  techniques: string[];
}
interface Data {
  seo:{
    meta_title:string;
    meta_key:string;
    meta_desc:string;
  };
  banner: {
  title: string;
  name: string;
  qualifications: string;
  headline: string;
  subtext: string;
  image: string;
};
emergency:{
  title: string;
  content: string;
  link: {
      url: string;
      text: string;
  };
  image: string;
};
excellence: {
  title: string;
  content: string;
};
highlights: {
  title: string;
  description: string;
}[];
about: {
  name: string;
  title: string
  highlights: string[];
  content: string;
  cms_title: string;
  image: string;
};
metrics: {
  title: string;
  image: string;
  heading: string;
  subtext: string;
  stats: StatData[]; // Fetching stats directly from the API
};
services: {
  title: string;
  subtitle: string;
  image: string;
  items: { name: string; description: string }[];
}[];
pro:Procedure[];
card:{
 title:string;
  role:string;
  duration:string;
  image:string;
  description:string;
};
intro:{
  title:string;
  role:string;
  duration:string;
  institution:string;
  description:string;
};
   education:{    
     cms_title:string;
    image:string;
    heading: string;
    items: string[];
};
  observerships:{    
     category:string;
    title:string;
    institution: string;
}[];
affiliations:{
    heading: string;
    international: string[];
    national: string[];
};
   casestudy:{    
    sub_title:string;
    title:string;
    description: string;
    patient: string;
}[];
topics:{
    type:string,
    title:string,
    content:string,
    href:string,
}[];
patientedu:{
    span:string,
    title:string,
    discription:string,
    linkedin:string,
}
faq:{
    question:string;
    answer:string;
}[];
faqData:{
    span:string;
    title:string;
    description:string;
}
contact:{
      address: string;
      location: string;
      phone: string;
      email: string;
      whatsapp: string;
      orcid: string;
      linkedin: string;
      available: string;
}
patientstory:{
      span: string;
      title: string;
      subtitle: string;
      subspan: string;
      description: string;
      image: string;
}
reffering :{
   type:string;
    title: string;
    sub_title: string;
    description: string;
    refferal: string[]; 
}[];
accadecontact:{
  orcid  :string;
  googleScholar:string;
  research :string;
};
academicProfile:{ 
title :string;
content :string;
};
educationPage:{
title:string;
content :string;
 };
observershipData :{
title :string;
description :string;
list:string;
}[];
}

async function getHomeData(): Promise<Data | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch home data");
    }

    return res.json();
  } catch (error) {
    console.error("Home API error:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getHomeData();

    return {
      title: data?.seo?.meta_title || "Home || ",
      description: data?.seo?.meta_desc || "",
      keywords: data?.seo?.meta_key || "",
    };
  } catch {
    return {
      title: "Patient Education Centre",
      description: "",
    };
  }
}

export default async function Home() {
  const data = await getHomeData();

  return (
   <main className="relative min-h-screen flex flex-col bg-white">


<Hero banner={data?.banner} />

  {data?.emergency && (
    <EmergencyBanner emergency={data.emergency} />
  )}

    <WhyChoose
      excellence={data?.excellence}
      highlight={data?.highlights ?? []}
    />

  {data?.about && data?.metrics && (
    <AboutAndProcedures
      about={data.about}
      metrics={data.metrics}
    />
  )}

  <ConditionsTreated services={data?.services ?? []} />

  <SpecialisedProcedures pro={data?.pro ?? []} />

  {data?.card && data?.intro && (
    <Experience
      card={data.card}
      intro={data.intro}
    />
  )}

  {data?.education && data?.observerships && data?.affiliations && (
    <Education
      education={data.education}
      observerships={data.observerships}
      affiliations={data.affiliations}
    />
  )}

  <AcademicInsights contact={data?.accadecontact} academicProfile={data?.academicProfile} education={data?.educationPage} observerships={data?.observershipData} />

  {data?.casestudy && (
    <Testimonials casestudy={data.casestudy} patientstory={data.patientstory} />
  )}

  <PatientEducation topics={data?.topics ?? []} patientedu={data?.patientedu}/>

  <FAQ faq={data?.faq ?? []} faqdata={data?.faqData} />
    {data?.reffering && (
  <ReferringDoctors reffering={data?.reffering } />)}
  {data?.contact && (
    <Contact contact={data.contact} />
  )}
</main>
  );
}