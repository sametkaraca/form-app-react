import React from "react";

export default ({ name, options }) => (
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect2">{name}</label>
    <select className="form-control" id={name}>
      {options.map(option => (
        <option key={option.id}>{option.name}</option>
      ))}
    </select>
  </div>
);
