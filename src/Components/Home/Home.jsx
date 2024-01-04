// import React from "react";
// import "../Style.css";
// import logo from "../img/logo.png";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       offset: 100,
//       easing: "ease-in-out",
//     });

//     AOS.refresh();

//     const header = document.getElementById("header");
//     const navbar = document.getElementById("navbar");

//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       if (scrollY > header.offsetHeight) {
//         navbar.classList.add("sticky-top");
//       } else {
//         navbar.classList.remove("sticky-top");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Clean up AOS on component unmount
//     return () => {
//       AOS.refreshHard();
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const on = (event, selector, callback) => {
//     document.addEventListener(event, function (e) {
//       const target = e.target.closest(selector);
//       if (target) {
//         callback.call(target, e);
//       }
//     });
//   };

//   on("click", ".mobile-nav-toggle", function (e) {
//     const navbar = document.getElementById("navbar");
//     navbar.classList.toggle("navbar-mobile");
//     this.classList.toggle("bi-list");
//     this.classList.toggle("bi-x");
//   });

//   return (
//     <>
//       <section id="topbar" className="d-flex align-items-center">
//         <div className="container d-flex justify-content-center justify-content-md-between">
//           <div className="contact-info d-flex align-items-center" id="contact">
//             <i className="bi bi-envelope d-flex align-items-center">
//               <a href="mailto:contact@example.com">
//                 mrdistributionservicescbe@gmail.com
//               </a>
//             </i>
//             <i className="bi bi-phone d-flex align-items-center ms-4">
//               <span> 04224 369618</span>
//             </i>
//           </div>
//           <div className="social-links d-none d-md-flex align-items-center">
//             <a href="https://twitter.com/" className="twitter">
//               <i class="bi bi-twitter-x"></i>
//             </a>
//             <a href="https://www.facebook.com/" className="facebook">
//               <i className="bi bi-facebook" />
//             </a>
//             <a
//               href="https://www.instagram.com/reel/C1b-SoYN7Zq/?igsh=MW1ybDEwc2QyaHRoMw=="
//               className="instagram"
//             >
//               <i className="bi bi-instagram" />
//             </a>
//           </div>
//         </div>
//       </section>
//       <header id="header" className="d-flex align-items-center sticky-top">
//         <div className="container d-flex align-items-center justify-content-between">
//           <h1 className="logo">
//             <a href="#hero">
//               <img className="logo" src={logo} />
//             </a>
//           </h1>
//           {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>*/}
//           <nav id="navbar" className="navbar">
//             <ul>
//               <li>
//                 <a className="nav-link scrollto" href="#hero">
//                   HOME
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="#owner">
//                   ABOUT
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="#services">
//                   SERVICES
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto " href="#Faq">
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="#contact">
//                   CONTACT
//                 </a>
//               </li>
//             </ul>
//             <i className="bi bi-list mobile-nav-toggle" />
//           </nav>
//         </div>
//       </header>

//       <section id="hero" className="hero">
//         <img src={require("../img/hero-bg.jpg")} data-aos="fade-in" />

//         <div class="container">
//           <div class="row" id="mr">
//             <div class="col-lg-10">
//               <h2
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//                 className="mt-5 text-light"
//                 id="font"
//               >
//                 Welcome to MR Distribution
//               </h2>
//               <p data-aos="fade-up" data-aos-delay="200">
//                 Your Path to Financial Success Starts Here.
//               </p>
//             </div>
//             <div class="col-lg-5">
//               <a href="#services">
//                 <input
//                   data-aos="fade-up"
//                   type="submit"
//                   className="  mt-5 p-3 btn btn-primary"
//                   value="Get Started"
//                   id="newtitle"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import "../Style.css";
// import logo from "../img/logo.png";

// import { useEffect, useState } from "react"
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Home = () => {

  
//   const [activeLink, setActiveLink] = useState("HOME")




//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       offset: 100,
//       easing: "ease-in-out",
//     });

//     AOS.refresh();

//     const header = document.getElementById("header");
//     const navbar = document.getElementById("navbar");

//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       if (scrollY > header.offsetHeight) {
//         navbar.classList.add("sticky-top");
//       } else {
//         navbar.classList.remove("sticky-top");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Clean up AOS on component unmount
//     return () => {
//       AOS.refreshHard();
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const on = (event, selector, callback) => {
//     document.addEventListener(event, function (e) {
//       const target = e.target.closest(selector);
//       if (target) {
//         callback.call(target, e);
//       }
//     });
//   };
//   const handleNavClick = (link) => {
//     setActiveLink(link);
//   };

//   on("click", ".mobile-nav-toggle", function (e) {
//     const navbar = document.getElementById("navbar");
//     navbar.classList.toggle("navbar-mobile");
//     this.classList.toggle("bi-list");
//     this.classList.toggle("bi-x");
//   });

//   return (
//     <>
//       <section id="topbar" className="d-flex align-items-center">
//         <div className="container d-flex justify-content-center justify-content-md-between">
//           <div className="contact-info d-flex align-items-center" id="contact">
//             <i className="bi bi-envelope d-flex align-items-center">
//               <a href="mailto:contact@example.com">
//                 mrdistributionservicescbe@gmail.com
//               </a>
//             </i>
//             <i className="bi bi-phone d-flex align-items-center ms-4">
//               <span> 04224 369618</span>
//             </i>
//           </div>
//           <div className="social-links d-none d-md-flex align-items-center">
//             <a href="https://twitter.com/" className="twitter">
//               <i class="bi bi-twitter-x"></i>
//             </a>
//             <a href="https://www.facebook.com/" className="facebook">
//               <i className="bi bi-facebook" />
//             </a>
//             <a
//               href="https://www.instagram.com/reel/C1b-SoYN7Zq/?igsh=MW1ybDEwc2QyaHRoMw=="
//               className="instagram"
//             >
//               <i className="bi bi-instagram" />
//             </a>
//           </div>
//         </div>
//       </section>
//       <header id="header" className="d-flex align-items-center sticky-top">
//         <div className="container d-flex align-items-center justify-content-between">
//           <h1 className="logo">
//             <a href="#hero">
//               <img className="logo" src={logo} alt="Logo" />
//             </a>
//           </h1>
//           <nav id="navbar" className="navbar">
//             <ul>
//               <li>
//                 <a
//                   className={`nav-link scrollto ${
//                     activeLink === "HOME" ? "active" : ""
//                   }`}
//                   href="#hero"
//                   onClick={() => handleNavClick("HOME")}
//                 >
//                   HOME
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`nav-link scrollto ${
//                     activeLink === "ABOUT" ? "active" : ""
//                   }`}
//                   href="#owner"
//                   onClick={() => handleNavClick("ABOUT")}
//                 >
//                   ABOUT
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`nav-link scrollto ${
//                     activeLink === "SERVICES" ? "active" : ""
//                   }`}
//                   href="#services"
//                   onClick={() => handleNavClick("SERVICES")}
//                 >
//                   SERVICES
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`nav-link scrollto ${
//                     activeLink === "FAQ" ? "active" : ""
//                   }`}
//                   href="#Faq"
//                   onClick={() => handleNavClick("FAQ")}
//                 >
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`nav-link scrollto ${
//                     activeLink === "CONTACT" ? "active" : ""
//                   }`}
//                   href="#Contact"
//                   onClick={() => handleNavClick("CONTACT")}
//                 >
//                   CONTACT
//                 </a>
//               </li>
//               {/* ... (repeat for other navigation links) */}
//             </ul>
//             <i className="bi bi-list mobile-nav-toggle" />
//           </nav>
//         </div>
//       </header>

//       <section id="hero" className="hero">
//         <img src={require("../img/hero-bg.jpg")} data-aos="fade-in" />

//         <div class="container">
//           <div class="row" id="mr">
//             <div class="col-lg-10">
//               <h2
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//                 className="mt-5 text-light"
//                 id="font"
//               >
//                 Welcome to MR Distribution
//               </h2>
//               <p data-aos="fade-up" data-aos-delay="200">
//                 Your Path to Financial Success Starts Here.
//               </p>
//             </div>
//             <div class="col-lg-5">
//               <a href="#services">
//                 <input
//                   data-aos="fade-up"
//                   type="submit"
//                   className="  mt-5 p-3 btn btn-primary"
//                   value="Get Started"
//                   id="newtitle"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import "../Style.css";
import logo from "../img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();

    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > header.offsetHeight) {
        navbar.classList.add("sticky-top");
      } else {
        navbar.classList.remove("sticky-top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      AOS.refreshHard();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const on = (event, selector, callback) => {
    document.addEventListener(event, function (e) {
      const target = e.target.closest(selector);
      if (target) {
        callback.call(target, e);
      }
    });
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    toggleMobileNavbar(); // Close the mobile navbar after clicking a link
  };

  const toggleMobileNavbar = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-mobile");
  };

  on("click", ".mobile-nav-toggle", toggleMobileNavbar);

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center" id="contact">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">
                mrdistributionservicescbe@gmail.com
              </a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span> 04224 369618</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="https://twitter.com/" className="twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.facebook.com/" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a
              href="https://www.instagram.com/reel/C1b-SoYN7Zq/?igsh=MW1ybDEwc2QyaHRoMw=="
              className="instagram"
            >
              <i className="bi bi-instagram" />
            </a>
          </div>
        </div>
      </section>
      <header id="header" className="d-flex align-items-center sticky-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="#hero">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeLink === "HOME" ? "active" : ""
                  }`}
                  href="#hero"
                  onClick={() => handleNavClick("HOME")}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeLink === "ABOUT" ? "active" : ""
                  }`}
                  href="#owner"
                  onClick={() => handleNavClick("ABOUT")}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeLink === "SERVICES" ? "active" : ""
                  }`}
                  href="#services"
                  onClick={() => handleNavClick("SERVICES")}
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeLink === "FAQ" ? "active" : ""
                  }`}
                  href="#Faq"
                  onClick={() => handleNavClick("FAQ")}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeLink === "CONTACT" ? "active" : ""
                  }`}
                  href="#Contact"
                  onClick={() => handleNavClick("CONTACT")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNavbar} />
          </nav>
        </div>
      </header>
      <section id="hero" className="hero">
        <img src={require("../img/hero-bg.jpg")} data-aos="fade-in" />
        <div className="container">
          <div className="row" id="mr">
            <div className="col-lg-10">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-5 text-light"
                id="font"
              >
                Welcome to MR Distribution
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Your Path to Financial Success Starts Here.
              </p>
            </div>
            <div className="col-lg-5">
              <a href="#services">
                <input
                  data-aos="fade-up"
                  type="submit"
                  className="  mt-5 p-3 btn btn-primary"
                  value="Get Started"
                  id="newtitle"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

