// import React from "react";

// const Mission = () => {
//   return (
//     <div className="d-flex flex-row   " id="margin">
//       <div
//         className="Border ms-5 p-5 pt-3 justify-center bg-light rounded shadow-lg  "
//         style={{ width: "500px" }}
//       >
//         <h2 className="text-center mt-4 fw-bold" id="color">
//           Mission
//         </h2>
//         <img
//           className="mt-1"
//           src={require("../img/mission.jpg")}
//           width={"400px"}
//           height={"300px"}
//           alt=""
//         />

//         <p className="text-center mt-3">
//           Our mission is to help investors achieve their financial goals by
//           utilizing prudent investment strategies and an unwavering commitment
//           to excellence. Three key pillars that define our mission are Financial
//           Empowerment, Expert Advice, Trust, and Transparency.
//         </p>
//       </div>

//       <div
//         className="ms-5 Border p-5 pt-3    bg-light rounded shadow-lg col-lg-2"
//         style={{ width: "500px" }}
//       >
//         <h2 className="text-center mt-4 fw-bold" id="color">
//           Vision
//         </h2>
//         <img
//           src={require("../img/vision.jpg")}
//           width={"400px"}
//           height={"300px"}
//           className="mt-1"
//         />

//         <p className="text-center mt-3">
//           {" "}
//           Our vision is to be the driving force behind a society in which every
//           person, regardless of background, can confidently navigate the path to
//           financial success.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Mission;
import React from "react";

const Mission = () => {
  return (
    <>
      <div className="section-title new" data-aos="fade-in">
        <h2 data-aos="fade-in">MOTTO</h2>
        <h3 data-aos="fade-in">
          Inspiring <span> Tomorrow, Today</span>
        </h3>
      </div>

      <div
        className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-5"
        id="margin"
        data-aos="fade-in"
      >
        <div
          className="Border mx-md-5 my-3 p-md-5 p-3 justify-center bg-light rounded shadow-lg"
          style={{ maxWidth: "500px", height: "600px" }}
          data-aos="fade-in"
        >
          <h2 className="text-center  fw-bold" id="color" data-aos="fade-in">
            Our Mission
          </h2>
          <img
            className="img-fluid mx-auto mt-1 ms-5"
            src={require("../img/mission.jpg")}
            width={"300px"}
            height={"100px"}
            alt=""
            data-aos="fade-in"
          />

          <p className="text-center mt-3" data-aos="fade-in">
            Our mission is to help investors achieve their financial goals by
            utilizing prudent investment strategies and an unwavering commitment
            to excellence. Three key pillars that define our mission are
            Financial Empowerment, Expert Advice, Trust, and Transparency.
          </p>
        </div>

        <div
          data-aos="fade-in"
          className="Border mx-md-5 my-3 p-md-5 p-3 bg-light rounded shadow-lg"
          style={{ maxWidth: "500px", height: "600px" }}
        >
          <h2 data-aos="fade-in" className="text-center  fw-bold" id="color">
            Our Vision
          </h2>
          <img
            data-aos="fade-in"
            className="img-fluid mx-auto mt-1 ms-5 align-items-center"
            src={require("../img/vision.jpeg")}
            width={"300px"}
            alt=""
          />

          <p data-aos="fade-in" className="text-center mt-3 ">
            Our vision is to be the driving force behind a society in which
            every person, regardless of background, can confidently navigate the
            path to financial success.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
