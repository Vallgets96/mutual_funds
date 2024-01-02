import React from "react";

const Mission = () => {
  return (
    <div className="d-flex flex-row row">
      <div
        className="Border ms-5 p-5 bg-light rounded shadow-lg col-lg-2"
        id="box1"
        style={{ width: "500px" }}
      >
        <h2 className="text-center">Mission</h2>
        <img
          className="ms-5"
          src={require("../img/mission.jpg")}
          width={"400px"}
          height={"300px"}
          alt=""
        />

        <p className="text-center">
          Our mission is to help investors achieve their financial goals by
          utilizing prudent investment strategies and an unwavering commitment
          to excellence. Three key pillars that define our mission are Financial
          Empowerment, Expert Advice, Trust, and Transparency.
        </p>
      </div>

      <div
        className="ms-5 Border  p-5 bg-light rounded shadow-lg col-lg-2"
        style={{ width: "500px" }}
      >
        <h2>Vision</h2>
        <img
          src={require("../img/vision.jpg")}
          width={"400px"}
          height={"300px"}
        />

        <p className="text-centre">
          {" "}
          Our vision is to be the driving force behind a society in which every
          person, regardless of background, can confidently navigate the path to
          financial success.
        </p>
      </div>
    </div>
  );
};

export default Mission;
