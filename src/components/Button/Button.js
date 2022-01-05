import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./button.css";

const Button = ({ children, url, white, footer }) => {
  const history = useHistory();
  return (
    <button
      className={(white && "white") || (footer && "footer")}
      onClick={() => history.push(url)}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
