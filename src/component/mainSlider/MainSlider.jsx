import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import { mainSlider1, mainSlider2, mainSlider3 } from "../images";
import './mainSlider.scss';

const settings = {
  dots: true,
//   fade: true,
  lazyLoad: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const sliderData = [
  {
    image: 'mainSlider1',
    title: "Your One-Stop-Shop for Rewarding Jobs & Capable Talent",
    description:
      "1. We bring together skilled IT professionals in North America and businesses seeking tech-savvy experts. At Helix Tech, we understand how difficult it is on both sides of the coin: finding a job as an IT pro and finding talent as a company. We’re here to bridge that gap to help individuals and companies reach their goals",
  },
  {
    image: 'mainSlider2',
    title: "Get the talent you need to succeed",
    description:
      "2. We bring together skilled IT professionals in North America and businesses seeking tech-savvy experts. At Helix Tech, we understand how difficult it is on both sides of the coin: finding a job as an IT pro and finding talent as a company. We’re here to bridge that gap to help individuals and companies reach their goals",
  },
  {
    image: 'mainSlider3',
    title: "Find a rewarding job in IT",
    description:
      "3. We bring together skilled IT professionals in North America and businesses seeking tech-savvy experts. At Helix Tech, we understand how difficult it is on both sides of the coin: finding a job as an IT pro and finding talent as a company. We’re here to bridge that gap to help individuals and companies reach their goals",
  },
];

const MainSlider = () => {
  return (
    <div className="mainSlider banner-area">
      <Slider {...settings}>
        {sliderData.map((el) => (
          <div
            className={`single-banner 11bg-image-9 bg-image-mainSlider fullscreen bg-parallax  ${el.image}`}
            // style={{ backgroundImage: `url(${el.image})` }}
            data-black-overlay="5"
            data-velocity=".2"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="single-banner-content">
                    {/* <h1>
                        <a
                          href=""
                          className="typewrite text-white"
                          data-period="2000"
                          data-type='[ "Your One-Stop-Shop for Rewarding Jobs & Capable Talent", "Get the talent you need to succeed", "Find a rewarding job in IT"]'
                        >
                          <span className="wrap"></span>
                        </a>
                      </h1> */}

                    <h1 style={{ color: "#fff" }}>
                      <Typewriter
                        // words={[
                        //   "Your One-Stop-Shop for Rewarding Jobs & Capable Talent",
                        //   "Get the talent you need to succeed",
                        //   "Find a rewarding job in IT",
                        // ]}
                        words={[el.title, el.title, el.title]}
                        loop={5}
                        cursor
                        cursorStyle="|"
                        // cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                      />
                    </h1>

                    {/* <h1 className="font-medium cd-headline no-cursor clip text-left">
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">Your One-Stop-Shop for Rewarding Jobs & Capable Talent</b>
                                    <b>Get the talent you need to succeed</b>
                                    <b>Find a rewarding job in IT</b>
                                </span>
                            </h1> */}

                    <p id="jj">{el.description}</p>
                    <Link
                      to="/helix/About_us"
                      className="cr-btn cr-btn-lg cr-btn-round"
                    >
                      <span id="KONW">Know More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
