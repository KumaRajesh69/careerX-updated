import Highlight from "@/component/Highlight";
import Awards from "@/component/Highlight/Awards";
import Certificates from "@/component/Highlight/Certificates";
import CustomSection from "@/component/Highlight/CustomSection";
import Hobbies from "@/component/Highlight/Hobbies";
import Languages from "@/component/Highlight/Languages";
import Publication from "@/component/Highlight/Publication";
import SocialWork from "@/component/Highlight/SocialWork";
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
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const storedId = localStorage.getItem("_id");
  //       if (!storedId) {
  //         throw new Error("_id not found in local storage");
  //       }

  //       const response = await axios.patch(
  //         `http://13.202.26.201:5000/v1/user-resume-management/${storedId}`
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Highlight data={accordionData} />
    </div>
  );
}

export default highlights;
