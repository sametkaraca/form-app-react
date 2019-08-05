import React from "react";

export default props => {
  const { name, label, value, onChange, rows } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <textarea
        className="form-control"
        id={name}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};
