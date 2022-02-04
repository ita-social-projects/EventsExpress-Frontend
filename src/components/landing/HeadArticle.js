import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthComponent from "../../security/authComponent";
import ModalWind from "../modal-wind";
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

class HeadArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: image1,
      currentImageCounter: 0,
    };
  }

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
          <h2>What do you want to do?</h2>
          <div className="buttons">
            <AuthComponent onlyAnonymous>
              <ModalWind
                className="text-center"
                renderButton={action => (
                  <button
                    className="btn btn-warning"
                    onClick={action()}
                    type="button"
                  >
                    Create event
                  </button>
                )}
              />
            </AuthComponent>

            <Link to="home/events" className="btn btn-warning">
              Find event
            </Link>
          </div>
        </div>
      </article>
    );
  }
}

export default HeadArticle;
