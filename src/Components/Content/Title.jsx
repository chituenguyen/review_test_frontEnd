import React from "react";
import "./styles.scss";

const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>If you joke wrong away, your teeth have to pay.</p>
    </div>
  );
};

export default Title;
