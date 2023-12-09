import React from "react";
import elispe3 from "../Images/elipse1.png";
const Accordiansection = () => {
  return (
    <div>
      <section className=" z-0 position-relative">
<img src={elispe3} alt="elipse3" className="elipse3" />
        <div id="faq" className="container position-relative z-1">
          <h3 className="faq  text-center fw-6 fs-lg ff-poppins color-light">
            FAQs
          </h3>

          <div className="accordion pt-5" id="accordionFlushExample">
            <div className=" bg-transparent p-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed  mx-auto "
                  id="red"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-para mx-auto">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div className="bg-transparent p-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed  mx-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-para mx-auto">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div className=" bg-transparent p-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed  mx-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-para mx-auto">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div className="bg-transparent p-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed  mx-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-para mx-auto">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordiansection;
