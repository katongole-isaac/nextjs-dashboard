/**
 * Input Component
 *
 */
import React from "react";

const Input = ({
  label,
  value,
  name,
  error,
  type = "text",
  onChange,
  placeholder,
}) => {
  return (
    <React.Fragment>
      <label htmlFor="exampleInputEmail1"> {label} </label>
      <input
        type={type}
        className="form-control"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        autoComplete="off"
      />
      {error && (
        <div className="alert alert-danger mt-2 p-1">
          <small>{error}</small>
        </div>
      )}
    </React.Fragment>
  );
};

export default Input;
