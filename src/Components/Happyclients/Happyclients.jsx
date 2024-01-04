import React from "react";
import CountUp from "react-countup";
import "../Style.css";

const Happyclients = () => {
  return (
    <div>
      {/* <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <p>Happy Clients</p>
                <h4>
                  <CountUp start={0} end={232} duration={1} />
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <p>Projects</p>
                <h4>
                  <CountUp start={0} end={521} duration={1} />
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset" />
                <p>Hours Of Support</p>
                <h4>
                  <CountUp start={0} end={1463} duration={1} />
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people" />
                <p>Hard Workers</p>
                <h4>
                  <CountUp start={0} end={15} duration={1} />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="stats" className="stats">
        <img src={require("../img/paper.jpg.crdownload")} data-aos="fade-in" />

        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  {" "}
                  243{" "}
                </span>
                <p>Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  386
                </span>
                <p>Projects</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  24
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  18
                </span>
                <p>Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Happyclients;
