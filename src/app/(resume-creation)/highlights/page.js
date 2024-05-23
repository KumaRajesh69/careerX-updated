"use client";

import Highlight from "../../../components/PageComponents/Highlight";
import Awards from "../../../components/PageComponents/Highlight/Awards";
import Certificates from "../../../components/PageComponents/Highlight/Certificates";
import CustomSection from "../../../components/PageComponents/Highlight/CustomSection";
import Hobbies from "../../../components/PageComponents/Highlight/Hobbies";
import Languages from "../../../components/PageComponents/Highlight/Languages";
import Publication from "../../../components/PageComponents/Highlight/Publication";
import SocialWork from "../../../components/PageComponents/Highlight/SocialWork";
import axios from "axios";
import React, { useEffect, useState } from "react";

const accordionData = [
  {
    img: "/img2/paper.svg",
    title: "Publications & papers",
    component: <Publication />,
  },

  {
    img: "/img2/certi.svg",
    title: "Certificates",
    component: <Certificates />,
  },
  {
    img: "/img2/cup.svg",
    title: "Awards & Achievements",
    component: <Awards />,
  },
  {
    img: "/img2/lang.svg",
    title: "Languages",
    component: <Languages />,
  },
  {
    img: "/img2/hand.svg",
    title: "Social work",
    component: <SocialWork />,
  },
  {
    img: "/img2/paint.svg",
    title: "Hobbies",
    component: <Hobbies />,
  },
  {
    // img: "/img2/paint.svg",
    title: "Add custom section",
    component: <CustomSection />,
  },
];

function highlights() {


  return (
    <div>
      <Highlight data={accordionData} />
    </div>
  );
}

export default highlights;
