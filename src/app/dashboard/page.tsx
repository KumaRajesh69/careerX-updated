"use client";
import Footer from "@/components/Layout/Footer";
import Examples from "@/components/PageComponents/LandingPage/Examples";
import Faqs from "@/components/PageComponents/LandingPage/Faqs";
import Features from "@/components/PageComponents/LandingPage/Features";
import HeroImages from "@/components/PageComponents/LandingPage/HeroImages";
import HeroSection from "@/components/PageComponents/LandingPage/HeroSection";
import HiredUsers from "@/components/PageComponents/LandingPage/HiredUsers";
import Newsletter from "@/components/PageComponents/LandingPage/Newsletter";
import SimpleSteps from "@/components/PageComponents/LandingPage/SimpleSteps";
import Templates from "@/components/PageComponents/LandingPage/Templates";
import WhyCareerX from "@/components/PageComponents/LandingPage/WhyCareerX";
import WorkBanner from "@/components/PageComponents/LandingPage/WorkBanner";
import TestComponent from "@/components/PageComponents/LandingPage/TestComponent";
import WelcomeHeader from "@/components/PageComponents/Dashboard/WelcomeHeader";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CtaButtons from "@/components/PageComponents/Dashboard/CtaButtons";
import MyTopRatedResumes from "@/components/PageComponents/Dashboard/MyTopRatedResumes";
import MyAllResumes from "@/components/PageComponents/Dashboard/MyAllResumes";

export default function Dashboard() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>({});
  const [scrolled, setScrolled] = useState(false);

  const getUser = () => {
    const _user = JSON.parse(localStorage.getItem("careerxUser") || "{}");
    setUser(_user);
  };

  useEffect(() => {
    getUser();
  }, [pathname]);

  return (
    <div>
      <WelcomeHeader user={user} settUser={setUser} />
      <CtaButtons />
      <MyTopRatedResumes />
      <MyAllResumes />
      <Features />
      <Templates />
      {/* <TestComponent /> */}
      <WhyCareerX />
      <Examples />
      <Faqs />
      <WorkBanner />
      <Newsletter />
    </div>
  );
}
