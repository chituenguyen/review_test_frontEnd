import React, { useEffect } from "react";
import "./styles.scss";

const CustomInput = ({
  label,
  id,
  type,
  placeholder,
  children,
  register,
  check = false,
  requirementField = true,
  visibility = false,
  className,
  radius,
  height,
  border,
  icon,
  setValue,
  subtitle,
  width,
  defaultValue,
  checkNumber = false,
}) => {
  useEffect(() => {
    if (check) {
      setValue(id, defaultValue);
    }
  }, [check, id, defaultValue, setValue]);

  return (
    <div
      className={`custom-input ${className ? className : ""} `}
      style={{ width: width ? width : "100%" }}
    >
      <label htmlFor={id} className="custom-input__label">
        {label}
        {requirementField && <span className="field-requirment">*</span>}
      </label>
      <div
        className={` ${type === "file" && "file-input"}
          ${
            check
              ? "custom-input__textfield-disabled"
              : "custom-input__textfield"
          }
          
        `}
      >
        {icon}
        <input
          style={{
            borderRadius: radius ? radius : "",
            height: height ? height : "",
            border: border ? border : "",
          }}
          id={id}
          placeholder={placeholder}
          disabled={check}
          {...register(id)}
          defaultValue={defaultValue}
        />

        <p className="custom-input__error" id={id}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default CustomInput;
