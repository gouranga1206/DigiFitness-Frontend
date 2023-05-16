import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Slide.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 4,
      speed: 500,
    };
    return (
      <>
        <div className="Slide-Mode">
          <div className="card">
            <Slider {...settings}>
              <div className="card-block">
                <div className="card-detail">
                  <div className="card-content">
                    <div className="card-img card-3-img"></div>
                    <div className="card-star"></div>
                    <p>
                    1
                      Porem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. See more{" "}
                    </p>
                    <div className="img-block-card">
                      <div className="img-inner-card img-3-card-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-block">
                <div className="card-detail">
                  <div className="card-content">
                    <div className="card-img card-4-img"></div>
                    <div className="card-star"></div>
                    <p>
                    2
                      Porem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. See more{" "}
                    </p>
                    <div className="img-block-card">
                      <div className="img-inner-card img-2-card-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-block">
                <div className="card-detail">
                  <div className="card-content">
                    <div className="card-img card-3-img"></div>
                    <div className="card-star"></div>
                    <p>3
                      Porem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. See more{" "}
                    </p>
                    <div className="img-block-card">
                      <div className="img-inner-card img-1-card-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-block">
                <div className="card-detail">
                  <div className="card-content">
                    <div className="card-img card-4-img"></div>
                    <div className="card-star"></div>
                    <p>
                    4
                      Porem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. See more{" "}
                    </p>
                    <div className="img-block-card">
                      <div className="img-inner-card img-1-card-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-block">
                <div className="card-detail">
                  <div className="card-content">
                    <div className="card-img card-1-img"></div>
                    <div className="card-star"></div>
                    <p>5
                      Porem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. See more{" "}
                    </p>
                    <div className="img-block-card">
                      <div className="img-inner-card img-1-card-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-block">
                <div className="card-detail">
                  <div className="card-content">
                    <div className="card-img card-2-img"></div>
                    <div className="card-star"></div>
                    <p>6
                      Porem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. See more{" "}
                    </p>
                    <div className="img-block-card">
                      <div className="img-inner-card img-2-card-block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
