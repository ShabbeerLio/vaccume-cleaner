import React from "react";
import "./Walkthrough.css";
import Form from "../Form/Form";
import walkimg from "../../Assets/Walkthrough/walkthrough.png"
import high from "../../Assets/Highlights/highlights.png"


const Walkthrough = () => {
  return (
    <div className="Walkthrough">
      <div className="Walkthrough-main">
        {/* <h2>Cost-Effective Solutions for Tough Cleaning Jobs</h2> */}
        <div className="walkthrough-item">
          <div className="walkthrough-left">
            <h2>Cost-Effective Solutions </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis? Est tempore, similique dolor esse expedita harum natus fuga perferendis debitis, quisquam porro atque ipsa magni voluptate distinctio ullam asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis? Est tempore, similique dolor esse expedita harum natus fuga perferendis debitis, quisquam porro atque ipsa magni voluptate distinctio ullam asperiores?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis? Est tempore, similique dolor esse expedita harum natus fuga perferendis debitis, quisquam porro atque ipsa magni voluptate distinctio ullam asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis? Est tempore, similique dolor esse expedita harum natus fuga perferendis debitis, quisquam porro atque ipsa magni voluptate distinctio ullam asperiores?</p>
            </div>
          <div className="walkthrough-right">
            <div className="walkthrough-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
