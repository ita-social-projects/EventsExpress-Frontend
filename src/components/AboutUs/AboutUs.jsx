import React from "react";
import InfoSection from "./InfoSection/InfoSection";
import Banner from "./Banner/Banner";
import MembersContainer from "../../containers/AboutUsContainer/MembersContainer";

const AboutUs = () => (
  <div className="about">
    <Banner />
    <InfoSection />
    <MembersContainer />
  </div>
);

export default AboutUs;
