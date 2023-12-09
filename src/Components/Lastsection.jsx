import React from "react";
import lastimg1 from "../Images/last-section1.png";
import lastimg2 from "../Images/last-section2.png";
import lastimg3 from "../Images/last-section3.png";
const Lastsection = () => {
  return (
    <div>
      <section className="bg-color">
        <div id="team" className="container last-section-padding">
          <div className="color-light ff-poppins fs-lg fw-6 text-center">
            Our Team
          </div>
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center flex-column">
              <img src={lastimg1} alt="1" />
              <div className="pt-4">
                <p className="ff-poppins fw-6 fs-md color-light lh-136 m-0 text-center">
                  Prime Bullister{" "}
                </p>
                <p className="ff-poppins fw-4 fs-2sm color-light lh-136 text-center">
                  Pruduct Designer
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center flex-column">
              <img src={lastimg2} alt="2" />
              <div className="pt-4">
                <p className="ff-poppins fw-6 fs-md color-light lh-136 m-0 text-center">
                  Solvador Bulli
                </p>
                <p className="ff-poppins fw-4 fs-2sm color-light lh-136 text-center">
                  Artist
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center  flex-column">
              <img src={lastimg3} alt="3" />
              <div className="pt-4">
                <p className="ff-poppins fw-6 fs-md color-light lh-136 m-0 text-center">
                  Meta Bully
                </p>
                <p className="ff-poppins fw-4 fs-2sm color-light lh-136 text-center">
                  Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lastsection;
