import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./footer.css";
const Newfooter = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleLinkClick = (event, content) => {
    event.preventDefault();
    setShowModal(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
  };
  return (
    <>
      <section class="footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4 id="font">MR Distribution Services</h4>
            <p>
              Our mission is to help investors achieve their financial goals by
              utilizing prudent investment strategies and an unwavering
              commitment to excellence.
            </p>
            <a
              className="social-btn mb-5"
              href="https://www.instagram.com/mr_distributionservices_cbe?igsh=ODA1NTc5OTg5Nw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-instagram fs-4 text-light"></i>
            </a>
            <a
              className="social-btn mb-5 ms-3"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi  bi-facebook fs-4 text-light"></i>
            </a>
            <a
              className="social-btn mb-5 ms-3"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-twitter-x text-light fs-4"></i>
            </a>
            <div class="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="heading">Links</h4>
            <ul class="links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#owner">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#Contact">Contact us</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="heading">GuideLines</h4>
            <ul class="links">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, "Terms & Conditions")}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Privacy Policy")}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, "Disclaimer")}>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="heading">Important Links</h4>
            <ul class="links">
              <li>
                <a href="https://www.rbi.org.in/">RBI</a>
              </li>
              <li>
                <a href="https://www.sebi.gov.in/">SEBI</a>
              </li>
              <li>
                <a href="https://www.bseindia.com/">BSE</a>
              </li>
              <li>
                <a href="http://www.nseindia.com/">NSE</a>
              </li>
              <li>
                <a href="https://www.amfiindia.com/">AMFI</a>
              </li>
            </ul>
          </div>
        </div>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          dialogClassName={`modal-custom ${
            window.innerWidth > 768 ? "modal-lg" : "modal-md"
          }`}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                color: "#111E6C",
                fontWeight: "bolder",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {modalContent}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render different content based on the modalContent state */}
            {modalContent === "Terms & Conditions" && (
              <p style={{ color: "black" }}>
              <h5>Eligibility:</h5>
              By accessing and using our mutual fund services, you affirm
              that you are eligible to enter into a legally binding contract
              as per the applicable laws of Tamil Nadu.
              <br/>
              <br/>
              <h5>Investment Risks:</h5>
              Investing in mutual funds involves risks, and past performance
              is not indicative of future results. Investors should
              carefully consider their investment objectives and consult
              with financial advisors before making any investment
              decisions.
              <br/>
              <br/>
              <h5>Account Security:</h5>
              Users are responsible for maintaining the security of their
              account credentials. The mutual fund company shall not be
              liable for any unauthorized access or transactions resulting
              from the user's failure to protect their account information.
              <br/>
              <br/>
              <h5>Fees and Charges:</h5>
              Details regarding fees, charges, and expenses associated with
              mutual fund investments are available in the offer documents.
              Investors should review these documents carefully before
              making investment decisions.
              <br/>
              <br/>
              <h5>Redemption and Withdrawals:</h5>
              Investors may redeem their mutual fund units as per the terms
              specified in the offer documents. The company reserves the
              right to suspend redemptions under certain circumstances as
              allowed by the regulatory authorities.{" "}
            </p>
            )}
            {modalContent === "Privacy Policy" && (
             <p style={{ color: "black" }}>
             <h5>Information Collection:</h5>
             The company collects personal information from investors for
             the purpose of managing mutual fund investments. This includes
             but is not limited to, name, contact details, and financial
             information. The company adheres to the privacy laws of Tamil
             Nadu in collecting and processing this information.
             <br/>
             <br/>
             <h5>Information Sharing:</h5>
             The company may share personal information with regulatory
             authorities, service providers, or as required by law.
             Personal information is treated confidentially, and adequate
             safeguards are implemented to protect against unauthorized
             access.
             <br/>
             <br/>
             <h5>Cookies and Tracking:</h5>
             The company may use cookies and other tracking technologies to
             enhance user experience on the website. Users can control
             cookie preferences through their browser settings.
             <br/>
             <br/>
             <h5>Security Measures:</h5>
             The company employs industry-standard security measures to
             protect the personal information of investors. However, no
             data transmission over the internet can be guaranteed to be
             completely secure, and users acknowledge this risk.
             <br/>
             <br/>
             <h5>Updates to Privacy Policy:</h5>
             The privacy policy may be updated from time to time to reflect
             changes in legal requirements or business practices. Users
             will be notified of any significant changes. By using our
             mutual fund services, investors acknowledge and agree to
             comply with the above terms and conditions and privacy policy
             in accordance with the laws and norms of Tamil Nadu.
           </p>
            )}
            {modalContent === "Disclaimer" && (
              <p style={{ color: "black" }}>
                Disclaimer of warranties.<br></br>
                You acknowledge and agree that this site is provided on an "as
                is" and "as available" basis. None of MR Distributions, its
                members, affiliates or their respective officers, directors,
                employees or agents guarantees the timeliness, accuracy,
                reliability, completeness, or usefulness of any of the
                information contained in the site.<br></br>
                None of the MR Distribution services warrant that this site or
                downloads will meet your needs or expectations, be
                uninterrupted, secure, or error, or that this site, its server,
                or any files available for downloading through this site are
                free of computer viruses or other harmful elements.
                <br></br>
                The MR distributions have no responsibility for viruses or any
                other damage that may be caused to you as a result of using this
                site.<br></br>
                Periods of volatile or unusual market activity, in particular,
                may affect systems availability or response time.<br></br>
                You expressly agree that the entire risk as to the quality and
                performance of this site and the timeliness, usefulness,
                accuracy, or completeness of the site is assumed solely by you.
                <br></br>
                All of the MR Distributions hereby specifically disclaim any
                representations, endorsements, guarantees, or warranties,
                express or implied, regarding this site, including without
                limitation, the implied warranties of merchantability and
                fitness for a particular purpose and non-infringement of
                third-party rights.<br></br>
                Without limiting the generality of the foregoing, the Mr
                Distributions disclaim any warranties with respect to any
                results that may be obtained from the use of this site.
                <br></br>
                cd
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <div className="text-center ">
          @Copyright <span className="fw-bold">@MRDistributionServices</span>{" "}
        </div> */}
      </section>
      <div className="copyright">
        <p className="text-center fw-bold mt-2">
          <span>
            <i class="bi bi-c-circle"></i>
          </span>
          Copyright @ MrDistribution
        </p>
      </div>
    </>
  );
};

export default Newfooter;