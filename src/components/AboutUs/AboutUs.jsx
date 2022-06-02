import React from "react";
import InfoSection from "./InfoSection/InfoSection";
import Banner from "./Banner/Banner";
import MembersConainer from "../../containers/AboutUsContainer/MembersConainer";

const AboutUs = () => (
  <div className="about">
    <Banner />
    <InfoSection />
    <MembersConainer />
  </div>
);

export default AboutUs;
