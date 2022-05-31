import React from "react";
import Members from "./Members/Members";
import InfoSection from "./InfoSection/InfoSection";
import Banner from "./Banner/Banner";

const AboutUs = () => (
  <div className="about">
    <Banner />
    <InfoSection />
    <Members />
  </div>
);

export default AboutUs;
