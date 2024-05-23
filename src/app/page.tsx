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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  // const pathname = usePathname();
  // const [user, setUser] = useState<any>({});

  // const getUser = () => {
  //   const _user = JSON.parse(localStorage.getItem("careerxUser") || "{}");
  //   setUser(_user);

  //   if (_user) {
  //    router.push()
  //  }
  // };

  // useEffect(() => {
  //   getUser();
  // });

  return (
    <div>
      <HeroSection />
      <HeroImages />
      <HiredUsers />
      <SimpleSteps />
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
