import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthComponent from "../../security/authComponent";
import ModalWind from "../modal-wind";
import constants from "../../constants/HeadArticleConstants";
import image1 from "./landing-images/1.jpg";
import image2 from "./landing-images/2.jpg";
import image3 from "./landing-images/3.jpg";
import image4 from "./landing-images/4.jpg";
import image5 from "./landing-images/5.jpg";
import image6 from "./landing-images/6.jpg";
import image7 from "./landing-images/7.jpg";
import image8 from "./landing-images/8.jpg";

const imagesPreload = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
const { CREATE_EVENT, FIND_EVENT, WHAT_DO_YOU_WANT_TO_DO } = constants;

class HeadArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: image1,
      currentImageCounter: 0,
    };
  }

  // handleClick = () => {
  //   this.props.onSubmit();
  // };

  async componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        currentImageCounter:
          (prevState.currentImageCounter + 1) % imagesPreload.length,
        currentImage: imagesPreload[prevState.currentImageCounter],
      }));
    }, 5000);
  }

  render() {
    const { currentImage } = this.state;
    return (
      <article
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="button-container text-center">
          <h2>{WHAT_DO_YOU_WANT_TO_DO}</h2>
          <div className="buttons">
            <AuthComponent onlyAnonymous>
              <ModalWind
                className="text-center"
                renderButton={action => (
                  <button
                    className="btn btn-warning"
                    onClick={action}
                    type="button"
                  >
                    {CREATE_EVENT}
                  </button>
                )}
              />
            </AuthComponent>

            <Link to="home/events" className="btn btn-warning">
              {FIND_EVENT}
            </Link>
          </div>
        </div>
      </article>
    );
  }
}

export default HeadArticle;
