import React from 'react'
import '../Style.css'
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hdfc from '../img/HDFC-Bank-logo.png'
import axis from '../img/axis_img5.jpg'
import star from '../img/20160902_154530_fJrSg_star-health-insurance.jpg'
import bajaj from '../img/images.png'
import icici from '../img/icici-bank-vector-logo.png'
import sbi from '../img/SBI-Logo.png'

const Partner = () => {
    var settings = {
    
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
          cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
      <div>
     
      </div>
        <section>
      <Container fluid className='partner-contain'>
        <div className="partner-inner-contain">
        <div className="section-title">
      <h2>Partners</h2>
      <h3>Our <span> Partners</span></h3>
    </div>
    <Slider {...settings}>
      <div className='partner-box '>
           <img className='partner-logo' src={hdfc} alt="" srcset="" />      
           </div>
      <div className='partner-box'>
      <img className='partner-logo' src={axis} alt="" srcset="" />
            </div>
      <div className='partner-box'>
      <img className='partner-logo' src={star} alt="" srcset="" />
            </div>
      <div className='partner-box'>
      <img className='partner-logo' src={bajaj} alt="" srcset="" />
            </div>
      <div className='partner-box'>
      <img className='partner-logo' src={sbi} alt="" srcset="" />
      </div>
      <div className='partner-box'>
      <img className='partner-logo' src={icici} alt="" srcset="" />
      </div>

    </Slider>
    </div>
    </Container>
</section>
    </div>
  )
}

export default Partner