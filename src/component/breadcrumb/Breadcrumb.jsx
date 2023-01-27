import React from "react";
import './breadcrumb.scss'
const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb breadcrumb-area mb-0" data-black-overlay="7">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="cr-breadcrumb text-center">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
