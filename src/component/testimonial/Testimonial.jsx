import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.scss";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = () => {
  const [testi, setTesti] = useState();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_ROOT_URL}/helix/Testimonial/show/testimonial`
      )
      .then((res) => {
        console.log("res_", res);
        setTesti(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("testi", testi);
  return (
    <div className="pl-40 pr-30 pl-sm-20 pr-sm-20 pl-xs-0 pr-xs-0">
      <h3>WHAT OUR CLIENTS SAY</h3>
      <h1>TESTIMONIALS</h1>

      {testi && testi.length ? (
        <Slider {...settings}>
          {testi.map((el) => (
            <div className="quote-wrapper " key={el._id}>
              <p>
                {el.message}
              </p>
              <h3 className="testiName">{el.name}</h3>
            </div>
          ))}

          {/* <div className="quote-wrapper ">
           <p>
             Working with Helix Tech was a refreshing experience. Before, my
             company struggled to find an IT professional that matched our needs.
             After describing the role we needed, Helix’s team was able to
             provide us with a perfect-fit candidate who has since become one of
             our most valuable assets. I highly recommend Helix Tech no matter
             the size or age of your business. It’s that valuable!
           </p>
           <h3 className="testiName">Kristin Hans</h3>
         </div>
         <div className="quote-wrapper ">
           <p>
             Working with Helix Tech was a refreshing experience. Before, my
             company struggled to find an IT professional that matched our needs.
             After describing the role we needed, Helix’s team was able to
             provide us with a perfect-fit candidate who has since become one of
             our most valuable assets. I highly recommend Helix Tech no matter
             the size or age of your business. It’s that valuable!
           </p>
           <h3 className="testiName">Kristin Hans</h3>
         </div> */}
        </Slider>
      ) : (
        <h6>No Data Found...</h6>
      )}
    </div>
  );
};

export default Testimonial;
