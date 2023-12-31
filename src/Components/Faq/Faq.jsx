import React from 'react'
import '../Style.css'

const Faq = () => {
  return (
    <div>
        <section id="faq" className="faq section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>F.A.Q</h2>
      <h3>Frequently Asked <span>Questions</span></h3>
    </div>
    <div className="section row justify-content-center ">
      <div className="col-xl-10">
        <ul className="faq-list">
          <li>
            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What are the Benefits of Mutual Funds? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Fund managers with experience manage investments, applying their expertise in settling Market complexities 
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">What are the risks in Mutual Funds?<i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Returns on investments made through mutual funds may change depending on the state of the market.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">How to buy a Mutual fund? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Step 1: Open an Account with our MR distributors.
                Step 2: read the prospectus carefully which contains (investor objectives, risks, Fee table, and  shareholder information)
                Step 3: Research the funds based on your investment, goals and time horizon and choose a plan wisely.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">How to sell a Mutual Fund? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                you can redeem using the online portal or account which was created by MR distributors. You can choose to sell some units or all, as per your requirements and confirm the transactions.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Important considerations in Mutual Funds? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                The fees charged by MR Distributors are regulated by the Security and Exchange Board of India(SEBI) Recognise the possible financial consequences of selling mutual funds, particularly if you have owned them for a long time.
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

export default Faq