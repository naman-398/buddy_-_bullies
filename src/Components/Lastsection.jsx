import React from "react";
import lastimg1 from "../Images/last-section1.png";
import lastimg2 from "../Images/last-section2.png";
import lastimg3 from "../Images/last-section3.png";
import { Col, Container, Row } from "react-bootstrap";
const Lastsection = () => {
  return (
    <div>
      <section className="bg-color">
        <Container id="team" className="last-section-padding">
          <div className="color-light ff-poppins fs-lg fw-6 text-center">
            Our Team
          </div>
          <Row className="row pt-5 justify-content-center">
            <Col
              lg={4}
              md={6}
              className="d-flex align-items-center flex-column"
            >
              <img src={lastimg1} alt="1" />
              <div className="pt-4">
                <p className="ff-poppins fw-6 fs-md color-light lh-136 m-0 text-center">
                  Prime Bullister{" "}
                </p>
                <p className="ff-poppins fw-4 fs-2sm color-light lh-136 text-center">
                  Pruduct Designer
                </p>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="d-flex align-items-center flex-column"
            >
              <img src={lastimg2} alt="2" />
              <div className="pt-4">
                <p className="ff-poppins fw-6 fs-md color-light lh-136 m-0 text-center">
                  Solvador Bulli
                </p>
                <p className="ff-poppins fw-4 fs-2sm color-light lh-136 text-center">
                  Artist
                </p>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="d-flex align-items-center  flex-column"
            >
              <img src={lastimg3} alt="3" />
              <div className="pt-4">
                <p className="ff-poppins fw-6 fs-md color-light lh-136 m-0 text-center">
                  Meta Bully
                </p>
                <p className="ff-poppins fw-4 fs-2sm color-light lh-136 text-center">
                  Developer
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Lastsection;
