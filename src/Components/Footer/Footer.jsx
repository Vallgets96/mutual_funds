import React from 'react'
import '../Style.css'
import  { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import insta from '../img/instagram.png'
import face from '../img/facebook.png'
import twitter from '../img/twitter (2).png'

const Footer = () => {
    const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleLinkClick = (event, content) => {
    event.preventDefault();
    setShowModal(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
  };
  return (
    <div>
<Container fluid className='footer-contain' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className="inner-contain">
          <Row >
            <Col className='foot-col col-12 col-md-6 col-lg-3'>
              {/* <img className='footer-logo' src={logo} alt="" srcset="" /> */}
              <h5 className='mt-5 company-name'>MR DISTRIBUTION SERVICES.</h5>
              <p className='footer-para'>Our mission is to help investors achieve their financial goals by utilizing prudent investment strategies and an unwavering commitment to excellence.</p></Col>
            <Col className='foot-col col-12 col-md-6 col-lg-3 text-md-left'>
              <h6 className="mt-5 foot-link-head">Links</h6>
              <ul>
                <li><a className='foot-links' href="#hero">Home</a></li>
                <li><a className='foot-links' href="#about">About us</a></li>
                <li><a className='foot-links' href="#services">Services</a></li>
                <li><a className='foot-links' href="#contact">Contact us</a></li>
              </ul>
            </Col>
            <Col className='foot-col col-12 col-md-6 col-lg-3'>
              <h6 className='mt-5 foot-link-head-1'>GuideLines</h6>
              <ul>
                <li><a className='foot-imp-links' href="/" onClick={(e) => handleLinkClick(e, 'Terms & Conditions')}>Terms & Conditions</a></li>
                <li><a className='foot-imp-links' href="/" onClick={(e) => handleLinkClick(e, 'Privacy Policy')}>Privacy Policy</a></li>
                <li><a className='foot-imp-links' href="/" onClick={(e) => handleLinkClick(e, 'Disclaimer')}>Disclaimer</a></li>
              </ul>
            </Col>
            <Col className='foot-col col-12 col-md-6 col-lg-3'>
              <h6 className='mt-5 foot-link-head-1'>Important Links</h6>

              <ul>
                <li><a className='foot-imp-links' href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer">RBI</a>
                </li>
                <li><a className='foot-imp-links' href="https://www.sebi.gov.in/" target="_blank" rel="noopener noreferrer">SEBI</a>
                </li>
                <li><a className='foot-imp-links' href="https://www.bseindia.com/" target="_blank" rel="noopener noreferrer">BSE</a>
                </li>
                <li><a className='foot-imp-links' href="http://www.nseindia.com/" target="_blank" rel="noopener noreferrer">NSE</a>
                </li>
                <li><a className='foot-imp-links' href="https://www.amfiindia.com/" target="_blank" rel="noopener noreferrer">AMFI</a>
                </li>
              </ul>
              <a className='social-btn mb-5' href="https://www.instagram.com/mr_distributionservices_cbe?igsh=ODA1NTc5OTg5Nw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <img className='social-icons' src={insta} alt="Instagram" />
              </a>
              <a className='social-btn mb-5' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img className='social-icons' src={face} alt="Facebook" />
              </a>
              <a className='social-btn mb-5' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img className='social-icons' src={twitter} alt="Twitter" />
              </a>

            </Col>

          </Row>
          {/* Modal */}
          <Modal show={showModal} onHide={handleCloseModal} dialogClassName={`modal-custom ${window.innerWidth > 768 ? 'modal-lg' : 'modal-md'}`}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: '#111E6C', fontWeight: 'bolder', fontFamily: 'Poppins, sans-serif' }}>{modalContent}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Render different content based on the modalContent state */}
              {modalContent === 'Terms & Conditions' && <p style={{ color: 'black' }}><h6>Eligibility:</h6>
                By accessing and using our mutual fund services, you affirm that you are eligible to enter into a legally binding contract as per the applicable laws of Tamil Nadu.
                <h6>Investment Risks:</h6>
                Investing in mutual funds involves risks, and past performance is not indicative of future results. Investors should carefully consider their investment objectives and consult with financial advisors before making any investment decisions.
                <h6>Account Security:</h6>
                Users are responsible for maintaining the security of their account credentials. The mutual fund company shall not be liable for any unauthorized access or transactions resulting from the user's failure to protect their account information.
                <h6>Fees and Charges:</h6>
                Details regarding fees, charges, and expenses associated with mutual fund investments are available in the offer documents. Investors should review these documents carefully before making investment decisions.
                <h6>Redemption and Withdrawals:</h6>
                Investors may redeem their mutual fund units as per the terms specified in the offer documents. The company reserves the right to suspend redemptions under certain circumstances as allowed by the regulatory authorities. </p>}
              {modalContent === 'Privacy Policy' && <p style={{ color: 'black' }}><h6>Information Collection:</h6>
                The company collects personal information from investors for the purpose of managing mutual fund investments. This includes but is not limited to, name, contact details, and financial information. The company adheres to the privacy laws of Tamil Nadu in collecting and processing this information.
                <h6>Information Sharing:</h6>
                The company may share personal information with regulatory authorities, service providers, or as required by law. Personal information is treated confidentially, and adequate safeguards are implemented to protect against unauthorized access.
                <h6>Cookies and Tracking:</h6>
                The company may use cookies and other tracking technologies to enhance user experience on the website. Users can control cookie preferences through their browser settings.
                <h6>Security Measures:</h6>
                The company employs industry-standard security measures to protect the personal information of investors. However, no data transmission over the internet can be guaranteed to be completely secure, and users acknowledge this risk.
                <h6>Updates to Privacy Policy:</h6>
                The privacy policy may be updated from time to time to reflect changes in legal requirements or business practices. Users will be notified of any significant changes.
                By using our mutual fund services, investors acknowledge and agree to comply with the above terms and conditions and privacy policy in accordance with the laws and norms of Tamil Nadu.
              </p>}
              {modalContent === 'Disclaimer' && <p style={{ color: 'black' }}>
                Disclaimer of warranties.<br></br>
                You acknowledge and agree that this site is provided on an "as is" and "as available" basis. None of  MR Distributions, its members, affiliates or their respective officers, directors, employees or agents guarantees the timeliness, accuracy, reliability, completeness, or usefulness of any of the information contained in the site.<br></br>
                None of the MR Distribution services warrant that this site or downloads will meet your needs or expectations, be uninterrupted, secure, or error, or that this site, its server, or any files available for downloading through this site are free of computer viruses or other harmful elements.<br></br>
                The MR distributions have no responsibility for viruses or any other damage that may be caused to you as a result of using this site.<br></br>
                Periods of volatile or unusual market activity, in particular, may affect systems availability or response time.<br></br>
                You expressly agree that the entire risk as to the quality and performance of this site and the timeliness, usefulness, accuracy, or completeness of the site is assumed solely by you.<br></br>
                All of the MR Distributions  hereby specifically disclaim any representations, endorsements, guarantees, or warranties, express or implied, regarding this site, including without limitation, the implied warranties of merchantability and fitness for a particular purpose and non-infringement of third-party rights.<br></br>
                Without limiting the generality of the foregoing,  the Mr Distributions disclaim any warranties with respect to any results that may be obtained from the use of this site.<br></br>
cd
              </p>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        
      </Container>
      <div className="copyright">
            <p className='text-center'><span><i class="bi bi-c-circle"></i></span>Copyright @ MrDistribution</p>
        </div>
    </div>
  )
}

export default Footer