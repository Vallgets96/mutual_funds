import React from "react";
import "../Style.css";

const Faq = () => {
  return (
    <div>
      <section id="Faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <h3>
              Assistance <span>Corner</span>
            </h3>
          </div>
          <div className="section row justify-content-center mt-5 ">
            <div className="col-xl-10">
              <ul className="faq-list">
                <li>
                  <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#faq1"
                  >
                    What are the Benefits of Mutual Funds?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Mutual funds offer benefits such as professional
                      management, providing expertise to navigate market
                      complexities. They offer liquidity, allowing easy buying
                      and selling. Additionally, they provide accessibility for
                      individuals with small assets and ensure transparency
                      through regular reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question"
                  >
                    What are the risks in Mutual Funds?
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Mutual fund risks include market-driven fluctuations in
                      returns, regulatory impact from tax rule changes, and
                      liquidity risks due to investments in less liquid assets,
                      especially during economic downturns.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question"
                  >
                    How to buy a Mutual fund?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Step 1: Open an Account with our MR distributors.
                      <br />
                      Step 2: Read the prospectus carefully which contains
                      (investor objectives, risks, Fee table, and shareholder
                      information)
                      <br />
                      Step 3: Research the funds based on your investment, goals
                      and time horizon and choose a plan wisely.
                      <br />
                      Step 4: Choose payment type: SIP or Lumpsum.
                      <br />
                      Step 5: Verify KYC details.
                      <br />
                      Step 6: Fill in your PAN card and bank details.
                      <br />
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question"
                  >
                    How to sell a Mutual Fund?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      To sell a Mutual Fund, use the online portal created by MR
                      distributors. Redeem units as needed, choosing partial or
                      full sale. Confirm transactions online. Alternatively,
                      visit our office for offline redemption.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question"
                  >
                    Mention the considerations in Mutual Funds.{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      MR Distributors adhere to SEBI regulations for fees.
                      Recognize potential financial consequences when selling
                      mutual funds, especially for long-term holdings.<br/> Timing of
                      the Market: Mutual fund prices are based on the NAV at the
                      end of the trading day. Unlike stocks, you can't place
                      real-time market orders. Consider these factors.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
