import React from "react";
import "./static.css";

function StaticPart() {
  return (
    <div className="main">
      <div className="first">
        <h1>Where Fitness Meets Fun and Results Are Achieved</h1>
        <p>
          Include an inspiring image or video that showcases your gym's
          energetic atmosphere, trainers, or members working out.
        </p>
      </div>
      <div className="second">
        <div className="left">
          <div className="upper">
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
              alt=""
            />
            <img
              src="https://barbend.com/wp-content/uploads/2023/04/Barbend.com-A-bodybuilder-doing-a-single-arm-dumbbell-row-650x365.jpg"
              alt=""
            />
          </div>
          <div className="lower">
            <img
              src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right">
        <div className="lower">
            <img
              src="https://wallpaperaccess.com/full/1087621.jpg"
              alt=""
            />
          </div>
          <div className="upper">
            <img
              src="https://wallpapercave.com/wp/wp6331008.jpg"
              alt=""
            />
            <img
              src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticPart;
