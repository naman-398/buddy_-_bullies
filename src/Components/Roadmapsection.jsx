import React from "react";
import elipse2 from "../Images/Ellipse 3.png";
const Roadmapsection = () => {
  return (
    <div>
      <section className=" position-relative z-0 roadmap-top-padding">
        <img src={elipse2} alt="elipse2" className="elipse2 d-none d-md-block"/>
        <div id="roadmap" className="roadmapcontainer position-relative z-1">
          <h2 className="color-light ff-poppins fs-lg fw-6 text-center margin-bottom-timeline">
            Roadmap
          </h2>
          <div className="timeline ">
            <div className="containertimeline right">
              <div className="roadmap-card">
                <h2 className="color-light fs-md ff-poppins fw-6 lh-150 ps-3">
                  Q-4, 2021
                </h2>
                <p className="roadmap-para ff-poppins color-light fs-3sm fw-4 opacity-7 ps-3">
                  Blandit sed penatibus elit tortor fermentum velit donec. Id
                  eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.
                </p>
              </div>
            </div>
            <div className="containertimeline left">
              <div className="roadmap-card">
                <h2 className="color-light fs-md ff-poppins fw-6 lh-150 text_align_end pe-sm-3 ps-3">
                  Q-1, 2022
                </h2>
                <p className="roadmap-para ff-poppins color-light fs-3sm fw-4 opacity-7 text_align_end ms-auto me-0 pe-sm-3 ps-3">
                  Blandit sed penatibus elit tortor fermentum velit donec. Id
                  eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="containertimeline right">
            <div className="roadmap-card">
              <h2 className="color-light fs-md ff-poppins fw-6 lh-150 ps-3">
                Q-2, 2022
              </h2>
              <p className="roadmap-para ff-poppins color-light fs-3sm fw-4 opacity-7 pb-0 ps-3">
                Blandit sed penatibus elit tortor fermentum velit donec. Id
                eleifend volutpat dolor netus auctor at. Volutpat sed auctor non
                in commodo, felis viverra risus tristique.
              </p>
            </div>
          </div>

          <div className="accordian-head-padding">
            <p className="para1 mx-auto mb-0">
              And this just the begining , the team is working on more suprises
              for our community. Buddybullies stronger together !!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmapsection;
