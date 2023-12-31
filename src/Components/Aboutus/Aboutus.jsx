import React from 'react'
import '../Style.css'
import founder from '../img/founder.png'
import ceo from '../img/ceo.png'
import dir from '../img/dir.jpg'
const Aboutus = () => {
  return (
    <div>
<section id="about" className="about section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>About</h2>
      <h3>Find Out More <span>About Us</span></h3>
      <p>We have been in the mutual fund distribution business since 2000.</p>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6 align-content-center justify-content-center text-center" data-aos="fade-right" data-aos-delay={100}>
        <img src={founder} className="img-fluid founder" alt />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={100}>
        <h3>OUR MISSION AND VISION</h3>
        <p className>
          Our mission is to help investors achieve their financial goals by utilizing prudent investment strategies and an unwavering commitment to excellence. 
          Three key pillars that define our mission are Financial Empowerment, Expert Advice, Trust, and Transparency.
        </p>
        <p className>
          Our vision is to be the driving force behind a society in which every person, regardless of background, can confidently navigate the path to financial success. 
        </p>
        <ul>
          <li>
            <img className="ceo" src={ceo} />
            <div className='cont'>
              <h4>Our Beloved Founder / R.Mohanraj, B.Com	</h4>
              <p>
                Our founder Mr. Mohanraj has more than 20 years of expertise in the mutual funds and investment fields. He has helped in elevating the financial lifestyle of many clients throughout his journey</p>
            </div>
          </li>
          <li>
            <img className="ceo" src={dir} />
            <div >
              <h4 className='cont'>Our Director / Shrinidhi M R, BBA.</h4>
              <p>Our Next-gen Director Shrinidhi M R has been in this field for more than 2 years.⁠ Both Mr. Mohanraj and Ms.Shrinidhi are AMFI-registered Mutual Fund distributors. Shrinidhi has also completed a Certified Retirement Goal planner and is also pursuing her CFP(certified Financial planner).
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Aboutus