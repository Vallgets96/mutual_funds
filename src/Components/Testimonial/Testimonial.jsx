// Testimonials.js

import React from 'react';
import img1 from '../img/testimonials/testimonials-1.jpg'
import img2 from '../img/testimonials/testimonials-2.jpg'
import img3 from '../img/testimonials/testimonials-3.jpg'
import img4 from '../img/testimonials/testimonials-4.jpg'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Mutual funds have truly democratized wealth creation. With minimal effort, I have witnessed my money grow steadily, thanks to the smart and strategic approach of professional fund managers.',
      name: 'Guna',
      job: 'Designer | Developer',
      stars: 4,
      imageSrc: img1,
    },
    {
      quote: 'Choosing mutual funds was the best decision for my financial goals. The transparency, flexibility, and impressive returns have made it a reliable avenue, aligning perfectly with my long-term investment strategy.',
      name: '~  Naveen',
      job: 'Designer | Developer',
      stars: 4,
      imageSrc: img2,
    },
    {
      quote: 'Mutual funds have exceeded my expectations. The simplicity of investing coupled with impressive returns has made it the ideal choice for anyone looking to build a strong and resilient financial portfolio.',
      name: '~  Ragul',
      job: 'Designer | Developer',
      stars: 4,
      imageSrc: img3,
    },
    {
      quote: 'Investing in mutual funds has been a game-changer for me. The consistent returns and professional management have not only secured my financial future but also made the investment journey stress-free.',
      name: '~  Hari',
      job: 'Designer | Developer',
      stars: 4,
      imageSrc: img4,
    },
    {
      quote: 'Ive found my financial partner in mutual funds. The diverse portfolio options and expert guidance have not only grown my wealth but also provided peace of mind in the ever-changing market.',
      name: '~  Mothishvaran',
      job: 'Designer | Developer',
      stars: 4,
      imageSrc: img1,
    },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
    <div className='overflow-hidden'>
  <div className="section-title new">
<h2>Clients</h2>
      <h3>Our <span>Testimonials</span></h3>
    </div>

    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, index) => (
        <div className="box" key={index}>
          <i className="fas fa-quote-left quote"></i>
          <p>{testimonial.quote}</p>
          <div className="content">
            <div className="info">
              <div className="name">{testimonial.name}</div>
              {/* <div className="job">{testimonial.job}</div> */}
              <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={i < testimonial.stars ? "bi bi-star-fill" : "bi bi-star"}
                    ></i>
                  ))}
                </div>
            </div>
            {/* <div className="image">
              <img src={testimonial.imageSrc} alt="img" style={{alignItems:"center",justifyContent:"center"}} />
            </div> */}
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Testimonials;
