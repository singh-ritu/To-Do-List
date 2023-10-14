import React from "react";

function Inputs(props) {
  return (
    <input
      type="text"
      placeholder="Enter your todos"
      onChange={props.handleChange}
      onKeyDown={props.handleEnterKey}
      value={props.input}
      style={{
        border: "1px solid",
        borderRadius: "4px",
        padding: "8px 16px",
      }}
    ></input>
  );
}

export default Inputs;
