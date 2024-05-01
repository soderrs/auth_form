import React, { useId, useState } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

const Input: React.FC<InputProps> = ({
  placeholderValue,
  type = "text",
  value,
  onChange,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(value !== "");
  };

  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className={`${styles.Container} ${
          isFocused || value !== "" ? styles.Active : ""
        }`}
      >
       
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id}
        placeholder={placeholderValue}
        
        className={`${styles.Input} ${
          isFocused || value !== "" ? styles.ActiveInput : ""
        }`}
        {...(required && { required: true })}
      />
    </div>
  );
};

export default Input;
