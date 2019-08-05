import React from "react";

export default ({ label, name, payment, onChangeHandler }) => (
  <div className="form-check my-3">
    <input
      className="form-check-input"
      type="radio"
      id={name}
      name={name}
      value={payment}
      onChange={onChangeHandler}
    />
    <label className="form-check-label" htmlFor={name}>
      {label}
    </label>
  </div>
);
