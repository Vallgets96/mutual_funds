import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import Guna from "./Images/guna.jpeg";
import Naveen from "./Images/naveen.jpeg";
import Mothee from "./Images/momo.jpg";
import Rahul from "./Images/rahul.png";
let clients = [
  {
    name: "Guna",
    img_url: Guna,
    stars: 3,
    disc: `Mutual funds have truly democratized wealth creation. With minimal effort, I have witnessed my money grow steadily, thanks to the smart and strategic approach of professional fund managers.`,
  },
  {
    name: "Mothee",

    img_url: Mothee,
    stars: 4,
    disc: `Choosing mutual funds was the best decision for my financial goals. The transparency, flexibility, and impressive returns have made it a reliable avenue, aligning perfectly with my long-term investment strategy.`,
  },
  {
    name: "Naveen Raj",

    img_url: Naveen,
    stars: 5,
    disc: `Ive found my financial partner in mutual funds. The diverse portfolio options and expert guidance have not only grown my wealth but also provided peace of mind in the ever-changing market`,
  },
  {
    name: "Rahul",
    img_url: Rahul,
    stars: 5,
    disc: `Investing in mutual funds has been a game-changer for me. The consistent returns and professional management have not only secured my financial future but also made the investment journey stress-free.`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <div className="section-title new" data-aos="fade-in">
        <h2>Feedback</h2>
        <h3>
          Testimonial <span>Tales</span>
        </h3>
      </div>

      <Testimonials>
        <Slider style={{ color: "#111e6c" }} ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons style={{display:"flex", gap:"10px"}}>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack style={{ color: "#111e6c", fontSize:"30px" }} />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward style={{ color: "#111e6c" ,fontSize:"30px"}} />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #111e6c;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
