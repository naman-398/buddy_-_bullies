import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Header = () => {
  return (
    <div>
      <header className="bg-img d-flex flex-column">
        <nav className="p-4">
          <nav className="navbar navbar-expand-lg">
            <Container>
              <a
                className="text-decoration-none logo ff-poppins color-light fw-6 fs-sm lh-150"
                href="#"
              >
                logo
              </a>
              <button
                className="navbar-toggler bg-dark-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="fals"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse  justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav d-flex nav-icon-gap">
                  <a
                    className=" minting text-decoration-none ff-poppins fs-2sm fw-5 color-light nav-icon-underline mb-0"
                    aria-current="page"
                    href="#minting"
                  >
                    Minting
                  </a>
                  <a
                    className=" minting text-decoration-none ff-poppins fs-2sm fw-5 color-light nav-icon-underline mb-0"
                    href="#roadmap"
                  >
                    Road Map
                  </a>
                  <a
                    className=" minting text-decoration-none ff-poppins fs-2sm fw-5 color-light nav-icon-underline mb-0"
                    href="#faq"
                  >
                    Faq
                  </a>
                  <a
                    className=" minting text-decoration-none ff-poppins fs-2sm fw-5 color-light nav-icon-underline mb-0"
                    href="#team"
                  >
                    Team
                  </a>
                  <a
                    className="minting text-decoration-none ff-poppins fs-2sm fw-5 color-light nav-icon-underline mb-0"
                    href="#join"
                  >
                    Join Us
                  </a>
                </div>
              </div>
            </Container>
          </nav>
        </nav>
        <div className="d-flex flex-grow-1 align-items-center">
          <Container>
            <h1 className="vitae ff-poppins fw-4 fs-1lg color-light lh-124">
              Vitae nunc, <span className="fw-7">blandit a odio</span>{" "}
            </h1>
            <p className="para ff-poppins color-light fw-5 fs-1sm mt-4">
              Semper in egestas risus id tempus. Pellentesque dolor eros
              sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
              vestibulum dolor diam
            </p>
            <button
              href="#"
              className="get-started text-decoration-none ff-poppins mt-5 bg-light1 fw-5 fs-1md color-pagecolor"
            >
              Get Started
            </button>
          </Container>
        </div>
      </header>
    </div>
  );
};

export default Header;
