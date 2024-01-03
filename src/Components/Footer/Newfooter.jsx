import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Newfooter = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handlePrivacy = () => setShow(true);
  // const handleDisclamier = () => setShow(true);

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleClose = () => {
    setShowTerms(false);
    setShowPrivacy(false);
    setShowDisclaimer(false);
  };

  const handleShowTerms = () => setShowTerms(true);
  const handleShowPrivacy = () => setShowPrivacy(true);
  const handleShowDisclaimer = () => setShowDisclaimer(true);

  return (
    <>
      <footer id="footer" class="footer">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-about">
              <a href="#" class="logo d-flex align-items-center">
                <span>MR Distribution</span>
              </a>
              <p>
                Our mission is to help investors achieve their financial goals
                by utilizing prudent investment strategies and an unwavering
                commitment to excellence.
              </p>

              <div class="social-links d-flex mt-4">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="services">Service</a>
                </li>
                <li>
                  <a href="#faq">FAQ's</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>GuideLines</h4>
              <ul>
                <li>
                  <a
                    href="."
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowTerms();
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="."
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowPrivacy();
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="."
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowDisclaimer();
                    }}
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links ms-5">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <a href="#">RBI</a>
                </li>
                <li>
                  <a href="#">SEBI</a>
                </li>
                <li>
                  <a href="#">BSE</a>
                </li>
                <li>
                  <a href="#">NSE</a>
                </li>
                <li>
                  <a href="#">AMFI</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container copyright text-center mt-4 mb-0">
          <p>
            &copy; <span>Copyright</span>{" "}
            <strong class="px-1">MR Distribution</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div class="credits"></div>
        </div>
      </footer>
      <Modal show={showTerms} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Eligibility: By accessing and using our mutual fund services, you
          affirm that you are eligible to enter into a legally binding contract
          as per the applicable laws of Tamil Nadu. Investment Risks: Investing
          in mutual funds involves risks, and past performance is not indicative
          of future results. Investors should carefully consider their
          investment objectives and consult with financial advisors before
          making any investment decisions. Account Security: Users are
          responsible for maintaining the security of their account credentials.
          The mutual fund company shall not be liable for any unauthorized
          access or transactions resulting from the user's failure to protect
          their account information. Fees and Charges: Details regarding fees,
          charges, and expenses associated with mutual fund investments are
          available in the offer documents. Investors should review these
          documents carefully before making investment decisions. Redemption and
          Withdrawals: Investors may redeem their mutual fund units as per the
          terms specified in the offer documents. The company reserves the right
          to suspend redemptions under certain circumstances as allowed by the
          regulatory authorities.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
      <Modal show={showPrivacy} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Information Collection: <br /> The company collects personal
          information from investors for the purpose of managing mutual fund
          investments. This includes but is not limited to, name, contact
          details, and financial information. The company adheres to the privacy
          laws of Tamil Nadu in collecting and processing this information.{" "}
          <br />
          Information Sharing: <br /> The company may share personal information
          with regulatory authorities, service providers, or as required by law.
          Personal information is treated confidentially, and adequate
          safeguards are implemented to protect against unauthorized access.{" "}
          <br />
          Cookies and Tracking: <br /> The company may use cookies and other
          tracking technologies to enhance user experience on the website. Users
          can control cookie preferences through their browser settings. <br />{" "}
          Security Measures: <br /> The company employs industry-standard
          security measures to protect the personal information of investors.
          However, no data transmission over the internet can be guaranteed to
          be completely secure, and users acknowledge this risk. <br /> Updates
          to Privacy Policy: <br /> The privacy policy may be updated from time
          to time to reflect changes in legal requirements or business
          practices. Users will be notified of any significant changes. By using
          our mutual fund services, investors acknowledge and agree to comply
          with the above terms and conditions and privacy policy in accordance
          with the laws and norms of Tamil Nadu.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
      <Modal show={showDisclaimer} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Disclaimer </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Disclaimer of warranties. <br /> You acknowledge and agree that this
          site is provided on an "as is" and "as available" basis. None of MR
          Distributions, its members, affiliates or their respective officers,
          directors, employees or agents guarantees the timeliness, accuracy,
          reliability, completeness, or usefulness of any of the information
          contained in the site. <br /> None of the MR Distribution services
          warrant that this site or downloads will meet your needs or
          expectations, be uninterrupted, secure, or error, or that this site,
          its server, or any files available for downloading through this site
          are free of computer viruses or other harmful elements. The MR
          distributions have no responsibility for viruses or any other damage
          that may be caused to you as a result of using this site. <br />{" "}
          Periods of volatile or unusual market activity, in particular, may
          affect systems availability or response time. You expressly agree that
          the entire risk as to the quality and performance of this site and the
          timeliness, usefulness, accuracy, or completeness of the site is
          assumed solely by you. <br /> All of the MR Distributions hereby
          specifically disclaim any representations, endorsements, guarantees,
          or warranties, express or implied, regarding this site, including
          without limitation, the implied warranties of merchantability and
          fitness for a particular purpose and non-infringement of third-party
          rights. Without limiting the generality of the foregoing, the Mr
          Distributions disclaim any warranties with respect to any results that
          may be obtained from the use of this site. cd
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
};

export default Newfooter;
