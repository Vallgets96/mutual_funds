import React from 'react';
import '../Style.css'
import logo from '../img/logo.png'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

 
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
    });

    AOS.refresh();

    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > header.offsetHeight) {
        navbar.classList.add('sticky-top');
      } else {
        navbar.classList.remove('sticky-top');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up AOS on component unmount
    return () => {
      AOS.refreshHard();
      window.removeEventListener('scroll', handleScroll);
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
  
  on('click', '.mobile-nav-toggle', function (e) {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  
  return (
    <>
    
     <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">Mrdistributionservicescbe@gmail.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span> 0422 4369618</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </section>
  <header id="header" className="d-flex align-items-center sticky-top">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="#hero"><img className="logo" src={logo} /></a></h1>
      {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>*/}
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">HOME</a></li>
          <li><a className="nav-link scrollto" href="#about">ABOUT</a></li>
          <li><a className="nav-link scrollto" href="#services">SERVICES</a></li>
          <li><a className="nav-link scrollto " href="#Gallery">GALLERY</a></li>
          <li><a className="nav-link scrollto" href="#contact">CONTACT</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    </div>
  </header>
  <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay={100}>
      <h1>Welcome to <span>MR DISTRIBUTION</span></h1>
      <h2>
        Your Path to Financial Success Starts Here.
      </h2>
      <div className="d-flex">
        <a href="#contact" className="btn-get-started scrollto">Get Started</a>
        <a href="https://youtu.be/PbldLCsspgE?si=Fqr4ktdcEmXtbgXk" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
      </div>
    </div>
  </section>
  </>
  );
};

export default Home;