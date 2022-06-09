import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./HeadArticle.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageSetter from "../../helpers/BannerSlides/ImageSetter";
import {
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_BUTTON_TEXT,
  SLIDES,
  SLIDES_INTERVAL,
} from "../../../constants/headersConstants";

const HeadArticle = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageChange = setInterval(() => {
      setCurrentImageIndex(ImageSetter);
    }, SLIDES_INTERVAL);

    return () => {
      clearInterval(imageChange);
    };
  }, []);

  return (
    <article className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h3 className="banner-text__quote1">{BANNER_TITLE}</h3>
          <h4 className="banner-text__quote2">{BANNER_SUBTITLE}</h4>
        </div>
        <Link to="/home/events" className="banner-button" type="button">
          {BANNER_BUTTON_TEXT}
        </Link>
      </div>
      <LazyLoadImage
        alt="background"
        effect="blur"
        src={SLIDES[currentImageIndex]}
        wrapperClassName="banner-img__wrapper"
      />
    </article>
  );
};

export default HeadArticle;
