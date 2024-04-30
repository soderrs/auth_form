import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import React from "react";

const Button: React.FC<ButtonProps> = ({ value, styleType, onClick }) => {
  const buttonClassName = styleType ? styles[styleType] : styles.Button1;
  const buttonText = value ? value : "Submit";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <button onClick={handleClick} className={buttonClassName}>
      {buttonText}
    </button>
  );
};

export default Button;
