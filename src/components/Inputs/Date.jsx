import React from "react";

export default ({ onInputChangeHandler }) => (
  <div className="form-group date">
    <label htmlFor="date">Date</label>
    <input
      id="date"
      name="date"
      type="date"
      className="form-control"
      onChange={e => onInputChangeHandler(e, "date")}
    />
  </div>
);
