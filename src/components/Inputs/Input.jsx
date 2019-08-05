import React from "react";

export default ({ name, label, value, error, onChange, type }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      className="form-control"
      value={value}
      id={name}
      onChange={onChange}
      name={name}
      type={type}
    />
    {error && <div className="invalid-feedback d-block">{error}</div>}
  </div>
);
