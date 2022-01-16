import React from "react";

import "./button.css";

export const Button = ({ handleClick, text, color }) => (
    <button style={{background: color}} className="btn" onClick={handleClick}>{text}</button>
);