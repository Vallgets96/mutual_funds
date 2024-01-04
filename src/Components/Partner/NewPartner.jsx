import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "./logos/sriram.png";
import img2 from "./logos/canfin.jpg";
import img3 from "./logos/bajaj.png";
import img4 from "./logos/icic.png";
import img5 from "./logos/hdfc.svg";
import img6 from "./logos/sundaramhome.png";
import "./Newpartner.css";
import { Container } from "react-bootstrap";

function Newpartner() {
  return (
    <>
      <div className="section-title">
        <h2>Our Partners</h2>
        <h3>
          Powering <span> Prosperity Together</span>
        </h3>
      </div>
      <Container className="border shadow">
        <div className="App">
          <div className="mb-3">
            <Marquee direction="right" speed={100} delay={5}>
              <div className="image_wrapper">
                <img src={img1} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={img2} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={img3} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={img4} alt="" />
              </div>
              <div>
                <img src={img5} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={img6} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Newpartner;
