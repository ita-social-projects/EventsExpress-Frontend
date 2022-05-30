import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./HeadArticle.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import constants from "../../../constants/HeadArticle";
import {
  slideShowImages,
  SLIDES_INTERVAL,
} from "./HeadArticleSlideShowContent";

const { BANNER_TEXT_1, BANNER_TEXT_2, BANNER_BUTTON_TEXT } = constants;

const HeadArticle = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageChange = setInterval(() => {
      setCurrentImage(current =>
        current === slideShowImages.length - 1 ? 0 : current + 1,
      );
    }, SLIDES_INTERVAL);

    return () => {
      clearInterval(imageChange);
    };
  }, []);

  return (
    <article className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h3 className="banner-text__quote1">{BANNER_TEXT_1}</h3>
          <h4 className="banner-text__quote2">{BANNER_TEXT_2}</h4>
        </div>
        <Link to="/home/events" className="banner-button" type="button">
          {BANNER_BUTTON_TEXT}
        </Link>
      </div>
      <div className="banner-img">
        <LazyLoadImage
          alt="background"
          effect="blur"
          src={slideShowImages[currentImage]}
          wrapperClassName="banner-img__wrapper"
        />
      </div>
    </article>
  );
};

export default HeadArticle;
